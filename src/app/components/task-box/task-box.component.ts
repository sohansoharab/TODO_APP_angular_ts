import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { taskInterface } from './task.intrerface'

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.css']
})
export class TaskBoxComponent implements OnInit {

  @Input('outer_classes') outer_classes: any;
  @Input('required_status') required_status: any;
  isStarted = false;
  isPending = false;
  isDone = false;
  isExpired = false;
  current_date = formatDate(new Date(), 'YYYY-MM-dd', 'en-US')

  @Input('tasks') tasks : taskInterface[] = [];

  @Output('isStartedEvent') isStartedEvent = new EventEmitter()
  @Output('isPendingEvent') isPendingEvent = new EventEmitter()
  @Output('enableEdit') enableEdit = new EventEmitter()
  @Output('enableSave') enableSave = new EventEmitter()
  @Output('onDelete') onDeleteEvent = new EventEmitter()
  enableEditSignal: boolean = false;
  enableSaveSignal: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  clickStarted(task: taskInterface) {
    
    let index = this.tasks.indexOf(task)
    console.log(this.tasks[index])
    console.log(this.tasks[index].status)
    this.tasks[index].status = 'Started/Pending'
    console.log(this.tasks[index].status)
    // console.log()
    this.isStartedEvent.emit(this.tasks[index])

    // task.isStarted = true
    // task.isPending = true
  }

  clickPending(task: taskInterface) {
    let index = this.tasks.indexOf(task)
    console.log(this.tasks[index])
    console.log(this.tasks[index].status)
    this.tasks[index].status = 'Done'
    console.log(this.tasks[index].status)
    // console.log()
    this.isPendingEvent.emit(this.tasks[index])
  }

  editTask(task: taskInterface) {
    task.enableEditSignal = true
    task.enableSaveSignal = true
    console.log(task)
  }

  saveTask(task: taskInterface) {
    task.enableEditSignal = false
    task.enableSaveSignal = false
    console.log(task)
  }

  onDelete(task: taskInterface) {
    let index = this.tasks.indexOf(task)
    
    console.log("Delete pressed")
    console.log(task)
    // return this.onDeleteEvent.emit(task)
    return this.tasks.splice(index, 1)
  }

}
