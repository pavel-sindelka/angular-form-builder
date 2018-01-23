import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectReactiveComponent } from './select-reactive.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectReactiveComponent],
  entryComponents: [SelectReactiveComponent],
  exports: [SelectReactiveComponent]
})
export class SelectReactiveModule {}
