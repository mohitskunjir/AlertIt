import { Component,  OnInit } from '@angular/core';
import { GetMapDataService } from './get-map-data.service';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AccidentAlert';
  ngOnInit() {
    
	if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
         
        },
        (error) => {
          switch (error.code) {
              case error.PERMISSION_DENIED:
                 alert('Error: User denied the request for Geolocation.');
                  break;
              case error.POSITION_UNAVAILABLE:
                  GetMapDataService.accuracy = false;
				  navigator.geolocation.getCurrentPosition(
						(position) => {
						  
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
												
						},
						{timeout: 20000, enableHighAccuracy: GetMapDataService.accuracy }
					);
                   break;
              case error.TIMEOUT:
                   GetMapDataService.accuracy = false;
				   navigator.geolocation.getCurrentPosition(
						(position) => {
						  
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
													
						},
						{timeout: 20000, enableHighAccuracy: GetMapDataService.accuracy }
					);
				   
				   
                   break;
            }
           
        },
        {timeout:20000, enableHighAccuracy: GetMapDataService.accuracy }
        );
    } else {
          alert('Error: Navigator Not Available');
    }
	
  }
}
