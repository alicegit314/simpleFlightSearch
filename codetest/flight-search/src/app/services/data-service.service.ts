import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlightStatus } from '../flight-status';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  org : string;
  dst : string;
  date: string;
  flightNum : string;

  constructor(private apiService: ApiService) { }



  /* get flight info by city */
  getStatusByCity(org: string, dst: string, date: Date) : Observable<FlightStatus[]> {
    this.org = org.trim().toUpperCase();
    this.dst = dst.trim().toUpperCase();
    this.date = JSON.stringify(date).replace('"', '').split("T")[0];
    console.log(this.date);

    return this.apiService.getAll('/flights').pipe(
      map(items => {
        return items.filter(
          item => item.origin == this.org && item.destination == this.dst && item.arrival.split("T")[0] == this.date)
        } , error => error)
    );
  }

  /* get flight info by flight number */
  getStatusByFlightNumber(flightNumber: string, date: Date) : Observable<FlightStatus[]> {
    this.flightNum = flightNumber.trim();
    this.date = JSON.stringify(date).replace('"', '').split("T")[0];
    console.log(this.date);
    console.log(this.flightNum);

    return this.apiService.getAll('/flights').pipe(
      map(items => {
        return items.filter(
          item => item.arrival.split("T")[0] == this.date && item.flightNumber == this.flightNum)
        } , error => error)
    );
  }

}
