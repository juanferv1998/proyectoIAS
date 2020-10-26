import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalHoursComponent } from './cal-hours.component';

describe('CalHoursComponent', () => {
  let component: CalHoursComponent;
  let fixture: ComponentFixture<CalHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
