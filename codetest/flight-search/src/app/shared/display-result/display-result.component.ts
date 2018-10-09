import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FlightStatus } from '../../flight-status';
import { MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  @Input('result') data: any[];
  displayedColumns: string[] = ['flightNumber', 'carrier', 'origin', 'departure', 'destination','arrival','aircraft','distance','travelTime','status'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<FlightStatus>(this.data);
    this.dataSource.paginator = this.paginator;
    console.log("display result");
    console.log(this.data);
  }

}

