import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksViewComponent } from './thanks-view.component';

describe('ThanksViewComponent', () => {
  let component: ThanksViewComponent;
  let fixture: ComponentFixture<ThanksViewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ThanksViewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
