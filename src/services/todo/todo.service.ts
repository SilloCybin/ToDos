import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDo } from 'src/models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo1 = new ToDo("Clean the apartment", "Wash the dishes, sweep the floor, change sheets", new Date(2018, 0O6, 0O4, 20, 21, 12, 11), 0);
  todo2 = new ToDo("Go get package", "Go to the Carrefour Bio on Avenue du Languedoc and pick up the amazon package", new Date(2018, 0O5, 0O5, 20, 23, 42, 11), 0);

  toDoList = [this.todo1, this.todo2];
  toDoListSubject = new Subject<ToDo[]>();

  constructor() {}

  emitToDoList(){
    this.toDoListSubject.next(this.toDoList);
  }
  
}
