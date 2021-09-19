import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ECarActions,
  GetCars,
  GetCarsSucess,
  LoadMoreCarSuccess,
} from '../actions/car.action';
import { Car } from 'src/app/shared/models/car.model';
import { CarListService } from 'src/app/core/services/car-list.service';

let isLoadMore: boolean;
@Injectable()
export class CarEffects {
  getCars = createEffect(() =>
    this.actions$.pipe(
      ofType<GetCars>(ECarActions.GetCars),
      switchMap((action) => {
        isLoadMore = action.payload.loadMore;
        return this.carListService.getAll(action.payload);
      }),
      switchMap((cars: Car[]) => {
        return of(
          !isLoadMore ? new GetCarsSucess(cars) : new LoadMoreCarSuccess(cars)
        );
      })
    )
  );

  constructor(
    private carListService: CarListService,
    private actions$: Actions
  ) {}
}
