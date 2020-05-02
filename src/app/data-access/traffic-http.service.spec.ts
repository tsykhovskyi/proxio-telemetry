import { TestBed } from '@angular/core/testing';

import { TrafficHttpService } from './traffic-http.service';

describe('TrafficHttpService', () => {
  let service: TrafficHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
