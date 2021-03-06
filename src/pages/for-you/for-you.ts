import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
//import { Tab1Page } from '../tab1/tab1';
import { PersonalinfoPage } from '../personalinfo/personalinfo';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;
/**
 * Generated class for the ForYouPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-for-you',
  templateUrl: 'for-you.html',
})
export class ForYouPage {
   @ViewChild('map') mapElement: ElementRef;
   map: any;
   image: any;
 
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
		this.image = navParams.get('id');
  }

  ionViewDidLoad(){
    this.loadMap();
    this.getMarkers();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng( 43.7735, -79.5019);
 
    let mapOptions = {
      center: latLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
  goToDetail(){
	this.navCtrl.push(PersonalinfoPage);
  }
  goToMap()
  {
  this.navCtrl.push(MapPage);
  }

   getMarkers() {
    this.http.get('../assets/data/markers.json')
    .map((res) => res.json())
    .subscribe(data => {
      this.addMarkersToMap(data);
    });
  }

  addMarkersToMap(markers) {
    for(let marker of markers) {
      let customMarker = "../assets/custom-marker.png";
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var dogwalkMarker = new google.maps.Marker({position: position, title: marker.title, icon: customMarker});
      dogwalkMarker.setMap(this.map);
    }
  }
}
