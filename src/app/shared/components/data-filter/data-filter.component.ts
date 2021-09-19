import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
})
export class DataFilterComponent implements OnInit, AfterViewInit {
  @Input() placeHolderText: string = 'search';
  @Output() filterText = new EventEmitter();
  @ViewChild('search', { static: true }) searchInput!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1500),
        distinctUntilChanged(),
        tap(() => {
          this.filterText.emit(this.searchInput.nativeElement.value);
        })
      )
      .subscribe();
  }
}
