import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AccommodationComponent } from './accommodation/accommodation/accommodation.component';
import { CityComponent } from './city/city/city.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AccommodationItemComponent } from './accommodation/accommodation-item/accommodation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    CityComponent,
    AccommodationItemComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
      NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
