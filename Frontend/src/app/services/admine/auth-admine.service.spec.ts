import { TestBed } from '@angular/core/testing';

import { AuthAdmineService } from './auth-admine.service';

describe('AuthAdmineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAdmineService = TestBed.get(AuthAdmineService);
    expect(service).toBeTruthy();
  });
});
