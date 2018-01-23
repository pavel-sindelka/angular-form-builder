import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThanksViewComponent } from './thanks-view.component';

const routes: Routes = [
  {
    path: '',
    component: ThanksViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThanksRoutingModule {}
