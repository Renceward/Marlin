import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloweenHolidayComponent } from './halloween-holiday.component';

describe('HalloweenHolidayComponent', () => {
  let component: HalloweenHolidayComponent;
  let fixture: ComponentFixture<HalloweenHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalloweenHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloweenHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
