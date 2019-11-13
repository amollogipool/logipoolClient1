import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';

import { NavigationComponent } from './components/students/navigation/navigation.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { FileUploadComponent } from './components/students/file-upload/file-upload.component';
import { CharacterComponent } from './components/students/character/character.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeemasterComponent } from './components/employees/employeemaster/employeemaster.component';
import { ViewemployeeComponent } from './components/employees/viewemployee/viewemployee.component';
import { RegisterComponent } from './components/authentication/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: EmployeemasterComponent },
      { path: 'employee/:method', component: EmployeeComponent },
      { path: 'employee/:method/:id', component: EmployeeComponent },
      { path: 'viewemployee/:id', component: ViewemployeeComponent },
    ]
  },
  { path: 'navigation', component: NavigationComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'editstudent/:id', component: EditStudentComponent },
  { path: 'studentslist', component: StudentListComponent },
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'character', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// export const componentRoutingModule = [];
