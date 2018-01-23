import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReactiveComponent } from './select-reactive.component';

describe('SelectReactiveComponent', () => {
  let component: SelectReactiveComponent;
  let fixture: ComponentFixture<SelectReactiveComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SelectReactiveComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
