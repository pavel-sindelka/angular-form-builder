import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhisperReactiveComponent } from './whisper-reactive.component';
import { enterView } from '@angular/core/src/render3/instructions';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [WhisperReactiveComponent],
  entryComponents: [WhisperReactiveComponent],
  exports: [WhisperReactiveComponent]
})
export class WhisperReactiveModule {}
