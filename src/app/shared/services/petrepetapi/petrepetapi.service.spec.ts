import { TestBed } from '@angular/core/testing';

import { PetrepetapiService } from './petrepetapi.service';

describe('PetrepetapiService', () => {
  let service: PetrepetapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetrepetapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
