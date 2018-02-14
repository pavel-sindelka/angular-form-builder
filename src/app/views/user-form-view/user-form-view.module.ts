import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormViewComponent } from './user-form-view.component';
import { AppRoutingModule } from './user-form-view-routing.module';
import { UserFormModule } from '../../forms/user-form/user-form.module';
import { UserFormNoReactiveModule } from '../../forms/user-form-no-reactive/user-form-no-reactive.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, UserFormModule, UserFormNoReactiveModule],
  declarations: [UserFormViewComponent]
})
export class UserFormViewModule { }
