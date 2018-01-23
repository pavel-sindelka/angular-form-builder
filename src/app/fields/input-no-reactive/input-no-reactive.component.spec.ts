import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNoReactiveComponent } from './input-no-reactive.component';

describe('InputNoReactiveComponent', () => {
  let component: InputNoReactiveComponent;
  let fixture: ComponentFixture<InputNoReactiveComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [InputNoReactiveComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
