import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanksViewComponent } from './thanks-view.component';
import { ThanksRoutingModule } from './thanks-view-routing.module';

@NgModule({
  imports: [CommonModule, ThanksRoutingModule],
  declarations: [ThanksViewComponent]
})
export class ThanksViewModule {}
