import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '@thisdotx/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: Observable<Employee[]>;
  constructor(private http: HttpClient) {
    this.employees$ = this.http.get<Employee[]>(
      'https://my-json-server.typicode.com/devpato/nx-fake-data/employees'
    );
  }
}
