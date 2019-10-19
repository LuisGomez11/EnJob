import { TestBed } from '@angular/core/testing';

import { AdmineServiceService } from './admine-service.service';

describe('AdmineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmineServiceService = TestBed.get(AdmineServiceService);
    expect(service).toBeTruthy();
  });
});
