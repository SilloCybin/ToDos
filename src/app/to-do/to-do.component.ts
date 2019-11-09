import {Component, Input, OnInit} from '@angular/core';
import {Status, ToDo} from '../models/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  public status = Status;

  @Input() toDo: ToDo;
  @Input() now: Date;

  constructor() { }

  ngOnInit() {
    this.setStatus();
  }

  setStatus(){
    if(this.toDo.status != Status.Done){
      if(this.toDo.dueDate.getTime() > this.now.getTime()){
        this.toDo.status = Status.Ongoing;
      }
      else {
        this.toDo.status = Status.Overdue;
      }
    }
  }

}
