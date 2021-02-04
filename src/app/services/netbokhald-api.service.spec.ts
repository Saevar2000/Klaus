import { TestBed } from '@angular/core/testing';

import { NetbokhaldApiService } from './netbokhald-api.service';

describe('NetbokhaldApiService', () => {
  let service: NetbokhaldApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetbokhaldApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
