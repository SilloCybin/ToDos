import { ToDo } from '../models/ToDo';

export interface AppState {
  readonly ToDos: ToDo[];
}
