import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormNoReactiveComponent } from './user-form-no-reactive.component';

describe('UserFormNoReactiveComponent', () => {
  let component: UserFormNoReactiveComponent;
  let fixture: ComponentFixture<UserFormNoReactiveComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UserFormNoReactiveComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormNoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
