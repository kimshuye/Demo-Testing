import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be Array Products', () => {
    expect(service.getData()).toBeTruthy();
  });


  it('Find id should be 1', () => {

    const id = 1;
    const expectId = 1;

    const result = service.getDataByID(id);

    expect(result.id).toEqual(expectId);
  });

});
