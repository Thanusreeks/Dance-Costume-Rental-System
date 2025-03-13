import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedviewComponent } from './confirmedview.component';

describe('ConfirmedviewComponent', () => {
  let component: ConfirmedviewComponent;
  let fixture: ComponentFixture<ConfirmedviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedviewComponent]
    });
    fixture = TestBed.createComponent(ConfirmedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
