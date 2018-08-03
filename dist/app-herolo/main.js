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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _main_page_card_book_card_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/card-book/card-book.component */ "./src/app/main-page/card-book/card-book.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/notification.service */ "./src/services/notification.service.ts");
/* harmony import */ var _modal_delete_modal_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal-delete/modal-delete.component */ "./src/app/modal-delete/modal-delete.component.ts");
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
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _main_page_card_book_card_book_component__WEBPACK_IMPORTED_MODULE_8__["CardBookComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _modal_delete_modal_delete_component__WEBPACK_IMPORTED_MODULE_14__["ModalDeleteComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_LOCALE"], useValue: 'he-HE' }, _services_notification_service__WEBPACK_IMPORTED_MODULE_13__["Notification"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-page/card-book/card-book.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-page/card-book/card-book.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let book of books\" class=\"col2s30 smw100 mb20 myCard\">\r\n    <div class=\"bgcr p10 inrowf\">\r\n      <h4 class=\"hfs30 fw-medium ctw\">{{ book[\"Book Title\"]}}</h4>\r\n      <span >\r\n          <mat-icon (click)=\"editBook(book)\" class=\"cp\">more_vert</mat-icon>\r\n          <mat-icon (click)=\"removeBook(book)\" class=\"cp\">remove</mat-icon>\r\n      </span>\r\n    \r\n    </div>\r\n    <div class=\"flex fdc p10\">\r\n      <span class=\"sflex w100\">\r\n          <h5 class=\"hfs20 ctb mr10 fw-medium\">ID:</h5>\r\n          <h6 class=\"hfs20 ctn\">{{ book.id }}</h6>\r\n      </span>\r\n      <span class=\"sflex w100\">\r\n          <h5 class=\"hfs20 ctb mr10 fw-medium\">Book Author:</h5>\r\n          <h6 class=\"hfs20 ctn\">{{ book['Author Name'] }}</h6>\r\n      </span>\r\n      <span class=\"sflex w100\">\r\n          <h5 class=\"hfs20 ctb mr10 fw-medium\">Published Date:</h5>\r\n          <h6 class=\"hfs20 ctn\">{{ book['Published Date'] | date: \"dd/MM/yyyy\" }}</h6>\r\n      </span>\r\n      \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/card-book/card-book.component.less":
/*!**************************************************************!*\
  !*** ./src/app/main-page/card-book/card-book.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/card-book/card-book.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-page/card-book/card-book.component.ts ***!
  \************************************************************/
/*! exports provided: CardBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBookComponent", function() { return CardBookComponent; });
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

var CardBookComponent = /** @class */ (function () {
    function CardBookComponent() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardBookComponent.prototype.ngOnInit = function () {
    };
    /**
     * send event to edit a book
     * @param book
     */
    CardBookComponent.prototype.editBook = function (book) {
        this.edit.emit({ book: book });
    };
    /**
     * send event to remove a book
     * @param book
     */
    CardBookComponent.prototype.removeBook = function (book) {
        this.remove.emit({ book: book });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardBookComponent.prototype, "books", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardBookComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardBookComponent.prototype, "remove", void 0);
    CardBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-book',
            template: __webpack_require__(/*! ./card-book.component.html */ "./src/app/main-page/card-book/card-book.component.html"),
            styles: [__webpack_require__(/*! ./card-book.component.less */ "./src/app/main-page/card-book/card-book.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], CardBookComponent);
    return CardBookComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container c12 vp50\" id=\"mainPage\">\r\n    <h1 class=\"hfs45 title mb40\">Books <mat-icon class=\"cp\" (click)=\"newBook()\">add</mat-icon></h1>\r\n      <app-card-book [books]=\"books\" class=\"w100 inrowf\" (edit)=\"editBook($event)\" (remove)=\"removeBook($event)\"></app-card-book>\r\n      <app-modal \r\n        [book]=\"selectedBook\"\r\n        [books]=\"books\"\r\n        [isOpen]=\"isOpen\"\r\n        *ngIf=\"isOpen\"\r\n        (saveChanges)=\"saveChanges($event)\"\r\n        (close)=\"closeModal($event)\"\r\n        (addBook)=\"addNewBook($event)\"\r\n      ></app-modal>\r\n      <app-modal-delete (removeMe)=\"removeMe($event)\"\r\n        (close)=\"closeModal($event)\"\r\n        [book]=\"selectedBook\"\r\n        [isOpenDelete]=\"isOpenDelete\"\r\n        *ngIf=\"isOpenDelete\"></app-modal-delete>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/main-page.component.less":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/services/api.service.ts");
/* harmony import */ var _objects_book_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/book.object */ "./src/objects/book.object.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(api) {
        this.api = api;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOpen = false;
        this.isOpenDelete = false;
        this.load = true;
        if (!this.books) {
            this.api.getList().subscribe(function (response) {
                _this.books = JSON.parse(response['_body']);
                _this.displayBooks();
            }, function (error) { return console.log(error); });
        }
        else {
            this.load = false;
        }
    };
    /**
     * Save changes and edit the books list
     * @param change
     */
    MainPageComponent.prototype.saveChanges = function (change) {
        var _this = this;
        this.selectedBook = change;
        this.books.forEach(function (book, index) {
            if (book.id == _this.selectedBook.id) {
                _this.books[index] = _this.selectedBook;
            }
        });
    };
    /**
     * Add new book
     */
    MainPageComponent.prototype.newBook = function () {
        this.selectedBook = new _objects_book_object__WEBPACK_IMPORTED_MODULE_2__["Book"];
        this.isOpen = true;
    };
    /**
     * listen to the event and close the modal
     * @param event
     */
    MainPageComponent.prototype.closeModal = function (event) {
        this.isOpen = false;
        this.isOpenDelete = false;
    };
    /**
     * open remove modal
     * @param book
     */
    MainPageComponent.prototype.removeBook = function (book) {
        this.isOpenDelete = true;
        this.selectedBook = book.book;
    };
    /**
     * remove book from list
     * @param event
     */
    MainPageComponent.prototype.removeMe = function (event) {
        var _this = this;
        this.books.forEach(function (book, index) {
            if (book.id == event.book.id) {
                _this.books.splice(index, 1);
            }
        });
        this.isOpenDelete = false;
    };
    /**
     * Add new book to the list
     * @param book
     */
    MainPageComponent.prototype.addNewBook = function (book) {
        var id = this.books[this.books.length - 1].id;
        book = this.titleDesign(book);
        book.id = id + 1;
        this.books.push(book);
    };
    /**
     * displaying the books
     * and filtering the book title
     */
    MainPageComponent.prototype.displayBooks = function () {
        var _this = this;
        this.books = this.books.filter(function (book) {
            return _this.titleDesign(book);
        });
        this.load = false;
    };
    /**
     * Edit the book we selected
     * @param book - the book to edit
     */
    MainPageComponent.prototype.editBook = function (book) {
        this.selectedBook = book.book;
        this.selectedBook = this.titleDesign(this.selectedBook);
        this.isOpen = true;
    };
    /**
     * return filtered book title
     * @param book
     */
    MainPageComponent.prototype.titleDesign = function (book) {
        book["Book Title"] = book["Book Title"].replace(/[\W]+/g, "");
        book["Book Title"] = book["Book Title"].toLowerCase();
        book["Book Title"] = book["Book Title"].charAt(0).toUpperCase() + book["Book Title"].slice(1);
        return book;
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.less */ "./src/app/main-page/main-page.component.less")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/modal-delete/modal-delete.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modal-delete/modal-delete.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal delete\" [ngClass]=\"{open: isOpenDelete}\">\n  <div class=\"modalTitle relative\">\n    <h3 class=\"ctw hfs25\">{{ book[\"Book Title\"] }}</h3>\n    <mat-icon (click)=\"closeMe()\">close</mat-icon>\n  </div>\n  <div class=\"modalBody sflex aic jcc\">\n      <button type=\"button\" (click)=\"remove()\" class=\"stdButton green hfs20 fw-medium mr20\">Delete Book</button>\n      <button type=\"button\" (click)=\"closeMe()\" class=\"stdButton red hfs20 fw-medium\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal-delete/modal-delete.component.less":
/*!**********************************************************!*\
  !*** ./src/app/modal-delete/modal-delete.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal-delete/modal-delete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modal-delete/modal-delete.component.ts ***!
  \********************************************************/
/*! exports provided: ModalDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDeleteComponent", function() { return ModalDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_book_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/book.object */ "./src/objects/book.object.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ "./src/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalDeleteComponent = /** @class */ (function () {
    function ModalDeleteComponent(notification) {
        this.notification = notification;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalDeleteComponent.prototype.ngOnInit = function () {
    };
    /**
     * close the modal
     */
    ModalDeleteComponent.prototype.closeMe = function () {
        this.close.emit({ isOpenDelete: false });
    };
    /**
     * remove book
     */
    ModalDeleteComponent.prototype.remove = function () {
        this.removeMe.emit({ book: this.book });
        this.notification.success("Book Deleted");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _objects_book_object__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], ModalDeleteComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalDeleteComponent.prototype, "isOpenDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalDeleteComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalDeleteComponent.prototype, "removeMe", void 0);
    ModalDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-delete',
            template: __webpack_require__(/*! ./modal-delete.component.html */ "./src/app/modal-delete/modal-delete.component.html"),
            styles: [__webpack_require__(/*! ./modal-delete.component.less */ "./src/app/modal-delete/modal-delete.component.less")]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["Notification"]])
    ], ModalDeleteComponent);
    return ModalDeleteComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" [ngClass]=\"{open: isOpen}\">\n  <div class=\"modalTitle relative\">\n    <h3 class=\"ctw hfs25\" *ngIf=\"book['Book Title']\">{{ tempBook[\"Book Title\"] }}</h3>\n    <h3 class=\"ctw hfs25\" *ngIf=\"!book['Book Title']\">Add New Book</h3>    \n    <mat-icon (click)=\"closeMe()\">close</mat-icon>\n  </div>\n  <div class=\"modalBody\">\n    <form [formGroup]=\"BookForm\" class=\"mt20\" (ngSubmit)=\"save(BookForm)\">\n      <div class=\"w100 mb20\">\n          <mat-form-field>\n              <input matInput placeholder=\"Enter Book Title\" type=\"text\" formControlName=\"title\" [(ngModel)]=\"tempBook['Book Title']\">\n              <mat-error *ngIf=\"BookForm.get('title').hasError('required')\">Title Cant be empty</mat-error>\n          </mat-form-field>\n      </div>\n      <div class=\"w100 mb20\">\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" formControlName=\"date\" [(ngModel)]=\"tempBook['Published Date']\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"BookForm.get('date').hasError('required')\">Must have a valid date</mat-error>          \n        </mat-form-field>\n      </div>\n      <div class=\"w100 mb20\">\n        <mat-form-field>\n            <input matInput placeholder=\"Enter Book Author\" type=\"text\" formControlName=\"author\" [(ngModel)]=\"tempBook['Author Name']\">\n            <mat-error *ngIf=\"BookForm.get('author').hasError('required')\">Author Name cant be empty</mat-error>            \n        </mat-form-field>\n      </div>\n      <div class=\"w100 sflex jcc\">\n          <button type=\"submit\" class=\"stdButton green hfs20 fw-medium mr20\">\n            <span *ngIf=\"book['Book Title']\">Save Changes</span>\n            <span *ngIf=\"!book['Book Title']\">Add Book</span>\n          </button>\n          <button type=\"button\" (click)=\"closeMe()\" class=\"stdButton red hfs20 fw-medium\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/modal.component.less":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _objects_book_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/book.object */ "./src/objects/book.object.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "./src/services/notification.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalComponent = /** @class */ (function () {
    function ModalComponent(notification) {
        this.notification = notification;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addBook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.createForm();
        if (!this.book["Book Title"]) {
            this.book = new _objects_book_object__WEBPACK_IMPORTED_MODULE_2__["Book"];
            this.tempBook = __assign({}, this.book);
            this.flag = true;
        }
        else {
            this.flag = false;
            //parse it into new temp var to commit changes only if submit
            this.tempBook = __assign({}, this.book);
            this.createDate();
        }
    };
    /**
     * close the modal
     */
    ModalComponent.prototype.closeMe = function () {
        this.close.emit({ isOpen: false });
    };
    /**
     * create date from timestamp
     */
    ModalComponent.prototype.createDate = function () {
        this.tempBook['Published Date'] = new Date(this.tempBook['Published Date']);
    };
    ;
    /**
     *  Create form group and controls
     */
    ModalComponent.prototype.createForm = function () {
        this.BookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    /**
     * save changes and send to parent
     * @param form the form to valid
     */
    ModalComponent.prototype.save = function (form) {
        if (form.valid) {
            if (this.checkTitle(this.tempBook["Book Title"], this.tempBook.id)) {
                if (this.flag) {
                    this.addBook.emit(this.tempBook);
                    this.notification.success("Book Added!");
                }
                else {
                    this.notification.success("Saved Changes!");
                    this.saveChanges.emit(this.tempBook);
                }
                this.closeMe();
            }
            else {
                this.notification.error("Title exists");
            }
        }
    };
    /**
     * Check if title already exists
     * @param bookTitle
     * @param id
     */
    ModalComponent.prototype.checkTitle = function (bookTitle, id) {
        var result = true;
        this.books.forEach(function (book) {
            if (book["Book Title"] == bookTitle && book.id != id) {
                result = false;
                return;
            }
        });
        return result;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _objects_book_object__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], ModalComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ModalComponent.prototype, "books", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "saveChanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "addBook", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.less */ "./src/app/modal/modal.component.less")]
        }),
        __metadata("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["Notification"]])
    ], ModalComponent);
    return ModalComponent;
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

/***/ "./src/objects/book.object.ts":
/*!************************************!*\
  !*** ./src/objects/book.object.ts ***!
  \************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
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

var Book = /** @class */ (function () {
    function Book() {
    }
    Book = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Book);
    return Book;
}());



/***/ }),

/***/ "./src/services/api.service.ts":
/*!*************************************!*\
  !*** ./src/services/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * get the books list with http request
     */
    ApiService.prototype.getList = function () {
        return this.http.get('https://api.myjson.com/bins/l15qo');
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/services/notification.service.ts":
/*!**********************************************!*\
  !*** ./src/services/notification.service.ts ***!
  \**********************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Notification = /** @class */ (function () {
    function Notification() {
    }
    /**
     * @function success - Success notification
     */
    Notification.prototype.success = function (message) {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__("app-root").append("<div class='errorBox success inrowf'><div class='w100 sflex jcc aic'>" +
            message +
            "<img class='closeme' src=\"../assets/icons/Close.svg\" alt=''></div></div>");
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").addClass("show");
        }, 500);
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").removeClass("show");
        }, 6000);
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").remove();
        }, 6500);
        jquery__WEBPACK_IMPORTED_MODULE_1__("img.closeme").on("click", function () {
            _this.closeme();
        });
    };
    /**
     *
     * @param message - the message inside the notification
     *
     * @function error - Error notification
     */
    Notification.prototype.error = function (message) {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__("app-root").append("<div class='errorBox error inrowf'><div class='w100 sflex jcc aic'>" +
            "<span class='hfs15 sflex w100 aic smjcsb jcc'>" + message + "</span>" +
            "<img class='closeme' src=\"../assets/icons/Close.svg\" alt=''></div></div>");
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").addClass("show");
        }, 500);
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").removeClass("show");
        }, 6000);
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").remove();
        }, 6500);
        jquery__WEBPACK_IMPORTED_MODULE_1__("img.closeme").on("click", function () {
            _this.closeme();
        });
    };
    /**
     * @function closeme - close the error box popup
     */
    Notification.prototype.closeme = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").removeClass("show");
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".errorBox").remove();
        }, 500);
    };
    Notification = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Notification);
    return Notification;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\חני\Desktop\angularTest\HeroloBooks\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map