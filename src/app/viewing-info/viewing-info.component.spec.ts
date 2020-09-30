import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingInfoComponent } from './viewing-info.component';

describe('ViewingInfoComponent', () => {
  let component: ViewingInfoComponent;
  let fixture: ComponentFixture<ViewingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
