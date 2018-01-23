import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, IUser } from '../../user-service/user.service';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.sass']
})
export class HomeViewComponent {
  public users: IUser[];

  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.getUsers();
  }

  ageCategoryTransform(id: string) {
    return this.userService.ageCategoryTransform(id);
  }

  sexTransform(id: string) {
    return this.userService.sexTransform(id);
  }

  edit(id: string) {
    this.router.navigate(['form'], { queryParams: { id } });
  }
}
