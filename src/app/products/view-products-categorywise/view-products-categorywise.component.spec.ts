import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsCategorywiseComponent } from './view-products-categorywise.component';

describe('ViewProductsCategorywiseComponent', () => {
  let component: ViewProductsCategorywiseComponent;
  let fixture: ComponentFixture<ViewProductsCategorywiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsCategorywiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductsCategorywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
