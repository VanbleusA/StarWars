import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { ThemePage } from '../pages/theme/theme';
import { AssociationPage } from '../pages/association/association';
import { ListPage } from '../pages/list/list';
import { DetailPeople } from '../pages/people/people';
import { DetailFilm } from '../pages/film/film';
import { DetailStarship } from '../pages/starship/starship';
import { DetailVehicle } from '../pages/vehicle/vehicle';
import { DetailSpecie } from '../pages/specie/specie';
import { DetailPlanet } from '../pages/planet/planet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StarWarsServiceProvider } from '../providers/star-wars-service/star-wars-service';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    ThemePage,
    AssociationPage,
    ListPage,
    DetailPeople,
    DetailFilm,
    DetailStarship,
    DetailVehicle,
    DetailSpecie,
    DetailPlanet
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    ThemePage,
    AssociationPage,
    ListPage,
    DetailPeople,
    DetailFilm,
    DetailStarship,
    DetailVehicle,
    DetailSpecie,
    DetailPlanet
  ],
  providers: [
    HttpClient,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StarWarsServiceProvider
  ]
})
export class AppModule {}
