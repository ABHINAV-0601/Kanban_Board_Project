import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssignTaskComponent } from '../assign-task/assign-task.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-alluser-details',
  templateUrl: './alluser-details.component.html',
  styleUrls: ['./alluser-details.component.css']
})
export class AlluserDetailsComponent implements OnInit{

  constructor(private userService:UserServiceService,private route:Router,private dialog:MatDialog){}

  userData:any

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      response => {
        console.log(response)
        this.userData = response;
      }
    )
  }
  onLogout(){
    localStorage.removeItem("emailId");
    localStorage.removeItem("jwt");
    this.route.navigate(['login'])
  }

  onDashboard(){
    this.route.navigateByUrl("dashboard")
  }

  onClick(email:any){
    // this.dialog.open(AssignTaskComponent)
    this.route.navigateByUrl("assign")
    localStorage.setItem('email', email)
  }
}
