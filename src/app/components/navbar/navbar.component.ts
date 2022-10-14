import { Component, Input, Output,  OnInit, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  time = new Date()
  @Output('current_time') dateEmit = new EventEmitter();
  // dateEmit.emit()
  current_time = (new Date()).getTime()
  
  // intervalId;
  jsToday = ''
  constructor() { 
    this.dateEmit.emit(this.current_time)
    // console.log(this.current_time)
   }

   ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
      this.jsToday = formatDate(this.time, 'dd-MMMM-yyyy hh:mm:ss a', 'en-US')
      // this.dateEmit.emit(this.jsToday)
    }, 500);

    this.dateEmit.emit(this.current_time)
    
   }

  //  onChangeEvent() {
  //   this.dateEmit.emit(this.current_time)
  //  }


}
