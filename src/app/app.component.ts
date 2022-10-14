import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { taskInterface } from './components/task-box/task.intrerface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  current_time = ''
  current_date = ''
  // YYYY-MM-DD
  
  // statusOptions = ['Not Started', 'Started/Pending', 'Done']

  ngOnInit(): void {
    for (let task of this.finalTask) {
      let due_date_timestamp = (new Date(task.due_date)).getTime()
      this.current_date = formatDate(new Date(), 'YYYY-MM-dd', 'en-US')
      let current_date_timestamp = (new Date(this.current_date)).getTime()
      console.log(task.due_date)
      console.log(due_date_timestamp)
      console.log(this.current_date)
      console.log(current_date_timestamp)
      if (due_date_timestamp < current_date_timestamp) {
        task.status = "Expired"
        this.isExpired = true
      } else if (due_date_timestamp >= current_date_timestamp) {
        this.isExpired = false
      }
    }
  }

  isStarted = false;
  isPending = false;
  isDone = false;
  isExpired = false;
  // finalTask: taskInterface[] = []
  outer_classes_started = "alert alert-primary"
  outer_classes_pending = "alert alert-warning"
  outer_classes_done = "alert alert-success"
  outer_classes_expired = "alert alert-danger"
  required_status_started = "Not Started"
  required_status_pending = "Started/Pending"
  required_status_done = "Done"
  required_status_expired = "Expired"

  // demo tasks below
  // @Output('finalTaskEvent') finalTaskEvent = new EventEmitter<any>()
  finalTask: taskInterface[] = [{
    'due_date': "2022-10-11",
    'timeStamp': 1665705600000,
    'task_title': "Doing Math Homework",
    'remarks': "Need to be done within tonight",
    'status': "Not Started",
    'isStarted':  this.isStarted,
    'isPending': this.isPending,
    'isDone': this.isDone,
    'isExpired': this.isExpired,
    'enableEditSignal': false,
    'enableSaveSignal': false,
    },
    {
      'due_date': "2022-10-20",
      'timeStamp': 1665705611110,
      'task_title': "Doing Science Homework",
      'remarks': "Need to be done within tonight",
      'status': "Not Started",
      'isStarted':  this.isStarted,
      'isPending': this.isPending,
      'isDone': this.isDone,
      'isExpired': this.isExpired,
      'enableEditSignal': false,
      'enableSaveSignal': false,
      },
    {
      'due_date': "2022-10-20",
      'timeStamp': 1665705611110,
      'task_title': "Doing Science Homework",
      'remarks': "Need to be done within tonight",
      'status': 'Started/Pending',
      'isStarted':  this.isStarted,
      'isPending': this.isPending,
      'isDone': this.isDone,
      'isExpired': this.isExpired,
      'enableEditSignal': false,
      'enableSaveSignal': false,
      },
    {
      'due_date': "2022-10-20",
      'timeStamp': 1665705611110,
      'task_title': "Doing EEE Homework",
      'remarks': "Need to be done within tonight",
      'status': 'Expired',
      'isStarted':  this.isStarted,
      'isPending': this.isPending,
      'isDone': this.isDone,
      'isExpired': this.isExpired,
      'enableEditSignal': false,
      'enableSaveSignal': false,
      },
      {
      'due_date': "2022-10-20",
      'timeStamp': 1665705611110,
      'task_title': "Doing CSE Homework",
      'remarks': "Need to be done within tonight",
      'status': 'Done',
      'isStarted':  this.isStarted,
      'isPending': this.isPending,
      'isDone': this.isDone,
      'isExpired': this.isExpired,
      'enableEditSignal': false,
      'enableSaveSignal': false,
      },
    ]

  log(x: any) {
    console.log(x)
    this.current_time = x;
    this.current_date = formatDate(new Date(x), 'YYYY-MM-dd', 'en-US')
    console.log(this.current_date)
  }

  takeInsertedTask(x: any) {
    console.log(x)
    
    if (this.current_time <= x.timeStamp) {
      console.log("time is not expired", true)
      if ((x.status != 'Done') && (x.status != 'Started/Pending')) {
        this.isStarted = false
        this.isExpired = false
        this.isDone = false
        this.isPending = false
      } else if ((x.status != 'Done') && (x.status == 'Started/Pending')) {
        this.isStarted = true
        this.isPending = true
        this.isDone = false
        this.isExpired = false
      } else if (x.status == 'Done') {
        this.isStarted = false
        this.isPending = false
        this.isDone = true
        this.isExpired = false
      }
    } else if (this.current_time > x.timeStamp) {
      if ((this.isStarted==true) && ((x.status != 'Done') && (x.status == 'Started/Pending'))) {
        this.isExpired = true
        this.isStarted = true
        this.isPending = false
        this.isDone = false
      }
    } 
    let task_final : taskInterface = {
      'due_date': x.due_date,
      'timeStamp': x.timeStamp,
      'task_title': x.task_title,
      'remarks': x.remarks,
      'status': x.status,
      'isStarted':  this.isStarted,
      'isPending': this.isPending,
      'isDone': this.isDone,
      'isExpired': this.isExpired,
      'enableEditSignal': false,
      'enableSaveSignal': false,
    }
    this.finalTask.push(task_final)
    console.log(this.finalTask)
  }

  isStartedEvent(event: any) {
    console.log(event)
  }

  isPendingEvent(event: any) {
    console.log(event)
  }

  deleteTask(event:any) {
    // let index = this.finalTask.indexOf(event)
    console.log(event)
    console.log(5)
    // return this.finalTask.splice(event.target.value, 1)
  }
}

