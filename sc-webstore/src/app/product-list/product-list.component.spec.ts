import { TestBed , async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductListComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
