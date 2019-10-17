import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorConfigComponent } from './supervisor-config.component';

describe('SupervisorConfigComponent', () => {
  let component: SupervisorConfigComponent;
  let fixture: ComponentFixture<SupervisorConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
