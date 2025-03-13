import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpasswordComponent } from './customerpassword.component';

describe('CustomerpasswordComponent', () => {
  let component: CustomerpasswordComponent;
  let fixture: ComponentFixture<CustomerpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerpasswordComponent]
    });
    fixture = TestBed.createComponent(CustomerpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
