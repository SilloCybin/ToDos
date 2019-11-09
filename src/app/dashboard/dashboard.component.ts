import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import {Observable, Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toDoListObs: Observable<ToDo[]>;
  toDoListSub: Subscription;
  toDoList: ToDo[];
  now: Date;

  constructor(private store: Store<AppState>) {
    this.toDoListObs = store.select('todo');
  }

  ngOnInit() {
    this.toDoListSub = this.toDoListObs.subscribe(
      (t: ToDo[]) => {
        this.toDoList = t;
      }
    );
    this.now = new Date();
  }

  sortByDate(toDoList: ToDo[]){

  }

}
