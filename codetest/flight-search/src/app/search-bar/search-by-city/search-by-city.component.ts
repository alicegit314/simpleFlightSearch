import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data-service.service';


@Component({
  selector: 'search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.css']
})
export class SearchByCityComponent implements OnInit {
  model: any = {};
  errorMessage = new FormControl('', [Validators.required]);
  flightStatus : any[];
  showResultContainer: boolean = false;
  displayResult: boolean;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getErrorMessage(){
    return this.errorMessage.hasError('required') ? 'Please enter a value' : '';
  }

  onSubmit(){
    console.log(this.model);

    this._dataService.getStatusByCity(this.model.origin, this.model.destination, this.model.date)
      .subscribe(
        data => { 
          this.flightStatus = data;
          console.log("search result");
          console.log(this.flightStatus);
          /* If found -> show data; If not -> show message*/
          this.showResultContainer = true;
          this.displayResult = this.flightStatus.length ? true : false;
          console.log('displayResult');
          console.log(this.displayResult);
        }
      );
  }
}
