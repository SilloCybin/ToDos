import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { ToDo } from '../models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService extends EntityCollectionServiceBase<ToDo> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ToDo', serviceElementsFactory);
  }

}

