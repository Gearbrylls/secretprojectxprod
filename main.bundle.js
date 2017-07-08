webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<base href=\"/\">\n<div class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Marthe</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/galleri\">Galleri</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/administrer\">Administrer</a></li>\n    </ul>\n  </div>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloudinary_angular_4_x__ = __webpack_require__("../../../../@cloudinary/angular-4.x/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloudinary_angular_4_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cloudinary_angular_4_x__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cloudinary_core_cloudinary_core_shrinkwrap__ = __webpack_require__("../../../../cloudinary-core/cloudinary-core-shrinkwrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cloudinary_core_cloudinary_core_shrinkwrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cloudinary_core_cloudinary_core_shrinkwrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manager_manager_component__ = __webpack_require__("../../../../../src/app/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'galleri', component: __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'administrer', component: __WEBPACK_IMPORTED_MODULE_8__manager_manager_component__["a" /* ManagerComponent */] },
    { path: '', redirectTo: '/galleri', pathMatch: 'full' }
];
var cloudinaryLib = {
    Cloudinary: __WEBPACK_IMPORTED_MODULE_1_cloudinary_core_cloudinary_core_shrinkwrap__["Cloudinary"]
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__manager_manager_component__["a" /* ManagerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__cloudinary_angular_4_x__["CloudinaryModule"].forRoot(cloudinaryLib, __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* CloudinarySettings */]),
            __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/database.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lokijs__ = __webpack_require__("../../../../lokijs/src/lokijs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lokijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lokijs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DB; });

var DB = new __WEBPACK_IMPORTED_MODULE_0_lokijs___default.a('app', {
    env: 'BROWSER',
    verbose: true,
    autoload: true,
});
//# sourceMappingURL=database.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbs{\r\n    height: 90vh;\r\n    text-align: center;\r\n}\r\n\r\n.screen {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"thumbs col-md-3\">\n    <div *ngIf=\"!activeImage\">Please add some photos to your album in the <a routerLink=\"/manager\">Manager section</a> </div>\n    <cl-image *ngFor=\"let data of imageDataArray; let i=index\" [public-id]=\"data.public_id\" class=\"imgThumnail\" format=\"jpg\"\n      (click)=\"updateActiveImage(i)\">\n      <cl-transformation height=\"150\" width=\"150\" crop=\"fill\" radius=\"20\"></cl-transformation>\n    </cl-image>\n  </div>\n  <div class=\"col-md-9 screen\">\n    <cl-image *ngIf=\"activeImage\" [public-id]=\"activeImage.public_id\" class=\"imgThumbnail\" format=\"jpg\">\n      <cl-transformation height=\"600\" crop=\"fill\" radius=\"20\"></cl-transformation>\n    </cl-image>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database__ = __webpack_require__("../../../../../src/app/database.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.loadDB();
        this.loadUploadedImages();
    };
    GalleryComponent.prototype.loadDB = function () {
        __WEBPACK_IMPORTED_MODULE_1__database__["a" /* DB */].loadDatabase({}, function (err) {
            if (err) {
                console.log();
            }
            else {
                console.log('db loaded');
            }
        });
    };
    GalleryComponent.prototype.loadUploadedImages = function () {
        var imageCollection = __WEBPACK_IMPORTED_MODULE_1__database__["a" /* DB */].getCollection('imagegallery');
        if (imageCollection) {
            this.imageDataArray = imageCollection.find();
            if (this.imageDataArray.length > 0) {
                this.activeImage = this.imageDataArray[0];
            }
        }
    };
    GalleryComponent.prototype.updateActiveImage = function (index) {
        this.activeImage = this.imageDataArray[index];
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GalleryComponent);

//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/manager/manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-drop-zone { border: dotted 3px lightgray; }\r\n.nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n\r\n.imgThumbnail{\r\n    padding: 4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/manager.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Last opp bilde</h3>\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <h3>Velg filer</h3>\n    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n      class=\"well my-drop-zone\">Slipp bilde her</div>\n    <br>\n\n    <label class=\"btn btn-success\" style=\"height: 64px !important;\"> <span style=\"float: left !important; margin-left: 9px !important; margin-top: 13px !important\">Velg bilder her</span>\n      <input style=\"visibility: hidden;\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple /><br/>\n    </label>\n  </div>\n\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n    <h3>Opplastningskø</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Størrelse</th>\n          <th>Framgang</th>\n          <th>Status</th>\n          <th>Handlinger</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td><strong>{{ item?.file?.name }}</strong></td>\n          <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n          <td *ngIf=\"uploader.isHTML5\">\n            <div class=\"progress\" style=\"margin-bottom: 0;\">\n              <div class=\"progress-bar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n            </div>\n          </td>\n          <td class=\"text-center\"><span *ngIf=\"item.isSuccess\"><i\n\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-ok\"></i></span> <span *ngIf=\"item.isCancel\"><i\n\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-ban-circle\"></i></span> <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n          </td>\n          <td nowrap>\n            <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-upload\"></span> Upload\n\t\t\t\t\t\t</button>\n            <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n\t\t\t\t\t\t</button>\n            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span> Remove\n\t\t\t\t\t\t</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <div>\n        Kø fremgang:\n        <div class=\"progress\" style=\"\">\n          <div class=\"progress-bar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n\t\t\t\t<span class=\"glyphicon glyphicon-upload\"></span> Last opp alle\n\t\t\t</button>\n      <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle\"></span> Kanseller alle\n\t\t\t</button>\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span> Fjern alle\n\t\t\t</button>\n    </div>\n  </div>\n</div>\n\n<h3>Dine bilder</h3>\n<!-- <cl-image public-id=\"stokvel/bridge\" class=\"thumbnail inline\" angle=\"20\"\n\tformat=\"jpg\"> <cl-transformation height=\"150\" width=\"150\"\n\tcrop=\"fill\" radius=\"20\"></cl-transformation> </cl-image>\n -->\n\n\n<div>\n  <p *ngIf=\"!imageDataArray\">\n    Legg til bilder ved hjelp av dra og slipp eller velg fra filsystemet\n  </p>\n\n  <cl-image *ngFor=\"let data of imageDataArray\" [public-id]=\"data.public_id\" class=\"imgThumbnail\" format=\"jpg\">\n    <cl-transformation height=\"150\" width=\"150\" crop=\"fill\" radius=\"20\"></cl-transformation>\n  </cl-image>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manager/manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloudinary_angular_4_x__ = __webpack_require__("../../../../@cloudinary/angular-4.x/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloudinary_angular_4_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cloudinary_angular_4_x__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database__ = __webpack_require__("../../../../../src/app/database.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerComponent = (function () {
    function ManagerComponent(cloudinary) {
        this.cloudinary = cloudinary;
        this.hasBaseDropZoneOver = false;
        this.title = '';
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadDB();
        this.loadUploadedImages();
        var uploaderOptions = {
            url: "https://api.cloudinary.com/v1_1/" + this.cloudinary.config().cloud_name + "/image/upload",
            // Upload files automatically upon addition to upload queue
            autoUpload: true,
            // Use xhrTransport in favor of iframeTransport
            isHTML5: true,
            // Calculate progress independently for each uploaded file
            removeAfterUpload: true,
            // XHR request headers
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest'
                }
            ]
        };
        // tslint:disable-next-line:no-bitwise
        var upsertResponse = function (fileItem) {
            // Check if HTTP request was successful
            if (fileItem.status !== 200) {
                console.log('Upload to cloudinary Failed');
                console.log(fileItem);
                return false;
            }
            var imageCollection = __WEBPACK_IMPORTED_MODULE_3__database__["a" /* DB */].getCollection('imagegallery');
            if (!imageCollection) {
                imageCollection = __WEBPACK_IMPORTED_MODULE_3__database__["a" /* DB */].addCollection('imagegallery');
            }
            imageCollection.insert(fileItem.data);
            var that = _this;
            __WEBPACK_IMPORTED_MODULE_3__database__["a" /* DB */].saveDatabase(function (saveErr) {
                if (saveErr) {
                    console.log('error : ' + saveErr);
                }
                else {
                    that.loadUploadedImages();
                }
            });
        };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"](uploaderOptions);
        this.uploader.onBuildItemForm = function (fileItem, form) {
            // Add Cloudinary's unsigned upload preset to the upload form
            form.append('upload_preset', _this.cloudinary.config().upload_preset);
            // Add built-in and custom tags for displaying the uploaded photo in the list
            var tags = 'angularimagegallery';
            if (_this.title) {
                form.append('context', "photo=" + _this.title);
                tags = "angularimagegallery," + _this.title;
            }
            form.append('tags', tags);
            form.append('file', fileItem);
            // Use default "withCredentials" value for CORS requests
            fileItem.withCredentials = false;
            return { fileItem: fileItem, form: form };
        };
        // Update model on completion of uploading a file
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            return upsertResponse({
                file: item.file,
                status: status,
                data: JSON.parse(response)
            });
        };
    };
    ManagerComponent.prototype.loadDB = function () {
        __WEBPACK_IMPORTED_MODULE_3__database__["a" /* DB */].loadDatabase({}, function (err) {
            if (err) {
                console.log();
            }
            else {
                console.log('db loaded');
            }
        });
    };
    ManagerComponent.prototype.loadUploadedImages = function () {
        var imageCollection = __WEBPACK_IMPORTED_MODULE_3__database__["a" /* DB */].getCollection('imagegallery');
        if (imageCollection) {
            this.imageDataArray = imageCollection.find();
        }
    };
    ManagerComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    return ManagerComponent;
}());
ManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manager',
        template: __webpack_require__("../../../../../src/app/manager/manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manager/manager.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__cloudinary_angular_4_x__["Cloudinary"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cloudinary_angular_4_x__["Cloudinary"]) === "function" && _a || Object])
], ManagerComponent);

var _a;
//# sourceMappingURL=manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudinarySettings; });
var CloudinarySettings = {
    cloud_name: 'korporal1',
    upload_preset: 'wrxvdftw'
};
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map