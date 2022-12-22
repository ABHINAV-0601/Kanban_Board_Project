import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  maxDate: Date = new Date();

  constructor( private activatedRoute:ActivatedRoute, private taskService: TaskServiceService,private route:Router) { this.maxDate.setDate(this.maxDate.getDate() + 1); }

  task:Task = {}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("taskId") ?? 1;
      this.taskService.getSpecificTask(id).subscribe(data => {
        console.log(data);
        this.task = data;
        console.log(this.task)
      })
    });
  }

  onSubmit() {

    this.taskService.updateTask(this.task).subscribe(
      response => {
        console.log(response);
        alert('Task Updated Successfully');
        this.route.navigateByUrl("dashboard")
        
      }
    )


  }
}
