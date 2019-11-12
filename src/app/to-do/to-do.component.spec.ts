import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import { MatCheckbox, MatList, MatListItem, MatRipple } from '@angular/material';
import {ToDo} from '../models/ToDo';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;
  let spy: any;
  let checkbox: any;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoComponent, ToDoComponent, MatCheckbox, MatListItem, MatList, MatRipple ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    component.toDo = new ToDo(1,
                              "Make a backup",
                              "Buy an external hard drive and back up the store on your computer");
    checkbox = fixture.debugElement.nativeElement.querySelector('.mat-list mat-list-item mat-checkbox label');
    spy = spyOn(component, 'OnChange').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire OnChange when checkbox is toggled', () => {
    checkbox.click();
    expect(spy).toHaveBeenCalled();
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

});
