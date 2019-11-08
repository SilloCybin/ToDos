enum Status {
    Ongoing = 'Ongoing',
    Done = 'Done',
    Overdue = 'Overdue'
}

export interface ToDo {

    title: string;
    description: string;
    dueDate: Date;
    status: Status;

}
