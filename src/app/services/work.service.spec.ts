import { TestBed } from '@angular/core/testing';

import { WorkService } from './work.service';

describe('WorkService', () => {
  let service: WorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getWorks', () => {
    it('cuando se llame el metodo, entonces debe retornar todas (55) registros', () => {
   
      
      // Act
      let resp = service.getWorks();
      // Assert
      expect(Object.keys(resp).length).toBe(5);
    });
  });
});
