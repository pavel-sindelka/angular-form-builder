import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputNoReactiveComponent } from './input-no-reactive.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [InputNoReactiveComponent],
  entryComponents: [InputNoReactiveComponent],
  exports: [InputNoReactiveComponent]
})
export class InputReactiveModule {}
