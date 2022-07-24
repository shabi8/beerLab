import { TestBed } from '@angular/core/testing';

import { BeerModalService } from './beer-modal.service';

describe('BeerModalService', () => {
  let service: BeerModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
