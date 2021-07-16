import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsOrderbyComponent } from './view-products-orderby.component';

describe('ViewProductsOrderbyComponent', () => {
  let component: ViewProductsOrderbyComponent;
  let fixture: ComponentFixture<ViewProductsOrderbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsOrderbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductsOrderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
