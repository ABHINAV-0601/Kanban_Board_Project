import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit{

  maxDate: Date = new Date();
  random:any = Math.floor(Math.random() * 100);

  constructor(private userService:UserServiceService,private fb:FormBuilder, private dialog:MatDialog,private route:Router){
    this.maxDate.setDate(this.maxDate.getDate() + 1);
    this.taskId?.setValue(this.random)
  }

  user:any

  ngOnInit(): void {
    // this.userService.getSpecificUser().subscribe(
    //   response => {
    //     console.log(response)
    //     this.user = response
    //   }
    // )
  }

  addForm = this.fb.group({
    taskId: [''],
    taskTitle: ['', [Validators.required, Validators.minLength(10)]],
    assignee: ['', [Validators.required, Validators.pattern(/^[A-Z].*/)]],
    taskDescription: ['', [Validators.required, Validators.minLength(20)]],
    taskPriority: [''],
    taskDeadline: ['', Validators.required]

  })

  get taskId() { return this.addForm.get("taskId") }

  get taskTitle() { return this.addForm.get("taskTitle") }

  get assignee() { return this.addForm.get("assignee") }

  get taskDescription() { return this.addForm.get("taskDescription") }

  get taskPriority() { return this.addForm.get("taskPriority") }

  get taskDeadline() { return this.addForm.get("taskDeadline") }

  onSubmit(){
    this.userService.addTask(localStorage.getItem('email'),this.addForm.value).subscribe(
      response => {
        console.log(response)
        alert('Task added successfully');
        
        this.route.navigateByUrl("allusers")
      }
    )
  }

}
