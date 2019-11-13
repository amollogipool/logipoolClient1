import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from "@angular/forms";
import { Location, DatePipe } from '@angular/common';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  method = 'create';
  empid = null;

  employeeForm: any = {
    id: null,
    name: null,
    email: null,
    contact: null,
    gender: null,
    dob: null,
    designation: null,
    salary: null,
    address: null,
  }


  empName = new FormControl([Validators.required]);
  empEmail = new FormControl([Validators.required]);
  empContact = new FormControl([Validators.required]);
  empGender = new FormControl([Validators.required]);
  empDob = new FormControl([Validators.required]);
  empDesig = new FormControl([Validators.required]);
  empSalary = new FormControl([Validators.required]);
  empAddress = new FormControl([Validators.required]);


  constructor(private router: Router, private activateRoute: ActivatedRoute, private employeeService: EmployeeService, private location: Location) { 
    this.activateRoute.params.subscribe(param => {
      if (param['method']) {
        this.method = param['method'];
      }
      if (param['id']) {
        this.empid = param['id'];
      }
      if (this.method == 'edit') {
        this.getEmployeeById(this.empid);
      }
    })
  }

   /**
   * getInventoryById() function to edit card 
   * @param id 
   * @author Amol Dhamale
   */
  getEmployeeById(id) {
    this.employeeService.getEmployeeById(id).subscribe(res => {
      if (!res.error) {
        this.employeeForm = res.result;
      }
    }, error => { 
      console.log("API Error")
    });
  }

  submit(){
    if(this.empName.valid && this.empEmail.valid && this.empContact.valid && this.empGender.valid && this.empDob.valid && this.empDesig.valid && this.empSalary.valid && this.empAddress.valid){
      if (this.method == 'edit') {
        //update API
        this.employeeService.updateEmployeeById(this.employeeForm).subscribe( res => {
          if(!res.error){
           alert('Employee Updated Successfully');
           this.location.back();
          }
        },
      error => {
      alert('Oops! Something went wrong, Record has been not updated');
      console.log(error);
      });
      }
      if (this.method == 'create') {
        //Create API
        this.employeeService.addNewEmployee(this.employeeForm).subscribe( res => {
          if(!res.error){
            alert('Employee Created Successfully');
            this.location.back();
          }
        }, 
      error => {
        alert('API error while creating Employee!');
        console.log(error);
      });
      }
    }else{
      this.empEmail.markAsTouched();
      this.empEmail.markAsTouched();
      this.empContact.markAsTouched();
      this.empGender.markAsTouched();
      this.empDob.markAsTouched();
      this.empDesig.markAsTouched();
      this.empSalary.markAsTouched(); 
      this.empAddress.markAsTouched();
      alert('Please enter required fields');
    }
  }
  
  ngOnInit() {
  }
}
 



