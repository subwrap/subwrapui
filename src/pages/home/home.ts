import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AddinfoPage } from '../addinfo/addinfo';
import { TabsPage } from '../tabs/tabs';
import { Tab1Page } from '../tab1/tab1';
import { AdListPage } from '../adlist/adlist';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	qty: any;
	myImages: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.qty = 1;
	this.myImages = [
  	{
  		"image": "../assets/Images/SUPWRAP_LOGO.png"
  	}
	]
  }
login() {
  	this.navCtrl.push(TabsPage, {check: "no"});
  }

loginU() 
{
  this.navCtrl.push(AdListPage);
}

 register(){
 	this.navCtrl.push(RegisterPage);
 }
}
