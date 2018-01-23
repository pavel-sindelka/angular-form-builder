import { TestBed, inject } from '@angular/core/testing';

import { ComponentFactory } from './component-factory.service';

describe('ComponentFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentFactoryService]
    });
  });

  it(
    'should be created',
    inject([ComponentFactoryService], (service: ComponentFactoryService) => {
      expect(service).toBeTruthy();
    })
  );
});
