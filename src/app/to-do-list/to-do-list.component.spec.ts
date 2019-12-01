import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { SimpleChange } from '@angular/core';
import { ToDoComponent } from '../to-do/to-do.component';
import { MatCardModule, MatCheckboxModule, MatIconModule, MatListModule } from '@angular/material';

describe('ToDoListComponent', () => {
  let fixture: ComponentFixture<ToDoListComponent>;
  let component: ToDoListComponent;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatCardModule,
        MatCheckboxModule,
        MatIconModule
      ],
      declarations: [
        ToDoListComponent,
        ToDoComponent
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.whenStable().then(
      () => {
        fixture.detectChanges();
      }
    );
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire ngOnChanges on new toDoList value', () => {

    const todo1 = {
      id: 1,
      title: "Make a backup",
      description: "Buy an external hard drive and back up the store on your computer",
      isCompleted: true,
      completedBy: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)
    };

    const todo2 = {
      id: 2,
      title: "Upgrade computer",
      description: "Go see an expert, make him upgrade your RAM, change your computer's " +
        "hard drive for an SSD one and change its battery",
      isCompleted: true,
      completedBy: new Date(2018, 0O5, 0O5, 16, 23, 42, 11)
    };;

    const todo3 = {
      id: 3,
      title: "Do the ToDo exercise",
      description: "Create the project, develop, and make unit tests",
      isCompleted: true,
      completedBy: new Date(2018, 0O5, 0O5, 18, 23, 42, 11)
    };

    let mockToDoList1 = [todo1, todo2, todo3];

    const todo4 = {
      id: 4,
      title: "Make a backup",
      description: "Buy an external hard drive and back up the store on your computer",
      isCompleted: true,
      completedBy: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)
    };

    const todo5 = {
      id: 5,
      title: "Upgrade computer",
      description: "Go see an expert, make him upgrade your RAM, change your computer's " +
        "hard drive for an SSD one and change its battery",
      isCompleted: true,
      completedBy: "2010-08-17T12:09:36"
    };

    const todo6 = {
      id: 6,
      title: "Do the ToDo exercise",
      description: "Create the project, develop, and make unit tests",
      isCompleted: true,
      completedBy: new Date(2018, 0O5, 0O5, 17, 23, 42, 11)
    };

    let mockToDoList2 = [todo4, todo5, todo6];

    component.toDoList = mockToDoList1;
    spy = spyOn(component, 'ngOnChanges').and.callThrough();
    component.ngOnChanges({
      toDoList: new SimpleChange(mockToDoList1, mockToDoList2, false)
    });
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.toDoList[1].completedBy).toEqual(jasmine.any(Date));
  });

  it('should change todo.completedBy of type datestring into type date', () =>{
    const todo8 = {
      id: 8,
      title: "Do the ToDo exercise",
      description: "Create the project, develop, and make unit tests",
      isCompleted: true,
      completedBy: "2010-08-17T12:09:36"
    };
    component.toDoList = [todo8];
    component.checkForDateStrings();
    expect(component.toDoList[0].completedBy).toEqual(jasmine.any(Date));
  });

  it('should make undefined date turn to 0 when calling getTime', () => {
    expect(component.getTime(undefined)).toEqual(0);
  });

});
