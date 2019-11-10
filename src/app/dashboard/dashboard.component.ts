import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { Observable } from 'rxjs';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  todos$: Observable<ToDo[]>;

  constructor(private todoService: ToDoService) {
    this.todos$ = todoService.entities$;
  }

  ngOnInit() {
    this.getToDos();
  }

  addToDo(toDo: ToDo) {
    this.todoService.add(toDo);
  }

  deleteToDo(toDo: ToDo) {
    this.todoService.delete(toDo.id);
  }

  getToDos() {
    this.todoService.getAll();
  }

  updateToDo(toDo: ToDo) {
    this.todoService.update(toDo);
  }

}
