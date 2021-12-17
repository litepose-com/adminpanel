import { TestBed } from '@angular/core/testing';

import { UsercodeService } from './usercode.service';

describe('UsercodeService', () => {
  let service: UsercodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
