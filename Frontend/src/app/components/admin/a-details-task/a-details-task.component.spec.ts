import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADetailsTaskComponent } from './a-details-task.component';

describe('ADetailsTaskComponent', () => {
  let component: ADetailsTaskComponent;
  let fixture: ComponentFixture<ADetailsTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADetailsTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADetailsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
