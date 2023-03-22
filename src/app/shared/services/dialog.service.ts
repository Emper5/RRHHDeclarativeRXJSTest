import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DetailEmployeeComponent } from 'src/app/modules/employees/components/detail-employee/detail-employee.component'
import { Person } from '../../interfaces/population.interface'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public _dialog: MatDialog) {}

  openDetailEmployeeDialog(person: Person): void {
    this._dialog.open(DetailEmployeeComponent, {
      data: person,
      width: '450px',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms'
    })
  }
}
