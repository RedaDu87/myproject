import { TestBed } from '@angular/core/testing';

import { AdithService } from './adith.service';

describe('AdithService', () => {
  let service: AdithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
