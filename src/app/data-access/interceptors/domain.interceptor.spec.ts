import { TestBed } from '@angular/core/testing';

import { DomainInterceptor } from './domain.interceptor';

describe('DomainInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DomainInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DomainInterceptor = TestBed.inject(DomainInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
