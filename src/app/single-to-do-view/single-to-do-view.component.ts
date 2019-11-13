import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from '../models/ToDo';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ToDoService} from '../services/to-do.service';

@Component({
  selector: 'app-single-to-do-view',
  templateUrl: './single-to-do-view.component.html',
  styleUrls: ['./single-to-do-view.component.scss']
})
export class SingleToDoViewComponent implements OnInit {

  id: number;
  todo$: Observable<ToDo>;

  constructor(private route: ActivatedRoute, private router: Router, private toDoService: ToDoService) { }

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.toDoService.getByKey(params.get('id')))
    );
  }

  goBackToDashboard(){
    this.router.navigate(['/Dashboard/']);
  }

}
