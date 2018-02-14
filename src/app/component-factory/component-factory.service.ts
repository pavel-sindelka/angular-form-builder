import { Injectable, ComponentFactoryResolver, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

interface IBindings {
  inputs?: {
    [propName: string]:
    | any
    | {
      subject: BehaviorSubject<any>;
      property?: string;
    };
  };
  outputs?: {
    [propName: string]:
    | any
    | {
      subject: BehaviorSubject<any>;
      property?: string;
    };
  };
}

@Injectable()
export class ComponentFactory {
  constructor(
    private compiler: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  create(component: any, bindings?: IBindings) {
    const componentFactory = this.compiler.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);

    if (!bindings) {
      return componentRef;
    }

    const destroy = '__destroy';
    const instance = componentRef.instance;
    instance[destroy] = new Subject();
    componentRef.onDestroy(() => {
      instance[destroy].next();
      instance[destroy].unsubscribe();
    });

    if (bindings.hasOwnProperty('inputs')) {
      Object.keys(bindings.inputs).forEach(property => {
        const input = bindings.inputs[property];
        if (!input.hasOwnProperty('subject')) {
          instance[property] = bindings.inputs[property];
        } else {
          input.subject
            .takeUntil(instance[destroy])
            .subscribe(
            value =>
              (instance[property] = input.property ? value[input.property] : value)
            );
        }
      });
    }

    if (bindings.hasOwnProperty('outputs')) {
      Object.keys(bindings.outputs)
        .filter(property => instance[property])
        .forEach(property => {
          const output = bindings.outputs[property];
          const outputIsFunc = typeof output === 'function';

          instance[property]
            .takeUntil(instance[destroy])
            .subscribe(outputIsFunc ? output : value => {
              if (output.property) {
                output.subject.next({
                  ...output.subject.getValue(),
                  [output.property]: value
                });
              } else {
                output.subject.next(value);
              }
            });
        });
    }

    return componentRef;
  }
}
