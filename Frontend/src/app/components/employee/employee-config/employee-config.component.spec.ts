import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeConfigComponent } from './employee-config.component';

describe('EmployeeConfigComponent', () => {
  let component: EmployeeConfigComponent;
  let fixture: ComponentFixture<EmployeeConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
