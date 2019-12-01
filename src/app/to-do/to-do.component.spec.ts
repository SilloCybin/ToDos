import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import {MatCardModule, MatCheckbox, MatDialog, MatDialogModule, MatIconModule, MatList, MatListItem, MatRipple} from '@angular/material';
import { RouterTestingModule } from "@angular/router/testing";
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SingleToDoViewComponent } from '../single-to-do-view/single-to-do-view.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;
  let onChangeSpy: any;
  let goToSingleViewSpy: any;
  let checkbox: any;
  let button: any;

  const routes: Routes = [
    { path: 'ToDo/:id', component: SingleToDoViewComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToDoComponent,
        DashboardComponent,
        SingleToDoViewComponent,
        ToDoListComponent,
        MatCheckbox,
        MatListItem,
        MatList,
        MatRipple
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatCardModule,
        MatIconModule,
        MatDialogModule
      ],
      providers: [MatDialog]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    component.toDo = {
      id: 1,
      title: "Make a backup",
      description: "Buy an external hard drive and back up the store on your computer"
    };
    checkbox = fixture.debugElement.nativeElement.querySelector('.mat-list-item mat-checkbox label');
    button = fixture.debugElement.nativeElement.querySelector('.mat-list-item span span button');
    onChangeSpy = spyOn(component, 'OnChange').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire OnChange when checkbox is toggled', () => {
    checkbox.click();
    expect(onChangeSpy).toHaveBeenCalled();
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
