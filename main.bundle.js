webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matches_new_match_new_match_component__ = __webpack_require__("../../../../../src/app/matches/new-match/new-match.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new-match', component: __WEBPACK_IMPORTED_MODULE_3__matches_new_match_new_match_component__["a" /* NewMatchComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <h1 style=\"color: white\">\r\n        Welcome to Töggeli App!\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <nav mat-tab-nav-bar>\r\n      <a mat-tab-link [routerLink]=\"link.path\" routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\" *ngFor=\"let link of navLinks\">{{link.label}}</a>\r\n    </nav>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  background-color: #43a047; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.navLinks = [
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/new-match', label: 'Neues Spiel' }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__matches_new_match_new_match_component__ = __webpack_require__("../../../../../src/app/matches/new-match/new-match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_material_keyboard_core__ = __webpack_require__("../../../../@ngx-material-keyboard/core/@ngx-material-keyboard/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__matches_shared_match_service__ = __webpack_require__("../../../../../src/app/matches/shared/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__players_shared_player_service__ = __webpack_require__("../../../../../src/app/players/shared/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__matches_new_match_new_match_component__["a" /* NewMatchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__matches_new_match_new_match_component__["b" /* RandomPlayerSelectorDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_material_keyboard_core__["a" /* MatKeyboardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__matches_shared_match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_15__players_shared_player_service__["a" /* PlayerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__matches_new_match_new_match_component__["b" /* RandomPlayerSelectorDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/matches/new-match/new-match.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-left: 5%; padding-right: 5%\">\r\n  <div class=\"row\" style=\"margin-top: 5rem\">\r\n\r\n    <div class=\"match-column col-12\" [@showMatchColumn] [@hideMatchColumn] [ngClass]=\"{'col-xl-8': !isResultState}\">\r\n      <mat-card style=\"background-color: #FCFCFC\">\r\n        <div class=\"match-box row\">\r\n          <div class=\"team1 border col\" style=\"margin-left: 1rem; margin-right: 1em\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" style=\"margin-bottom: 1em; margin-top: 1em\">\r\n                <h3 class=\"text-center\">Team 1</h3>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation] (click)=\"match.team1.player1 = null\"\r\n                        color=\"accent\" style=\"margin-bottom: 1em\" *ngIf=\"match.team1.player1 !== null\">\r\n                  {{match.team1.player1.name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"match.team1.player1 === null\">Player 1</button>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation]=\"\" (click)=\"match.team1.player2 = null\"\r\n                        color=\"accent\" style=\"margin-bottom: 1em\" *ngIf=\"match.team1.player2 !== null\">\r\n                  {{match.team1.player2.name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"match.team1.player2 === null\">Player 2</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\" *ngIf=\"isResultState\"></div>\r\n          <div class=\"col-1 text-center\" [@showPoints] *ngIf=\"isResultState\">\r\n            <mat-form-field style=\"width: 80px; margin-top: 3rem\">\r\n              <mat-select placeholder=\"Points\" [(ngModel)]=\"match.score1\" (selectionChange)=\"onTeam1PointChange()\">\r\n                <mat-option *ngFor=\"let point of points\" [value]=\"point\">\r\n                  {{point}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\"></div>\r\n          <div class=\"col-12 col-xl-1\" style=\"margin: 1rem\">\r\n            <h3 class=\"text-center\" style=\"margin-top: 3rem\">VS</h3>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\" *ngIf=\"isResultState\"></div>\r\n          <div class=\"col-1 text-center\" [@showPoints] *ngIf=\"isResultState\">\r\n            <mat-form-field style=\"width: 80px; margin-top: 3rem\">\r\n              <mat-select placeholder=\"Points\" [(ngModel)]=\"match.score2\" (selectionChange)=\"onTeam2PointChange()\">\r\n                <mat-option *ngFor=\"let point of points\" [value]=\"point\">\r\n                  {{point}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\"></div>\r\n          <div class=\"team2 border col\" style=\"margin-left: 1rem; margin-right: 1em\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" style=\"margin-bottom: 1em; margin-top: 1em\">\r\n                <h3 class=\"text-center\">Team 2</h3>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation]=\"\" (click)=\"match.team2.player1 = null\"\r\n                        color=\"accent\" style=\"margin-bottom: 1em\" *ngIf=\"match.team2.player1 !== null\">\r\n                  {{match.team2.player1.name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"match.team2.player1 === null\">Player 3</button>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation]=\"\" (click)=\"match.team2.player2 = null\"\r\n                        color=\"accent\" style=\"margin-bottom: 1em\" *ngIf=\"match.team2.player2 !== null\">\r\n                  {{match.team2.player2.name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"match.team2.player2 === null\">Player 4</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <div class=\"row\" style=\"margin: 1rem\">\r\n        <div class=\"col-12 text-center\">\r\n          <button *ngIf=\"!isResultState\" [disabled]=\"!checkTeamsFull()\" mat-raised-button color=\"primary\" (click)=\"isResultState = true\">Resultat eingeben</button>\r\n          <button *ngIf=\"isResultState\" mat-raised-button color=\"primary\" (click)=\" isResultState = false\">Zurück</button>\r\n          <button *ngIf=\"isResultState\" mat-raised-button color=\"primary\" (click)=\"addNewMatch()\">Speichern</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"players-column col\" *ngIf=\"!isResultState\" [@showPlayerColumn] [@hidePlayerColumn]>\r\n      <div class=\"text-center\">\r\n        <h3>Spieler</h3>\r\n      </div>\r\n      <div class=\"players-box text-center\" style=\"margin: 1rem\">\r\n        <ng-template ngFor let-player [ngForOf]=\"players\">\r\n          <button class=\"player-button\" *ngIf=\"!isPlayerInTeam(player)\" mat-raised-button\r\n                  color=\"accent\" style=\"margin: 1em\" (click)=\"addPlayerToTeam(player)\"\r\n                  matTooltip=\"Click to add {{player.name}} to the match\">\r\n            {{player.name}}\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"row\" style=\"margin: 1rem; padding-top: 20px\">\r\n        <div class=\"col-12 text-center\">\r\n          <button mat-raised-button matTooltip=\"Add Player randomly\" [disabled]=\"checkTeamsFull()\" color=\"primary\" style=\"margin: 1em\" (click)=\"openRandomDialog()\"><mat-icon>casino</mat-icon></button>\r\n        </div>\r\n        <div class=\"w-100\"></div>\r\n        <div class=\"col-12 text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n              <mat-form-field>\r\n                <input matInput [matKeyboard]=\"'de-CH'\" [(ngModel)]=\"newPlayer\" placeholder=\"Add new Player\">\r\n                <!--TODO A open keyboard button-->\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col text-center\" *ngIf=\"newPlayer != ''\">\r\n              <button mat-raised-button (click)=\"addNewPlayer()\" color=\"primary\">Spieler hinzufügen\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/matches/new-match/new-match.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-placeholder {\n  border: dotted;\n  border-color: #ff9380;\n  margin-bottom: 1em;\n  font-style: italic;\n  font-size: medium; }\n\nbutton {\n  font-size: large;\n  min-width: 110px;\n  min-height: 50px; }\n\n.col-12 {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  transition: all 400ms ease;\n  transition-delay: 400ms; }\n\n.col-md-8 {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  transition: all 400ms ease;\n  transition-delay: 100ms; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/matches/new-match/new-match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RandomPlayerSelectorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_animate__ = __webpack_require__("../../../../ng-animate/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__players_shared_player_service__ = __webpack_require__("../../../../../src/app/players/shared/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_match_service__ = __webpack_require__("../../../../../src/app/matches/shared/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_match_model__ = __webpack_require__("../../../../../src/app/matches/shared/match.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var NewMatchComponent = (function () {
    function NewMatchComponent(playerService, matchService, dialog) {
        this.playerService = playerService;
        this.matchService = matchService;
        this.dialog = dialog;
        this.newPlayer = '';
        this.isResultState = false;
        this.points = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ];
        this.match = new __WEBPACK_IMPORTED_MODULE_5__shared_match_model__["a" /* Match */]();
    }
    NewMatchComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    NewMatchComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService.getPlayers().subscribe(function (players) { return _this.players = players; });
        this.sortPlayers();
    };
    NewMatchComponent.prototype.addNewPlayer = function () {
        var _this = this;
        this.playerService.addPlayer({ id: null, name: this.newPlayer }).subscribe(function (player) {
            /*this.players.push(player);*/
            _this.newPlayer = '';
            _this.sortPlayers();
        });
    };
    NewMatchComponent.prototype.addNewMatch = function () {
        this.matchService.addMatch(this.match).subscribe(function () {
            //TODO start animation and go to dashboard
            console.log('Match saved');
        });
    };
    NewMatchComponent.prototype.addPlayerToTeam = function (player) {
        if (this.match.team1.player1 == null) {
            this.match.team1.player1 = player;
        }
        else if (this.match.team1.player2 == null) {
            this.match.team1.player2 = player;
        }
        else if (this.match.team2.player1 == null) {
            this.match.team2.player1 = player;
        }
        else if (this.match.team2.player2 == null) {
            this.match.team2.player2 = player;
        }
        else {
        }
    };
    NewMatchComponent.prototype.isPlayerInTeam = function (player) {
        if (this.match.team1.player1 === player ||
            this.match.team1.player2 === player ||
            this.match.team2.player1 === player ||
            this.match.team2.player2 === player) {
            return true;
        }
        else {
            return false;
        }
    };
    NewMatchComponent.prototype.addPlayerToTeamRandomly = function (players) {
        var i = players.length;
        for (var count = 0; count < i; count++) {
            var player = void 0;
            player = this.getRandomPlayer(players);
            this.addPlayerToTeam(player);
            players.splice(players.indexOf(player), 1);
        }
    };
    NewMatchComponent.prototype.getRandomPlayer = function (players) {
        var randomIndex = Math.floor((Math.random() * players.length));
        return players[randomIndex];
    };
    NewMatchComponent.prototype.onTeam1PointChange = function () {
        if (this.match.score1 !== 10) {
            this.match.score2 = 10;
        }
    };
    NewMatchComponent.prototype.onTeam2PointChange = function () {
        if (this.match.score2 !== 10) {
            this.match.score1 = 10;
        }
    };
    NewMatchComponent.prototype.sortPlayers = function () {
        this.players.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    };
    NewMatchComponent.prototype.checkTeamsFull = function () {
        if (this.match.team1.player1 === null ||
            this.match.team1.player2 === null ||
            this.match.team2.player1 === null ||
            this.match.team2.player2 === null) {
            return false;
        }
        else {
            return true;
        }
    };
    NewMatchComponent.prototype.openRandomDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(RandomPlayerSelectorDialogComponent, {
            minWidth: '400px',
            minHeight: '100px',
            maxHeight: '600px',
            data: {
                players: this.players
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.addPlayerToTeamRandomly(result);
            }
            else {
            }
            //TODO Animations?
        });
    };
    NewMatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-match',
            template: __webpack_require__("../../../../../src/app/matches/new-match/new-match.component.html"),
            styles: [__webpack_require__("../../../../../src/app/matches/new-match/new-match.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('addBounceAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["bounceInDown"])),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["bounceOutUp"]))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('showPlayerColumn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["slideInRight"], {
                        params: { timing: 0.3, fromOpacity: 0 }
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('hidePlayerColumn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["slideOutRight"], {
                        params: { timing: 0.3, toOpacity: 0 }
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('showMatchColumn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["slideInLeft"], {
                        params: { timing: 0.3, fromOpacity: 0 }
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('hideMatchColumn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["slideOutUp"], {
                        params: { timing: 0.3, toOpacity: 0 }
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('showPoints', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["fadeInUp"]), {
                        params: { timing: 0.8 }
                    })
                ])
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__players_shared_player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_4__shared_match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialog */]])
    ], NewMatchComponent);
    return NewMatchComponent;
}());

var RandomPlayerSelectorDialogComponent = (function () {
    function RandomPlayerSelectorDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RandomPlayerSelectorDialogComponent.prototype.toggleSelect = function (selectToggle, playerSelection) {
        if (selectToggle.checked) {
            playerSelection.selectAll();
        }
        else if (!selectToggle.checked) {
            playerSelection.deselectAll();
        }
    };
    RandomPlayerSelectorDialogComponent.prototype.submitSelectedPlayers = function (playerSelection) {
        if (playerSelection.selectedOptions.selected.length > 1) {
            var selectedPlayers = [];
            for (var _i = 0, _a = playerSelection.selectedOptions.selected; _i < _a.length; _i++) {
                var selectOption = _a[_i];
                selectedPlayers.push(selectOption.value);
            }
            this.dialogRef.close(selectedPlayers);
        }
    };
    RandomPlayerSelectorDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-random-player-selector-dialog',
            template: __webpack_require__("../../../../../src/app/matches/new-match/random-player-selector-dialog.component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatDialogRef */], Object])
    ], RandomPlayerSelectorDialogComponent);
    return RandomPlayerSelectorDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/matches/new-match/random-player-selector-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title>\r\n  <h3>Select Players</h3>\r\n  <mat-slide-toggle #selectToggle checked style=\"margin: 5px\" (change)=\"toggleSelect(selectToggle, playerSelection)\">\r\n    Select all\r\n  </mat-slide-toggle>\r\n</div>\r\n<mat-dialog-content>\r\n  <mat-selection-list #playerSelection style=\"max-height: 500px\" (selectionChange)=\"selectToggle.checked = false\">\r\n    <mat-list-option *ngFor=\"let player of data.players\" [value]=\"player\" selected>\r\n      {{player.name}}\r\n    </mat-list-option>\r\n  </mat-selection-list>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button color=\"primary\" mat-raised-button (click)=\"submitSelectedPlayers(playerSelection)\">Ok</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/matches/shared/match.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__teams_shared_team_model__ = __webpack_require__("../../../../../src/app/teams/shared/team.model.ts");

var Match = (function () {
    function Match() {
        this.team1 = new __WEBPACK_IMPORTED_MODULE_0__teams_shared_team_model__["a" /* Team */]();
        this.team2 = new __WEBPACK_IMPORTED_MODULE_0__teams_shared_team_model__["a" /* Team */]();
    }
    return Match;
}());



/***/ }),

/***/ "../../../../../src/app/matches/shared/match.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MatchService = (function () {
    function MatchService() {
        this.matchesMock = [];
    }
    MatchService.prototype.contructor = function () {
    };
    MatchService.prototype.addMatch = function (match) {
        this.matchesMock.push(match);
        console.log(this.matchesMock);
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(match);
    };
    MatchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MatchService);
    return MatchService;
}());



/***/ }),

/***/ "../../../../../src/app/players/shared/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlayerService = (function () {
    function PlayerService() {
        this.playersMock = [
            { id: 1, name: 'Carsten' },
            { id: 2, name: 'Lars' },
            { id: 3, name: 'Dani' },
            { id: 4, name: 'Marcel' },
            { id: 5, name: 'Rene' },
            { id: 6, name: 'Ueli' },
            { id: 7, name: 'Sven' },
            { id: 8, name: 'Simon' },
            { id: 9, name: 'Peter' },
            { id: 10, name: 'Phong' },
        ];
    }
    PlayerService.prototype.contructor = function () {
    };
    PlayerService.prototype.getPlayers = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.playersMock);
    };
    PlayerService.prototype.addPlayer = function (player) {
        this.playersMock.push(player);
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(player);
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/teams/shared/team.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = (function () {
    function Team() {
        this.player1 = null;
        this.player2 = null;
    }
    return Team;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map