import { ToDo } from '../../models/ToDo';
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

export const ADD_TODO = '[TODOS] Add';
export const DELETE_TODO = '[TODOS] Delete';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: ToDo){
  }

}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: number){
  }

}

export type Actions = AddTodo | DeleteTodo;

