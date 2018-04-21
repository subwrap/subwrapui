import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForYouPage } from '../for-you/for-you';
import { SellPage } from '../sell/sell';
import { VerifyPage } from '../verify/verify';
import { PersonalinfoPage } from '../personalinfo/personalinfo';
import { ProfilePage } from '../profile/profile'
@Component({
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  tab1Root = ForYouPage;
  tab2Root = VerifyPage;
  tab3Root = SellPage;
  tab4Root = PersonalinfoPage;
  tab5Root = ProfilePage;
  image: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.image = {id: navParams.get('img')};
  }
}
