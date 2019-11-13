import { TestBed } from '@angular/core/testing';

import { ToDoService } from './to-do.service';
import {EntityActionFactory, EntityCollectionServiceElementsFactory, EntityDispatcherFactory} from '@ngrx/data';
import {Store} from '@ngrx/store';

describe('ToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: []
  }));

  it('should be created', () => {
    const service: ToDoService = TestBed.get(ToDoService);
    expect(service).toBeTruthy();
  });
});
