import { Component, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { MapPage } from '../map/map';
import * as moment from 'moment';
import { Geolocation } from '@ionic-native/geolocation';
import {TipsPage} from '../tips/tips'

declare var google;

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})

export class PersonalPage {
/* calendar */
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  
/* end of calendar */
	@ViewChild('map') mapElement: ElementRef;
	@ViewChild('cal') calen: ElementRef;
	@ViewChild('car') car: ElementRef;
	public person: any;
	public rate: number;
 	map: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.person = navParams.data; //Gets the person object

  }
  specific(){
	this.calen.nativeElement.style.display = "none";
	this.mapElement.nativeElement.style.display = "block";
	this.car.nativeElement.style.display = "block";
	
  }
  /* calendar */
    onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
  
  /* end of calendar */
  
	onModelChange(value) {
	this.rate = value;
	}

	ionViewDidLoad(){
	this.loadMap();
	this.addMarker();
	}

	loadMap(){

	let latLng = new google.maps.LatLng( 43.7735, -79.5019);

	let mapOptions = {
	  center: latLng,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	}

	goToMap(){
	this.mapElement.nativeElement.style.height = "300px";
	this.car.nativeElement.style.display = "none";
	}

	addMarker(){

	let marker = new google.maps.Marker({
	map: this.map,
	animation: google.maps.Animation.DROP,
	position: this.map.getCenter()
	});

	let content = "<h4>Information!</h4>";          

	this.addInfoWindow(marker, content);

	}

	addInfoWindow(marker, content){

	let infoWindow = new google.maps.InfoWindow({
	content: content
	});

	google.maps.event.addListener(marker, 'click', () => {
	infoWindow.open(this.map, marker);
	});

	}

}
