import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeCRUDService } from 'src/app/services/employee-crud.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  onFormSubmit() {
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe(
      data=>{
        console.log(data)
      }
    );
    alert("form submitted sucessfully");
  }
  constructor(private employeeService: EmployeeCRUDService) {
   
  }

  ngOnInit(): void {
  }

}
