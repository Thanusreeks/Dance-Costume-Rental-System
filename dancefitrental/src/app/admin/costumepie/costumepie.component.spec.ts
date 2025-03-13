import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumepieComponent } from './costumepie.component';

describe('CostumepieComponent', () => {
  let component: CostumepieComponent;
  let fixture: ComponentFixture<CostumepieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumepieComponent]
    });
    fixture = TestBed.createComponent(CostumepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
