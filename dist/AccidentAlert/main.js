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

module.exports = "body {\r\n  background-image: url('background3.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nagm-map {\r\n  height: 300px;\r\n  padding-top:10px;\r\n  padding-bottom:10px;\r\n  padding-left:10px;\r\n  padding-right:10px;\r\n}\r\n\r\n#map{\r\n  margin-top:20px;\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n.container-fluid{\r\n  background-color:aquamarine;\r\n  box-shadow:10px lightgray;\r\n  margin:auto;\r\n}\r\n\r\n.container.container1{\r\n  background-color: blanchedalmond;\r\n  box-shadow:10px lightgray;\r\n  border-style:solid;\r\n\r\n}\r\n\r\n#id2\r\n{\r\n  box-shadow:10px lightgray;\r\n  padding:80px 100px 100px 220px;\r\n\r\n}\r\n\r\n.jumbotron{\r\n  background-color:wheat;\r\n  height:50px;\r\n}\r\n\r\nimg{\r\n    border-color:black;\r\n    border-radius:50%;\r\n}\r\n\r\nbutton{\r\n  margin-top:5px;\r\n  border-radius:0%;\r\n}\r\n\r\n.card{\r\n  max-width:500px;\r\n  max-height:200px;\r\n  margin-top:10px;\r\n  margin-left:50px;\r\n  margin-right:50px;\r\n  margin-bottom:50px;\r\n}\r\n\r\n.row{\r\n  margin:auto;\r\n  padding:30px 30px 30px 30px;\r\n}\r\n\r\n.nav{\r\n  color:white;\r\n  height:150px;\r\n  padding:50px 20px 10px 500px;\r\n  text-align: center;\r\n  font-family:\"Arial\";\r\n}\r\n\r\n.footer{\r\n  color:white;\r\n  height:80px;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n\r\n#main{\r\n  background:linear-gradient(-90deg)\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div>\n    <nav class=\"container-fluid navbar navbar-expand-lg navbar-dark bg-dark\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/dashboard\">Accident Alert</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"#navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\">Home</a> <!-- <span class=\"sr-only\">-->\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/latlng\">Emergency Service</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/register\" >Register</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/login\" >Sign In</a>\n            </li>\n          </ul>\n      </div>\n    </nav>\n  </div>\n  <router-outlet></router-outlet>\n  <br/><br/><br/>\n</body>\n<footer class=\"footer page-footer font-small bg-dark\">\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n    <a routerLink=\"/dashboard\"> Accident Alert</a>\n  </div>\n</footer>\n\n\n\n"

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
/* harmony import */ var _registerform_registerform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registerform/registerform.component */ "./src/app/registerform/registerform.component.ts");
/* harmony import */ var _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loginform/loginform.component */ "./src/app/loginform/loginform.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var Routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
    },
    {
        path: 'latlng',
        component: _dir_map_dir_map_component__WEBPACK_IMPORTED_MODULE_8__["DirMapComponent"]
    },
    {
        path: 'register',
        component: _registerform_registerform_component__WEBPACK_IMPORTED_MODULE_9__["RegisterformComponent"]
    },
    {
        path: 'login',
        component: _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_10__["LoginformComponent"]
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
                _registerform_registerform_component__WEBPACK_IMPORTED_MODULE_9__["RegisterformComponent"],
                _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_10__["LoginformComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(Routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCubksSVmapTf6GsXYeeYocOrowwmhQbMA'
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_5__["AgmDirectionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group-vertical\" style=\"margin:200px 200px 250px 600px\">\r\n    <button type=\"button\" class=\"btn btn-danger btn-lg\" style=\"margin-bottom:20px\"><a [routerLink]=\"['/latlng']\" routerLinkActive=\"router-link-active\" style=\"color:white\">Emergency Services</a></button>\r\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" style=\"margin-bottom:20px\"><a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" style=\"color:white\">Register</a></button>\r\n</div>\r\n"

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

module.exports = "agm-map {\r\n  height: 400px;\r\n  width: 100%;\r\n\r\n}\r\n#map, #map2\r\n{\r\n  height: 500px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dir-map/dir-map.component.html":
/*!************************************************!*\
  !*** ./src/app/dir-map/dir-map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid\">\n  <div  style=\"margin-left:350px;\" class=\"row btn-group\">\n    <div class=\"col-md-3\">\n        <button class=\"btn btn-primary\" style=\"margin:10px 10px 10px 10px\" name = \"hospital\" value=\"hospital\" (click)=\"getdata('Hospital')\">Hospital</button>\n    </div>\n    <div class=\"col-md-3\">\n        <button class=\"btn btn-primary\" style=\"margin:10px 10px 10px 10px\" name = \"bloodbank\" value=\"bloodbank\" (click)=\"getdata('Blood Bank')\">Blood Bank</button>\n    </div>\n    <div class=\"col-md-3\">\n        <button class=\"btn btn-primary\" style=\"margin:10px 10px 10px 10px\" name = \"police\" value=\"police\" (click)=\"getdata('Police Station')\">Police Station</button>\n    </div>\n    <div class=\"col-md-3\">\n      <button class=\"btn btn-primary\" style=\"margin:10px 10px 10px 10px\" name = \"fire\" value=\"fire\" (click)=\"getdata('Fire Station')\">Fire Station</button>\n  </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row card-deck\">\n        <div *ngFor=\"let hospData of hospData\" class=\"card\">\n          <div class=\"card-header text-center\" >\n            <strong>\n              {{hospData.name}}\n            </strong>\n          </div>\n          <div class=\"card-body text-center\" >\n            {{hospData.address}}\n          </div>\n          <div class=\"card-footer text-center\">\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"myMap(hospData)\"><strong>Confirm this {{this.query}}</strong></button>\n          </div>\n        </div>\n  </div>\n</div>\n<br/>\n<div class=\"container-fluid\">\n  <agm-map  [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"13\" (mapClick)=\"mapClicked($event)\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"victimLabel\" [opacity]=\"0.6\" (markerClick)=\"clickedMarker()\">\n        <agm-info-window>\n            <strong>Current Location</strong>\n            <br/>\n            <span>Latitude: {{this.lat}}</span>\n            <br/>\n            <span>Longitude: {{this.lng}}</span>\n          </agm-info-window>\n    </agm-marker>\n    <agm-direction [origin]=\"this.origin\" [destination]=\"this.destination\">\n        <!-- <agm-info-window>\n            <strong>{{this.currentData.name}}</strong>\n            <br/>\n            <span>Latitude: {{this.currentData.lat}}</span>\n            <br/>\n            <span>Longitude: {{this.currentData.lng}}</span>\n          </agm-info-window> -->\n    </agm-direction>\n    </agm-map>\n</div>\n<br/>\n"

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
        this.hospData = [];
        this.victimLabel = 'X';
        this.HospitalLabel = 'H';
        this.origin = {};
        this.destination = {};
    }
    DirMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
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
            _this.lat = 0;
            _this.lng = 0;
            _this.hospData = [];
            alert('Location Information is required');
            _this.obj.navigate(['/latlng']);
        });
    };
    DirMapComponent.prototype.getdata = function (query) {
        var _this = this;
        this.query = query;
        this.http.get('/latlng/' + query + ',' + this.lat + ',' + this.lng).subscribe(function (response) {
            _this.hospData = response;
        });
    };
    DirMapComponent.prototype.myMap = function (data) {
        var _this = this;
        this.currentHospData = data;
        this.origin = { lat: this.currentHospData.lat, lng: this.currentHospData.lng };
        this.destination = { lat: this.lat, lng: this.lng };
        var url = this.currentHospData.placeId + ',' + this.lat + ',' + this.lng;
        this.http.get('/latlng/hosp/' + url).subscribe(function (response) {
            _this.status = JSON.parse(response);
            console.log(_this.status);
            console.log(_this.status.status);
            if (_this.status.status === 'failure') {
                window.alert('Alert sent to corresponding ' + _this.query);
                console.log('Ambulance is Arriving!!!!');
                console.log(_this.status.message.content);
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

/***/ "./src/app/loginform/loginform.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginform/loginform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loginform/loginform.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginform/loginform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1 align=\"center\" style=\"color:white\">Login</h1>\n\n<div class=\"jumbotron\">\n<form #userlogin = \"ngForm\" (ngSubmit) = \"onClickSubmit(userlogin.value)\" >\n  <div class=\"form-group\">\n    <label for=\"emailIdL\">Email address:</label>\n    <input type=\"email\" class=\"form-control\"  name=\"emailIdL\" id=\"emailIdL\" required=\"required\" (change)=\"clear()\"  ngModel emailIdL>\n    <p name=\"emailValidL\" id=\"emailValidL\" style=\"color: red\">{{this.emailValidL}}</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwdL\">Password:</label>\n    <input type=\"password\" class=\"form-control\" name = \"passwdL\" id=\"passwdL\" required=\"required\" (change)=\"clear()\"  ngModel passwdL>\n    <p name=\"passwd1ValidL\" id=\"passwd1ValidL\" style=\"color: red\">{{this.passwd1ValidL}}</p>\n  </div>\n  <div class=\"form-group form-check\">\n    <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\" (change)=\"clear()\" /> Remember me\n    </label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Log in</button>\n  <br/>\n  <a routerLink='/register' >Not a Member? Register</a>\n  </form>\n</div>\n</div>\n"

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
            this.obj.navigate(['/']);
        }
    };
    LoginformComponent.prototype.clear = function () {
        console.log('clear');
        this.emailValidL = '';
        this.passwd1ValidL = '';
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

/***/ "./src/app/registerform/registerform.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registerform/registerform.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registerform/registerform.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registerform/registerform.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1 align=\"center\" style=\"color:white\">Registration</h1>\n\n<div class=\"jumbotron\">\n<form #userregister = \"ngForm\" (ngSubmit) = \"onClickSubmit1(userregister.value)\" >\n    <div class=\"form-group\">\n        <label for=\"typeInst\">Enter Institution:</label>\n        <select class=\"form-control\"  name=\"typeInst\" id=\"typeInst\"  required=\"required\" ngModel (change)=\"clear()\">\n          <option value=\"Hospital\" selected>Hospital</option>\n          <option value=\"Blood Bank\">Blood Bank</option>\n          <option value=\"Police Station\">Police Station</option>\n          <option value=\"Fire Station\">Fire Station</option>\n        </select>\n        <p id=\"typeInstValid\" style=\"color: red\">{{this.typeInstValid}}</p>\n      </div>\n  <div class=\"form-group\">\n    <label for=\"name\">Enter Name:</label>\n    <input type=\"text\" class=\"form-control\"  name=\"name\" id=\"name\"  required=\"required\" ngModel (change)=\"clear()\">\n    <p id=\"nameValid\" style=\"color: red\">{{this.nameValid}}</p>\n  </div>\n   <div class=\"form-group\">\n    <label for=\"emailId\">Email Id:</label>\n    <input type=\"email\" class=\"form-control\" name=\"emailId\" id=\"emailId\" required=\"required\" ngModel (change)=\"clear()\" >\n    <p name=\"emailValid\" id=\"emailValid\" style=\"color: red\">{{this.emailValid}}</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"phone\">Phone Number:</label>\n    <input type=\"number\" class=\"form-control\"  name=\"phone\" id=\"phone\" required=\"required\" ngModel (change)=\"clear()\"  >\n    <p name=\"phoneValid\" id=\"phoneValid\" style=\"color: red\">{{this.phoneValid}}</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"address\">Address:</label>\n    <input type=\"text\" class=\"form-control\" name=\"address\" id=\"address\" required=\"required\" ngModel (change)=\"clear()\" >\n    <p name=\"addresssValid\" id=\"addresssValid\" style=\"color: red\">{{this.addressValid}}</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwd1\">Password:</label>\n    <input type=\"password\" class=\"form-control\" name=\"passwd1\"  id=\"passwd1\"  required=\"required\" ngModel (change)=\"clear()\" >\n    <p name=\"passwd1Valid\" id=\"passwd1Valid\" style=\"color: red\">{{this.passwd1Valid}}</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwd2\">Confirm Password:</label>\n    <input type=\"password\" class=\"form-control\" name=\"passwd2\" id=\"passwd2\" required=\"required\" ngModel (change)=\"clear()\" >\n    <p name=\"passwd2Valid\" id=\"passwd2Valid\" style=\"color: red\">{{this.passwd2Valid}}</p>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n  <br/>\n  <a routerLink='/login' >Already a member? Sign In</a>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/registerform/registerform.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registerform/registerform.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterformComponent", function() { return RegisterformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterformComponent = /** @class */ (function () {
    function RegisterformComponent(obj, http) {
        this.obj = obj;
        this.http = http;
        this.nameValid = '';
        this.emailValid = '';
        this.addressValid = '';
        this.passwd1Valid = '';
        this.passwd2Valid = '';
        this.phoneValid = '';
        this.typeInstValid = '';
    }
    RegisterformComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
        }, function (error) {
            _this.lat = 0;
            _this.lng = 0;
        });
    };
    RegisterformComponent.prototype.onClickSubmit1 = function (data) {
        var _this = this;
        console.log('Form Data');
        console.log('Lat: ' + this.lat);
        console.log('Lng: ' + this.lng);
        if (data.typeInst === '') {
            this.typeInstValid = 'Please enter Institution Type';
            console.log('Please enter Institution Type');
        }
        else if (data.name === '') {
            this.nameValid = 'Please enter Name';
            console.log('Please enter Name');
        }
        else if (data.emailId === '') {
            this.emailValid = 'Please enter Email Id';
            console.log('Please enter Email Id');
        }
        else if (data.emailId.indexOf('@', 0) < 0) {
            this.emailValid = 'Invalid Email id';
            console.log('Invalid Email id');
        }
        else if (data.emailId.indexOf('.', 0) < 0) {
            this.emailValid = 'Invalid Email id';
            console.log('Invalid Email id');
        }
        else if (data.phone === '') {
            this.phoneValid = 'Please enter Phone Number';
            console.log('Please enter Phone Number');
        }
        else if (data.address === '') {
            this.addressValid = 'Please enter Address';
            console.log('Please enter Address');
        }
        else if (data.passwd1 === '') {
            this.passwd1Valid = 'Please enter Password';
            console.log('Please enter Password');
        }
        else if (data.passwd2 === '') {
            this.passwd2Valid = 'Please confirm Password';
            console.log('Please confirm Password');
        }
        else if (data.passwd1 !== data.passwd2) {
            this.passwd2Valid = 'Passwords dont match';
            console.log('Passwords dont match');
        }
        else {
            this.http.get('/latlng/insert/' + data.typeInst + ',' + data.name + ',' + data.address + ',' + this.lat + ',' + this.lng + ',' + data.emailId + ',' + data.phone + ',' + data.passwd1)
                .subscribe(function (response) {
                console.log(response);
                window.alert('Registeration successful try logging in');
                _this.obj.navigate(['/login']);
            });
            window.alert('Registeration successful try logging in');
            this.obj.navigate(['/login']);
        }
    };
    RegisterformComponent.prototype.clear = function () {
        console.log('clear');
        this.typeInstValid = '';
        this.nameValid = '';
        this.emailValid = '';
        this.phoneValid = '';
        this.passwd1Valid = '';
        this.passwd2Valid = '';
    };
    RegisterformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registerform',
            template: __webpack_require__(/*! ./registerform.component.html */ "./src/app/registerform/registerform.component.html"),
            styles: [__webpack_require__(/*! ./registerform.component.css */ "./src/app/registerform/registerform.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterformComponent);
    return RegisterformComponent;
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

module.exports = __webpack_require__(/*! D:\Work\NodeJS\AccidenAlert\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map