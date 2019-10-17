import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorChatComponent } from './supervisor-chat.component';

describe('SupervisorChatComponent', () => {
  let component: SupervisorChatComponent;
  let fixture: ComponentFixture<SupervisorChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
