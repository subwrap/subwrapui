import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../map/map";
import { AdPage } from "../adpage/adpage";
import { Tab1Page } from '../tab1/tab1';

/**
 * Generated class for the ForPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adlist',
  templateUrl: 'adlist.html',
})
export class AdListPage {
@ViewChild('img1') imgs: ElementRef;
ads:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ads = [
  	{
		"companyName": "Starbuck",
  		"image": "../assets/images/snicker.jpg",
  		"estimate" : "$12-34",
  		"wrap": " Full Wrap",
  		"kilometers": "35",
  		"location": " Toronto, ON, Canada"
  	}/*,
  	{
		"companyName": "Tim Holtons",
  		"image": "../assets/images/wrap.png",
  		"estimate" : "$12-34",
  		"wrap": " Full Wrap",
  		"kilometers": "35",
  		"location": " Toronto, ON, Canada"
  	},
  	{
		"companyName": "Second Cup",
  		"image": "../assets/images/wrap.png",
  		"estimate" : "$12-34",
  		"wrap": " Full Wrap",
  		"kilometers": "35",
  		"location": " Toronto, ON, Canada"
  	},*/

  	]
  }

  goToHome()
  {
	this.navCtrl.push(Tab1Page, {img: this.imgs.nativeElement.src});
  }
}
