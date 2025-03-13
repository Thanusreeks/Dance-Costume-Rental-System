import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppasswordComponent } from './shoppassword.component';

describe('ShoppasswordComponent', () => {
  let component: ShoppasswordComponent;
  let fixture: ComponentFixture<ShoppasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppasswordComponent]
    });
    fixture = TestBed.createComponent(ShoppasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
