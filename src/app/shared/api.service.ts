import { Injectable } from '@angular/core';
import { Employe } from './employe';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://localhost/angularcode-task-manager-app-master/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  AddEmploye(data: Employe): Observable<any> {
    let API_URL =  this.endpoint + "ajax/addTask.php?task="+data.name+"&dob="+data.dob;
    return this.http.post(API_URL, {})
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all students
  GetEmploye() {
    return this.http.post(this.endpoint + "ajax/getTask.php", {});
  }

 


  // Delete student
  DeleteEmploye(id): Observable<any> {
    var API_URL = this.endpoint + "ajax/deleteTask.php?taskID="+id;
      return this.http.delete(API_URL)
        .pipe(
          catchError(this.errorMgmt)
        )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}