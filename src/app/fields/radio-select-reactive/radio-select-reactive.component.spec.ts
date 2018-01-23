import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSelectReactiveComponent } from './radio-select-reactive.component';

describe('RadioSelectReactiveComponent', () => {
  let component: RadioSelectReactiveComponent;
  let fixture: ComponentFixture<RadioSelectReactiveComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RadioSelectReactiveComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSelectReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
