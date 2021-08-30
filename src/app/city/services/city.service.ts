import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../models/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl = 'http://localhost:8080/city';

  constructor(private http: HttpClient) {}

  getAllCities(): Observable<City[]>{
    return this.http.get<City[]>(this.baseUrl)
  };

  addNewCity(city: City): Observable<City>{
    return this.http.post<City>(this.baseUrl, city)
  };

  updateCity(city: City): Observable<City>{
    return this.http.put<City>(this.baseUrl, city)
  };

  deleteCity(id): Observable<City>{
    return this.http.delete<City>(this.baseUrl + '/' + id)
  };

  showAllCities(): Observable<City>{
    return this.http.get<City>(this.baseUrl + '/')
  };

  getCityById(id): Observable<City>{
    return this.http.get<City>(this.baseUrl + '/' + id)
  }
}
