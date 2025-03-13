import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopprofileComponent } from './shopprofile.component';

describe('ShopprofileComponent', () => {
  let component: ShopprofileComponent;
  let fixture: ComponentFixture<ShopprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopprofileComponent]
    });
    fixture = TestBed.createComponent(ShopprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
