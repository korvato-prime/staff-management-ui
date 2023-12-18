import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialog } from '../../../components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, MatDialogModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  providers: []
})

export class AddEmployeeComponent {

  addEmployeeRequest: Employee = {
    id: 0,
    fullname: '',
    dateofbirth: new Date()
  };

  constructor(private employeeService: EmployeesService, private router: Router, public dialog: MatDialog) { }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialog, {
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result == true)
        this.addEmployee()
    });
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => {
          console.log(employee)
          this.router.navigate(['employees']);
        }
      })
  }
}