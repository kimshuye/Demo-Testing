import { TestBed , async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductItemComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
