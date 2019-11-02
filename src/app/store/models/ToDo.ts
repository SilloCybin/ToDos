enum Status {
    Ongoing,
    Done,
    Overdue
}

export interface ToDo {

    title: string;
    description: string;
    dueDate: Date;
    status: Status;

}