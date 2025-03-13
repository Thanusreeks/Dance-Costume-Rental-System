import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestviewComponent } from './requestview.component';

describe('RequestviewComponent', () => {
  let component: RequestviewComponent;
  let fixture: ComponentFixture<RequestviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestviewComponent]
    });
    fixture = TestBed.createComponent(RequestviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
