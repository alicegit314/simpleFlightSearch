import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule, MatButtonModule, MatTabsModule, MatIconModule, MatDividerModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchByCityComponent } from './search-bar/search-by-city/search-by-city.component';
import { SearchByFlightNumberComponent } from './search-bar/search-by-flight-number/search-by-flight-number.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './services/api-service.service';
import { ResultNotFoundComponent } from './shared/result-not-found/result-not-found.component';
import { DisplayResultComponent } from './shared/display-result/display-result.component';







const appRoutes: Routes = [
  { path : 'search-by-city', component : SearchByCityComponent },
  { path : 'search-by-flight-number', component: SearchByFlightNumberComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchByCityComponent,
    SearchByFlightNumberComponent,
    ResultNotFoundComponent,
    DisplayResultComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : false }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
