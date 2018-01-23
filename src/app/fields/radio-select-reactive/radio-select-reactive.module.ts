import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RadioSelectReactiveComponent } from './radio-select-reactive.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [RadioSelectReactiveComponent],
  entryComponents: [RadioSelectReactiveComponent],
  exports: [RadioSelectReactiveComponent]
})
export class RadioSelectReactiveModule {}
