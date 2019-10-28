import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePersonalProfileComponent } from './employee-personal-profile.component';

describe('EmployeePersonalProfileComponent', () => {
  let component: EmployeePersonalProfileComponent;
  let fixture: ComponentFixture<EmployeePersonalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePersonalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
