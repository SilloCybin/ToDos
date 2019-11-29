import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoComponent } from './add-to-do.component';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToDoService } from '../services/to-do.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import { By } from '@angular/platform-browser';

describe('AddToDoComponent', () => {
  let component: AddToDoComponent;
  let fixture: ComponentFixture<AddToDoComponent>;
  let addToDoSpy: any;
  let goBackToDashboardSpy: any;
  let inputElement: any;
  let cancel_button: any;
  let submit_button: any;
  let addToDoForm: any;
  let toDoService: jasmine.SpyObj<ToDoService>;

  const routes: Routes = [
    { path: 'Dashboard', component: DashboardComponent},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddToDoComponent,
        DashboardComponent,
        ToDoListComponent,
        ToDoComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatListModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: ToDoService, useValue: jasmine.createSpyObj('toDoService', ['add']) }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoComponent);
    component = fixture.componentInstance;
    cancel_button = fixture.debugElement.nativeElement.querySelector('#cancel_button');
    submit_button = fixture.debugElement.nativeElement.querySelector('#submit_button');
    inputElement = fixture.debugElement.nativeElement.querySelector('#title_input');
    toDoService = TestBed.get(ToDoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make ToDoService behave correctly', () => {
    addToDoForm = new FormBuilder().group({
      id: [],
      title: ['Random title', Validators.required],
      description:['']
    });
    toDoService = TestBed.get(ToDoService);
    toDoService.add(addToDoForm);
    expect(toDoService.add).toHaveBeenCalledWith(addToDoForm);
  });

  it('should fire addToDo then fire goToAddToDo and navigate correctly when submit_button is pressed', () => {
    addToDoSpy = spyOn(component, 'addToDo').and.callThrough();
    goBackToDashboardSpy = spyOn(component, 'goBackToDashboard');
    inputElement.value = 'Random title';
    fixture.detectChanges();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(addToDoSpy).toHaveBeenCalled();
  });

  it('should navigate correctly when cancel_button is pressed', () => {
    goBackToDashboardSpy = spyOn(component, 'goBackToDashboard').and.callThrough();
    cancel_button.click();
    expect(goBackToDashboardSpy).toHaveBeenCalled();
  });

});
