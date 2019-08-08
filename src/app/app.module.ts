import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {jquery} from '../../node_modules/jquery';
import { bootstrap} from '../../node_modules/bootstrap';
import { DirMapComponent } from './dir-map/dir-map.component';
import { LoginformComponent } from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalComponent } from './hospital/hospital.component';
import { RegComponent } from './reg/reg.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
const Routes = [

                  {
                    path: '',
                    component: DashboardComponent
                  },
                  {
                    path: 'dashboard',
                    component: DashboardComponent
                  },
                  {
                    path: 'latlng',
                    component: DirMapComponent
                  },
                  {
                    path: 'register',
                    component: RegComponent
                  },
                  {
                    path: 'login',
                    component: LoginformComponent
                  },
                  {
                    path: 'hospital',
                    component: HospitalComponent
                  }
               ];

@NgModule({
  declarations: [
    AppComponent,
    DirMapComponent,
    LoginformComponent,
    DashboardComponent,
    HospitalComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU'
	//AIzaSyCP6bhFPs90anDdC1dL2IH76yRhh00XRtY
	//AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU
  }),
  AgmDirectionModule,
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

/*

AIzaSyCubksSVmapTf6GsXYeeYocOrowwmhQbMA

AIzaSyAh_1OXACm_p-_gMFPcnKX6xA_ybph8GHw

AIzaSyBsoFXrzmQSz4ycTPYOZ8tD1UuNd9u5IOk

AIzaSyD_G9p1YTM1YkjqCBLSi6QDQ_k8tO_g2zg

AIzaSyDhPiRyV063UI4502AS-IN59FJ4sv7xMV8

,
    libraries: ["places"]

*/
