import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  TemplateRef,
  OnDestroy
} from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { Observable, Subject, takeUntil, tap } from 'rxjs'
import { Person } from 'src/app/interfaces/population.interface'
import { PeopleService } from './services/people.service'
import { Country } from 'src/app/shared/utils/data.enum'
import { DialogService } from '../../shared/services/dialog.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>

  private unsubscribe$: Subject<boolean> = new Subject<boolean>()

  peopleSelected$: Observable<Person[]> = this.peopleService.filteredPeople$
  lengthFilteredPerson$: Observable<number> =
    this.peopleService.lengthFilteredPerson$

  constructor(
    public _dialogService: DialogService,
    private peopleService: PeopleService
  ) {}

  ngAfterViewInit() {
    this.paginator.page.pipe(takeUntil(this.unsubscribe$)).subscribe((page) => {
      this.peopleService.paginationIndexSet(page.pageIndex)
      this.peopleService.paginationSizeSet(page.pageSize)
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true)
    this.unsubscribe$.unsubscribe()
  }

  firstPageEvent() {
    this.paginator.firstPage()
  }

  openDetailEmployee(person: Person) {
    this._dialogService.openDetailEmployeeDialog(person)
  }
}
