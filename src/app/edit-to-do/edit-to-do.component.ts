import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../models/ToDo';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToDoService} from '../services/to-do.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.scss']
})
export class EditToDoComponent implements OnInit {

  todo$: Observable<ToDo>;
  editToDoForm: FormGroup;
  toDoToUpdate: ToDo;

  constructor(private router: Router, private route: ActivatedRoute, private toDoService: ToDoService, private formBuilder: FormBuilder) {
    this.editToDoForm = this.formBuilder.group({
      title: [''],
      description: ['']
    });
  }

  ngOnInit() {
    this.todo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.toDoService.getByKey(params.get('id'))
      )
    );
    this.todo$.subscribe(
    (toDo) => this.toDoToUpdate = toDo
    );
  }

  editToDo(form: FormGroup){
    this.toDoToUpdate.title = form.get('title').value;
    this.toDoToUpdate.description = form.get('description').value;
    this.toDoService.update({...this.toDoToUpdate});
    this.router.navigate(['/Dashboard/'])
  }

  goBackToDashboard(){
    this.router.navigate(['/Dashboard/']);
  }

}
