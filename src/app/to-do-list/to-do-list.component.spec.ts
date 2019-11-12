import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import {NO_ERRORS_SCHEMA, SimpleChange} from '@angular/core';
import { ToDo } from '../models/ToDo';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    spy = spyOn(component, 'ngOnChanges').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire ngOnChanges on instantiation of DashboardComponent', () => {
     const todo1 = new ToDo(1,
                      "Make a backup",
                      "Buy an external hard drive and back up the store on your computer");
     todo1.isCompleted = true;
     todo1.completedBy = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);

     const todo2 = new ToDo(2,
                            "Upgrade computer",
                            "Go see an expert, make him upgrade your RAM, change your computer's " +
                            "hard drive for an SSD one and change its battery");
    todo2.isCompleted = true;
    todo2.completedBy = new Date(2018, 0O5, 0O5, 16, 23, 42, 11);

     const todo3 = new ToDo(3,
                                "Do the ToDo exercise",
                                "Create the project, develop, and make unit tests");
    todo3.isCompleted = true;
    todo3.completedBy = new Date(2018, 0O5, 0O5, 18, 23, 42, 11);

    let mockToDoList1 = [todo1, todo2, todo3];

    const todo4 = new ToDo(4,
                          "Make a backup",
                          "Buy an external hard drive and back up the store on your computer");
    todo4.isCompleted = true;
    todo4.completedBy = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);

    const todo5 = new ToDo(5,
                          "Upgrade computer",
                          "Go see an expert, make him upgrade your RAM, change your computer's " +
                          "hard drive for an SSD one and change its battery");
    todo4.isCompleted = true;
    todo4.completedBy = new Date(2018, 0O5, 0O5, 18, 23, 42, 11);

    const todo6 = new ToDo(6,
                          "Do the ToDo exercise",
                          "Create the project, develop, and make unit tests");
    todo6.isCompleted = true;
    todo6.completedBy = null;

    let mockToDoList2 = [todo4, todo5, todo6];

    component.toDoList = mockToDoList1;
    component.ngOnChanges({
      toDoList: new SimpleChange(mockToDoList1, mockToDoList2, false)
    });
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
