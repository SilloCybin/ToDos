import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {ToDo} from '../models/ToDo';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ToDoService} from '../services/to-do.service';
import {EntityActionFactory, EntityCache, EntityCollectionServiceElementsFactory, EntityDispatcherFactory} from '@ngrx/data';
import {Store} from '@ngrx/store';

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
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.toDoList = [new ToDo(1,
                                  "Make a backup",
                                  "Buy an external hard drive and back up the store on your computer"),
                          new ToDo(2,
                                  "Upgrade computer",
                                  "Go see an expert, make him upgrade your RAM, change your computer's " +
                                  "hard drive for an SSD one and change its battery"),
                          new ToDo(3,
                                   "Do the ToDo exercise",
                                  "Create the project, develop, and make unit tests")
                          ];
    spy = spyOn(component, 'ngOnChanges').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire ngOnChanges on instantiation', () => {
    //let dashBoardComponent = new DashboardComponent();
    expect(spy).toHaveBeenCalled();
  });
});
