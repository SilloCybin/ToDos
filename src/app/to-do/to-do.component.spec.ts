import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import {MatCard, MatCheckbox, MatList, MatListItem, MatRipple} from '@angular/material';
import {ToDo} from '../models/ToDo';
import {RouterTestingModule} from "@angular/router/testing";
import {Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SingleToDoViewComponent} from '../single-to-do-view/single-to-do-view.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;
  let onChangespy: any;
  let goToSingleViewSpy: any;
  let checkbox: any;
  let button: any;

  const routes: Routes = [
    { path : '', redirectTo: 'Dashboard', pathMatch: 'full' },
    { path : 'Dashboard', component : DashboardComponent },
    { path : 'ToDo/:id', component : SingleToDoViewComponent }
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoComponent, DashboardComponent, SingleToDoViewComponent, MatCheckbox, MatListItem, MatList, MatRipple, MatCard ],
      imports: [RouterTestingModule.withRoutes(routes)],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    component.toDo = new ToDo(1,
                              "Make a backup",
                              "Buy an external hard drive and back up the store on your computer");
    checkbox = fixture.debugElement.nativeElement.querySelector('.mat-list-item mat-checkbox label');
    button = fixture.debugElement.nativeElement.querySelector('.mat-list-item span button');
    onChangespy = spyOn(component, 'OnChange').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire OnChange when checkbox is toggled', () => {
    checkbox.click();
    expect(onChangespy).toHaveBeenCalled();
    expect(component.toDo.isCompleted).toEqual(true);
    expect(component.toDo.completedBy).not.toEqual(null);
    expect(component.toDo.completedBy).not.toEqual(undefined);
  });

  it('should reset toDo.completedBy to null and toDo.isCompleted to false when checkbox toggled twice', () => {
    checkbox.click();
    checkbox.click();
    expect(component.toDo.isCompleted).toEqual(false);
    expect(component.toDo.completedBy).toEqual(null);
  });

  it('should take user to singleToDoViewComponent', () => {
    goToSingleViewSpy = spyOn(component, 'goToSingleView').and.callThrough();
    button.click();
    expect(goToSingleViewSpy).toHaveBeenCalled();
  });

});
