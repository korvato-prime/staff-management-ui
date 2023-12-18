import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path: "",
        component: EmployeesListComponent
    },
    {
        path: "employees",
        component: EmployeesListComponent
    },
    {
        path: "employees/add",
        component: AddEmployeeComponent
    }
];
