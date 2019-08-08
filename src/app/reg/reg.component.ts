import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef, NgZone} from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { GetMapDataService } from '../get-map-data.service';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import {Address} from '../../../node_modules/ngx-google-places-autocomplete/objects/address';
import {Hosps} from './hosp';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})


export class RegComponent implements OnInit {

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search' ) public searchElement: ElementRef;

  public placeId: string;
  public mob_length: number;
  public emailValid = '';
  public submitted = false;
  public vsubmitted = false;
  public  model = new Hosps(null, null, null, null, null, null);

  ngOnInit() { }

constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private http: HttpClient, private obj: Router) {
  this.mob_length = 0;
  this.submitted = false;
  this.vsubmitted = false;
 }

 public handleAddressChange(address: Address) {

//   this.places.options.componentRestrictions = new ComponentRestrictions({
//     country: "IN"
// });

  console.log('Place ID ' + address.place_id);
  console.log('Name: ' + address.name);
  console.log('Address: ' + address.formatted_address);
  console.log('Latitude: ' + address.geometry.location.lat());
  console.log('Longitude: ' + address.geometry.location.lng());

  this.placeId = address.place_id;
}

onChangeEmail(newValue: string) {

  this.emailValid = '';

  if (newValue === '' || newValue == null) {
      this.emailValid = 'Email is required';
      this.submitted = false; // insert into database if submit is true
      this.reset();
  } else if (newValue.indexOf('@', 0) < 0) {
      this.emailValid = 'Invalid Email id';
     // alert(this.emailValid);
      this.submitted = false; // insert into database if submit is true
      this.reset();
    } else if (newValue.indexOf('.', 0) < 0) {
      this.emailValid = 'Invalid Email id';
    //  alert(this.emailValid);
      this.submitted = false; // insert into database if submit is true
      this.reset();
    } else {
      this.emailValid = '';
      this.submitted = true;
    //  alert('hi3');
    }
 }
onChangeCount(newValue: number) {
  this.model.vehicle_count = newValue;
  if (newValue == null) {
    alert('Vehicle Count Required');
    this.vsubmitted = false;
  } else if (newValue === 0) {
    alert('Vehicle Count Should be more than 0');
    this.vsubmitted = false;
  } else {
    this.vsubmitted = true;
  }
}

 button_disabled() {
   // console.log(this.model);
   // tslint:disable-next-line:max-line-length
   // console.log(this.model.adr==null && this.model.cpwd==null && this.model.hospn==null && this.model.mobile==null && this.model.pwd==null && this.model.vehicle_count==null);
   // tslint:disable-next-line:max-line-length
   return(this.model.hospn != null && this.model.cpwd != null && this.model.mobile != null && this.model.pwd != null && this.model.vehicle_count != null && this.model.email && this.submitted && this.vsubmitted);
 }

 keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;
  this.mob_length++;
  // tslint:disable-next-line:prefer-const
  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode !== 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

reset() {
  // this.model.vehicle_count = null;
  // this.model.pwd = null;
  // this.model.mobile = null;
  // this.model.hospn = null;
  // this.model.cpwd = null;
  // this.model.adr = null;
  // this.model.email = null;
}

onSubmit(data: any) {
  if (this.model.pwd === this.model.cpwd) {

   if (this.submitted = true) {
        // tslint:disable-next-line:max-line-length
		const url = GetMapDataService.prot + '://' + GetMapDataService.ip + ':' + GetMapDataService.port + '/latlng/update/' + this.placeId + '*' +  this.model.email + '*' + this.model.pwd + '*' + this.model.vehicle_count + '*' + this.model.mobile + '*' + 'online';
		// const url = 'https://10.20.6.118:8000/latlng/update/';
        this.http.get(url)
        .subscribe( (response) => {
              console.log(response);
              window.alert('Registeration successful try logging in\n');
              //this.obj.navigate(['/login']);
        });
        window.alert('Registeration successful try logging in');
       // this.obj.navigate(['/login']);
      }
    } else {
    alert('Passwords do not match');
    //this.submitted = false; // insert into database if submit is true
    this.reset();
  }
}

 ngOnchanges() {
  alert(this.model.mobile);
  }
}
