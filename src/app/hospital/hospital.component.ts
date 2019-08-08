import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { GetMapDataService } from '../get-map-data.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})

export class HospitalComponent implements OnInit {
  
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
				this.lat = 18.5204;
				this.lng = 73.8567;
				this.hospData = [];
				this.obj.navigate(['/hospital']);
			},
			{timeout:20000, enableHighAccuracy: GetMapDataService.accuracy }
        );
    } else {
          alert('Error: Navigator Not Available');
    }
  }

  getdata(query:string) {
    this.query = query;
    const url = GetMapDataService.prot + '://' + GetMapDataService.ip + ':' + GetMapDataService.port + '/latlng/' + query + ',' + this.lat + ',' + this.lng;
    this.http.get(url).subscribe((response) => {
      this.hospData = response;
    });
  }

  myMap(data:any) {
    this.currentHospData = data;
    this.origin = { lat: this.currentHospData.lat, lng: this.currentHospData.lng };
    this.destination = { lat: this.lat, lng: this.lng };
    const url = GetMapDataService.prot + '://' + GetMapDataService.ip + ':' + GetMapDataService.port + '/latlng/hosp/' + this.currentHospData.placeId + ',' + this.lat + ',' + this.lng;
    this.http.get( url).subscribe((response: any) => {
      this.status = JSON.parse(response);
      console.log(this.status);
      console.log(this.status.status);

      if (this.status.status === 'failure') {
        window.alert('Alert sent to corresponding ' + this.query);
        console.log('Ambulance is Arriving!!!!');
        /*console.log(this.status.message.content);*/
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
