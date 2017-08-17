"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rute_1 = require("../../app/rute");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http, rutas) {
        this.http = http;
        this.rutas = rutas;
        this.url = this.rutas.user();
    }
    UserService.prototype.getUsers = function () {
        var response = this.http.get(this.url).map(function (res) { return res.json(); });
        return response;
    };
    UserService.prototype.getUser = function (id) {
        var response = this.http.get(this.url + id).map(function (res) { return res.json(); });
        return response;
    };
    UserService.prototype.addUser = function (user) {
        Number(user.status);
        var response = this.http.post(this.url, user).map(function (res) { return res.json(); });
        return response;
    };
    UserService.prototype.putUser = function (user) {
        Number(user.status);
        var response = this.http.put(this.url + user.id, user).map(function (res) { return res.json(); });
        return response;
    };
    UserService.prototype.deleteUser = function (id) {
        var response = this.http.delete(this.url + id).map(function (res) { return res.json(); });
        return response;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        rute_1.Rutas])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map