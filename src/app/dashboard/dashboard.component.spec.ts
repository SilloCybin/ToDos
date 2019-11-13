import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import { MatCheckbox, MatList, MatListItem, MatRipple } from '@angular/material';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let spy : any;

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

  it('should fire NgOnInit on component instantiation', () => {
    spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should make addToDo behave correctly', () => {
    spy = spyOn(component, 'addToDo').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should make deleteToDo behave correctly', () => {
    spy = spyOn(component, 'deleteToDo').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should make updateToDo behave correctly', () => {
    spy = spyOn(component, 'updateToDo').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should make getToDos behave correctly', () => {
    spy = spyOn(component, 'getToDos').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
