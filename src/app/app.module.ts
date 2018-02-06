import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { ThemePage } from '../pages/theme/theme';
import { AssociationPage } from '../pages/association/association';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';

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
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    ThemePage,
    AssociationPage,
    ListPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StarWarsServiceProvider
  ]
})
export class AppModule {}
