import {LocationEntityList} from "./locationEntityList";
import {LocationEntity} from "./locationEntity";
import {MediaEntityList} from "./mediaEntityList";
import {RoomEntityList} from "./roomEntityList";

export interface Accommodation{
  accommodationClass: string;
  accommodationCondition: string;
  accommodationId: number;
  accommodationType: string;
  buildIn: string;
  locationEntityList: [LocationEntityList];
  currency: string;
  description: string,
  distanceToCityCenter: number;
  locationEntity: [LocationEntity];
  mediaEntityList: [MediaEntityList];
  price: number;
  priceFrom: number;
  priceTo: number;
  roomEntityList: [RoomEntityList];
  squareMeterPrice: number;
  totalArea: number;
}
