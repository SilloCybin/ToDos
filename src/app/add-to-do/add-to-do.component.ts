import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToDoService} from '../services/to-do.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {

  addToDoForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private toDoService: ToDoService) {
    this.addToDoForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description:['']
    })
  }

  ngOnInit(){
  }

  addToDo(form: FormGroup){
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.toDoService.add({ ...value });
    }
    this.router.navigate(['/Dashboard/'])
  }

  goBackToDashboard(){
    this.router.navigate(['/Dashboard/']);
  }

}
