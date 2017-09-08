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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var github_service_1 = require("../services/github.service");
require("rxjs/add/operator/map");
var IGithubUser_1 = require("../model/IGithubUser");
var SearchformComponent = /** @class */ (function () {
    function SearchformComponent(_githubService) {
        this._githubService = _githubService;
        this.userUpdated = new core_1.EventEmitter();
        // Component'e input olarak geçilen parametre burada undefined, OnInit'te Object halinde.
    }
    SearchformComponent.prototype.ngOnInit = function () {
        if (this.githubUser) {
            this.githubUser.user = false;
            this.getUserInformation();
        }
    };
    SearchformComponent.prototype.searchUser = function () {
        if (this.githubUser.userName && this.githubUser.userName.length > 0) {
            this._githubService.updateUser(this.githubUser.userName);
            this.getUserInformation();
        }
        else {
            this.githubUser.user = false;
        }
    };
    SearchformComponent.prototype.getUserInformation = function () {
        var _this = this;
        if (this.githubUser.userName && this.githubUser.userName.length > 0) {
            this._githubService.getUser().subscribe(function (user) {
                _this.githubUser.user = user;
                _this.userUpdated.emit(_this.githubUser);
            }, function (err) {
                console.log('err:' + err);
                _this.githubUser.user = false;
            }, function () { return console.log('Done'); });
            this._githubService.getRepos().subscribe(function (repos) {
                // console.log(repos);
                _this.githubUser.repos = repos;
                _this.userUpdated.emit(_this.githubUser);
            }, function (err) {
                console.log('err:' + err);
                _this.githubUser.user = false;
            }, function () { return console.log('Done'); });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", IGithubUser_1.GithubUser)
    ], SearchformComponent.prototype, "githubUser", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SearchformComponent.prototype, "userUpdated", void 0);
    SearchformComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'searchform',
            templateUrl: 'searchform.component.html'
        }),
        __metadata("design:paramtypes", [github_service_1.GithubService])
    ], SearchformComponent);
    return SearchformComponent;
}());
exports.SearchformComponent = SearchformComponent;
//# sourceMappingURL=searchform.component.js.map