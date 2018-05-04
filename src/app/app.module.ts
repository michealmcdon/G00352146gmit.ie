import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuildMusclePage } from '../pages/build-muscle/build-muscle';
import { LoseWeightPage } from '../pages/lose-weight/lose-weight';
import { GalleryProvider } from '../providers/gallery/gallery';
import { FeedbackPage } from '../pages/feedback/feedback';
import { DietPage } from '../pages/diet/diet';
import { ExercisePage } from '../pages/exercise/exercise';
import { HttpClientModule } from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { Flashlight } from '@ionic-native/flashlight';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuildMusclePage,
    LoseWeightPage,
    FeedbackPage,
    DietPage,
    ExercisePage
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
    HomePage,
    BuildMusclePage,
    LoseWeightPage,
    FeedbackPage,
    DietPage,
    ExercisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GalleryProvider,
    Flashlight
  ]
})
export class AppModule {}
