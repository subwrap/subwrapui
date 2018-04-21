import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MapPage } from "../map/map";
import { AdPage } from "../adpage/adpage";

/**
 * Generated class for the VerifyadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-for',
  templateUrl: 'verifyad.html',
})
export class VerifyadPage {
ads:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  	this.ads = [
  	{
		"companyName": "Starbuck",
  		"image": "../assets/images/wrap.png",
  		"estimate" : "$12-34",
  		"wrap": " Full Wrap",
  		"kilometers": "35",
  		"location": " Toronto, ON, Canada"
  	},
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
  	},

  	]
  }

  verify()
  {
	this.navCtrl.push(AdPage);
  }
}
