import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constObj } from 'src/app/shared/constants/app.constants';
import { Car } from 'src/app/shared/models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService {
  constructor(private http: HttpClient) {}

  getDetails(id: string): Observable<any> {
    return this.http.get(`${constObj.DATA_URL}/${id}`);
  }
}
