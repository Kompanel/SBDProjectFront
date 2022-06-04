import { TestBed } from '@angular/core/testing';

import { BskServiceService } from './bsk-service.service';

describe('BskServiceService', () => {
  let service: BskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
