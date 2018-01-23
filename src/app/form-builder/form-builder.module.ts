import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FormBuilderComponent],
  entryComponents: [FormBuilderComponent],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule {}
