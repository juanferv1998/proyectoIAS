import { TestBed } from '@angular/core/testing';

import { CalHoursService } from './cal-hours.service';

describe('CalHoursService', () => {
  let service: CalHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getHours', () => {
    it('cuando se llame el metod, entonces debe retornar todas (25) registros', () => {
   
      
      // Act
      let resp = service.getHours();
      // Assert
      expect(Object.keys(resp).length).toBe(5);
    });
  });
});
