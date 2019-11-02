enum Status {
    Ongoing,
    Done,
    Overdue
}

export class ToDo {

    title: string;
    description: string;
    dueDate: Date;
    status: Status;

    constructor (title: string, description: string, dueDate: Date, status: Status){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }

}