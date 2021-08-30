import {mediaList} from "./mediaList";
import {roomList} from "./roomList";

export interface accommodationList{
  accommodationClass: string;
  accommodationCondition: string;
  accommodationId: number;
  accommodationType: string;
  buildIn: string;
  buildInFrom: string;
  buildInTo: string;
  currency: string;
  description: string;
  distanceToCityCenter: number;
  distanceToCityCenterFrom: string;
  distanceToCityCenterTo: string;
  mediaList: [mediaList];
  price: number;
  priceFrom: number;
  priceTo: number;
  roomList: [roomList];
  squareMeterPrice: number;
  squareMeterPriceFrom: string;
  squareMeterPriceTo: string;
  totalArea: number;
  totalAreaFrom: string;
  totalAreaTo: string;
}
