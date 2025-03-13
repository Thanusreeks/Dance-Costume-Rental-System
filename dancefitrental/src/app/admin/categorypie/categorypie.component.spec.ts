import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorypieComponent } from './categorypie.component';

describe('CategorypieComponent', () => {
  let component: CategorypieComponent;
  let fixture: ComponentFixture<CategorypieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorypieComponent]
    });
    fixture = TestBed.createComponent(CategorypieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
