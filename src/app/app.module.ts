import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from './../pages/details/details';

import { MobxAngularModule } from 'mobx-angular';

import { IonicStorageModule } from "@ionic/storage";
import { HttpServiceModule } from '../shared/http/index';
import { BirthdayStore } from '../shared/stores/birthday.store';
import { BirthdayService } from '../shared/services/birthday.service';
import { ConfigService } from '../shared/services/app-config.service';
import { HttpModule } from '@angular/http';

export function configServiceFactory (config: ConfigService) {
  return () => config.load()
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpServiceModule.forRoot(),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    MobxAngularModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService], 
      multi: true
    },
    ConfigService,
    BirthdayStore,
    BirthdayService
  ]
})
export class AppModule {}