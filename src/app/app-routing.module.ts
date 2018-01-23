import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/views/home-view/home-view.module#HomeViewModule'
  },
  {
    path: 'form',
    loadChildren:
      'app/views/user-form-view/user-form-view.module#UserFormViewModule'
  },
  {
    path: 'thanks',
    loadChildren: 'app/views/thanks-view/thanks-view.module#ThanksViewModule'
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
