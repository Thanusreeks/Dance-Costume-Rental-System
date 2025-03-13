import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopviewComponent } from './shopview.component';

describe('ShopviewComponent', () => {
  let component: ShopviewComponent;
  let fixture: ComponentFixture<ShopviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopviewComponent]
    });
    fixture = TestBed.createComponent(ShopviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
