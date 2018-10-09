import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data-service.service';


@Component({
  selector: 'search-by-flight-number',
  templateUrl: './search-by-flight-number.component.html',
  styleUrls: ['./search-by-flight-number.component.css']
})
export class SearchByFlightNumberComponent implements OnInit {

  model: any = {};
  errorMessage = new FormControl('', [Validators.required]);
  flightStatus : any[];
  resultContainer: boolean = false;
  displayResult: boolean;
  

  constructor(private _dataService: DataService) { }

  ngOnInit() { }

  getErrorMessage(){
    return this.errorMessage.hasError('required') ? 'Please enter a value' : '';
  }

  onSubmit(){

    this._dataService.getStatusByFlightNumber(this.model.flightNumber,this.model.date)
    .subscribe(
      data => { 
        this.flightStatus = data;
        /* If found -> show data; If not -> show message*/
        this.resultContainer = true;
        this.displayResult = this.flightStatus.length ? true : false;
      }
    );
    

  }
}
