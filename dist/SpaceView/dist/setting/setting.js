System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/SpaceView/src/setting/setting.css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/SpaceView/src/setting/setting.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sv-setting,
.sv-setting * {
  box-sizing: border-box;
}

.sv-setting {
  --sv-primary: #00a9c0;
  --sv-text: #e5e7eb;
  --sv-muted: #99a1b2;
  --sv-border: #3f4553;
  width: 100%;
  min-height: 100%;
  padding: 0 16px;
  color: var(--sv-text);
  background: transparent;
  font: 13px/1.4 Arial, sans-serif;
}

.sv-setting-section {
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid var(--sv-border);
}

.sv-setting-title {
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
}

.sv-setting-description {
  margin: -5px 0 12px;
  color: var(--sv-muted);
  font-size: 11px;
  line-height: 1.45;
}

.sv-mosaic-settings-button {
  width: 100%;
  min-height: 32px;
}

.sv-mosaic-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.55);
}

.sv-mosaic-modal {
  display: flex;
  flex-direction: column;
  width: min(1180px, 100vw - 32px);
  height: min(760px, 100vh - 32px);
  overflow: hidden;
  border: 1px solid #3f4553;
  border-radius: 3px;
  color: #e5e7eb;
  background: #171a21;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.55);
}

.sv-mosaic-modal, .sv-mosaic-modal * {
  scrollbar-width: thin;
  scrollbar-color: #77808f transparent;
}

.sv-mosaic-modal *::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.sv-mosaic-modal *::-webkit-scrollbar-track {
  background: transparent;
}

.sv-mosaic-modal *::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 8px;
  background: #77808f;
  background-clip: padding-box;
}

.sv-mosaic-modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  min-height: 62px;
  padding: 13px 16px;
  border-bottom: 1px solid #3f4553;
  background: #1b1e26;
}

.sv-mosaic-modal-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}

.sv-mosaic-modal-header p {
  margin: 2px 0 0;
  color: #99a1b2;
  font-size: 12px;
}

.sv-mosaic-close {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 2px;
  color: #cbd0d8;
  background: transparent;
  cursor: pointer;
  font-size: 23px;
  line-height: 1;
}

.sv-mosaic-close:hover {
  color: #fff;
  background: #343a46;
}

.sv-mosaic-layout {
  display: grid;
  grid-template-columns: 330px minmax(0, 1fr);
  flex: 1;
  min-height: 0;
}

.sv-mosaic-list-panel {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  border-right: 1px solid #3f4553;
  background: #252832;
}

.sv-mosaic-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 60px;
  padding: 10px 12px 10px 16px;
  border-bottom: 1px solid #3f4553;
}

.sv-mosaic-list-header > div {
  display: grid;
  gap: 2px;
}

.sv-mosaic-list-header strong {
  font-size: 13px;
  font-weight: 600;
}

.sv-mosaic-list-header span {
  color: #99a1b2;
  font-size: 10px;
}

.sv-mosaic-list {
  flex: 1;
  min-height: 0;
  padding: 8px 0;
  overflow: auto;
}

.sv-mosaic-list-item {
  position: relative;
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  width: 100%;
  min-height: 58px;
  padding: 8px 12px 8px 15px;
  border: 0;
  color: #e5e7eb;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.sv-mosaic-list-item:hover {
  background: #2b303b;
}

.sv-mosaic-list-item.active {
  background: #171a21;
}

.sv-mosaic-list-item.active::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: #00a9c0;
}

.sv-mosaic-list-index {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 1px solid #505767;
  border-radius: 50%;
  color: #aeb4c2;
  background: #171a21;
  font-size: 10px;
}

.sv-mosaic-list-item.active .sv-mosaic-list-index {
  color: #72d8e6;
  border-color: #00a9c0;
  background: #17333a;
}

.sv-mosaic-list-text {
  display: grid;
  gap: 3px;
  min-width: 0;
}

.sv-mosaic-list-text strong, .sv-mosaic-list-text small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sv-mosaic-list-text strong {
  font-size: 12px;
  font-weight: 500;
}

.sv-mosaic-list-text small {
  color: #99a1b2;
  font-size: 9px;
}

.sv-mosaic-list-empty {
  padding: 38px 18px;
  color: #99a1b2;
  text-align: center;
  font-size: 11px;
  line-height: 1.6;
}

.sv-mosaic-add-button {
  flex: none;
  min-height: 40px;
  margin: 10px 12px 12px;
  border: 1px solid #505767;
  border-radius: 2px;
  color: #e5e7eb;
  background: #171a21;
  cursor: pointer;
  font-size: 12px;
}

.sv-mosaic-add-button:hover {
  color: #72d8e6;
  border-color: #00a9c0;
  background: #2b303b;
}

.sv-mosaic-transfer-actions {
  flex: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  padding: 10px 12px 0;
  border-top: 1px solid #3f4553;
}

.sv-mosaic-transfer-actions button {
  min-width: 0;
  height: 32px;
  padding: 0 8px;
  border: 1px solid #505767;
  border-radius: 2px;
  color: #e5e7eb;
  background: #171a21;
  cursor: pointer;
  font-size: 10px;
}

.sv-mosaic-transfer-actions button:hover {
  color: #72d8e6;
  border-color: #00a9c0;
  background: #2b303b;
}

.sv-mosaic-transfer-actions input {
  display: none;
}

.sv-mosaic-editor {
  min-width: 0;
  min-height: 0;
  padding: 22px 24px;
  overflow: auto;
  background: #171a21;
}

.sv-mosaic-editor-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 18px;
}

.sv-mosaic-editor-heading h4 {
  margin: 0;
  color: #f2f3f5;
  font-size: 15px;
  font-weight: 500;
}

.sv-mosaic-editor-heading p {
  margin: 3px 0 0;
  color: #99a1b2;
  font-size: 11px;
}

.sv-mosaic-remove-button {
  flex: none;
  height: 30px;
  padding: 0 12px;
  border: 1px solid #a94b4b;
  border-radius: 3px;
  color: #ff9d9d;
  background: #24191d;
  cursor: pointer;
  font-size: 11px;
}

.sv-mosaic-remove-button:hover {
  color: #fff;
  background: #a53f46;
}

.sv-mosaic-form-card {
  display: grid;
  gap: 22px;
  padding: 18px;
  border: 1px solid #3f4553;
  border-radius: 4px;
  background: #252832;
}

.sv-mosaic-field {
  display: grid;
  gap: 5px;
  margin: 0;
}

.sv-mosaic-field > span {
  color: #e8eaee;
  font-size: 12px;
  font-weight: 500;
}

.sv-mosaic-field input {
  width: 100%;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #505767;
  border-radius: 2px;
  color: #f2f3f5;
  background: #12151b;
  outline: none;
  font-size: 12px;
}

.sv-mosaic-field input:focus {
  border-color: #00a9c0;
  box-shadow: 0 0 0 1px #00a9c0;
}

.sv-mosaic-field input::placeholder {
  color: #707887;
}

.sv-mosaic-field small {
  color: #99a1b2;
  font-size: 10px;
}

.sv-mosaic-id-note {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  margin-top: 18px;
  padding: 10px 12px;
  border-left: 3px solid #00a9c0;
  color: #b9dfe5;
  background: #183038;
  font-size: 10px;
}

.sv-mosaic-id-note code {
  overflow: hidden;
  color: #72d8e6;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sv-mosaic-editor-empty {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 7px;
  height: 100%;
  min-height: 260px;
  color: #99a1b2;
  text-align: center;
}

.sv-mosaic-editor-empty strong {
  color: #e4e7ec;
  font-size: 14px;
  font-weight: 500;
}

.sv-mosaic-editor-empty span {
  font-size: 11px;
}

.sv-mosaic-modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 54px;
  padding: 10px 16px;
  border-top: 1px solid #3f4553;
  background: #1b1e26;
}

.sv-mosaic-modal-footer > span {
  color: #99a1b2;
  font-size: 10px;
}

.sv-mosaic-transfer-status.success {
  color: #72d8e6;
}

.sv-mosaic-transfer-status.error {
  color: #ff9d9d;
}

.sv-mosaic-modal-footer > div {
  display: flex;
  gap: 8px;
}

.sv-mosaic-cancel, .sv-mosaic-apply {
  min-width: 88px;
  height: 32px;
  padding: 0 12px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
}

.sv-mosaic-cancel {
  border: 1px solid #505767;
  color: #e5e7eb;
  background: #252832;
}

.sv-mosaic-cancel:hover {
  color: #fff;
  border-color: #00a9c0;
  background: #343a46;
}

.sv-mosaic-apply {
  border: 1px solid #0098b0;
  color: #fff;
  background: #0098b0;
}

.sv-mosaic-apply:hover {
  border-color: #00b0ca;
  background: #007f94;
}

@media (max-width: 760px) {
  .sv-mosaic-modal-backdrop {
    padding: 8px;
  }
  .sv-mosaic-modal {
    width: calc(100vw - 16px);
    height: calc(100vh - 16px);
  }
  .sv-mosaic-layout {
    grid-template-columns: 220px minmax(0, 1fr);
  }
  .sv-mosaic-editor {
    padding: 16px;
  }
  .sv-mosaic-modal-footer > span {
    display: none;
  }
  .sv-mosaic-modal-footer {
    justify-content: flex-end;
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/SpaceView/src/setting/setting.css"],"names":[],"mappings":"AAAA;;EACgB,sBAAA;AAEhB;;AAAA;EACE,qBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;EAAa,gBAAA;EAAkB,eAAA;EAAiB,qBAAA;EAAuB,uBAAA;EAAyB,gCAAA;AAQlG;;AALA;EAAsB,WAAA;EAAa,eAAA;EAAiB,yCAAA;AAWpD;;AAVA;EAAoB,mBAAA;EAAqB,eAAA;EAAiB,gBAAA;EAAkB,iBAAA;AAiB5E;;AAhBA;EAA0B,mBAAA;EAAqB,sBAAA;EAAwB,eAAA;EAAiB,iBAAA;AAuBxF;;AAtBA;EAA6B,WAAA;EAAa,gBAAA;AA2B1C;;AAzBA;EAA4B,eAAA;EAAiB,QAAA;EAAU,cAAA;EAAgB,aAAA;EAAe,mBAAA;EAAqB,uBAAA;EAAyB,aAAA;EAAe,+BAAA;AAoCnJ;;AAnCA;EAAmB,aAAA;EAAe,sBAAA;EAAwB,gCAAA;EAAwC,gCAAA;EAAwC,gBAAA;EAAkB,yBAAA;EAA2B,kBAAA;EAAoB,cAAA;EAAgB,mBAAA;EAAqB,0CAAA;AAgDhP;;AA/CA;EAAuC,qBAAA;EAAuB,oCAAA;AAoD9D;;AAnDA;EAAwC,UAAA;EAAY,WAAA;AAwDpD;;AAvDA;EAA8C,uBAAA;AA2D9C;;AA1DA;EAA8C,6BAAA;EAA+B,kBAAA;EAAoB,mBAAA;EAAqB,4BAAA;AAiEtH;;AA/DA;EAA0B,aAAA;EAAe,uBAAA;EAAyB,8BAAA;EAAgC,SAAA;EAAW,gBAAA;EAAkB,kBAAA;EAAoB,gCAAA;EAAkC,mBAAA;AA0ErL;;AAzEA;EAA6B,SAAA;EAAW,eAAA;EAAiB,gBAAA;EAAkB,iBAAA;AAgF3E;;AA/EA;EAA4B,eAAA;EAAiB,cAAA;EAAgB,eAAA;AAqF7D;;AApFA;EAAmB,aAAA;EAAe,mBAAA;EAAqB,WAAA;EAAa,YAAA;EAAc,UAAA;EAAY,SAAA;EAAW,kBAAA;EAAoB,cAAA;EAAgB,uBAAA;EAAyB,eAAA;EAAiB,eAAA;EAAiB,cAAA;AAmGxM;;AAlGA;EAAyB,WAAA;EAAa,mBAAA;AAuGtC;;AArGA;EAAoB,aAAA;EAAe,2CAAA;EAA6C,OAAA;EAAS,aAAA;AA4GzF;;AA3GA;EAAwB,aAAA;EAAe,sBAAA;EAAwB,YAAA;EAAc,aAAA;EAAe,+BAAA;EAAiC,mBAAA;AAoH7H;;AAnHA;EAAyB,aAAA;EAAe,mBAAA;EAAqB,8BAAA;EAAgC,SAAA;EAAW,gBAAA;EAAkB,4BAAA;EAA8B,gCAAA;AA6HxJ;;AA5HA;EAA+B,aAAA;EAAe,QAAA;AAiI9C;;AAhIA;EAAgC,eAAA;EAAiB,gBAAA;AAqIjD;;AApIA;EAA8B,cAAA;EAAgB,eAAA;AAyI9C;;AAxIA;EAAkB,OAAA;EAAS,aAAA;EAAe,cAAA;EAAgB,cAAA;AA+I1D;;AA9IA;EAAuB,kBAAA;EAAoB,aAAA;EAAe,0CAAA;EAA4C,mBAAA;EAAqB,QAAA;EAAU,WAAA;EAAa,gBAAA;EAAkB,0BAAA;EAA4B,SAAA;EAAW,cAAA;EAAgB,uBAAA;EAAyB,eAAA;EAAiB,gBAAA;AA8JrQ;;AA7JA;EAA6B,mBAAA;AAiK7B;;AAhKA;EAA8B,mBAAA;AAoK9B;;AAnKA;EAAsC,WAAA;EAAa,kBAAA;EAAoB,iBAAA;EAAmB,UAAA;EAAY,mBAAA;AA2KtG;;AA1KA;EAAwB,aAAA;EAAe,mBAAA;EAAqB,WAAA;EAAa,YAAA;EAAc,yBAAA;EAA2B,kBAAA;EAAoB,cAAA;EAAgB,mBAAA;EAAqB,eAAA;AAsL3K;;AArLA;EAAoD,cAAA;EAAgB,qBAAA;EAAuB,mBAAA;AA2L3F;;AA1LA;EAAuB,aAAA;EAAe,QAAA;EAAU,YAAA;AAgMhD;;AA/LA;EAA0D,gBAAA;EAAkB,uBAAA;EAAyB,mBAAA;AAqMrG;;AApMA;EAA8B,eAAA;EAAiB,gBAAA;AAyM/C;;AAxMA;EAA6B,cAAA;EAAgB,cAAA;AA6M7C;;AA5MA;EAAwB,kBAAA;EAAoB,cAAA;EAAgB,kBAAA;EAAoB,eAAA;EAAiB,gBAAA;AAoNjG;;AAnNA;EAAwB,UAAA;EAAY,gBAAA;EAAkB,sBAAA;EAAwB,yBAAA;EAA2B,kBAAA;EAAoB,cAAA;EAAgB,mBAAA;EAAqB,eAAA;EAAiB,eAAA;AA+NnL;;AA9NA;EAA8B,cAAA;EAAgB,qBAAA;EAAuB,mBAAA;AAoOrE;;AAnOA;EAA8B,UAAA;EAAY,aAAA;EAAe,8BAAA;EAAgC,QAAA;EAAU,oBAAA;EAAsB,6BAAA;AA4OzH;;AA3OA;EAAqC,YAAA;EAAc,YAAA;EAAc,cAAA;EAAgB,yBAAA;EAA2B,kBAAA;EAAoB,cAAA;EAAgB,mBAAA;EAAqB,eAAA;EAAiB,eAAA;AAuPtL;;AAtPA;EAA2C,cAAA;EAAgB,qBAAA;EAAuB,mBAAA;AA4PlF;;AA3PA;EAAoC,aAAA;AA+PpC;;AA7PA;EAAoB,YAAA;EAAc,aAAA;EAAe,kBAAA;EAAoB,cAAA;EAAgB,mBAAA;AAqQrF;;AApQA;EAA4B,aAAA;EAAe,uBAAA;EAAyB,8BAAA;EAAgC,SAAA;EAAW,oBAAA;AA4Q/G;;AA3QA;EAA+B,SAAA;EAAW,cAAA;EAAgB,eAAA;EAAiB,gBAAA;AAkR3E;;AAjRA;EAA8B,eAAA;EAAiB,cAAA;EAAgB,eAAA;AAuR/D;;AAtRA;EAA2B,UAAA;EAAY,YAAA;EAAc,eAAA;EAAiB,yBAAA;EAA2B,kBAAA;EAAoB,cAAA;EAAgB,mBAAA;EAAqB,eAAA;EAAiB,eAAA;AAkS3K;;AAjSA;EAAiC,WAAA;EAAa,mBAAA;AAsS9C;;AArSA;EAAuB,aAAA;EAAe,SAAA;EAAW,aAAA;EAAe,yBAAA;EAA2B,kBAAA;EAAoB,mBAAA;AA8S/G;;AA7SA;EAAmB,aAAA;EAAe,QAAA;EAAU,SAAA;AAmT5C;;AAlTA;EAA0B,cAAA;EAAgB,eAAA;EAAiB,gBAAA;AAwT3D;;AAvTA;EAAyB,WAAA;EAAa,YAAA;EAAc,eAAA;EAAiB,yBAAA;EAA2B,kBAAA;EAAoB,cAAA;EAAgB,mBAAA;EAAqB,aAAA;EAAe,eAAA;AAmUxK;;AAlUA;EAA+B,qBAAA;EAAuB,6BAAA;AAuUtD;;AAtUA;EAAsC,cAAA;AA0UtC;;AAzUA;EAAyB,cAAA;EAAgB,eAAA;AA8UzC;;AA7UA;EAAqB,aAAA;EAAe,0CAAA;EAA4C,mBAAA;EAAqB,SAAA;EAAW,gBAAA;EAAkB,kBAAA;EAAoB,8BAAA;EAAgC,cAAA;EAAgB,mBAAA;EAAqB,eAAA;AA0V3N;;AAzVA;EAA0B,gBAAA;EAAkB,cAAA;EAAgB,uBAAA;EAAyB,mBAAA;AAgWrF;;AA/VA;EAA0B,aAAA;EAAe,mBAAA;EAAqB,qBAAA;EAAuB,QAAA;EAAU,YAAA;EAAc,iBAAA;EAAmB,cAAA;EAAgB,kBAAA;AA0WhJ;;AAzWA;EAAiC,cAAA;EAAgB,eAAA;EAAiB,gBAAA;AA+WlE;;AA9WA;EAA+B,eAAA;AAkX/B;;AAhXA;EAA0B,aAAA;EAAe,mBAAA;EAAqB,8BAAA;EAAgC,SAAA;EAAW,gBAAA;EAAkB,kBAAA;EAAoB,6BAAA;EAA+B,mBAAA;AA2X9K;;AA1XA;EAAiC,cAAA;EAAgB,eAAA;AA+XjD;;AA9XA;EAAqC,cAAA;AAkYrC;;AAjYA;EAAmC,cAAA;AAqYnC;;AApYA;EAAgC,aAAA;EAAe,QAAA;AAyY/C;;AAxYA;EAAsC,eAAA;EAAiB,YAAA;EAAc,eAAA;EAAiB,kBAAA;EAAoB,eAAA;EAAiB,eAAA;AAiZ3H;;AAhZA;EAAoB,yBAAA;EAA2B,cAAA;EAAgB,mBAAA;AAsZ/D;;AArZA;EAA0B,WAAA;EAAa,qBAAA;EAAuB,mBAAA;AA2Z9D;;AA1ZA;EAAmB,yBAAA;EAA2B,WAAA;EAAa,mBAAA;AAga3D;;AA/ZA;EAAyB,qBAAA;EAAuB,mBAAA;AAoahD;;AAlaA;EACE;IAA4B,YAAA;EAsa5B;EAraA;IAAmB,yBAAA;IAA2B,0BAAA;EAya9C;EAxaA;IAAoB,2CAAA;EA2apB;EA1aA;IAAoB,aAAA;EA6apB;EA5aA;IAAiC,aAAA;EA+ajC;EA9aA;IAA0B,yBAAA;EAib1B;AACF","sourcesContent":[".sv-setting,\n.sv-setting * { box-sizing: border-box; }\n\n.sv-setting {\n  --sv-primary: #00a9c0;\n  --sv-text: #e5e7eb;\n  --sv-muted: #99a1b2;\n  --sv-border: #3f4553;\n  width: 100%; min-height: 100%; padding: 0 16px; color: var(--sv-text); background: transparent; font: 13px/1.4 Arial, sans-serif;\n}\n\n.sv-setting-section { width: 100%; padding: 16px 0; border-bottom: 1px solid var(--sv-border); }\n.sv-setting-title { margin-bottom: 10px; font-size: 13px; font-weight: 500; line-height: 18px; }\n.sv-setting-description { margin: -5px 0 12px; color: var(--sv-muted); font-size: 11px; line-height: 1.45; }\n.sv-mosaic-settings-button { width: 100%; min-height: 32px; }\n\n.sv-mosaic-modal-backdrop { position: fixed; inset: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(0, 0, 0, .55); }\n.sv-mosaic-modal { display: flex; flex-direction: column; width: min(1180px, calc(100vw - 32px)); height: min(760px, calc(100vh - 32px)); overflow: hidden; border: 1px solid #3f4553; border-radius: 3px; color: #e5e7eb; background: #171a21; box-shadow: 0 8px 28px rgba(0, 0, 0, .55); }\n.sv-mosaic-modal, .sv-mosaic-modal * { scrollbar-width: thin; scrollbar-color: #77808f transparent; }\n.sv-mosaic-modal *::-webkit-scrollbar { width: 8px; height: 8px; }\n.sv-mosaic-modal *::-webkit-scrollbar-track { background: transparent; }\n.sv-mosaic-modal *::-webkit-scrollbar-thumb { border: 2px solid transparent; border-radius: 8px; background: #77808f; background-clip: padding-box; }\n\n.sv-mosaic-modal-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; min-height: 62px; padding: 13px 16px; border-bottom: 1px solid #3f4553; background: #1b1e26; }\n.sv-mosaic-modal-header h3 { margin: 0; font-size: 16px; font-weight: 500; line-height: 22px; }\n.sv-mosaic-modal-header p { margin: 2px 0 0; color: #99a1b2; font-size: 12px; }\n.sv-mosaic-close { display: grid; place-items: center; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 2px; color: #cbd0d8; background: transparent; cursor: pointer; font-size: 23px; line-height: 1; }\n.sv-mosaic-close:hover { color: #fff; background: #343a46; }\n\n.sv-mosaic-layout { display: grid; grid-template-columns: 330px minmax(0, 1fr); flex: 1; min-height: 0; }\n.sv-mosaic-list-panel { display: flex; flex-direction: column; min-width: 0; min-height: 0; border-right: 1px solid #3f4553; background: #252832; }\n.sv-mosaic-list-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 60px; padding: 10px 12px 10px 16px; border-bottom: 1px solid #3f4553; }\n.sv-mosaic-list-header > div { display: grid; gap: 2px; }\n.sv-mosaic-list-header strong { font-size: 13px; font-weight: 600; }\n.sv-mosaic-list-header span { color: #99a1b2; font-size: 10px; }\n.sv-mosaic-list { flex: 1; min-height: 0; padding: 8px 0; overflow: auto; }\n.sv-mosaic-list-item { position: relative; display: grid; grid-template-columns: 28px minmax(0, 1fr); align-items: center; gap: 9px; width: 100%; min-height: 58px; padding: 8px 12px 8px 15px; border: 0; color: #e5e7eb; background: transparent; cursor: pointer; text-align: left; }\n.sv-mosaic-list-item:hover { background: #2b303b; }\n.sv-mosaic-list-item.active { background: #171a21; }\n.sv-mosaic-list-item.active::before { content: ''; position: absolute; inset: 0 auto 0 0; width: 3px; background: #00a9c0; }\n.sv-mosaic-list-index { display: grid; place-items: center; width: 26px; height: 26px; border: 1px solid #505767; border-radius: 50%; color: #aeb4c2; background: #171a21; font-size: 10px; }\n.sv-mosaic-list-item.active .sv-mosaic-list-index { color: #72d8e6; border-color: #00a9c0; background: #17333a; }\n.sv-mosaic-list-text { display: grid; gap: 3px; min-width: 0; }\n.sv-mosaic-list-text strong, .sv-mosaic-list-text small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.sv-mosaic-list-text strong { font-size: 12px; font-weight: 500; }\n.sv-mosaic-list-text small { color: #99a1b2; font-size: 9px; }\n.sv-mosaic-list-empty { padding: 38px 18px; color: #99a1b2; text-align: center; font-size: 11px; line-height: 1.6; }\n.sv-mosaic-add-button { flex: none; min-height: 40px; margin: 10px 12px 12px; border: 1px solid #505767; border-radius: 2px; color: #e5e7eb; background: #171a21; cursor: pointer; font-size: 12px; }\n.sv-mosaic-add-button:hover { color: #72d8e6; border-color: #00a9c0; background: #2b303b; }\n.sv-mosaic-transfer-actions { flex: none; display: grid; grid-template-columns: 1fr 1fr; gap: 7px; padding: 10px 12px 0; border-top: 1px solid #3f4553; }\n.sv-mosaic-transfer-actions button { min-width: 0; height: 32px; padding: 0 8px; border: 1px solid #505767; border-radius: 2px; color: #e5e7eb; background: #171a21; cursor: pointer; font-size: 10px; }\n.sv-mosaic-transfer-actions button:hover { color: #72d8e6; border-color: #00a9c0; background: #2b303b; }\n.sv-mosaic-transfer-actions input { display: none; }\n\n.sv-mosaic-editor { min-width: 0; min-height: 0; padding: 22px 24px; overflow: auto; background: #171a21; }\n.sv-mosaic-editor-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding-bottom: 18px; }\n.sv-mosaic-editor-heading h4 { margin: 0; color: #f2f3f5; font-size: 15px; font-weight: 500; }\n.sv-mosaic-editor-heading p { margin: 3px 0 0; color: #99a1b2; font-size: 11px; }\n.sv-mosaic-remove-button { flex: none; height: 30px; padding: 0 12px; border: 1px solid #a94b4b; border-radius: 3px; color: #ff9d9d; background: #24191d; cursor: pointer; font-size: 11px; }\n.sv-mosaic-remove-button:hover { color: #fff; background: #a53f46; }\n.sv-mosaic-form-card { display: grid; gap: 22px; padding: 18px; border: 1px solid #3f4553; border-radius: 4px; background: #252832; }\n.sv-mosaic-field { display: grid; gap: 5px; margin: 0; }\n.sv-mosaic-field > span { color: #e8eaee; font-size: 12px; font-weight: 500; }\n.sv-mosaic-field input { width: 100%; height: 34px; padding: 0 10px; border: 1px solid #505767; border-radius: 2px; color: #f2f3f5; background: #12151b; outline: none; font-size: 12px; }\n.sv-mosaic-field input:focus { border-color: #00a9c0; box-shadow: 0 0 0 1px #00a9c0; }\n.sv-mosaic-field input::placeholder { color: #707887; }\n.sv-mosaic-field small { color: #99a1b2; font-size: 10px; }\n.sv-mosaic-id-note { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 12px; margin-top: 18px; padding: 10px 12px; border-left: 3px solid #00a9c0; color: #b9dfe5; background: #183038; font-size: 10px; }\n.sv-mosaic-id-note code { overflow: hidden; color: #72d8e6; text-overflow: ellipsis; white-space: nowrap; }\n.sv-mosaic-editor-empty { display: grid; place-items: center; align-content: center; gap: 7px; height: 100%; min-height: 260px; color: #99a1b2; text-align: center; }\n.sv-mosaic-editor-empty strong { color: #e4e7ec; font-size: 14px; font-weight: 500; }\n.sv-mosaic-editor-empty span { font-size: 11px; }\n\n.sv-mosaic-modal-footer { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 54px; padding: 10px 16px; border-top: 1px solid #3f4553; background: #1b1e26; }\n.sv-mosaic-modal-footer > span { color: #99a1b2; font-size: 10px; }\n.sv-mosaic-transfer-status.success { color: #72d8e6; }\n.sv-mosaic-transfer-status.error { color: #ff9d9d; }\n.sv-mosaic-modal-footer > div { display: flex; gap: 8px; }\n.sv-mosaic-cancel, .sv-mosaic-apply { min-width: 88px; height: 32px; padding: 0 12px; border-radius: 2px; cursor: pointer; font-size: 12px; }\n.sv-mosaic-cancel { border: 1px solid #505767; color: #e5e7eb; background: #252832; }\n.sv-mosaic-cancel:hover { color: #fff; border-color: #00a9c0; background: #343a46; }\n.sv-mosaic-apply { border: 1px solid #0098b0; color: #fff; background: #0098b0; }\n.sv-mosaic-apply:hover { border-color: #00b0ca; background: #007f94; }\n\n@media (max-width: 760px) {\n  .sv-mosaic-modal-backdrop { padding: 8px; }\n  .sv-mosaic-modal { width: calc(100vw - 16px); height: calc(100vh - 16px); }\n  .sv-mosaic-layout { grid-template-columns: 220px minmax(0, 1fr); }\n  .sv-mosaic-editor { padding: 16px; }\n  .sv-mosaic-modal-footer > span { display: none; }\n  .sv-mosaic-modal-footer { justify-content: flex-end; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./your-extensions/widgets/SpaceView/src/setting/setting.css"
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/SpaceView/src/setting/setting.css ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./setting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/SpaceView/src/setting/setting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";


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

/***/ },

/***/ "./your-extensions/widgets/SpaceView/src/runtime/terrain/demConfig.ts"
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/SpaceView/src/runtime/terrain/demConfig.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_DEM_URL: () => (/* binding */ DEFAULT_DEM_URL)
/* harmony export */ });
const DEFAULT_DEM_URL = 'https://sgm.uzspace.uz/image/rest/services/AdminRaster/republic_DEM/ImageServer';


/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/SpaceView/src/setting/setting.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/SpaceView/src/setting/setting.css");
/* harmony import */ var _runtime_terrain_demConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtime/terrain/demConfig */ "./your-extensions/widgets/SpaceView/src/runtime/terrain/demConfig.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const cloneSources = (value) => (value || []).map((row, index) => ({
    id: String((row === null || row === void 0 ? void 0 : row.id) || `r-${index + 1}`),
    name: String((row === null || row === void 0 ? void 0 : row.name) || ''),
    url: String((row === null || row === void 0 ? void 0 : row.url) || '')
}));
function validateSources(value) {
    var _a, _b, _c;
    const input = Array.isArray(value) ? value : value === null || value === void 0 ? void 0 : value.rasters;
    if (!Array.isArray(input))
        return { rows: [], error: 'В JSON должен находиться массив rasters.' };
    if (!input.length)
        return { rows: [], error: 'Список слоёв не должен быть пустым.' };
    const usedIds = new Set();
    const rows = [];
    for (let index = 0; index < input.length; index++) {
        const name = String(((_a = input[index]) === null || _a === void 0 ? void 0 : _a.name) || '').trim();
        const url = String(((_b = input[index]) === null || _b === void 0 ? void 0 : _b.url) || '').trim().replace(/\/$/, '');
        if (!name)
            return { rows: [], error: `У слоя ${index + 1} не указано название.` };
        try {
            const parsed = new URL(url);
            if (!/^https?:$/.test(parsed.protocol) || !/\/ImageServer\/?$/i.test(parsed.pathname))
                throw new Error('invalid');
        }
        catch (_d) {
            return { rows: [], error: `У слоя «${name}» указан некорректный URL ImageServer.` };
        }
        let id = String(((_c = input[index]) === null || _c === void 0 ? void 0 : _c.id) || `r-${index + 1}`).trim() || `r-${index + 1}`;
        if (usedIds.has(id))
            id = `${id}-${index + 1}`;
        usedIds.add(id);
        rows.push({ id, name, url });
    }
    return { rows, error: null };
}
function Setting(props) {
    var _a, _b, _c;
    const [demDraft, setDemDraft] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(((_a = props.config) === null || _a === void 0 ? void 0 : _a.demUrl) || _runtime_terrain_demConfig__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DEM_URL);
    const [demError, setDemError] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => { var _a; setDemDraft(((_a = props.config) === null || _a === void 0 ? void 0 : _a.demUrl) || _runtime_terrain_demConfig__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DEM_URL); }, [(_b = props.config) === null || _b === void 0 ? void 0 : _b.demUrl]);
    const saveDem = () => {
        try {
            const url = demDraft.trim().replace(/\/$/, '');
            const parsed = new URL(url);
            if (!/^https?:$/.test(parsed.protocol) || !/\/ImageServer$/i.test(parsed.pathname))
                throw Error('invalid DEM URL');
            props.onSettingChange({ id: props.id, config: (props.config || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({})).set('demUrl', url) });
            setDemError('');
        }
        catch (_a) {
            setDemError('Укажите полный URL ImageServer для DEM.');
        }
    };
    const rows = cloneSources((_c = props.config) === null || _c === void 0 ? void 0 : _c.rasters);
    const [mosaicSettingsOpen, setMosaicSettingsOpen] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [draftRows, setDraftRows] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [selectedId, setSelectedId] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [transferStatus, setTransferStatus] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const uploadRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const openSettings = () => {
        var _a, _b;
        const next = cloneSources((_a = props.config) === null || _a === void 0 ? void 0 : _a.rasters);
        setDraftRows(next);
        setSelectedId(((_b = next[0]) === null || _b === void 0 ? void 0 : _b.id) || null);
        setTransferStatus(null);
        setMosaicSettingsOpen(true);
    };
    const closeSettings = () => setMosaicSettingsOpen(false);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!mosaicSettingsOpen)
            return;
        const onKeyDown = (event) => {
            if (event.key === 'Escape')
                closeSettings();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [mosaicSettingsOpen]);
    const addSource = () => {
        const id = `r-${Date.now()}`;
        setDraftRows(current => [...current, { id, name: `Мозаика ${current.length + 1}`, url: '' }]);
        setSelectedId(id);
    };
    const updateSelected = (field, value) => {
        setDraftRows(current => current.map(row => row.id === selectedId ? Object.assign(Object.assign({}, row), { [field]: value }) : row));
    };
    const removeSelected = () => {
        setDraftRows(current => {
            var _a;
            const index = current.findIndex(row => row.id === selectedId);
            const next = current.filter(row => row.id !== selectedId);
            setSelectedId(((_a = next[Math.min(Math.max(index, 0), next.length - 1)]) === null || _a === void 0 ? void 0 : _a.id) || null);
            return next;
        });
    };
    const applySettings = () => {
        const checked = validateSources(draftRows);
        if (checked.error) {
            setTransferStatus({ type: 'error', text: checked.error });
            return;
        }
        const config = props.config || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        props.onSettingChange({ id: props.id, config: config.set('rasters', (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(checked.rows)) });
        closeSettings();
    };
    const downloadLayers = () => {
        const payload = JSON.stringify({
            schema: 'spaceview-mosaic-layers',
            version: 1,
            exportedAt: new Date().toISOString(),
            rasters: draftRows.map(row => ({ id: row.id, name: row.name.trim(), url: row.url.trim() }))
        }, null, 2);
        const href = URL.createObjectURL(new Blob([payload], { type: 'application/json;charset=utf-8' }));
        const link = document.createElement('a');
        link.href = href;
        link.download = 'spaceview-mosaic-layers.json';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(href), 1000);
        setTransferStatus({ type: 'success', text: `Скачано слоёв: ${draftRows.length}.` });
    };
    const uploadLayers = (file) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!file)
            return;
        try {
            const parsed = JSON.parse(yield file.text());
            const checked = validateSources(parsed);
            if (checked.error)
                throw new Error(checked.error);
            setDraftRows(checked.rows);
            setSelectedId(((_a = checked.rows[0]) === null || _a === void 0 ? void 0 : _a.id) || null);
            setTransferStatus({ type: 'success', text: `Загружено слоёв: ${checked.rows.length}. Нажмите «Применить», чтобы сохранить их.` });
        }
        catch (error) {
            setTransferStatus({ type: 'error', text: error instanceof Error ? error.message : 'Не удалось прочитать JSON-файл.' });
        }
        finally {
            if (uploadRef.current)
                uploadRef.current.value = '';
        }
    });
    const selected = draftRows.find(row => row.id === selectedId) || null;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-setting" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "sv-setting-section" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-setting-title" }, "\u0421\u043B\u043E\u0438 \u043C\u043E\u0437\u0430\u0438\u043A\u0438"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-setting-description" },
                "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E: ",
                rows.length,
                ". \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 ImageServer-\u0441\u043B\u043E\u0438, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0432 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u0435, \u0433\u0440\u0443\u043F\u043F\u0430\u0445 \u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445 \u0441\u043D\u0438\u043C\u043A\u043E\u0432."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "sv-mosaic-settings-button", onClick: openSettings }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043B\u043E\u0451\u0432 \u043C\u043E\u0437\u0430\u0438\u043A\u0438")),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "sv-setting-section" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-setting-title" }, "DEM \u2014 \u0432\u044B\u0441\u043E\u0442\u0430 \u043C\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-setting-description" }, "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0442\u0440 \u0432\u044B\u0441\u043E\u0442 \u0434\u043B\u044F \u0440\u0435\u043B\u044C\u0435\u0444\u0430, \u0432\u044B\u0441\u043E\u0442\u044B \u0432 \u0442\u043E\u0447\u043A\u0435 \u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F. DEM \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u043E\u0432 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442 NDVI."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "sv-mosaic-field" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u0421\u0441\u044B\u043B\u043A\u0430 ImageServer DEM"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { value: demDraft, onChange: event => setDemDraft(event.target.value) })),
            demError && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { role: "alert" }, demError),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: saveDem }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C DEM")),
        mosaicSettingsOpen && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-modal-backdrop", onMouseDown: event => {
                if (event.target === event.currentTarget)
                    closeSettings();
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "sv-mosaic-modal-title" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-modal-header" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", { id: "sv-mosaic-modal-title" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043B\u043E\u0451\u0432 \u043C\u043E\u0437\u0430\u0438\u043A\u0438"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 ImageServer.")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "sv-mosaic-close", type: "button", onClick: closeSettings, "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" }, "\u00D7")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-layout" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("aside", { className: "sv-mosaic-list-panel" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-list-header" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "\u0421\u043B\u043E\u0438"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null,
                                    draftRows.length,
                                    " \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-list" },
                            draftRows.map((row, index) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { key: row.id, className: `sv-mosaic-list-item ${row.id === selectedId ? 'active' : ''}`, type: "button", onClick: () => setSelectedId(row.id) },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "sv-mosaic-list-index" }, index + 1),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "sv-mosaic-list-text" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, row.name.trim() || `Мозаика ${index + 1}`),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", null, row.url.trim() || 'Ссылка ImageServer не указана')))),
                            draftRows.length === 0 && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-list-empty" },
                                "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u043B\u043E\u0451\u0432.",
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("br", null),
                                "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u00AB+\u00BB, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u043E\u0437\u0430\u0438\u043A\u0443.")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-transfer-actions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", onClick: () => { var _a; return (_a = uploadRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", onClick: downloadLayers }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { ref: uploadRef, type: "file", accept: "application/json,.json", onChange: event => { var _a; return void uploadLayers(((_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0]) || null); } })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "sv-mosaic-add-button", type: "button", onClick: addSource }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u043E\u0437\u0430\u0438\u043A\u0443")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("main", { className: "sv-mosaic-editor" }, selected ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-editor-heading" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", null, selected.name.trim() || 'Новая мозаика'),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u043E\u043B\u043D\u044B\u0439 URL \u0441\u0435\u0440\u0432\u0438\u0441\u0430.")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "sv-mosaic-remove-button", type: "button", onClick: removeSelected }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-form-card" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "sv-mosaic-field" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u0437\u0430\u0438\u043A\u0438"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { value: selected.name, onChange: event => updateSelected('name', event.target.value), placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: 2026 \u2014 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 3" }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u0435 \u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445 \u0440\u0430\u0441\u0442\u0440\u043E\u0432.")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "sv-mosaic-field" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u0421\u0441\u044B\u043B\u043A\u0430 ImageServer"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { value: selected.url, onChange: event => updateSelected('url', event.target.value), placeholder: "https://.../ImageServer" }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", null, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 ArcGIS ImageServer."))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-id-note" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("code", null, selected.id))) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-editor-empty" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "\u0421\u043B\u043E\u0439 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0437\u0430\u0438\u043A\u0443 \u0441\u043B\u0435\u0432\u0430 \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043F\u043E\u0434 \u0441\u043F\u0438\u0441\u043A\u043E\u043C.")))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sv-mosaic-modal-footer" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: transferStatus ? `sv-mosaic-transfer-status ${transferStatus.type}` : '' }, (transferStatus === null || transferStatus === void 0 ? void 0 : transferStatus.text) || 'Изменения вступят в силу после применения.'),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "sv-mosaic-cancel", type: "button", onClick: closeSettings }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "sv-mosaic-apply", type: "button", onClick: applySettings }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9TcGFjZVZpZXcvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDZIQUE2SCxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxRQUFRLE1BQU0sWUFBWSxZQUFZLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxZQUFZLFlBQVksUUFBUSxNQUFNLFlBQVksWUFBWSxRQUFRLE1BQU0sV0FBVyxVQUFVLFFBQVEsTUFBTSxZQUFZLFFBQVEsTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsVUFBVSxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksWUFBWSxRQUFRLE1BQU0sV0FBVyxVQUFVLFFBQVEsTUFBTSxXQUFXLFlBQVksUUFBUSxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLE1BQU0sWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLE1BQU0sV0FBVyxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFFBQVEsTUFBTSxZQUFZLFlBQVksWUFBWSxRQUFRLE1BQU0sV0FBVyxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsWUFBWSxZQUFZLFFBQVEsTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksUUFBUSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFFBQVEsTUFBTSxXQUFXLFVBQVUsVUFBVSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFFBQVEsTUFBTSxZQUFZLFlBQVksUUFBUSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsWUFBWSxRQUFRLE1BQU0sV0FBVyxRQUFRLE1BQU0sV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFFBQVEsTUFB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QUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9TcGFjZVZpZXcvc3JjL3NldHRpbmcvc2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9TcGFjZVZpZXcvc3JjL3NldHRpbmcvc2V0dGluZy5jc3M/M2ViOCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9TcGFjZVZpZXcvc3JjL3J1bnRpbWUvdGVycmFpbi9kZW1Db25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvU3BhY2VWaWV3L3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3Ytc2V0dGluZyxcbi5zdi1zZXR0aW5nICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3Ytc2V0dGluZyB7XG4gIC0tc3YtcHJpbWFyeTogIzAwYTljMDtcbiAgLS1zdi10ZXh0OiAjZTVlN2ViO1xuICAtLXN2LW11dGVkOiAjOTlhMWIyO1xuICAtLXN2LWJvcmRlcjogIzNmNDU1MztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgY29sb3I6IHZhcigtLXN2LXRleHQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udDogMTNweC8xLjQgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5zdi1zZXR0aW5nLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3YtYm9yZGVyKTtcbn1cblxuLnN2LXNldHRpbmctdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uc3Ytc2V0dGluZy1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogLTVweCAwIDEycHg7XG4gIGNvbG9yOiB2YXIoLS1zdi1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG5cbi5zdi1tb3NhaWMtc2V0dGluZ3MtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG59XG5cbi5zdi1tb3NhaWMtbW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG59XG5cbi5zdi1tb3NhaWMtbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogbWluKDExODBweCwgMTAwdncgLSAzMnB4KTtcbiAgaGVpZ2h0OiBtaW4oNzYwcHgsIDEwMHZoIC0gMzJweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZjQ1NTM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICNlNWU3ZWI7XG4gIGJhY2tncm91bmQ6ICMxNzFhMjE7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbn1cblxuLnN2LW1vc2FpYy1tb2RhbCwgLnN2LW1vc2FpYy1tb2RhbCAqIHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICM3NzgwOGYgdHJhbnNwYXJlbnQ7XG59XG5cbi5zdi1tb3NhaWMtbW9kYWwgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cblxuLnN2LW1vc2FpYy1tb2RhbCAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc3YtbW9zYWljLW1vZGFsICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzc3ODA4ZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnN2LW1vc2FpYy1tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDYycHg7XG4gIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjQ1NTM7XG4gIGJhY2tncm91bmQ6ICMxYjFlMjY7XG59XG5cbi5zdi1tb3NhaWMtbW9kYWwtaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uc3YtbW9zYWljLW1vZGFsLWhlYWRlciBwIHtcbiAgbWFyZ2luOiAycHggMCAwO1xuICBjb2xvcjogIzk5YTFiMjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc3YtbW9zYWljLWNsb3NlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjY2JkMGQ4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3YtbW9zYWljLWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDY7XG59XG5cbi5zdi1tb3NhaWMtbGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMzBweCBtaW5tYXgoMCwgMWZyKTtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLnN2LW1vc2FpYy1saXN0LXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjM2Y0NTUzO1xuICBiYWNrZ3JvdW5kOiAjMjUyODMyO1xufVxuXG4uc3YtbW9zYWljLWxpc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweCAxMHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2Y0NTUzO1xufVxuXG4uc3YtbW9zYWljLWxpc3QtaGVhZGVyID4gZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAycHg7XG59XG5cbi5zdi1tb3NhaWMtbGlzdC1oZWFkZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3YtbW9zYWljLWxpc3QtaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogIzk5YTFiMjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc3YtbW9zYWljLWxpc3Qge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAwO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zdi1tb3NhaWMtbGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4cHggbWlubWF4KDAsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNThweDtcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNlNWU3ZWI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdi1tb3NhaWMtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJiMzAzYjtcbn1cblxuLnN2LW1vc2FpYy1saXN0LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzE3MWEyMTtcbn1cblxuLnN2LW1vc2FpYy1saXN0LWl0ZW0uYWN0aXZlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwIGF1dG8gMCAwO1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDBhOWMwO1xufVxuXG4uc3YtbW9zYWljLWxpc3QtaW5kZXgge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTA1NzY3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjYWViNGMyO1xuICBiYWNrZ3JvdW5kOiAjMTcxYTIxO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zdi1tb3NhaWMtbGlzdC1pdGVtLmFjdGl2ZSAuc3YtbW9zYWljLWxpc3QtaW5kZXgge1xuICBjb2xvcjogIzcyZDhlNjtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhOWMwO1xuICBiYWNrZ3JvdW5kOiAjMTczMzNhO1xufVxuXG4uc3YtbW9zYWljLWxpc3QtdGV4dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogM3B4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5zdi1tb3NhaWMtbGlzdC10ZXh0IHN0cm9uZywgLnN2LW1vc2FpYy1saXN0LXRleHQgc21hbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN2LW1vc2FpYy1saXN0LXRleHQgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3YtbW9zYWljLWxpc3QtdGV4dCBzbWFsbCB7XG4gIGNvbG9yOiAjOTlhMWIyO1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLnN2LW1vc2FpYy1saXN0LWVtcHR5IHtcbiAgcGFkZGluZzogMzhweCAxOHB4O1xuICBjb2xvcjogIzk5YTFiMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5zdi1tb3NhaWMtYWRkLWJ1dHRvbiB7XG4gIGZsZXg6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweCAxMnB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDU3Njc7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICNlNWU3ZWI7XG4gIGJhY2tncm91bmQ6ICMxNzFhMjE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc3YtbW9zYWljLWFkZC1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzcyZDhlNjtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhOWMwO1xuICBiYWNrZ3JvdW5kOiAjMmIzMDNiO1xufVxuXG4uc3YtbW9zYWljLXRyYW5zZmVyLWFjdGlvbnMge1xuICBmbGV4OiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogN3B4O1xuICBwYWRkaW5nOiAxMHB4IDEycHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzZjQ1NTM7XG59XG5cbi5zdi1tb3NhaWMtdHJhbnNmZXItYWN0aW9ucyBidXR0b24ge1xuICBtaW4td2lkdGg6IDA7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDU3Njc7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICNlNWU3ZWI7XG4gIGJhY2tncm91bmQ6ICMxNzFhMjE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc3YtbW9zYWljLXRyYW5zZmVyLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM3MmQ4ZTY7XG4gIGJvcmRlci1jb2xvcjogIzAwYTljMDtcbiAgYmFja2dyb3VuZDogIzJiMzAzYjtcbn1cblxuLnN2LW1vc2FpYy10cmFuc2Zlci1hY3Rpb25zIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN2LW1vc2FpYy1lZGl0b3Ige1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIycHggMjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMxNzFhMjE7XG59XG5cbi5zdi1tb3NhaWMtZWRpdG9yLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4uc3YtbW9zYWljLWVkaXRvci1oZWFkaW5nIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2YyZjNmNTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3YtbW9zYWljLWVkaXRvci1oZWFkaW5nIHAge1xuICBtYXJnaW46IDNweCAwIDA7XG4gIGNvbG9yOiAjOTlhMWIyO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5zdi1tb3NhaWMtcmVtb3ZlLWJ1dHRvbiB7XG4gIGZsZXg6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTk0YjRiO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjZmY5ZDlkO1xuICBiYWNrZ3JvdW5kOiAjMjQxOTFkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnN2LW1vc2FpYy1yZW1vdmUtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNhNTNmNDY7XG59XG5cbi5zdi1tb3NhaWMtZm9ybS1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMnB4O1xuICBwYWRkaW5nOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Y0NTUzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICMyNTI4MzI7XG59XG5cbi5zdi1tb3NhaWMtZmllbGQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDVweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3YtbW9zYWljLWZpZWxkID4gc3BhbiB7XG4gIGNvbG9yOiAjZThlYWVlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdi1tb3NhaWMtZmllbGQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDU3Njc7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICNmMmYzZjU7XG4gIGJhY2tncm91bmQ6ICMxMjE1MWI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnN2LW1vc2FpYy1maWVsZCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAwYTljMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMGE5YzA7XG59XG5cbi5zdi1tb3NhaWMtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3MDc4ODc7XG59XG5cbi5zdi1tb3NhaWMtZmllbGQgc21hbGwge1xuICBjb2xvcjogIzk5YTFiMjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uc3YtbW9zYWljLWlkLW5vdGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWlubWF4KDAsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMGE5YzA7XG4gIGNvbG9yOiAjYjlkZmU1O1xuICBiYWNrZ3JvdW5kOiAjMTgzMDM4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zdi1tb3NhaWMtaWQtbm90ZSBjb2RlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICM3MmQ4ZTY7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3YtbW9zYWljLWVkaXRvci1lbXB0eSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMjYwcHg7XG4gIGNvbG9yOiAjOTlhMWIyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdi1tb3NhaWMtZWRpdG9yLWVtcHR5IHN0cm9uZyB7XG4gIGNvbG9yOiAjZTRlN2VjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdi1tb3NhaWMtZWRpdG9yLWVtcHR5IHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5zdi1tb3NhaWMtbW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDU0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzZjQ1NTM7XG4gIGJhY2tncm91bmQ6ICMxYjFlMjY7XG59XG5cbi5zdi1tb3NhaWMtbW9kYWwtZm9vdGVyID4gc3BhbiB7XG4gIGNvbG9yOiAjOTlhMWIyO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zdi1tb3NhaWMtdHJhbnNmZXItc3RhdHVzLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzcyZDhlNjtcbn1cblxuLnN2LW1vc2FpYy10cmFuc2Zlci1zdGF0dXMuZXJyb3Ige1xuICBjb2xvcjogI2ZmOWQ5ZDtcbn1cblxuLnN2LW1vc2FpYy1tb2RhbC1mb290ZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLnN2LW1vc2FpYy1jYW5jZWwsIC5zdi1tb3NhaWMtYXBwbHkge1xuICBtaW4td2lkdGg6IDg4cHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc3YtbW9zYWljLWNhbmNlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDU3Njc7XG4gIGNvbG9yOiAjZTVlN2ViO1xuICBiYWNrZ3JvdW5kOiAjMjUyODMyO1xufVxuXG4uc3YtbW9zYWljLWNhbmNlbDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMwMGE5YzA7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDY7XG59XG5cbi5zdi1tb3NhaWMtYXBwbHkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5OGIwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwOThiMDtcbn1cblxuLnN2LW1vc2FpYy1hcHBseTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwYjBjYTtcbiAgYmFja2dyb3VuZDogIzAwN2Y5NDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5zdi1tb3NhaWMtbW9kYWwtYmFja2Ryb3Age1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAuc3YtbW9zYWljLW1vZGFsIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cHgpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2cHgpO1xuICB9XG4gIC5zdi1tb3NhaWMtbGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyMHB4IG1pbm1heCgwLCAxZnIpO1xuICB9XG4gIC5zdi1tb3NhaWMtZWRpdG9yIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIC5zdi1tb3NhaWMtbW9kYWwtZm9vdGVyID4gc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc3YtbW9zYWljLW1vZGFsLWZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvU3BhY2VWaWV3L3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUNnQixzQkFBQTtBQUVoQjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIscUJBQUE7RUFBdUIsdUJB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O0VBQWlDLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtBQStXbEU7O0FBOVdBO0VBQStCLGVBQUE7QUFrWC9COztBQWhYQTtFQUEwQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFBZ0MsU0FBQTtFQUFXLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLDZCQUFBO0VBQStCLG1CQUFBO0FBMlg5Szs7QUExWEE7RUFBaUMsY0FBQTtFQUFnQixlQUFBO0FBK1hqRDs7QUE5WEE7RUFBcUMsY0FBQTtBQWtZckM7O0FBallBO0VBQW1DLGNBQUE7QUFxWW5DOztBQXBZQTtFQUFnQyxhQUFBO0VBQWUsUUFBQTtBQXlZL0M7O0FBeFlBO0VBQXNDLGVBQUE7RUFBaUIsWUFBQTtFQUFjLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixlQUFBO0FBaVozSDs7QUFoWkE7RUFBb0IseUJBQUE7RUFBMkIsY0FBQTtFQUFnQixtQkFBQTtBQXNaL0Q7O0FBclpBO0VBQTBCLFdBQUE7RUFBYSxxQkFBQTtFQUF1QixtQkFBQTtBQTJaOUQ7O0FBMVpBO0VBQW1CLHlCQUFBO0VBQTJCLFdBQUE7RUFBYSxtQkFBQTtBQWdhM0Q7O0FBL1pBO0VBQXlCLHFCQUFBO0VBQXVCLG1CQUFBO0FBb2FoRDs7QUFsYUE7RUFDRTtJQUE0QixZQUFBO0VBc2E1QjtFQXJhQTtJQUFtQix5QkFBQTtJQUEyQiwwQkFBQTtFQXlhOUM7RUF4YUE7SUFBb0IsMkNBQUE7RUEyYXBCO0VBMWFBO0lBQW9CLGFBQUE7RUE2YXBCO0VBNWFBO0lBQWlDLGFBQUE7RUErYWpDO0VBOWFBO0lBQTBCLHlCQUFBO0VBaWIxQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdi1zZXR0aW5nLFxcbi5zdi1zZXR0aW5nICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnN2LXNldHRpbmcge1xcbiAgLS1zdi1wcmltYXJ5OiAjMDBhOWMwO1xcbiAgLS1zdi10ZXh0OiAjZTVlN2ViO1xcbiAgLS1zdi1tdXRlZDogIzk5YTFiMjtcXG4gIC0tc3YtYm9yZGVyOiAjM2Y0NTUzO1xcbiAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDEwMCU7IHBhZGRpbmc6IDAgMTZweDsgY29sb3I6IHZhcigtLXN2LXRleHQpOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZm9udDogMTNweC8xLjQgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zdi1zZXR0aW5nLXNlY3Rpb24geyB3aWR0aDogMTAwJTsgcGFkZGluZzogMTZweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3YtYm9yZGVyKTsgfVxcbi5zdi1zZXR0aW5nLXRpdGxlIHsgbWFyZ2luLWJvdHRvbTogMTBweDsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBsaW5lLWhlaWdodDogMThweDsgfVxcbi5zdi1zZXR0aW5nLWRlc2NyaXB0aW9uIHsgbWFyZ2luOiAtNXB4IDAgMTJweDsgY29sb3I6IHZhcigtLXN2LW11dGVkKTsgZm9udC1zaXplOiAxMXB4OyBsaW5lLWhlaWdodDogMS40NTsgfVxcbi5zdi1tb3NhaWMtc2V0dGluZ3MtYnV0dG9uIHsgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDMycHg7IH1cXG5cXG4uc3YtbW9zYWljLW1vZGFsLWJhY2tkcm9wIHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgei1pbmRleDogMTAwMDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAyMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41NSk7IH1cXG4uc3YtbW9zYWljLW1vZGFsIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgd2lkdGg6IG1pbigxMTgwcHgsIGNhbGMoMTAwdncgLSAzMnB4KSk7IGhlaWdodDogbWluKDc2MHB4LCBjYWxjKDEwMHZoIC0gMzJweCkpOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCAjM2Y0NTUzOyBib3JkZXItcmFkaXVzOiAzcHg7IGNvbG9yOiAjZTVlN2ViOyBiYWNrZ3JvdW5kOiAjMTcxYTIxOyBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoMCwgMCwgMCwgLjU1KTsgfVxcbi5zdi1tb3NhaWMtbW9kYWwsIC5zdi1tb3NhaWMtbW9kYWwgKiB7IHNjcm9sbGJhci13aWR0aDogdGhpbjsgc2Nyb2xsYmFyLWNvbG9yOiAjNzc4MDhmIHRyYW5zcGFyZW50OyB9XFxuLnN2LW1vc2FpYy1tb2RhbCAqOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyB9XFxuLnN2LW1vc2FpYy1tb2RhbCAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuLnN2LW1vc2FpYy1tb2RhbCAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6ICM3NzgwOGY7IGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IH1cXG5cXG4uc3YtbW9zYWljLW1vZGFsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMjBweDsgbWluLWhlaWdodDogNjJweDsgcGFkZGluZzogMTNweCAxNnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmNDU1MzsgYmFja2dyb3VuZDogIzFiMWUyNjsgfVxcbi5zdi1tb3NhaWMtbW9kYWwtaGVhZGVyIGgzIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA1MDA7IGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuLnN2LW1vc2FpYy1tb2RhbC1oZWFkZXIgcCB7IG1hcmdpbjogMnB4IDAgMDsgY29sb3I6ICM5OWExYjI7IGZvbnQtc2l6ZTogMTJweDsgfVxcbi5zdi1tb3NhaWMtY2xvc2UgeyBkaXNwbGF5OiBncmlkOyBwbGFjZS1pdGVtczogY2VudGVyOyB3aWR0aDogMjhweDsgaGVpZ2h0OiAyOHB4OyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDJweDsgY29sb3I6ICNjYmQwZDg7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMjNweDsgbGluZS1oZWlnaHQ6IDE7IH1cXG4uc3YtbW9zYWljLWNsb3NlOmhvdmVyIHsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMzNDNhNDY7IH1cXG5cXG4uc3YtbW9zYWljLWxheW91dCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMwcHggbWlubWF4KDAsIDFmcik7IGZsZXg6IDE7IG1pbi1oZWlnaHQ6IDA7IH1cXG4uc3YtbW9zYWljLWxpc3QtcGFuZWwgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtaW4td2lkdGg6IDA7IG1pbi1oZWlnaHQ6IDA7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzZjQ1NTM7IGJhY2tncm91bmQ6ICMyNTI4MzI7IH1cXG4uc3YtbW9zYWljLWxpc3QtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEycHg7IG1pbi1oZWlnaHQ6IDYwcHg7IHBhZGRpbmc6IDEwcHggMTJweCAxMHB4IDE2cHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2Y0NTUzOyB9XFxuLnN2LW1vc2FpYy1saXN0LWhlYWRlciA+IGRpdiB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMnB4OyB9XFxuLnN2LW1vc2FpYy1saXN0LWhlYWRlciBzdHJvbmcgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4uc3YtbW9zYWljLWxpc3QtaGVhZGVyIHNwYW4geyBjb2xvcjogIzk5YTFiMjsgZm9udC1zaXplOiAxMHB4OyB9XFxuLnN2LW1vc2FpYy1saXN0IHsgZmxleDogMTsgbWluLWhlaWdodDogMDsgcGFkZGluZzogOHB4IDA7IG92ZXJmbG93OiBhdXRvOyB9XFxuLnN2LW1vc2FpYy1saXN0LWl0ZW0geyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjhweCBtaW5tYXgoMCwgMWZyKTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA5cHg7IHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiA1OHB4OyBwYWRkaW5nOiA4cHggMTJweCA4cHggMTVweDsgYm9yZGVyOiAwOyBjb2xvcjogI2U1ZTdlYjsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGN1cnNvcjogcG9pbnRlcjsgdGV4dC1hbGlnbjogbGVmdDsgfVxcbi5zdi1tb3NhaWMtbGlzdC1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogIzJiMzAzYjsgfVxcbi5zdi1tb3NhaWMtbGlzdC1pdGVtLmFjdGl2ZSB7IGJhY2tncm91bmQ6ICMxNzFhMjE7IH1cXG4uc3YtbW9zYWljLWxpc3QtaXRlbS5hY3RpdmU6OmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwIGF1dG8gMCAwOyB3aWR0aDogM3B4OyBiYWNrZ3JvdW5kOiAjMDBhOWMwOyB9XFxuLnN2LW1vc2FpYy1saXN0LWluZGV4IHsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgYm9yZGVyOiAxcHggc29saWQgIzUwNTc2NzsgYm9yZGVyLXJhZGl1czogNTAlOyBjb2xvcjogI2FlYjRjMjsgYmFja2dyb3VuZDogIzE3MWEyMTsgZm9udC1zaXplOiAxMHB4OyB9XFxuLnN2LW1vc2FpYy1saXN0LWl0ZW0uYWN0aXZlIC5zdi1tb3NhaWMtbGlzdC1pbmRleCB7IGNvbG9yOiAjNzJkOGU2OyBib3JkZXItY29sb3I6ICMwMGE5YzA7IGJhY2tncm91bmQ6ICMxNzMzM2E7IH1cXG4uc3YtbW9zYWljLWxpc3QtdGV4dCB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogM3B4OyBtaW4td2lkdGg6IDA7IH1cXG4uc3YtbW9zYWljLWxpc3QtdGV4dCBzdHJvbmcsIC5zdi1tb3NhaWMtbGlzdC10ZXh0IHNtYWxsIHsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4uc3YtbW9zYWljLWxpc3QtdGV4dCBzdHJvbmcgeyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4uc3YtbW9zYWljLWxpc3QtdGV4dCBzbWFsbCB7IGNvbG9yOiAjOTlhMWIyOyBmb250LXNpemU6IDlweDsgfVxcbi5zdi1tb3NhaWMtbGlzdC1lbXB0eSB7IHBhZGRpbmc6IDM4cHggMThweDsgY29sb3I6ICM5OWExYjI7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxMXB4OyBsaW5lLWhlaWdodDogMS42OyB9XFxuLnN2LW1vc2FpYy1hZGQtYnV0dG9uIHsgZmxleDogbm9uZTsgbWluLWhlaWdodDogNDBweDsgbWFyZ2luOiAxMHB4IDEycHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgIzUwNTc2NzsgYm9yZGVyLXJhZGl1czogMnB4OyBjb2xvcjogI2U1ZTdlYjsgYmFja2dyb3VuZDogIzE3MWEyMTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEycHg7IH1cXG4uc3YtbW9zYWljLWFkZC1idXR0b246aG92ZXIgeyBjb2xvcjogIzcyZDhlNjsgYm9yZGVyLWNvbG9yOiAjMDBhOWMwOyBiYWNrZ3JvdW5kOiAjMmIzMDNiOyB9XFxuLnN2LW1vc2FpYy10cmFuc2Zlci1hY3Rpb25zIHsgZmxleDogbm9uZTsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDdweDsgcGFkZGluZzogMTBweCAxMnB4IDA7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2Y0NTUzOyB9XFxuLnN2LW1vc2FpYy10cmFuc2Zlci1hY3Rpb25zIGJ1dHRvbiB7IG1pbi13aWR0aDogMDsgaGVpZ2h0OiAzMnB4OyBwYWRkaW5nOiAwIDhweDsgYm9yZGVyOiAxcHggc29saWQgIzUwNTc2NzsgYm9yZGVyLXJhZGl1czogMnB4OyBjb2xvcjogI2U1ZTdlYjsgYmFja2dyb3VuZDogIzE3MWEyMTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEwcHg7IH1cXG4uc3YtbW9zYWljLXRyYW5zZmVyLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHsgY29sb3I6ICM3MmQ4ZTY7IGJvcmRlci1jb2xvcjogIzAwYTljMDsgYmFja2dyb3VuZDogIzJiMzAzYjsgfVxcbi5zdi1tb3NhaWMtdHJhbnNmZXItYWN0aW9ucyBpbnB1dCB7IGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uc3YtbW9zYWljLWVkaXRvciB7IG1pbi13aWR0aDogMDsgbWluLWhlaWdodDogMDsgcGFkZGluZzogMjJweCAyNHB4OyBvdmVyZmxvdzogYXV0bzsgYmFja2dyb3VuZDogIzE3MWEyMTsgfVxcbi5zdi1tb3NhaWMtZWRpdG9yLWhlYWRpbmcgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDI0cHg7IHBhZGRpbmctYm90dG9tOiAxOHB4OyB9XFxuLnN2LW1vc2FpYy1lZGl0b3ItaGVhZGluZyBoNCB7IG1hcmdpbjogMDsgY29sb3I6ICNmMmYzZjU7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbi5zdi1tb3NhaWMtZWRpdG9yLWhlYWRpbmcgcCB7IG1hcmdpbjogM3B4IDAgMDsgY29sb3I6ICM5OWExYjI7IGZvbnQtc2l6ZTogMTFweDsgfVxcbi5zdi1tb3NhaWMtcmVtb3ZlLWJ1dHRvbiB7IGZsZXg6IG5vbmU7IGhlaWdodDogMzBweDsgcGFkZGluZzogMCAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCAjYTk0YjRiOyBib3JkZXItcmFkaXVzOiAzcHg7IGNvbG9yOiAjZmY5ZDlkOyBiYWNrZ3JvdW5kOiAjMjQxOTFkOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTFweDsgfVxcbi5zdi1tb3NhaWMtcmVtb3ZlLWJ1dHRvbjpob3ZlciB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjYTUzZjQ2OyB9XFxuLnN2LW1vc2FpYy1mb3JtLWNhcmQgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDIycHg7IHBhZGRpbmc6IDE4cHg7IGJvcmRlcjogMXB4IHNvbGlkICMzZjQ1NTM7IGJvcmRlci1yYWRpdXM6IDRweDsgYmFja2dyb3VuZDogIzI1MjgzMjsgfVxcbi5zdi1tb3NhaWMtZmllbGQgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDVweDsgbWFyZ2luOiAwOyB9XFxuLnN2LW1vc2FpYy1maWVsZCA+IHNwYW4geyBjb2xvcjogI2U4ZWFlZTsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNTAwOyB9XFxuLnN2LW1vc2FpYy1maWVsZCBpbnB1dCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDM0cHg7IHBhZGRpbmc6IDAgMTBweDsgYm9yZGVyOiAxcHggc29saWQgIzUwNTc2NzsgYm9yZGVyLXJhZGl1czogMnB4OyBjb2xvcjogI2YyZjNmNTsgYmFja2dyb3VuZDogIzEyMTUxYjsgb3V0bGluZTogbm9uZTsgZm9udC1zaXplOiAxMnB4OyB9XFxuLnN2LW1vc2FpYy1maWVsZCBpbnB1dDpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzAwYTljMDsgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMGE5YzA7IH1cXG4uc3YtbW9zYWljLWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNzA3ODg3OyB9XFxuLnN2LW1vc2FpYy1maWVsZCBzbWFsbCB7IGNvbG9yOiAjOTlhMWIyOyBmb250LXNpemU6IDEwcHg7IH1cXG4uc3YtbW9zYWljLWlkLW5vdGUgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWlubWF4KDAsIDFmcik7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgbWFyZ2luLXRvcDogMThweDsgcGFkZGluZzogMTBweCAxMnB4OyBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMGE5YzA7IGNvbG9yOiAjYjlkZmU1OyBiYWNrZ3JvdW5kOiAjMTgzMDM4OyBmb250LXNpemU6IDEwcHg7IH1cXG4uc3YtbW9zYWljLWlkLW5vdGUgY29kZSB7IG92ZXJmbG93OiBoaWRkZW47IGNvbG9yOiAjNzJkOGU2OyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbi5zdi1tb3NhaWMtZWRpdG9yLWVtcHR5IHsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgYWxpZ24tY29udGVudDogY2VudGVyOyBnYXA6IDdweDsgaGVpZ2h0OiAxMDAlOyBtaW4taGVpZ2h0OiAyNjBweDsgY29sb3I6ICM5OWExYjI7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbi5zdi1tb3NhaWMtZWRpdG9yLWVtcHR5IHN0cm9uZyB7IGNvbG9yOiAjZTRlN2VjOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4uc3YtbW9zYWljLWVkaXRvci1lbXB0eSBzcGFuIHsgZm9udC1zaXplOiAxMXB4OyB9XFxuXFxuLnN2LW1vc2FpYy1tb2RhbC1mb290ZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMTZweDsgbWluLWhlaWdodDogNTRweDsgcGFkZGluZzogMTBweCAxNnB4OyBib3JkZXItdG9wOiAxcHggc29saWQgIzNmNDU1MzsgYmFja2dyb3VuZDogIzFiMWUyNjsgfVxcbi5zdi1tb3NhaWMtbW9kYWwtZm9vdGVyID4gc3BhbiB7IGNvbG9yOiAjOTlhMWIyOyBmb250LXNpemU6IDEwcHg7IH1cXG4uc3YtbW9zYWljLXRyYW5zZmVyLXN0YXR1cy5zdWNjZXNzIHsgY29sb3I6ICM3MmQ4ZTY7IH1cXG4uc3YtbW9zYWljLXRyYW5zZmVyLXN0YXR1cy5lcnJvciB7IGNvbG9yOiAjZmY5ZDlkOyB9XFxuLnN2LW1vc2FpYy1tb2RhbC1mb290ZXIgPiBkaXYgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgfVxcbi5zdi1tb3NhaWMtY2FuY2VsLCAuc3YtbW9zYWljLWFwcGx5IHsgbWluLXdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMycHg7IHBhZGRpbmc6IDAgMTJweDsgYm9yZGVyLXJhZGl1czogMnB4OyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTJweDsgfVxcbi5zdi1tb3NhaWMtY2FuY2VsIHsgYm9yZGVyOiAxcHggc29saWQgIzUwNTc2NzsgY29sb3I6ICNlNWU3ZWI7IGJhY2tncm91bmQ6ICMyNTI4MzI7IH1cXG4uc3YtbW9zYWljLWNhbmNlbDpob3ZlciB7IGNvbG9yOiAjZmZmOyBib3JkZXItY29sb3I6ICMwMGE5YzA7IGJhY2tncm91bmQ6ICMzNDNhNDY7IH1cXG4uc3YtbW9zYWljLWFwcGx5IHsgYm9yZGVyOiAxcHggc29saWQgIzAwOThiMDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDk4YjA7IH1cXG4uc3YtbW9zYWljLWFwcGx5OmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAjMDBiMGNhOyBiYWNrZ3JvdW5kOiAjMDA3Zjk0OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAuc3YtbW9zYWljLW1vZGFsLWJhY2tkcm9wIHsgcGFkZGluZzogOHB4OyB9XFxuICAuc3YtbW9zYWljLW1vZGFsIHsgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnB4KTsgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZweCk7IH1cXG4gIC5zdi1tb3NhaWMtbGF5b3V0IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjBweCBtaW5tYXgoMCwgMWZyKTsgfVxcbiAgLnN2LW1vc2FpYy1lZGl0b3IgeyBwYWRkaW5nOiAxNnB4OyB9XFxuICAuc3YtbW9zYWljLW1vZGFsLWZvb3RlciA+IHNwYW4geyBkaXNwbGF5OiBub25lOyB9XFxuICAuc3YtbW9zYWljLW1vZGFsLWZvb3RlciB7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc2V0dGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zZXR0aW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfREVNX1VSTD0naHR0cHM6Ly9zZ20udXpzcGFjZS51ei9pbWFnZS9yZXN0L3NlcnZpY2VzL0FkbWluUmFzdGVyL3JlcHVibGljX0RFTS9JbWFnZVNlcnZlcidcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBJbW11dGFibGUsIHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCAnLi9zZXR0aW5nLmNzcydcbmltcG9ydCB7IERFRkFVTFRfREVNX1VSTCB9IGZyb20gJy4uL3J1bnRpbWUvdGVycmFpbi9kZW1Db25maWcnXG5cbnR5cGUgU291cmNlID0geyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nIH1cbnR5cGUgVHJhbnNmZXJTdGF0dXMgPSB7IHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcic7IHRleHQ6IHN0cmluZyB9IHwgbnVsbFxuXG5jb25zdCBjbG9uZVNvdXJjZXMgPSAodmFsdWU6IGFueSk6IFNvdXJjZVtdID0+ICh2YWx1ZSB8fCBbXSkubWFwKChyb3c6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKHtcbiAgaWQ6IFN0cmluZyhyb3c/LmlkIHx8IGByLSR7aW5kZXggKyAxfWApLFxuICBuYW1lOiBTdHJpbmcocm93Py5uYW1lIHx8ICcnKSxcbiAgdXJsOiBTdHJpbmcocm93Py51cmwgfHwgJycpXG59KSlcblxuZnVuY3Rpb24gdmFsaWRhdGVTb3VyY2VzKHZhbHVlOiBhbnkpOiB7IHJvd3M6IFNvdXJjZVtdOyBlcnJvcjogc3RyaW5nIHwgbnVsbCB9IHtcbiAgY29uc3QgaW5wdXQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogdmFsdWU/LnJhc3RlcnNcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkgcmV0dXJuIHsgcm93czogW10sIGVycm9yOiAn0JIgSlNPTiDQtNC+0LvQttC10L0g0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LzQsNGB0YHQuNCyIHJhc3RlcnMuJyB9XG4gIGlmICghaW5wdXQubGVuZ3RoKSByZXR1cm4geyByb3dzOiBbXSwgZXJyb3I6ICfQodC/0LjRgdC+0Log0YHQu9C+0ZHQsiDQvdC1INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQv9GD0YHRgtGL0LwuJyB9XG5cbiAgY29uc3QgdXNlZElkcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IHJvd3M6IFNvdXJjZVtdID0gW11cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IG5hbWUgPSBTdHJpbmcoaW5wdXRbaW5kZXhdPy5uYW1lIHx8ICcnKS50cmltKClcbiAgICBjb25zdCB1cmwgPSBTdHJpbmcoaW5wdXRbaW5kZXhdPy51cmwgfHwgJycpLnRyaW0oKS5yZXBsYWNlKC9cXC8kLywgJycpXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyByb3dzOiBbXSwgZXJyb3I6IGDQoyDRgdC70L7RjyAke2luZGV4ICsgMX0g0L3QtSDRg9C60LDQt9Cw0L3QviDQvdCw0LfQstCw0L3QuNC1LmAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBuZXcgVVJMKHVybClcbiAgICAgIGlmICghL15odHRwcz86JC8udGVzdChwYXJzZWQucHJvdG9jb2wpIHx8ICEvXFwvSW1hZ2VTZXJ2ZXJcXC8/JC9pLnRlc3QocGFyc2VkLnBhdGhuYW1lKSkgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkJylcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiB7IHJvd3M6IFtdLCBlcnJvcjogYNCjINGB0LvQvtGPIMKrJHtuYW1lfcK7INGD0LrQsNC30LDQvSDQvdC10LrQvtGA0YDQtdC60YLQvdGL0LkgVVJMIEltYWdlU2VydmVyLmAgfVxuICAgIH1cbiAgICBsZXQgaWQgPSBTdHJpbmcoaW5wdXRbaW5kZXhdPy5pZCB8fCBgci0ke2luZGV4ICsgMX1gKS50cmltKCkgfHwgYHItJHtpbmRleCArIDF9YFxuICAgIGlmICh1c2VkSWRzLmhhcyhpZCkpIGlkID0gYCR7aWR9LSR7aW5kZXggKyAxfWBcbiAgICB1c2VkSWRzLmFkZChpZClcbiAgICByb3dzLnB1c2goeyBpZCwgbmFtZSwgdXJsIH0pXG4gIH1cbiAgcmV0dXJuIHsgcm93cywgZXJyb3I6IG51bGwgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55Pikge1xuICBjb25zdCBbZGVtRHJhZnQsc2V0RGVtRHJhZnRdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuY29uZmlnPy5kZW1VcmwgfHwgREVGQVVMVF9ERU1fVVJMKVxuICBjb25zdCBbZGVtRXJyb3Isc2V0RGVtRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7IHNldERlbURyYWZ0KHByb3BzLmNvbmZpZz8uZGVtVXJsIHx8IERFRkFVTFRfREVNX1VSTCkgfSwgW3Byb3BzLmNvbmZpZz8uZGVtVXJsXSlcbiAgY29uc3Qgc2F2ZURlbSA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gZGVtRHJhZnQudHJpbSgpLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBVUkwodXJsKVxuICAgICAgaWYgKCEvXmh0dHBzPzokLy50ZXN0KHBhcnNlZC5wcm90b2NvbCkgfHwgIS9cXC9JbWFnZVNlcnZlciQvaS50ZXN0KHBhcnNlZC5wYXRobmFtZSkpIHRocm93IEVycm9yKCdpbnZhbGlkIERFTSBVUkwnKVxuICAgICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6cHJvcHMuaWQsIGNvbmZpZzoocHJvcHMuY29uZmlnIHx8IEltbXV0YWJsZSh7fSkpLnNldCgnZGVtVXJsJyx1cmwpIH0pXG4gICAgICBzZXREZW1FcnJvcignJylcbiAgICB9IGNhdGNoIHsgc2V0RGVtRXJyb3IoJ9Cj0LrQsNC20LjRgtC1INC/0L7Qu9C90YvQuSBVUkwgSW1hZ2VTZXJ2ZXIg0LTQu9GPIERFTS4nKSB9XG4gIH1cbiAgY29uc3Qgcm93cyA9IGNsb25lU291cmNlcyhwcm9wcy5jb25maWc/LnJhc3RlcnMpXG4gIGNvbnN0IFttb3NhaWNTZXR0aW5nc09wZW4sIHNldE1vc2FpY1NldHRpbmdzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RyYWZ0Um93cywgc2V0RHJhZnRSb3dzXSA9IFJlYWN0LnVzZVN0YXRlPFNvdXJjZVtdPihbXSlcbiAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3RyYW5zZmVyU3RhdHVzLCBzZXRUcmFuc2ZlclN0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxUcmFuc2ZlclN0YXR1cz4obnVsbClcbiAgY29uc3QgdXBsb2FkUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3Qgb3BlblNldHRpbmdzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBjbG9uZVNvdXJjZXMocHJvcHMuY29uZmlnPy5yYXN0ZXJzKVxuICAgIHNldERyYWZ0Um93cyhuZXh0KVxuICAgIHNldFNlbGVjdGVkSWQobmV4dFswXT8uaWQgfHwgbnVsbClcbiAgICBzZXRUcmFuc2ZlclN0YXR1cyhudWxsKVxuICAgIHNldE1vc2FpY1NldHRpbmdzT3Blbih0cnVlKVxuICB9XG5cbiAgY29uc3QgY2xvc2VTZXR0aW5ncyA9ICgpID0+IHNldE1vc2FpY1NldHRpbmdzT3BlbihmYWxzZSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbW9zYWljU2V0dGluZ3NPcGVuKSByZXR1cm5cbiAgICBjb25zdCBvbktleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSBjbG9zZVNldHRpbmdzKClcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKVxuICB9LCBbbW9zYWljU2V0dGluZ3NPcGVuXSlcblxuICBjb25zdCBhZGRTb3VyY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBgci0ke0RhdGUubm93KCl9YFxuICAgIHNldERyYWZ0Um93cyhjdXJyZW50ID0+IFsuLi5jdXJyZW50LCB7IGlkLCBuYW1lOiBg0JzQvtC30LDQuNC60LAgJHtjdXJyZW50Lmxlbmd0aCArIDF9YCwgdXJsOiAnJyB9XSlcbiAgICBzZXRTZWxlY3RlZElkKGlkKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlU2VsZWN0ZWQgPSAoZmllbGQ6ICduYW1lJyB8ICd1cmwnLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0RHJhZnRSb3dzKGN1cnJlbnQgPT4gY3VycmVudC5tYXAocm93ID0+IHJvdy5pZCA9PT0gc2VsZWN0ZWRJZCA/IHsgLi4ucm93LCBbZmllbGRdOiB2YWx1ZSB9IDogcm93KSlcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIHNldERyYWZ0Um93cyhjdXJyZW50ID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudC5maW5kSW5kZXgocm93ID0+IHJvdy5pZCA9PT0gc2VsZWN0ZWRJZClcbiAgICAgIGNvbnN0IG5leHQgPSBjdXJyZW50LmZpbHRlcihyb3cgPT4gcm93LmlkICE9PSBzZWxlY3RlZElkKVxuICAgICAgc2V0U2VsZWN0ZWRJZChuZXh0W01hdGgubWluKE1hdGgubWF4KGluZGV4LCAwKSwgbmV4dC5sZW5ndGggLSAxKV0/LmlkIHx8IG51bGwpXG4gICAgICByZXR1cm4gbmV4dFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhcHBseVNldHRpbmdzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrZWQgPSB2YWxpZGF0ZVNvdXJjZXMoZHJhZnRSb3dzKVxuICAgIGlmIChjaGVja2VkLmVycm9yKSB7XG4gICAgICBzZXRUcmFuc2ZlclN0YXR1cyh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGNoZWNrZWQuZXJyb3IgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjb25maWcgPSBwcm9wcy5jb25maWcgfHwgSW1tdXRhYmxlKHt9KVxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiBwcm9wcy5pZCwgY29uZmlnOiBjb25maWcuc2V0KCdyYXN0ZXJzJywgSW1tdXRhYmxlKGNoZWNrZWQucm93cykpIH0pXG4gICAgY2xvc2VTZXR0aW5ncygpXG4gIH1cblxuICBjb25zdCBkb3dubG9hZExheWVycyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgc2NoZW1hOiAnc3BhY2V2aWV3LW1vc2FpYy1sYXllcnMnLFxuICAgICAgdmVyc2lvbjogMSxcbiAgICAgIGV4cG9ydGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHJhc3RlcnM6IGRyYWZ0Um93cy5tYXAocm93ID0+ICh7IGlkOiByb3cuaWQsIG5hbWU6IHJvdy5uYW1lLnRyaW0oKSwgdXJsOiByb3cudXJsLnRyaW0oKSB9KSlcbiAgICB9LCBudWxsLCAyKVxuICAgIGNvbnN0IGhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtwYXlsb2FkXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyB9KSlcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgbGluay5ocmVmID0gaHJlZlxuICAgIGxpbmsuZG93bmxvYWQgPSAnc3BhY2V2aWV3LW1vc2FpYy1sYXllcnMuanNvbidcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG4gICAgbGluay5jbGljaygpXG4gICAgbGluay5yZW1vdmUoKVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoaHJlZiksIDEwMDApXG4gICAgc2V0VHJhbnNmZXJTdGF0dXMoeyB0eXBlOiAnc3VjY2VzcycsIHRleHQ6IGDQodC60LDRh9Cw0L3QviDRgdC70L7RkdCyOiAke2RyYWZ0Um93cy5sZW5ndGh9LmAgfSlcbiAgfVxuXG4gIGNvbnN0IHVwbG9hZExheWVycyA9IGFzeW5jIChmaWxlOiBGaWxlIHwgbnVsbCkgPT4ge1xuICAgIGlmICghZmlsZSkgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoYXdhaXQgZmlsZS50ZXh0KCkpXG4gICAgICBjb25zdCBjaGVja2VkID0gdmFsaWRhdGVTb3VyY2VzKHBhcnNlZClcbiAgICAgIGlmIChjaGVja2VkLmVycm9yKSB0aHJvdyBuZXcgRXJyb3IoY2hlY2tlZC5lcnJvcilcbiAgICAgIHNldERyYWZ0Um93cyhjaGVja2VkLnJvd3MpXG4gICAgICBzZXRTZWxlY3RlZElkKGNoZWNrZWQucm93c1swXT8uaWQgfHwgbnVsbClcbiAgICAgIHNldFRyYW5zZmVyU3RhdHVzKHsgdHlwZTogJ3N1Y2Nlc3MnLCB0ZXh0OiBg0JfQsNCz0YDRg9C20LXQvdC+INGB0LvQvtGR0LI6ICR7Y2hlY2tlZC5yb3dzLmxlbmd0aH0uINCd0LDQttC80LjRgtC1IMKr0J/RgNC40LzQtdC90LjRgtGMwrssINGH0YLQvtCx0Ysg0YHQvtGF0YDQsNC90LjRgtGMINC40YUuYCB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRUcmFuc2ZlclN0YXR1cyh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L/RgNC+0YfQuNGC0LDRgtGMIEpTT04t0YTQsNC50LsuJyB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAodXBsb2FkUmVmLmN1cnJlbnQpIHVwbG9hZFJlZi5jdXJyZW50LnZhbHVlID0gJydcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZCA9IGRyYWZ0Um93cy5maW5kKHJvdyA9PiByb3cuaWQgPT09IHNlbGVjdGVkSWQpIHx8IG51bGxcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzdi1zZXR0aW5nXCI+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3Ytc2V0dGluZy1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LXNldHRpbmctdGl0bGVcIj7QodC70L7QuCDQvNC+0LfQsNC40LrQuDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1zZXR0aW5nLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgINCf0L7QtNC60LvRjtGH0LXQvdC+OiB7cm93cy5sZW5ndGh9LiDQndCw0YHRgtGA0L7QudGC0LUgSW1hZ2VTZXJ2ZXIt0YHQu9C+0LgsINC40YHQv9C+0LvRjNC30YPQtdC80YvQtSDQsiDRgdC10LvQtdC60YLQvtGA0LUsINCz0YDRg9C/0L/QsNGFINC4INC60LDRgNGC0L7Rh9C60LDRhSDRgdC90LjQvNC60L7Qsi5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInN2LW1vc2FpYy1zZXR0aW5ncy1idXR0b25cIiBvbkNsaWNrPXtvcGVuU2V0dGluZ3N9PlxuICAgICAgICDQndCw0YHRgtGA0L7QudC60Lgg0YHQu9C+0ZHQsiDQvNC+0LfQsNC40LrQuFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3Ytc2V0dGluZy1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LXNldHRpbmctdGl0bGVcIj5ERU0g4oCUINCy0YvRgdC+0YLQsCDQvNC10YHRgtC90L7RgdGC0Lg8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Ytc2V0dGluZy1kZXNjcmlwdGlvblwiPtCe0YLQtNC10LvRjNC90YvQuSDRgNCw0YHRgtGAINCy0YvRgdC+0YIg0LTQu9GPINGA0LXQu9GM0LXRhNCwLCDQstGL0YHQvtGC0Ysg0LIg0YLQvtGH0LrQtSDQuCDQv9GA0L7RhNC40LvRjy4gREVNINC90LUg0LLQutC70Y7Rh9Cw0LXRgtGB0Y8g0LIg0YHQv9C40YHQvtC6INC80L7QvdC40YLQvtGA0LjQvdCz0L7QsiDQuCDRgNCw0YHRh9GR0YIgTkRWSS48L2Rpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdi1tb3NhaWMtZmllbGRcIj48c3Bhbj7QodGB0YvQu9C60LAgSW1hZ2VTZXJ2ZXIgREVNPC9zcGFuPjxpbnB1dCB2YWx1ZT17ZGVtRHJhZnR9IG9uQ2hhbmdlPXtldmVudD0+c2V0RGVtRHJhZnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz48L2xhYmVsPlxuICAgICAge2RlbUVycm9yJiY8cCByb2xlPVwiYWxlcnRcIj57ZGVtRXJyb3J9PC9wPn1cbiAgICAgIDxCdXR0b24gb25DbGljaz17c2F2ZURlbX0+0KHQvtGF0YDQsNC90LjRgtGMIERFTTwvQnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgICB7bW9zYWljU2V0dGluZ3NPcGVuICYmIDxkaXYgY2xhc3NOYW1lPVwic3YtbW9zYWljLW1vZGFsLWJhY2tkcm9wXCIgb25Nb3VzZURvd249e2V2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIGNsb3NlU2V0dGluZ3MoKVxuICAgIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1tb3NhaWMtbW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCJzdi1tb3NhaWMtbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1tb3NhaWMtbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBpZD1cInN2LW1vc2FpYy1tb2RhbC10aXRsZVwiPtCd0LDRgdGC0YDQvtC50LrQuCDRgdC70L7RkdCyINC80L7Qt9Cw0LjQutC4PC9oMz5cbiAgICAgICAgICAgIDxwPtCU0L7QsdCw0LLQu9C10L3QuNC1LCDRg9C00LDQu9C10L3QuNC1INC4INC40LfQvNC10L3QtdC90LjQtSDQv9C+0LTQutC70Y7Rh9C10L3QuNC5IEltYWdlU2VydmVyLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN2LW1vc2FpYy1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZVNldHRpbmdzfSBhcmlhLWxhYmVsPVwi0JfQsNC60YDRi9GC0YxcIj7DlzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LW1vc2FpYy1sYXlvdXRcIj5cbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwic3YtbW9zYWljLWxpc3QtcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3YtbW9zYWljLWxpc3QtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz7QodC70L7QuDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxzcGFuPntkcmFmdFJvd3MubGVuZ3RofSDQv9C+0LTQutC70Y7Rh9C10L3Qvjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3YtbW9zYWljLWxpc3RcIj5cbiAgICAgICAgICAgICAge2RyYWZ0Um93cy5tYXAoKHJvdywgaW5kZXgpID0+IDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3Jvdy5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bzdi1tb3NhaWMtbGlzdC1pdGVtICR7cm93LmlkID09PSBzZWxlY3RlZElkID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSWQocm93LmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN2LW1vc2FpYy1saXN0LWluZGV4XCI+e2luZGV4ICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3YtbW9zYWljLWxpc3QtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cm93Lm5hbWUudHJpbSgpIHx8IGDQnNC+0LfQsNC40LrQsCAke2luZGV4ICsgMX1gfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPntyb3cudXJsLnRyaW0oKSB8fCAn0KHRgdGL0LvQutCwIEltYWdlU2VydmVyINC90LUg0YPQutCw0LfQsNC90LAnfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj4pfVxuICAgICAgICAgICAgICB7ZHJhZnRSb3dzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInN2LW1vc2FpYy1saXN0LWVtcHR5XCI+XG4gICAgICAgICAgICAgICAg0J/QvtC60LAg0L3QtdGCINGB0LvQvtGR0LIuPGJyIC8+0J3QsNC20LzQuNGC0LUgwqsrwrssINGH0YLQvtCx0Ysg0LTQvtCx0LDQstC40YLRjCDQvNC+0LfQsNC40LrRgy5cbiAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LW1vc2FpYy10cmFuc2Zlci1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHVwbG9hZFJlZi5jdXJyZW50Py5jbGljaygpfT7Ql9Cw0LPRgNGD0LfQuNGC0YwgSlNPTjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtkb3dubG9hZExheWVyc30+0KHQutCw0YfQsNGC0YwgSlNPTjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVmPXt1cGxvYWRSZWZ9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiYXBwbGljYXRpb24vanNvbiwuanNvblwiIG9uQ2hhbmdlPXtldmVudCA9PiB2b2lkIHVwbG9hZExheWVycyhldmVudC50YXJnZXQuZmlsZXM/LlswXSB8fCBudWxsKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdi1tb3NhaWMtYWRkLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXthZGRTb3VyY2V9Pisg0JTQvtCx0LDQstC40YLRjCDQvNC+0LfQsNC40LrRgzwvYnV0dG9uPlxuICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJzdi1tb3NhaWMtZWRpdG9yXCI+XG4gICAgICAgICAgICB7c2VsZWN0ZWQgPyA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LW1vc2FpYy1lZGl0b3ItaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDQ+e3NlbGVjdGVkLm5hbWUudHJpbSgpIHx8ICfQndC+0LLQsNGPINC80L7Qt9Cw0LjQutCwJ308L2g0PlxuICAgICAgICAgICAgICAgICAgPHA+0KPQutCw0LbQuNGC0LUg0L/QvtC90Y/RgtC90L7QtSDQvdCw0LfQstCw0L3QuNC1INC4INC/0L7Qu9C90YvQuSBVUkwg0YHQtdGA0LLQuNGB0LAuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3YtbW9zYWljLXJlbW92ZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cmVtb3ZlU2VsZWN0ZWR9PtCj0LTQsNC70LjRgtGMINGB0LvQvtC5PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3YtbW9zYWljLWZvcm0tY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdi1tb3NhaWMtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPtCd0LDQt9Cy0LDQvdC40LUg0LzQvtC30LDQuNC60Lg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3NlbGVjdGVkLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVTZWxlY3RlZCgnbmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwi0J3QsNC/0YDQuNC80LXRgDogMjAyNiDigJQg0LzQvtC90LjRgtC+0YDQuNC90LMgM1wiIC8+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+0J3QsNC30LLQsNC90LjQtSDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0LIg0YHQtdC70LXQutGC0L7RgNC1INC4INC60LDRgNGC0L7Rh9C60LDRhSDRgNCw0YHRgtGA0L7Qsi48L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN2LW1vc2FpYy1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+0KHRgdGL0LvQutCwIEltYWdlU2VydmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtzZWxlY3RlZC51cmx9IG9uQ2hhbmdlPXtldmVudCA9PiB1cGRhdGVTZWxlY3RlZCgndXJsJywgZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJodHRwczovLy4uLi9JbWFnZVNlcnZlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQv9C+0LvQvdGL0Lkg0LDQtNGA0LXRgSBBcmNHSVMgSW1hZ2VTZXJ2ZXIuPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LW1vc2FpYy1pZC1ub3RlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+0JLQvdGD0YLRgNC10L3QvdC40Lkg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGNvZGU+e3NlbGVjdGVkLmlkfTwvY29kZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4gOiA8ZGl2IGNsYXNzTmFtZT1cInN2LW1vc2FpYy1lZGl0b3ItZW1wdHlcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz7QodC70L7QuSDQvdC1INCy0YvQsdGA0LDQvTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8c3Bhbj7QktGL0LHQtdGA0LjRgtC1INC80L7Qt9Cw0LjQutGDINGB0LvQtdCy0LAg0LjQu9C4INC00L7QsdCw0LLRjNGC0LUg0L3QvtCy0YPRjiDQutC90L7Qv9C60L7QuSDQv9C+0LQg0YHQv9C40YHQutC+0LwuPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1tb3NhaWMtbW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0cmFuc2ZlclN0YXR1cyA/IGBzdi1tb3NhaWMtdHJhbnNmZXItc3RhdHVzICR7dHJhbnNmZXJTdGF0dXMudHlwZX1gIDogJyd9Pnt0cmFuc2ZlclN0YXR1cz8udGV4dCB8fCAn0JjQt9C80LXQvdC10L3QuNGPINCy0YHRgtGD0L/Rj9GCINCyINGB0LjQu9GDINC/0L7RgdC70LUg0L/RgNC40LzQtdC90LXQvdC40Y8uJ308L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3YtbW9zYWljLWNhbmNlbFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZVNldHRpbmdzfT7QntGC0LzQtdC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN2LW1vc2FpYy1hcHBseVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXthcHBseVNldHRpbmdzfT7Qn9GA0LjQvNC10L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj59XG4gIDwvZGl2PlxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==