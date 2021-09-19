import { Car } from 'src/app/shared/models/car.model';

export interface ICarState {
  cars: Car[];
  filteredCars: Car[];
  isListLoading: boolean;
}

export const initialCarState: ICarState = {
  cars: [],
  filteredCars: [],
  isListLoading: false,
};
