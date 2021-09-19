import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICarState } from '../state/car.state';

const carState = (state: IAppState) => state.cars;

export const selectIsListLoading = createSelector(
  carState,
  (state: ICarState) => state.isListLoading
);

export const selectCarData = createSelector(
  carState,
  (state: ICarState) => state.cars
);
export const selectFilteredCar = createSelector(
  carState,
  (state: ICarState) => state.filteredCars
);
