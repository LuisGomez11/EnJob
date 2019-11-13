import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChangepassComponent } from './employee-changepass.component';

describe('EmployeeChangepassComponent', () => {
  let component: EmployeeChangepassComponent;
  let fixture: ComponentFixture<EmployeeChangepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeChangepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeChangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
