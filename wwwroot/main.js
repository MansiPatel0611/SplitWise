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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/Model.ts":
/*!*********************************!*\
  !*** ./src/app/Models/Model.ts ***!
  \*********************************/
/*! exports provided: User, FriendResponse, Group, CreateGroupResponse, GroupResponse, CommonResponse, GroupMember, Detail, Bill, BillResponse, BillGetResponse, BillDetail, PayerResponse, SharedWithResponse, SettlementResponse, GetSettlementResponse, settle, TransactionGetResponse, TransactionResponse, GroupBalance, GroupBalanceDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendResponse", function() { return FriendResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupResponse", function() { return CreateGroupResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupResponse", function() { return GroupResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonResponse", function() { return CommonResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMember", function() { return GroupMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail", function() { return Detail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bill", function() { return Bill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillResponse", function() { return BillResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillGetResponse", function() { return BillGetResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetail", function() { return BillDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayerResponse", function() { return PayerResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWithResponse", function() { return SharedWithResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementResponse", function() { return SettlementResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettlementResponse", function() { return GetSettlementResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settle", function() { return settle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionGetResponse", function() { return TransactionGetResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResponse", function() { return TransactionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBalance", function() { return GroupBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBalanceDetail", function() { return GroupBalanceDetail; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var FriendResponse = /** @class */ (function () {
    function FriendResponse() {
    }
    return FriendResponse;
}());

var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());

var CreateGroupResponse = /** @class */ (function () {
    function CreateGroupResponse() {
    }
    return CreateGroupResponse;
}());

var GroupResponse = /** @class */ (function () {
    function GroupResponse() {
    }
    return GroupResponse;
}());

var CommonResponse = /** @class */ (function () {
    function CommonResponse() {
    }
    return CommonResponse;
}());

var GroupMember = /** @class */ (function () {
    function GroupMember() {
    }
    return GroupMember;
}());

var Detail = /** @class */ (function () {
    function Detail() {
    }
    return Detail;
}());

var Bill = /** @class */ (function () {
    function Bill() {
    }
    return Bill;
}());

var BillResponse = /** @class */ (function () {
    function BillResponse() {
    }
    return BillResponse;
}());

var BillGetResponse = /** @class */ (function () {
    function BillGetResponse() {
    }
    return BillGetResponse;
}());

var BillDetail = /** @class */ (function () {
    function BillDetail() {
    }
    return BillDetail;
}());

var PayerResponse = /** @class */ (function () {
    function PayerResponse() {
    }
    return PayerResponse;
}());

var SharedWithResponse = /** @class */ (function () {
    function SharedWithResponse() {
    }
    return SharedWithResponse;
}());

var SettlementResponse = /** @class */ (function () {
    function SettlementResponse() {
    }
    return SettlementResponse;
}());

var GetSettlementResponse = /** @class */ (function () {
    function GetSettlementResponse() {
    }
    return GetSettlementResponse;
}());

var settle = /** @class */ (function () {
    function settle() {
    }
    return settle;
}());

var TransactionGetResponse = /** @class */ (function () {
    function TransactionGetResponse() {
    }
    return TransactionGetResponse;
}());

var TransactionResponse = /** @class */ (function () {
    function TransactionResponse() {
    }
    return TransactionResponse;
}());

var GroupBalance = /** @class */ (function () {
    function GroupBalance() {
    }
    return GroupBalance;
}());

var GroupBalanceDetail = /** @class */ (function () {
    function GroupBalanceDetail() {
    }
    return GroupBalanceDetail;
}());



/***/ }),

/***/ "./src/app/Services/BillService.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/BillService.ts ***!
  \*****************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
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


var BillService = /** @class */ (function () {
    function BillService(http) {
        this.http = http;
    }
    BillService.prototype.addNewBill = function (bill) {
        return this.http.post("api/Bill/addBill", bill);
    };
    BillService.prototype.getUserBills = function (userid) {
        return this.http.get("api/Bill/allbills/" + userid);
    };
    BillService.prototype.getGroupBills = function (id) {
        return this.http.get("api/Bill/getGroupBills/" + id);
    };
    BillService.prototype.getFriendBills = function (userid, friendid) {
        return this.http.get("api/Bill/getFriendBills/" + userid + "/" + friendid);
    };
    BillService.prototype.getFriendSettlements = function (userid, friendid) {
        return this.http.get("api/settlements/" + userid + "/" + friendid);
    };
    BillService.prototype.settleUp = function (settle) {
        return this.http.post("api/settleup", settle);
    };
    BillService.prototype.getGroupSettlement = function (userid, groupid) {
        return this.http.get("api/GroupSettlements/" + userid + "/" + groupid);
    };
    BillService.prototype.getUserSettlements = function (userid) {
        return this.http.get("api/userSettlements/" + userid);
    };
    BillService.prototype.getFriendTransactions = function (userid, friendid) {
        return this.http.get("api/frd/expense/" + userid + "/" + friendid);
    };
    BillService.prototype.getGroupTransactions = function (groupid) {
        return this.http.get("api/group/expense/" + groupid);
    };
    BillService.prototype.getUserExpenseTransaction = function (userid) {
        return this.http.get("api/all/expense/" + userid);
    };
    BillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BillService);
    return BillService;
}());



/***/ }),

/***/ "./src/app/Services/FriendService.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/FriendService.ts ***!
  \*******************************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
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


var FriendService = /** @class */ (function () {
    function FriendService(http) {
        this.http = http;
    }
    FriendService.prototype.getFriendData = function (id) {
        return this.http.get("api/Friend/getFriendData/" + id);
    };
    FriendService.prototype.addNewFriend = function (userid, name, email) {
        return this.http.get("api/Friend/addFriend/" + userid + "/" + name + "/" + email);
    };
    FriendService.prototype.removeFriend = function (userid, friendid) {
        return this.http.delete("api/Friend/removeFriend/" + userid + "/" + friendid);
    };
    FriendService.prototype.addFriend = function (userid, friendid) {
        return this.http.post("api/Friend/addNewFriend/", userid + "/" + friendid);
    };
    FriendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/Services/GroupService.ts":
/*!******************************************!*\
  !*** ./src/app/Services/GroupService.ts ***!
  \******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
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


var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
    }
    GroupService.prototype.CreateGroup = function (group) {
        return this.http.post("api/Group/addGroup", group);
    };
    GroupService.prototype.getFriendGroups = function (userid, friendid) {
        return this.http.get("api/Group/getFriendGroups/" + userid + "/" + friendid);
    };
    GroupService.prototype.GetGroupInfo = function (id) {
        return this.http.get("api/Group/getGroupData/" + id);
    };
    GroupService.prototype.addGroupMember = function (userid, groupid) {
        return this.http.get("api/GroupMember/addMember" + "/" + userid + "/" + groupid);
    };
    GroupService.prototype.removeGroupMember = function (userid, groupid) {
        return this.http.delete("api/GroupMember/deleteMember/" + userid + "/" + groupid);
    };
    GroupService.prototype.updateGroup = function (groupid, group) {
        return this.http.put("api/Group/updateGroup/" + groupid, group);
    };
    GroupService.prototype.deleteGroup = function (id) {
        return this.http.delete("api/Group/deleteGroup/" + id);
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/Services/HubService.ts":
/*!****************************************!*\
  !*** ./src/app/Services/HubService.ts ***!
  \****************************************/
/*! exports provided: HubConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionService", function() { return HubConnectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HubConnectionService = /** @class */ (function () {
    function HubConnectionService() {
        this.init();
    }
    HubConnectionService.prototype.update = function () {
        this._hubConnection.invoke('SendToAll');
    };
    HubConnectionService.prototype.init = function () {
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl('/serve')
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information).build();
        this._hubConnection
            .start()
            .then(function () { return console.log('Connection started!'); })
            .catch(function (err) { return console.log('Error while establishing connection :'); });
        this._hubConnection.on('send', function () { });
    };
    HubConnectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HubConnectionService);
    return HubConnectionService;
}());



/***/ }),

/***/ "./src/app/Services/UserService.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/UserService.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.setuser = function (user) {
        this.user = user;
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put("api/User/updateUser/" + user.userid, user);
    };
    UserService.prototype.getUserData = function (id) {
        return this.http.get("api/User/getUser/" + id);
    };
    UserService.prototype.getUser = function (uname, password) {
        return this.http.get("/api/User/login" + "/" + uname + "/" + password);
    };
    UserService.prototype.register = function (username, email, password) {
        return this.http.get("/api/User/Register" + "/" + username + "/" + email + "/" + password);
    };
    UserService.prototype.getFriends = function (id) {
        return this.http.get("api/Friend/getFriend/" + id);
    };
    UserService.prototype.getGroups = function (id) {
        return this.http.get("api/Group/getGroups/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_HubService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/HubService */ "./src/app/Services/HubService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router, service) {
        this._router = _router;
        this.service = service;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.service.update();
        var _this = this;
        this._router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this._router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this._router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_HubService__WEBPACK_IMPORTED_MODULE_2__["HubConnectionService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _routing_module_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing-module.module */ "./src/app/routing-module.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _routing_module_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModuleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] }
                ], { useHash: true })
            ],
            providers: [_Services_UserService__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label.nav-link{\r\n  border-color:black;\r\n  background-color:grey;\r\n  color:white;\r\n}\r\n.hidescroll:hover{\r\n  overflow-y:scroll;\r\n}\r\n.hidescroll::-webkit-scrollbar { width: 10px; }\r\n.hidescroll::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 5px;\r\n}\r\n.hidescroll::-webkit-scrollbar-thumb {\r\n    background-color:lightgray; \r\n    border-radius: 5px;\r\n}\r\n/*.hidescroll::-webkit-scrollbar-thumb:hover {\r\n    background: #b30000; \r\n}*/\r\ndiv.nav-item{\r\n  width:180px;\r\n}\r\nnav.navbar{\r\n  background-color:whitesmoke;\r\n}\r\nlabel.list{\r\n  background-color:darkgrey;\r\n}\r\n.modal-content{\r\n  width:300px;\r\n}\r\n.form-control{\r\n  width:auto;\r\n}\r\n.myrouter{\r\n  min-height:initial;\r\n  max-height:500px;\r\n  overflow-y:scroll;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:auto\">\r\n\r\n  <button style=\"position:absolute;top:25px;left:1000px;width:100px\" (click)=\"logout()\" class=\"btn btn-info\">logout</button>\r\n  <button class=\"btn btn-secondary\" style=\"color:white;position:absolute;top:25px;left:1111px;width:100px\" [routerLink]=\"['account/setting']\">\r\n    {{user.user_name}}\r\n    <span class=\"glyphicon glyphicon-lg glyphicon-cog\"></span>\r\n  </button>\r\n\r\n  <div class=\"col-lg-2 hidescroll\" style=\"height:550px\" role=\"scrollbar\">\r\n    <nav style=\" width:190px\" class=\"navbar flex-column\">\r\n      <div class=\"nav flex-column\">\r\n        <div class=\"nav-item\">\r\n          <label class=\"nav-link\" [routerLink]=\"['dashboard']\">\r\n            <span class=\"glyphicon glyphicon-tasks\"></span>  Dashboard\r\n          </label>\r\n        </div>\r\n        <div class=\"nav-item\" [routerLink]=\"['expense']\">\r\n          <label class=\"nav-link\"><span class=\"glyphicon glyphicon-th-list\"></span>  All Expense </label>\r\n        </div>\r\n\r\n\r\n        <div class=\"nav-item\">\r\n          <label class=\"nav-link\">\r\n            Groups\r\n            <span class=\"glyphicon glyphicon-plus\" style=\"position:relative;left:80px\" [routerLink]=\"['newgroup']\"></span>\r\n          </label>\r\n          <div>\r\n            <label class=\"nav-link list\" *ngFor=\"let group of groups\" [routerLink]=\"['group',group.groupid]\">\r\n              <span class=\"glyphicon glyphicon-tag\"></span> {{ group.group_name }}\r\n            </label>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nav-item\">\r\n          <label class=\"nav-link\">\r\n            Friends\r\n            <span class=\"glyphicon glyphicon-plus\" style=\"position:relative;left:80px\" data-toggle=\"modal\" data-target=\"#myModal\"></span>\r\n          </label>\r\n          <div>\r\n            <label class=\"nav-link list\" *ngFor=\"let friend of friends\" [routerLink]=\"['friend',friend.userid]\">\r\n              <span class=\"glyphicon glyphicon-user\"></span>\r\n              {{ friend.user_name }}\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add New Friend</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form class=\"form\" novalidate>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"frd_name\" placeholder=\"Enter friend Name\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"frd_email\" placeholder=\"Enter your Email_id\">\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" (click)=\"onSubmit()\"  class=\"btn btn-success\" data-dismiss=\"modal\">Add</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </nav>\r\n  </div>\r\n  <div class=\"col-lg-10 myrouter\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_FriendService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/FriendService */ "./src/app/Services/FriendService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardComponent = /** @class */ (function () {
    function BoardComponent(router, user_service, friend_service, route) {
        this.router = router;
        this.user_service = user_service;
        this.friend_service = friend_service;
        this.route = route;
        this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.user_service.getFriends(this.id).subscribe(function (data) {
            _this.friends = data;
            //  console.log(data),
            // console.log(this.friends)
        });
        this.user_service.getGroups(this.id).subscribe(function (data) {
            _this.groups = data;
            //console.log(data),
            //console.log(this.groups)
        });
        //console.log(this.friends);
        //console.log(this.groups);
        this.user_service.getUserData(this.id)
            .subscribe(function (data) { return _this.user = data; });
    };
    BoardComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.frd_name);
        console.log(this.frd_email);
        this.friend_service.addNewFriend(this.id, this.frd_name, this.frd_email)
            .subscribe(function (data) {
            console.log(data),
                _this.Label = "hide",
                alert("Successfully Added a new friend"),
                _this.router.navigate(['/Board', _this.id]);
        }, function (error) {
            alert("user does not exist");
            _this.frd_name = null;
            _this.frd_email = null;
        });
    };
    BoardComponent.prototype.logout = function () {
        if (confirm("Are you sure you want to log out?")) {
            this.router.navigate(['/home']);
        }
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _Services_FriendService__WEBPACK_IMPORTED_MODULE_4__["FriendService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/create-group/create-group.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-group/create-group.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n  height:40px;\r\n  width:400px;\r\n}\r\n.table{\r\n  width:400px;\r\n}\r\n.container1{\r\n  width:500px;\r\n  height:400px;\r\n  background-color:whitesmoke;\r\n}\r\n.container2{\r\n  height:300px;\r\n  width:400px;\r\n  position:relative;\r\n  left:50px;\r\n  top:50px;\r\n  background-color:white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/create-group/create-group.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-group/create-group.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:auto\">\r\n  <h3>START A NEW GROUP</h3>\r\n  <br />\r\n  <div class=\"col-lg-6\">\r\n    <form class=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n      <label>GROUP NAME</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"group_name\" [(ngModel)]=\"newGroup.group_name\" placeholder=\"MY GROUP NAME\" /><br />\r\n      <label>GROUP MEMBERS</label>\r\n      <div>\r\n        <table class=\"table\" *ngIf='friends && friends.length'>\r\n          <thead>\r\n            <tr>\r\n              <th>People</th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let friend of friends\">\r\n            <tr>\r\n              <td>\r\n                {{ friend.user_name }}\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" id=\"{{friend.userid}}\" class=\"btn btn-success\" (click)=\"addclick(friend)\">Add</button>\r\n              </td>\r\n              <td><button type=\"button\" id=\"{{friend.userid}}\" class=\"btn btn-danger\" (click)=\"removeclick(friend)\">Remove</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <!--<label style=\"font-weight:normal\">\r\n        {{ friend.user_name }}\r\n      </label>\r\n      <button type=\"button\" class=\"btn btn-danger\">Add</button>-->\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-warning\">Save</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"container1\">\r\n      <div class=\"container2\">\r\n        <div style=\"position:relative;left:10px;top:15px\">\r\n          <label>Members:</label>\r\n        </div>\r\n        <div style=\"position:relative;left:10px;top:15px\">\r\n          <div>\r\n            <div *ngFor=\"let member of groupmember\">{{member}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-group/create-group.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-group/create-group.component.ts ***!
  \********************************************************/
/*! exports provided: CreateGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function() { return CreateGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
/* harmony import */ var _Services_GroupService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/GroupService */ "./src/app/Services/GroupService.ts");
/* harmony import */ var _Services_FriendService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/FriendService */ "./src/app/Services/FriendService.ts");
/* harmony import */ var _Services_HubService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/HubService */ "./src/app/Services/HubService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateGroupComponent = /** @class */ (function () {
    function CreateGroupComponent(route, router, friend_service, service, user_service, group_service) {
        this.route = route;
        this.router = router;
        this.friend_service = friend_service;
        this.service = service;
        this.user_service = user_service;
        this.group_service = group_service;
        this.newGroup = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["CreateGroupResponse"]();
        this.groupmemberid = [];
        this.groupmember = [];
    }
    CreateGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.pmid = params['id'];
        });
        this.user_service.getFriends(this.pmid)
            .subscribe(function (data) {
            _this.friends = data;
        });
        var member = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupMember"]();
        member.userid = this.pmid;
        this.groupmemberid.push(member);
    };
    CreateGroupComponent.prototype.addclick = function (friend) {
        // console.log(friend);
        var flag = 0;
        for (var x = 0; x < this.groupmemberid.length; x++) {
            if (this.groupmemberid[x].userid == friend.userid)
                flag = 1;
        }
        if (flag == 0) {
            var member = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupMember"]();
            member.userid = friend.userid;
            this.groupmemberid.push(member);
            this.groupmember.push(friend.user_name);
        }
        console.log(this.groupmemberid);
    };
    CreateGroupComponent.prototype.removeclick = function (friend) {
        //console.log(friend);
        var flag = 0;
        var index;
        for (var x = 0; x < this.groupmemberid.length; x++) {
            if (this.groupmemberid[x].userid == friend.userid) {
                flag = 1;
                index = x;
            }
        }
        if (flag == 1) {
            this.groupmemberid.splice(index, 1);
            this.groupmember.splice(index - 1, 1);
        }
        console.log(this.groupmemberid);
    };
    //addFriends() {
    //  for (var i = 0; i < this.groupmemberid.length; i++) {
    //    for (var j = i + 1; j < this.groupmemberid.length; j++) {
    //      this.friend_service.addFriend(this.groupmemberid[i].userid, this.groupmemberid[j].userid).
    //        subscribe(data => console.log(data));
    //    }
    //  }
    //}
    CreateGroupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newGroup.group_created_by = this.pmid;
        this.newGroup.groupMembers = this.groupmemberid;
        this.newGroup.is_simplified_depts = false;
        console.log(this.newGroup);
        this.group_service.CreateGroup(this.newGroup)
            .subscribe(function (data) {
            console.log(data),
                alert("Success"),
                _this.router.navigate(['/Board', _this.pmid]);
        }, function (error) { return alert("failed to create the group"); });
        // this.addFriends();
        //this.service.update();
    };
    CreateGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-group',
            template: __webpack_require__(/*! ./create-group.component.html */ "./src/app/create-group/create-group.component.html"),
            styles: [__webpack_require__(/*! ./create-group.component.css */ "./src/app/create-group/create-group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_FriendService__WEBPACK_IMPORTED_MODULE_5__["FriendService"], _Services_HubService__WEBPACK_IMPORTED_MODULE_6__["HubConnectionService"], _Services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _Services_GroupService__WEBPACK_IMPORTED_MODULE_4__["GroupService"]])
    ], CreateGroupComponent);
    return CreateGroupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n  height:500px;\r\n}\r\ndiv.navbar{\r\n  background-color:lightgray;\r\n  color:grey;\r\n  height:75px;\r\n}\r\ndiv.navbar1{\r\n  background-color:lightgray;\r\n  color:white;\r\n  height:50px;\r\n  position:relative;\r\n}\r\nlabel.nav-link{\r\n  border-color:black;\r\n  background-color:whitesmoke;\r\n  color:grey\r\n}\r\nlabel.nav-link:hover{\r\n  background-color:lightgray;\r\n  color:black;\r\n}\r\n.detail{\r\n  background-color:whitesmoke;\r\n  height:50px;\r\n}\r\n.modal{\r\n  position:fixed;\r\n  right:100px;\r\n}\r\n.payer.modal.fade:not(.in) .modal-dialog{\r\n    -webkit-transform: translate3d(-25%, 0, 0);\r\n    transform: translate3d(-25%, 0, 0);\r\n}\r\n.payer{\r\n  position:fixed;\r\n  left:700px;\r\n}\r\n.payer1{\r\n  position:fixed;\r\n  left:200px;\r\n}\r\n.modal-content{\r\n  width:300px;\r\n}\r\n.design1{\r\n    align-content:center;\r\n}\r\n.design{\r\n  top:2px;\r\n  vertical-align:middle;\r\n  line-height:22px;\r\n  text-align:center;\r\n}\r\n.myscroll.modal-body {\r\n  min-height:initial;\r\n  max-height:300px;\r\n  overflow-y:scroll;\r\n}\r\n.modal-header{\r\n  background-color:grey;\r\n  color:white;\r\n}\r\n.list{\r\n  font-size:small;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-8 border-right\">\r\n    <div class=\"navbar navbar-expand-sm\">\r\n      <h3>Dashboard</h3>\r\n      <button type=\"button\" class=\"btn btn-success btn-lg\" style=\"position:absolute;left:500px\" data-toggle=\"modal\" data-target=\"#AddBill\">Add Bill</button>\r\n\r\n      <div class=\"modal fade\" id=\"AddBill\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add Bill</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n              <div data-toggle=\"modal\" data-target=\"#BillfriendListModal\">\r\n                <label>\r\n                  Share with:\r\n                </label>\r\n              </div>\r\n              <div>\r\n\r\n                <label style=\"font-weight:normal;background-color:whitesmoke\"\r\n                       *ngFor=\"let member of billShareWith\">\r\n                  {{ member.name }}\r\n                  <span class=\"glyphicon glyphicon-remove\" (click)=\"removeMember(member.id)\"></span>\r\n                </label>\r\n\r\n              </div>\r\n\r\n              <form class=\"form\" #myform=\"ngForm\" novalidate>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addBill.description\" name=\"description\" placeholder=\"Description\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-usd\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addBill.total_amount\" name=\"amount\" placeholder=\"00.00\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addBill.bill_date\" name=\"date\" placeholder=\"MM-DD-YY\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  Paid By\r\n                  <button type=\"button\" class=\"btn\" style=\"background-color:lightgray;border-radius:10px\"\r\n                          data-toggle=\"modal\" data-target=\"#BillPayer\">\r\n                    {{ paidby }}\r\n                  </button>\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" (click)=\"AddBillData()\" class=\"btn btn-success\" [disabled]=\"!myform.valid\">Add</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        \r\n\r\n      </div>\r\n\r\n      <div class=\"modal fade payer\" id=\"BillfriendListModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!--Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Select Friends</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeFriendModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <label class=\"nav-link\" style=\"font-weight:normal\"\r\n                     (click)=\"AddBillMember(friend.userid,friend.user_name)\" *ngFor=\"let friend of friends\">\r\n                {{friend.user_name}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"modal fade payer\" id=\"BillPayer\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Choose Payer</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closePayerModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body myscroll\">\r\n              <div class=\"payerlist\">\r\n\r\n                <label class=\"nav-link\" style=\"font-weight:normal\"\r\n                       (click)=\"addSinglePayer(member.id)\" *ngFor=\"let member of billShareWith\">\r\n                  {{ member.name }}\r\n                </label>\r\n                <label class=\"nav-link\" (click)=\"showpayer()\">\r\n                  Multiple Payers\r\n                </label>\r\n                <div *ngIf=\"showPayer\">\r\n                  <label class=\"nav-link\" style=\"font-weight:normal\" *ngFor=\"let member of billShareWith\">\r\n                    {{ member.name }}\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-usd\"></i></span>\r\n                      <input type=\"text\" #amt class=\"form-control\" placeholder=\"0.00\" />\r\n                    </div>\r\n                    <a (click)=\"addpayer(member.id,amt.value)\">Add</a>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <button type=\"button\" class=\"btn btn-danger btn-lg\" style=\"position:absolute;left:600px\"\r\n              data-toggle=\"modal\" data-target=\"#FriendSettleModal\">\r\n        Settle Up\r\n      </button>\r\n\r\n\r\n      <div class=\"modal fade\" id=\"FriendSettleModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!--Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Settle Up</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeSettleModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div *ngIf=\"showInfo\">\r\n                <div style=\"text-align:center\">\r\n                  <h4>Choose a payment method</h4>\r\n                </div><br />\r\n                <div>\r\n                  <button class=\"btn btn-success\" style=\"width:250px\" (click)=\"showsett()\">Record a cash Payment</button>\r\n                </div><br />\r\n                <div>\r\n                  <button class=\"btn btn-danger\" style=\"width:250px\">Pay via Paypal</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"design1\" *ngIf=\"showSettle\">\r\n                <div>\r\n                  <span class=\"glyphicon glyphicon-user\" style=\"font-size:40px;position:relative;left:40px\"></span>\r\n                  <span class=\"glyphicon glyphicon-arrow-right\" style=\"font-size:30px;position:relative;left:60px\"></span>\r\n                  <span class=\"glyphicon glyphicon-user\" style=\"font-size:40px;position:relative;left:80px\"></span>\r\n                </div>\r\n                <div>\r\n                  <label style=\"position:relative;left:40px\">{{ user.user_name}}</label>\r\n                  <label style=\"position:relative;left:60px\">paid</label>\r\n                  <label role=\"button\" style=\"position:relative;left:80px\"\r\n                         data-toggle=\"modal\" data-target=\"#friendListModal\">{{ Pay_to }}</label>\r\n                </div>\r\n                <br />\r\n                <div class=\"form-group\" style=\"position:relative;left:50px\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-usd\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settleAmt\" style=\"width:100px\" placeholder=\"00.00\" />\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <button class=\"btn check\" style=\"position:relative;border-radius:10px;left:40px\"\r\n                          data-toggle=\"modal\" data-target=\"#groupListModal\" (click)=\"showGroups()\">\r\n                    {{ setAmong }}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn btn-success\" (click)=\"addSettlement()\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"modal fade payer\" id=\"groupListModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!--Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Choose Groups</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeSettleGrpModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <label class=\"nav-link\" style=\"font-weight:normal\" (click)=\"selectNonGroup()\">\r\n                Non Group\r\n              </label>\r\n              <label class=\"nav-link\" style=\"font-weight:normal\" (click)=\"selectGroup(group.groupid,group.group_name)\" *ngFor=\"let group of groups\">\r\n                {{group.group_name}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"modal fade payer\" id=\"friendListModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!--Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Choose Friends</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeSettleFriendModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <label class=\"nav-link\" style=\"font-weight:normal\"\r\n                     (click)=\"selectFriend(friend.userid,friend.user_name)\" *ngFor=\"let friend of friends\">\r\n                {{friend.user_name}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"detail\">\r\n      <div class=\"col-lg-4 design border-right\">\r\n        total balance\r\n        <div *ngIf=\"total>0\" style=\"color:green\">\r\n          {{total}}\r\n        </div>\r\n        <div *ngIf=\"total<0\" style=\"color:red\">\r\n          {{total}}\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 design border-right\">\r\n        you owe\r\n        <div style=\"color:red\">\r\n          {{owe}}\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 design\">\r\n        you are owed\r\n        <div style=\"color:green\">\r\n          {{owed}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <div>\r\n      <div class=\"col-lg-6 border-right\">\r\n        <h4 class=\"border-bottom\" style=\"font-weight:bold;color:gray\">\r\n        YOU OWE</h4>\r\n        <div *ngFor=\"let info of details\">\r\n          <div *ngIf=\"info.amt<0\">\r\n              <h4>\r\n                {{info.member.name}}\r\n              </h4>\r\n              you owe  {{ 0-(info.amt)}}\r\n              <ul *ngFor=\"let detail of owedetails\" style=\"color:red\">\r\n                <li class=\"list\" *ngIf=\"detail.id==info.member.id\">{{detail.detail}}</li>\r\n              </ul>\r\n              <ul *ngFor=\"let detail of oweddetails\" style=\"color:green\">\r\n                <li class=\"list\" *ngIf=\"detail.id==info.member.id\">{{detail.detail}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-lg-6 border-left\" style=\"position:relative;right:1px; height:auto\">\r\n        <h4 class=\"border-bottom\" style=\"font-weight:bold;text-align:right;color:gray\">\r\n          YOU ARE OWED\r\n        </h4>\r\n          <div *ngFor=\"let info of details\">\r\n            <div *ngIf=\"info.amt>0\">\r\n              <h4>\r\n                {{info.member.name}}\r\n              </h4>\r\n              owes you {{ info.amt}}\r\n              <ul *ngFor=\"let detail of owedetails\" style=\"color:red\">\r\n                <li class=\"list\" *ngIf=\"detail.id==info.member.id\">{{detail.detail}}</li>\r\n              </ul>\r\n              <ul *ngFor=\"let detail of oweddetails\" style=\"color:green\">\r\n                <li class=\"list\" *ngIf=\"detail.id==info.member.id\">{{detail.detail}}</li>\r\n              </ul>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      Advertisements\r\n    </div>\r\n  </div>\r\n"

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
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _Services_GroupService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/GroupService */ "./src/app/Services/GroupService.ts");
/* harmony import */ var _Services_BillService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/BillService */ "./src/app/Services/BillService.ts");
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
    function DashboardComponent(route, user_service, bill_service, group_service) {
        this.route = route;
        this.user_service = user_service;
        this.bill_service = bill_service;
        this.group_service = group_service;
        this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.billShareWith = new Array();
        this.billsharewith = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["Detail"]();
        this.showPayer = false;
        this.owe = 0;
        this.owed = 0;
        this.total = 0;
        this.owedetails = new Array();
        this.oweddetails = new Array();
        this.details = new Array();
        this.info = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["GroupBalance"]();
        this.member = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["Detail"]();
        this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["GroupBalanceDetail"]();
        this.addBill = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["BillResponse"]();
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["PayerResponse"]();
        this.payers = new Array();
        this.shareMember = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SharedWithResponse"]();
        this.shareMembers = new Array();
        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SettlementResponse"]();
        this.settlements = new Array();
        this.sett = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["settle"]();
        //setts = new Array<settle>();
        this.setPayers = new Array();
        this.setShares = new Array();
        this.Pay_to = "Select";
        this.setAmong = "Non Group";
        //isSett: GetSettlementResponse[];
        this.showSettle = false;
        this.showInfo = true;
        this.settleUp = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["TransactionResponse"]();
        this.settleAmt = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        //this.id = this.route.snapshot.params['id'];
        this.user_service.getFriends(this.id).subscribe(function (data) {
            _this.friends = data;
            for (var i = 0; i < _this.friends.length; i++) {
                _this.info = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["GroupBalance"]();
                _this.member = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["Detail"]();
                _this.member.id = _this.friends[i].userid;
                _this.member.name = _this.friends[i].user_name;
                _this.info.member = _this.member;
                //this.info.member.name = this.friends[i].user_name;
                _this.info.status = "false";
                _this.info.amt = 0;
                _this.details.push(_this.info);
            }
            _this.bill_service.getUserSettlements(_this.id)
                .subscribe(function (data) {
                _this.allUserSettlement = data;
                // console.log(this.allUserSettlement);
                for (var i = 0; i < _this.allUserSettlement.length; i++) {
                    if (_this.allUserSettlement[i].amount != 0) {
                        if (_this.id == _this.allUserSettlement[i].payer.id) {
                            _this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["GroupBalanceDetail"]();
                            _this.detail.detail = "You owe " + _this.allUserSettlement[i].payee.name + " " + _this.allUserSettlement[i].amount;
                            if (_this.allUserSettlement[i].group == null) {
                                _this.detail.detail = _this.detail.detail + " for " + "'" + "Non Group Expense" + "'";
                            }
                            else {
                                _this.detail.detail = _this.detail.detail + " for " + "'" + _this.allUserSettlement[i].group.name + "'";
                            }
                            _this.detail.id = _this.allUserSettlement[i].payee.id;
                            _this.owedetails.push(_this.detail);
                            var index = _this.details.findIndex(function (c) { return c.member.id == _this.detail.id; });
                            _this.details[index].status = "owe";
                            _this.details[index].amt = _this.details[index].amt - _this.allUserSettlement[i].amount;
                            //this.owe = this.owe - this.allUserSettlement[i].amount;
                        }
                        if (_this.id == _this.allUserSettlement[i].payee.id) {
                            _this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["GroupBalanceDetail"]();
                            _this.detail.detail = _this.allUserSettlement[i].payer.name + " owes you " + _this.allUserSettlement[i].amount;
                            if (_this.allUserSettlement[i].group == null) {
                                _this.detail.detail = _this.detail.detail + " for " + "'" + "Non Group Expense" + "'";
                            }
                            else {
                                _this.detail.detail = _this.detail.detail + " for " + "'" + _this.allUserSettlement[i].group.name + "'";
                            }
                            _this.detail.id = _this.allUserSettlement[i].payer.id;
                            _this.oweddetails.push(_this.detail);
                            var index = _this.details.findIndex(function (c) { return c.member.id == _this.detail.id; });
                            _this.details[index].status = "owes";
                            _this.details[index].amt = _this.details[index].amt + _this.allUserSettlement[i].amount;
                            //this.owed = this.owed + this.allUserSettlement[i].amount;
                        }
                    }
                }
                for (var i = 0; i < _this.details.length; i++) {
                    if (_this.details[i].amt > 0) {
                        _this.owed = _this.owed + _this.details[i].amt;
                    }
                    else if (_this.details[i].amt < 0) {
                        _this.owe = _this.owe + _this.details[i].amt;
                    }
                }
                _this.total = _this.owed - (0 - _this.owe);
                _this.owe = 0 - (_this.owe);
            });
            //console.log(this.details);
            //console.log(this.oweddetails);
            //console.log(this.owedetails);
            //// console.log(this.friends)
        });
        this.user_service.getUserData(this.id)
            .subscribe(function (data) {
            _this.user = data,
                _this.billsharewith = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["Detail"]();
            _this.billsharewith.id = _this.user.userid;
            _this.billsharewith.name = _this.user.user_name;
            _this.billShareWith.push(_this.billsharewith);
        });
        this.paidby = "Select Payer";
    };
    DashboardComponent.prototype.addpayer = function (id, amt) {
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["PayerResponse"]();
        this.payer.paid_byId = id;
        this.payer.amount_paid = amt;
        this.payers.push(this.payer);
    };
    DashboardComponent.prototype.addSinglePayer = function (id) {
        var _this = this;
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["PayerResponse"]();
        this.payers = new Array();
        this.payer.paid_byId = id;
        this.payer.amount_paid = this.addBill.total_amount;
        this.user_service.getUserData(this.payer.paid_byId).subscribe(function (data) { return _this.paidby = data.user_name; });
    };
    DashboardComponent.prototype.AddBillMember = function (id, name) {
        this.billsharewith = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["Detail"]();
        this.billsharewith.id = id;
        this.billsharewith.name = name;
        this.billShareWith.push(this.billsharewith);
    };
    DashboardComponent.prototype.removeMember = function (id) {
        var index = this.billShareWith.findIndex(function (c) { return c.id === id; });
        console.log(index);
        if (index == 0) {
            alert("user cannot be removed");
        }
        else
            this.billShareWith.splice(index, 1);
    };
    DashboardComponent.prototype.showsett = function () {
        if (this.showInfo == true) {
            this.showInfo = false;
            this.showSettle = true;
        }
    };
    DashboardComponent.prototype.addSettlement = function () {
        this.settleUp.payerId = this.id;
        this.settleUp.payeeId = this.Pay_to_Id;
        this.settleUp.paid_amount = this.settleAmt;
        this.settleUp.groupId = this.Pay_in;
        this.my_date = new Date().toLocaleString();
        this.settleUp.paid_on = this.my_date;
        this.bill_service.settleUp(this.settleUp)
            .subscribe(function (data) {
            if (data.status == true) {
                alert("Settlement successful");
            }
            else
                ("Settlement Failed");
        }, function (error) { return alert("failed"); });
        this.closeSettleModal.nativeElement.click();
        this.closeSettleGrpModal.nativeElement.click();
        this.closeSettleFriendModal.nativeElement.click();
        this.settleUp = null;
    };
    DashboardComponent.prototype.nonGroup = function () {
        var _this = this;
        this.bill_service.getFriendSettlements(this.id, this.Pay_to_Id)
            .subscribe(function (data) {
            _this.friendSettlement = data;
            console.log(_this.friendSettlement);
            if (_this.friendSettlement != null) {
                var isSettlement = _this.friendSettlement.find(function (c) { return c.group == null; });
                console.log(isSettlement);
                if (isSettlement != null) {
                    if (isSettlement.payer.id == _this.id)
                        _this.settleAmt = isSettlement.amount;
                    else {
                        _this.settleAmt = 0;
                    }
                }
                else {
                    _this.settleAmt = 0;
                }
            }
            else {
                _this.settleAmt = 0;
            }
        });
    };
    DashboardComponent.prototype.GroupSet = function (id) {
        var _this = this;
        this.bill_service.getFriendSettlements(this.id, this.Pay_to_Id)
            .subscribe(function (data) {
            _this.friendSettlement = data;
            console.log(_this.friendSettlement);
            if (_this.friendSettlement != null) {
                var isSettlement = _this.friendSettlement.find(function (c) { return c.group != null && c.group.id == id; });
                //this.isSett = this.friendSettlement.includes(c => c.group != null);
                console.log(isSettlement);
                //var isSettlement = this.isSett.find(c => c.group.id == id);
                if (isSettlement != null) {
                    if (isSettlement.payer.id == _this.id)
                        _this.settleAmt = isSettlement.amount;
                    else {
                        _this.settleAmt = 0;
                    }
                }
                else {
                    _this.settleAmt = 0;
                }
            }
            else {
                _this.settleAmt = 0;
            }
        });
    };
    DashboardComponent.prototype.selectGroup = function (id, name) {
        console.log(id);
        this.setAmong = name;
        this.Pay_in = id;
        this.GroupSet(id);
        //console.log(this.Pay_to_Id);
    };
    DashboardComponent.prototype.showGroups = function () {
        var _this = this;
        this.group_service.getFriendGroups(this.id, this.Pay_to_Id)
            .subscribe(function (data) {
            //console.log(data)
            _this.groups = data;
        });
    };
    DashboardComponent.prototype.selectFriend = function (id, name) {
        this.Pay_to = name;
        this.Pay_to_Id = id;
        this.nonGroup();
    };
    DashboardComponent.prototype.selectNonGroup = function () {
        this.setAmong = "Non Group";
        this.nonGroup();
    };
    DashboardComponent.prototype.showpayer = function () {
        this.paidby = "multiple";
        if (this.showPayer == false)
            this.showPayer = true;
        else
            this.showPayer = false;
    };
    DashboardComponent.prototype.AddBillData = function () {
        var _this = this;
        if (this.billShareWith.length == 1) {
            alert("Please select member to share the bill");
        }
        else if (this.payer.paid_byId == null) {
            alert("Please select payer");
        }
        else {
            this.my_date = new Date().toLocaleString();
            this.addBill.bill_created_at = this.my_date;
            this.addBill.bill_created_byId = this.id;
            this.addBill.bill_updated_at = this.my_date;
            this.addBill.bill_updated_byId = this.id;
            if (this.payers.length == 0) {
                this.payers.push(this.payer);
            }
            var div = Number.parseFloat((this.addBill.total_amount / this.billShareWith.length).toFixed(2));
            //div = Math.round(div);
            for (var i = 0; i < this.billShareWith.length; i++) {
                this.shareMember = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SharedWithResponse"]();
                this.shareMember.owes_amount = div;
                this.shareMember.shared_withId = this.billShareWith[i].id;
                this.shareMembers.push(this.shareMember);
            }
            if (this.payers.length == 1) {
                var payee = this.payer.paid_byId;
                for (var i = 0; i < this.shareMembers.length; i++) {
                    if (payee != this.shareMembers[i].shared_withId) {
                        var payer = this.shareMembers[i].shared_withId;
                        var amt = this.shareMembers[i].owes_amount;
                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SettlementResponse"]();
                        this.settlement.payeeId = payee;
                        this.settlement.payerId = payer;
                        this.settlement.paid_amount = amt;
                        if (this.settlement.paid_amount != 0)
                            this.settlements.push(this.settlement);
                    }
                }
            }
            else {
                for (var i = 0; i < this.shareMembers.length; i++) {
                    this.sett = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["settle"]();
                    this.sett.id = this.shareMembers[i].shared_withId;
                    var amt = 0;
                    for (var j = 0; j < this.payers.length; j++) {
                        if (this.shareMembers[i].shared_withId === this.payers[j].paid_byId) {
                            if (this.payers[j].amount_paid == div) {
                                amt = 1;
                            }
                            else if (this.payers[j].amount_paid > div) {
                                amt = this.payers[j].amount_paid - div;
                                this.sett.amt = amt;
                                this.setPayers.push(this.sett);
                            }
                            else {
                                amt = this.shareMembers[i].owes_amount - this.payers[j].amount_paid;
                                this.sett.amt = amt;
                                this.setShares.push(this.sett);
                            }
                        }
                    }
                    if (amt == 0) {
                        this.sett.amt = this.shareMembers[i].owes_amount;
                        this.setShares.push(this.sett);
                    }
                }
                //console.log(this.setPayers);
                //console.log(this.setShares);
                if (this.setPayers.length > 1) {
                    if (this.setShares.length == 1) {
                        for (var i = 0; i < this.setPayers.length; i++) {
                            this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SettlementResponse"]();
                            this.settlement.payerId = this.setShares[0].id;
                            this.settlement.payeeId = this.setPayers[i].id;
                            this.settlement.paid_amount = this.setPayers[i].amt;
                            if (this.settlement.paid_amount != 0)
                                this.settlements.push(this.settlement);
                        }
                    }
                    else {
                        for (var i = 0; i < this.setShares.length; i++) {
                            var mem = this.setPayers.find(function (data) { return data.amt === _this.setShares[i].amt; });
                            var index = this.setPayers.findIndex(function (data) { return data.amt === _this.setShares[i].amt; });
                            //console.log(index);
                            if (mem != null) {
                                this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SettlementResponse"]();
                                payer = this.setShares[i].id;
                                payee = mem.id;
                                amt = mem.amt;
                                this.setPayers[index].amt = this.setPayers[index].amt - amt;
                                this.settlement.payerId = payer;
                                this.settlement.payeeId = payee;
                                this.settlement.paid_amount = amt;
                                if (this.settlement.paid_amount != 0)
                                    this.settlements.push(this.settlement);
                            }
                            else {
                                for (var j = 0; j < this.setPayers.length; j++) {
                                    if (this.setPayers[j].amt > this.setShares[i].amt) {
                                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SettlementResponse"]();
                                        this.settlement.payerId = this.setShares[i].id;
                                        this.settlement.payeeId = this.setPayers[j].id;
                                        this.settlement.paid_amount = this.setShares[i].amt;
                                        this.setShares[i].amt = this.setShares[i].amt - this.settlement.paid_amount;
                                        this.setPayers[j].amt = this.setPayers[j].amt - this.settlement.paid_amount;
                                        if (this.settlement.paid_amount != 0)
                                            this.settlements.push(this.settlement);
                                    }
                                    else if (this.setPayers[j].amt > 0) {
                                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SettlementResponse"]();
                                        this.settlement.payerId = this.setShares[i].id;
                                        this.settlement.payeeId = this.setPayers[j].id;
                                        this.settlement.paid_amount = this.setPayers[j].amt;
                                        this.setShares[i].amt = this.setShares[i].amt - this.settlement.paid_amount;
                                        this.setPayers[j].amt = this.setPayers[j].amt - this.settlement.paid_amount;
                                        if (this.settlement.paid_amount != 0)
                                            this.settlements.push(this.settlement);
                                    }
                                }
                            }
                        }
                    }
                }
                else if (this.setPayers.length == 1) {
                    for (var i = 0; i < this.setShares.length; i++) {
                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_1__["SettlementResponse"]();
                        this.settlement.payerId = this.setShares[i].id;
                        this.settlement.payeeId = this.setPayers[0].id;
                        this.settlement.paid_amount = this.setShares[i].amt;
                        if (this.settlement.paid_amount != 0)
                            this.settlements.push(this.settlement);
                    }
                }
                //console.log(this.setPayers);
                //console.log(this.setShares);
            }
            this.addBill.payers = this.payers;
            this.addBill.sharedwiths = this.shareMembers;
            this.addBill.settlements = this.settlements;
            console.log(this.addBill);
            this.bill_service.addNewBill(this.addBill)
                .subscribe(function (data) {
                if (data.status == true) {
                    alert("Bill Added Successfully");
                }
                else
                    ("Failed to add the bill");
            });
            this.closeModal.nativeElement.click();
            this.closePayerModal.nativeElement.click();
            this.closeFriendModal.nativeElement.click();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closePayerModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "closePayerModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeFriendModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "closeFriendModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeSettleModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "closeSettleModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeSettleGrpModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "closeSettleGrpModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeSettleFriendModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "closeSettleFriendModal", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _Services_BillService__WEBPACK_IMPORTED_MODULE_5__["BillService"], _Services_GroupService__WEBPACK_IMPORTED_MODULE_4__["GroupService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/expense/expense.component.css":
/*!***********************************************!*\
  !*** ./src/app/expense/expense.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.navbar{\r\n  background-color:lightgray;\r\n  color:grey;\r\n  height:75px;\r\n}\r\n.design1{\r\n  vertical-align:middle;\r\n  text-align:center;\r\n}\r\ndiv.billNav{\r\n  background-color:whitesmoke;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/expense/expense.component.html":
/*!************************************************!*\
  !*** ./src/app/expense/expense.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-8 border-right\">\r\n    <div class=\"navbar navbar-expand-sm\">\r\n      <h3>All Expense</h3>\r\n    </div>\r\n    <div class=\"billNav\">\r\n      <!--<div class=\"panel-group\">-->\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <!--<div class=\"date\"> \"Aug\"\r\n        <div class=\"number\">31</div>\r\n        </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-11\">\r\n              <label class=\"panel-title\" style=\"color:gray\">\r\n                <a data-toggle=\"collapse\" href=\"#set\">Settlements</a>\r\n              </label>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div id=\"set\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\" *ngIf=\"transactions && transactions.length\">\r\n\r\n            <div class=\"billNav\" *ngFor=\"let settle of transactions\">\r\n              <!--<div class=\"panel-group\">-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <!--<div class=\"date\"> \"Aug\"\r\n          <div class=\"number\">31</div>\r\n          </div>-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-1 design1\">\r\n                      {{ settle.paid_on | date:'MMM'}}\r\n                      <div class=\"design\">\r\n                        {{ settle.paid_on | date:'dd'}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-11\">\r\n                      <label style=\"font-weight:normal\" class=\"panel-title\" *ngIf=\"settle.groupId==null\">\r\n                        {{settle.payerId.name }} paid {{settle.payeeId.name}} {{settle.paid_amount | currency:'INR'}}\r\n                      </label>\r\n                      <label class=\"panel-title\" style=\"font-weight:normal\" *ngIf=\"settle.groupId!=null\">\r\n                        {{settle.payerId.name }} paid {{settle.payeeId.name}} {{settle.paid_amount | currency:'INR'}} in \"{{ settle.groupId.name}}\"\r\n                      </label>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <!--<div id=\"\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body border-bottom\">\r\n            <br />\r\n           fjklf\r\n          </div>\r\n\r\n        </div>-->\r\n                <!--</div>-->\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"panel-body\" *ngIf=\"!transactions || !transactions.length\">\r\n            No settlement exist\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"billNav\" *ngFor=\"let bill of bills\">\r\n      <!--<div class=\"panel-group\">-->\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <!--<div class=\"date\"> \"Aug\"\r\n        <div class=\"number\">31</div>\r\n        </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-1 design\">\r\n              {{ bill.bill_created_at | date:'MMM'}}\r\n              <div class=\"design\">\r\n                {{ bill.bill_created_at | date:'dd'}}\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n              <label class=\"panel-title\" style=\"color:grey\">\r\n                <a data-toggle=\"collapse\" href=\"#{{bill.billid}}\">{{bill.description}}</a>\r\n              </label>\r\n            </div>\r\n            <!--<div class=\"col-lg-4\">\r\n              <div class=\"col-lg-6 design\">\r\n                Paid by\r\n                <div class=\"design\">\r\n                  0000\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 design\">\r\n                lent\r\n                <div class=\"design\">\r\n                  0000\r\n                </div>\r\n              </div>\r\n            </div>-->\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div id=\"{{bill.billid}}\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body border-bottom\">\r\n            {{bill.description}}\r\n            <br />\r\n            <h4>{{bill.total_amount | currency:'INR'}}</h4>\r\n            Added by {{ bill.bill_created_by.name}}\r\n            on {{bill.bill_created_at | date:'MMMM'}} {{bill.bill_created_at | date:'dd'}},{{bill.bill_created_at | date:'yyyy'}}\r\n            <div *ngIf=\"bill.group!=null\">\r\n              Added in : {{bill.group.name}}\r\n            </div>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div *ngFor=\"let member of bill.sharedwiths\">\r\n              {{member.name}}\r\n              <label style=\"font-weight:normal\" *ngFor=\"let memberP of bill.payers\">\r\n                <label style=\"font-weight:normal\" *ngIf=\"member.id==memberP.id\">\r\n                  paid {{ memberP.amount | currency:'INR'}} and &nbsp;\r\n                </label>\r\n              </label>\r\n              <label style=\"font-weight:normal\">\r\n                owes {{member.amount | currency:'INR'}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <br />\r\n    <h4 style=\"color:gray\">YOUR TOTAL BALANCE</h4>\r\n    <br />\r\n    <div *ngIf=\"total<0\" style=\"color:red\">\r\n      <div style=\"font-size:large\">You owe</div>\r\n      <div style=\"font-size:x-large\">{{0-(total) | currency:'INR'}}</div>\r\n    </div>\r\n    <div *ngIf=\"total>0\" style=\"color:green\">\r\n      <div style=\"font-size:large\">You are owed</div>\r\n      <div style=\"font-size:x-large\">{{total | currency:'INR'}}</div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/expense/expense.component.ts":
/*!**********************************************!*\
  !*** ./src/app/expense/expense.component.ts ***!
  \**********************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _Services_BillService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/BillService */ "./src/app/Services/BillService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent(route, user_service, bill_service) {
        this.route = route;
        this.user_service = user_service;
        this.bill_service = bill_service;
        this.total = 0;
    }
    ExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.userid = params['id'];
        });
        this.bill_service.getUserExpenseTransaction(this.userid)
            .subscribe(function (data) { return _this.transactions = data; });
        this.bill_service.getUserBills(this.userid)
            .subscribe(function (data) { return _this.bills = data; });
        this.bill_service.getUserSettlements(this.userid)
            .subscribe(function (data) {
            _this.allUserSettlement = data;
            for (var i = 0; i < _this.allUserSettlement.length; i++) {
                if (_this.allUserSettlement[i].payee.id == _this.userid) {
                    _this.total = _this.total + _this.allUserSettlement[i].amount;
                }
                else if (_this.allUserSettlement[i].payer.id == _this.userid) {
                    _this.total = _this.total - _this.allUserSettlement[i].amount;
                }
            }
            console.log(_this.total);
        });
    };
    ExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./expense.component.html */ "./src/app/expense/expense.component.html"),
            styles: [__webpack_require__(/*! ./expense.component.css */ "./src/app/expense/expense.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _Services_BillService__WEBPACK_IMPORTED_MODULE_3__["BillService"]])
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ }),

/***/ "./src/app/friend-board/friend-board.component.css":
/*!*********************************************************!*\
  !*** ./src/app/friend-board/friend-board.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full{\r\n  height:500px;\r\n}\r\ndiv.navbar{\r\n  background-color:lightgray;\r\n  color:grey;\r\n  height:75px;\r\n}\r\ndiv.navbar1{\r\n  background-color:lightgray;\r\n  color:white;\r\n  height:50px;\r\n  position:relative;\r\n}\r\n.design{\r\n  align-content:center;\r\n}\r\n.design1{\r\n  vertical-align:middle;\r\n  text-align:center;\r\n}\r\nlabel.nav-link{\r\n  border-color:black;\r\n  background-color:whitesmoke;\r\n  color:grey\r\n}\r\ndiv.billNav{\r\n  background-color:whitesmoke;\r\n}\r\nlabel.billNav1.nav-link:hover{\r\n  background-color:lightgray;\r\n}\r\nlabel.nav-link:hover{\r\n  background-color:lightgray;\r\n  color:black;\r\n}\r\n.myscroll.modal-body {\r\n  min-height:initial;\r\n  max-height:300px;\r\n  overflow-y:scroll;\r\n}\r\n.modal{\r\n  position:fixed;\r\n  right:100px;\r\n}\r\n.payer.modal.fade:not(.in) .modal-dialog{\r\n    -webkit-transform: translate3d(-25%, 0, 0);\r\n    transform: translate3d(-25%, 0, 0);\r\n}\r\n.payer{\r\n  left:700px;\r\n}\r\n.modal-content{\r\n  width:300px;\r\n}\r\n.modal-header{\r\n  background-color:grey;\r\n  color:white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/friend-board/friend-board.component.html":
/*!**********************************************************!*\
  !*** ./src/app/friend-board/friend-board.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row full\">\r\n  <div class=\"col-lg-8 border-right\">\r\n    <div class=\"navbar navbar-expand-sm\">\r\n      <h3>{{ friend.user_name}}</h3>\r\n      <button type=\"button\" class=\"btn btn-success btn-lg\" style=\"position:absolute;left:600px\" data-toggle=\"modal\" data-target=\"#FriendBillModal\">Add Bill</button>\r\n\r\n      <div class=\"modal fade\" id=\"FriendBillModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add Bill with {{ friend.user_name }}</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form class=\"form\" #myform=\"ngForm\" novalidate>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"addBill.description\" placeholder=\"Description\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon\" style=\"font-size:large\">&#8377;</i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"addBill.total_amount\" placeholder=\"00.00\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"addBill.bill_date\" placeholder=\"MM-DDD-YY\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  Paid By\r\n                  <a role=\"button\" style=\"background-color:lightgray;border-radius:5px;font-weight:bold;min-height:10px\" data-toggle=\"modal\" data-target=\"#FriendBillPayer\">\r\n                    {{ paidby }}\r\n                  </a>\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" (click)=\"AddBillData()\" class=\"btn btn-success\" [disabled]=\"!myform.valid\">Add</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal fade payer\" id=\"FriendBillPayer\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Choose Payer</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closePayerModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body myscroll\">\r\n              <div class=\"payerlist\">\r\n                <label class=\"nav-link\" style=\"font-weight:normal\" (click)=\"addSinglePayer(friend.userid)\">\r\n                  {{ friend.user_name }}\r\n                </label>\r\n                <label class=\"nav-link\" style=\"font-weight:normal\" (click)=\"addSinglePayer(user.userid)\">\r\n                  {{ user.user_name }}\r\n                </label>\r\n                <label class=\"nav-link\" (click)=\"showpayer()\">\r\n                  Multiple Payers\r\n                </label>\r\n                <div *ngIf=\"showPayer\">\r\n                  <label class=\"nav-link\" style=\"font-weight:normal\">\r\n                    {{ friend.user_name }}\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"glyphicon\" style=\"font-size:large\">&#8377;</i></span>\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"friendPay\" placeholder=\"0.00\" />\r\n                    </div>\r\n                  </label>\r\n                  <label class=\"nav-link\" style=\"font-weight:normal\">\r\n                    {{ user.user_name }}\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"glyphicon\" style=\"font-size:large\">&#8377;</i></span>\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userPay\" placeholder=\"0.00\" />\r\n                    </div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"billNav\">\r\n      <!--<div class=\"panel-group\">-->\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <!--<div class=\"date\"> \"Aug\"\r\n        <div class=\"number\">31</div>\r\n        </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-11\">\r\n              <label class=\"panel-title\">\r\n                <a data-toggle=\"collapse\" href=\"#set\"  style=\"color:grey\">Settlements</a>\r\n              </label>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div id=\"set\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\" *ngIf=\"transactions && transactions.length\">\r\n\r\n            <div class=\"billNav\" *ngFor=\"let settle of transactions\">\r\n              <!--<div class=\"panel-group\">-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <!--<div class=\"date\"> \"Aug\"\r\n          <div class=\"number\">31</div>\r\n          </div>-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-1 design1\">\r\n                      {{ settle.paid_on | date:'MMM'}}\r\n                      <div class=\"design\">\r\n                        {{ settle.paid_on | date:'dd'}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-11\">\r\n                      <label class=\"panel-title\" style=\"font-weight:normal\">\r\n                        {{settle.payerId.name }} paid {{settle.payeeId.name}}  {{settle.paid_amount | currency:'INR'}}\r\n                      </label>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <!--<div id=\"\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body border-bottom\">\r\n            <br />\r\n           fjklf\r\n          </div>\r\n\r\n        </div>-->\r\n                <!--</div>-->\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"panel-body\" *ngIf=\"!transactions || !transactions.length\">\r\n            No settlement exist\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"billNav\" *ngFor=\"let bill of bills\">\r\n              <!--<div class=\"panel-group\">-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <!--<div class=\"date\"> \"Aug\"\r\n                <div class=\"number\">31</div>\r\n                </div>-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-1 design\">\r\n                      {{ bill.bill_created_at | date:'MMM'}}\r\n                      <div class=\"design\">\r\n                        {{ bill.bill_created_at | date:'dd'}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-7\">\r\n                      <label class=\"panel-title\" style=\"color:grey\">\r\n                        <a data-toggle=\"collapse\" href=\"#{{bill.billid}}\">{{bill.description}}</a>\r\n                      </label>\r\n                    </div>\r\n                    <!--<div class=\"col-lg-4\">\r\n                      <div class=\"col-lg-6 design\">\r\n                        Paid by\r\n                        <div class=\"design\">\r\n                          0000\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-lg-6 design\">\r\n                        lent\r\n                        <div class=\"design\">\r\n                          0000\r\n                        </div>\r\n                      </div>\r\n                    </div>-->\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <div id=\"{{bill.billid}}\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body border-bottom\">\r\n                    {{bill.description}}\r\n                    <br />\r\n                    <h4>{{bill.total_amount | currency:'INR'}}</h4>\r\n                    Added by {{ bill.bill_created_by.name}}\r\n                    on {{bill.bill_created_at | date:'MMMM'}} {{bill.bill_created_at | date:'dd'}},\r\n                    {{bill.bill_created_at | date:'yyyy'}}\r\n                    <div *ngIf=\"bill.group!=null\">\r\n                      Added in : {{bill.group.name}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"panel-body\">\r\n                    <div *ngFor=\"let member of bill.sharedwiths\">\r\n                      {{member.name}}\r\n                      <label style=\"font-weight:normal\" *ngFor=\"let memberP of bill.payers\">\r\n                        <label style=\"font-weight:normal\" *ngIf=\"member.id==memberP.id\">\r\n                          paid {{ memberP.amount | currency:'INR'}} and &nbsp;\r\n                        </label>\r\n                      </label>\r\n                      <label style=\"font-weight:normal\">\r\n                        owes {{member.amount | currency:'INR'}}\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--</div>-->\r\n              </div>\r\n            </div>\r\n\r\n      \r\n\r\n\r\n\r\n  </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <button type=\"button\" class=\"btn\" style=\"background-color:powderblue\" (click)=\"delete()\">\r\n        <span class=\"glyphicon glyphicon-trash\"></span> Delete Friend\r\n      </button>\r\n      <!--<button type=\"button\" class=\"btn\" style=\"background-color:powderblue;position:relative;left:10px\">\r\n        <span class=\"glyphicon glyphicon-list-alt\"></span>\r\n      </button>-->\r\n      <br /><br />\r\n      <div>\r\n        <h4>\r\n          Balance\r\n        </h4>\r\n        <div>\r\n          <div *ngIf=\"balance>0\" style=\"color:green;font-weight:normal\">\r\n            {{friend.user_name}} owes you\r\n            <div *ngIf=\"showBalance!=null && showBalance!=0\" style=\"font-size:x-large\">{{ showBalance | currency:'INR'}}</div>\r\n          </div>\r\n          <div *ngIf=\"balance<0\" style=\"color:red;font-weight:normal\">\r\n            you owe {{ friend.user_name }}\r\n            <div *ngIf=\"showBalance!=null && showBalance!=0\" style=\"font-size:x-large\">{{ showBalance | currency:'INR'}}</div>\r\n          </div>\r\n\r\n          <h4 *ngIf=\"showBalance==0\">You are settled up</h4>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <h4>\r\n          Details\r\n        </h4>\r\n        <ul *ngFor=\"let detail of details\">\r\n          <li *ngIf=\"detail.id==0\" style=\"color:red\">\r\n            {{detail.detail}}\r\n          </li>\r\n          <li *ngIf=\"detail.id==1\" style=\"color:green\">\r\n            {{detail.detail}}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/friend-board/friend-board.component.ts":
/*!********************************************************!*\
  !*** ./src/app/friend-board/friend-board.component.ts ***!
  \********************************************************/
/*! exports provided: FriendBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendBoardComponent", function() { return FriendBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_FriendService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/FriendService */ "./src/app/Services/FriendService.ts");
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _Services_BillService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/BillService */ "./src/app/Services/BillService.ts");
/* harmony import */ var _Services_GroupService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/GroupService */ "./src/app/Services/GroupService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FriendBoardComponent = /** @class */ (function () {
    function FriendBoardComponent(route, user_service, group_service, bill_service, router, friend_service) {
        this.route = route;
        this.user_service = user_service;
        this.group_service = group_service;
        this.bill_service = bill_service;
        this.router = router;
        this.friend_service = friend_service;
        this.showPayer = false;
        this.addBill = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["BillResponse"]();
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
        this.payers = new Array();
        this.shareMember = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SharedWithResponse"]();
        this.shareMembers = new Array();
        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
        this.settlements = new Array();
        this.balance = 0;
        this.details = new Array();
        this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalanceDetail"]();
        this.friend = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["FriendResponse"]();
        this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    FriendBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paidby = "Select Payer";
        this.id = this.route.snapshot.params['frdid'];
        this.route.parent.params.subscribe(function (params) {
            _this.userid = params['id'];
        });
        this.friend_service.getFriendData(this.id).subscribe(function (data) {
            //  console.log(data),
            _this.friend = data;
        });
        this.user_service.getUserData(this.userid)
            .subscribe(function (data) { return _this.user = data; });
        this.bill_service.getFriendBills(this.userid, this.id).subscribe(function (data) {
            _this.bills = data,
                //this.bills = this.bills.sort((a) => (a as any));
                console.log(_this.bills);
        });
        this.bill_service.getFriendTransactions(this.userid, this.id)
            .subscribe(function (data) {
            _this.transactions = data,
                console.log(_this.transactions);
        });
        this.bill_service.getFriendSettlements(this.userid, this.id)
            .subscribe(function (data) {
            _this.frdSettlement = data,
                console.log(_this.frdSettlement);
            for (var i = 0; i < _this.frdSettlement.length; i++) {
                if (_this.userid == _this.frdSettlement[i].payer.id) {
                    _this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalanceDetail"]();
                    _this.detail.detail = "You owe " + _this.frdSettlement[i].payee.name + " ₹" + _this.frdSettlement[i].amount;
                    if (_this.frdSettlement[i].group == null) {
                        _this.detail.detail = _this.detail.detail + " for " + "'" + "Non Group Expense" + "'";
                    }
                    else {
                        _this.detail.detail = _this.detail.detail + " for " + "'" + _this.frdSettlement[i].group.name + "'";
                    }
                    _this.detail.id = 0;
                    _this.details.push(_this.detail);
                    _this.balance = _this.balance - _this.frdSettlement[i].amount;
                }
                if (_this.userid == _this.frdSettlement[i].payee.id) {
                    _this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalanceDetail"]();
                    _this.detail.detail = _this.frdSettlement[i].payer.name + " owes you ₹" + _this.frdSettlement[i].amount;
                    if (_this.frdSettlement[i].group == null) {
                        _this.detail.detail = _this.detail.detail + " for " + "'" + "Non Group Expense" + "'";
                    }
                    else {
                        _this.detail.detail = _this.detail.detail + " for " + "'" + _this.frdSettlement[i].group.name + "'";
                    }
                    _this.detail.id = 1;
                    _this.details.push(_this.detail);
                    _this.balance = _this.balance + _this.frdSettlement[i].amount;
                }
            }
            if (_this.balance < 0)
                _this.showBalance = 0 - _this.balance;
            else
                _this.showBalance = _this.balance;
            console.log(_this.balance);
            console.log(_this.details);
        });
    };
    FriendBoardComponent.prototype.delete = function () {
        var _this = this;
        if (confirm("Are you sure you want to remove this friend")) {
            this.group_service.getFriendGroups(this.userid, this.id)
                .subscribe(function (data) {
                if (data.length > 0) {
                    alert("you this friend in group. so you cannot remove friend");
                }
                else {
                    _this.friend_service.removeFriend(_this.userid, _this.id)
                        .subscribe(function (data) {
                        console.log(data),
                            alert("Delete Successfull"),
                            _this.router.navigate(['/Board', _this.userid]);
                    }, function (error) { return alert("cannot delete friend"); });
                }
            });
        }
    };
    FriendBoardComponent.prototype.showpayer = function () {
        this.paidby = "multiple";
        if (this.showPayer == false)
            this.showPayer = true;
        else
            this.showPayer = false;
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
    };
    FriendBoardComponent.prototype.addSinglePayer = function (id) {
        var _this = this;
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
        this.payers = new Array();
        this.payer.paid_byId = id;
        this.payer.amount_paid = this.addBill.total_amount;
        this.user_service.getUserData(this.payer.paid_byId).subscribe(function (data) { return _this.paidby = data.user_name; });
    };
    FriendBoardComponent.prototype.AddBillData = function () {
        if (this.payer.paid_byId == null) {
            alert("Please select payer");
        }
        else {
            this.my_date = new Date().toLocaleString();
            this.addBill.bill_created_at = this.my_date;
            this.addBill.bill_created_byId = this.userid;
            this.addBill.bill_updated_at = this.my_date;
            this.addBill.bill_updated_byId = this.userid;
            console.log(this.friendPay);
            console.log(this.userPay);
            if (this.friendPay != null) {
                this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
                this.payer.paid_byId = this.id;
                this.payer.amount_paid = this.friendPay;
                this.payers.push(this.payer);
            }
            if (this.userPay != null) {
                this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
                this.payer.paid_byId = this.userid;
                this.payer.amount_paid = this.userPay;
                this.payers.push(this.payer);
            }
            if (this.payers.length == 0) {
                this.payers.push(this.payer);
            }
            var div = Number.parseFloat((this.addBill.total_amount / 2).toFixed(2));
            // div = Math.round(div);
            this.shareMember = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SharedWithResponse"]();
            this.shareMember.owes_amount = div;
            this.shareMember.shared_withId = this.id;
            this.shareMembers.push(this.shareMember);
            this.shareMember = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SharedWithResponse"]();
            this.shareMember.owes_amount = div;
            this.shareMember.shared_withId = this.userid;
            this.shareMembers.push(this.shareMember);
            if (this.payers.length == 1) {
                var payee = this.payer.paid_byId;
                for (var i = 0; i < this.shareMembers.length; i++) {
                    if (payee != this.shareMembers[i].shared_withId) {
                        var payer = this.shareMembers[i].shared_withId;
                        var amt = this.shareMembers[i].owes_amount;
                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                        this.settlement.payeeId = payee;
                        this.settlement.payerId = payer;
                        this.settlement.paid_amount = amt;
                        this.settlement.groupId = this.id;
                        if (this.settlement.paid_amount != 0)
                            this.settlements.push(this.settlement);
                    }
                }
            }
            else {
                if (this.payers[0].amount_paid > div) {
                    this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                    this.settlement.payeeId = this.payers[0].paid_byId;
                    this.settlement.payerId = this.payers[1].paid_byId;
                    this.settlement.paid_amount = this.payers[0].amount_paid - div;
                    if (this.settlement.paid_amount != 0)
                        this.settlements.push(this.settlement);
                }
                else {
                    this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                    this.settlement.payeeId = this.payers[1].paid_byId;
                    this.settlement.payerId = this.payers[0].paid_byId;
                    this.settlement.paid_amount = this.payers[1].amount_paid - div;
                    if (this.settlement.paid_amount != 0)
                        this.settlements.push(this.settlement);
                }
            }
            this.addBill.payers = this.payers;
            this.addBill.sharedwiths = this.shareMembers;
            this.addBill.settlements = this.settlements;
            console.log(this.addBill);
            this.bill_service.addNewBill(this.addBill)
                .subscribe(function (data) {
                if (data.status == true) {
                    alert("Bill Added Successfully");
                }
                else
                    ("Failed to add the bill");
            });
            this.closeModal.nativeElement.click();
            this.closePayerModal.nativeElement.click();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FriendBoardComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closePayerModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FriendBoardComponent.prototype, "closePayerModal", void 0);
    FriendBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-board',
            template: __webpack_require__(/*! ./friend-board.component.html */ "./src/app/friend-board/friend-board.component.html"),
            styles: [__webpack_require__(/*! ./friend-board.component.css */ "./src/app/friend-board/friend-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"], _Services_GroupService__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
            _Services_BillService__WEBPACK_IMPORTED_MODULE_5__["BillService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_FriendService__WEBPACK_IMPORTED_MODULE_2__["FriendService"]])
    ], FriendBoardComponent);
    return FriendBoardComponent;
}());



/***/ }),

/***/ "./src/app/group-board/group-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/group-board/group-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row.full{\r\n  height:500px;\r\n}\r\n/*.billHead{\r\n  position:relative;\r\n  left:16px;\r\n  width:700px;\r\n}*/\r\ndiv.navbar{\r\n  background-color:lightgray;\r\n  color:grey;\r\n  height:75px;\r\n}\r\ndiv.navbar1{\r\n  background-color:lightgray;\r\n  color:white;\r\n  height:50px;\r\n  position:relative;\r\n}\r\ndiv.billNav{\r\n  background-color:whitesmoke;\r\n}\r\n/*label.billNav1.nav-link:hover{\r\n  background-color:lightgray;\r\n}*/\r\n.design{\r\n  vertical-align:middle;\r\n  text-align:center;\r\n}\r\n.form-control{\r\n  width:200px;\r\n}\r\n.myscroll {\r\n  min-height:initial;\r\n  max-height:300px;\r\n  overflow-y:scroll;\r\n}\r\nlabel.nav-link{\r\n  border-color:black;\r\n  background-color:whitesmoke;\r\n  color:grey\r\n}\r\nlabel.nav-link:hover{\r\n  background-color:lightgray;\r\n  color:black;\r\n}\r\nlabel.nav-link:active{\r\n  background-color:gray;\r\n  color:black;\r\n}\r\n.modal{\r\n  position:fixed;\r\n  right:100px;\r\n}\r\n.payer.modal.fade:not(.in) .modal-dialog{\r\n    -webkit-transform: translate3d(-25%, 0, 0);\r\n    transform: translate3d(-25%, 0, 0);\r\n}\r\n.payer{\r\n  left:700px;\r\n}\r\n.modal-content.balance{\r\n  height:400px;\r\n  width:600px;\r\n}\r\n.modal-content{\r\n  width:300px;\r\n}\r\n.modal-header{\r\n  background-color:grey;\r\n  color:white;\r\n}\r\n/*.container1{\r\n  position:relative;\r\n  top:20px;\r\n  padding-left:10px;\r\n  width:250px;\r\n  height:300px;\r\n  background-color:whitesmoke;\r\n  overflow-y:scroll;\r\n}*/\r\n.table{\r\n  width:150px;\r\n}\r\n.switch {\r\n  position: relative;\r\n  top:12px;\r\n  left:10px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 27px;\r\n}\r\n/* Hide default HTML checkbox */\r\n.switch input {display:none;}\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 20px;\r\n  width: 20px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/group-board/group-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/group-board/group-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row full\">\r\n\r\n  <div class=\"col-lg-8 border-right\">\r\n    <div class=\"navbar navbar-expand-sm\">\r\n      <h3>{{ group.group_name }}</h3>\r\n      <button type=\"button\" class=\"btn btn-success btn-lg\" data-toggle=\"modal\" data-target=\"#GroupBillModal\" style=\"position:absolute;left:600px\">Add Bill</button>\r\n\r\n      <div class=\"modal fade\" id=\"GroupBillModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add Bill with {{ group.group_name }}</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form class=\"form\" #myform=\"ngForm\" novalidate>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"addBill.description\" placeholder=\"Description\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-usd\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"addBill.total_amount\" placeholder=\"00.00\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"date\" [(ngModel)]=\"addBill.bill_date\" placeholder=\"MM-DD-YY\" required/>\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  Paid By\r\n                  <a role=\"button\" style=\"background-color:lightgray;border-radius:5px;font-weight:bold;min-height:10px\" data-toggle=\"modal\" data-target=\"#GroupBillPayer\">{{ paidby }}</a>\r\n                </div>\r\n                <div>\r\n                  <button type=\"button\" (click)=\"AddBillData()\" class=\"btn btn-success\" [disabled]=\"!myform.valid\">Add</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal fade payer\" id=\"GroupBillPayer\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Choose Payer</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closePayerModal>&times;</button>\r\n            </div>\r\n            <div class=\"modal-body myscroll\">\r\n              <div class=\"payerlist\">\r\n                <label class=\"nav-link\" style=\"font-weight:normal\" *ngFor=\"let member of group.memberLists\" (click)=\"addSinglePayer(member.id)\">\r\n                  {{ member.name }}\r\n                </label>\r\n                <label class=\"nav-link\" (click)=\"showpayer()\">\r\n                  Multiple Payers\r\n                </label>\r\n                <div *ngIf=\"showPayer\">\r\n                  <label class=\"nav-link\" style=\"font-weight:normal\" *ngFor=\"let member of group.memberLists\">\r\n                    {{ member.name }}\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-usd\"></i></span>\r\n                      <input type=\"text\" #amt class=\"form-control\" placeholder=\"0.00\" />\r\n                    </div>\r\n                    <a (click)=\"addpayer(member.id,amt.value)\">Add</a>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"billNav\">\r\n      <!--<div class=\"panel-group\">-->\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n         \r\n          <div class=\"row\">\r\n            <div class=\"col-lg-11\">\r\n              <label class=\"panel-title\" style=\"color:grey\">\r\n                <a data-toggle=\"collapse\" href=\"#set\">Settlements</a>\r\n              </label>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div id=\"set\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\" *ngIf=\"transactions && transactions.length\">\r\n\r\n            <div class=\"billNav\" *ngFor=\"let settle of transactions\">\r\n              <!--<div class=\"panel-group\">-->\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <!--<div class=\"date\"> \"Aug\"\r\n          <div class=\"number\">31</div>\r\n          </div>-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-1 design1\">\r\n                      {{ settle.paid_on | date:'MMM'}}\r\n                      <div class=\"design\">\r\n                        {{ settle.paid_on | date:'dd'}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-11\">\r\n                      <label class=\"panel-title\" style=\"font-weight:normal\">\r\n                        {{settle.payerId.name }} paid {{settle.payeeId.name}} &#8377;{{settle.paid_amount}}\r\n                      </label>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <!--<div id=\"\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body border-bottom\">\r\n            <br />\r\n           fjklf\r\n          </div>\r\n\r\n        </div>-->\r\n                <!--</div>-->\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"panel-body\" *ngIf=\"!transactions || !transactions.length\">\r\n            No settlement exist\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"billNav\" *ngFor=\"let bill of bills\">\r\n      <!--<div class=\"panel-group\">-->\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <!--<div class=\"date\"> \"Aug\"\r\n        <div class=\"number\">31</div>\r\n        </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-1 design\">\r\n              {{ bill.bill_created_at | date:'MMM'}}\r\n              <div class=\"design\">\r\n                {{ bill.bill_created_at | date:'dd'}}\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <label class=\"panel-title\" style=\"color:grey\">\r\n                <a data-toggle=\"collapse\" href=\"#{{bill.billid}}\">{{bill.description}}</a>\r\n              </label>\r\n            </div>\r\n            <!--<div class=\"col-lg-5\">\r\n              <div class=\"col-lg-6 design\">\r\n                <label style=\"font-size:smaller;font-weight:normal\">\r\n                  {{bill.payers.length | number}} people  Paid\r\n                </label>   \r\n                <div class=\"design\">\r\n                  {{bill.total_amount}}\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6 design\">\r\n                lent\r\n                <div class=\"design\">\r\n                  0000\r\n                </div>\r\n              </div>\r\n            </div>-->\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div id=\"{{bill.billid}}\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body border-bottom\">\r\n            {{bill.description}}\r\n            <br />\r\n            <h4> &#8377;{{bill.total_amount}}</h4>\r\n            Added by {{ bill.bill_created_by.name}}\r\n            on {{bill.bill_created_at | date:'MMMM'}} {{bill.bill_created_at | date:'dd'}},{{bill.bill_created_at | date:'yyyy'}}\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div *ngFor=\"let member of bill.sharedwiths\">\r\n              {{member.name}}\r\n              <label style=\"font-weight:normal\" *ngFor=\"let memberP of bill.payers\">\r\n                <label style=\"font-weight:normal\" *ngIf=\"member.id==memberP.id\">\r\n                  paid &#8377;{{ memberP.amount}} and &nbsp;\r\n                </label>\r\n              </label>\r\n              <label style=\"font-weight:normal\">\r\n                owes &#8377;{{member.amount}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-4\">\r\n    <button type=\"button\" class=\"btn\" style=\"background-color:powderblue\" (click)=\"ShowBalance()\">\r\n      <span class=\"glyphicon glyphicon-list-alt\"></span>\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn\" style=\"background-color:powderblue;position:relative;left:10px\" (click)=\"ShowSetting()\">\r\n      Group Settings\r\n    </button>\r\n\r\n\r\n\r\n\r\n    <!--<div class=\"modal fade\" id=\"GroupSettingModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n       Modal content\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\"> {{ group.group_name }} Setting</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body myscroll\">\r\n\r\n          <div>\r\n            <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n              <label for=\"group_name\">Group name</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"group_name\" [(ngModel)]=\"group.group_name\" /><br />\r\n              <label>Group Members</label>\r\n              <br />\r\n              <table class=\"table\">\r\n                <tbody *ngFor=\"let member of group.memberLists\">\r\n                  <tr>\r\n                    <td>\r\n                      {{ member.name }}\r\n                    </td>\r\n                    <td>\r\n                      <span class=\"glyphicon glyphicon-remove-circle\" (click)=\"remove(member.id)\" style=\"color:red\"></span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n              <label>Simplfy Group Depts</label>\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\" id=\"depth\" name=\"depth\" (change)=\"toggleEditable($event)\" checked=\"{{status}}\">\r\n                <span class=\"slider round\"></span>\r\n              </label>\r\n              <br /><br />\r\n              <button type=\"button\" class=\"btn\" (click)=\"showList()\">Add new member</button>\r\n              <br />\r\n              <div *ngIf=\"showlist\">\r\n                <table class=\"table\">\r\n                  <tbody *ngFor=\"let member of friends\">\r\n                    <tr>\r\n                      <td>\r\n                        {{ member.user_name }}\r\n                      </td>\r\n                      <td>\r\n                        <span class=\"glyphicon glyphicon-ok-circle\" style=\"color:green\" (click)=\"add(member.userid)\"></span>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <br />\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\" data-dismiss=\"modal\">Delete</button>\r\n                <button type=\"submit\" class=\"btn btn-success\" style=\"position:relative; left:10px\" data-dismiss=\"modal\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-warning\" style=\"position:relative;left:20px\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\r\n\r\n    <br /><br />\r\n\r\n    <div *ngIf=\"showSettings\">\r\n      <h4>Group Settings</h4>\r\n      <div>\r\n        <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n          <label for=\"group_name\">Group name</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"group_name\" [(ngModel)]=\"group.group_name\" /><br />\r\n          <label>Group Members</label>\r\n          <br />\r\n          <table class=\"table\">\r\n            <tbody *ngFor=\"let member of group.memberLists\">\r\n              <tr>\r\n                <td>\r\n                  {{ member.name }}\r\n                </td>\r\n                <td>\r\n                  <span class=\"glyphicon glyphicon-remove-circle\" (click)=\"remove(member.id)\" style=\"color:red\"></span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <label>Simplfy Group Depts</label>\r\n          <label class=\"switch\">\r\n            <input type=\"checkbox\" id=\"depth\" name=\"depth\" (change)=\"toggleEditable($event)\" checked=\"{{status}}\">\r\n            <span class=\"slider round\"></span>\r\n          </label>\r\n          <br /><br />\r\n          <button type=\"button\" class=\"btn\" (click)=\"showList()\">Add new member</button>\r\n          <br />\r\n          <br />\r\n          <div *ngIf=\"showlist\">\r\n            <table class=\"table\">\r\n              <tbody *ngFor=\"let member of nonGroupFriends\">\r\n                <tr>\r\n                  <td>\r\n                    {{ member.user_name }}\r\n                  </td>\r\n                  <td>\r\n                    <span class=\"glyphicon glyphicon-ok-circle\" style=\"color:green\" (click)=\"add(member.userid)\"></span>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <br />\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\r\n            <button type=\"submit\" class=\"btn btn-success\" style=\"position:relative; left:10px\">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"showBalance\">\r\n      <h4>\r\n        Group Balance\r\n      </h4>\r\n      <div *ngFor=\"let member of group.memberLists\">\r\n        <label style=\"color:gray;font-size:medium\">\r\n          <span class=\"glyphicon glyphicon-user\" style=\"color:grey\"></span>\r\n          {{ member.name }}\r\n        </label>\r\n        <br />\r\n        <div *ngFor=\"let balance of groupBalance\">\r\n          <div *ngIf=\"member.id==balance.member.id\">\r\n            <label *ngIf=\"balance.status=='gets'\" style=\"color:green;font-weight:normal\">\r\n              {{ balance.status }}\r\n              &#8377;{{balance.amt}}\r\n            </label>\r\n            <label *ngIf=\"balance.status=='owes'\" style=\"color:red;font-weight:normal\">\r\n              {{ balance.status }}\r\n              &#8377;{{balance.amt}}\r\n            </label>\r\n            <label *ngIf=\"balance.status=='settled'\" style=\"color:gray;font-weight:normal\">\r\n              {{ balance.status }}\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <a data-toggle=\"modal\" data-target=\"#GroupSettlementDetail\">\r\n        Detail\r\n      </a>\r\n    </div>\r\n    <div>\r\n\r\n\r\n\r\n      <div class=\"modal fade\" id=\"GroupSettlementDetail\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content balance\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Group Balances</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body myscroll\">\r\n              <div class=\"row nav-link\" *ngFor=\"let member of group.memberLists\">\r\n                <div class=\"col-lg-4 nav-item\">\r\n                  <label style=\"color:gray;font-size:medium\">\r\n                    <span class=\"glyphicon glyphicon-user\" style=\"color:grey\"></span>\r\n                    {{ member.name }}\r\n                  </label>\r\n                  <br />\r\n                  <div *ngFor=\"let balance of groupBalance\">\r\n                    <div *ngIf=\"member.id==balance.member.id\">\r\n                      <label *ngIf=\"balance.status=='gets'\" style=\"color:green;font-weight:normal\">\r\n                        {{ balance.status }}\r\n                        &#8377;{{balance.amt}}\r\n                      </label>\r\n                      <label *ngIf=\"balance.status=='owes'\" style=\"color:red;font-weight:normal\">\r\n                        {{ balance.status }}\r\n                        &#8377;{{balance.amt}}\r\n                      </label>\r\n                      <label *ngIf=\"balance.status=='settled'\" style=\"color:gray;font-weight:normal\">\r\n                       {{ balance.status }}\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-8 nav-item\">\r\n                  <div *ngFor=\"let detail of details\">\r\n                    <ul *ngIf=\"detail.id==member.id\">\r\n                      <li style=\"color:grey\">{{ detail.detail }}</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/group-board/group-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/group-board/group-board.component.ts ***!
  \******************************************************/
/*! exports provided: GroupBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBoardComponent", function() { return GroupBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_GroupService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/GroupService */ "./src/app/Services/GroupService.ts");
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _Services_BillService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/BillService */ "./src/app/Services/BillService.ts");
/* harmony import */ var _Services_HubService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/HubService */ "./src/app/Services/HubService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GroupBoardComponent = /** @class */ (function () {
    function GroupBoardComponent(route, router, service, bill_service, group_service, user_service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.bill_service = bill_service;
        this.group_service = group_service;
        this.user_service = user_service;
        this.grpmem = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupMember"]();
        this.grpmems = new Array();
        this.remgrpmem = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupMember"]();
        this.remgrpmems = new Array();
        this.group = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupResponse"]();
        this.newGroup = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        this.addBill = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["BillResponse"]();
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
        this.payers = new Array();
        this.shareMember = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SharedWithResponse"]();
        this.shareMembers = new Array();
        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
        this.settlements = new Array();
        this.groupBalance = new Array();
        this.balance = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalance"]();
        this.info = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["Detail"]();
        this.details = new Array();
        this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalanceDetail"]();
        this.sett = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["settle"]();
        //setts = new Array<settle>();
        this.setPayers = new Array();
        this.setShares = new Array();
        this.showvarible = false;
        this.showlist = false;
        this.showPayer = false;
        this.amount = "";
        this.showSettings = false;
        this.showBalance = true;
        this.showbill = false;
    }
    GroupBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['gpid'];
        //    console.log(id);
        this.route.parent.params.subscribe(function (params) {
            _this.userid = params['id'];
        });
        this.paidby = "Select Payer";
        this.group_service.GetGroupInfo(this.id).subscribe(function (data) {
            //  console.log(data),
            _this.group = data;
            if (_this.group.is_simplified_depts == true) {
                _this.status = true;
                _this.isDepth = _this.status;
            }
            _this.bill_service.getGroupSettlement(_this.userid, _this.id)
                .subscribe(function (data) {
                _this.GroupSettlements = data,
                    //  console.log(this.GroupSettlements);
                    _this.user_service.getFriends(_this.userid).subscribe(function (data) {
                        _this.friends = data,
                            _this.nonGroupFriends = data;
                        for (var i = 0; i < _this.group.memberLists.length; i++) {
                            var place = _this.nonGroupFriends.findIndex(function (c) { return c.userid == _this.group.memberLists[i].id; });
                            // console.log(place);
                            if (place >= 0) {
                                _this.nonGroupFriends.splice(place, 1);
                            }
                            _this.balance = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalance"]();
                            _this.info = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["Detail"]();
                            _this.info.id = _this.group.memberLists[i].id;
                            _this.info.name = _this.group.memberLists[i].name;
                            _this.balance.member = _this.info;
                            _this.balance.amt = 0;
                            for (var j = 0; j < _this.GroupSettlements.length; j++) {
                                if (_this.GroupSettlements[j].amount != 0) {
                                    if (_this.group.memberLists[i].id == _this.GroupSettlements[j].payer.id) {
                                        _this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalanceDetail"]();
                                        _this.detail.id = _this.group.memberLists[i].id;
                                        _this.detail.detail = _this.group.memberLists[i].name + " owes ₹" + _this.GroupSettlements[j].amount
                                            + " to " + _this.GroupSettlements[j].payee.name;
                                        _this.details.push(_this.detail);
                                        _this.balance.amt = _this.balance.amt - _this.GroupSettlements[j].amount;
                                    }
                                    if (_this.group.memberLists[i].id == _this.GroupSettlements[j].payee.id) {
                                        _this.detail = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupBalanceDetail"]();
                                        _this.detail.id = _this.group.memberLists[i].id;
                                        _this.detail.detail = _this.group.memberLists[i].name + " owes " + _this.GroupSettlements[j].payer.name + " ₹" + _this.GroupSettlements[j].amount;
                                        _this.details.push(_this.detail);
                                        _this.balance.amt = _this.balance.amt + _this.GroupSettlements[j].amount;
                                    }
                                }
                            }
                            if (_this.balance.amt == 0)
                                _this.balance.status = "settled";
                            else if (_this.balance.amt < 0) {
                                _this.balance.amt = 0 - _this.balance.amt;
                                _this.balance.status = "owes";
                            }
                            else
                                _this.balance.status = "gets";
                            _this.groupBalance.push(_this.balance);
                        }
                        //  console.log(this.groupBalance);
                        // console.log(this.details);
                        console.log(_this.nonGroupFriends);
                    });
            });
        });
        this.bill_service.getGroupBills(this.id).subscribe(function (data) {
            _this.bills = data,
                console.log(_this.bills);
        });
        this.bill_service.getGroupTransactions(this.id)
            .subscribe(function (data) { return _this.transactions = data; });
    };
    GroupBoardComponent.prototype.toggleEditable = function (event) {
        if (event.target.checked) {
            this.isDepth = true;
        }
        else {
            this.isDepth = false;
        }
    };
    GroupBoardComponent.prototype.add = function (userid) {
        this.grpmem = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupMember"]();
        this.grpmem.userid = userid;
        this.grpmem.groupid = this.id;
        this.grpmems.push(this.grpmem);
        //this.group_service.addGroupMember(userid, this.id).subscribe
        //  (
        //  data => {
        //    console.log(data),
        //      this.service.update();
        //  });
    };
    GroupBoardComponent.prototype.remove = function (userid) {
        this.remgrpmem = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["GroupMember"]();
        this.remgrpmem.userid = userid;
        this.remgrpmem.groupid = this.id;
        this.remgrpmems.push(this.remgrpmem);
        //this.group_service.removeGroupMember(userid, this.id).subscribe
        //  (data => { console.log(data), this.service.update() },
        //  error => alert("member have pending settlements in group"));
    };
    GroupBoardComponent.prototype.showList = function () {
        if (this.showlist == false)
            this.showlist = true;
        else
            this.showlist = false;
    };
    GroupBoardComponent.prototype.showpayer = function () {
        this.paidby = "multiple";
        if (this.showPayer == false)
            this.showPayer = true;
        else
            this.showPayer = false;
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
    };
    GroupBoardComponent.prototype.showBill = function () {
        if (this.showbill == false)
            this.showbill = true;
        else
            this.showbill = false;
    };
    GroupBoardComponent.prototype.ShowSetting = function () {
        this.showSettings = true;
        this.showBalance = false;
    };
    GroupBoardComponent.prototype.ShowBalance = function () {
        this.showBalance = true;
        this.showSettings = false;
    };
    GroupBoardComponent.prototype.delete = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete this group")) {
            this.group_service.deleteGroup(this.id)
                .subscribe(function (data) {
                console.log(data),
                    _this.router.navigate(['/Board', _this.userid]);
            }, function (error) { return alert("settlemets still exist"); });
        }
    };
    GroupBoardComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newGroup.groupid = this.id;
        this.newGroup.group_name = this.group.group_name;
        this.newGroup.group_created_by = this.group.group_created_by.id;
        this.newGroup.is_simplified_depts = this.isDepth;
        //console.log(this.newGroup);
        //console.log(this.group);
        //console.log(this.isDepth);
        for (var i = 0; i < this.grpmems.length; i++) {
            this.group_service.addGroupMember(this.grpmems[i].userid, this.grpmems[i].groupid).subscribe(function (data) {
                console.log(data);
                //this.service.update();
            });
        }
        for (var i = 0; i < this.remgrpmems.length; i++) {
            this.group_service.removeGroupMember(this.remgrpmems[i].userid, this.remgrpmems[i].groupid).subscribe(function (data) { console.log(data), _this.service.update(); }, function (error) { return alert("member have pending settlements in group"); });
        }
        this.group_service.updateGroup(this.id, this.newGroup).subscribe(function (data) { return console.log(data); });
    };
    GroupBoardComponent.prototype.addSinglePayer = function (id) {
        var _this = this;
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
        this.payers = new Array();
        this.payer.paid_byId = id;
        this.payer.amount_paid = this.addBill.total_amount;
        this.user_service.getUserData(this.payer.paid_byId).subscribe(function (data) { return _this.paidby = data.user_name; });
    };
    GroupBoardComponent.prototype.addpayer = function (id, amt) {
        this.payer = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["PayerResponse"]();
        this.payer.paid_byId = id;
        this.payer.amount_paid = amt;
        this.payers.push(this.payer);
    };
    GroupBoardComponent.prototype.AddBillData = function () {
        var _this = this;
        if (this.payer.paid_byId == null) {
            alert("Please select payer");
        }
        else {
            this.my_date = new Date().toLocaleString();
            this.addBill.bill_created_at = this.my_date;
            this.addBill.bill_created_byId = this.userid;
            this.addBill.bill_updated_at = this.my_date;
            this.addBill.bill_updated_byId = this.userid;
            this.addBill.groupId = this.id;
            if (this.payers.length == 0) {
                this.payers.push(this.payer);
            }
            var div = Number.parseFloat((this.addBill.total_amount / this.group.memberLists.length).toFixed(2));
            // div = Math.round(div);
            for (var i = 0; i < this.group.memberLists.length; i++) {
                this.shareMember = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SharedWithResponse"]();
                this.shareMember.owes_amount = div;
                this.shareMember.shared_withId = this.group.memberLists[i].id;
                this.shareMembers.push(this.shareMember);
            }
            if (this.payers.length == 1) {
                var payee = this.payer.paid_byId;
                for (var i = 0; i < this.shareMembers.length; i++) {
                    if (payee != this.shareMembers[i].shared_withId) {
                        var payer = this.shareMembers[i].shared_withId;
                        var amt = this.shareMembers[i].owes_amount;
                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                        this.settlement.payeeId = payee;
                        this.settlement.payerId = payer;
                        this.settlement.paid_amount = amt;
                        this.settlement.groupId = this.id;
                        if (this.settlement.paid_amount != 0)
                            this.settlements.push(this.settlement);
                    }
                }
            }
            else {
                for (var i = 0; i < this.shareMembers.length; i++) {
                    this.sett = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["settle"]();
                    this.sett.id = this.shareMembers[i].shared_withId;
                    var amt = 0;
                    for (var j = 0; j < this.payers.length; j++) {
                        if (this.shareMembers[i].shared_withId === this.payers[j].paid_byId) {
                            if (this.payers[j].amount_paid == div) {
                                amt = 1;
                            }
                            else if (this.payers[j].amount_paid > div) {
                                amt = this.payers[j].amount_paid - div;
                                this.sett.amt = amt;
                                this.setPayers.push(this.sett);
                            }
                            else {
                                amt = this.shareMembers[i].owes_amount - this.payers[j].amount_paid;
                                this.sett.amt = amt;
                                this.setShares.push(this.sett);
                            }
                        }
                    }
                    if (amt == 0) {
                        this.sett.amt = this.shareMembers[i].owes_amount;
                        this.setShares.push(this.sett);
                    }
                }
                //console.log(this.setPayers);
                //console.log(this.setShares);
                if (this.setPayers.length > 1) {
                    if (this.setShares.length == 1) {
                        for (var i = 0; i < this.setPayers.length; i++) {
                            this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                            this.settlement.payerId = this.setShares[0].id;
                            this.settlement.payeeId = this.setPayers[i].id;
                            this.settlement.paid_amount = this.setPayers[i].amt;
                            this.settlement.groupId = this.id;
                            if (this.settlement.paid_amount != 0)
                                this.settlements.push(this.settlement);
                        }
                    }
                    else {
                        for (var i = 0; i < this.setShares.length; i++) {
                            var mem = this.setPayers.find(function (data) { return data.amt === _this.setShares[i].amt; });
                            var index = this.setPayers.findIndex(function (data) { return data.amt === _this.setShares[i].amt; });
                            //console.log(index);
                            if (mem != null) {
                                this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                                payer = this.setShares[i].id;
                                payee = mem.id;
                                amt = mem.amt;
                                this.setPayers[index].amt = this.setPayers[index].amt - amt;
                                this.settlement.payerId = payer;
                                this.settlement.payeeId = payee;
                                this.settlement.paid_amount = amt;
                                this.settlement.groupId = this.id;
                                if (this.settlement.paid_amount != 0)
                                    this.settlements.push(this.settlement);
                            }
                            else {
                                for (var j = 0; j < this.setPayers.length; j++) {
                                    if (this.setPayers[j].amt > this.setShares[i].amt) {
                                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                                        this.settlement.payerId = this.setShares[i].id;
                                        this.settlement.payeeId = this.setPayers[j].id;
                                        this.settlement.paid_amount = this.setShares[i].amt;
                                        this.setShares[i].amt = this.setShares[i].amt - this.settlement.paid_amount;
                                        this.setPayers[j].amt = this.setPayers[j].amt - this.settlement.paid_amount;
                                        this.settlement.groupId = this.id;
                                        if (this.settlement.paid_amount != 0)
                                            this.settlements.push(this.settlement);
                                    }
                                    else if (this.setPayers[j].amt > 0) {
                                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                                        this.settlement.payerId = this.setShares[i].id;
                                        this.settlement.payeeId = this.setPayers[j].id;
                                        this.settlement.paid_amount = this.setPayers[j].amt;
                                        this.setShares[i].amt = this.setShares[i].amt - this.settlement.paid_amount;
                                        this.setPayers[j].amt = this.setPayers[j].amt - this.settlement.paid_amount;
                                        this.settlement.groupId = this.id;
                                        if (this.settlement.paid_amount != 0)
                                            this.settlements.push(this.settlement);
                                    }
                                }
                            }
                        }
                    }
                }
                else if (this.setPayers.length == 1) {
                    for (var i = 0; i < this.setShares.length; i++) {
                        this.settlement = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["SettlementResponse"]();
                        this.settlement.payerId = this.setShares[i].id;
                        this.settlement.payeeId = this.setPayers[0].id;
                        this.settlement.paid_amount = this.setShares[i].amt;
                        this.settlement.groupId = this.id;
                        if (this.settlement.paid_amount != 0)
                            this.settlements.push(this.settlement);
                    }
                }
                //console.log(this.setPayers);
                //console.log(this.setShares);
            }
            this.addBill.payers = this.payers;
            this.addBill.sharedwiths = this.shareMembers;
            this.addBill.settlements = this.settlements;
            console.log(this.addBill);
            this.bill_service.addNewBill(this.addBill)
                .subscribe(function (data) {
                if (data.status == true) {
                    alert("Bill Added Successfully");
                }
                else
                    ("Failed to add the bill");
            });
            this.closeModal.nativeElement.click();
            this.closePayerModal.nativeElement.click();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GroupBoardComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closePayerModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GroupBoardComponent.prototype, "closePayerModal", void 0);
    GroupBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-board',
            template: __webpack_require__(/*! ./group-board.component.html */ "./src/app/group-board/group-board.component.html"),
            styles: [__webpack_require__(/*! ./group-board.component.css */ "./src/app/group-board/group-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_HubService__WEBPACK_IMPORTED_MODULE_6__["HubConnectionService"],
            _Services_BillService__WEBPACK_IMPORTED_MODULE_5__["BillService"], _Services_GroupService__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _Services_UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], GroupBoardComponent);
    return GroupBoardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content:center\">\r\n  <img src=\"..\\assets\\download.png\" class=\"mx-auto d-block\"><img><br />\r\n  <button type=\"button\" class=\"btn btn-dark\" style=\"position:relative;left:575px\" [routerLink]=\"['/login']\">Login</button>\r\n  <button type=\"button\" class=\"btn btn-dark\" style=\"position:relative;left:650px\" [routerLink]=\"['/register']\">SignUp</button>\r\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    background-color:whitesmoke;\n    width:500px;\n    align-content:center;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:auto\">\r\n    <div class=\"container\">\r\n      <h3>Login to Your Account</h3>\r\n      <br>\r\n      <form class=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" name=\"Email\" [(ngModel)]=\"user.email_id\" placeholder=\"Email-id\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-eye-open\"></i></span>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" [routerLink]=\"['/home']\" style=\"position:relative;left:20px\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log(this.user);
        this.user_service.getUser(this.user.email_id, this.user.password)
            .subscribe(function (result) {
            _this.id = result.id;
            console.log(_this.id);
            _this.user_service.setuser(_this.id);
            _this.router.navigate(['/Board', _this.id]);
        }, function (error) {
            alert("Incorrect check id or password");
            _this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    background-color: #EDEDED;\n    width:500px;\n}\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:auto\">\r\n    <div class=\"container\">\r\n      <h3>Register To Chat Application</h3><br>\r\n      <form class=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"user.user_name\" placeholder=\"Enter your Name\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email_id\" placeholder=\"Enter your Email_id\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-eye-open\"></i></span>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter Password\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" [routerLink]=\"['/home']\" style=\"position:relative;left:20px\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this.user_service.register(this.user.user_name, this.user.email_id, this.user.password)
            .subscribe(function (result) {
            _this.id = result.id;
            console.log(_this.id);
            _this.router.navigate(['/Board', _this.id]);
        }, function (error) {
            alert("Id already exist. Plz use another id.");
            _this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        });
        console.log(this.id);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routing-module.module.ts":
/*!******************************************!*\
  !*** ./src/app/routing-module.module.ts ***!
  \******************************************/
/*! exports provided: RoutingModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModuleModule", function() { return RoutingModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-group/create-group.component */ "./src/app/create-group/create-group.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_GroupService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/GroupService */ "./src/app/Services/GroupService.ts");
/* harmony import */ var _group_board_group_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group-board/group-board.component */ "./src/app/group-board/group-board.component.ts");
/* harmony import */ var _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-setting/user-setting.component */ "./src/app/user-setting/user-setting.component.ts");
/* harmony import */ var _friend_board_friend_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./friend-board/friend-board.component */ "./src/app/friend-board/friend-board.component.ts");
/* harmony import */ var _Services_FriendService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/FriendService */ "./src/app/Services/FriendService.ts");
/* harmony import */ var _Services_BillService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/BillService */ "./src/app/Services/BillService.ts");
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./expense/expense.component */ "./src/app/expense/expense.component.ts");
/* harmony import */ var _Services_HubService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/HubService */ "./src/app/Services/HubService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    {
        path: 'Board/:id',
        component: _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
        children: [
            { path: 'expense', component: _expense_expense_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseComponent"] },
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'group/:gpid', component: _group_board_group_board_component__WEBPACK_IMPORTED_MODULE_8__["GroupBoardComponent"] },
            { path: 'friend/:frdid', component: _friend_board_friend_board_component__WEBPACK_IMPORTED_MODULE_10__["FriendBoardComponent"] },
            { path: 'newgroup', component: _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__["CreateGroupComponent"] },
            {
                path: 'account/setting',
                component: _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_9__["UserSettingComponent"]
            }
        ],
    }
];
var RoutingModuleModule = /** @class */ (function () {
    function RoutingModuleModule() {
    }
    RoutingModuleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: [
                _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _user_setting_user_setting_component__WEBPACK_IMPORTED_MODULE_9__["UserSettingComponent"],
                _friend_board_friend_board_component__WEBPACK_IMPORTED_MODULE_10__["FriendBoardComponent"],
                _group_board_group_board_component__WEBPACK_IMPORTED_MODULE_8__["GroupBoardComponent"],
                _expense_expense_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseComponent"],
                _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_5__["CreateGroupComponent"]
            ],
            providers: [_Services_GroupService__WEBPACK_IMPORTED_MODULE_7__["GroupService"], _Services_FriendService__WEBPACK_IMPORTED_MODULE_11__["FriendService"], _Services_BillService__WEBPACK_IMPORTED_MODULE_12__["BillService"], _Services_HubService__WEBPACK_IMPORTED_MODULE_14__["HubConnectionService"]],
        })
    ], RoutingModuleModule);
    return RoutingModuleModule;
}());



/***/ }),

/***/ "./src/app/user-setting/user-setting.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-setting/user-setting.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    background-color: #EDEDED;\n    width:500px;\n}\n\r\n"

/***/ }),

/***/ "./src/app/user-setting/user-setting.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-setting/user-setting.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:auto\">\r\n  <div class=\"container\">\r\n    <h2>Account Settings</h2><br>\r\n    <form class=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n          <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"user.user_name\" placeholder=\"Enter your Name\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\r\n          <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email_id\" placeholder=\"Enter your Email_id\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></span>\r\n          <input type=\"text\" class=\"form-control\" name=\"phone_no\" [(ngModel)]=\"user.phone_no\" placeholder=\"Enter your phone_no\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-eye-open\"></i></span>\r\n          <input type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Enter Password\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [routerLink]=\"['/Board',userid]\" style=\"position:relative;left:20px\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-setting/user-setting.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-setting/user-setting.component.ts ***!
  \********************************************************/
/*! exports provided: UserSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingComponent", function() { return UserSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Model */ "./src/app/Models/Model.ts");
/* harmony import */ var _Services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/UserService */ "./src/app/Services/UserService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSettingComponent = /** @class */ (function () {
    function UserSettingComponent(route, user_service) {
        this.route = route;
        this.user_service = user_service;
        this.user = new _Models_Model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    UserSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.userid = params['id'];
        });
        //  console.log(this.userid);
        this.user_service.getUserData(this.userid)
            .subscribe(function (data) { return _this.user = data; });
    };
    UserSettingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user_service.updateUser(this.user).subscribe(function (data) {
            alert("User data updated"),
                _this.user = data;
        }, function (error) {
            return alert("operation failed");
        });
    };
    UserSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-setting',
            template: __webpack_require__(/*! ./user-setting.component.html */ "./src/app/user-setting/user-setting.component.html"),
            styles: [__webpack_require__(/*! ./user-setting.component.css */ "./src/app/user-setting/user-setting.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_UserService__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserSettingComponent);
    return UserSettingComponent;
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

module.exports = __webpack_require__(/*! C:\Users\mansi\source\repos\FinalSplitWise\FinalSplitWise\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map