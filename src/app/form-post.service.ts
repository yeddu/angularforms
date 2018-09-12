import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './employee/employee';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FormPostService {

  constructor(private httpClient: HttpClient) { }

  private handleError(error: any) {
    console.error('post error: ', error);
    return throwError(error.statusText);
  }

  postEmployeeForm(employee: IEmployee): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient
    .post('http://localhost:3100/postempoloyee', JSON.stringify(employee), options).pipe(
      map(response => response['fields'] || { }),
      catchError(this.handleError)
    );
  }
}
