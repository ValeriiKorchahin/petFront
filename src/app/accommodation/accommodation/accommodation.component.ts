import { Component, OnInit } from '@angular/core';
import {AccommodationService} from "../services/accommodation.service";
import {Accommodation} from "../models/accomodation";


@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  accommodation: Accommodation[];
  page: number = 1;
  total: number;

  constructor(private AccommodationService: AccommodationService) { }

  ngOnInit(): void {
    this.AccommodationService.getAllAccommodation().subscribe(value => {this.accommodation = value; this.total = value.length})
  }
}
