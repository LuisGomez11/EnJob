import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestComponent } from './employee-request.component';

describe('EmployeeRequestComponent', () => {
  let component: EmployeeRequestComponent;
  let fixture: ComponentFixture<EmployeeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
