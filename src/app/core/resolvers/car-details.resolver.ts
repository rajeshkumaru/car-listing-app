import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetailsService } from '../services/car-details.service';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsResolver implements Resolve<boolean> {
  constructor(private carDetailsService: CarDetailsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.carDetailsService.getDetails(route.params.id);
  }
}
