import { Component, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicComponentUnsubscribeOnDestroy } from '../../component-factory/dynamic-component-unsubscribe-on-destroy';

@Component({
  selector: 'select-reactive',
  templateUrl: './select-reactive.component.html',
  styleUrls: ['./select-reactive.component.sass']
})
@DynamicComponentUnsubscribeOnDestroy()
export class SelectReactiveComponent {
  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() class: string;
  @Input() label: string;
  @Input() options: any[];

  get hasError() {
    const control = this.formGroup.get(this.formControlName);
    return control.touched && control.errors;
  }
}
