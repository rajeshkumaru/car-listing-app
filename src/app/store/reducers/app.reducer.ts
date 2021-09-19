import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { carReducers } from './car.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  cars: carReducers,
};
