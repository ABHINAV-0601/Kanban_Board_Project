import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{

  constructor(private userService:UserServiceService,private route:Router){}

  userData:any

  ngOnInit(): void {
    this.userService.getSpecificUser().subscribe(
      data => {
        console.log(data)
        this.userData = data
      }
    )
  }
  onLogout(){
    localStorage.removeItem("emailId");
    localStorage.removeItem("jwt");
    this.route.navigate(['login'])
  }

  onClick(){
    this.route.navigateByUrl("allusers")
  }

  onDashboard(){
    this.route.navigateByUrl("dashboard")
  }
}
