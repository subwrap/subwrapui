import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ForPage } from '../for/for';
import { SearchPage } from '../search/search';
import { VerifyadPage } from '../verifyad/verifyad';
import {App} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
tab1Root = ForPage;
tab3Root: any;
tab5Root = ContactPage;

  constructor(protected app: App, public navCtrl: NavController, public navParams: NavParams) {
		if(navParams.get('check') == "no")
		{
			this.tab3Root = VerifyadPage;
		}
		else if(navParams.get('check') == "yes")
		{
			this.tab3Root = AboutPage;
		}
		else
		{
			alert("Verification Error");
			this.navCtrl.push(HomePage);
		}
  }
}
