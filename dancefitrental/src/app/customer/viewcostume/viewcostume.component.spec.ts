import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcostumeComponent } from './viewcostume.component';

describe('ViewcostumeComponent', () => {
  let component: ViewcostumeComponent;
  let fixture: ComponentFixture<ViewcostumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcostumeComponent]
    });
    fixture = TestBed.createComponent(ViewcostumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
