import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AlluserDetailsComponent } from './alluser-details/alluser-details.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { DragComponent } from './drag/drag.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [{
  path: "login",
  component: LoginComponent
},
{
  path: "register",
  component: RegistrationComponent
},
{
  path: "dashboard",
  component: DragComponent,
  canActivate:[AuthGuardGuard]
},
{
  path: "add-task",
  component: AddTaskComponent,
  canActivate:[AuthGuardGuard]
},
{
  path: "edit-task/:taskId",
  component: EditTaskComponent,
  canActivate:[AuthGuardGuard]
},
{
  path: "home",
  component: HomePageComponent
},
{
  path: "user-details",
  component: UserDetailsComponent,
  canActivate:[AuthGuardGuard]
},
{
  path: "allusers",
  component: AlluserDetailsComponent,
  canActivate:[AuthGuardGuard]
},
{
  path:"update-profile/:emailId",
  component: UpdateUserDetailsComponent,
  canActivate:[AuthGuardGuard]
},
{
  path:"assign",
  component: AssignTaskComponent,
  canActivate:[AuthGuardGuard]
},
{
  path:"contact",
  component:ContactUsComponent
},
{
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path: "**",
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
