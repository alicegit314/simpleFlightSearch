import { TestBed, inject } from '@angular/core/testing';

import { HttpErrorHandlerService } from './http-error-handler.service';

describe('HttpEerrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorHandlerService]
    });
  });

  it('should be created', inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
