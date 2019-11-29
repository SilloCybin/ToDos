import { TestBed } from '@angular/core/testing';

import { ToDoService } from './to-do.service';
import { ReducerManager, ReducerManagerDispatcher, Store, StoreModule } from '@ngrx/store';
import { EntityActionFactory, EntityCollectionServiceElementsFactory, EntityDataModuleWithoutEffects, EntityDispatcherFactory } from '@ngrx/data';
import { Actions } from '@ngrx/effects';

describe('ToDoService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EntityCollectionServiceElementsFactory,
      EntityDispatcherFactory,
      EntityActionFactory,
      Store,
      ReducerManager,
      ReducerManagerDispatcher,
      Actions
    ],
    imports: [
      EntityDataModuleWithoutEffects,
      StoreModule.forRoot({})
    ]
  }));

  it('should be created', () => {
    const service: ToDoService = TestBed.get(ToDoService);
    expect(service).toBeTruthy();
  });

});
