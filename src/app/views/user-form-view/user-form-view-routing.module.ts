import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormViewComponent } from './user-form-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
