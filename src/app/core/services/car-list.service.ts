import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { constObj } from 'src/app/shared/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class CarListService {
  constructor(private http: HttpClient) {}

  getAll(paramsObj: any): Observable<any> {
    return this.http.get(
      `${constObj.DATA_URL}?_limit=${paramsObj.limit}&_page=${paramsObj.page}`
    );
  }
}
