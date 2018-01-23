import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../forms/user-form/user-form.component';
import { UserService, IUser } from '../../user-service/user.service';

@Component({
  selector: 'user-form-view',
  templateUrl: './user-form-view.component.html',
  styleUrls: ['./user-form-view.component.sass']
})
export class UserFormViewComponent implements OnInit {
  private routeChange;

  public ageCategories: any[] = [];
  public sexes: any[] = [];
  public user: IUser = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ageCategories = this.userService.getAgeCategories();
    this.sexes = this.userService.getSexes();
  }

  ngOnInit() {
    this.routeChange = this.route.queryParams.subscribe(params => {
      if (params.id) {
        const user = this.userService.getUser(params.id);
        if (user) {
          this.user = user;
        }
      }
    });
  }

  ngOnDestory() {
    this.routeChange.unsubscribe();
  }

  saveUser(user: IUser) {
    this.userService.saveUser(user);
    this.router.navigate(['thanks']);
  }
}
