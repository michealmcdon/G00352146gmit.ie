import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
myName: String;

  constructor(public navCtrl: NavController, private storage:Storage, public navParams: NavParams) {
  }

  saveStatus(){
    this.storage.set("myName", this.myName);
    this.navCtrl.pop();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
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
