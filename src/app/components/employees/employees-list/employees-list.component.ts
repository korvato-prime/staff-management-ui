import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})

export class EmployeesListComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}
 
  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
          console.log(employees)
          this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}