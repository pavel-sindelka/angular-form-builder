import { Component, OnInit, OnChanges, OnDestroy, Input, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FormBuilderComponent } from '../../form-builder/form-builder.component';
import { ComponentFactory } from '../../component-factory/component-factory.service';
import { InputNoReactiveComponent } from '../../fields/input-no-reactive/input-no-reactive.component';

const components = {
  input: InputNoReactiveComponent
};

export class User {
  constructor(public firstName: string = '', public lastName: string = '') { }
}

@Component({
  selector: 'user-form-no-reactive',
  templateUrl: './user-form-no-reactive.component.html',
  styleUrls: ['./user-form-no-reactive.component.sass']
})
export class UserFormNoReactiveComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: User;

  @ViewChild('formBuilder') formBuilder: FormBuilderComponent;

  private userChanged: BehaviorSubject<User> = new BehaviorSubject<User>(
    this.user
  );

  constructor(private componentFactory: ComponentFactory) { }

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('user')) {
      this.userChanged.next(changes.user.currentValue);
    }
  }

  ngOnInit() {
    this.userChanged.subscribe(user => (this.user = user));

    this.formBuilder
      .addField(components.input, {
        inputs: {
          class: 'col-sm-6',
          label: 'Firstname',
          model: {
            subject: this.userChanged,
            property: 'firstName'
          }
        },
        outputs: {
          valueChange: firstName => this.userChanged.next({
            ...this.userChanged.getValue(),
            firstName
          })
        }
      })
      .addField(components.input, {
        inputs: {
          class: 'col-sm-6',
          label: 'Lastname',
          model: {
            subject: this.userChanged,
            property: 'lastName'
          }
        },
        outputs: {
          valueChange: {
            subject: this.userChanged,
            property: 'lastName'
          }
        }
      });
  }

  ngOnDestroy() {
    this.userChanged.unsubscribe();
  }
}
