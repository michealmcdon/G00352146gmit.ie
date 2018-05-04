import { Component } from '@angular/core';
import {GalleryProvider} from '../../providers/gallery/gallery';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-diet',
  templateUrl: 'diet.html',
})
export class DietPage {
  movies: any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private mp:GalleryProvider) {
  }

  ionViewDidLoad(){
    this.mp.getMovies().subscribe(data =>
    {
    this.movies = data.Search;
    });
    }
  
}
