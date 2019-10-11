import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKanbanComponent } from './admin-kanban.component';

describe('AdminKanbanComponent', () => {
  let component: AdminKanbanComponent;
  let fixture: ComponentFixture<AdminKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
