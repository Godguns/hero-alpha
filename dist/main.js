/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Hero/complie.js":
/*!*************************!*\
  !*** ./Hero/complie.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"/\";\nvar fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nvar path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n\r\nmodule.exports = function templateCreate(){\r\n    let newTemplate = '';\r\n    fs.readFile(path.join(__dirname, '../src/App.Hero'), function (err, data) {\r\n        if (err) {\r\n            return console.error(err);\r\n        }\r\n        newTemplate = `<!DOCTYPE html><html lang=\"en\"><body><div id=\"app\">${data}</div></body><script src=\"./hero.js\"></script></html>`;\r\n        \r\n     });\r\n     return newTemplate;\r\n}\r\n \n\n//# sourceURL=webpack://hero-alpha/./Hero/complie.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let templateCreate = __webpack_require__(/*! ../Hero/complie.js */ \"./Hero/complie.js\");\r\nconsole.log(templateCreate())\r\n// let saber = new Saber();\r\n//     let domTree = saber.templateParser(`\r\n//            <div>\r\n//                <!--button-->\r\n//                <button>按钮</button>\r\n//                <div id=\"container\">\r\n//                    <div class=\"box1\">\r\n//                        <p>box1 box1 box1</p>\r\n//                    </div>\r\n//                    <div class=\"box2\">\r\n//                        <p>box2 box2 box2</p>\r\n//                    </div>\r\n//                </div>\r\n//            </div>\r\n//        `)\r\n//     saber.render(domTree)\n\n//# sourceURL=webpack://hero-alpha/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;