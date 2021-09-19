import { initialCarState, ICarState } from './car.state';

export interface IAppState {
  cars: ICarState;
}

export const initialAppState: IAppState = {
  cars: initialCarState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
