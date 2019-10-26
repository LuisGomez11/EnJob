import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBonusComponent } from './admin-bonus.component';

describe('AdminBonusComponent', () => {
  let component: AdminBonusComponent;
  let fixture: ComponentFixture<AdminBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
