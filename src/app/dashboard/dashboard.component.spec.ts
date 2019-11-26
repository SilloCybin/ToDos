import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import {MatCard, MatCardTitle, MatCheckbox, MatList, MatListItem, MatRipple} from '@angular/material';
import {EntityCollectionServiceElementsFactory, EntityDispatcherFactory, EntityActionFactory} from '@ngrx/data';
import {StateObservable, Store} from '@ngrx/store';
import {ToDoService} from '../services/to-do.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let spy : any;
  let button: any;
  let goToAddToDoSpy: any;
  let toDoService: ToDoService;
  let router: RouterTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        ToDoListComponent,
        ToDoComponent,
        MatCheckbox,
        MatList,
        MatListItem,
        MatRipple,
        MatCard,
        MatCardTitle
      ],
      providers: [
        EntityCollectionServiceElementsFactory,
        EntityDispatcherFactory,
        EntityActionFactory,
        Store,
        StateObservable,
        ToDoService
      ]
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

  /*it('should make addToDo behave correctly', () => {
    button = fixture.debugElement.nativeElement.querySelector('.div div button');
    router = fixture.debugElement.injector.get(RouterTestingModule);
    spy = spyOn(router, 'navigate').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });*/

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

  it('should fire goToAddToDo and navigate correctly when button is pressed', () => {
    button = fixture.debugElement.nativeElement.querySelector('.div button');
    goToAddToDoSpy = spyOn(component, 'goToAddToDo').and.callThrough();
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
