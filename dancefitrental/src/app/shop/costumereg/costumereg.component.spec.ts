import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeregComponent } from './costumereg.component';

describe('CostumeregComponent', () => {
  let component: CostumeregComponent;
  let fixture: ComponentFixture<CostumeregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumeregComponent]
    });
    fixture = TestBed.createComponent(CostumeregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
