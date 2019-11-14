import { Injectable } from '@angular/core';
import { RequestInfo, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { ToDo } from '../models/ToDo';

interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService {

  active = true;
  maxId = 0;

  db: Db = {};

  createDb(reqInfo?: RequestInfo) {
    this.db = getDbData();

    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        // tslint:disable-next-line:forin
        for (const coll in this.db) {
          this.db[coll].length = 0;
        }
      }

      this.active = !!body.active;
    }
    return this.db;
  }

  genId(collection: { id: number }[], collectionName: string) {
    this.maxId =
      1 +
      collection.reduce((prev, cur) => Math.max(prev, cur.id || 0), this.maxId);
    return this.maxId;
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const parsed = utils.parseRequestUrl(url);
    const isDefaultRoot = parsed.apiBase === 'api/';
    parsed.collectionName =
      this.active && isDefaultRoot
        ? mapCollectionName(parsed.collectionName)
        : undefined;
    return parsed;
  }
}

function mapCollectionName(name: string): string {
  return (
    ({
      todo: 'todos',
    } as any)[name] || name
  );
}

function getDbData() {
  const toDo1 = new ToDo(1,
                        "Make a backup",
                        "Buy an external hard drive and back up the store on your computer"
                        );

  const todo2 = new ToDo(2,
                        "Upgrade computer",
                        "Go see an expert, make him upgrade your RAM, change your computer's hard drive for an SSD one " +
                        "and change its battery"
                        );

  const todo3 = new ToDo(3,
                        "Do the ToDo exercise",
                        "Create the project, develop, and make unit tests"
                        );

  const todos: ToDo[] = [toDo1, todo2, todo3];

  return { todos } as Db;
}
