import {
  Component,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

import { ComponentFactory } from '../component-factory/component-factory.service';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent implements OnDestroy {
  @Input() formClass: string;
  @Input() formBodyClass: string;
  @Input() formFooterClass: string;

  @Output() formSubmit = new EventEmitter();

  @ViewChild('formContent', { read: ViewContainerRef })
  private formContent: ViewContainerRef;
  private componentRefs: ComponentRef<any>[] = [];

  constructor(private componentFactory: ComponentFactory) { }

  ngOnDestroy() {
    this.componentRefs.forEach(componentRef => componentRef.destroy());
  }

  addField(component: any, bindings?) {
    const componentRef = this.componentFactory.create(component, bindings);

    this.formContent.insert(componentRef.hostView);
    this.componentRefs.push(componentRef);

    return this;
  }

  submit() {
    this.formSubmit.emit();
  }
}
