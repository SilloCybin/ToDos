import {Optional} from '@angular/core';

export class ToDo {

  id?: number;
  title: string;
  description: string;
  isCompleted: boolean;
  completedBy: any;

  constructor(@Optional() id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.completedBy = null;
  }

}
