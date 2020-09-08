import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    HolidaysComponent,
    ScheduleComponent,
    LocationComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
