import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subject,
  throwError
} from 'rxjs'
import { filterPersonsBySearchKeyValue } from 'src/app/shared/utils/filter-search.utils'
import { PeopleHttpClient } from './people-http.client'

@Injectable()
export class PeopleServiceService {
  private searchInputSubject = new BehaviorSubject<string>('')
  searchInput$ = this.searchInputSubject.asObservable().pipe(
    debounceTime(300),
    distinctUntilChanged(),
    map((searchInput) => searchInput.trim())
  )

  private paginationIndexSubject = new BehaviorSubject<number>(0)
  paginationIndex$ = this.paginationIndexSubject.asObservable()

  private paginationSizeSubject = new BehaviorSubject<number>(5)
  paginationSize$ = this.paginationSizeSubject.asObservable()

  private selectedPersonSubject = new Subject<number>()
  selectedPerson$ = this.selectedPersonSubject.asObservable()

  private lengthFilteredPersonSubject = new Subject<number>()
  lengthFilteredPerson$ = this.lengthFilteredPersonSubject.asObservable()

  getAllPeople$ = this.peopleHttpClient.getAllPeople$

  filteredPeople$ = combineLatest([
    this.getAllPeople$,
    this.searchInput$,
    this.paginationIndex$,
    this.paginationSize$
  ]).pipe(
    map(([resp, searchInput, index, size]) => {
      const response = filterPersonsBySearchKeyValue(
        resp.population.person,
        searchInput
      )
      this.lengthFilteredPersonSubject.next(response.length)
      return response.slice(index * size, index * size + size)
    }),
    catchError(this.handleError)
  )

  constructor(private peopleHttpClient: PeopleHttpClient) {}

  searchInput(searchInput: string): void {
    this.searchInputSubject.next(searchInput)
  }

  paginationIndexSet(index: number): void {
    this.paginationIndexSubject.next(index)
  }

  paginationSizeSet(size: number): void {
    this.paginationSizeSubject.next(size)
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`
    }
    console.error(err)
    return throwError(() => errorMessage)
  }
}
