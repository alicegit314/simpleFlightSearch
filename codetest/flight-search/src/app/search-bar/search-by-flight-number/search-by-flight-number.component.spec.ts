import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByFlightNumberComponent } from './search-by-flight-number.component';

describe('SearchByFlightNumberComponent', () => {
  let component: SearchByFlightNumberComponent;
  let fixture: ComponentFixture<SearchByFlightNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByFlightNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByFlightNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
