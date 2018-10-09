import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( protected http: HttpClient ) { }

  getAll(path: string): Observable<any[]> {
    console.log()
    return this.http.get(`${environment.api_url}${path}`)
      .pipe(
        map(response => response as any[]),
        catchError(e => throwError(new Error('Error in api getall')))
      );
  }

}
