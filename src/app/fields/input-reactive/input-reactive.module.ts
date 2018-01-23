import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputReactiveComponent } from './input-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [InputReactiveComponent],
  entryComponents: [InputReactiveComponent],
  exports: [InputReactiveComponent]
})
export class InputReactiveModule {}
