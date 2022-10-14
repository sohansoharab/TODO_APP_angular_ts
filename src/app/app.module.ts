import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InsertTaskComponent } from './components/insert-task/insert-task.component';
import { TaskBoxComponent } from './components/task-box/task-box.component';
import { SingleBoxComponent } from './components/single-box/single-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InsertTaskComponent,
    TaskBoxComponent,
    SingleBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
    InsertTaskComponent,
    TaskBoxComponent,
    SingleBoxComponent
  ]
})
export class AppModule { }
