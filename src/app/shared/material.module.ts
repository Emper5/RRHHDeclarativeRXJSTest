import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatPaginatorModule,
  MatDialogModule
]
@NgModule({
  imports: [...material],
  exports: [...material]
})
export class MaterialModule {}
