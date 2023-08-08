import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Model/Employee';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit{

  public employees: Employee[] = [];
  public deleteEmployee!: Employee;
  public editEmployee!: Employee;

  constructor(private employeeService: EmployeeService){
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

public onOpenModal(employee: Employee): void{
/*
  const container = document.getElementById('mainCointainer');
  const button = document.createElement('button');
  button.type ='button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

if (mode === 'add'){
  button.setAttribute('data-target', '#addEmployeeModal');
}

if (mode === 'edit'){
  button.setAttribute('data-target', '#editEmployeeModal');
  this.editEmployee = employee;
}

if (mode === 'delete'){
  button.setAttribute('data-target', '#deleteEmployeeModal');
  this.deleteEmployee = employee;
}

//container.appendChild(button);
//button.click();
*/
this.editEmployee = employee;
this.deleteEmployee = employee;

}


  public onAddEmployee(addForm: NgForm): void {
  this.employeeService.addEmployee(addForm.value).subscribe(
  (response: Employee) =>{
    console.log(response);
    this.getEmployees();
    addForm.reset();
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
    addForm.reset();
  }
  );
  }
  
  //edit query begining
  public onUpdateEmployee(employeeId: number, employee: Employee): void {
    this.employeeService.updateEmployee(employeeId, employee).subscribe(
    (response: Employee) =>{
      console.log(response);
      this.getEmployees();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
    }
  //edit query end



   //delete query begining
  public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
    (response: void) =>{
      console.log("deleted");
      this.getEmployees();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
    }
//delete query end

}


