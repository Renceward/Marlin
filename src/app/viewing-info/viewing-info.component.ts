import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewing-info',
  templateUrl: './viewing-info.component.html',
  styleUrls: ['./viewing-info.component.css']
})
export class ViewingInfoComponent implements OnInit {
  @Input() sectionType: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
