import { TestBed } from '@angular/core/testing';

import { EwoksService } from './ewoks.service';

describe('EwoksService', () => {
  let service: EwoksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EwoksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
