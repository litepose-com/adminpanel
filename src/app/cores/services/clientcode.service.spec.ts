import { TestBed } from '@angular/core/testing';

import { ClientcodeService } from './clientcode.service';

describe('ClientcodeService', () => {
  let service: ClientcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
