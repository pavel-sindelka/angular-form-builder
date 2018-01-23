import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormViewComponent } from './user-form-view.component';
import { AppRoutingModule } from './user-form-view-routing.module';
import { UserFormModule } from '../../forms/user-form/user-form.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, UserFormModule],
  declarations: [UserFormViewComponent]
})
export class UserFormViewModule {}
