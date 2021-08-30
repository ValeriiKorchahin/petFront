import {accommodationList} from "./accommodationList";

export interface LocationList{
  accommodationList: [accommodationList];
  latitude: string;
  locationId: string;
  longitude: string
}
