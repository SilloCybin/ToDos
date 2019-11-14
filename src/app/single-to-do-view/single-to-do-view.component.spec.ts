import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleToDoViewComponent } from './single-to-do-view.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatCheckboxModule, MatListModule} from '@angular/material';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoComponent } from '../to-do/to-do.component';
import {EntityActionFactory, EntityCollectionServiceElementsFactory, EntityDispatcherFactory} from 'ngrx-data';
import {StateObservable, Store} from '@ngrx/store';

describe('SingleToDoViewComponent', () => {
  let component: SingleToDoViewComponent;
  let fixture: ComponentFixture<SingleToDoViewComponent>;
  let ngOnInitSpy: any;
  let goBackToDashboardSpy: any;
  let button: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it('should fire goBackToDashboard and navigate correctly when button is pressed', () => {
    button = fixture.debugElement.nativeElement.querySelector('.div div button');
    goBackToDashboardSpy = spyOn(component, 'goBackToDashboard').and.callThrough();
    button.click();
    expect(goBackToDashboardSpy).toHaveBeenCalled();
  });

});
