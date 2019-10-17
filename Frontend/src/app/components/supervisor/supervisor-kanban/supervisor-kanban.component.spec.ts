import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorKanbanComponent } from './supervisor-kanban.component';

describe('SupervisorKanbanComponent', () => {
  let component: SupervisorKanbanComponent;
  let fixture: ComponentFixture<SupervisorKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
