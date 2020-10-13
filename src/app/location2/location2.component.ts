import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location2',
  templateUrl: './location2.component.html',
  styleUrls: ['./location2.component.css']
})
export class Location2Component implements OnInit {
  @Input() sectionType: string;
  lat = 43.203862;
  lng = -88.126857;

  constructor() { }

  ngOnInit(): void {
  }

}
