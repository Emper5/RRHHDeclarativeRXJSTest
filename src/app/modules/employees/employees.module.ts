import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmployeesComponent } from './employees.component'
import { EmployeesRoutingModule } from './employees-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PeopleService } from './services/people.service'
import { PeopleHttpClient } from './services/people-http.client'
import { MaterialModule } from 'src/app/shared/material.module'
import { SearchComponent } from './components/search/search.component'
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component'

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeesComponent, SearchComponent, DetailEmployeeComponent],
  providers: [PeopleHttpClient, PeopleService]
})
export class EmployeesModule {}
