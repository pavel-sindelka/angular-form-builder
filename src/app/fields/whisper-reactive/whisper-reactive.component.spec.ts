import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhisperReactiveComponent } from './whisper-reactive.component';

describe('WhisperReactiveComponent', () => {
  let component: WhisperReactiveComponent;
  let fixture: ComponentFixture<WhisperReactiveComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WhisperReactiveComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WhisperReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
