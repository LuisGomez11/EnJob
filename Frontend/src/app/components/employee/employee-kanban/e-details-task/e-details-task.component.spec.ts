import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDetailsTaskComponent } from './e-details-task.component';

describe('EDetailsTaskComponent', () => {
  let component: EDetailsTaskComponent;
  let fixture: ComponentFixture<EDetailsTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDetailsTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDetailsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
