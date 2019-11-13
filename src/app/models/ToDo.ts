export class ToDo {

  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  completedBy?: any;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.completedBy = null;
  }

}
