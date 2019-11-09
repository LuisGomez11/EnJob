import { TestBed } from '@angular/core/testing';

import { BonificationService } from './bonification.service';

describe('BonificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonificationService = TestBed.get(BonificationService);
    expect(service).toBeTruthy();
  });
});
