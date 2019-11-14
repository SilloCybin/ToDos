import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleToDoViewComponent } from './single-to-do-view.component';
<<<<<<< HEAD
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatCheckboxModule, MatListModule} from '@angular/material';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import {EntityActionFactory, EntityCollectionServiceElementsFactory, EntityDispatcherFactory} from 'ngrx-data';
import {StateObservable, Store} from '@ngrx/store';
=======
import {ActivatedRoute} from '@angular/router';
>>>>>>> parent of 29f0dfb... Intermediary commit

describe('SingleToDoViewComponent', () => {
  let component: SingleToDoViewComponent;
  let fixture: ComponentFixture<SingleToDoViewComponent>;
  let ngOnInitSpy: any;
  let goBackToDashboardSpy: any;
  let button: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [
        SingleToDoViewComponent,
        DashboardComponent,
        ToDoListComponent,
        ToDoComponent
        ],
      imports: [RouterTestingModule, MatCardModule, MatListModule, MatCheckboxModule],
      providers: [
        EntityCollectionServiceElementsFactory,
        EntityDispatcherFactory,
        EntityActionFactory,
        Store,
        StateObservable
      ]
=======
      declarations: [ SingleToDoViewComponent ],
      providers: [ ActivatedRoute ]
>>>>>>> parent of 29f0dfb... Intermediary commit
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleToDoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire ngOnInit on component instantiation', () => {
    ngOnInitSpy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(ngOnInitSpy).toHaveBeenCalled();
  });

  it('should fire goBackToDashboard when button is pressed', () => {
    button = fixture.debugElement.nativeElement.querySelector('.div button');
    goBackToDashboardSpy = spyOn(component, 'goBackToDashboard');
    button.click();
    expect(spyOn).toHaveBeenCalled();
  });


});
