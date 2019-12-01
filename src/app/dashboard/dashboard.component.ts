import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { Observable } from 'rxjs';
import { ToDoService } from '../services/to-do.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  todos$: Observable<ToDo[]>;
  isOverIcon: boolean = false;

  constructor(private toDoService: ToDoService, private router: Router) {
    this.todos$ = toDoService.entities$;
  }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.toDoService.getAll();
  }

  updateToDo(toDo: ToDo) {
    this.toDoService.update(toDo);
  }

  deleteToDo(toDo: ToDo){
    this.toDoService.delete(toDo);
  }

  goToAddToDo(){
    this.router.navigate(['/AddToDo/']);
  }

  onHover() {
    this.isOverIcon = !this.isOverIcon;
  }

}
