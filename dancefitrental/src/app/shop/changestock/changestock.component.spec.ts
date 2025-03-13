import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangestockComponent } from './changestock.component';

describe('ChangestockComponent', () => {
  let component: ChangestockComponent;
  let fixture: ComponentFixture<ChangestockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangestockComponent]
    });
    fixture = TestBed.createComponent(ChangestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
