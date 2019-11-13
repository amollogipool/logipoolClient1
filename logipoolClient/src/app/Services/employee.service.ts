import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // url : string = "../../assets/data/employee.json";

  constructor(private httpClient: HttpClient, private router: Router) { }

 GetHttpHeaders() : HttpHeaders {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return headers;
  }

getAllEmployee(): Observable<any>{                                
  return this.httpClient.get(environment.getAllEmployee, {headers: this.GetHttpHeaders()});
}

addNewEmployee(param: any): Observable<any> {
  return this.httpClient.post( environment.addNewEmployee, param, { headers: this.GetHttpHeaders() });
}

getEmployeeById(id): Observable<any> {
  return this.httpClient.get(environment.getEmployeeById + '/' + id, { headers: this.GetHttpHeaders() });
}

updateEmployeeById(param: any): Observable<any> {
  return this.httpClient.post(environment.updateEmployeeById, param, { headers: this.GetHttpHeaders() });
}

deleteEmployeeById(param: any): Observable<any> {
return this.httpClient.put(environment.deleteEmployeeById, param, { headers: this.GetHttpHeaders() });
}

}
