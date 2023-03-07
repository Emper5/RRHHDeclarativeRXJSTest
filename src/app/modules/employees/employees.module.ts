import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmployeesComponent } from './employees.component'
import { EmployeesRoutingModule } from './employees-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PeopleServiceService } from './services/people-service.service'
import { PeopleHttpClient } from './services/people-http.client'
import { MaterialModule } from 'src/app/shared/material.module'

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeesComponent],
  providers: [PeopleHttpClient, PeopleServiceService]
})
export class EmployeesModule {}
