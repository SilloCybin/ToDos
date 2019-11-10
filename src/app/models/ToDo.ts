export enum State {
    Ongoing = 'Ongoing',
    Done = 'Done',
    Overdue = 'Overdue'
}

export interface ToDo {

    id: number;
    title: string;
    description: string;
    dueDate: Date;
    state?: State;
    rank?: number;

}

export class ToDo {

  id: number;
  title: string;
  description: string;
  dueDate: Date;
  state?: State;

  constructor(id: number, title: string, description: string, dueDate: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.state = State.Ongoing;
  }
}
