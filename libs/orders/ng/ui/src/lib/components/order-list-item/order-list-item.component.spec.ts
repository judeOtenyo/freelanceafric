import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListItemComponent } from './order-list-item.component';

describe('OrderListItemComponent', () => {
  let component: OrderListItemComponent;
  let fixture: ComponentFixture<OrderListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
