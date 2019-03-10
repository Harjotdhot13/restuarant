import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<Item[]> {
    return this.http.get('../assets/db.json').pipe(
      map(this.unwrapResponse),
      catchError(this.handleErrors),
    );
  }

  unwrapResponse(response) {
    return response ? response.menu : '';
  }

  handleErrors(err: HttpErrorResponse): Observable<any> {
    return throwError(err);
  }
}
