import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import {
  MatCardModule,
  MatCheckbox,
  MatFormFieldModule, MatIconModule,
  MatList,
  MatListItem,
  MatRipple
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {ToDoService} from '../services/to-do.service';
import { Routes } from '@angular/router';
import {AddToDoComponent} from '../add-to-do/add-to-do.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let toDoService: jasmine.SpyObj<ToDoService>;
  let button: any;
  let goToAddToDoSpy: any;

  const routes: Routes = [
    { path: 'AddToDo', component: AddToDoComponent},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule
      ],
      declarations: [
        DashboardComponent,
        ToDoListComponent,
        ToDoComponent,
        AddToDoComponent,
        MatCheckbox,
        MatList,
        MatListItem,
        MatRipple
      ],
      providers: [
        { provide: ToDoService, useValue: jasmine.createSpyObj('toDoService', ['getAll', 'update']) }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.nativeElement.querySelector('#goToAddToDoButton');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onHover on mouseenter and mouseleave', () => {
    const isOverIconTest = component.isOverIcon;
    let onHoverSpy = spyOn(component, 'onHover').and.callThrough();
    let goToAddToDoButton = fixture.nativeElement.querySelector('#goToAddToDoButton');
    let mouseenter = new Event('mouseenter');
    let mouseleave = new Event('mouseleave');
    goToAddToDoButton.dispatchEvent(mouseenter);
    goToAddToDoButton.dispatchEvent(mouseleave);
    expect(onHoverSpy).toHaveBeenCalledTimes(2);
    expect(component.isOverIcon).toEqual(isOverIconTest);
  });

  it('should make ToDoService behave correctly', () => {
    toDoService = TestBed.get(ToDoService);
    toDoService.update();
    expect(toDoService.update).toHaveBeenCalled();
  });

  it('should navigate correctly on Create new To Do button click', () => {
    goToAddToDoSpy = spyOn(component, 'goToAddToDo').and.callThrough();
    button.click();
    expect(goToAddToDoSpy).toHaveBeenCalled();
  })

});
