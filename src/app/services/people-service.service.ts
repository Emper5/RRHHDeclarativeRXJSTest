import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  Person,
  ResponsePopulationApi
} from '../interfaces/population.interface'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subject,
  switchMap,
  throwError
} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
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

  getAllPeople$ = this.httpClient.get<ResponsePopulationApi>(
    'https://storage.googleapis.com/web-aktios/entrevista-tecnica/info-population.json'
  )
  filteredPeople$ = combineLatest([
    this.getAllPeople$,
    this.searchInput$,
    this.paginationIndex$,
    this.paginationSize$
  ]).pipe(
    map(([resp, searchInput, index, size]) => {
      const response = resp.population.person.filter((person: Person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
      )
      return response.slice(index * size, index * size + size)
    }),
    catchError(this.handleError)
  )

  personSelected$ = this.selectedPerson$.pipe(
    switchMap((personId) =>
      this.getAllPeople$.pipe(
        map((people) =>
          people.population.person.find((person) => person.id === personId)
        )
      )
    )
  )

  constructor(private httpClient: HttpClient) {}

  searchInput(searchInput: string): void {
    this.searchInputSubject.next(searchInput)
  }

  personSelected(id: number): void {
    this.selectedPersonSubject.next(id)
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
