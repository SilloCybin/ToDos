import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryDbService } from 'angular-in-memory-web-api';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: InMemoryDataService, useExisting: InMemoryDbService },
      InMemoryDbService
    ]
  }));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });

  it('should load correct data info', () => {
    const inMemoryDataService = new InMemoryDataService();

    expect(inMemoryDataService.active).toEqual(true);
    expect(inMemoryDataService.maxId).toEqual(0);
    expect(inMemoryDataService.db).toBeDefined();

  });

});
