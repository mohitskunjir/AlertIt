import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { GetMapDataService } from '../get-map-data.service';
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-dir-map',
  templateUrl: './dir-map.component.html',
  styleUrls: ['./dir-map.component.css']
})

export class DirMapComponent implements OnInit {

  url:string = "";
  hospData: any = [];
   lat: number;
   lng: number;
  victimLabel = 'X';
  HospitalLabel = 'H';
   origin: any = {};
   destination: any = {};
  currentHospData: HospitalData;
  query: string;
  status: any;
  constructor(private obj: Router, private http: HttpClient) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
			(position) => {
			  this.lat = position.coords.latitude;
			  this.lng = position.coords.longitude;
			  console.log("lat: " + this.lat + " lng: " + this.lng);
			},
			(error) => {
			  switch (error.code) {
				  case error.PERMISSION_DENIED:
					alert('Error: User denied the request for Geolocation.');
					  break;
				  case error.POSITION_UNAVAILABLE:
					  alert('Error: Location information is unavailable.');
					  break;
				  case error.TIMEOUT:
					  alert('Error: The request to get user location timed out.');
					  break;
				}
				this.hospData = [];
				this.obj.navigate(['/latlng']);
			},
			{timeout: 20000, enableHighAccuracy: GetMapDataService.accuracy }
        );
      } else {
            alert('Error: Navigator Not Available');
      }
  }

  getdata(query: string) {
    this.query = query;
    const url = GetMapDataService.prot + '://' + GetMapDataService.ip + ':' + GetMapDataService.port + '/latlng/' + query + ',' + this.lat + ',' + this.lng;
    this.http.get(url).subscribe((response) => {
      this.hospData = response;
    });
  }

  myMap(data: any) {
    this.currentHospData = data;
    
	this.origin = { lat: this.currentHospData.lat, lng: this.currentHospData.lng };
    this.destination = { lat: this.lat, lng: this.lng };
	// AIzaSyCP6bhFPs90anDdC1dL2IH76yRhh00XRtY
	// AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU
	this.url = 'https://www.google.com/maps/dir/?api=1&origin=' + this.currentHospData.lat + ',' + this.currentHospData.lng +'&origin_place_id='+ this.currentHospData.placeId +'&destination=' + this.lat + ',' + this.lng + '&travelmode=driving&key=AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU';
   // window.alert('Alert sent to corresponding ' + this.query + '.\n <a href="' + text + '" target="_blank"> Map Link </a>');
	
    const url = GetMapDataService.prot + '://' + GetMapDataService.ip + ':' + GetMapDataService.port + '/latlng/hosp/' + this.currentHospData.placeId + ',' + this.lat + ',' + this.lng;
	this.http.get(url).subscribe((response: any) => {
	
	  this.status = JSON.parse(response);
      console.log(this.status);
      console.log(this.status.status);

      if (this.status.status === 'failure') {
       // window.alert('Alert sent to corresponding ' + this.query + '.\n <a href="' + text + '" target="_blank"> Map Link </a>');
		}
	});
  }
  clickedMarker() {
    console.log('Clicked the marker:');
  }

  mapClicked($event: MouseEvent) {
    console.log('Map Clicked');
  }
}

interface HospitalData {
  lat: number;
  lng: number;
  address: string;
  name: string;
  placeId: string;
  phone: number;
}
