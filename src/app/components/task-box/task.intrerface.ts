export interface taskInterface {
    due_date: string, 
    timeStamp: number,
    task_title: string, 
    remarks: string,
    status: string,
    isStarted: boolean,
    isPending: boolean,
    isDone: boolean,
    isExpired: boolean,
    enableEditSignal: boolean,
    enableSaveSignal: boolean,
}