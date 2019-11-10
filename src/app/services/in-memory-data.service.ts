import { Injectable } from '@angular/core';
import { RequestInfo, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { ToDo } from '../models/ToDo';

interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService {
  /** True if in-mem service is intercepting; all requests pass thru when false. */
  active = true;
  maxId = 0;

  /** In-memory database data */
  db: Db = {};

  /** Create the in-memory database on start or by command */
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

  /**
   * Simulate generating new Id on the server
   * All collections in this db have numeric ids.
   * Seed grows by highest id seen in any of the collections.
   */
  genId(collection: { id: number }[], collectionName: string) {
    this.maxId =
      1 +
      collection.reduce((prev, cur) => Math.max(prev, cur.id || 0), this.maxId);
    return this.maxId;
  }

  /**
   * Override `parseRequestUrl`
   * Manipulates the request URL or the parsed result.
   * If in-mem is inactive, clear collectionName so that service passes request thru.
   * If in-mem is active, after parsing with the default parser,
   * @param url from request URL
   * @param utils for manipulating parsed URL
   */
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

/**
 * Remap a known singular collection name ("hero")
 * to the plural collection name ("heroes"); else return the name
 * @param name - collection name from the parsed
 *
 **/

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
                        "Buy an external hard drive and back up the data on your computer",
                        new Date(2019, 0O13, 0O10, 17, 23, 42, 11));

  const todo2 = new ToDo(2,
                        "Upgrade computer",
                        "Go see an expert, make him upgrade your RAM, change your computer's hard drive for an SSD one " +
                        "and change its battery",
                        new Date(2019, 0O13, 0O5, 17, 23, 42, 11));

  const todos: ToDo[] = [toDo1, todo2];

  return { todos } as Db;
}
