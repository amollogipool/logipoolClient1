import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.scss']
})
export class ViewemployeeComponent implements OnInit {
  empid: any;
  employee: any[] = [];

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
    this.route.params.subscribe(param => {
      this.empid = param.id;
      this.getEmployeeById(this.empid);
    })
  }

  getEmployeeById(id) {
    this.employeeService.getEmployeeById(id).subscribe(res => {
      if (!res.error) {
        this.employee = res.result;
      }
    }, error => { 
      console.log("API Error")
    });
  }

  ngOnInit() {
  }

}
