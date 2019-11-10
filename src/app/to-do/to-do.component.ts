import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {State, ToDo} from '../models/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {

  @Input() toDo: ToDo;
  public status = State;

  constructor() {
  }

  ngOnInit() {
  }

}
