import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListComponent implements OnChanges {

  @Input() toDoList: ToDo[];
  @Output() update = new EventEmitter<ToDo>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.sortToDos();
  }

  relayUpdate($event){
    this.update.emit($event);
  }

  sortToDos() {
    this.toDoList.sort((a, b) => {
      return this.getTime(a.completedBy) > this.getTime(b.completedBy) ? 1 : -1
    });
  }

  getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }


}

