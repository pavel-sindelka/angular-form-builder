import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormViewComponent } from './user-form-view.component';

describe('UserFormViewComponent', () => {
  let component: UserFormViewComponent;
  let fixture: ComponentFixture<UserFormViewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UserFormViewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
