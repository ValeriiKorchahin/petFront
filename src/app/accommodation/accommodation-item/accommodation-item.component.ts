import {Component, Input, OnInit} from '@angular/core';
import {Accommodation} from "../models/accomodation";

@Component({
  selector: 'app-accommodation-item',
  templateUrl: './accommodation-item.component.html',
  styleUrls: ['./accommodation-item.component.scss']
})
export class AccommodationItemComponent implements OnInit {

  @Input()
  accommodation: Accommodation

  constructor() { }

  ngOnInit(): void {
  }

}
