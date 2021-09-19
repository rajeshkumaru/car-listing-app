import { Action } from '@ngrx/store';
import { Car } from 'src/app/shared/models/car.model';

export enum ECarActions {
  GetCars = '[Carlist] Get Cars',
  GetCarSuccess = '[Carlist] Get Cars Success',
  LoadMoreCarSuccess = '[Carlist] More Cars Loaded Success',
  FilterCars = '[Carlist] Filter Cars',
}

export class GetCars implements Action {
  public readonly type = ECarActions.GetCars;
  constructor(public payload?: any) {}
}

export class GetCarsSucess implements Action {
  public readonly type = ECarActions.GetCarSuccess;
  constructor(public payload: Car[]) {}
}

export class LoadMoreCarSuccess implements Action {
  public readonly type = ECarActions.LoadMoreCarSuccess;
  constructor(public payload: Car[]) {}
}

export class FilterCars implements Action {
  public readonly type = ECarActions.FilterCars;
  constructor(public payload: string) {}
}

export type CarActions =
  | GetCars
  | GetCarsSucess
  | FilterCars
  | LoadMoreCarSuccess;
