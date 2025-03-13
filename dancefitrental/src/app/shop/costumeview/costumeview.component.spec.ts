import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeviewComponent } from './costumeview.component';

describe('CostumeviewComponent', () => {
  let component: CostumeviewComponent;
  let fixture: ComponentFixture<CostumeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumeviewComponent]
    });
    fixture = TestBed.createComponent(CostumeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
