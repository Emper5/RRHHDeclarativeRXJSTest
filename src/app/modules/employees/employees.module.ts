import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmployeesComponent } from './employees.component'
import { EmployeesRoutingModule } from './employees-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../shared/material.module'
import { PeopleServiceService } from '../../services/people-service.service'
import { HttpClient } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeesComponent],
  providers: [PeopleServiceService, HttpClient]
})
export class EmployeesModule {}
