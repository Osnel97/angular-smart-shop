import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

private smartShopApi ='http://localhost:8081/smart-shop';

constructor(private http: HttpClient) {
  
  }

  public getEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>(`${this.smartShopApi}/employee/all`);
  }
  
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.smartShopApi}/employee/add`, employee);
  }

  public updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
  return this.http.put<Employee>(`${this.smartShopApi}/employee/update/${employeeId}`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void>{
  return this.http.delete<void>(`${this.smartShopApi}/employee/delete/${employeeId}`);
  }

}
