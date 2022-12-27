import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TASKS } from '../model/tasks';
import { Task } from '../model/task';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { TaskServiceService } from '../services/task-service.service';
import { Router } from '@angular/router';
import { DisplayTaskComponent } from '../display-task/display-task.component';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css'],
})
export class DragComponent implements OnInit {

  constructor(private dialog: MatDialog, private taskService: TaskServiceService, private route: Router) { }
  ngOnInit(): void {
    this.getAllTasks();
  }

  todo: any

  done: Task[] = [];

  inProgress: Task[] = [];

  archive: Task[] = [];

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(
      response => {
        console.log(response);
        this.todo = response;
      }
    )
  }
  deleteTask(taskId: any) {
    // if(confirm("Are you sure you want to delete?")){
    // this.taskService.deleteTask(taskId).subscribe(
    //   response => {
    //     console.log(response)
    //     alert('Task Deleted Successfully!!');
    //     this.getAllTasks();
    //     location.reload();
    //   }
    // )
    // }
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          this.taskService.deleteTask(taskId).subscribe(
            response=>{
              console.log(response)
              // alert('Task Deleted Successfully!!');
              this.getAllTasks();
              
            }
          )
  
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        // location.reload();
      }
    })
    
  }

  openDialog(): void {
    this.dialog.open(AddTaskComponent);

  }
  onLogout(){
    localStorage.removeItem("emailId");
    localStorage.removeItem("jwt");
    Swal.fire(
      'Log Out!',
      'User logged out Successfully!!',
      'success'
    )
    this.route.navigate(['login'])
  }
  onClick(){
    this.route.navigateByUrl("allusers")
  }
  submit(){
    Swal.fire(
      'Congrats!',
      'You have completed this task!!',
      'success'
    )
  }
  openTaskDetails(item:any){
    const dialogRef = this.dialog.open(DisplayTaskComponent,{
      width:'500px',
      data:{
        title : item.taskTitle,
        id : item.taskId,
        description : item.taskDescription,
        deadline : item.taskDeadline,
        priority : item.taskPriority,
        assign: item.assignee

      }
    });
    
  }
}
