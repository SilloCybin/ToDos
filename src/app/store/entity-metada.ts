import { EntityMetadataMap } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  ToDo: {}
};

const pluralNames = { ToDo: 'ToDos'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};

