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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_dashboard_game_dashboard_component__ = __webpack_require__("../../../../../src/app/game-dashboard/game-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_game_new_game_component__ = __webpack_require__("../../../../../src/app/new-game/new-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__game_dashboard_game_dashboard_component__["a" /* GameDashboardComponent */] },
    { path: 'new-game', component: __WEBPACK_IMPORTED_MODULE_3__new_game_new_game_component__["a" /* NewGameComponent */] },
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <h1 style=\"color: white\">\r\n        Welcome to Töggeli App!\r\n      </h1>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<!--  <nav md-tab-nav-bar>\r\n    <a md-tab-link *ngFor=\"let link of navLinks\"\r\n       [routerLink]=\"link.path\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      {{ link.label }}\r\n    </a>\r\n  </nav>-->\r\n  <router-outlet></router-outlet>\r\n\r\n\r\n"

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
            { path: '/new-game', label: 'New Game' }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_dashboard_game_dashboard_component__ = __webpack_require__("../../../../../src/app/game-dashboard/game-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_game_new_game_component__ = __webpack_require__("../../../../../src/app/new-game/new-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_material_keyboard_core__ = __webpack_require__("../../../../@ngx-material-keyboard/core/@ngx-material-keyboard/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
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
                __WEBPACK_IMPORTED_MODULE_7__game_dashboard_game_dashboard_component__["a" /* GameDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__new_game_new_game_component__["a" /* NewGameComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngx_material_keyboard_core__["a" /* MatKeyboardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/game-dashboard/game-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/game-dashboard/game-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GameDashboardComponent = (function () {
    function GameDashboardComponent() {
    }
    GameDashboardComponent.prototype.ngOnInit = function () {
    };
    GameDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'game-dashboard',
            template: __webpack_require__("../../../../../src/app/game-dashboard/game-dashboard.component.html")
        })
    ], GameDashboardComponent);
    return GameDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-game/new-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-left: 5%; padding-right: 5%\">\r\n  <div class=\"row\" style=\"margin-top: 5rem\">\r\n\r\n    <div class=\"game-column col-12\" [@showGameColumn] [@hideGameColumn] [ngClass]=\"{'col-xl-8': !isResultState}\">\r\n      <mat-card style=\"background-color: #FCFCFC\">\r\n        <div class=\"game-box row\">\r\n          <div class=\"team1 border col\" style=\"margin-left: 1rem; margin-right: 1em\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" style=\"margin-bottom: 1em; margin-top: 1em\">\r\n                <h3 class=\"text-center\">Team 1</h3>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation]=\"\" (click)=\"deletePlayerFromTeam(team1[0], team1)\"\r\n                        style=\"margin-bottom: 1em; background-color: #F66153; color: white\" *ngIf=\"team1.length >= 1\">\r\n                  {{team1[0].name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"(team1.length < 1)\">Player 1</button>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation]=\"\" (click)=\"deletePlayerFromTeam(team1[1], team1)\"\r\n                        style=\"margin-bottom: 1em; background-color: #F66153; color: white\" *ngIf=\"team1.length == 2\">\r\n                  {{team1[1].name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"team1.length < 2\">Player 2</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\" *ngIf=\"isResultState\"></div>\r\n          <div class=\"col-1 text-center\" [@showPoints] *ngIf=\"isResultState\">\r\n            <mat-form-field style=\"width: 80px; margin-top: 3rem\">\r\n              <mat-select placeholder=\"Points\" [(ngModel)]=\"team1Points\" (selectionChange)=\"onTeam1PointChange()\">\r\n                <mat-option *ngFor=\"let point of points\" [value]=\"point\">\r\n                  {{point}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\"></div>\r\n          <div class=\"col-12 col-xl-1\" style=\"margin: 1rem\">\r\n            <h3 class=\"text-center\" style=\"margin-top: 3rem\">VS</h3>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\" *ngIf=\"isResultState\"></div>\r\n          <div class=\"col-1 text-center\" [@showPoints] *ngIf=\"isResultState\">\r\n            <mat-form-field style=\"width: 80px; margin-top: 3rem\">\r\n              <mat-select placeholder=\"Points\" [(ngModel)]=\"team2Points\" (selectionChange)=\"onTeam2PointChange()\">\r\n                <mat-option *ngFor=\"let point of points\" [value]=\"point\">\r\n                  {{point}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"w-100 d-none d-md-block d-lg-none\"></div>\r\n          <div class=\"team2 border col\" style=\"margin-left: 1rem; margin-right: 1em\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" style=\"margin-bottom: 1em; margin-top: 1em\">\r\n                <h3 class=\"text-center\">Team 2</h3>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation]=\"\" (click)=\"deletePlayerFromTeam(team2[0], team2)\"\r\n                        style=\"margin-bottom: 1em; background-color: #F66153; color: white\" *ngIf=\"team2.length >= 1\">\r\n                  {{team2[0].name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"team2.length < 1\">Player 3</button>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"player-button\" mat-raised-button [@addBounceAnimation]=\"\" (click)=\"deletePlayerFromTeam(team2[1], team2)\"\r\n                        style=\"margin-bottom: 1em; background-color: #F66153; color: white\" *ngIf=\"team2.length == 2\">\r\n                  {{team2[1].name}}\r\n                </button>\r\n                <button mat-button class=\"player-placeholder\" disabled *ngIf=\"team2.length < 2\">Player 4</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <div class=\"row\" style=\"margin: 1rem\">\r\n        <div class=\"col-12 text-center\">\r\n          <button *ngIf=\"!isResultState\" mat-raised-button style=\"background-color: #43a047; color: white\" (click)=\" isResultState = true\">Resultat eingeben</button>\r\n          <button *ngIf=\"isResultState\" mat-raised-button style=\"background-color: #43a047; color: white\" (click)=\" isResultState = false\">Zurück</button>\r\n          <button *ngIf=\"isResultState\" mat-raised-button style=\"background-color: #43a047; color: white\">Speichern</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"players-column col\" *ngIf=\"!isResultState\" [@showPlayerColumn] [@hidePlayerColumn]>\r\n      <div class=\"text-center\">\r\n        <h3>Spieler</h3>\r\n      </div>\r\n      <div class=\"players-box text-center\" style=\"margin: 1rem\">\r\n        <button class=\"player-button\" *ngFor=\"let player of players\" mat-raised-button\r\n                style=\"margin: 1em; background-color: #F66153; color: white\" (click)=\"addPlayerToTeam(player)\"\r\n                matTooltip=\"Click to add {{player.name}} to the game\">\r\n          {{player.name}}\r\n        </button>\r\n      </div>\r\n      <div class=\"row\" style=\"margin: 1rem; padding-top: 20px\">\r\n        <div class=\"col-12 text-center\">\r\n          <button mat-raised-button matTooltip=\"Add Player randomly\" style=\"margin: 1em; background-color: #43a047; color: white\" (click)=\"addPlayerToTeamRandom()\"><mat-icon>casino</mat-icon></button>\r\n        </div>\r\n        <div class=\"w-100\"></div>\r\n        <div class=\"col-12 text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n              <mat-form-field>\r\n                <input matInput [matKeyboard]=\"'de-CH'\" [(ngModel)]=\"newPlayer\" placeholder=\"Add new Player\">\r\n                <!--TODO A open keyboard button-->\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col text-center\" *ngIf=\"newPlayer != ''\">\r\n              <button mat-raised-button  (click)=\"addNewPlayer()\" style=\"background-color: #43a047; color: white\">Spieler hinzufügen\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/new-game/new-game.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-placeholder {\n  border: dotted;\n  border-color: #ff9380;\n  margin-bottom: 1em;\n  font-style: italic;\n  font-size: medium; }\n\nbutton {\n  font-size: large;\n  min-width: 110px;\n  min-height: 50px; }\n\n.col-12 {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  transition: all 400ms ease;\n  transition-delay: 400ms; }\n\n.col-md-8 {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  transition: all 400ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-game/new-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_animate__ = __webpack_require__("../../../../ng-animate/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_animate__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewGameComponent = (function () {
    function NewGameComponent() {
        this.newPlayer = '';
        this.isResultState = false;
        this.players = [
            { name: 'Carsten' },
            { name: 'Lars' },
            { name: 'Dani' },
            { name: 'Marcel' },
            { name: 'Rene' },
            { name: 'Ueli' },
            { name: 'Sven' },
            { name: 'Simon' },
            { name: 'Peter' },
            { name: 'Phong' },
        ];
        this.team1 = [];
        this.team2 = [];
        this.points = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ];
    }
    NewGameComponent.prototype.ngOnInit = function () {
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
    NewGameComponent.prototype.addPlayerToTeam = function (player) {
        if (this.team1.length !== 2) {
            this.movePlayerToTeam(player, this.team1);
        }
        else if (this.team2.length !== 2) {
            this.movePlayerToTeam(player, this.team2);
        }
    };
    NewGameComponent.prototype.addPlayerToTeamRandom = function () {
        while (this.team1.length < 2) {
            var randomIndex = Math.floor((Math.random() * this.players.length));
            this.movePlayerToTeam(this.players[randomIndex], this.team1);
        }
        while (this.team2.length < 2) {
            var randomIndex = Math.floor((Math.random() * this.players.length));
            this.movePlayerToTeam(this.players[randomIndex], this.team2);
        }
    };
    NewGameComponent.prototype.movePlayerToTeam = function (player, team) {
        team.push(player);
        this.players.splice(this.players.indexOf(player), 1);
    };
    NewGameComponent.prototype.deletePlayerFromTeam = function (player, team) {
        if (!this.isResultState) {
            this.players.push(player);
            this.players.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            team.splice(team.indexOf(player), 1);
        }
    };
    NewGameComponent.prototype.addNewPlayer = function () {
        this.players.push({ name: this.newPlayer });
        this.newPlayer = '';
    };
    NewGameComponent.prototype.onTeam1PointChange = function () {
        if (this.team1Points !== 10) {
            this.team2Points = 10;
        }
    };
    NewGameComponent.prototype.onTeam2PointChange = function () {
        if (this.team2Points !== 10) {
            this.team1Points = 10;
        }
    };
    NewGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-game',
            template: __webpack_require__("../../../../../src/app/new-game/new-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-game/new-game.component.scss")],
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
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('showGameColumn', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_2_ng_animate__["slideInLeft"], {
                        params: { timing: 0.3, fromOpacity: 0 }
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('hideGameColumn', [
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
        __metadata("design:paramtypes", [])
    ], NewGameComponent);
    return NewGameComponent;
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