import { CarImages } from './car-images.model';

export interface Car {
  id: string;
  year: number;
  description: string;
  images: CarImages;
  model: string;
  price: string;
  make: string;
  kilometers: string;
}
