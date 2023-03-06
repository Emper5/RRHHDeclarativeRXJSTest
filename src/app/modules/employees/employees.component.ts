import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator'
import { map, Observable, tap } from 'rxjs'
import { Person } from 'src/app/interfaces/population.interface'
import { PeopleServiceService } from '../../services/people-service.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements AfterViewInit {
  @ViewChild('paginator') paginator!: MatPaginator

  searchInput: FormControl = new FormControl('')
  peopleSelected$: Observable<Person[]> = this.peopleService.filteredPeople$
  allPeople$: Observable<Person[]> = this.peopleService.getAllPeople$.pipe(
    map((resp) => resp.population.person)
  )

  constructor(private peopleService: PeopleServiceService) {
    this.searchInput.valueChanges.subscribe((searchInput) => {
      this.peopleService.searchInput(searchInput)
    })
  }
  ngAfterViewInit() {
    this.paginator.page.subscribe((page) => {
      this.peopleService.paginationIndexSet(page.pageIndex)
      this.peopleService.paginationSizeSet(page.pageSize)
    })
  }
}
