import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopregComponent } from './shopreg.component';

describe('ShopregComponent', () => {
  let component: ShopregComponent;
  let fixture: ComponentFixture<ShopregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopregComponent]
    });
    fixture = TestBed.createComponent(ShopregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
