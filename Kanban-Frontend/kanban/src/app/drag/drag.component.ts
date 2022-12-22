import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TASKS } from '../model/tasks';
import { Task } from '../model/task';

import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { TaskServiceService } from '../services/task-service.service';
import { Router } from '@angular/router';

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
    if(confirm("Are you sure you want to delete?")){
    this.taskService.deleteTask(taskId).subscribe(
      response => {
        console.log(response)
        alert('Task Deleted Successfully!!');
        this.getAllTasks();
        location.reload();
      }
    )
    }
  }

  openDialog(): void {
    this.dialog.open(AddTaskComponent);

  }
  onLogout(){
    localStorage.removeItem("emailId");
    localStorage.removeItem("jwt");
    this.route.navigate(['login'])
  }

}
