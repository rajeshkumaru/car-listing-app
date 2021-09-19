import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { constObj } from 'src/app/shared/constants/app.constants';
import { Car } from 'src/app/shared/models/car.model';
import { FilterCars, GetCars } from 'src/app/store/actions/car.action';
import {
  selectCarData,
  selectFilteredCar,
  selectIsListLoading,
} from 'src/app/store/selectors/car.selector';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public page: number = constObj.PAGE;
  public limit: number = constObj.LIMIT;
  public searchString: string = '';
  public isLoading: Observable<boolean> = this.store.pipe(
    select(selectIsListLoading)
  );
  public data: Observable<Car[]> = this.store.pipe(select(selectCarData));
  public filteredData: Observable<Car[]> = this.store.pipe(
    select(selectFilteredCar)
  );

  constructor(private router: Router, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      new GetCars({
        limit: constObj.LIMIT,
        page: constObj.PAGE,
        loadMore: false,
      })
    );
  }

  viewDetails(id: string) {
    this.router.navigate(['/car/details/', id]);
  }

  loadMore() {
    let params: any = {
      limit: this.limit,
      page: ++this.page,
      loadMore: true,
    };
    this.store.dispatch(new GetCars(params));
  }

  getSearchededText(searchString: string) {
    this.searchString = searchString;
    this.store.dispatch(new FilterCars(this.searchString));
  }
}
