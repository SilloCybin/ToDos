import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import {MatCardModule, MatCheckbox, MatDialog, MatDialogModule, MatIconModule, MatList, MatListItem, MatRipple} from '@angular/material';
import { RouterTestingModule } from "@angular/router/testing";
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SingleToDoViewComponent } from '../single-to-do-view/single-to-do-view.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';

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

  it('should call onHover on mouseenter and mouseleave', () => {
    const isOverIconTest = component.isOverIcon;
    let onHoverSpy = spyOn(component, 'onHover').and.callThrough();
    let delete_button = fixture.nativeElement.querySelector('#delete_button');
    let mouseenter = new Event('mouseenter');
    let mouseleave = new Event('mouseleave');
    delete_button.dispatchEvent(mouseenter);
    delete_button.dispatchEvent(mouseleave);
    expect(onHoverSpy).toHaveBeenCalledTimes(2);
    expect(component.isOverIcon).toEqual(isOverIconTest);
  });

  it('should openDialog() when delete_button is pressed then call onDelete() when yes_button is pressed', () => {
    let openDialogSpy = spyOn(component, 'openDialog').and.callThrough();
    let delete_button = fixture.nativeElement.querySelector('#delete_button');
    delete_button.click();
    expect(openDialogSpy).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let onDeleteSpy = spyOn(component, 'onDelete').and.callThrough();
      let yes_button = fixture.nativeElement.querySelector('#yes_button');
      yes_button.click();
      expect(onDeleteSpy).toHaveBeenCalled();
    });
  });

  it('should openDialog() when delete_button is pressed then not call onDelete() when no_button is pressed', () => {
    let openDialogSpy = spyOn(component, 'openDialog').and.callThrough();
    let delete_button = fixture.nativeElement.querySelector('#delete_button');
    delete_button.click();
    expect(openDialogSpy).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let onDeleteSpy = spyOn(component, 'onDelete').and.callThrough();
      let no_button = fixture.nativeElement.querySelector('#no_button');
      no_button.click();
      expect(onDeleteSpy).not.toHaveBeenCalled();
    });
  });

});
