import { TestBed } from '@angular/core/testing';

import { AlquranService } from './alquran.service';

describe('AlquranService', () => {
  let service: AlquranService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlquranService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
