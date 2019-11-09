import {Optional} from '@angular/core';

export enum Status {
    Ongoing = 'Ongoing',
    Done = 'Done',
    Overdue = 'Overdue'
}

export class ToDo {

    title: string;
    description: string;
    dueDate: Date;
    status?: Status;
    rank?: number;

    constructor(title: string, description: string, dueDate: Date, status?: Status, rank?: number,){
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.status = status;
      this.rank = rank;
    }

    setStatus(status: Status){
      this.status = status;
    }

}
