import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DialogDeleteToDo, ToDoComponent} from './to-do.component';
import {
  MatCardModule,
  MatCardTitle,
  MatCheckbox,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatList,
  MatListItem,
  MatRipple
} from '@angular/material';
import { RouterTestingModule } from "@angular/router/testing";
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SingleToDoViewComponent } from '../single-to-do-view/single-to-do-view.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import {of} from 'rxjs';
import {EditToDoComponent} from '../edit-to-do/edit-to-do.component';
import {ReactiveFormsModule} from '@angular/forms';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;
  let onChangeSpy: any;
  let goToSingleViewSpy: any;
  let goToEditToDoSpy: any;
  let checkbox: any;
  let goToSingleToDoViewButton: any;
  let goToEditToDoButton: any;

  const routes: Routes = [
    { path: 'ToDo/:id', component: SingleToDoViewComponent },
    { path: 'EditToDo/:id', component: EditToDoComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToDoComponent,
        DashboardComponent,
        SingleToDoViewComponent,
        ToDoListComponent,
        EditToDoComponent,
        MatCheckbox,
        MatListItem,
        MatList,
        MatRipple
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule
      ],
      providers: [
        {provide: DialogDeleteToDo, useClass: MatDialogMock}
      ]
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
    goToSingleToDoViewButton = fixture.debugElement.nativeElement.querySelector('.mat-list-item span span button');
    goToEditToDoButton = fixture.debugElement.nativeElement.querySelector('#edit_button');
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
    goToSingleToDoViewButton.click();
    expect(goToSingleViewSpy).toHaveBeenCalled();
  });

  it('should take user to editToDoComponent', () => {
    goToEditToDoSpy = spyOn(component, 'goToEditToDo').and.callThrough();
    goToEditToDoButton.click();
    expect(goToEditToDoSpy).toHaveBeenCalled();
  });


  it('should call onHover on mouseenter and mouseleave for delete_button', () => {
    const isOverIconTest = component.isOverDeleteIcon;
    let onHoverSpy = spyOn(component, 'onDeleteHover').and.callThrough();
    let delete_button = fixture.nativeElement.querySelector('#delete_button');
    let mouseenter = new Event('mouseenter');
    let mouseleave = new Event('mouseleave');
    delete_button.dispatchEvent(mouseenter);
    delete_button.dispatchEvent(mouseleave);
    expect(onHoverSpy).toHaveBeenCalledTimes(2);
    expect(component.isOverDeleteIcon).toEqual(isOverIconTest);
  });

  it('should call onHover on mouseenter and mouseleave for edit_button', () => {
    const isOverIconTest = component.isOverEditIcon;
    let onHoverSpy = spyOn(component, 'onEditHover').and.callThrough();
    let edit_button = fixture.nativeElement.querySelector('#edit_button');
    let mouseenter = new Event('mouseenter');
    let mouseleave = new Event('mouseleave');
    edit_button.dispatchEvent(mouseenter);
    edit_button.dispatchEvent(mouseleave);
    expect(onHoverSpy).toHaveBeenCalledTimes(2);
    expect(component.isOverEditIcon).toEqual(isOverIconTest);
  });

  it('should openDialog() when delete_button is pressed', () => {
    let openDialogSpy = spyOn(component, 'openDialog').and.callThrough();
    let delete_button = fixture.nativeElement.querySelector('#delete_button');
    delete_button.click();
    expect(openDialogSpy).toHaveBeenCalled();
  });

});
