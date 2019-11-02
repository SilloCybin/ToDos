import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/services/todo/todo.service';
import { ToDo } from 'src/models/ToDo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toDoList = [];
  toDoListSub: Subscription;

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    this.loadToDos();
  }

  loadToDos(): void{
    this.toDoListSub = this.todoservice.toDoListSubject.subscribe(
      (t: ToDo[]) => {
        this.toDoList = t;
      }
    );
    this.todoservice.emitToDoList();
  }

}
