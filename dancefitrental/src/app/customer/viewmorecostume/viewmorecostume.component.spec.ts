import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmorecostumeComponent } from './viewmorecostume.component';

describe('ViewmorecostumeComponent', () => {
  let component: ViewmorecostumeComponent;
  let fixture: ComponentFixture<ViewmorecostumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmorecostumeComponent]
    });
    fixture = TestBed.createComponent(ViewmorecostumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
