import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopreportComponent } from './shopreport.component';

describe('ShopreportComponent', () => {
  let component: ShopreportComponent;
  let fixture: ComponentFixture<ShopreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopreportComponent]
    });
    fixture = TestBed.createComponent(ShopreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
