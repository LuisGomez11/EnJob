import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorTasksComponent } from './supervisor-tasks.component';

describe('SupervisorTasksComponent', () => {
  let component: SupervisorTasksComponent;
  let fixture: ComponentFixture<SupervisorTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
