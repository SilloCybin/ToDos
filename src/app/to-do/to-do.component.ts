import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { ToDo } from '../models/ToDo';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {

  @Input() toDo: ToDo;
  @Output() update: EventEmitter<ToDo> = new EventEmitter<ToDo>();
  @Output() delete: EventEmitter<ToDo> = new EventEmitter<ToDo>();
  isChecked: boolean;
  isOverDeleteIcon = false;
  isOverEditIcon = false;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.setInitialCheckboxState();
  }

  setInitialCheckboxState() {
    this.isChecked = this.toDo.isCompleted === true;
  }

  OnChange() {
    this.toDo.isCompleted = !this.toDo.isCompleted;
    if (this.toDo.isCompleted) {
      this.toDo.completedBy = new Date();
    } else {
      this.toDo.completedBy = null;
    }
    this.update.emit({...this.toDo});
  }

  goToSingleView() {
    this.router.navigate(['/ToDo/', this.toDo.id]);
  }

  goToEditToDo(){
    this.router.navigate(['/EditToDo/', this.toDo.id]);
  }

  onDeleteHover() {
    this.isOverDeleteIcon = !this.isOverDeleteIcon;
  }

  onEditHover(){
    this.isOverEditIcon = !this.isOverEditIcon;
  }

  onDelete() {
      this.delete.emit({...this.toDo});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDeleteToDo);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.onDelete();
      }
    });
  }
}


// Delete Dialog Component

@Component({
  selector: 'dialog-delete-to-do',
  templateUrl: 'dialog-delete-to-do.html',
})
export class DialogDeleteToDo {}
