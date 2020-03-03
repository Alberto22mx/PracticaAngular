import { TestBed } from '@angular/core/testing';

import { ServiceslocalService } from './serviceslocal.service';

describe('ServiceslocalService', () => {
  let service: ServiceslocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceslocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
