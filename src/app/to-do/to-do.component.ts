import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {

  @Input() toDo: ToDo;
  @Output() update = new EventEmitter<ToDo>();
  isChecked: boolean;

  constructor() {
  }

  ngOnInit() {
    this.setInitialCheckboxState();
  }

  setInitialCheckboxState() {
    this.isChecked = this.toDo.isCompleted == true;
  }

  OnChange() {
    this.toDo.isCompleted = !this.toDo.isCompleted;
    if(this.toDo.isCompleted){
      this.toDo.completedBy = new Date();
    } else {
      this.toDo.completedBy = null;
    }
    this.update.emit({...this.toDo });
  }
}
