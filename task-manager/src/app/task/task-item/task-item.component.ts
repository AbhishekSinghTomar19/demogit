import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent  {

  taskName:string='coding angular';
  isEnabled:boolean = false;
  taskId:number=11;
  task=['task1','task2']
  
  oninputCahnge(){
    this.taskName ="coding event binding";
  }
  onInput(event:any){
    this.taskName=event.target.value;
  }

}
