import {LocationList} from "./locationList";
import {MediaList} from "./mediaList";
import {RoomList} from "./roomList";
import {City} from "./city";


export interface Accommodation{
  accommodationClass: string;
  accommodationCondition: string;
  accommodationId: number;
  accommodationType: string;
  buildIn: string;
  locationEntityList: [LocationList];
  currency: string;
  description: string,
  distanceToCityCenter: number;
  location: [Location];
  mediaList: [MediaList];
  price: number;
  priceFrom: number;
  priceTo: number;
  roomList: [RoomList];
  squareMeterPrice: number;
  totalArea: number;
  city: City;
}
