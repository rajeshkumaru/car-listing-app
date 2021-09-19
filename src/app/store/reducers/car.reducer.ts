import { CarActions, ECarActions } from '../actions/car.action';
import { initialCarState, ICarState } from './../state/car.state';

export const carReducers = (
  state = initialCarState,
  action: CarActions
): ICarState => {
  switch (action.type) {
    case ECarActions.GetCars: {
      return {
        ...state,
        isListLoading: true,
      };
    }
    case ECarActions.GetCarSuccess: {
      return {
        ...state,
        isListLoading: false,
        cars: [...action.payload],
      };
    }
    case ECarActions.LoadMoreCarSuccess: {
      return {
        ...state,
        isListLoading: false,
        cars: [...state.cars, ...action.payload],
      };
    }
    case ECarActions.FilterCars: {
      return {
        ...state,
        filteredCars: state.cars.filter((car) =>
          car.make.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    }

    default:
      return state;
  }
};
