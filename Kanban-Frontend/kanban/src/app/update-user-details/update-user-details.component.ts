import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css']
})
export class UpdateUserDetailsComponent implements OnInit{
  constructor(private userService:UserServiceService,private route:Router){}

  user:any

  ngOnInit(): void {
    this.userService.getSpecificUser().subscribe(
      response => {
        console.log(response)
        this.user = response
      }
    )
    
  }

  onSubmit(){
    this.userService.updateUser(this.user).subscribe(
      response => {
        console.log(response)
        alert("User Updated Successfully")
        this.route.navigateByUrl('user-details')
      }
    )
  }
}
