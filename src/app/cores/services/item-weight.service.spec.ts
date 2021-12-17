import { TestBed } from '@angular/core/testing';

import { ItemWeightService } from './item-weight.service';

describe('ItemWeightService', () => {
  let service: ItemWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
