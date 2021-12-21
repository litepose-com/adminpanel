import { TestBed } from '@angular/core/testing';

import { PickupStatusService } from './pickup-status.service';

describe('PickupStatusService', () => {
  let service: PickupStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickupStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
