import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './materials/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeemasterComponent } from './components/employees/employeemaster/employeemaster.component';
import { ViewemployeeComponent } from './components/employees/viewemployee/viewemployee.component';


import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { NavigationComponent } from './components/students/navigation/navigation.component';

import { StudentService } from './Services/student.service';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { FileUploadComponent } from './components/students/file-upload/file-upload.component';
import { FileUploadService } from './Services/file-upload.service';
import { CharacterComponent } from './components/students/character/character.component';
import { EmployeeService } from './Services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddStudentComponent,
    EditStudentComponent,
    NavigationComponent,
    StudentListComponent,
    FileUploadComponent,
    CharacterComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeemasterComponent,
    ViewemployeeComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [StudentService,FileUploadService,EmployeeService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
