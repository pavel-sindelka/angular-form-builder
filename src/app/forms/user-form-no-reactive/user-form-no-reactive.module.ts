import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormNoReactiveComponent } from './user-form-no-reactive.component';
import { InputReactiveModule } from '../../fields/input-no-reactive/input-no-reactive.module';
import { FormBuilderModule } from '../../form-builder/form-builder.module';
import { ComponentFactory } from '../../component-factory/component-factory.service';

@NgModule({
  imports: [CommonModule, InputReactiveModule, FormBuilderModule],
  declarations: [UserFormNoReactiveComponent],
  providers: [ComponentFactory],
  exports: [UserFormNoReactiveComponent]
})
export class UserFormNoReactiveModule {}
