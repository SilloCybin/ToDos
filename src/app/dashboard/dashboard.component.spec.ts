import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import { MatCheckbox, MatList, MatListItem, MatRipple } from '@angular/material';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, ToDoListComponent, ToDoComponent, MatCheckbox, MatList, MatListItem, MatRipple ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
