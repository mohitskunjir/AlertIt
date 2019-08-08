import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetMapDataService {

  // tslint:disable-next-line:no-inferrable-types
  public static prot: string = 'https';
  // 35.154.168.17
  // 10.20.6.118
   // tslint:disable-next-line:no-inferrable-types
  public static ip: string = 'https://webappalertit.azurewebsites.net';
  // tslint:disable-next-line:no-inferrable-types
  public static port: string = '443';
  // tslint:disable-next-line:no-inferrable-types
  public static accuracy: boolean = true;

  static lat: number;
  static lng: number;
  mapData: any = [];
  lng: number;

  constructor(private http: HttpClient) { }

  getAllMapData() {

    navigator.geolocation.getCurrentPosition(

    (position) => {
      GetMapDataService.lat = position.coords.latitude;
      GetMapDataService.lng = position.coords.longitude;
      this.http.get('/latlng/' + GetMapDataService.lat + ',' + GetMapDataService.lng).subscribe((response) => {
        this.mapData = response;
        console.log('getAllMapData() LatS: ');
        console.log(position.coords.latitude);
        console.log('getAllMapData() NameS: ');
        console.log(this.mapData[0].name);
        return this.mapData;
      });
    },
    (error) => {
      switch (error.code) {
          case error.PERMISSION_DENIED:
              console.log('Error: User denied the request for Geolocation.');
              break;
          case error.POSITION_UNAVAILABLE:
               console.log('Error: Location information is unavailable.');
               break;
          case error.TIMEOUT:
               console.log('Error: The request to get user location timed out.');
               break;
        }
        GetMapDataService.lat = 0;
        GetMapDataService.lng = 0;
    });
    return this.mapData;

  }

  sendPlaceId(placeId) {
    console.log('sendPlaceId() S PlaceId: ');
    console.log(placeId);
    this.http.get('/hosp/' + placeId);
  }
}
