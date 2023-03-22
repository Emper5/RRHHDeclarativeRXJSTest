import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'
import { Subject, takeUntil, tap } from 'rxjs'
import { PeopleService } from '../../services/people.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchInput: FormControl = new FormControl('')
  unsubscribe$: Subject<boolean> = new Subject<boolean>()
  @Output() firstPageEvent = new EventEmitter()

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => this.firstPageEvent.emit())
      )
      .subscribe((searchInput) => {
        this.peopleService.searchInput(searchInput)
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true)
    this.unsubscribe$.unsubscribe()
  }
}
