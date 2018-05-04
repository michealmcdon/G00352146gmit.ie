import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DietPage} from '../../pages/diet/diet';
import {ExercisePage} from '../../pages/exercise/exercise';

@IonicPage()
@Component({
  selector: 'page-build-muscle',
  templateUrl: 'build-muscle.html',
})
export class BuildMusclePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    openDiet() {
      this.navCtrl.push(DietPage);
      }
    openExercise() {
      this.navCtrl.push(ExercisePage);
    }
    
}
