import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/store/models/ToDo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toDoList = [];

  constructor() { }

  ngOnInit() {
  }

}
