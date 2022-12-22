import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private httpClient: HttpClient) { }

  url: String = "http://localhost:9000/kanbantask"

  getAllTasks() {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });

    let requestToken = { headers: httpHeaders }
    return this.httpClient.get(this.url + "/task/get/" + localStorage.getItem('emailId'),requestToken);
  }

  addTask(taskObject: any) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });

    let requestToken = { headers: httpHeaders }
    return this.httpClient.post(this.url + "/task/add/" + localStorage.getItem('emailId'), taskObject, requestToken);
  }

  deleteTask(taskId: any) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });

    let requestToken = { headers: httpHeaders }

    return this.httpClient.delete(this.url + "/task/delete/" + localStorage.getItem('emailId') + '/' + taskId, requestToken);
  }

  updateTask(taskObj: any) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });

    let requestToken = { headers: httpHeaders,responseType:"text" as "json" }

    return this.httpClient.put(this.url + "/task/update/" + localStorage.getItem('emailId'), taskObj, requestToken);
  }

  getSpecificTask(taskId:any){
    let httpHeaders=new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem('jwt')
     });
  
     let requestToken={ headers : httpHeaders }
    return this.httpClient.get(this.url+"/getTask/"+localStorage.getItem('emailId')+"/"+taskId,requestToken);
  }
}
