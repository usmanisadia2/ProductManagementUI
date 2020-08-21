import { TestBed } from '@angular/core/testing';

import { ProductWebService } from './product-web.service';

describe('ProductWebService', () => {
  let service: ProductWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
