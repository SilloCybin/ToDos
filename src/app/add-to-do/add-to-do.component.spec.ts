import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoComponent } from './add-to-do.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatFormField} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CdkObserveContent} from '@angular/cdk/observers';
import {RouterTestingModule} from '@angular/router/testing';
import {EntityActionFactory, EntityCollectionServiceElementsFactory, EntityDispatcherFactory} from 'ngrx-data';
import {StateObservable, Store} from '@ngrx/store';

describe('AddToDoComponent', () => {
  let component: AddToDoComponent;
  let fixture: ComponentFixture<AddToDoComponent>;
  let spy: any;
  let button: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddToDoComponent,
        MatCard,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
        MatFormField,
        CdkObserveContent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule],
      providers: [
        EntityCollectionServiceElementsFactory,
        EntityDispatcherFactory,
        EntityActionFactory,
        Store,
        StateObservable
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire addToDo then fire goToAddToDo and navigate correctly when submit_button is pressed', () => {
    button = fixture.debugElement.nativeElement.querySelector('#submit_button');
    spy = spyOn(component, 'addToDo').and.callThrough();
    button.click();
    expect(spy).toHaveBeenCalled();
    expect(spy).toEqual('Navigation successful');
  });

  it('should fire goToAddToDo and navigate correctly when cancel_button is pressed', () => {
    button = fixture.debugElement.nativeElement.querySelector('#cancel_button');
    spy = spyOn(component, 'goBackToDashboard').and.callThrough();
    button.click();
    expect(spy).toHaveBeenCalled();
    expect(spy).toEqual('Navigation successful');
  });

  it('should fire ngOnInit on component instantiation', () => {
    spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });


});
