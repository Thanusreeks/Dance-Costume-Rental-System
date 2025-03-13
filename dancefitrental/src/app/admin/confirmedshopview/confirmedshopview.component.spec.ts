import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedshopviewComponent } from './confirmedshopview.component';

describe('ConfirmedshopviewComponent', () => {
  let component: ConfirmedshopviewComponent;
  let fixture: ComponentFixture<ConfirmedshopviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedshopviewComponent]
    });
    fixture = TestBed.createComponent(ConfirmedshopviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
