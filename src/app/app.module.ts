import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewingInfoComponent } from './viewing-info/viewing-info.component';
import { Location2Component } from './location2/location2.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    HolidaysComponent,
    ScheduleComponent,
    LocationComponent,
    FooterComponent,
    GalleryComponent,
    ViewingInfoComponent,
    Location2Component
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfAmwxGLr-_KCqQMAqzX75M1OwYAjFUHg',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
