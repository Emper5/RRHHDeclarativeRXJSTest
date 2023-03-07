import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  TemplateRef,
  OnDestroy
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { Observable, Subject, takeUntil } from 'rxjs'
import { Person } from 'src/app/interfaces/population.interface'
import { PeopleServiceService } from './services/people-service.service'
import { Country } from 'src/app/shared/utils/data.enum'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>

  private unsubscribe$: Subject<boolean> = new Subject<boolean>()

  searchInput: FormControl = new FormControl('')
  peopleSelected$: Observable<Person[]> = this.peopleService.filteredPeople$
  lengthFilteredPerson$: Observable<number> =
    this.peopleService.lengthFilteredPerson$

  constructor(
    public dialog: MatDialog,
    private peopleService: PeopleServiceService
  ) {}

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((searchInput) => {
        this.peopleService.searchInput(searchInput)
      })
  }

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

  openDialog(
    person: Person,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(this.dialogRef, {
      data: person,
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration
    })
  }

  close() {
    this.dialog.closeAll()
  }

  getCountry(countryId: number) {
    return Country[countryId]
  }
}
