import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.css']
})
export class InsertTaskComponent implements OnInit {
  @Input('current_date') current_date = ''
  @Output('insertTaskEvent') insertTaskEvent = new EventEmitter();
  task = {};

  // formGroup = any
  @ViewChild('formGroup', { static: true }) formGroup: ElementRef | any;

  disableSubmit: boolean = true;

  statusOptions = ['Not Started', 'Started/Pending', 'Done']
  // isStarted: boolean = false;
  // startedAndPending: boolean = false;
  // isDone: boolean = false;
  // isExpired: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  insertTask(x: any) {
    console.log(x)
    console.log(x.controls.due_date.value)
    let timeStamp = new Date(x.controls.due_date.value).getTime()
    console.log(timeStamp)
    console.log(x.controls.task_title.value)
    console.log(x.controls.remarks.value)
    console.log(x.controls.status.value)

    this.task = {
      'due_date': x.controls.due_date.value,
      'timeStamp': timeStamp,
      'task_title': x.controls.task_title.value,
      'remarks': x.controls.remarks.value,
      'status': x.controls.status.value,
    }

    this.insertTaskEvent.emit(this.task)
  }

  task_title = new FormControl()
  get taskTitle() {
    return this.task_title = this.formGroup.nativeElement.value.controls.task_title  
  }

  due_date = new FormControl()
  get dueDate() {
    return this.due_date = this.formGroup.nativeElement.value.controls.due_date
  }

  get remarks() {
    return this.formGroup.nativeElement.value.controls.remarks
  }

  status = new FormControl()
  get Status() {
    return this.status = this.formGroup.nativeElement.value.controls.status
  }


}
