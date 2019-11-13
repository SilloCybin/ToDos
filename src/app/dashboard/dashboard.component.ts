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

  constructor(private toDoService: ToDoService) {
    this.todos$ = toDoService.entities$;
  }

  ngOnInit() {
    this.getToDos();
  }

  addToDo(toDo: ToDo) {
    this.toDoService.add(toDo);
  }

  deleteToDo(toDo: ToDo) {
    this.toDoService.delete(toDo.id);
  }

  getToDos() {
    this.toDoService.getAll();
  }

  updateToDo(toDo: ToDo) {
    this.toDoService.update(toDo);
  }

}
