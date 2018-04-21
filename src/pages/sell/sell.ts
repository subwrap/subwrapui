import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarPage } from '../car/car';
import { UploadpicPage } from '../uploadpic/uploadpic';

@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {
	private user: string = "company";
	public Status: boolean = true;

  constructor(public navCtrl: NavController) {
	}
 
	goNext (){

		this.navCtrl.push(UploadpicPage, {usertype: this.user});

	}

	uploadIMG() {
		this.Status = false;
	}

}
