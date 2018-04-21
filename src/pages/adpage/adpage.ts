import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarPage } from '../car/car';

/**
 * Generated class for the AdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adinfo',
  templateUrl: 'adpage.html',
})
export class AdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  ('../../assets/Images/carad.PNG')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdPage');
  }

  goBack()
  {
  this.navCtrl.push (CarPage);
  }

}
