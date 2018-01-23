import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormComponent } from './user-form.component';
import { FormBuilderModule } from '../../form-builder/form-builder.module';
import { ComponentFactory } from '../../component-factory/component-factory.service';
import { InputReactiveModule } from '../../fields/input-reactive/input-reactive.module';
import { SelectReactiveModule } from '../../fields/select-reactive/select-reactive.module';
import { RadioSelectReactiveModule } from '../../fields/radio-select-reactive/radio-select-reactive.module';
import { WhisperReactiveModule } from '../../fields/whisper-reactive/whisper-reactive.module';

@NgModule({
  imports: [
    CommonModule,
    FormBuilderModule,
    InputReactiveModule,
    SelectReactiveModule,
    RadioSelectReactiveModule,
    WhisperReactiveModule
  ],
  declarations: [UserFormComponent],
  providers: [ComponentFactory],
  exports: [UserFormComponent]
})
export class UserFormModule {}
