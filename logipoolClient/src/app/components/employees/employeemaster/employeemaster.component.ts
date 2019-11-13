import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Location } from '@angular/common';
import { EmployeeService } from 'src/app/Services/employee.service';
import { element } from 'protractor';

@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.scss']
})

export class EmployeemasterComponent implements OnInit {
  method = 'create';
  method1 = 'view';
  empId = null;
  displayedColumns: string[] = ['id', 'name', 'email', 'contact', 'gender','dob','designation', 'salary', 'address', 'Actions'];
  EmployeeData: any[] = [];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private router: Router, private activateRoute: ActivatedRoute, private location: Location, private employeeService: EmployeeService) {   
    this.getAllEmployee();
  }

  /**
  * @author Amol Dhamale
  * getAllInventory() to get the Inventory Details.
  */
 getAllEmployee() {
  this.employeeService.getAllEmployee().subscribe(res => {
    if (!res.error) {
      this.EmployeeData = res.result;
      this.dataSource = new MatTableDataSource(this.EmployeeData);
      this.dataSource.paginator = this.paginator;
    }
  }, error => {
    console.log("API error", error);
  });
}

  addNewEmployee() {
    this.router.navigate(['./dashboard/employee', 'create']);
  }

  editEmployee(element) {
    this.router.navigate(['./dashboard/employee', 'edit', element.id]);
  }

  viewEmployee(element){
    this.router.navigate(['./dashboard/viewemployee',element.id]);
  }

  deleteEmployee(element) {
    this.employeeService.deleteEmployeeById(element).subscribe(res => {
      if (!res.error) {
        alert('Record Deleted Successfully');
        this.getAllEmployee();
      }
    }, error => {
      alert('Oops!! Something Went Wrong');
      console.log(error);
    });
  }

  ngOnInit() {
    // this.dataSource = this.employeeService.getEmployee();
  }
}
