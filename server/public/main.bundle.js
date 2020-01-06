webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_component__ = __webpack_require__("./src/app/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__positions_component__ = __webpack_require__("./src/app/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_component__ = __webpack_require__("./src/app/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_component__ = __webpack_require__("./src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_component__ = __webpack_require__("./src/app/position.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_3__employees_component__["a" /* EmployeesComponent */] },
    { path: 'positions', component: __WEBPACK_IMPORTED_MODULE_4__positions_component__["a" /* PositionsComponent */] },
    { path: 'employee/:_id', component: __WEBPACK_IMPORTED_MODULE_6__employee_component__["a" /* EmployeeComponent */] },
    { path: 'position/:_id', component: __WEBPACK_IMPORTED_MODULE_7__position_component__["a" /* PositionComponent */] },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*********************************************************************************
* WEB422 – Assignment 05
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: ____Xiaochen Wang_________________ Student ID: __015297153___________ Date: __2018-08-03______________
*
********************************************************************************/

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./../../angular-app/src/app/app.component.html"),
            styles: [__webpack_require__("./../../angular-app/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./../../angular-app/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_component__ = __webpack_require__("./src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_component__ = __webpack_require__("./src/app/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_component__ = __webpack_require__("./src/app/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_component__ = __webpack_require__("./src/app/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__positions_component__ = __webpack_require__("./src/app/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_component__ = __webpack_require__("./src/app/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_employee_service__ = __webpack_require__("./src/app/data/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employee_component__ = __webpack_require__("./src/app/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__position_component__ = __webpack_require__("./src/app/position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__positions_component__["a" /* PositionsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__position_component__["a" /* PositionComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__data_position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_12__data_employee_service__["a" /* EmployeeService */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content.component.html"),
            styles: [__webpack_require__("./src/app/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = "https://radiant-lake-28462.herokuapp.com";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.url + "/employees");
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.put(this.url + "/employee/" + employee._id, employee);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.url + "/employee-raw/" + id);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/data/position.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
        this.url = "https://radiant-lake-28462.herokuapp.com";
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get(this.url + "/positions");
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put(this.url + "/position/" + position._id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get(this.url + "/position/" + id);
    };
    PositionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/employee.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }"

/***/ }),

/***/ "./src/app/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"employee\" >\n  <h2>Employee: {{employee.FirstName}}&nbsp;{{employee.LastName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\" *ngIf=\"employee\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': FirstName.errors}\">\n          <label for=\"FirstName\" class=\"control-label\">First Name:</label>\n          <input class=\"form-control\" id=\"FirstName\" type=\"text\"  name=\"FirstName\" [(ngModel)]=\"employee.FirstName\" #FirstName=\"ngModel\" required autofocus/>\n          <span class=\"help-block\" *ngIf=\"FirstName.errors && FirstName.errors.required\">First Name is Required</span>\n        </div>   \n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': LastName.errors}\">\n          <label for=\"LastName\" class=\"control-label\">Last Name:</label>\n          <input class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" [(ngModel)]=\"employee.LastName\" #LastName=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"LastName.errors && LastName.errors.required\">Last Name is Required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"Position\" class=\"control-label\">Position:</label>\n          <select class=\"form-control\" id=\"Position\"  name=\"Position\" [(ngModel)]=\"employee.Position\">\n            <option  *ngFor=\"let position of positions\" [value]=\"position._id\">{{position.PositionName}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': SalaryBonus.errors}\">\n          <label for=\"SalaryBonus\" class=\"control-label\">Salary Bonus</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">$</span>\n            <input class=\"form-control\" id=\"SalaryBonus\" type=\"number\" name=\"SalaryBonus\" [(ngModel)]=\"employee.SalaryBonus\" #SalaryBonus=\"ngModel\" required/>\n            <span class=\"help-block\" *ngIf=\"SalaryBonus.errors && SalaryBonus.errors.required\">Salary bonus is Required</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressStreet.errors}\">\n          <label for=\"AddressStreet\" class=\"control-label\">Address (Street):</label>\n          <input class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" [(ngModel)]=\"employee.AddressStreet\" #AddressStreet=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressStreet.errors && AddressStreet.errors.required\">Address street is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressCity.errors}\">\n          <label for=\"AddressCity\">Address (City):</label>\n          <input class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" [(ngModel)]=\"employee.AddressCity\" #AddressCity=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressCity.errors && AddressCity.errors.required\">Address city is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressState.errors}\">\n          <label for=\"AddressState\" class=\"control-label\">Address (State):</label>\n          <input class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" [(ngModel)]=\"employee.AddressState\" #AddressState=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressState.errors && AddressState.errors.required\">Address state is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': AddressZip.errors}\">\n          <label for=\"AddressZip\" class=\"control-label\">Address (Zip Code):</label>\n          <input class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" [(ngModel)]=\"employee.AddressZip\" #AddressZip=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"AddressZip.errors && AddressZip.errors.required\">Address zip is Required</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label for=\"PhoneNum\" class=\"control-label\">Phone Number:</label>\n          <input class=\"form-control\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" [(ngModel)]=\"employee.PhoneNum\" #PhoneNum=\"ngModel\" ng-pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[\n          ]*){4}\" />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group has-error': Extension.errors}\">\n          <label for=\"Extension\" class=\"control-label\">Extension:</label>\n          <input class=\"form-control\" id=\"Extension\" type=\"number\" name=\"Extension\" [(ngModel)]=\"employee.Extension\" #Extension=\"ngModel\" required/>\n          <span class=\"help-block\" *ngIf=\"Extension.errors && Extension.errors.required\">Extension is Required</span>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"HireDate\" class=\"control-label\">Hire Date:</label>\n          <input class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" value=\"HireDate\" [value]=\"employee.HireDate | date\" readonly >\n        </div>\n      </div>\n    </div>\n    <hr />\n    <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n    <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" [disabled]=\"!f.valid\" />\n    <br />\n    <br />\n  </form>\n</div>\n</div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage\" >\n  <strong>Success!</strong> First Name Last Name's information was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"failMessage\" >\n  <strong>Error!</strong> First Name Last Name's information could not be saved.\n</div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_employee_service__ = __webpack_require__("./src/app/data/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(e, p, r) {
        this.e = e;
        this.p = p;
        this.r = r;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.r.params.subscribe(function (param) {
            _this.employeeSubscription = _this.e.getEmployee(param['_id']).subscribe(function (data) {
                _this.employee = data[0];
            });
            _this.getPositionsSubcription = _this.p.getPositions().subscribe(function (data) {
                _this.positions = data;
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.saveEmployeeSubscription = this.e.saveEmployee(this.employee)
            .subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubcription) {
            this.getPositionsSubcription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("./src/app/employee.component.html"),
            styles: [__webpack_require__("./src/app/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2__data_position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n.table-responsive{margin-bottom:60px;}"

/***/ }),

/***/ "./src/app/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employees</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n    Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n</div>\n\n<input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search\nEmployees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" /><br />\n      \n<div class=\"table-responsive\">\n       <table class=\"table\">\n         <thead>\n           <tr>\n             <th scope=\"col\">Full Name</th>\n             <th scope=\"col\">Address</th>\n             <th scope=\"col\">Phone Number</th>\n             <th scope=\"col\">Hire Date</th>\n           </tr>\n         </thead>\n         <tbody>\n           <tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\">\n             <td>{{employee.FirstName}} {{employee.LastName}}</td>\n             <td>{{employee.Position.PositionName}}</td>\n             <td>{{employee.PhoneNum}}</td>\n             <td>{{employee.HireDate | date: 'longDate'}}</td>\n           </tr>\n         </tbody>\n       </table>\n</div>\n       \n    "

/***/ }),

/***/ "./src/app/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_employee_service__ = __webpack_require__("./src/app/data/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeesSub = this.employeeService.getEmployees().subscribe(function (data) {
            _this.employees = data;
            _this.filteredEmployees = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        if (this.getEmployeesSub) {
            this.getEmployeesSub.unsubscribe();
        }
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['/employee', id]);
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var substring = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (e) { return ((e.FirstName.toLowerCase().indexOf(substring) !== -1) || (e.LastName.toLowerCase().indexOf(substring) !== -1) || (e.Position.PositionName.toLocaleLowerCase().indexOf(substring) !== -1)); });
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("./src/app/employees.component.html"),
            styles: [__webpack_require__("./src/app/employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"color-border\"> </div>\n\n<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2018 Xiaochen Wang (WEB422). Design by <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--/#footer--> "

/***/ }),

/***/ "./src/app/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/***/ (function(module, exports) {

module.exports = "section {\r\n    padding: 70px 0;\r\n   }\r\n   .no-margin {\r\n    margin: 0;\r\n    padding: 0;\r\n   } "

/***/ }),

/***/ "./src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"main-slider\" class=\"no-margin\">\n    <div class=\"carousel slide\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n        <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"item active\" style=\"background-image: url(assets/images/slider/bg1.jpg)\">\n          <div class=\"container\">\n            <div class=\"row slide-margin\">\n              <div class=\"col-sm-12\">\n                <div class=\"carousel-content\">\n                  <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-leaf\"></i> API Demo</span></h1>\n                  <h2>Developed in Angular</h2>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item-->\n        \n        <div class=\"item\" style=\"background-image: url(images/slider/bg2.jpg)\">\n          <div class=\"container\">\n            <div class=\"row slide-margin\">\n              <div class=\"col-sm-12\">\n                <div class=\"carousel-content\">\n                  <h1>Typi non habent claritatem insitam</h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item-->\n        \n        <div class=\"item\" style=\"background-image: url(images/slider/bg3.jpg)\">\n          <div class=\"container\">\n            <div class=\"row slide-margin\">\n              <div class=\"col-sm-12\">\n                <div class=\"carousel-content\">\n                  <h1>Mirum est notare quam littera gothica</h1>\n                  <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--/.item--> \n      </div>\n      <!--/.carousel-inner--> \n    </div>\n    <!--/.carousel--> \n    <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a> </section>\n  <!--/#main-slider-->\n  <div class=\"color-border\"> </div>\n  <section id=\"feature\" >\n    <div class=\"container\">\n      <div class=\"center\">\n        <h2>Featured Services</h2>\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n          Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"features\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\"></i>\n              <h2>Employees</h2>\n              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n            </div>\n          </div>\n          <!--/.col-md-6-->\n          \n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"feature-wrap\"> <i class=\"fa fa-cogs\"></i>\n              <h2>Positions</h2>\n              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n            </div>\n          </div>\n          <!--/.col-md-6-->\n        </div>\n        <!--/.services--> \n      </div>\n      <!--/.row--> \n    </div>\n    <!--/.container--> \n  </section>\n  <!--/#feature-->"

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home.component.html"),
            styles: [__webpack_require__("./src/app/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n    <nav class=\"navbar navbar-inverse\" role=\"banner\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n          <a class=\"navbar-brand\" href=\"index.html\"><i class=\"fa fa-leaf\"></i>Xiaochen Wang (API Demo)</a></div>\n        <div class=\"collapse navbar-collapse navbar-right\">\n          <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n          </ul>\n        </div>\n      </div>\n      <!--/.container--> \n    </nav>\n    <!--/nav--> \n    \n  </header>\n  <!--/header-->\n  \n  <div class=\"color-border\"> </div>"

/***/ }),

/***/ "./src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    Not Found\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }"

/***/ }),

/***/ "./src/app/position.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"position\" >\n  <h2>Position: {{position.PositionName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\" *ngIf=\"position\" >\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f=\"ngForm\" (ngSubmit)='onSubmit(f)'>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionName.errors}\">\n              <label for=\"PositionName\">Position Name:</label>\n              <input class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" [(ngModel)]=\"position.PositionName\" #PositionName=\"ngModel\" required/>\n              <span class=\"help-block\" *ngIf=\"PositionName.errors && PositionName.errors.required\">Position name is Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'form-group has-error': PositionDescription.errors}\">\n              <label for=\"PositionDescription\">Description:</label>\n              <textarea class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" [(ngModel)]=\"position.PositionDescription\" #PositionDescription=\"ngModel\" required></textarea>\n              <span class=\"help-block\" *ngIf=\"PositionDescription.errors && PositionDescription.errors.required\">Position description is Required</span>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" [disabled]=\"!f.valid\"/>\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage\">\n  <strong>Success!</strong> Position: \"Position Name\" was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"falseMessage\">\n  <strong>Error!</strong> Position: \"Position Name\" could not be saved.\n</div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionComponent = /** @class */ (function () {
    function PositionComponent(p, r) {
        this.p = p;
        this.r = r;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.r.params.subscribe(function (param) {
            _this.positionSubscription = _this.p.getPosition(param['_id']).subscribe(function (data) {
                _this.position = data[0];
            });
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionsSubcription = this.p.savePosition(this.position)
            .subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function () {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionsSubcription) {
            this.savePositionsSubcription.unsubscribe();
        }
    };
    PositionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position',
            template: __webpack_require__("./src/app/position.component.html"),
            styles: [__webpack_require__("./src/app/position.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n.table-responsive{margin-bottom:60px;}"

/***/ }),

/***/ "./src/app/positions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Positions</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n    Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n</div>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Position Title</th>\n      <th scope=\"col\">Position Description</th>\n      <th scope=\"col\">Salary</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let position of positions\" (click)=\"routePosition(position._id)\">\n      <td>{{position.PositionName}}</td>\n      <td>{{position.PositionDescription}}</td>\n      <td>{{position.PositionBaseSalary}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/positions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(positionService, router) {
        this.positionService = positionService;
        this.router = router;
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionsSub = this.positionService.getPositions().subscribe(function (data) {
            _this.positions = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.router.navigate(['/position', id]);
    };
    PositionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-positions',
            template: __webpack_require__("./src/app/positions.component.html"),
            styles: [__webpack_require__("./src/app/positions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map