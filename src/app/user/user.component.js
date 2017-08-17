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
var user_service_1 = require("./user.service");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var dialog_component_1 = require("../dialog/dialog.component");
var snackBar_component_1 = require("../snackBar/snackBar.component");
var UserComponent = (function () {
    function UserComponent(userService, dialog, snackBar, router) {
        this.userService = userService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.get();
    };
    UserComponent.prototype.get = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.lista = data;
        }, function (err) {
        });
    };
    UserComponent.prototype.crear = function () {
        var link = ['/userDetalle'];
        this.router.navigate(link);
    };
    UserComponent.prototype.editar = function (item) {
        console.log(item);
        var link = ['/userDetalle/', item.id];
        this.router.navigate(link);
    };
    UserComponent.prototype.borrar = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_component_1.DialogResultExampleDialog, {
            data: id,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userService.deleteUser(id).subscribe(function (data) {
                    _this.snackBar.openFromComponent(snackBar_component_1.snackBarComponent, {
                        duration: 2000,
                    });
                    _this.get();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    UserComponent.prototype.sortData = function (sort) {
        var _this = this;
        console.log(this.lista);
        var data = this.lista.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            console.log(isAsc);
            switch (sort.active) {
                case 'id': return _this.compare(a.id, b.id, isAsc);
                case 'name': return _this.compare(a.name, b.name, isAsc);
                case 'email': return _this.compare(a.email, b.email, isAsc);
                default: return 0;
            }
        });
    };
    UserComponent.prototype.compare = function (a, b, isAsc) {
        console.log((a < b ? -1 : 1) * (isAsc ? 1 : -1));
        console.log(b);
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        material_1.MdDialog,
        material_1.MdSnackBar,
        router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map