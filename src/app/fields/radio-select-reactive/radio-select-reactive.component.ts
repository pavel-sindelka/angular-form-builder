import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicComponentUnsubscribeOnDestroy } from '../../component-factory/dynamic-component-unsubscribe-on-destroy';

@Component({
  selector: 'radio-select-reactive',
  templateUrl: './radio-select-reactive.component.html',
  styleUrls: ['./radio-select-reactive.component.sass']
})
@DynamicComponentUnsubscribeOnDestroy()
export class RadioSelectReactiveComponent {
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
