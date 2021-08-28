import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccommodationComponent } from './accommodation/accommodation/accommodation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
