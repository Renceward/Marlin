import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasHolidayComponent } from './christmas-holiday.component';

describe('ChristmasHolidayComponent', () => {
  let component: ChristmasHolidayComponent;
  let fixture: ComponentFixture<ChristmasHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
