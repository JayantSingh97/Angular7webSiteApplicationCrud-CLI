import { TestBed } from '@angular/core/testing';

import { ProductSerivceService } from './product-serivce.service';

describe('ProductSerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSerivceService = TestBed.get(ProductSerivceService);
    expect(service).toBeTruthy();
  });
});
