import { TestBed } from '@angular/core/testing';

import { ToDoService } from './to-do.service';
import { EntityDataModuleWithoutEffects } from '@ngrx/data';
import { StoreModule} from '@ngrx/store';
import { DefaultDataServiceFactory, NgrxDataModule } from 'ngrx-data';
import { Actions, EffectSources } from '@ngrx/effects';
import { entityConfig } from '../store/entity-metada';
import { HttpClientModule } from '@angular/common/http';

describe('ToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [Actions, DefaultDataServiceFactory, EffectSources],
    imports: [
      EntityDataModuleWithoutEffects,
      NgrxDataModule.forRoot(entityConfig),
      StoreModule.forRoot({}),
      HttpClientModule
      ]
  }));

  it('should be created', () => {
    const service: ToDoService = TestBed.get(ToDoService);
    expect(service).toBeTruthy();
  });
});
