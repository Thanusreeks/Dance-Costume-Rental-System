import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeeditComponent } from './costumeedit.component';

describe('CostumeeditComponent', () => {
  let component: CostumeeditComponent;
  let fixture: ComponentFixture<CostumeeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumeeditComponent]
    });
    fixture = TestBed.createComponent(CostumeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
