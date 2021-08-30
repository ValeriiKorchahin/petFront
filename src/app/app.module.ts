import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccommodationComponent } from './accommodation/accommodation/accommodation.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    CityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
