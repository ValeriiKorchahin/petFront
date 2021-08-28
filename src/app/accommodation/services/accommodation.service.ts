import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accommodation} from "../models/accomodation";
import {DynamicClass} from "../models/dynamicClass/dynamicClass";

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private baseUrl = 'http://localhost:8080/accommodation';

  constructor(private http: HttpClient) { }
  getAllAccommodation(): Observable<Accommodation[]>{
   return this.http.get<Accommodation[]>(this.baseUrl)
  };

 getAccommodationById(id): Observable<Accommodation> {
   return this.http.get<Accommodation>(this.baseUrl + '/' + id)
 };

addNewAccommodation(accommodation: Accommodation): Observable<Accommodation>{
 return this.http.post<Accommodation>(this.baseUrl, accommodation)
};

updateAccommodation(accommodation: Accommodation): Observable<Accommodation>{
  return this.http.put<Accommodation>(this.baseUrl, accommodation)
};

deleteAccommodation(id): Observable<Accommodation>{
  return this.http.delete<Accommodation>(this.baseUrl + '/' + id)
};

showFilteredAccommodation(dynamicClass: DynamicClass): Observable<Accommodation>{
  return this.http.post<Accommodation>(this.baseUrl + '/' + 'filter/', dynamicClass)
};

getSearchConfig(): Observable<DynamicClass>{
  return this.http.get<DynamicClass>(this.baseUrl + '/' + 'searchConfig')
}
}
