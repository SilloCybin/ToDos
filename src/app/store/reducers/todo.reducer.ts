import { ToDo } from '../../models/ToDo';
import * as ToDosActions from '../actions/todos.actions';

let toDo1 = new ToDo(
  "Make a backup",
  "Buy an external hard drive and use it to back up your computer's data",
  new Date(2019, 0O13, 0O5, 17, 23, 42, 11)
  );

let toDo2 = new ToDo(
  "Upgrade computer",
  "Go see an expert, upgrade your RAM, change your computer's hard drive for an SSD one " +
  "and change its battery",
  new Date(2019, 0O5, 0O5, 17, 23, 42, 11)
);

const onAppBootState: ToDo[] = [toDo1, toDo2];

// @ts-ignore
export function reducer(state: ToDo[] = onAppBootState, action: ToDosActions){

  switch(action.type){
    case ToDosActions.ADD_TODO:
      return [...state, action.payload];
    case ToDosActions.DELETE_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
