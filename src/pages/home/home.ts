import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BuildMusclePage} from './../build-muscle/build-muscle';
import {FeedbackPage} from './../feedback/feedback';
import {LoseWeightPage} from './../lose-weight/lose-weight';
import {Storage} from '@ionic/storage';
import { Flashlight } from '@ionic-native/flashlight';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myName: String;

  constructor(public navCtrl: NavController,private storage: Storage, private flashlight: Flashlight){

  }
  openBuildMuscle() {
    this.navCtrl.push(BuildMusclePage);
    }
    
    openFeedback() {
      this.navCtrl.push(FeedbackPage);
      }

      openLoseWeight() {
        this.navCtrl.push(LoseWeightPage);
        }

        openFlashlight() {
          this.flashlight.toggle();
        }

      updateStatus(){
        this.navCtrl.push("StatusPage");
        }

        ionViewWillEnter(){
          this.storage.get("myName")
          .then((data) =>
          {
          this.myName = data;
          })
          .catch((err) => {
          alert("Error accesssing Storage")
          })
          }
          

  }
  