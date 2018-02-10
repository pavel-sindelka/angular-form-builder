import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'radio-select-reactive',
  templateUrl: './radio-select-reactive.component.html',
  styleUrls: ['./radio-select-reactive.component.sass']
})
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
