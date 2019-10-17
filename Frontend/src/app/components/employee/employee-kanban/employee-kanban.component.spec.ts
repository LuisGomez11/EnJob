import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeKanbanComponent } from './employee-kanban.component';

describe('EmployeeKanbanComponent', () => {
  let component: EmployeeKanbanComponent;
  let fixture: ComponentFixture<EmployeeKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
