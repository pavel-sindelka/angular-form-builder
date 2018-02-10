import { Component, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'whisper-reactive',
  templateUrl: './whisper-reactive.component.html',
  styleUrls: ['./whisper-reactive.component.sass']
})
export class WhisperReactiveComponent {
  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() class: string;
  @Input() label: string;
  @Input() options: any[];

  isOpen = false;
  filteredOptions = [];

  get hasError() {
    const control = this.formGroup.get(this.formControlName);
    return control.touched && control.errors;
  }

  toggle() {
    if (!this.options.length) {
      return;
    }

    const value = this.formGroup.get(this.formControlName).value;
    const regexp = new RegExp(value + '\\w', 'i');
    this.filteredOptions = this.options.filter(option => regexp.test(option));
    if (this.filteredOptions.length) {
      this.isOpen = !!!this.isOpen;
    }
  }

  close() {
    this.isOpen = false;
  }

  select(option: string) {
    this.formGroup.get(this.formControlName).setValue(option);
    this.close();
  }
}
