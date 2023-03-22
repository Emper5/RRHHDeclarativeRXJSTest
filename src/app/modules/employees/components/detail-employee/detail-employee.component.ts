import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Person } from 'src/app/interfaces/population.interface'
import { Country } from 'src/app/shared/utils/data.enum'

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person
  ) {}

  getCountry(countryId: number) {
    return Country[countryId]
  }

  close() {
    this.dialogRef.close()
  }
}
