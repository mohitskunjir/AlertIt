(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pos {\r\n    /* position: sticky; */\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-dark pos\">\n        <div class=\"navbar-header\">\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"#navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          &nbsp;&nbsp;\n          <a class=\"navbar-brand\" routerLink=\"/dashboard\">Alert IT</a>\n        </div>\n        <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/dashboard\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/latlng\">Emergency Service</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/hospital\">Hospital</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/register\" >Register</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/login\" >Sign In</a>\n            </li>\n          </ul>\n        </div>\n      </nav> \n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_map_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-map-data.service */ "./src/app/get-map-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AccidentAlert';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
            }, function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert('Error: User denied the request for Geolocation.');
                        break;
                    case error.POSITION_UNAVAILABLE:
                        _get_map_data_service__WEBPACK_IMPORTED_MODULE_1__["GetMapDataService"].accuracy = false;
                        navigator.geolocation.getCurrentPosition(function (position) {
                        }, function (error) {
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
                        }, { timeout: 20000, enableHighAccuracy: _get_map_data_service__WEBPACK_IMPORTED_MODULE_1__["GetMapDataService"].accuracy });
                        break;
                    case error.TIMEOUT:
                        _get_map_data_service__WEBPACK_IMPORTED_MODULE_1__["GetMapDataService"].accuracy = false;
                        navigator.geolocation.getCurrentPosition(function (position) {
                        }, function (error) {
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
                        }, { timeout: 20000, enableHighAccuracy: _get_map_data_service__WEBPACK_IMPORTED_MODULE_1__["GetMapDataService"].accuracy });
                        break;
                }
            }, { timeout: 20000, enableHighAccuracy: _get_map_data_service__WEBPACK_IMPORTED_MODULE_1__["GetMapDataService"].accuracy });
        }
        else {
            alert('Error: Navigator Not Available');
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dir_map_dir_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dir-map/dir-map.component */ "./src/app/dir-map/dir-map.component.ts");
/* harmony import */ var _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginform/loginform.component */ "./src/app/loginform/loginform.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hospital_hospital_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hospital/hospital.component */ "./src/app/hospital/hospital.component.ts");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/reg/reg.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var Routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
    },
    {
        path: 'latlng',
        component: _dir_map_dir_map_component__WEBPACK_IMPORTED_MODULE_8__["DirMapComponent"]
    },
    {
        path: 'register',
        component: _reg_reg_component__WEBPACK_IMPORTED_MODULE_12__["RegComponent"]
    },
    {
        path: 'login',
        component: _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_9__["LoginformComponent"]
    },
    {
        path: 'hospital',
        component: _hospital_hospital_component__WEBPACK_IMPORTED_MODULE_11__["HospitalComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dir_map_dir_map_component__WEBPACK_IMPORTED_MODULE_8__["DirMapComponent"],
                _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_9__["LoginformComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _hospital_hospital_component__WEBPACK_IMPORTED_MODULE_11__["HospitalComponent"],
                _reg_reg_component__WEBPACK_IMPORTED_MODULE_12__["RegComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_13__["GooglePlaceModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(Routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU'
                    //AIzaSyCP6bhFPs90anDdC1dL2IH76yRhh00XRtY
                    //AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_5__["AgmDirectionModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

/*

AIzaSyCubksSVmapTf6GsXYeeYocOrowwmhQbMA

AIzaSyAh_1OXACm_p-_gMFPcnKX6xA_ybph8GHw

AIzaSyBsoFXrzmQSz4ycTPYOZ8tD1UuNd9u5IOk

AIzaSyD_G9p1YTM1YkjqCBLSi6QDQ_k8tO_g2zg

AIzaSyDhPiRyV063UI4502AS-IN59FJ4sv7xMV8

,
    libraries: ["places"]

*/


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align_btn  {\r\n    -webkit-transform: translateY(180%);\r\n            transform: translateY(180%);\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row align_btn  justify-content-center align-items-center\">  \r\n        <div class=\"col-xs-3 offset-xs-6 col-md-3 w-75 btn-group-vertical\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-lg\" style=\"margin-bottom:20px\"><a [routerLink]=\"['/latlng']\" routerLinkActive=\"router-link-active\" style=\"color:white\">Emergency Services</a></button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-lg\" style=\"margin-bottom:20px\"><a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" style=\"color:white\">Register</a></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dir-map/dir-map.component.css":
/*!***********************************************!*\
  !*** ./src/app/dir-map/dir-map.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-class {\r\n  position: fixed;\r\n  padding: 0;\r\n  margin-top: 3.63em; \r\n  z-index: 1;\r\n}\r\n\r\nagm-map { \r\n  height: 215px;\r\n  width: 100%;\r\n}\r\n\r\n.btn{\r\n  margin: 10px 5px;\r\n  font-size: 12px;\r\n  padding: 1px\r\n}\r\n\r\n.btn-grp{\r\n  position: fixed;\r\n  width:107%;\r\n  z-index: 100;\r\n  background-color: #007bff;\r\n}\r\n\r\n.btn:hover{\r\n  color: black;\r\n}\r\n\r\n.btn:active{\r\n  color: black;\r\n}\r\n\r\n.modal.show .modal-dialog {\r\n    -webkit-transform: translate(0,0);\r\n    transform: translate(0,190%);\r\n}"

/***/ }),

/***/ "./src/app/dir-map/dir-map.component.html":
/*!************************************************!*\
  !*** ./src/app/dir-map/dir-map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid fixed-top map-class\" >\n  <div class=\"row\">\n    <div class=\"col-md-12 col-xs-12\">\n      <agm-map  [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" (mapClick)=\"mapClicked($event)\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"victimLabel\" [opacity]=\"0.6\" (markerClick)=\"clickedMarker()\">\n          <agm-info-window>\n              <strong>Current Location</strong>\n              <br/>\n              <span>Latitude: {{this.lat}}</span>\n              <br/>\n              <span>Longitude: {{this.lng}}</span>\n            </agm-info-window>\n        </agm-marker>\n        <agm-direction [origin]=\"this.origin\" [destination]=\"this.destination\">\n            <!-- <agm-info-window>\n              <strong>{{this.currentData.name}}</strong>\n              <br/>\n              <span>Latitude: {{this.currentData.lat}}</span>\n              <br/>\n              <span>Longitude: {{this.currentData.lng}}</span>\n            </agm-info-window> -->\n        </agm-direction>\n      </agm-map> \n    </div>\n  </div>\n    <div  class=\"row text-center  btn-group btn-grp \">\n      <div class=\"col-md-3 col-xs-3 w-25\" >\n          <button class=\"btn btn-primary\"  name = \"hospital\" value=\"hospital\" (click)=\"getdata('Hospital')\">Hospital</button>\n      </div>\n      <div class=\"col-md-3 col-xs-3 w-25\">\n          <button class=\"btn btn-primary\"  name = \"bloodbank\" value=\"bloodbank\" (click)=\"getdata('Blood Bank')\">Blood Bank</button>\n      </div>\n      <div class=\"col-md-3 col-xs-3 w-25\" >\n          <button class=\"btn btn-primary\" name = \"police\" value=\"police\" (click)=\"getdata('Police Station')\">Police Station</button>\n      </div>\n      <div class=\"col-md-3 col-xs-3 w-25\">\n        <button class=\"btn btn-primary\"  name = \"fire\" value=\"fire\" (click)=\"getdata('Fire Station')\">Fire Station</button>\n      </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\" style=\"margin-top: calc(3.63em + 265px);\">\n    <div class=\"row card-deck\">\n        <div *ngFor=\"let hospData of hospData\" class=\"col-md-4 col-xs-4 card\">\n          <div class=\"card-header text-center\" >\n            <strong>\n              {{hospData.name}}\n            </strong>\n          </div>\n          <div class=\"card-body text-center\" >\n            {{hospData.address}}\n          </div>\n          <div class=\"card-footer text-center\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"myMap(hospData)\"><strong>Confirm this {{this.query}}</strong></button>\n          </div>\n        </div>\n  </div>\n</div>\n\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog text-center\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n\t\t <h4 class=\"modal-title\">Response</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n         \n        </div>\n        <div class=\"modal-body\">\n          <a target=\"_blank\" href={{this.url}}>Map Link</a>\n        </div>\n      \n      </div>\n      \n    </div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dir-map/dir-map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dir-map/dir-map.component.ts ***!
  \**********************************************/
/*! exports provided: DirMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirMapComponent", function() { return DirMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-map-data.service */ "./src/app/get-map-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DirMapComponent = /** @class */ (function () {
    function DirMapComponent(obj, http) {
        this.obj = obj;
        this.http = http;
        this.url = "";
        this.hospData = [];
        this.victimLabel = 'X';
        this.HospitalLabel = 'H';
        this.origin = {};
        this.destination = {};
    }
    DirMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                console.log("lat: " + _this.lat + " lng: " + _this.lng);
            }, function (error) {
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
                _this.lat = 18.5204;
                _this.lng = 73.8567;
                _this.hospData = [];
                _this.obj.navigate(['/latlng']);
            }, { timeout: 20000, enableHighAccuracy: _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].accuracy });
        }
        else {
            alert('Error: Navigator Not Available');
        }
    };
    DirMapComponent.prototype.getdata = function (query) {
        var _this = this;
        this.query = query;
        var url = _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].prot + '://' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].ip + ':' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].port + '/latlng/' + query + ',' + this.lat + ',' + this.lng;
        this.http.get(url).subscribe(function (response) {
            _this.hospData = response;
        });
    };
    DirMapComponent.prototype.myMap = function (data) {
        var _this = this;
        this.currentHospData = data;
        this.origin = { lat: this.currentHospData.lat, lng: this.currentHospData.lng };
        this.destination = { lat: this.lat, lng: this.lng };
        // AIzaSyCP6bhFPs90anDdC1dL2IH76yRhh00XRtY
        // AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU
        this.url = 'https://www.google.com/maps/dir/?api=1&origin=' + this.currentHospData.lat + ',' + this.currentHospData.lng + '&origin_place_id=' + this.currentHospData.placeId + '&destination=' + this.lat + ',' + this.lng + '&travelmode=driving&key=AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU';
        // window.alert('Alert sent to corresponding ' + this.query + '.\n <a href="' + text + '" target="_blank"> Map Link </a>');
        var url = _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].prot + '://' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].ip + ':' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].port + '/latlng/hosp/' + this.currentHospData.placeId + ',' + this.lat + ',' + this.lng;
        this.http.get(url).subscribe(function (response) {
            _this.status = JSON.parse(response);
            console.log(_this.status);
            console.log(_this.status.status);
            if (_this.status.status === 'failure') {
                // window.alert('Alert sent to corresponding ' + this.query + '.\n <a href="' + text + '" target="_blank"> Map Link </a>');
            }
        });
    };
    DirMapComponent.prototype.clickedMarker = function () {
        console.log('Clicked the marker:');
    };
    DirMapComponent.prototype.mapClicked = function ($event) {
        console.log('Map Clicked');
    };
    DirMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dir-map',
            template: __webpack_require__(/*! ./dir-map.component.html */ "./src/app/dir-map/dir-map.component.html"),
            styles: [__webpack_require__(/*! ./dir-map.component.css */ "./src/app/dir-map/dir-map.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DirMapComponent);
    return DirMapComponent;
}());



/***/ }),

/***/ "./src/app/get-map-data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/get-map-data.service.ts ***!
  \*****************************************/
/*! exports provided: GetMapDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMapDataService", function() { return GetMapDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetMapDataService = /** @class */ (function () {
    function GetMapDataService(http) {
        this.http = http;
        this.mapData = [];
    }
    GetMapDataService_1 = GetMapDataService;
    GetMapDataService.prototype.getAllMapData = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            GetMapDataService_1.lat = position.coords.latitude;
            GetMapDataService_1.lng = position.coords.longitude;
            _this.http.get('/latlng/' + GetMapDataService_1.lat + ',' + GetMapDataService_1.lng).subscribe(function (response) {
                _this.mapData = response;
                console.log('getAllMapData() LatS: ');
                console.log(position.coords.latitude);
                console.log('getAllMapData() NameS: ');
                console.log(_this.mapData[0].name);
                return _this.mapData;
            });
        }, function (error) {
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
            GetMapDataService_1.lat = 0;
            GetMapDataService_1.lng = 0;
        });
        return this.mapData;
    };
    GetMapDataService.prototype.sendPlaceId = function (placeId) {
        console.log('sendPlaceId() S PlaceId: ');
        console.log(placeId);
        this.http.get('/hosp/' + placeId);
    };
    // tslint:disable-next-line:no-inferrable-types
    GetMapDataService.prot = 'https';
    // 35.154.168.17
    // 10.20.6.118
    // tslint:disable-next-line:no-inferrable-types
    GetMapDataService.ip = 'webappalertit.azurewebsites.net';
    // tslint:disable-next-line:no-inferrable-types
    GetMapDataService.port = '443';
    // tslint:disable-next-line:no-inferrable-types
    GetMapDataService.accuracy = true;
    GetMapDataService = GetMapDataService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetMapDataService);
    return GetMapDataService;
    var GetMapDataService_1;
}());



/***/ }),

/***/ "./src/app/hospital/hospital.component.css":
/*!*************************************************!*\
  !*** ./src/app/hospital/hospital.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-class {\r\n  position: fixed;\r\n  padding: 0;\r\n  margin-top: 3.63em; \r\n  z-index: 1;\r\n}\r\n\r\nagm-map { \r\n  height: 215px;\r\n}\r\n\r\n.table { \r\n  background-color: aliceblue;\r\n}\r\n\r\n.btn {\r\n  margin: 10px 5px;\r\n  font-size: 12px;\r\n  padding: 5px\r\n}\r\n\r\n.btn:hover {\r\n  color: black;\r\n}\r\n\r\n.btn:active {\r\n  color: black;\r\n} \r\n\r\n"

/***/ }),

/***/ "./src/app/hospital/hospital.component.html":
/*!**************************************************!*\
  !*** ./src/app/hospital/hospital.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid fixed-top map-class\" >\n  <div class=\"row\">\n    <div class=\"col-md-12 col-xs-12\">\n      <agm-map   [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" (mapClick)=\"mapClicked($event)\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"victimLabel\" [opacity]=\"0.6\" (markerClick)=\"clickedMarker()\">\n          <agm-info-window>\n              <strong>Current Location</strong>\n              <br/>\n              <span>Latitude: {{this.lat}}</span>\n              <br/>\n              <span>Longitude: {{this.lng}}</span>\n            </agm-info-window>\n        </agm-marker>\n        <agm-direction [origin]=\"this.origin\" [destination]=\"this.destination\">\n        \n        </agm-direction>\n      </agm-map> \n    </div>\n  </div>\n\n  <div class=\"row  text-right\" style=\"background-color: #007bff;\">\n    <div class=\" col-md-12 col-xs-12\"> \n      <div>count 2/4</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" style=\"margin-top: calc(3.63em + 245px);\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-xs-12\"> \n      <table class=\"table table-striped table_style text-center\" >\n        <thead >\n          <tr>\n            <th scope=\"col\">Contact</th>\n            <th scope=\"col\">Area</th>\n            <!-- <th scope=\"col\">Ambulance</th> -->\n            <th scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr > \n            <td>9130653056</td>\n            <td>Viman Nagar</td>\n            <!-- <td>MH 12 AY 5676</td> -->\n            <td>\n              <button class=\"btn btn-primary\">View Location</button>\n              <button class=\"btn btn-primary\">Report User</button>\n            </td>\n          </tr>\n          <tr > \n            <td>9130653056</td>\n            <td>Viman Nagar</td>\n            <!-- <td>MH 12 AY 5676</td> -->\n            <td>\n              <button class=\"btn btn-primary\">View Location</button>\n              <button class=\"btn btn-primary\">Report User</button>\n            </td>\n          </tr>\n          <tr > \n            <td>9130653056</td>\n            <td>Viman Nagar</td>\n            <!-- <td>MH 12 AY 5676</td> -->\n            <td>\n              <button class=\"btn btn-primary\">View Location</button>\n              <button class=\"btn btn-primary\">Report User</button>\n            </td>\n          </tr>\n          <tr > \n            <td>9130653056</td>\n            <td>Viman Nagar</td>\n            <!-- <td>MH 12 AY 5676</td> -->\n            <td>\n              <button class=\"btn btn-primary\">View Location</button>\n              <button class=\"btn btn-primary\">Report User</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/hospital/hospital.component.ts":
/*!************************************************!*\
  !*** ./src/app/hospital/hospital.component.ts ***!
  \************************************************/
/*! exports provided: HospitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalComponent", function() { return HospitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-map-data.service */ "./src/app/get-map-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HospitalComponent = /** @class */ (function () {
    function HospitalComponent(obj, http) {
        this.obj = obj;
        this.http = http;
        this.hospData = [];
        this.victimLabel = 'X';
        this.HospitalLabel = 'H';
        this.origin = {};
        this.destination = {};
    }
    HospitalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            }, function (error) {
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
                _this.lat = 18.5204;
                _this.lng = 73.8567;
                _this.hospData = [];
                _this.obj.navigate(['/hospital']);
            }, { timeout: 20000, enableHighAccuracy: _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].accuracy });
        }
        else {
            alert('Error: Navigator Not Available');
        }
    };
    HospitalComponent.prototype.getdata = function (query) {
        var _this = this;
        this.query = query;
        var url = _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].prot + '://' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].ip + ':' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].port + '/latlng/' + query + ',' + this.lat + ',' + this.lng;
        this.http.get(url).subscribe(function (response) {
            _this.hospData = response;
        });
    };
    HospitalComponent.prototype.myMap = function (data) {
        var _this = this;
        this.currentHospData = data;
        this.origin = { lat: this.currentHospData.lat, lng: this.currentHospData.lng };
        this.destination = { lat: this.lat, lng: this.lng };
        var url = _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].prot + '://' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].ip + ':' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_3__["GetMapDataService"].port + '/latlng/hosp/' + this.currentHospData.placeId + ',' + this.lat + ',' + this.lng;
        this.http.get(url).subscribe(function (response) {
            _this.status = JSON.parse(response);
            console.log(_this.status);
            console.log(_this.status.status);
            if (_this.status.status === 'failure') {
                window.alert('Alert sent to corresponding ' + _this.query);
                console.log('Ambulance is Arriving!!!!');
                /*console.log(this.status.message.content);*/
            }
        });
    };
    HospitalComponent.prototype.clickedMarker = function () {
        console.log('Clicked the marker:');
    };
    HospitalComponent.prototype.mapClicked = function ($event) {
        console.log('Map Clicked');
    };
    HospitalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hospital',
            template: __webpack_require__(/*! ./hospital.component.html */ "./src/app/hospital/hospital.component.html"),
            styles: [__webpack_require__(/*! ./hospital.component.css */ "./src/app/hospital/hospital.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HospitalComponent);
    return HospitalComponent;
}());



/***/ }),

/***/ "./src/app/loginform/loginform.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginform/loginform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\nhtml,body{\r\n\tmargin:0px;\r\n\tpadding:0px;\r\n}\r\n#main-container {\r\n    margin-top: 80px;\r\n  /* position: relative; */\r\n  /* background-image: url('../images/low rez image .png'); */\r\n  /* background-color: aqua; */\r\n  /* background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: 100% 0%; */\r\n}\r\n.center-container{\r\n    position:absolute;\r\n    top:10%;\r\n   \r\n    width: auto;\r\n    border: 1px solid black;\r\n   \r\n    border-radius: 5px;\r\n    background-color: rgba(0, 0, 0, 0.09);\r\n}\r\n.field{\r\n    height:40px;\r\n    position: relative;\r\n    margin-bottom:35px;\r\n    font-family: Arial;\r\n}\r\ninput:focus ~ .floating-label,\r\ninput:not(:focus):valid ~ .floating-label{\r\n  top: 0px;\r\n  bottom: 10px;\r\n  left: 0px;\r\n  font-size: 11px;\r\n  opacity: 1;\r\n}\r\ninput {\r\n    text-indent: 66px;\r\n  font-size: 16px;\r\n  width:100%;\r\n  height:100%;\r\n  background: transparent;\r\n  border:0px;\r\n  border-bottom: 1px solid #000000;\r\n  outline:none;\r\n  padding-top:10px;\r\n  color:#000000;\r\n}\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active {\r\n   transition: background-color 5000s ease-in-out 0s;\r\n}\r\n.floating-label {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 0px;\r\n  top: 18px;\r\n  transition: 0.2s ease all;\r\n  color:#000000;\r\n}\r\nbutton.btn-default{\r\n    background: black;\r\n    color: white;\r\n    border: 1px solid black;\r\n    font-weight:bold;\r\n    border-radius: 0;\r\n    width: 150px;\r\n   \r\n}\r\n.register{\r\n    color:#000000;\r\n    \r\n}\r\n.register a{\r\n    color:#000000;\r\n}\r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: black;\r\n    opacity: 1;\r\n    margin-left:-12px; /* Firefox */\r\n  }\r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: black;\r\n    opacity: 1;\r\n    margin-left:-12px; /* Firefox */\r\n  }\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: black;\r\n    opacity: 1;\r\n    margin-left:-12px; /* Firefox */\r\n  }\r\n"

/***/ }),

/***/ "./src/app/loginform/loginform.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginform/loginform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"main-container\">\n  <div class=\"row\">\n      <div class=\"col-md-12 offset-md-3 col-xs-12 offset-xs-4 center-container\">\n                <form #userlogin = \"ngForm\" (ngSubmit) = \"onClickSubmit(userlogin.value)\" >  \n                  <div class=\"field form-group\">\n                      <input  class=\"form-control\"  type=\"text\" name=\"emailIdL\"  id=\"emailIdL\" required=\"required\" (change)=\"clearEmail($event.target.value)\"  ngModel emailIdL>\n                      <span class=\"floating-label\" >Email address:</span>\n                      <p name=\"emailValidL\" id=\"emailValidL\" style=\"color: red\">{{this.emailValidL}}</p>\n                  </div> \n                  <div class=\"field form-group\">\n                    <input    class=\"form-control\"  type=\"password\" name = \"passwdL\" id=\"passwdL\" (change)=\"clear()\" ngModel required>\n                    <span class=\"floating-label\" >Password</span>\n                    <p name=\"passwd1ValidL\" id=\"passwd1ValidL\" style=\"color: red\">{{this.passwd1ValidL}}</p>\n                </div>  \n                <div class=\"form-group form-check\">\n                 \n                    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"clear()\" /> Remember me\n                    <!-- <span class=\"floating-label\" >Email</span> -->\n                </div>\n                <div class=\"col-md-12 text-center\">\n                <button type=\"submit\" class=\" btn btn-default\"  >Log in </button>\n                <br/>\n                </div>                                          \n              </form>\n              <div class=\"col-md-12 col=xs-12 text-center register\">\n                  Don't have an account? <a routerLink='/register' >Not a Member? Register</a>\n              </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n<!-- \n\n\n<div class=\"container-fluid\" style=\"margin-top: 60px;\">\n  <h1 align=\"center\" style=\"color:black\">Login</h1>\n  \n  <form #userlogin = \"ngForm\" (ngSubmit) = \"onClickSubmit(userlogin.value)\" >\n    <div class=\"form-group\">\n      <label for=\"emailIdL\">Email address:</label>\n      <input type=\"email\" class=\"form-control\"  name=\"emailIdL\" id=\"emailIdL\" required=\"required\" (change)=\"clear()\"  ngModel emailIdL>\n      <p name=\"emailValidL\" id=\"emailValidL\" style=\"color: red\">{{this.emailValidL}}</p>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwdL\">Password:</label>\n      <input type=\"password\" class=\"form-control\" name = \"passwdL\" id=\"passwdL\" required=\"required\" (change)=\"clear()\"  ngModel passwdL>\n      <p name=\"passwd1ValidL\" id=\"passwd1ValidL\" style=\"color: red\">{{this.passwd1ValidL}}</p>\n    </div>\n    <div class=\"form-group form-check\">\n      <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"checkbox\" (change)=\"clear()\" /> Remember me\n      </label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Log in</button>\n    <br/>\n    <a routerLink='/register' >Not a Member? Register</a>\n    </form>\n  \n</div> -->\n"

/***/ }),

/***/ "./src/app/loginform/loginform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginform/loginform.component.ts ***!
  \**************************************************/
/*! exports provided: LoginformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginformComponent", function() { return LoginformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginformComponent = /** @class */ (function () {
    function LoginformComponent(obj) {
        this.obj = obj;
    }
    LoginformComponent.prototype.ngOnInit = function () { };
    LoginformComponent.prototype.onClickSubmit = function (data) {
        if (data.emailIdL === '') {
            this.emailValidL = 'Please enter Email Id';
            console.log('Please enter Email Id');
        }
        else if (data.emailIdL.indexOf('@', 0) < 0) {
            this.emailValidL = 'Invalid Email id';
            console.log('Invalid Mail id');
        }
        else if (data.emailIdL.indexOf('.', 0) < 0) {
            this.emailValidL = 'Invalid Email id';
            console.log('Invalid Mail id');
        }
        else if (data.passwdL === '') {
            this.passwd1ValidL = 'Please enter Password';
            console.log('Please enter Password');
        }
        else {
            alert('Welcome: ' + data.emailIdL);
            this.obj.navigate(['/hospital']);
        }
    };
    LoginformComponent.prototype.clear = function () {
        console.log('clear');
    };
    LoginformComponent.prototype.clearEmail = function (data) {
        if (data === '') {
            this.emailValidL = 'Please enter Email Id';
        }
        else if (data.indexOf('@', 0) < 0) {
            this.emailValidL = 'Invalid Email id';
        }
        else if (data.indexOf('.', 0) < 0) {
            this.emailValidL = 'Invalid Email id';
        }
        else {
            this.emailValidL = '';
        }
    };
    LoginformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginform',
            template: __webpack_require__(/*! ./loginform.component.html */ "./src/app/loginform/loginform.component.html"),
            styles: [__webpack_require__(/*! ./loginform.component.css */ "./src/app/loginform/loginform.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginformComponent);
    return LoginformComponent;
}());



/***/ }),

/***/ "./src/app/reg/hosp.ts":
/*!*****************************!*\
  !*** ./src/app/reg/hosp.ts ***!
  \*****************************/
/*! exports provided: Hosps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hosps", function() { return Hosps; });
var Hosps = /** @class */ (function () {
    function Hosps(hospn, email, pwd, cpwd, vehicle_count, mobile) {
        this.hospn = hospn;
        this.email = email;
        this.pwd = pwd;
        this.cpwd = cpwd;
        this.vehicle_count = vehicle_count;
        this.mobile = mobile;
    }
    return Hosps;
}());



/***/ }),

/***/ "./src/app/reg/reg.component.css":
/*!***************************************!*\
  !*** ./src/app/reg/reg.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\nhtml, body {\r\n\tmargin:0px;\r\n\tpadding:0px;\r\n}\r\n#main-container {\r\n\r\n    margin-top: 80px;\r\n\r\n  /*background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: 100% 0%; */\r\n\r\n  /* background-image: url('../images/low rez image .png'); */\r\n  /* background-color: aqua; */\r\n}\r\n.center-container {\r\n   \r\n    position: relative;\r\n    height: 10%;\r\n    width: 340px;\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    background-color: rgba(0, 0, 0, 0.09);\r\n}\r\n.rows {\r\n    width: auto;\r\n}\r\n.field {\r\n    position: relative;\r\n    height:40px; \r\n    /* margin-bottom:35px;  */\r\n    font-family: Arial;\r\n}\r\ninput:focus ~ .floating-label,\r\ninput:not(:focus):valid ~ .floating-label {\r\n  top: 0px;\r\n  bottom: 10px;\r\n  left: 0px;\r\n  font-size: 11px;\r\n  opacity: 1;\r\n}\r\n#select {\r\n    margin-top:5px;\r\n}\r\noption {\r\nbackground-color: transparent;\r\nborder-color: black;\r\npadding: 5px;\r\nmin-height: 30px;\r\n}\r\noption:first-child {\r\n    display: none;\r\n}\r\ninput {\r\n    text-indent: 66px;\r\n    font-size: 16px;\r\n    width:300px;\r\n    height:100%;\r\n    background: transparent;\r\n    border:0px;\r\n    border-bottom: 1px solid #000000;\r\n    outline:none;\r\n    padding-top:10px;\r\n    color:#000000;\r\n}\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active {\r\n   transition: background-color 5000s ease-in-out 0s;\r\n}\r\n.floating-label {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 0px;\r\n  top: 18px;\r\n  transition: 0.2s ease all;\r\n  color:#000000;\r\n}\r\nbutton.btn-default{\r\n    background: black;\r\n    color: white;\r\n    font-weight: bold;\r\n    border: 1px solid black;\r\n    border-radius: 0;\r\n    width: 150px;\r\n   \r\n}\r\n.register{\r\n    color:#000000;\r\n    padding-top:5px;\r\n}\r\n.register a{\r\n    color:#000000;\r\n}\r\nselect{\r\n    width: 150px;\r\n    background-color: transparent;\r\n    border-color: black;\r\n    height: 44px;\r\n    font-size: 17px;\r\n    margin-top: 5px;\r\n    margin-left: 145px;\r\n    border-width:2px;\r\n}\r\n.validation_div{\r\n    margin-top: -27px;\r\n}\r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: black;\r\n    opacity: 1;\r\n    margin-left:-12px; /* Firefox */\r\n  }\r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: black;\r\n    opacity: 1;\r\n    margin-left:-12px; /* Firefox */\r\n  }\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: black;\r\n    opacity: 1;\r\n    margin-left:-12px; /* Firefox */\r\n  }\r\n"

/***/ }),

/***/ "./src/app/reg/reg.component.html":
/*!****************************************!*\
  !*** ./src/app/reg/reg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"main-container\">\n  <div class=\"\">\n      <div class=\"col-md-12 offset-md-4 col-xs-12 offset-xs-4  center-container\">\n              <form name=\"myForm\" #userregister = \"ngForm\" (ngSubmit) = \"onSubmit(userregister.value)\">\n                  <div class=\"field form-group\">\n                      <input   [(ngModel)]=\"model.hospn\" class=\"form-control\"  type=\"text\" name=\"hospn\" id=\"hospn\"  #hospn=\"ngModel\" ngx-google-places-autocomplete placeholder=\"\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"  required>\n                      <span class=\"floating-label\" >Name</span>  \n                      <div *ngIf=\"hospn.invalid && (hospn.dirty || hospn.touched)\" >\n                          <div style=\"color:red\" *ngIf=\"hospn.errors.required\">Name is required.</div>\n                      </div>\n                  </div> \n\n                    <div class=\"field form-group\">\n                        <input  class=\"form-control\" type=\"number\" [(ngModel)]=\"model.vehicle_count\"  (change)=\"onChangeCount($event.target.value)\" name=\"vehicle_count\" id=\"vehicle_count\" #vehicle_count=\"ngModel\" required>\n                        <span class=\"floating-label\">Number of vehicles </span>\n                        <div *ngIf=\"vehicle_count.invalid && (vehicle_count.dirty || vehicle_count.touched)\" >\n                                <div style=\"color:red\" *ngIf=\"vehicle_count.errors.required\">Vehicle Count is required.</div>\n                        </div>\n            \n                    </div> \n\n                     <div class=\"field form-group\">\n                        <input [(ngModel)]=\"model.mobile\" class=\"form-control\" type=\"text\" (keypress)=\"keyPress($event)\"name=\"mobile\" id=\"mobile\" #mobile=\"ngModel\" required>\n                            <span class=\"floating-label\">Mobile</span>\n                            <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"\">\n                                <div style=\"color:red\" *ngIf=\"mobile.errors.required && mobile.length!=10 \">Mobile number is required.</div>\n                            </div>\n                     </div>\n\n                  <div class=\"field form-group\">\n                    <input   [(ngModel)]=\"model.email\" class=\"form-control\"  type=\"email\" name=\"email\" id=\"email\" (focusout)=\"onChangeEmail($event.target.value)\"   #email=\"ngModel\"  required>\n                    <span class=\"floating-label\" >Email</span>\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" >\n                        <div style=\"color:red\"  *ngIf=\"email.errors.required\" >{{this.emailValid}}</div>\n                    </div>\n                  </div>  \n                                           \n                  <div class=\"field form-group\">\n                      <input  [(ngModel)]=\"model.pwd\"  class=\"form-control\" type=\"password\" name=\"pwd\" id=\"pwd\" #pwd=\"ngModel\" required>\n                      <span class=\"floating-label\">Password</span>\n                      <div *ngIf=\"pwd.invalid && (pwd.dirty || pwd.touched)\" class=\"\">\n                        <div style=\"color:red\" *ngIf=\"pwd.errors.required\">Password is required.</div>\n                      </div>\n                  </div>\n\n                  <div class=\"field form-group\">\n                    <input  [(ngModel)]=\"model.cpwd\"  class=\"form-control\" type=\"password\" name=\"cpwd\" id=\"cpwd\" #cpwd=\"ngModel\" required>\n                    <span class=\"floating-label\">Confirm Password</span>\n                    <div *ngIf=\"cpwd.invalid && (cpwd.dirty || cpwd.touched)\" class=\"\">\n                        <div style=\"color:red\" *ngIf=\"cpwd.errors.required\">Confirm Password is required.</div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12 text-center\">\n                        <button type=\"submit\" class=\"btn btn-default\"  [disabled]=\"!button_disabled()\" >REGISTER</button>\n                   </div>                            \n              </form>\n              <div class=\"col-md-12 text-center register\">\n                  Already have an account? <a routerLink='/login'><b>Login here</b></a>\n              </div>\n      </div>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/reg/reg.component.ts":
/*!**************************************!*\
  !*** ./src/app/reg/reg.component.ts ***!
  \**************************************/
/*! exports provided: RegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegComponent", function() { return RegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_map_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../get-map-data.service */ "./src/app/get-map-data.service.ts");
/* harmony import */ var ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive */ "./node_modules/ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive.js");
/* harmony import */ var _hosp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hosp */ "./src/app/reg/hosp.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegComponent = /** @class */ (function () {
    function RegComponent(mapsAPILoader, ngZone, http, obj) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.obj = obj;
        this.emailValid = '';
        this.submitted = false;
        this.vsubmitted = false;
        this.model = new _hosp__WEBPACK_IMPORTED_MODULE_6__["Hosps"](null, null, null, null, null, null);
        this.mob_length = 0;
        this.submitted = false;
        this.vsubmitted = false;
    }
    RegComponent.prototype.ngOnInit = function () { };
    RegComponent.prototype.handleAddressChange = function (address) {
        //   this.places.options.componentRestrictions = new ComponentRestrictions({
        //     country: "IN"
        // });
        console.log('Place ID ' + address.place_id);
        console.log('Name: ' + address.name);
        console.log('Address: ' + address.formatted_address);
        console.log('Latitude: ' + address.geometry.location.lat());
        console.log('Longitude: ' + address.geometry.location.lng());
        this.placeId = address.place_id;
    };
    RegComponent.prototype.onChangeEmail = function (newValue) {
        this.emailValid = '';
        if (newValue === '' || newValue == null) {
            this.emailValid = 'Email is required';
            this.submitted = false; // insert into database if submit is true
            this.reset();
        }
        else if (newValue.indexOf('@', 0) < 0) {
            this.emailValid = 'Invalid Email id';
            // alert(this.emailValid);
            this.submitted = false; // insert into database if submit is true
            this.reset();
        }
        else if (newValue.indexOf('.', 0) < 0) {
            this.emailValid = 'Invalid Email id';
            //  alert(this.emailValid);
            this.submitted = false; // insert into database if submit is true
            this.reset();
        }
        else {
            this.emailValid = '';
            this.submitted = true;
            //  alert('hi3');
        }
    };
    RegComponent.prototype.onChangeCount = function (newValue) {
        this.model.vehicle_count = newValue;
        if (newValue == null) {
            alert('Vehicle Count Required');
            this.vsubmitted = false;
        }
        else if (newValue === 0) {
            alert('Vehicle Count Should be more than 0');
            this.vsubmitted = false;
        }
        else {
            this.vsubmitted = true;
        }
    };
    RegComponent.prototype.button_disabled = function () {
        // console.log(this.model);
        // tslint:disable-next-line:max-line-length
        // console.log(this.model.adr==null && this.model.cpwd==null && this.model.hospn==null && this.model.mobile==null && this.model.pwd==null && this.model.vehicle_count==null);
        // tslint:disable-next-line:max-line-length
        return (this.model.hospn != null && this.model.cpwd != null && this.model.mobile != null && this.model.pwd != null && this.model.vehicle_count != null && this.model.email && this.submitted && this.vsubmitted);
    };
    RegComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        this.mob_length++;
        // tslint:disable-next-line:prefer-const
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegComponent.prototype.reset = function () {
        // this.model.vehicle_count = null;
        // this.model.pwd = null;
        // this.model.mobile = null;
        // this.model.hospn = null;
        // this.model.cpwd = null;
        // this.model.adr = null;
        // this.model.email = null;
    };
    RegComponent.prototype.onSubmit = function (data) {
        if (this.model.pwd === this.model.cpwd) {
            if (this.submitted = true) {
                // tslint:disable-next-line:max-line-length
                var url = _get_map_data_service__WEBPACK_IMPORTED_MODULE_4__["GetMapDataService"].prot + '://' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_4__["GetMapDataService"].ip + ':' + _get_map_data_service__WEBPACK_IMPORTED_MODULE_4__["GetMapDataService"].port + '/latlng/update/' + this.placeId + '*' + this.model.email + '*' + this.model.pwd + '*' + this.model.vehicle_count + '*' + this.model.mobile + '*' + 'online';
                // const url = 'https://10.20.6.118:8000/latlng/update/';
                this.http.get(url)
                    .subscribe(function (response) {
                    console.log(response);
                    window.alert('Registeration successful try logging in\n');
                    //this.obj.navigate(['/login']);
                });
                window.alert('Registeration successful try logging in');
                // this.obj.navigate(['/login']);
            }
        }
        else {
            alert('Passwords do not match');
            //this.submitted = false; // insert into database if submit is true
            this.reset();
        }
    };
    RegComponent.prototype.ngOnchanges = function () {
        alert(this.model.mobile);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('places'),
        __metadata("design:type", ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceDirective"])
    ], RegComponent.prototype, "places", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegComponent.prototype, "searchElement", void 0);
    RegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reg',
            template: __webpack_require__(/*! ./reg.component.html */ "./src/app/reg/reg.component.html"),
            styles: [__webpack_require__(/*! ./reg.component.css */ "./src/app/reg/reg.component.css")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegComponent);
    return RegComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\AlertIT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map