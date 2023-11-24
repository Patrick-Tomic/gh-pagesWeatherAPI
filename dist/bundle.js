"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  width: 100%;
  background-color: beige;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #008000;
  padding: 2vh;
  justify-content: space-between;
  display: flex;
}
header #sun {
  position: absolute;
  top: -7%;
  left: 13%;
}
header #title:hover {
  color: #FFD700;
  cursor: pointer;
}
header #title {
  color: white;
  font-size: 35px;
  top: -15%;
}
header .searchBar {
  margin-top: 30px;
}
header #searchLabel {
  color: white;
  font-size: 24px;
}
header #search {
  width: 20vw;
  height: 2vh;
}
header #search:hover {
  cursor: pointer;
}
header #enter {
  border: none;
  width: 5vw;
  height: 3vh;
  border-radius: 5px;
  color: white;
  background-color: #007FFF;
}
header #enter:hover {
  background-color: #17B169;
  cursor: pointer;
}
header #random:hover {
  background-color: #17B169;
  cursor: pointer;
}
header #random {
  border: none;
  width: 5vw;
  height: 3vh;
  border-radius: 5px;
  color: white;
  background-color: #007FFF;
}
header .sidebar {
  background: #008000;
  border: none;
}

#mid #cardButtons {
  position: absolute;
  top: 73%;
  left: 47%;
}
#mid #cardButtons button {
  margin-left: 3px;
  background-color: #007FFF;
  width: 1vw;
  height: 2vh;
  border-radius: 50%;
  border: none;
}
#mid #cardButtons button:hover {
  background-color: #6CB4EE;
  cursor: pointer;
}
#mid #leftArrow:hover {
  cursor: pointer;
}
#mid #rightArrow:hover {
  cursor: pointer;
}
#mid #leftArrow {
  top: 40%;
  left: 20%;
  background-color: beige;
  position: absolute;
  padding: 0;
  border: none;
}
#mid #rightArrow {
  top: 40%;
  background-color: beige;
  left: 70%;
  position: absolute;
  padding: 0;
  border: none;
}
#mid #wrap {
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 25px -4px rgb(0, 0, 0);
  border-radius: 5px;
  border: 1px solid black;
}
#mid #wrap #content #divWrap {
  width: 28vw;
  transition: transform 1s ease-in;
  transform: translateX(0vw);
  display: flex;
}
#mid #wrap #content #divWrap #card {
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-width: 30vw;
  align-items: center;
  background-color: white;
  border: solid 1px black;
}
#mid #wrap #content #divWrap #card #tempBtn:hover {
  cursor: pointer;
}
#mid #wrap #content #divWrap #card #tempBtn {
  width: 80px;
  height: 34px;
  margin-top: 15px;
  border-radius: 20px;
  margin-left: 3vw;
}
#mid #wrap #content #divWrap #card #tempBtn #cardbtn {
  margin-right: 30px;
  transition: transform 1s ease-in-out;
}
#mid #wrap #content #divWrap #card #windBtn:hover {
  cursor: pointer;
}
#mid #wrap #content #divWrap #card #windBtn {
  width: 80px;
  height: 34px;
  margin-top: 15px;
  border-radius: 20px;
  margin-left: 3vw;
}
#mid #wrap #content #divWrap #card #windBtn #cardbtn2 {
  margin-right: 30px;
  transition: transform 1s ease-in-out;
}
#mid #wrap #content #divWrap #card .active {
  transform: translateX(2vw);
}
#mid #wrap #content #divWrap #card .label {
  display: flex;
}
#mid #wrap #content #divWrap #card .label .temp {
  margin-top: 12px;
}
#mid #wrap #content #divWrap #card .label p {
  margin-left: 2vw;
  font-size: 20px;
  font-weight: bold;
}
#mid #wrap #content #divWrap #card .label label {
  font-size: 24px;
  margin-top: 15px;
  margin-right: 1vw;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,WAAA;EACA,uBAAA;EACA,aAAA;EACA,sBAAA;AADJ;;AAKA;EAEI,yBAAA;EACA,YAAA;EACA,8BAAA;EACA,aAAA;AAHJ;AAII;EACI,kBAAA;EACA,QAAA;EACA,SAAA;AAFR;AAII;EACI,cAAA;EACA,eAAA;AAFR;AAII;EAEI,YAAA;EACA,eAAA;EACA,SAAA;AAHR;AAKI;EACI,gBAAA;AAHR;AAKI;EACI,YAAA;EACA,eAAA;AAHR;AAKI;EACI,WAAA;EACA,WAAA;AAHR;AAMI;EACI,eAAA;AAJR;AAMI;EACI,YAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;AAJR;AAMI;EACI,yBAAA;EACA,eAAA;AAJR;AAMI;EACI,yBAAA;EACA,eAAA;AAJR;AAMI;EACI,YAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;AAJR;AAMK;EACG,mBAAA;EACA,YAAA;AAJR;;AASO;EAEC,kBAAA;EACA,QAAA;EACA,SAAA;AAPR;AAQQ;EACI,gBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;AANZ;AAQQ;EACI,yBAAA;EACA,eAAA;AANZ;AASI;EACI,eAAA;AAPR;AASI;EACI,eAAA;AAPR;AASI;EACI,QAAA;EACA,SAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AAPR;AASM;EACI,QAAA;EACA,uBAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AAPV;AAYI;EAEI,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,0CAAA;EAEA,kBAAA;EAGH,uBAAA;AAdL;AAmBS;EACE,WAAA;EACC,gCAAA;EACD,0BAAA;EAEC,aAAA;AAlBZ;AAoBa;EAEG,aAAA;EACA,sBAAA;EACA,YAAA;EACC,eAAA;EACD,mBAAA;EACC,uBAAA;EACA,uBAAA;AAnBjB;AAoBiB;EACA,eAAA;AAlBjB;AAoBiB;EACG,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AAlBpB;AAmBoB;EACI,kBAAA;EACA,oCAAA;AAjBxB;AAoBiB;EACG,eAAA;AAlBpB;AAoBiB;EACG,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AAlBpB;AAmBoB;EACI,kBAAA;EACA,oCAAA;AAjBxB;AAoBiB;EAEG,0BAAA;AAnBpB;AAqBiB;EAWI,aAAA;AA7BrB;AAmBoB;EACI,gBAAA;AAjBxB;AAoBqB;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;AAlBzB;AAsBqB;EACI,eAAA;EACD,gBAAA;EACA,iBAAA;AApBxB","sourcesContent":[" \n$width:350px;\nbody{\n    margin: 0;\n    width: 100%;\n    background-color: beige;\n    display: flex;\n    flex-direction: column;\n     \n    \n}\nheader{\n \n    background-color: #008000;   \n    padding: 2vh;\n    justify-content: space-between;\n    display: flex;\n    #sun{\n        position:absolute;\n        top: -7%;\n        left: 13%;\n    }\n    #title:hover{\n        color: #FFD700;\n        cursor: pointer;\n    }\n    #title{\n        \n        color: white;\n        font-size: 35px;\n        top: -15%;\n    }\n    .searchBar{\n        margin-top: 30px;\n    }\n    #searchLabel{\n        color: white;\n        font-size: 24px;\n    }\n    #search{\n        width: 20vw;\n        height: 2vh;\n         \n    }\n    #search:hover{\n        cursor: pointer;\n    }\n    #enter{\n        border: none;\n        width: 5vw;\n        height: 3vh;\n        border-radius: 5px;\n        color: white;\n        background-color: #007FFF;\n    }\n    #enter:hover{\n        background-color: #17B169;\n        cursor: pointer;\n    }\n    #random:hover{\n        background-color: #17B169;\n        cursor: pointer;\n    }\n    #random{\n        border: none;\n        width: 5vw;\n        height: 3vh;\n        border-radius: 5px;\n        color: white;\n        background-color: #007FFF;\n    }\n     .sidebar{\n        background: #008000;\n        border: none;\n     }\n}\n#mid{\n    \n       #cardButtons{\n        \n        position: absolute;\n        top: 73%;\n        left: 47%;\n        button{\n            margin-left: 3px;\n            background-color: #007FFF;\n            width: 1vw;\n            height: 2vh;\n            border-radius: 50%;\n            border: none;\n        }\n        button:hover{\n            background-color: #6CB4EE;\n            cursor: pointer;\n        }\n       }\n    #leftArrow:hover{\n        cursor: pointer;\n    }\n    #rightArrow:hover{\n        cursor: pointer;\n    }\n    #leftArrow{\n        top: 40%;\n        left: 20%;\n        background-color: beige;\n        position: absolute;\n        padding: 0;\n        border: none;\n      }\n      #rightArrow{\n          top: 40%;\n          background-color: beige;\n          left: 70%;\n          position: absolute;\n          padding: 0;\n          border: none;\n      }\n        \n      \n \n    #wrap{\n      \n        overflow: hidden;         \n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%,-50%);\n        box-shadow: 0px 4px 25px -4px rgba(0,0,0,1);\n        //animation: ani 5s infinite ease-in-out;\n        border-radius: 5px;\n     \n      \n     border: 1px solid black;\n     \n     #content{\n      \n       \n         #divWrap{ \n           width: 28vw;\n            transition: transform 1s ease-in;\n           transform: translateX(0vw);\n              \n            display: flex;\n           \n             #card{\n                 \n                display: flex;\n                flex-direction: column;\n                padding: 5px;\n                 min-width: 30vw;\n                align-items: center;\n                 background-color: white;\n                 border: solid 1px black; \n                 #tempBtn:hover{ \n                 cursor: pointer;\n                 }\n                 #tempBtn{\n                    width: 80px;\n                    height:34px;\n                    margin-top: 15px;\n                    border-radius:20px ;\n                    margin-left: 3vw;\n                    #cardbtn{\n                        margin-right: 30px;\n                        transition: transform 1s ease-in-out;\n                    }\n                 }\n                 #windBtn:hover{\n                    cursor: pointer;\n                 }\n                 #windBtn{\n                    width: 80px;\n                    height:34px;\n                    margin-top: 15px;\n                    border-radius:20px ;\n                    margin-left: 3vw;\n                    #cardbtn2{\n                        margin-right: 30px;\n                        transition: transform 1s ease-in-out;\n                 }\n                }\n                 .active{\n                  \n                    transform: translateX(2vw);\n                 }\n                 .label{\n                    .temp{\n                        margin-top: 12px;\n                         \n                    }\n                     p{\n                         margin-left: 2vw;\n                         font-size: 20px;\n                         font-weight: bold;\n                          \n                     }\n                     display: flex;\n                     label{\n                         font-size: 24px;\n                        margin-top: 15px;\n                        margin-right: 1vw;\n                         \n                     }\n                   \n\n                 }\n             }\n         }\n       \n     }\n    \n      \n      \n     \n }\n \n}\n \n "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ "./src/random.js");
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrieve */ "./src/retrieve.js");



let count = 0
let vw =32
const title = document.getElementById('title')
const cardBtns = document.getElementById('cardButtons')
const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
const content = document.getElementById('content');   
const enter = document.getElementById('enter');
const search = document.getElementById('search');
const randomBtn = document.getElementById('random')
randomBtn.addEventListener('click',()=>{
  const divWrap = document.getElementById('divWrap')
  clearInterval(interval)
  let count = divWrap.childElementCount
  console.log(count)
  if(divWrap.childElementCount >=1){
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
    leftArrow.style.visibility = 'hidden'
    rightArrow.style.visibility = 'hidden'
    cardBtns.style.visibility = 'hidden'
  }  
   (0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])());
})
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
search.addEventListener('keypress',(e)=>{
  if(e.key === 'Enter'){
    e.preventDefault()
    enter.click()
  }
})

 enter.addEventListener('click',(e)=>{
  
  const divWrap = document.getElementById('divWrap')
  clearInterval(interval)
  let count = divWrap.childElementCount
  console.log(count)
  if(divWrap.childElementCount >=1){
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
    leftArrow.style.visibility = 'hidden'
    rightArrow.style.visibility = 'hidden'
    cardBtns.style.visibility = 'hidden'
  }  
   (0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)(search.value);
    search.value = ''

 });
 
 leftArrow.addEventListener('click', ()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
   if(count == 0){
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` 
   }else{
    count++
    vw = count*vw
    console.log(vw)
    divWrap.style.transform = `translateX(${vw}vw)` 
   }
   clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
 })
 rightArrow.addEventListener('click',()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
  if(count == -4){
    count = 0
    vw = vw * count
    divWrap.style.transform = `translateX(${vw}vw)` 
  }else{
    count--
  vw = vw * count
  console.log(vw)
  divWrap.style.transform = `translateX(${vw}vw)` 
  }
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
 })
 const card1 = document.querySelector('.card1')
 const card2 = document.querySelector('.card2')
 const card3 = document.querySelector('.card3')
 const card4 = document.querySelector('.card4')
 const card5 = document.querySelector('.card5')
 card1.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(0vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = 0
 })
 card2.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-31vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -1
 })
 card3.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-62vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -2
 })
 card4.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-92vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -3
 })
 card5.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-123vw)'
  clearInterval(interval)
  interval = setInterval(()=>{
    const divWrap = document.getElementById('divWrap')
      let vw = 31
      if(count == -4){ count = 0
        vw = vw*count
        divWrap.style.transform = `translateX(${vw}vw)` 
      }
      else {count--
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` }
      const enter = document.getElementById('enter');
       
   },5000)
   count = -4
 })
 var interval = setInterval(()=>{
  const divWrap = document.getElementById('divWrap')
    let vw = 31
    if(count == -4){ count = 0
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` 
    }
    else {count--
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` }
    const enter = document.getElementById('enter');
     
 },5000)
 
 title.addEventListener('click',()=>{
   clearInterval(interval)
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
  leftArrow.style.visibility = 'visible'
  rightArrow.style.visibility = 'visible'
  cardBtns.style.visibility = 'visible'
  ;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
;(0,_retrieve__WEBPACK_IMPORTED_MODULE_2__.getWeather)((0,_random__WEBPACK_IMPORTED_MODULE_1__["default"])())
interval = setInterval(()=>{
  const divWrap = document.getElementById('divWrap')
    let vw = 31
    if(count == -4){ count = 0
      vw = vw*count
      divWrap.style.transform = `translateX(${vw}vw)` 
    }
    else {count--
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` }
    const enter = document.getElementById('enter');
     
 },5000)
 }
)
 
 


/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RandomCity)
/* harmony export */ });


function RandomCity(){
    const cities = ['Tokyo','Delhi','Shanghai','Los Angeles','São Paulo','Mexico City','Cairo','Dhaka','Mumbai','Beijing','Osaka','Washington D.C','Tampa','Denver','Toranto','Tuzla','London','New York','New Jersey','Lima','Ho Chi Minh','Jinan','Baghdad','Bogota','Bengaluru','Paris','Vienna','Sydney','Buenos Aires','Santiago','Tehran' ]
    const cityLength = cities.length
    return cities[Math.floor(Math.random()*cityLength)]
}

/***/ }),

/***/ "./src/retrieve.js":
/*!*************************!*\
  !*** ./src/retrieve.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildWeather: () => (/* binding */ buildWeather),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
class cityWeather{
    constructor(city,state, country, tempF,tempC,condition, windMPH,windKPH){
        this.city = city;
        this.state = state;
        this.country = country;
        this.tempF = tempF;
        this.tempC = tempC;
        this.condition =condition;
        this.windMPH = windMPH;
        this.windKPH = windKPH;
    }
}
async function getWeather(city){     
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=298bf6c3b43b4a55875191548230211&q=${city}`,{mode:'cors'});
    const data = await response.json();
    console.log(data)
    const object = new cityWeather(data.location.name,data.location.region,data.location.country,data.current.temp_f,data.current.temp_c,data.current.condition.text,data.current.wind_mph,data.current.wind_kph);
    console.log(object);
    buildWeather(object);
    }catch(err){
        alert('Not a real city');
        
    }
     
  
}
function buildWeather(object){
   
     const content = document.getElementById('content');
    const wrapper = document.getElementById('divWrap')
    const div = document.createElement('div');
    div.setAttribute('id','card');
   
    for(let i = 0;i<8;i++){
        const container = document.createElement('div');
        const btn = document.createElement('button')
                btn.innerHTML = '<svg id="cardbtn" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#326BFF"/></svg>'
                const butn = document.createElement('button')
                butn.innerHTML = '<svg id="cardbtn2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#326BFF"/></svg>'
        container.classList.add('label');
        const label = document.createElement('label');
        const p = document.createElement('p');
       
         
        
        
        switch(i){
            case 0:
                const h2 = document.createElement('h2');   
                h2.setAttribute('name','city');
                label.setAttribute('for','city');
                label.innerHTML = 'City: ';
                h2.innerHTML = object.city;
                container.appendChild(label);
                container.appendChild(h2);
               div.appendChild(container);
                break;
            case 1:
                if(object.country == 'United States of America'){
                    const h3 = document.createElement('h3');
                    label.setAttribute('for','state');
                    h3.setAttribute('name','state');
                    label.setAttribute('class','state')
                    h3.innerHTML = object.state;
                    label.innerHTML = 'State:';
                    container.appendChild(label);
                    container.appendChild(h3);
                    div.appendChild(container);
                    break;
                }else break;
            case 2:
                const h4 = document.createElement('h3');
                label.setAttribute('for','country');
                label.setAttribute('class','country')
                h4.setAttribute('name','country');
                h4.innerHTML = object.country;
                label.innerHTML = 'Country:';
                container.appendChild(label);
                container.appendChild(h4);
                div.appendChild(container);
                break;
            case 3:
              
                p.setAttribute('name','F');
                label.setAttribute('for','F');
                label.setAttribute('class','temp')
                btn.setAttribute('id','tempBtn')
                btn.addEventListener('click',()=>{
                    const svg = document.getElementById('cardbtn')
                    if(svg.hasAttribute('class','active')){
                        svg.setAttribute('style','transform:translateX(0vw);')
                        svg.removeAttribute('class','active')
                        p.innerHTML = object.tempF;
                        label.innerHTML = 'F<sup>o</sup>'
                    }else{
                        svg.setAttribute('class','active')
                       svg.setAttribute('style','transform:translateX(2vw);')
                       p.innerHTML = object.tempC;
                       label.innerHTML = 'C<sup>o</sup>'
                    }
                  })
       
                p.innerHTML = object.tempF;
                label.innerHTML = 'F<sup>o</sup>'
                container.appendChild(label);
                container.appendChild(p);
                if(wrapper.childElementCount==0){
                container.appendChild(btn)}
                div.appendChild(container);
                break;
            case 4:
                
                break;
                 
            case 5:
                p.setAttribute('name','condition');
                label.setAttribute('for','condition');
                p.innerHTML = object.condition;
                label.innerHTML = 'Condition:';
                container.appendChild(label);
                container.appendChild(p);
                div.appendChild(container);
                break;
            case 6:
                
                break;
            case 7:
                p.setAttribute('name','mph');
                label.setAttribute('for','mph');
                p.innerHTML = object.windMPH;
                butn.setAttribute('id','windBtn')
              
               butn.addEventListener('click',()=>{
                    const svg2 = document.getElementById('cardbtn2')
                    if(svg2.hasAttribute('class','active')){
                        svg2.setAttribute('style','transform:translateX(0vw);')
                        svg2.removeAttribute('class','active')
                        label.innerHTML = 'Wind MPH'
                        p.innerHTML = object.windMPH
                        
                    }else{
                        svg2.setAttribute('class','active')
                       svg2.setAttribute('style','transform:translateX(2vw);')
                       label.innerHTML = "Wind KPH"
                        p.innerHTML = object.windKPH
                    }
                  })
                  
                label.innerHTML = 'Wind MPH:';
                container.appendChild(label);
                container.appendChild(p);
                if(wrapper.childElementCount==0){
                container.appendChild(butn)}
                div.appendChild(container);
                break;
        }
    }

    wrapper.appendChild(div);
    content.appendChild(wrapper);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcs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cUJBQXFCO0FBQ3JCO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9yZXRyaWV2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xuICBwYWRkaW5nOiAydmg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciAjc3VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03JTtcbiAgbGVmdDogMTMlO1xufVxuaGVhZGVyICN0aXRsZTpob3ZlciB7XG4gIGNvbG9yOiAjRkZENzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgI3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHRvcDogLTE1JTtcbn1cbmhlYWRlciAuc2VhcmNoQmFyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmhlYWRlciAjc2VhcmNoTGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmhlYWRlciAjc2VhcmNoIHtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogMnZoO1xufVxuaGVhZGVyICNzZWFyY2g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgI2VudGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNXZ3O1xuICBoZWlnaHQ6IDN2aDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XG59XG5oZWFkZXIgI2VudGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3QjE2OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyICNyYW5kb206aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdCMTY5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgI3JhbmRvbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDV2dztcbiAgaGVpZ2h0OiAzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3RkZGO1xufVxuaGVhZGVyIC5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogIzAwODAwMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jbWlkICNjYXJkQnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MyU7XG4gIGxlZnQ6IDQ3JTtcbn1cbiNtaWQgI2NhcmRCdXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdGRkY7XG4gIHdpZHRoOiAxdnc7XG4gIGhlaWdodDogMnZoO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNtaWQgI2NhcmRCdXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Q0I0RUU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtaWQgI2xlZnRBcnJvdzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtaWQgI3JpZ2h0QXJyb3c6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbWlkICNsZWZ0QXJyb3cge1xuICB0b3A6IDQwJTtcbiAgbGVmdDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4jbWlkICNyaWdodEFycm93IHtcbiAgdG9wOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBsZWZ0OiA3MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuI21pZCAjd3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjVweCAtNHB4IHJnYigwLCAwLCAwKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiNtaWQgI3dyYXAgI2NvbnRlbnQgI2RpdldyYXAge1xuICB3aWR0aDogMjh2dztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAzMHZ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN0ZW1wQnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCAjdGVtcEJ0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN0ZW1wQnRuICNjYXJkYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN3aW5kQnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCAjd2luZEJ0biB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzdnc7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkICN3aW5kQnRuICNjYXJkYnRuMiB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xufVxuI21pZCAjd3JhcCAjY29udGVudCAjZGl2V3JhcCAjY2FyZCAuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJ2dyk7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkIC5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkIC5sYWJlbCAudGVtcCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4jbWlkICN3cmFwICNjb250ZW50ICNkaXZXcmFwICNjYXJkIC5sYWJlbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNtaWQgI3dyYXAgI2NvbnRlbnQgI2RpdldyYXAgI2NhcmQgLmxhYmVsIGxhYmVsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUtBO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBSEo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFGUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGUjtBQUlJO0VBRUksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSFI7QUFLSTtFQUNJLGdCQUFBO0FBSFI7QUFLSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBSFI7QUFLSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBSFI7QUFNSTtFQUNJLGVBQUE7QUFKUjtBQU1JO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFKUjtBQU1JO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBSlI7QUFNSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUpSO0FBTUk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUpSO0FBTUs7RUFDRyxtQkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFTTztFQUVDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFQUjtBQVFRO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTlo7QUFRUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQU5aO0FBU0k7RUFDSSxlQUFBO0FBUFI7QUFTSTtFQUNJLGVBQUE7QUFQUjtBQVNJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQUjtBQVNNO0VBQ0ksUUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQVjtBQVlJO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtFQUVBLGtCQUFBO0VBR0gsdUJBQUE7QUFkTDtBQW1CUztFQUNFLFdBQUE7RUFDQyxnQ0FBQTtFQUNELDBCQUFBO0VBRUMsYUFBQTtBQWxCWjtBQW9CYTtFQUVHLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQyxlQUFBO0VBQ0QsbUJBQUE7RUFDQyx1QkFBQTtFQUNBLHVCQUFBO0FBbkJqQjtBQW9CaUI7RUFDQSxlQUFBO0FBbEJqQjtBQW9CaUI7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWxCcEI7QUFtQm9CO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBQWpCeEI7QUFvQmlCO0VBQ0csZUFBQTtBQWxCcEI7QUFvQmlCO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFsQnBCO0FBbUJvQjtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QUFqQnhCO0FBb0JpQjtFQUVHLDBCQUFBO0FBbkJwQjtBQXFCaUI7RUFXSSxhQUFBO0FBN0JyQjtBQW1Cb0I7RUFDSSxnQkFBQTtBQWpCeEI7QUFvQnFCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFsQnpCO0FBc0JxQjtFQUNJLGVBQUE7RUFDRCxnQkFBQTtFQUNBLGlCQUFBO0FBcEJ4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgXFxuJHdpZHRoOjM1MHB4O1xcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgXFxuICAgIFxcbn1cXG5oZWFkZXJ7XFxuIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwOyAgIFxcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgI3N1bntcXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgdG9wOiAtNyU7XFxuICAgICAgICBsZWZ0OiAxMyU7XFxuICAgIH1cXG4gICAgI3RpdGxlOmhvdmVye1xcbiAgICAgICAgY29sb3I6ICNGRkQ3MDA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgI3RpdGxle1xcbiAgICAgICAgXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICB0b3A6IC0xNSU7XFxuICAgIH1cXG4gICAgLnNlYXJjaEJhcntcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIH1cXG4gICAgI3NlYXJjaExhYmVse1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB9XFxuICAgICNzZWFyY2h7XFxuICAgICAgICB3aWR0aDogMjB2dztcXG4gICAgICAgIGhlaWdodDogMnZoO1xcbiAgICAgICAgIFxcbiAgICB9XFxuICAgICNzZWFyY2g6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgI2VudGVye1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDV2dztcXG4gICAgICAgIGhlaWdodDogM3ZoO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZGRjtcXG4gICAgfVxcbiAgICAjZW50ZXI6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdCMTY5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgICNyYW5kb206aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdCMTY5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgICNyYW5kb217XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB3aWR0aDogNXZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzdmg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3RkZGO1xcbiAgICB9XFxuICAgICAuc2lkZWJhcntcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDgwMDA7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICB9XFxufVxcbiNtaWR7XFxuICAgIFxcbiAgICAgICAjY2FyZEJ1dHRvbnN7XFxuICAgICAgICBcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNzMlO1xcbiAgICAgICAgbGVmdDogNDclO1xcbiAgICAgICAgYnV0dG9ue1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0ZGRjtcXG4gICAgICAgICAgICB3aWR0aDogMXZ3O1xcbiAgICAgICAgICAgIGhlaWdodDogMnZoO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICBidXR0b246aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZDQjRFRTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgIH1cXG4gICAgI2xlZnRBcnJvdzpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAjcmlnaHRBcnJvdzpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAjbGVmdEFycm93e1xcbiAgICAgICAgdG9wOiA0MCU7XFxuICAgICAgICBsZWZ0OiAyMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgICNyaWdodEFycm93e1xcbiAgICAgICAgICB0b3A6IDQwJTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgICAgICAgIGxlZnQ6IDcwJTtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgXFxuIFxcbiAgICAjd3JhcHtcXG4gICAgICBcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICAgXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDI1cHggLTRweCByZ2JhKDAsMCwwLDEpO1xcbiAgICAgICAgLy9hbmltYXRpb246IGFuaSA1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgIFxcbiAgICAgIFxcbiAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICBcXG4gICAgICNjb250ZW50e1xcbiAgICAgIFxcbiAgICAgICBcXG4gICAgICAgICAjZGl2V3JhcHsgXFxuICAgICAgICAgICB3aWR0aDogMjh2dztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbjtcXG4gICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgICAjY2FyZHtcXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwdnc7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyBcXG4gICAgICAgICAgICAgICAgICN0ZW1wQnRuOmhvdmVyeyBcXG4gICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICN0ZW1wQnRue1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzRweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHggO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgICAgICAgICAgICAgICNjYXJkYnRue1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAjd2luZEJ0bjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICN3aW5kQnRue1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzRweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHggO1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gICAgICAgICAgICAgICAgICAgICNjYXJkYnRuMntcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAuYWN0aXZle1xcbiAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJ2dyk7XFxuICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAubGFiZWx7XFxuICAgICAgICAgICAgICAgICAgICAudGVtcHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWx7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgIFxcblxcbiAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICB9XFxuICAgICAgICAgfVxcbiAgICAgICBcXG4gICAgIH1cXG4gICAgXFxuICAgICAgXFxuICAgICAgXFxuICAgICBcXG4gfVxcbiBcXG59XFxuIFxcbiBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBSYW5kb21DaXR5IGZyb20gJy4vcmFuZG9tJztcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL3JldHJpZXZlJztcbmxldCBjb3VudCA9IDBcbmxldCB2dyA9MzJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbmNvbnN0IGNhcmRCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRCdXR0b25zJylcbmNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0QXJyb3cnKVxuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodEFycm93JylcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAgIFxuY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKVxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICBjbGVhckludGVydmFsKGludGVydmFsKVxuICBsZXQgY291bnQgPSBkaXZXcmFwLmNoaWxkRWxlbWVudENvdW50XG4gIGNvbnNvbGUubG9nKGNvdW50KVxuICBpZihkaXZXcmFwLmNoaWxkRWxlbWVudENvdW50ID49MSl7XG4gICAgZGl2V3JhcC5yZW1vdmUoKVxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2V3JhcCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXG4gICAgbGVmdEFycm93LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIHJpZ2h0QXJyb3cuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgY2FyZEJ0bnMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gIH0gIFxuICAgZ2V0V2VhdGhlcihSYW5kb21DaXR5KCkpO1xufSlcbmdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKVxuZ2V0V2VhdGhlcihSYW5kb21DaXR5KCkpXG5nZXRXZWF0aGVyKFJhbmRvbUNpdHkoKSlcbmdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKVxuZ2V0V2VhdGhlcihSYW5kb21DaXR5KCkpXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLChlKT0+e1xuICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZW50ZXIuY2xpY2soKVxuICB9XG59KVxuXG4gZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICBcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgbGV0IGNvdW50ID0gZGl2V3JhcC5jaGlsZEVsZW1lbnRDb3VudFxuICBjb25zb2xlLmxvZyhjb3VudClcbiAgaWYoZGl2V3JhcC5jaGlsZEVsZW1lbnRDb3VudCA+PTEpe1xuICAgIGRpdldyYXAucmVtb3ZlKClcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdldyYXAnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGxlZnRBcnJvdy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICByaWdodEFycm93LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgIGNhcmRCdG5zLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICB9ICBcbiAgIGdldFdlYXRoZXIoc2VhcmNoLnZhbHVlKTtcbiAgICBzZWFyY2gudmFsdWUgPSAnJ1xuXG4gfSk7XG4gXG4gbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgdncgPSAzMVxuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgaWYoY291bnQgPT0gMCl7XG4gICAgdncgPSB2dypjb3VudFxuICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgfWVsc2V7XG4gICAgY291bnQrK1xuICAgIHZ3ID0gY291bnQqdndcbiAgICBjb25zb2xlLmxvZyh2dylcbiAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgIH1cbiAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgICAgbGV0IHZ3ID0gMzFcbiAgICAgIGlmKGNvdW50ID09IC00KXsgY291bnQgPSAwXG4gICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gICAgICB9XG4gICAgICBlbHNlIHtjb3VudC0tXG4gICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCB9XG4gICAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuICAgICAgIFxuICAgfSw1MDAwKVxuIH0pXG4gcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgdncgPSAzMVxuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICBpZihjb3VudCA9PSAtNCl7XG4gICAgY291bnQgPSAwXG4gICAgdncgPSB2dyAqIGNvdW50XG4gICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gIH1lbHNle1xuICAgIGNvdW50LS1cbiAgdncgPSB2dyAqIGNvdW50XG4gIGNvbnNvbGUubG9nKHZ3KVxuICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgfVxuICBjbGVhckludGVydmFsKGludGVydmFsKVxuICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICAgIGxldCB2dyA9IDMxXG4gICAgICBpZihjb3VudCA9PSAtNCl7IGNvdW50ID0gMFxuICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgICAgfVxuICAgICAgZWxzZSB7Y291bnQtLVxuICAgICAgdncgPSB2dypjb3VudFxuICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgfVxuICAgICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgICBcbiAgIH0sNTAwMClcbiB9KVxuIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQxJylcbiBjb25zdCBjYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkMicpXG4gY29uc3QgY2FyZDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZDMnKVxuIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQ0JylcbiBjb25zdCBjYXJkNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkNScpXG4gY2FyZDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDB2dyknXG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgICAgbGV0IHZ3ID0gMzFcbiAgICAgIGlmKGNvdW50ID09IC00KXsgY291bnQgPSAwXG4gICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gICAgICB9XG4gICAgICBlbHNlIHtjb3VudC0tXG4gICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCB9XG4gICAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuICAgICAgIFxuICAgfSw1MDAwKVxuICAgY291bnQgPSAwXG4gfSlcbiBjYXJkMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTMxdncpJ1xuICBjbGVhckludGVydmFsKGludGVydmFsKVxuICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgICAgIGxldCB2dyA9IDMxXG4gICAgICBpZihjb3VudCA9PSAtNCl7IGNvdW50ID0gMFxuICAgICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgICAgfVxuICAgICAgZWxzZSB7Y291bnQtLVxuICAgICAgdncgPSB2dypjb3VudFxuICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgfVxuICAgICAgY29uc3QgZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcbiAgICAgICBcbiAgIH0sNTAwMClcbiAgIGNvdW50ID0gLTFcbiB9KVxuIGNhcmQzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgY29uc3QgZGl2V3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZXcmFwJylcbiAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNjJ2dyknXG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgICAgbGV0IHZ3ID0gMzFcbiAgICAgIGlmKGNvdW50ID09IC00KXsgY291bnQgPSAwXG4gICAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgICAgZGl2V3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Z3fXZ3KWAgXG4gICAgICB9XG4gICAgICBlbHNlIHtjb3VudC0tXG4gICAgICB2dyA9IHZ3KmNvdW50XG4gICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCB9XG4gICAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuICAgICAgIFxuICAgfSw1MDAwKVxuICAgY291bnQgPSAtMlxuIH0pXG4gY2FyZDQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC05MnZ3KSdcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gICAgICBsZXQgdncgPSAzMVxuICAgICAgaWYoY291bnQgPT0gLTQpeyBjb3VudCA9IDBcbiAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgICAgIH1cbiAgICAgIGVsc2Uge2NvdW50LS1cbiAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIH1cbiAgICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJyk7XG4gICAgICAgXG4gICB9LDUwMDApXG4gICBjb3VudCA9IC0zXG4gfSlcbiBjYXJkNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEyM3Z3KSdcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgIGNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V3JhcCcpXG4gICAgICBsZXQgdncgPSAzMVxuICAgICAgaWYoY291bnQgPT0gLTQpeyBjb3VudCA9IDBcbiAgICAgICAgdncgPSB2dypjb3VudFxuICAgICAgICBkaXZXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dnd9dncpYCBcbiAgICAgIH1cbiAgICAgIGVsc2Uge2NvdW50LS1cbiAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIH1cbiAgICAgIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJyk7XG4gICAgICAgXG4gICB9LDUwMDApXG4gICBjb3VudCA9IC00XG4gfSlcbiB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgIGxldCB2dyA9IDMxXG4gICAgaWYoY291bnQgPT0gLTQpeyBjb3VudCA9IDBcbiAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgIH1cbiAgICBlbHNlIHtjb3VudC0tXG4gICAgdncgPSB2dypjb3VudFxuICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIH1cbiAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuICAgICBcbiB9LDUwMDApXG4gXG4gdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgIGRpdldyYXAucmVtb3ZlKClcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdldyYXAnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICBsZWZ0QXJyb3cuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICByaWdodEFycm93LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgY2FyZEJ0bnMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICBnZXRXZWF0aGVyKFJhbmRvbUNpdHkoKSlcbmdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKVxuZ2V0V2VhdGhlcihSYW5kb21DaXR5KCkpXG5nZXRXZWF0aGVyKFJhbmRvbUNpdHkoKSlcbmdldFdlYXRoZXIoUmFuZG9tQ2l0eSgpKVxuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgIGxldCB2dyA9IDMxXG4gICAgaWYoY291bnQgPT0gLTQpeyBjb3VudCA9IDBcbiAgICAgIHZ3ID0gdncqY291bnRcbiAgICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIFxuICAgIH1cbiAgICBlbHNlIHtjb3VudC0tXG4gICAgdncgPSB2dypjb3VudFxuICAgIGRpdldyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2d312dylgIH1cbiAgICBjb25zdCBlbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuICAgICBcbiB9LDUwMDApXG4gfVxuKVxuIFxuIFxuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmRvbUNpdHkoKXtcbiAgICBjb25zdCBjaXRpZXMgPSBbJ1Rva3lvJywnRGVsaGknLCdTaGFuZ2hhaScsJ0xvcyBBbmdlbGVzJywnU8OjbyBQYXVsbycsJ01leGljbyBDaXR5JywnQ2Fpcm8nLCdEaGFrYScsJ011bWJhaScsJ0JlaWppbmcnLCdPc2FrYScsJ1dhc2hpbmd0b24gRC5DJywnVGFtcGEnLCdEZW52ZXInLCdUb3JhbnRvJywnVHV6bGEnLCdMb25kb24nLCdOZXcgWW9yaycsJ05ldyBKZXJzZXknLCdMaW1hJywnSG8gQ2hpIE1pbmgnLCdKaW5hbicsJ0JhZ2hkYWQnLCdCb2dvdGEnLCdCZW5nYWx1cnUnLCdQYXJpcycsJ1ZpZW5uYScsJ1N5ZG5leScsJ0J1ZW5vcyBBaXJlcycsJ1NhbnRpYWdvJywnVGVocmFuJyBdXG4gICAgY29uc3QgY2l0eUxlbmd0aCA9IGNpdGllcy5sZW5ndGhcbiAgICByZXR1cm4gY2l0aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpjaXR5TGVuZ3RoKV1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jYXNlLWRlY2xhcmF0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG5jbGFzcyBjaXR5V2VhdGhlcntcbiAgICBjb25zdHJ1Y3RvcihjaXR5LHN0YXRlLCBjb3VudHJ5LCB0ZW1wRix0ZW1wQyxjb25kaXRpb24sIHdpbmRNUEgsd2luZEtQSCl7XG4gICAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy50ZW1wRiA9IHRlbXBGO1xuICAgICAgICB0aGlzLnRlbXBDID0gdGVtcEM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID1jb25kaXRpb247XG4gICAgICAgIHRoaXMud2luZE1QSCA9IHdpbmRNUEg7XG4gICAgICAgIHRoaXMud2luZEtQSCA9IHdpbmRLUEg7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSl7ICAgICBcbiAgICB0cnl7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0yOThiZjZjM2I0M2I0YTU1ODc1MTkxNTQ4MjMwMjExJnE9JHtjaXR5fWAse21vZGU6J2NvcnMnfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnN0IG9iamVjdCA9IG5ldyBjaXR5V2VhdGhlcihkYXRhLmxvY2F0aW9uLm5hbWUsZGF0YS5sb2NhdGlvbi5yZWdpb24sZGF0YS5sb2NhdGlvbi5jb3VudHJ5LGRhdGEuY3VycmVudC50ZW1wX2YsZGF0YS5jdXJyZW50LnRlbXBfYyxkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsZGF0YS5jdXJyZW50LndpbmRfbXBoLGRhdGEuY3VycmVudC53aW5kX2twaCk7XG4gICAgY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICBidWlsZFdlYXRoZXIob2JqZWN0KTtcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgYWxlcnQoJ05vdCBhIHJlYWwgY2l0eScpO1xuICAgICAgICBcbiAgICB9XG4gICAgIFxuICBcbn1cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFdlYXRoZXIob2JqZWN0KXtcbiAgIFxuICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdldyYXAnKVxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FyZCcpO1xuICAgXG4gICAgZm9yKGxldCBpID0gMDtpPDg7aSsrKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9ICc8c3ZnIGlkPVwiY2FyZGJ0blwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4gPGNpcmNsZSBjeD1cIjE1XCIgY3k9XCIxNVwiIHI9XCIxNVwiIGZpbGw9XCIjMzI2QkZGXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgICBjb25zdCBidXRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBidXRuLmlubmVySFRNTCA9ICc8c3ZnIGlkPVwiY2FyZGJ0bjJcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMTVcIiBmaWxsPVwiIzMyNkJGRlwiLz48L3N2Zz4nXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgXG4gICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBzd2l0Y2goaSl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOyAgIFxuICAgICAgICAgICAgICAgIGgyLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NpdHknKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NpdHknKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnQ2l0eTogJztcbiAgICAgICAgICAgICAgICBoMi5pbm5lckhUTUwgPSBvYmplY3QuY2l0eTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMik7XG4gICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZihvYmplY3QuY291bnRyeSA9PSAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdzdGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBoMy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdzdGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc3RhdGUnKVxuICAgICAgICAgICAgICAgICAgICBoMy5pbm5lckhUTUwgPSBvYmplY3Quc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdTdGF0ZTonO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfWVsc2UgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnY291bnRyeScpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb3VudHJ5JylcbiAgICAgICAgICAgICAgICBoNC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjb3VudHJ5Jyk7XG4gICAgICAgICAgICAgICAgaDQuaW5uZXJIVE1MID0gb2JqZWN0LmNvdW50cnk7XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0NvdW50cnk6JztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoNCk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKCduYW1lJywnRicpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnRicpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0ZW1wJylcbiAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsJ3RlbXBCdG4nKVxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRidG4nKVxuICAgICAgICAgICAgICAgICAgICBpZihzdmcuaGFzQXR0cmlidXRlKCdjbGFzcycsJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndHJhbnNmb3JtOnRyYW5zbGF0ZVgoMHZ3KTsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnLCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBvYmplY3QudGVtcEY7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRjxzdXA+bzwvc3VwPidcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndHJhbnNmb3JtOnRyYW5zbGF0ZVgoMnZ3KTsnKVxuICAgICAgICAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IG9iamVjdC50ZW1wQztcbiAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0M8c3VwPm88L3N1cD4nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBvYmplY3QudGVtcEY7XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0Y8c3VwPm88L3N1cD4nXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgICAgICAgICAgaWYod3JhcHBlci5jaGlsZEVsZW1lbnRDb3VudD09MCl7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bil9XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKCduYW1lJywnY29uZGl0aW9uJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdjb25kaXRpb24nKTtcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IG9iamVjdC5jb25kaXRpb247XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0NvbmRpdGlvbjonO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKCduYW1lJywnbXBoJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdtcGgnKTtcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IG9iamVjdC53aW5kTVBIO1xuICAgICAgICAgICAgICAgIGJ1dG4uc2V0QXR0cmlidXRlKCdpZCcsJ3dpbmRCdG4nKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGJ1dG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN2ZzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZGJ0bjInKVxuICAgICAgICAgICAgICAgICAgICBpZihzdmcyLmhhc0F0dHJpYnV0ZSgnY2xhc3MnLCdhY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd0cmFuc2Zvcm06dHJhbnNsYXRlWCgwdncpOycpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcyLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnLCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ1dpbmQgTVBIJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBvYmplY3Qud2luZE1QSFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgc3ZnMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndHJhbnNmb3JtOnRyYW5zbGF0ZVgoMnZ3KTsnKVxuICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBcIldpbmQgS1BIXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gb2JqZWN0LndpbmRLUEhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdXaW5kIE1QSDonO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIuY2hpbGRFbGVtZW50Q291bnQ9PTApe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXRuKX1cbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==