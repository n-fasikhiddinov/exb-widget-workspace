System.register(["jimu-core","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.fire-loader-shell-fill {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  min-height: 12rem;
}

.fire-loader {
  --loader-inset: 28px;
  width: 52px;
  height: 52px;
  aspect-ratio: 1;
  position: relative;
  color: rgb(var(--text-dim));
  flex-shrink: 0;
}

.fire-loader-compact {
  --loader-inset: 22px;
  width: 40px;
  height: 40px;
}

.fire-loader::before,
.fire-loader::after {
  content: "";
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 2px inset currentColor;
  animation: fireLoaderL4 2.5s infinite;
}

.fire-loader::after {
  animation-delay: -1.25s;
}

@keyframes fireLoaderL4 {
  0% {
    inset: 0 var(--loader-inset) var(--loader-inset) 0;
  }
  12.5% {
    inset: 0 var(--loader-inset) 0 0;
  }
  25% {
    inset: var(--loader-inset) var(--loader-inset) 0 0;
  }
  37.5% {
    inset: var(--loader-inset) 0 0 0;
  }
  50% {
    inset: var(--loader-inset) 0 0 var(--loader-inset);
  }
  62.5% {
    inset: 0 0 0 var(--loader-inset);
  }
  75% {
    inset: 0 0 var(--loader-inset) var(--loader-inset);
  }
  87.5% {
    inset: 0 0 var(--loader-inset) 0;
  }
  100% {
    inset: 0 var(--loader-inset) var(--loader-inset) 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .fire-loader::before,
  .fire-loader::after {
    animation: none;
    inset: 0;
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.css","webpack://./your-extensions/widgets/Fire%20Portal/src/runtime/shared/loader/Loader.css"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,OAAA;EACA,WAAA;EACA,iBAAA;ACCJ;;ADEA;EACI,oBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,2BAAA;EACA,cAAA;ACCJ;;ADEA;EACI,oBAAA;EACA,WAAA;EACA,YAAA;ACCJ;;ADEA;;EAEI,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,wCAAA;EACA,qCAAA;ACCJ;;ADEA;EACI,uBAAA;ACCJ;;ADEA;EACI;IACI,kDAAA;ECCN;EDCE;IACI,gCAAA;ECCN;EDCE;IACI,kDAAA;ECCN;EDCE;IACI,gCAAA;ECCN;EDCE;IACI,kDAAA;ECCN;EDCE;IACI,gCAAA;ECCN;EDCE;IACI,kDAAA;ECCN;EDCE;IACI,gCAAA;ECCN;EDCE;IACI,kDAAA;ECCN;AACF;ADEA;EACI;;IAEI,eAAA;IACA,QAAA;ECAN;AACF","sourcesContent":[".fire-loader-shell-fill {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    width: 100%;\n    min-height: 12rem;\n}\n\n.fire-loader {\n    --loader-inset: 28px;\n    width: 52px;\n    height: 52px;\n    aspect-ratio: 1;\n    position: relative;\n    color: rgb(var(--text-dim));\n    flex-shrink: 0;\n}\n\n.fire-loader-compact {\n    --loader-inset: 22px;\n    width: 40px;\n    height: 40px;\n}\n\n.fire-loader::before,\n.fire-loader::after {\n    content: \"\";\n    position: absolute;\n    border-radius: 50px;\n    box-shadow: 0 0 0 2px inset currentColor;\n    animation: fireLoaderL4 2.5s infinite;\n}\n\n.fire-loader::after {\n    animation-delay: -1.25s;\n}\n\n@keyframes fireLoaderL4 {\n    0% {\n        inset: 0 var(--loader-inset) var(--loader-inset) 0;\n    }\n    12.5% {\n        inset: 0 var(--loader-inset) 0 0;\n    }\n    25% {\n        inset: var(--loader-inset) var(--loader-inset) 0 0;\n    }\n    37.5% {\n        inset: var(--loader-inset) 0 0 0;\n    }\n    50% {\n        inset: var(--loader-inset) 0 0 var(--loader-inset);\n    }\n    62.5% {\n        inset: 0 0 0 var(--loader-inset);\n    }\n    75% {\n        inset: 0 0 var(--loader-inset) var(--loader-inset);\n    }\n    87.5% {\n        inset: 0 0 var(--loader-inset) 0;\n    }\n    100% {\n        inset: 0 var(--loader-inset) var(--loader-inset) 0;\n    }\n}\n\n@media (prefers-reduced-motion: reduce) {\n    .fire-loader::before,\n    .fire-loader::after {\n        animation: none;\n        inset: 0;\n    }\n}\n",".fire-loader-shell-fill {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  width: 100%;\n  min-height: 12rem;\n}\n\n.fire-loader {\n  --loader-inset: 28px;\n  width: 52px;\n  height: 52px;\n  aspect-ratio: 1;\n  position: relative;\n  color: rgb(var(--text-dim));\n  flex-shrink: 0;\n}\n\n.fire-loader-compact {\n  --loader-inset: 22px;\n  width: 40px;\n  height: 40px;\n}\n\n.fire-loader::before,\n.fire-loader::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50px;\n  box-shadow: 0 0 0 2px inset currentColor;\n  animation: fireLoaderL4 2.5s infinite;\n}\n\n.fire-loader::after {\n  animation-delay: -1.25s;\n}\n\n@keyframes fireLoaderL4 {\n  0% {\n    inset: 0 var(--loader-inset) var(--loader-inset) 0;\n  }\n  12.5% {\n    inset: 0 var(--loader-inset) 0 0;\n  }\n  25% {\n    inset: var(--loader-inset) var(--loader-inset) 0 0;\n  }\n  37.5% {\n    inset: var(--loader-inset) 0 0 0;\n  }\n  50% {\n    inset: var(--loader-inset) 0 0 var(--loader-inset);\n  }\n  62.5% {\n    inset: 0 0 0 var(--loader-inset);\n  }\n  75% {\n    inset: 0 0 var(--loader-inset) var(--loader-inset);\n  }\n  87.5% {\n    inset: 0 0 var(--loader-inset) 0;\n  }\n  100% {\n    inset: 0 var(--loader-inset) var(--loader-inset) 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .fire-loader::before,\n  .fire-loader::after {\n    animation: none;\n    inset: 0;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/setting/setting.css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/setting/setting.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.settingArea {
  width: 100%;
  padding: 0;
  color: inherit;
  font-family: "Geologica", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.settingsContent {
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* .sourceSelectorCard,
.accessControlCard {
    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));
    border-radius: 6px;
    background: var(--dark-100, rgba(255, 255, 255, 0.025));
} */
.sourceSelectorCard {
  padding: 12px;
}

.panelCardLabel {
  margin-bottom: 9px;
  color: var(--dark-800, rgba(255, 255, 255, 0.72));
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.sourceSelectorCard > div:last-child {
  width: 100%;
}

.accessControlCard {
  padding: 13px 12px 12px;
}

.accessControlHeader {
  margin-bottom: 12px;
}

.accessControlTitle {
  margin-bottom: 3px;
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

.accessControlDescription {
  color: var(--dark-800, rgba(255, 255, 255, 0.66));
  font-size: 12px;
  line-height: 17px;
}

.accessSettingsButton {
  width: 100%;
  min-height: 34px;
  border-radius: 4px;
  font-weight: 500;
}

.sourceSelectorCard button {
  border-radius: 4px;
}

.modalArea {
  color: #f3f4f6;
  font-family: "Geologica", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modalBlock {
  width: min(1200px, 100vw - 32px);
  height: min(800px, 100vh - 32px);
  background: #1f222b;
  border: 1px solid #343a49;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 305px 1fr;
}

.modalList {
  background: #252c41;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
}

.modalListHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modalListTitle {
  font-size: 17px;
  font-weight: 700;
}

.modalListSubtitle {
  margin-top: 3px;
  color: #aeb6ca;
  font-size: 12px;
}

.fieldList {
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 0;
}

.modalItem {
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #77839f;
  background: #293148;
  cursor: pointer;
  transition: 0.2s;
}

.modalItem:hover,
.modalItem.selected {
  background: #33405f;
  border-color: #b6c4ed;
}

.modalItemTitle {
  font-size: 18px;
  font-weight: 600;
}

.modalItemInfo {
  margin-top: 5px;
  font-size: 13px;
  color: #b8bfd1;
}

.modalItemInfo span {
  color: #ffffff;
  font-weight: 700;
}

.addFieldButton {
  height: 64px;
  border-radius: 8px;
  border: 1px dashed #9ca8c4;
  background: transparent;
  color: #ffffff;
  font-size: 34px;
  cursor: pointer;
}

.addFieldButton:hover {
  background: #303a56;
}

.modalBottomActions {
  margin-top: auto;
  display: grid;
  gap: 8px;
}

.jsonButton {
  height: 38px;
  border-radius: 8px;
  border: 1px solid #56627c;
  background: #1f2638;
  color: #f3f4f6;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}

.jsonButton:hover {
  background: #303a56;
}

.jsonButton input {
  display: none;
}

.modalRightPanel {
  min-width: 0;
  min-height: 0;
  background: #20232c;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modalItemFullInfo {
  flex: 1;
  min-height: 0;
  padding: 22px;
  background: #20232c;
  overflow-y: auto;
  overflow-x: hidden;
}

.rightHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #3a4050;
}

.rightTitle {
  font-size: 24px;
  font-weight: 800;
}

.rightField {
  margin-top: 6px;
  color: #aeb6ca;
  font-size: 14px;
}

.rightHeaderActions,
.ruleActions,
.groupActions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.iconButton,
.miniIconButton {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #5a6680;
  background: #293148;
  color: white;
  cursor: pointer;
}

.miniIconButton {
  width: 26px;
  height: 26px;
  font-size: 12px;
}

.iconButton:hover,
.miniIconButton:hover {
  background: #3b4868;
}

.iconButton.danger,
.miniIconButton.danger {
  border-color: #8f4f5b;
  color: #ffb8c1;
}

.rulesArea {
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ruleCard {
  padding: 14px;
  border-radius: 10px;
  background: #262b36;
  border: 1px solid #3d465b;
  transition: 0.2s;
}

.ruleCard.selectedRule {
  border-color: #9baee0;
  background: #2c3448;
}

.ruleHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.ruleInfo {
  flex: 1;
  min-width: 0;
}

.ruleLabel {
  color: #aeb6ca;
  font-size: 12px;
  margin-bottom: 5px;
}

.ruleValue {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  overflow-wrap: anywhere;
}

.ruleActions {
  opacity: 0;
  transition: 0.2s;
  flex-shrink: 0;
}

.ruleCard:hover .ruleActions {
  opacity: 1;
}

.smallButton {
  min-height: 34px;
  border-radius: 8px;
  border: 1px solid #5a6680;
  background: #293148;
  color: white;
  cursor: pointer;
  padding: 0 10px;
}

.smallButton:hover {
  background: #3b4868;
}

.groupsArea {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.groupRow {
  background: #1d2230;
  border: 1px solid #384258;
  border-radius: 8px;
  padding: 8px 10px;
  color: #d9deea;
  font-size: 13px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  transition: 0.2s;
}

.groupRow.selectedGroup {
  border-color: #9baee0;
  background: #273149;
}

.groupRow span {
  overflow-wrap: anywhere;
}

.groupActions {
  opacity: 0;
  transition: 0.2s;
  flex-shrink: 0;
}

.groupRow:hover .groupActions {
  opacity: 1;
}

.addRuleButton {
  height: 44px;
  border-radius: 9px;
  border: 1px dashed #78849f;
  background: transparent;
  color: white;
  cursor: pointer;
}

.addRuleButton:hover {
  background: #2b3348;
}

.emptyMini,
.emptyRules {
  color: #8e96aa;
  font-size: 13px;
}

.emptyRules {
  padding: 20px;
  border-radius: 10px;
  border: 1px dashed #555f76;
  text-align: center;
}

.dialogArea {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialogBlock {
  width: 520px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  overflow: auto;
  background: #252b38;
  border: 1px solid #4c566c;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
}

.dialogTitle {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
}

.dialogText {
  color: #c2c8d5;
  margin-bottom: 16px;
}

.dialogInput {
  width: 100%;
  min-height: 40px;
  margin-bottom: 10px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #59657d;
  background: #1e2430;
  color: white;
  outline: none;
}

.dialogInput:focus {
  border-color: #9baee0;
}

.dialogActions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;
}

.dialogActions button {
  height: 36px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid #59657d;
  background: #30384a;
  color: white;
  cursor: pointer;
}

.dialogActions button:hover {
  background: #3b465d;
}

.dangerButton {
  border-color: #985565 !important;
  background: #4a2430 !important;
  color: #ffc4cc !important;
}

.operatorTabs {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}

.operatorTabs.fourTabs {
  grid-template-columns: repeat(4, 1fr);
}

.operatorTabs button {
  height: 36px;
  border-radius: 8px;
  border: 1px solid #59657d;
  background: #1e2430;
  color: #d8deea;
  cursor: pointer;
}

.operatorTabs button:hover,
.operatorTabs button.active {
  background: #35415b;
  border-color: #9baee0;
  color: #ffffff;
}

.twoInputGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.inListArea {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.inAddRow {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: start;
}

.inValueRow {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: start;
}

.previewWhere {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #465169;
  background: #1e2430;
  color: #aeb6ca;
  font-size: 13px;
}

.previewWhere span {
  display: block;
  margin-top: 6px;
  color: #ffffff;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.optionalRuleBlock {
  margin-top: 12px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #465169;
  background: #202637;
}

.optionalRuleTitle {
  margin-bottom: 10px;
  font-size: 13px;
  color: #c6ccda;
}

.bulkActionBar {
  min-height: 42px;
  padding: 8px 10px;
  border-radius: 9px;
  border: 1px solid #59657d;
  background: #202637;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #d8deea;
  font-size: 13px;
}

.dangerButtonSmall {
  min-height: 30px;
  padding: 0 10px;
  border-radius: 7px;
  border: 1px solid #985565;
  background: #4a2430;
  color: #ffc4cc;
  cursor: pointer;
}

.dangerButtonSmall:hover {
  background: #633040;
}

.selectCheckbox {
  width: 16px;
  height: 16px;
  accent-color: #9baee0;
  cursor: pointer;
  flex-shrink: 0;
}

.groupIdentity {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.groupName {
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.groupNameLoading {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 40px;
}

.groupId {
  color: #aeb6ca;
  font-size: 12px;
  font-family: Consolas, "Courier New", monospace;
  overflow-wrap: anywhere;
}

.groupMembers {
  margin-top: 2px;
  color: #8fa3cf;
  font-size: 12px;
}

.groupIdCopyButton {
  width: fit-content;
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: #aeb6ca;
  font-size: 12px;
  line-height: 1.35;
  font-family: Consolas, "Courier New", monospace;
  text-align: left;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition: color 0.18s ease;
}

.groupIdCopyButton:hover {
  color: #ffffff;
  text-decoration: underline;
}

.settingNotice {
  position: fixed;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11000;
  min-width: 210px;
  padding: 11px 18px;
  border-radius: 9px;
  border: 1px solid #7185ae;
  background: #273149;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  pointer-events: none;
}

.globalSettingActions {
  flex-shrink: 0;
  min-height: 66px;
  padding: 13px 22px;
  border-top: 1px solid #3a4050;
  background: #20232c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.saveState {
  color: #8e96aa;
  font-size: 13px;
}

.saveState.changed {
  color: #f1c27d;
}

.globalSettingButtons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cancelConfigButton,
.applyConfigButton {
  height: 38px;
  padding: 0 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.18s ease;
}

.cancelConfigButton {
  border: 1px solid #59657d;
  background: #293148;
  color: #ffffff;
}

.applyConfigButton {
  border: 1px solid #728ac3;
  background: #385083;
  color: #ffffff;
}

.cancelConfigButton:hover:not(:disabled) {
  background: #38435b;
}

.applyConfigButton:hover:not(:disabled) {
  background: #46619a;
}

.cancelConfigButton:disabled,
.applyConfigButton:disabled {
  opacity: 0.45;
  cursor: default;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Fire Portal/src/setting/setting.css","webpack://./your-extensions/widgets/Fire%20Portal/src/setting/setting.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap\");\n\n.settingArea {\n    width: 100%;\n    padding: 0;\n    color: inherit;\n    font-family: \"Geologica\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.settingsContent {\n    padding: 14px 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n\n.sourceSelectorCard {\n    padding: 12px;\n}\n\n.panelCardLabel {\n    margin-bottom: 9px;\n    color: var(--dark-800, rgba(255, 255, 255, 0.72));\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n}\n\n.sourceSelectorCard>div:last-child {\n    width: 100%;\n}\n\n.accessControlCard {\n    padding: 13px 12px 12px;\n}\n\n.accessControlHeader {\n    margin-bottom: 12px;\n}\n\n.accessControlTitle {\n    margin-bottom: 3px;\n    color: inherit;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n}\n\n.accessControlDescription {\n    color: var(--dark-800, rgba(255, 255, 255, 0.66));\n    font-size: 12px;\n    line-height: 17px;\n}\n\n.accessSettingsButton {\n    width: 100%;\n    min-height: 34px;\n    border-radius: 4px;\n    font-weight: 500;\n}\n\n.sourceSelectorCard button {\n    border-radius: 4px;\n}\n\n.modalArea {\n    color: #f3f4f6;\n    font-family: \"Geologica\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modalBlock {\n    width: min(1200px, calc(100vw - 32px));\n    height: min(800px, calc(100vh - 32px));\n    background: #1f222b;\n    border: 1px solid #343a49;\n    border-radius: 10px;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n    background: #252c41;\n    padding: 14px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    min-height: 0;\n}\n\n.modalListHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.modalListTitle {\n    font-size: 17px;\n    font-weight: 700;\n}\n\n.modalListSubtitle {\n    margin-top: 3px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.fieldList {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    min-height: 0;\n}\n\n.modalItem {\n    padding: 12px 14px;\n    border-radius: 8px;\n    border: 1px solid #77839f;\n    background: #293148;\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n    background: #33405f;\n    border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.modalItemInfo {\n    margin-top: 5px;\n    font-size: 13px;\n    color: #b8bfd1;\n}\n\n.modalItemInfo span {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.addFieldButton {\n    height: 64px;\n    border-radius: 8px;\n    border: 1px dashed #9ca8c4;\n    background: transparent;\n    color: #ffffff;\n    font-size: 34px;\n    cursor: pointer;\n}\n\n.addFieldButton:hover {\n    background: #303a56;\n}\n\n.modalBottomActions {\n    margin-top: auto;\n    display: grid;\n    gap: 8px;\n}\n\n.jsonButton {\n    height: 38px;\n    border-radius: 8px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #f3f4f6;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n}\n\n.jsonButton:hover {\n    background: #303a56;\n}\n\n.jsonButton input {\n    display: none;\n}\n\n.modalRightPanel {\n    min-width: 0;\n    min-height: 0;\n    background: #20232c;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.modalItemFullInfo {\n    flex: 1;\n    min-height: 0;\n    padding: 22px;\n    background: #20232c;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.rightHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n    padding-bottom: 16px;\n    border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n    font-size: 24px;\n    font-weight: 800;\n}\n\n.rightField {\n    margin-top: 6px;\n    color: #aeb6ca;\n    font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.iconButton,\n.miniIconButton {\n    width: 34px;\n    height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n}\n\n.miniIconButton {\n    width: 26px;\n    height: 26px;\n    font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n    background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n    border-color: #8f4f5b;\n    color: #ffb8c1;\n}\n\n.rulesArea {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.ruleCard {\n    padding: 14px;\n    border-radius: 10px;\n    background: #262b36;\n    border: 1px solid #3d465b;\n    transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n    border-color: #9baee0;\n    background: #2c3448;\n}\n\n.ruleHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.ruleInfo {\n    flex: 1;\n    min-width: 0;\n}\n\n.ruleLabel {\n    color: #aeb6ca;\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.ruleValue {\n    font-size: 15px;\n    font-weight: 700;\n    color: #ffffff;\n    overflow-wrap: anywhere;\n}\n\n.ruleActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n    opacity: 1;\n}\n\n.smallButton {\n    min-height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n    padding: 0 10px;\n}\n\n.smallButton:hover {\n    background: #3b4868;\n}\n\n.groupsArea {\n    margin-top: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.groupRow {\n    background: #1d2230;\n    border: 1px solid #384258;\n    border-radius: 8px;\n    padding: 8px 10px;\n    color: #d9deea;\n    font-size: 13px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 12px;\n    transition: 0.2s;\n}\n\n.groupRow.selectedGroup {\n    border-color: #9baee0;\n    background: #273149;\n}\n\n.groupRow span {\n    overflow-wrap: anywhere;\n}\n\n.groupActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n    opacity: 1;\n}\n\n.addRuleButton {\n    height: 44px;\n    border-radius: 9px;\n    border: 1px dashed #78849f;\n    background: transparent;\n    color: white;\n    cursor: pointer;\n}\n\n.addRuleButton:hover {\n    background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.emptyRules {\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px dashed #555f76;\n    text-align: center;\n}\n\n.dialogArea {\n    position: fixed;\n    inset: 0;\n    z-index: 10000;\n    background: rgba(0, 0, 0, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dialogBlock {\n    width: 520px;\n    max-width: calc(100vw - 32px);\n    max-height: calc(100vh - 32px);\n    overflow: auto;\n    background: #252b38;\n    border: 1px solid #4c566c;\n    border-radius: 12px;\n    padding: 18px;\n    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n    font-size: 18px;\n    font-weight: 800;\n    margin-bottom: 12px;\n}\n\n.dialogText {\n    color: #c2c8d5;\n    margin-bottom: 16px;\n}\n\n.dialogInput {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: white;\n    outline: none;\n}\n\n.dialogInput:focus {\n    border-color: #9baee0;\n}\n\n.dialogActions {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n    margin-top: 10px;\n}\n\n.dialogActions button {\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #30384a;\n    color: white;\n    cursor: pointer;\n}\n\n.dialogActions button:hover {\n    background: #3b465d;\n}\n\n.dangerButton {\n    border-color: #985565 !important;\n    background: #4a2430 !important;\n    color: #ffc4cc !important;\n}\n\n.operatorTabs {\n    display: grid;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n    background: #35415b;\n    border-color: #9baee0;\n    color: #ffffff;\n}\n\n.twoInputGrid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.inListArea {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.inAddRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.inValueRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.previewWhere {\n    margin-top: 12px;\n    padding: 10px 12px;\n    border-radius: 8px;\n    border: 1px solid #465169;\n    background: #1e2430;\n    color: #aeb6ca;\n    font-size: 13px;\n}\n\n.previewWhere span {\n    display: block;\n    margin-top: 6px;\n    color: #ffffff;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n    margin-top: 12px;\n    padding: 12px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #202637;\n}\n\n.optionalRuleTitle {\n    margin-bottom: 10px;\n    font-size: 13px;\n    color: #c6ccda;\n}\n\n.bulkActionBar {\n    min-height: 42px;\n    padding: 8px 10px;\n    border-radius: 9px;\n    border: 1px solid #59657d;\n    background: #202637;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    color: #d8deea;\n    font-size: 13px;\n}\n\n.dangerButtonSmall {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #985565;\n    background: #4a2430;\n    color: #ffc4cc;\n    cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n    background: #633040;\n}\n\n.selectCheckbox {\n    width: 16px;\n    height: 16px;\n    accent-color: #9baee0;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.groupIdentity {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n.groupName {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.groupNameLoading {\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    min-height: 40px;\n}\n\n.groupId {\n    color: #aeb6ca;\n    font-size: 12px;\n    font-family: Consolas, \"Courier New\", monospace;\n    overflow-wrap: anywhere;\n}\n\n.groupMembers {\n    margin-top: 2px;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n\n.groupIdCopyButton {\n    width: fit-content;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: #aeb6ca;\n    font-size: 12px;\n    line-height: 1.35;\n    font-family: Consolas, \"Courier New\", monospace;\n    text-align: left;\n    overflow-wrap: anywhere;\n    cursor: pointer;\n    transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n    color: #ffffff;\n    text-decoration: underline;\n}\n\n.settingNotice {\n    position: fixed;\n    top: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 11000;\n    min-width: 210px;\n    padding: 11px 18px;\n    border-radius: 9px;\n    border: 1px solid #7185ae;\n    background: #273149;\n    color: #ffffff;\n    font-size: 13px;\n    text-align: center;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n    pointer-events: none;\n}\n\n.globalSettingActions {\n    flex-shrink: 0;\n    min-height: 66px;\n    padding: 13px 22px;\n    border-top: 1px solid #3a4050;\n    background: #20232c;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.saveState {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.saveState.changed {\n    color: #f1c27d;\n}\n\n.globalSettingButtons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n    height: 38px;\n    padding: 0 18px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 13px;\n    transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n}\n\n.applyConfigButton {\n    border: 1px solid #728ac3;\n    background: #385083;\n    color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n    background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n    background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n    opacity: 0.45;\n    cursor: default;\n}","@import url(\"https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap\");\n.settingArea {\n  width: 100%;\n  padding: 0;\n  color: inherit;\n  font-family: \"Geologica\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.settingsContent {\n  padding: 14px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n.sourceSelectorCard {\n  padding: 12px;\n}\n\n.panelCardLabel {\n  margin-bottom: 9px;\n  color: var(--dark-800, rgba(255, 255, 255, 0.72));\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n}\n\n.sourceSelectorCard > div:last-child {\n  width: 100%;\n}\n\n.accessControlCard {\n  padding: 13px 12px 12px;\n}\n\n.accessControlHeader {\n  margin-bottom: 12px;\n}\n\n.accessControlTitle {\n  margin-bottom: 3px;\n  color: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.accessControlDescription {\n  color: var(--dark-800, rgba(255, 255, 255, 0.66));\n  font-size: 12px;\n  line-height: 17px;\n}\n\n.accessSettingsButton {\n  width: 100%;\n  min-height: 34px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n\n.sourceSelectorCard button {\n  border-radius: 4px;\n}\n\n.modalArea {\n  color: #f3f4f6;\n  font-family: \"Geologica\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modalBlock {\n  width: min(1200px, 100vw - 32px);\n  height: min(800px, 100vh - 32px);\n  background: #1f222b;\n  border: 1px solid #343a49;\n  border-radius: 10px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n  background: #252c41;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n}\n\n.modalListHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.modalListTitle {\n  font-size: 17px;\n  font-weight: 700;\n}\n\n.modalListSubtitle {\n  margin-top: 3px;\n  color: #aeb6ca;\n  font-size: 12px;\n}\n\n.fieldList {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-height: 0;\n}\n\n.modalItem {\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid #77839f;\n  background: #293148;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n  background: #33405f;\n  border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.modalItemInfo {\n  margin-top: 5px;\n  font-size: 13px;\n  color: #b8bfd1;\n}\n\n.modalItemInfo span {\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.addFieldButton {\n  height: 64px;\n  border-radius: 8px;\n  border: 1px dashed #9ca8c4;\n  background: transparent;\n  color: #ffffff;\n  font-size: 34px;\n  cursor: pointer;\n}\n\n.addFieldButton:hover {\n  background: #303a56;\n}\n\n.modalBottomActions {\n  margin-top: auto;\n  display: grid;\n  gap: 8px;\n}\n\n.jsonButton {\n  height: 38px;\n  border-radius: 8px;\n  border: 1px solid #56627c;\n  background: #1f2638;\n  color: #f3f4f6;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n\n.jsonButton:hover {\n  background: #303a56;\n}\n\n.jsonButton input {\n  display: none;\n}\n\n.modalRightPanel {\n  min-width: 0;\n  min-height: 0;\n  background: #20232c;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.modalItemFullInfo {\n  flex: 1;\n  min-height: 0;\n  padding: 22px;\n  background: #20232c;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.rightHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.rightField {\n  margin-top: 6px;\n  color: #aeb6ca;\n  font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.iconButton,\n.miniIconButton {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n}\n\n.miniIconButton {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n  background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n  border-color: #8f4f5b;\n  color: #ffb8c1;\n}\n\n.rulesArea {\n  padding-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.ruleCard {\n  padding: 14px;\n  border-radius: 10px;\n  background: #262b36;\n  border: 1px solid #3d465b;\n  transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n  border-color: #9baee0;\n  background: #2c3448;\n}\n\n.ruleHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.ruleInfo {\n  flex: 1;\n  min-width: 0;\n}\n\n.ruleLabel {\n  color: #aeb6ca;\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n\n.ruleValue {\n  font-size: 15px;\n  font-weight: 700;\n  color: #ffffff;\n  overflow-wrap: anywhere;\n}\n\n.ruleActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n  opacity: 1;\n}\n\n.smallButton {\n  min-height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n}\n\n.smallButton:hover {\n  background: #3b4868;\n}\n\n.groupsArea {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.groupRow {\n  background: #1d2230;\n  border: 1px solid #384258;\n  border-radius: 8px;\n  padding: 8px 10px;\n  color: #d9deea;\n  font-size: 13px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  transition: 0.2s;\n}\n\n.groupRow.selectedGroup {\n  border-color: #9baee0;\n  background: #273149;\n}\n\n.groupRow span {\n  overflow-wrap: anywhere;\n}\n\n.groupActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n  opacity: 1;\n}\n\n.addRuleButton {\n  height: 44px;\n  border-radius: 9px;\n  border: 1px dashed #78849f;\n  background: transparent;\n  color: white;\n  cursor: pointer;\n}\n\n.addRuleButton:hover {\n  background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.emptyRules {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px dashed #555f76;\n  text-align: center;\n}\n\n.dialogArea {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dialogBlock {\n  width: 520px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #252b38;\n  border: 1px solid #4c566c;\n  border-radius: 12px;\n  padding: 18px;\n  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n  font-size: 18px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n\n.dialogText {\n  color: #c2c8d5;\n  margin-bottom: 16px;\n}\n\n.dialogInput {\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding: 0 12px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: white;\n  outline: none;\n}\n\n.dialogInput:focus {\n  border-color: #9baee0;\n}\n\n.dialogActions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.dialogActions button {\n  height: 36px;\n  padding: 0 14px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #30384a;\n  color: white;\n  cursor: pointer;\n}\n\n.dialogActions button:hover {\n  background: #3b465d;\n}\n\n.dangerButton {\n  border-color: #985565 !important;\n  background: #4a2430 !important;\n  color: #ffc4cc !important;\n}\n\n.operatorTabs {\n  display: grid;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: #d8deea;\n  cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n  background: #35415b;\n  border-color: #9baee0;\n  color: #ffffff;\n}\n\n.twoInputGrid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.inListArea {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.inAddRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.inValueRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.previewWhere {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #465169;\n  background: #1e2430;\n  color: #aeb6ca;\n  font-size: 13px;\n}\n\n.previewWhere span {\n  display: block;\n  margin-top: 6px;\n  color: #ffffff;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n  margin-top: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1px solid #465169;\n  background: #202637;\n}\n\n.optionalRuleTitle {\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #c6ccda;\n}\n\n.bulkActionBar {\n  min-height: 42px;\n  padding: 8px 10px;\n  border-radius: 9px;\n  border: 1px solid #59657d;\n  background: #202637;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: #d8deea;\n  font-size: 13px;\n}\n\n.dangerButtonSmall {\n  min-height: 30px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #985565;\n  background: #4a2430;\n  color: #ffc4cc;\n  cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n  background: #633040;\n}\n\n.selectCheckbox {\n  width: 16px;\n  height: 16px;\n  accent-color: #9baee0;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.groupIdentity {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.groupName {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.groupNameLoading {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 40px;\n}\n\n.groupId {\n  color: #aeb6ca;\n  font-size: 12px;\n  font-family: Consolas, \"Courier New\", monospace;\n  overflow-wrap: anywhere;\n}\n\n.groupMembers {\n  margin-top: 2px;\n  color: #8fa3cf;\n  font-size: 12px;\n}\n\n.groupIdCopyButton {\n  width: fit-content;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #aeb6ca;\n  font-size: 12px;\n  line-height: 1.35;\n  font-family: Consolas, \"Courier New\", monospace;\n  text-align: left;\n  overflow-wrap: anywhere;\n  cursor: pointer;\n  transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n.settingNotice {\n  position: fixed;\n  top: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 11000;\n  min-width: 210px;\n  padding: 11px 18px;\n  border-radius: 9px;\n  border: 1px solid #7185ae;\n  background: #273149;\n  color: #ffffff;\n  font-size: 13px;\n  text-align: center;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n  pointer-events: none;\n}\n\n.globalSettingActions {\n  flex-shrink: 0;\n  min-height: 66px;\n  padding: 13px 22px;\n  border-top: 1px solid #3a4050;\n  background: #20232c;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.saveState {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.saveState.changed {\n  color: #f1c27d;\n}\n\n.globalSettingButtons {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n  height: 38px;\n  padding: 0 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n  border: 1px solid #59657d;\n  background: #293148;\n  color: #ffffff;\n}\n\n.applyConfigButton {\n  border: 1px solid #728ac3;\n  background: #385083;\n  color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n  background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n  background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n  opacity: 0.45;\n  cursor: default;\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.css"
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.css ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./Loader.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./your-extensions/widgets/Fire Portal/src/setting/setting.css"
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/Fire Portal/src/setting/setting.css ***!
  \*********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./setting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/setting/setting.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.tsx"
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.tsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.css */ "./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.css");


function Loader(props) {
    var _a;
    const { variant = "default", className, fill = false, "aria-label": ariaLabelProp, ariaLabel, } = props;
    const label = (_a = ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : ariaLabelProp) !== null && _a !== void 0 ? _a : "Loading";
    const spinner = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: [
            "fire-loader",
            variant === "compact" ? "fire-loader-compact" : "",
            className,
        ].filter(Boolean).join(" "), role: "status", "aria-label": label }));
    if (!fill) {
        return spinner;
    }
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "fire-loader-shell-fill" }, spinner);
}


/***/ },

/***/ "./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/index.ts"
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/index.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_0__.Loader)
/* harmony export */ });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/Loader.tsx");



/***/ },

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

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

/***/ },

/***/ "jimu-ui/advanced/data-source-selector"
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

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
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/Fire Portal/src/setting/setting.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_shared_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../runtime/shared/loader */ "./your-extensions/widgets/Fire Portal/src/runtime/shared/loader/index.ts");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/Fire Portal/src/setting/setting.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const GLOBAL_ACCESS_ID = "__global_access__";
const makeId = () => {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
};
const defaultConfig = {
    fullAccessGroups: [],
    rules: [],
};
const quoteValue = (value) => {
    const trimmed = value.trim();
    if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
        return trimmed;
    }
    return `'${trimmed.replace(/'/g, "''")}'`;
};
const normalizeOperator = (operator) => {
    if (operator === "equal")
        return "equal";
    if (operator === "range")
        return "range";
    if (operator === "include")
        return "include";
    if (operator === "like")
        return "like";
    if (operator === "eq")
        return "equal";
    if (operator === "between")
        return "range";
    if (operator === "in")
        return "include";
    return "equal";
};
const buildRuleWhere = (field, rule) => {
    var _a, _b, _c, _d, _e;
    if (rule.operator === "equal") {
        return `${field} = ${quoteValue((_a = rule.value) !== null && _a !== void 0 ? _a : "")}`;
    }
    if (rule.operator === "range") {
        return `${field} BETWEEN ${quoteValue((_b = rule.from) !== null && _b !== void 0 ? _b : "")} AND ${quoteValue((_c = rule.to) !== null && _c !== void 0 ? _c : "")}`;
    }
    if (rule.operator === "include") {
        const values = (_d = rule.values) !== null && _d !== void 0 ? _d : [];
        return `${field} IN (${values.map(quoteValue).join(", ")})`;
    }
    if (rule.operator === "like") {
        return `${field} LIKE ${quoteValue((_e = rule.value) !== null && _e !== void 0 ? _e : "")}`;
    }
    return "1=0";
};
const normalizeLoadedConfig = (data) => {
    return {
        fullAccessGroups: Array.isArray(data === null || data === void 0 ? void 0 : data.fullAccessGroups)
            ? data.fullAccessGroups.map((item) => String(item))
            : [],
        rules: Array.isArray(data === null || data === void 0 ? void 0 : data.rules)
            ? data.rules.map((fieldItem) => ({
                id: fieldItem.id || makeId(),
                title: fieldItem.title || "",
                field: fieldItem.field || "",
                rules: Array.isArray(fieldItem.rules)
                    ? fieldItem.rules.map((rule) => ({
                        id: rule.id || makeId(),
                        operator: normalizeOperator(rule.operator),
                        value: rule.value,
                        from: rule.from,
                        to: rule.to,
                        values: Array.isArray(rule.values)
                            ? rule.values.map((item) => String(item))
                            : [],
                        groups: Array.isArray(rule.groups)
                            ? rule.groups.map((item) => String(item))
                            : [],
                    }))
                    : [],
            }))
            : [],
    };
};
const cloneAccessConfig = (data) => {
    return normalizeLoadedConfig(JSON.parse(JSON.stringify(data)));
};
const getInitialAccessConfig = (widgetConfig) => {
    const storedConfig = widgetConfig === null || widgetConfig === void 0 ? void 0 : widgetConfig.accessConfig;
    if (!storedConfig) {
        return cloneAccessConfig(defaultConfig);
    }
    const plainConfig = typeof storedConfig.asMutable === "function"
        ? storedConfig.asMutable({ deep: true })
        : storedConfig;
    return normalizeLoadedConfig(plainConfig);
};
const getConfigGroupIds = (config) => {
    const groupIds = [
        ...config.fullAccessGroups,
        ...config.rules.flatMap((field) => field.rules.flatMap((rule) => rule.groups)),
    ];
    return Array.from(new Set(groupIds)).sort();
};
const getPortalGroupInfo = (esriRequest, portalUrl, groupId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const encodedGroupId = encodeURIComponent(groupId);
    const groupUrl = `${portalUrl}/sharing/rest/community/groups/${encodedGroupId}`;
    try {
        const groupResponse = yield esriRequest(groupUrl, {
            query: { f: "json" },
            responseType: "json",
        });
        if ((_a = groupResponse.data) === null || _a === void 0 ? void 0 : _a.error) {
            throw new Error(groupResponse.data.error.message || "Группа недоступна");
        }
        let usersCount = null;
        try {
            const usersResponse = yield esriRequest(`${groupUrl}/userList`, {
                query: {
                    f: "json",
                    start: 1,
                    num: 1,
                },
                responseType: "json",
            });
            if (!((_b = usersResponse.data) === null || _b === void 0 ? void 0 : _b.error) &&
                typeof ((_c = usersResponse.data) === null || _c === void 0 ? void 0 : _c.total) === "number") {
                /*
                 * userList возвращает owner отдельно от массива users.
                 * Поэтому добавляем владельца к количеству остальных пользователей.
                 */
                usersCount =
                    usersResponse.data.total;
                // + (usersResponse.data.owner?.username ? 1 : 0);
            }
        }
        catch (_e) {
            usersCount = null;
        }
        return {
            id: groupId,
            title: ((_d = groupResponse.data) === null || _d === void 0 ? void 0 : _d.title) || "Без названия",
            usersCount,
        };
    }
    catch (_f) {
        return {
            id: groupId,
            title: "Название недоступно",
            usersCount: null,
            isUnavailable: true,
        };
    }
});
function Setting(props) {
    var _a;
    const [showModal, setShowModal] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [config, setConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => getInitialAccessConfig(props.config));
    const [savedConfig, setSavedConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => getInitialAccessConfig(props.config));
    const [hasUnsavedChanges, setHasUnsavedChanges] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [notice, setNotice] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const noticeTimer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const showNotice = (message) => {
        if (noticeTimer.current !== null) {
            window.clearTimeout(noticeTimer.current);
        }
        setNotice(message);
        noticeTimer.current = window.setTimeout(() => {
            setNotice(null);
            noticeTimer.current = null;
        }, 1800);
    };
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        return () => {
            if (noticeTimer.current !== null) {
                window.clearTimeout(noticeTimer.current);
            }
        };
    }, []);
    const setDraftConfig = (update) => {
        setConfig((previous) => update(previous));
        setHasUnsavedChanges(true);
    };
    const [groupsInfo, setGroupsInfo] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState({});
    const [groupsLoading, setGroupsLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const groupIdsSignature = getConfigGroupIds(config).join("|");
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let isCancelled = false;
        const loadGroupsInfo = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const groupIds = getConfigGroupIds(config);
            if (groupIds.length === 0) {
                setGroupsInfo({});
                return;
            }
            const portalUrl = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.portalUrl;
            if (!portalUrl) {
                return;
            }
            setGroupsLoading(true);
            try {
                const [esriRequest] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.loadArcGISJSAPIModules)([
                    "esri/request",
                ]);
                const result = yield Promise.all(groupIds.map((groupId) => getPortalGroupInfo(esriRequest, portalUrl, groupId)));
                if (!isCancelled) {
                    const mapped = result.reduce((value, item) => {
                        value[item.id] = item;
                        return value;
                    }, {});
                    setGroupsInfo(mapped);
                }
            }
            finally {
                if (!isCancelled) {
                    setGroupsLoading(false);
                }
            }
        });
        void loadGroupsInfo();
        return () => {
            isCancelled = true;
        };
    }, [groupIdsSignature]);
    const [selectedId, setSelectedId] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(GLOBAL_ACCESS_ID);
    const [dialog, setDialog] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [selectedRuleIds, setSelectedRuleIds] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [selectedGroupKeys, setSelectedGroupKeys] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [formTitle, setFormTitle] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [formField, setFormField] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [formGroup, setFormGroup] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleOperator, setRuleOperator] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("equal");
    const [ruleValue, setRuleValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleFrom, setRuleFrom] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleTo, setRuleTo] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleValues, setRuleValues] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [newListValue, setNewListValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const selectedField = selectedId === GLOBAL_ACCESS_ID
        ? null
        : (_a = config.rules.find((item) => item.id === selectedId)) !== null && _a !== void 0 ? _a : null;
    const renderGroupIdentity = (groupId) => {
        var _a;
        const groupInfo = groupsInfo[groupId];
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupIdentity" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupName" }, groupsLoading ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "groupNameLoading", "aria-busy": "true", "aria-live": "polite" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_runtime_shared_loader__WEBPACK_IMPORTED_MODULE_4__.Loader, { variant: "compact", ariaLabel: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026" }))) : ((_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.title) !== null && _a !== void 0 ? _a : "Название недоступно")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "groupIdCopyButton", title: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID", onClick: (event) => {
                    event.stopPropagation();
                    void copyGroupId(groupId);
                } }, groupId),
            (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.usersCount) !== null && (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.usersCount) !== undefined && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupMembers" },
                "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ",
                groupInfo.usersCount))));
    };
    const resetSelection = () => {
        setSelectedRuleIds([]);
        setSelectedGroupKeys([]);
    };
    const selectLeftItem = (id) => {
        setSelectedId(id);
        resetSelection();
    };
    const resetRuleForm = () => {
        setRuleOperator("equal");
        setRuleValue("");
        setRuleFrom("");
        setRuleTo("");
        setRuleValues([]);
        setNewListValue("");
    };
    const getRuleFromForm = () => {
        if (ruleOperator === "equal") {
            if (!ruleValue.trim())
                return null;
            return {
                id: makeId(),
                operator: "equal",
                value: ruleValue.trim(),
                groups: [],
            };
        }
        if (ruleOperator === "range") {
            if (!ruleFrom.trim() || !ruleTo.trim())
                return null;
            return {
                id: makeId(),
                operator: "range",
                from: ruleFrom.trim(),
                to: ruleTo.trim(),
                groups: [],
            };
        }
        if (ruleOperator === "include") {
            const cleanValues = ruleValues.map((item) => item.trim()).filter(Boolean);
            if (cleanValues.length === 0)
                return null;
            return {
                id: makeId(),
                operator: "include",
                values: cleanValues,
                groups: [],
            };
        }
        if (ruleOperator === "like") {
            if (!ruleValue.trim())
                return null;
            return {
                id: makeId(),
                operator: "like",
                value: ruleValue.trim(),
                groups: [],
            };
        }
        return null;
    };
    const fillRuleForm = (rule) => {
        var _a, _b, _c, _d;
        setRuleOperator(rule.operator);
        setRuleValue((_a = rule.value) !== null && _a !== void 0 ? _a : "");
        setRuleFrom((_b = rule.from) !== null && _b !== void 0 ? _b : "");
        setRuleTo((_c = rule.to) !== null && _c !== void 0 ? _c : "");
        setRuleValues((_d = rule.values) !== null && _d !== void 0 ? _d : []);
        setNewListValue("");
    };
    const openAddField = () => {
        setFormTitle("");
        setFormField("");
        resetRuleForm();
        setDialog({ type: "addField" });
    };
    const openEditField = () => {
        if (!selectedField)
            return;
        setFormTitle(selectedField.title);
        setFormField(selectedField.field);
        setDialog({
            type: "editField",
            payload: {
                fieldId: selectedField.id,
            },
        });
    };
    const saveField = () => {
        if (!formTitle.trim() || !formField.trim())
            return;
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addField") {
            const firstRule = getRuleFromForm();
            const newField = {
                id: makeId(),
                title: formTitle.trim(),
                field: formField.trim(),
                rules: firstRule ? [firstRule] : [],
            };
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: [...prev.rules, newField] })));
            setSelectedId(newField.id);
            resetSelection();
        }
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "editField") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((item) => item.id === dialog.payload.fieldId
                    ? Object.assign(Object.assign({}, item), { title: formTitle.trim(), field: formField.trim() }) : item) })));
        }
        setDialog(null);
    };
    const deleteField = () => {
        if (!selectedField)
            return;
        setDraftConfig((prev) => {
            var _a, _b;
            const nextRules = prev.rules.filter((item) => item.id !== selectedField.id);
            setSelectedId((_b = (_a = nextRules[0]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : GLOBAL_ACCESS_ID);
            resetSelection();
            return Object.assign(Object.assign({}, prev), { rules: nextRules });
        });
        setDialog(null);
    };
    const openAddRule = () => {
        resetRuleForm();
        setDialog({ type: "addRule" });
    };
    const openEditRule = (rule) => {
        fillRuleForm(rule);
        setDialog({
            type: "editRule",
            payload: {
                ruleId: rule.id,
            },
        });
    };
    const saveRule = () => {
        if (!selectedField)
            return;
        const formRule = getRuleFromForm();
        if (!formRule) {
            alert("Заполни значение правила");
            return;
        }
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addRule") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                    ? Object.assign(Object.assign({}, field), { rules: [...field.rules, formRule] }) : field) })));
        }
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "editRule") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                    ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => rule.id === dialog.payload.ruleId
                            ? Object.assign(Object.assign({}, formRule), { id: rule.id, groups: rule.groups }) : rule) }) : field) })));
        }
        setDialog(null);
    };
    const deleteRule = () => {
        var _a;
        if (!selectedField || !((_a = dialog === null || dialog === void 0 ? void 0 : dialog.payload) === null || _a === void 0 ? void 0 : _a.ruleId))
            return;
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                ? Object.assign(Object.assign({}, field), { rules: field.rules.filter((rule) => rule.id !== dialog.payload.ruleId) }) : field) })));
        setSelectedRuleIds((prev) => prev.filter((id) => id !== dialog.payload.ruleId));
        setSelectedGroupKeys([]);
        setDialog(null);
    };
    const toggleRuleSelect = (ruleId) => {
        setSelectedRuleIds((prev) => prev.includes(ruleId)
            ? prev.filter((id) => id !== ruleId)
            : [...prev, ruleId]);
    };
    const deleteSelectedRules = () => {
        if (!selectedField || selectedRuleIds.length === 0)
            return;
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                ? Object.assign(Object.assign({}, field), { rules: field.rules.filter((rule) => !selectedRuleIds.includes(rule.id)) }) : field) })));
        setSelectedRuleIds([]);
        setSelectedGroupKeys([]);
    };
    const makeGroupKey = (ruleId, index) => {
        return `${ruleId}_${index}`;
    };
    const makeGlobalGroupKey = (index) => {
        return `global_${index}`;
    };
    const toggleGroupSelect = (key) => {
        setSelectedGroupKeys((prev) => prev.includes(key)
            ? prev.filter((item) => item !== key)
            : [...prev, key]);
    };
    const deleteSelectedGroups = () => {
        if (selectedGroupKeys.length === 0)
            return;
        if (selectedId === GLOBAL_ACCESS_ID) {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fullAccessGroups: prev.fullAccessGroups.filter((_, index) => !selectedGroupKeys.includes(makeGlobalGroupKey(index))) })));
        }
        if (selectedField) {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                    ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => (Object.assign(Object.assign({}, rule), { groups: rule.groups.filter((_, index) => !selectedGroupKeys.includes(makeGroupKey(rule.id, index))) }))) }) : field) })));
        }
        setSelectedGroupKeys([]);
    };
    const openAddGroup = (ruleId) => {
        setFormGroup("");
        setDialog({
            type: "addGroup",
            payload: {
                ruleId,
            },
        });
    };
    const openEditGroup = (ruleId, groupIndex, groupValue) => {
        setFormGroup(groupValue);
        setDialog({
            type: "editGroup",
            payload: {
                ruleId,
                groupIndex,
            },
        });
    };
    const saveGroup = () => {
        if (!selectedField || !formGroup.trim())
            return;
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addGroup") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                    ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => rule.id === dialog.payload.ruleId
                            ? Object.assign(Object.assign({}, rule), { groups: [...rule.groups, formGroup.trim()] }) : rule) }) : field) })));
        }
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "editGroup") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                    ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => rule.id === dialog.payload.ruleId
                            ? Object.assign(Object.assign({}, rule), { groups: rule.groups.map((group, index) => index === dialog.payload.groupIndex
                                    ? formGroup.trim()
                                    : group) }) : rule) }) : field) })));
        }
        setDialog(null);
    };
    const deleteGroup = () => {
        if (!selectedField || !(dialog === null || dialog === void 0 ? void 0 : dialog.payload))
            return;
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => rule.id === dialog.payload.ruleId
                        ? Object.assign(Object.assign({}, rule), { groups: rule.groups.filter((_, index) => index !== dialog.payload.groupIndex) }) : rule) }) : field) })));
        setSelectedGroupKeys((prev) => prev.filter((key) => key !== makeGroupKey(dialog.payload.ruleId, dialog.payload.groupIndex)));
        setDialog(null);
    };
    const openAddGlobalGroup = () => {
        setFormGroup("");
        setDialog({ type: "addGlobalGroup" });
    };
    const openEditGlobalGroup = (groupIndex, groupValue) => {
        setFormGroup(groupValue);
        setDialog({
            type: "editGlobalGroup",
            payload: {
                groupIndex,
            },
        });
    };
    const saveGlobalGroup = () => {
        if (!formGroup.trim())
            return;
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addGlobalGroup") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fullAccessGroups: [...prev.fullAccessGroups, formGroup.trim()] })));
        }
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "editGlobalGroup") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fullAccessGroups: prev.fullAccessGroups.map((group, index) => index === dialog.payload.groupIndex ? formGroup.trim() : group) })));
        }
        setDialog(null);
    };
    const deleteGlobalGroup = () => {
        if (!(dialog === null || dialog === void 0 ? void 0 : dialog.payload))
            return;
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fullAccessGroups: prev.fullAccessGroups.filter((_, index) => index !== dialog.payload.groupIndex) })));
        setSelectedGroupKeys((prev) => prev.filter((key) => key !== makeGlobalGroupKey(dialog.payload.groupIndex)));
        setDialog(null);
    };
    const addValueToInList = () => {
        const value = newListValue.trim();
        if (!value)
            return;
        setRuleValues((prev) => [...prev, value]);
        setNewListValue("");
    };
    const removeValueFromInList = (indexForRemove) => {
        setRuleValues((prev) => prev.filter((_, index) => index !== indexForRemove));
    };
    const updateValueInList = (indexForUpdate, value) => {
        setRuleValues((prev) => prev.map((item, index) => (index === indexForUpdate ? value : item)));
    };
    const downloadJson = () => {
        const blob = new Blob([JSON.stringify(config, null, 4)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "access-config.json";
        link.click();
        URL.revokeObjectURL(url);
    };
    const uploadJson = (event) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const parsed = JSON.parse(String(reader.result));
                const normalized = normalizeLoadedConfig(parsed);
                setDraftConfig(() => normalized);
                setSelectedId(GLOBAL_ACCESS_ID);
                resetSelection();
            }
            catch (_a) {
                alert("Неверная структура JSON");
            }
        };
        reader.readAsText(file);
        event.target.value = "";
    };
    const copyGroupId = (groupId) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            if ((_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText) {
                yield navigator.clipboard.writeText(groupId);
            }
            else {
                const temporaryInput = document.createElement("textarea");
                temporaryInput.value = groupId;
                temporaryInput.style.position = "fixed";
                temporaryInput.style.opacity = "0";
                document.body.appendChild(temporaryInput);
                temporaryInput.focus();
                temporaryInput.select();
                document.execCommand("copy");
                document.body.removeChild(temporaryInput);
            }
            showNotice("ID скопирован");
        }
        catch (_b) {
            showNotice("Не удалось скопировать ID");
        }
    });
    const applyConfig = () => {
        var _a;
        const nextConfig = cloneAccessConfig(config);
        const widgetConfig = (_a = props.config) !== null && _a !== void 0 ? _a : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        props.onSettingChange({
            id: props.id,
            config: widgetConfig.set("accessConfig", (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(nextConfig)),
        });
        setSavedConfig(nextConfig);
        setHasUnsavedChanges(false);
        showNotice("Настройки применены");
    };
    const cancelConfigChanges = () => {
        setConfig(cloneAccessConfig(savedConfig));
        setSelectedId(GLOBAL_ACCESS_ID);
        setDialog(null);
        resetSelection();
        setHasUnsavedChanges(false);
        showNotice("Изменения отменены");
    };
    const onDataSourceChange = (useDataSources) => {
        props.onSettingChange({
            id: props.id,
            useDataSources,
        });
    };
    const buildWhereForCurrentUser = (userGroups) => {
        const hasFullAccess = config.fullAccessGroups.some((group) => userGroups.includes(group));
        if (hasFullAccess)
            return "1=1";
        const allowedRules = [];
        config.rules.forEach((field) => {
            field.rules.forEach((rule) => {
                const hasRuleAccess = rule.groups.some((group) => userGroups.includes(group));
                if (hasRuleAccess) {
                    allowedRules.push(`(${buildRuleWhere(field.field, rule)})`);
                }
            });
        });
        return allowedRules.length > 0 ? allowedRules.join(" OR ") : "1=0";
    };
    const renderRuleForm = () => {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "operatorTabs fourTabs" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "equal" ? "active" : "", onClick: () => setRuleOperator("equal") }, "Equal"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "range" ? "active" : "", onClick: () => setRuleOperator("range") }, "Range"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "include" ? "active" : "", onClick: () => setRuleOperator("include") }, "Include"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "like" ? "active" : "", onClick: () => setRuleOperator("like") }, "Like")),
            (ruleOperator === "equal" || ruleOperator === "like") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: ruleValue, onChange: (e) => setRuleValue(e.target.value) })),
            ruleOperator === "range" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "twoInputGrid" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u041E\u0442", value: ruleFrom, onChange: (e) => setRuleFrom(e.target.value) }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0414\u043E", value: ruleTo, onChange: (e) => setRuleTo(e.target.value) }))),
            ruleOperator === "include" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "inListArea" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "inAddRow" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: newListValue, onChange: (e) => setNewListValue(e.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: addValueToInList }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
                ruleValues.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyMini" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442")) : (ruleValues.map((value, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "inValueRow", key: `${value}_${index}` },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: value, onChange: (e) => updateValueInList(index, e.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => removeValueFromInList(index) }, "\u00D7"))))))),
            selectedField && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "previewWhere" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, "\u0418\u0442\u043E\u0433\u043E\u0432\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, (() => {
                    const tempRule = getRuleFromForm();
                    return tempRule
                        ? buildRuleWhere(selectedField.field, tempRule)
                        : `${selectedField.field} ...`;
                })())))));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingArea" },
        notice && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingNotice" }, notice),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingsContent" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "sourceSelectorCard" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "panelCardLabel" }, "\u0421\u043B\u043E\u0439 \u0434\u0430\u043D\u043D\u044B\u0445"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]), useDataSources: props.useDataSources, onChange: onDataSourceChange, widgetId: props.id, mustUseDataSource: true })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlCard" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlHeader" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlTitle" }, "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0434\u0430\u043D\u043D\u044B\u043C"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlDescription" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", size: "sm", className: "accessSettingsButton", onClick: () => setShowModal(true) }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"))),
        showModal && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalArea", onClick: (event) => {
                if (event.target === event.currentTarget)
                    setShowModal(false);
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalBlock" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalList" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalListHeader" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalListTitle" }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalListSubtitle" }, "JSON access config"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `modalItem ${selectedId === GLOBAL_ACCESS_ID ? "selected" : ""}`, onClick: () => selectLeftItem(GLOBAL_ACCESS_ID) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemTitle" }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemInfo" },
                            "\u0423\u0441\u043B\u043E\u0432\u0438\u0435: ",
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "1=1"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "fieldList" },
                        config.rules.map((item) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: item.id, className: `modalItem ${selectedId === item.id ? "selected" : ""}`, onClick: () => selectLeftItem(item.id) },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemTitle" }, item.title),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemInfo" },
                                "\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, item.field))))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "addFieldButton", onClick: openAddField }, "+")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalBottomActions" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "jsonButton" },
                            "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON",
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "file", accept: "application/json", onChange: uploadJson })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "jsonButton", onClick: downloadJson }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON"))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalRightPanel" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemFullInfo" }, selectedId === GLOBAL_ACCESS_ID ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightHeader" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightTitle" }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightField" }, "\u0423\u0441\u043B\u043E\u0432\u0438\u0435: 1=1")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: openAddGlobalGroup }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rulesArea" },
                            selectedGroupKeys.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bulkActionBar" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null,
                                    "\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0433\u0440\u0443\u043F\u043F: ",
                                    selectedGroupKeys.length),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButtonSmall", onClick: deleteSelectedGroups }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435"))),
                            config.fullAccessGroups.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (config.fullAccessGroups.map((group, index) => {
                                const groupKey = makeGlobalGroupKey(index);
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `groupRow ${selectedGroupKeys.includes(groupKey)
                                        ? "selectedGroup"
                                        : ""}`, key: `${group}_${index}` },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedGroupKeys.includes(groupKey), onChange: () => toggleGroupSelect(groupKey) }),
                                    renderGroupIdentity(group),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupActions" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGlobalGroup(index, group) }, "\u270E"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                                type: "deleteGlobalGroup",
                                                payload: {
                                                    groupIndex: index,
                                                },
                                            }) }, "\u00D7"))));
                            }))))) : !selectedField ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "Empty")) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightHeader" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightTitle" }, selectedField.title),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightField" },
                                    "\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",
                                    selectedField.field)),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightHeaderActions" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton", onClick: openEditField }, "\u270E"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton danger", onClick: () => setDialog({ type: "deleteField" }) }, "\u00D7"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rulesArea" },
                            selectedRuleIds.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bulkActionBar" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null,
                                    "\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B: ",
                                    selectedRuleIds.length),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButtonSmall", onClick: deleteSelectedRules }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435"))),
                            selectedGroupKeys.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bulkActionBar" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null,
                                    "\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0433\u0440\u0443\u043F\u043F: ",
                                    selectedGroupKeys.length),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButtonSmall", onClick: deleteSelectedGroups }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435"))),
                            selectedField.rules.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (selectedField.rules.map((rule) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `ruleCard ${selectedRuleIds.includes(rule.id)
                                    ? "selectedRule"
                                    : ""}`, key: rule.id },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleHeader" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedRuleIds.includes(rule.id), onChange: () => toggleRuleSelect(rule.id) }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleInfo" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleLabel" }, "\u0423\u0441\u043B\u043E\u0432\u0438\u0435"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleValue" }, buildRuleWhere(selectedField.field, rule))),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleActions" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: () => openAddGroup(rule.id) }, "+ \u0433\u0440\u0443\u043F\u043F\u0430"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton", onClick: () => openEditRule(rule) }, "\u270E"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton danger", onClick: () => setDialog({
                                                type: "deleteRule",
                                                payload: {
                                                    ruleId: rule.id,
                                                },
                                            }) }, "\u00D7"))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupsArea" }, rule.groups.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyMini" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (rule.groups.map((group, index) => {
                                    const groupKey = makeGroupKey(rule.id, index);
                                    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `groupRow ${selectedGroupKeys.includes(groupKey)
                                            ? "selectedGroup"
                                            : ""}`, key: `${group}_${index}` },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedGroupKeys.includes(groupKey), onChange: () => toggleGroupSelect(groupKey) }),
                                        renderGroupIdentity(group),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupActions" },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGroup(rule.id, index, group) }, "\u270E"),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                                    type: "deleteGroup",
                                                    payload: {
                                                        ruleId: rule.id,
                                                        groupIndex: index,
                                                    },
                                                }) }, "\u00D7"))));
                                }))))))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "addRuleButton", onClick: openAddRule }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "globalSettingActions" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `saveState ${hasUnsavedChanges ? "changed" : ""}` }, hasUnsavedChanges
                            ? "Есть несохранённые изменения"
                            : "Изменений нет"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "globalSettingButtons" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "cancelConfigButton", type: "button", onClick: cancelConfigChanges, disabled: !hasUnsavedChanges }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "applyConfigButton", type: "button", onClick: applyConfig, disabled: !hasUnsavedChanges }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"))))),
            dialog && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogArea" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogBlock" },
                    (dialog.type === "addField" || dialog.type === "editField") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addField"
                            ? "Добавить столбец"
                            : "Редактировать столбец"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", value: formTitle, onChange: (e) => setFormTitle(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u041F\u043E\u043B\u0435", value: formField, onChange: (e) => setFormField(e.target.value) }),
                        dialog.type === "addField" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "optionalRuleBlock" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "optionalRuleTitle" }, "\u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E"),
                            renderRuleForm())),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: saveField }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteField" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogText" }, "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u043D\u0443\u0442\u0440\u0438 \u043D\u0435\u0433\u043E \u0442\u043E\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteField }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addRule" || dialog.type === "editRule") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addRule"
                            ? "Добавить правило"
                            : "Редактировать правило"),
                        renderRuleForm(),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: saveRule }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteRule" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogText" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0442\u043E\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteRule }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addGroup" || dialog.type === "editGroup") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addGroup"
                            ? "Добавить группу"
                            : "Редактировать группу"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430", value: formGroup, onChange: (e) => setFormGroup(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: saveGroup }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteGroup" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogText" }, "\u0413\u0440\u0443\u043F\u043F\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteGroup }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addGlobalGroup" ||
                        dialog.type === "editGlobalGroup") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addGlobalGroup"
                            ? "Добавить группу полного доступа"
                            : "Редактировать группу полного доступа"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430", value: formGroup, onChange: (e) => setFormGroup(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: saveGlobalGroup }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteGlobalGroup" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogText" }, "\u042D\u0442\u0430 \u0433\u0440\u0443\u043F\u043F\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u043C."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteGlobalGroup }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))))))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9GaXJlIFBvcnRhbC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQ2pCO0FBQzNHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb09BQW9PLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxrREFBa0Qsb0JBQW9CLDBCQUEwQiw4QkFBOEIsY0FBYyxrQkFBa0Isd0JBQXdCLEdBQUcsa0JBQWtCLDJCQUEyQixrQkFBa0IsbUJBQW1CLHNCQUFzQix5QkFBeUIsa0NBQWtDLHFCQUFxQixHQUFHLDBCQUEwQiwyQkFBMkIsa0JBQWtCLG1CQUFtQixHQUFHLGdEQUFnRCxvQkFBb0IseUJBQXlCLDBCQUEwQiwrQ0FBK0MsNENBQTRDLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLDZCQUE2QixVQUFVLDZEQUE2RCxPQUFPLGFBQWEsMkNBQTJDLE9BQU8sV0FBVyw2REFBNkQsT0FBTyxhQUFhLDJDQUEyQyxPQUFPLFdBQVcsNkRBQTZELE9BQU8sYUFBYSwyQ0FBMkMsT0FBTyxXQUFXLDZEQUE2RCxPQUFPLGFBQWEsMkNBQTJDLE9BQU8sWUFBWSw2REFBNkQsT0FBTyxHQUFHLDZDQUE2QyxzREFBc0QsMEJBQTBCLG1CQUFtQixPQUFPLEdBQUcsOEJBQThCLGtCQUFrQix3QkFBd0IsNEJBQTRCLFlBQVksZ0JBQWdCLHNCQUFzQixHQUFHLGtCQUFrQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsdUJBQXVCLGdDQUFnQyxtQkFBbUIsR0FBRywwQkFBMEIseUJBQXlCLGdCQUFnQixpQkFBaUIsR0FBRyxnREFBZ0Qsa0JBQWtCLHVCQUF1Qix3QkFBd0IsNkNBQTZDLDBDQUEwQyxHQUFHLHlCQUF5Qiw0QkFBNEIsR0FBRyw2QkFBNkIsUUFBUSx5REFBeUQsS0FBSyxXQUFXLHVDQUF1QyxLQUFLLFNBQVMseURBQXlELEtBQUssV0FBVyx1Q0FBdUMsS0FBSyxTQUFTLHlEQUF5RCxLQUFLLFdBQVcsdUNBQXVDLEtBQUssU0FBUyx5REFBeUQsS0FBSyxXQUFXLHVDQUF1QyxLQUFLLFVBQVUseURBQXlELEtBQUssR0FBRywyQ0FBMkMsa0RBQWtELHNCQUFzQixlQUFlLEtBQUssR0FBRyxtQkFBbUI7QUFDL3FIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZ2QztBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFJQUFxSTtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sME1BQTBNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUs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QUFTLEVBQUMsYUFBYSxJQUN2QixNQUFNLENBQUMsSUFBSSxLQUFLLGdCQUFnQjs0QkFDN0IsQ0FBQyxDQUFDLGlDQUFpQzs0QkFDbkMsQ0FBQyxDQUFDLHNDQUFzQyxDQUMxQzt3QkFFTixzRUFDSSxTQUFTLEVBQUMsYUFBYSxFQUN2QixXQUFXLEVBQUMsc0NBQVEsRUFDcEIsS0FBSyxFQUFFLFNBQVMsRUFDaEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FDL0M7d0JBRUYsb0VBQUssU0FBUyxFQUFDLGVBQWU7NEJBQzFCLHVFQUFRLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDJDQUFpQjs0QkFDdkQsdUVBQVEsT0FBTyxFQUFFLGVBQWUsNkRBQW9CLENBQ2xELENBQ1AsQ0FDTjtvQkFFSixNQUFNLENBQUMsSUFBSSxLQUFLLG1CQUFtQixJQUFJLENBQ3BDO3dCQUNJLG9FQUFLLFNBQVMsRUFBQyxhQUFhLDZLQUV0Qjt3QkFDTixvRUFBSyxTQUFTLEVBQUMsWUFBWSxpVEFFckI7d0JBRU4sb0VBQUssU0FBUyxFQUFDLGVBQWU7NEJBQzFCLHVFQUFRLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDJDQUFpQjs0QkFDdkQsdUVBQ0ksU0FBUyxFQUFDLGNBQWMsRUFDeEIsT0FBTyxFQUFFLGlCQUFpQixpREFHckIsQ0FDUCxDQUNQLENBQ04sQ0FDQyxDQUNKLENBQ1QsQ0FDQyxDQUNULENBQ0MsQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUNPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0ZpcmUgUG9ydGFsL3NyYy9ydW50aW1lL3NoYXJlZC9sb2FkZXIvTG9hZGVyLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3NldHRpbmcvc2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlIFBvcnRhbC9zcmMvcnVudGltZS9zaGFyZWQvbG9hZGVyL0xvYWRlci5jc3M/MGNiYiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3NldHRpbmcvc2V0dGluZy5jc3M/OGNiYSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlIFBvcnRhbC9zcmMvcnVudGltZS9zaGFyZWQvbG9hZGVyL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0ZpcmUgUG9ydGFsL3NyYy9ydW50aW1lL3NoYXJlZC9sb2FkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0ZpcmUgUG9ydGFsL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZmlyZS1sb2FkZXItc2hlbGwtZmlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTJyZW07XG59XG5cbi5maXJlLWxvYWRlciB7XG4gIC0tbG9hZGVyLWluc2V0OiAyOHB4O1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHJnYih2YXIoLS10ZXh0LWRpbSkpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmZpcmUtbG9hZGVyLWNvbXBhY3Qge1xuICAtLWxvYWRlci1pbnNldDogMjJweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmZpcmUtbG9hZGVyOjpiZWZvcmUsXG4uZmlyZS1sb2FkZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggaW5zZXQgY3VycmVudENvbG9yO1xuICBhbmltYXRpb246IGZpcmVMb2FkZXJMNCAyLjVzIGluZmluaXRlO1xufVxuXG4uZmlyZS1sb2FkZXI6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4yNXM7XG59XG5cbkBrZXlmcmFtZXMgZmlyZUxvYWRlckw0IHtcbiAgMCUge1xuICAgIGluc2V0OiAwIHZhcigtLWxvYWRlci1pbnNldCkgdmFyKC0tbG9hZGVyLWluc2V0KSAwO1xuICB9XG4gIDEyLjUlIHtcbiAgICBpbnNldDogMCB2YXIoLS1sb2FkZXItaW5zZXQpIDAgMDtcbiAgfVxuICAyNSUge1xuICAgIGluc2V0OiB2YXIoLS1sb2FkZXItaW5zZXQpIHZhcigtLWxvYWRlci1pbnNldCkgMCAwO1xuICB9XG4gIDM3LjUlIHtcbiAgICBpbnNldDogdmFyKC0tbG9hZGVyLWluc2V0KSAwIDAgMDtcbiAgfVxuICA1MCUge1xuICAgIGluc2V0OiB2YXIoLS1sb2FkZXItaW5zZXQpIDAgMCB2YXIoLS1sb2FkZXItaW5zZXQpO1xuICB9XG4gIDYyLjUlIHtcbiAgICBpbnNldDogMCAwIDAgdmFyKC0tbG9hZGVyLWluc2V0KTtcbiAgfVxuICA3NSUge1xuICAgIGluc2V0OiAwIDAgdmFyKC0tbG9hZGVyLWluc2V0KSB2YXIoLS1sb2FkZXItaW5zZXQpO1xuICB9XG4gIDg3LjUlIHtcbiAgICBpbnNldDogMCAwIHZhcigtLWxvYWRlci1pbnNldCkgMDtcbiAgfVxuICAxMDAlIHtcbiAgICBpbnNldDogMCB2YXIoLS1sb2FkZXItaW5zZXQpIHZhcigtLWxvYWRlci1pbnNldCkgMDtcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmZpcmUtbG9hZGVyOjpiZWZvcmUsXG4gIC5maXJlLWxvYWRlcjo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBpbnNldDogMDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3J1bnRpbWUvc2hhcmVkL2xvYWRlci9Mb2FkZXIuY3NzXCIsXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlJTIwUG9ydGFsL3NyYy9ydW50aW1lL3NoYXJlZC9sb2FkZXIvTG9hZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksa0RBQUE7RUNDTjtFRENFO0lBQ0ksZ0NBQUE7RUNDTjtFRENFO0lBQ0ksa0RBQUE7RUNDTjtFRENFO0lBQ0ksZ0NBQUE7RUNDTjtFRENFO0lBQ0ksa0RBQUE7RUNDTjtFRENFO0lBQ0ksZ0NBQUE7RUNDTjtFRENFO0lBQ0ksa0RBQUE7RUNDTjtFRENFO0lBQ0ksZ0NBQUE7RUNDTjtFRENFO0lBQ0ksa0RBQUE7RUNDTjtBQUNGO0FERUE7RUFDSTs7SUFFSSxlQUFBO0lBQ0EsUUFBQTtFQ0FOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZpcmUtbG9hZGVyLXNoZWxsLWZpbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEycmVtO1xcbn1cXG5cXG4uZmlyZS1sb2FkZXIge1xcbiAgICAtLWxvYWRlci1pbnNldDogMjhweDtcXG4gICAgd2lkdGg6IDUycHg7XFxuICAgIGhlaWdodDogNTJweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiByZ2IodmFyKC0tdGV4dC1kaW0pKTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5maXJlLWxvYWRlci1jb21wYWN0IHtcXG4gICAgLS1sb2FkZXItaW5zZXQ6IDIycHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5maXJlLWxvYWRlcjo6YmVmb3JlLFxcbi5maXJlLWxvYWRlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggaW5zZXQgY3VycmVudENvbG9yO1xcbiAgICBhbmltYXRpb246IGZpcmVMb2FkZXJMNCAyLjVzIGluZmluaXRlO1xcbn1cXG5cXG4uZmlyZS1sb2FkZXI6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4yNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmlyZUxvYWRlckw0IHtcXG4gICAgMCUge1xcbiAgICAgICAgaW5zZXQ6IDAgdmFyKC0tbG9hZGVyLWluc2V0KSB2YXIoLS1sb2FkZXItaW5zZXQpIDA7XFxuICAgIH1cXG4gICAgMTIuNSUge1xcbiAgICAgICAgaW5zZXQ6IDAgdmFyKC0tbG9hZGVyLWluc2V0KSAwIDA7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIGluc2V0OiB2YXIoLS1sb2FkZXItaW5zZXQpIHZhcigtLWxvYWRlci1pbnNldCkgMCAwO1xcbiAgICB9XFxuICAgIDM3LjUlIHtcXG4gICAgICAgIGluc2V0OiB2YXIoLS1sb2FkZXItaW5zZXQpIDAgMCAwO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBpbnNldDogdmFyKC0tbG9hZGVyLWluc2V0KSAwIDAgdmFyKC0tbG9hZGVyLWluc2V0KTtcXG4gICAgfVxcbiAgICA2Mi41JSB7XFxuICAgICAgICBpbnNldDogMCAwIDAgdmFyKC0tbG9hZGVyLWluc2V0KTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgaW5zZXQ6IDAgMCB2YXIoLS1sb2FkZXItaW5zZXQpIHZhcigtLWxvYWRlci1pbnNldCk7XFxuICAgIH1cXG4gICAgODcuNSUge1xcbiAgICAgICAgaW5zZXQ6IDAgMCB2YXIoLS1sb2FkZXItaW5zZXQpIDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBpbnNldDogMCB2YXIoLS1sb2FkZXItaW5zZXQpIHZhcigtLWxvYWRlci1pbnNldCkgMDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgICAuZmlyZS1sb2FkZXI6OmJlZm9yZSxcXG4gICAgLmZpcmUtbG9hZGVyOjphZnRlciB7XFxuICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgfVxcbn1cXG5cIixcIi5maXJlLWxvYWRlci1zaGVsbC1maWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMnJlbTtcXG59XFxuXFxuLmZpcmUtbG9hZGVyIHtcXG4gIC0tbG9hZGVyLWluc2V0OiAyOHB4O1xcbiAgd2lkdGg6IDUycHg7XFxuICBoZWlnaHQ6IDUycHg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogcmdiKHZhcigtLXRleHQtZGltKSk7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmZpcmUtbG9hZGVyLWNvbXBhY3Qge1xcbiAgLS1sb2FkZXItaW5zZXQ6IDIycHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmZpcmUtbG9hZGVyOjpiZWZvcmUsXFxuLmZpcmUtbG9hZGVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggaW5zZXQgY3VycmVudENvbG9yO1xcbiAgYW5pbWF0aW9uOiBmaXJlTG9hZGVyTDQgMi41cyBpbmZpbml0ZTtcXG59XFxuXFxuLmZpcmUtbG9hZGVyOjphZnRlciB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xLjI1cztcXG59XFxuXFxuQGtleWZyYW1lcyBmaXJlTG9hZGVyTDQge1xcbiAgMCUge1xcbiAgICBpbnNldDogMCB2YXIoLS1sb2FkZXItaW5zZXQpIHZhcigtLWxvYWRlci1pbnNldCkgMDtcXG4gIH1cXG4gIDEyLjUlIHtcXG4gICAgaW5zZXQ6IDAgdmFyKC0tbG9hZGVyLWluc2V0KSAwIDA7XFxuICB9XFxuICAyNSUge1xcbiAgICBpbnNldDogdmFyKC0tbG9hZGVyLWluc2V0KSB2YXIoLS1sb2FkZXItaW5zZXQpIDAgMDtcXG4gIH1cXG4gIDM3LjUlIHtcXG4gICAgaW5zZXQ6IHZhcigtLWxvYWRlci1pbnNldCkgMCAwIDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBpbnNldDogdmFyKC0tbG9hZGVyLWluc2V0KSAwIDAgdmFyKC0tbG9hZGVyLWluc2V0KTtcXG4gIH1cXG4gIDYyLjUlIHtcXG4gICAgaW5zZXQ6IDAgMCAwIHZhcigtLWxvYWRlci1pbnNldCk7XFxuICB9XFxuICA3NSUge1xcbiAgICBpbnNldDogMCAwIHZhcigtLWxvYWRlci1pbnNldCkgdmFyKC0tbG9hZGVyLWluc2V0KTtcXG4gIH1cXG4gIDg3LjUlIHtcXG4gICAgaW5zZXQ6IDAgMCB2YXIoLS1sb2FkZXItaW5zZXQpIDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaW5zZXQ6IDAgdmFyKC0tbG9hZGVyLWluc2V0KSB2YXIoLS1sb2FkZXItaW5zZXQpIDA7XFxuICB9XFxufVxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAuZmlyZS1sb2FkZXI6OmJlZm9yZSxcXG4gIC5maXJlLWxvYWRlcjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICAgIGluc2V0OiAwO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZW9sb2dpY2E6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZXR0aW5nQXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvbG9naWNhXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2V0dGluZ3NDb250ZW50IHtcbiAgcGFkZGluZzogMTRweCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstNDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay0xMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpKTtcbn0gKi9cbi5zb3VyY2VTZWxlY3RvckNhcmQge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ucGFuZWxDYXJkTGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICBwYWRkaW5nOiAxM3B4IDEycHggMTJweDtcbn1cblxuLmFjY2Vzc0NvbnRyb2xIZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uYWNjZXNzQ29udHJvbFRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWxBcmVhIHtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb2xvZ2ljYVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbEJsb2NrIHtcbiAgd2lkdGg6IG1pbigxMjAwcHgsIDEwMHZ3IC0gMzJweCk7XG4gIGhlaWdodDogbWluKDgwMHB4LCAxMDB2aCAtIDMycHgpO1xuICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcbn1cblxuLm1vZGFsTGlzdCB7XG4gIGJhY2tncm91bmQ6ICMyNTJjNDE7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLm1vZGFsTGlzdEhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsTGlzdFRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9kYWxMaXN0U3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWVsZExpc3Qge1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5tb2RhbEl0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubW9kYWxJdGVtOmhvdmVyLFxuLm1vZGFsSXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMzMzQwNWY7XG4gIGJvcmRlci1jb2xvcjogI2I2YzRlZDtcbn1cblxuLm1vZGFsSXRlbVRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWxJdGVtSW5mbyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2I4YmZkMTtcbn1cblxuLm1vZGFsSXRlbUluZm8gc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkRmllbGRCdXR0b24ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5Y2E4YzQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRGaWVsZEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XG59XG5cbi5tb2RhbEJvdHRvbUFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbn1cblxuLmpzb25CdXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmpzb25CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xufVxuXG4uanNvbkJ1dHRvbiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2RhbFJpZ2h0UGFuZWwge1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbEl0ZW1GdWxsSW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnJpZ2h0SGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYTQwNTA7XG59XG5cbi5yaWdodFRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmlnaHRGaWVsZCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcbi5ydWxlQWN0aW9ucyxcbi5ncm91cEFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmljb25CdXR0b24sXG4ubWluaUljb25CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWluaUljb25CdXR0b24ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pY29uQnV0dG9uOmhvdmVyLFxuLm1pbmlJY29uQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcbn1cblxuLmljb25CdXR0b24uZGFuZ2VyLFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcbiAgY29sb3I6ICNmZmI4YzE7XG59XG5cbi5ydWxlc0FyZWEge1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucnVsZUNhcmQge1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xufVxuXG4ucnVsZUhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbn1cblxuLnJ1bGVJbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ucnVsZUxhYmVsIHtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucnVsZVZhbHVlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ydWxlQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNtYWxsQnV0dG9uIHtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uc21hbGxCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xufVxuXG4uZ3JvdXBzQXJlYSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogN3B4O1xufVxuXG4uZ3JvdXBSb3cge1xuICBiYWNrZ3JvdW5kOiAjMWQyMjMwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg0MjU4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBjb2xvcjogI2Q5ZGVlYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmdyb3VwUm93LnNlbGVjdGVkR3JvdXAge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XG59XG5cbi5ncm91cFJvdyBzcGFuIHtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmdyb3VwUm93OmhvdmVyIC5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYWRkUnVsZUJ1dHRvbiB7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYjMzNDg7XG59XG5cbi5lbXB0eU1pbmksXG4uZW1wdHlSdWxlcyB7XG4gIGNvbG9yOiAjOGU5NmFhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5lbXB0eVJ1bGVzIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM1NTVmNzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZ0FyZWEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2dCbG9jayB7XG4gIHdpZHRoOiA1MjBweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMyNTJiMzg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YzU2NmM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmRpYWxvZ1RpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGlhbG9nVGV4dCB7XG4gIGNvbG9yOiAjYzJjOGQ1O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZGlhbG9nSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRpYWxvZ0lucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xufVxuXG4uZGlhbG9nQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDY1ZDtcbn1cblxuLmRhbmdlckJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNGEyNDMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XG59XG5cbi5vcGVyYXRvclRhYnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxuLm9wZXJhdG9yVGFicyBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnR3b0lucHV0R3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5MaXN0QXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uaW5BZGRSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uaW5WYWx1ZVJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5wcmV2aWV3V2hlcmUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByZXZpZXdXaGVyZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ub3B0aW9uYWxSdWxlQmxvY2sge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xufVxuXG4ub3B0aW9uYWxSdWxlVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYzZjY2RhO1xufVxuXG4uYnVsa0FjdGlvbkJhciB7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGwge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4NTU2NTtcbiAgYmFja2dyb3VuZDogIzRhMjQzMDtcbiAgY29sb3I6ICNmZmM0Y2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYzMzA0MDtcbn1cblxuLnNlbGVjdENoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYWNjZW50LWNvbG9yOiAjOWJhZWUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZ3JvdXBJZGVudGl0eSB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5ncm91cE5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwTmFtZUxvYWRpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uZ3JvdXBJZCB7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4uZ3JvdXBNZW1iZXJzIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb2xvcjogIzhmYTNjZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZ3JvdXBJZENvcHlCdXR0b24ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xOHMgZWFzZTtcbn1cblxuLmdyb3VwSWRDb3B5QnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2V0dGluZ05vdGljZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyOHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTEwMDA7XG4gIG1pbi13aWR0aDogMjEwcHg7XG4gIHBhZGRpbmc6IDExcHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE4NWFlO1xuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLWhlaWdodDogNjZweDtcbiAgcGFkZGluZzogMTNweCAyMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzNhNDA1MDtcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG59XG5cbi5zYXZlU3RhdGUge1xuICBjb2xvcjogIzhlOTZhYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2F2ZVN0YXRlLmNoYW5nZWQge1xuICBjb2xvcjogI2YxYzI3ZDtcbn1cblxuLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b24sXG4uYXBwbHlDb25maWdCdXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLmNhbmNlbENvbmZpZ0J1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYXBwbHlDb25maWdCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzI4YWMzO1xuICBiYWNrZ3JvdW5kOiAjMzg1MDgzO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhbmNlbENvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMzODQzNWI7XG59XG5cbi5hcHBseUNvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICM0NjYxOWE7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b246ZGlzYWJsZWQsXG4uYXBwbHlDb25maWdCdXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ1O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlIFBvcnRhbC9zcmMvc2V0dGluZy9zZXR0aW5nLmNzc1wiLFwid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSUyMFBvcnRhbC9zcmMvc2V0dGluZy9zZXR0aW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1GQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTs7Ozs7R0FBQTtBQU9BO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxtRkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBRElB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QUNBLFNBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FDRko7O0FES0E7O0VBRUksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0FDRko7O0FES0E7O0VBRUksYUFBQTtFQUNBLGVBQUE7QUNGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZW9sb2dpY2E6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4uc2V0dGluZ0FyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR2VvbG9naWNhXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2V0dGluZ3NDb250ZW50IHtcXG4gICAgcGFkZGluZzogMTRweCAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay00MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstMTAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KSk7XFxufSAqL1xcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4ucGFuZWxDYXJkTGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQ+ZGl2Omxhc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gICAgcGFkZGluZzogMTNweCAxMnB4IDEycHg7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sSGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sRGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1vZGFsQXJlYSB7XFxuICAgIGNvbG9yOiAjZjNmNGY2O1xcbiAgICBmb250LWZhbWlseTogXFxcIkdlb2xvZ2ljYVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbEJsb2NrIHtcXG4gICAgd2lkdGg6IG1pbigxMjAwcHgsIGNhbGMoMTAwdncgLSAzMnB4KSk7XFxuICAgIGhlaWdodDogbWluKDgwMHB4LCBjYWxjKDEwMHZoIC0gMzJweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcXG59XFxuXFxuLm1vZGFsTGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICMyNTJjNDE7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLm1vZGFsTGlzdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsTGlzdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0U3VidGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5maWVsZExpc3Qge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbEl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubW9kYWxJdGVtOmhvdmVyLFxcbi5tb2RhbEl0ZW0uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzM0MDVmO1xcbiAgICBib3JkZXItY29sb3I6ICNiNmM0ZWQ7XFxufVxcblxcbi5tb2RhbEl0ZW1UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICNiOGJmZDE7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHNwYW4ge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWNhOGM0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkRmllbGRCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4ubW9kYWxCb3R0b21BY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5qc29uQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjYyN2M7XFxuICAgIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICAgIGNvbG9yOiAjZjNmNGY2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5qc29uQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmpzb25CdXR0b24gaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxSaWdodFBhbmVsIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWxJdGVtRnVsbEluZm8ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5yaWdodEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2E0MDUwO1xcbn1cXG5cXG4ucmlnaHRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnJpZ2h0RmllbGQge1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5yaWdodEhlYWRlckFjdGlvbnMsXFxuLnJ1bGVBY3Rpb25zLFxcbi5ncm91cEFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDM0cHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpob3ZlcixcXG4ubWluaUljb25CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbi5kYW5nZXIsXFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcXG4gICAgY29sb3I6ICNmZmI4YzE7XFxufVxcblxcbi5ydWxlc0FyZWEge1xcbiAgICBwYWRkaW5nLXRvcDogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucnVsZUNhcmQge1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xcbn1cXG5cXG4ucnVsZUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnJ1bGVJbmZvIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4ucnVsZUxhYmVsIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucnVsZVZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ydWxlQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNtYWxsQnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4uc21hbGxCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uZ3JvdXBzQXJlYSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4uZ3JvdXBSb3cge1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMjMwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg0MjU4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICBjb2xvcjogI2Q5ZGVlYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmdyb3VwUm93LnNlbGVjdGVkR3JvdXAge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxufVxcblxcbi5ncm91cFJvdyBzcGFuIHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmdyb3VwUm93OmhvdmVyIC5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyYjMzNDg7XFxufVxcblxcbi5lbXB0eU1pbmksXFxuLmVtcHR5UnVsZXMge1xcbiAgICBjb2xvcjogIzhlOTZhYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uZW1wdHlSdWxlcyB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNTU1Zjc2O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dBcmVhIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlhbG9nQmxvY2sge1xcbiAgICB3aWR0aDogNTIwcHg7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjUyYjM4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGM1NjZjO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5kaWFsb2dUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmRpYWxvZ1RleHQge1xcbiAgICBjb2xvcjogI2MyYzhkNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRpYWxvZ0lucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kaWFsb2dJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzMwMzg0YTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzYjQ2NWQ7XFxufVxcblxcbi5kYW5nZXJCdXR0b24ge1xcbiAgICBib3JkZXItY29sb3I6ICM5ODU1NjUgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogIzRhMjQzMCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmYzRjYyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5vcGVyYXRvclRhYnMuZm91clRhYnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbjpob3ZlcixcXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udHdvSW5wdXRHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbkxpc3RBcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5pbkFkZFJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5pblZhbHVlUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLnByZXZpZXdXaGVyZSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVCbG9jayB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICAgIGJhY2tncm91bmQ6ICMyMDI2Mzc7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICNjNmNjZGE7XFxufVxcblxcbi5idWxrQWN0aW9uQmFyIHtcXG4gICAgbWluLWhlaWdodDogNDJweDtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzIwMjYzNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTg1NTY1O1xcbiAgICBiYWNrZ3JvdW5kOiAjNGEyNDMwO1xcbiAgICBjb2xvcjogI2ZmYzRjYztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNjMzMDQwO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3gge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBhY2NlbnQtY29sb3I6ICM5YmFlZTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cElkZW50aXR5IHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLmdyb3VwTmFtZSB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBOYW1lTG9hZGluZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5ncm91cElkIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBNZW1iZXJzIHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBjb2xvcjogIzhmYTNjZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5cXG4uZ3JvdXBJZENvcHlCdXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XFxufVxcblxcbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNldHRpbmdOb3RpY2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjhweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHotaW5kZXg6IDExMDAwO1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICBwYWRkaW5nOiAxMXB4IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcXG4gICAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDY2cHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMjJweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XFxuICAgIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlIHtcXG4gICAgY29sb3I6ICM4ZTk2YWE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnNhdmVTdGF0ZS5jaGFuZ2VkIHtcXG4gICAgY29sb3I6ICNmMWMyN2Q7XFxufVxcblxcbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MjhhYzM7XFxuICAgIGJhY2tncm91bmQ6ICMzODUwODM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYmFja2dyb3VuZDogIzM4NDM1YjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYmFja2dyb3VuZDogIzQ2NjE5YTtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbjpkaXNhYmxlZCxcXG4uYXBwbHlDb25maWdCdXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjQ1O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2VvbG9naWNhOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuLnNldHRpbmdBcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHZW9sb2dpY2FcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zZXR0aW5nc0NvbnRlbnQge1xcbiAgcGFkZGluZzogMTRweCAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay00MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstMTAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KSk7XFxufSAqL1xcbi5zb3VyY2VTZWxlY3RvckNhcmQge1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnBhbmVsQ2FyZExhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gIHBhZGRpbmc6IDEzcHggMTJweCAxMnB4O1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbEhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbFRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTdweDtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMzRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1vZGFsQXJlYSB7XFxuICBjb2xvcjogI2YzZjRmNjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2VvbG9naWNhXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbEJsb2NrIHtcXG4gIHdpZHRoOiBtaW4oMTIwMHB4LCAxMDB2dyAtIDMycHgpO1xcbiAgaGVpZ2h0OiBtaW4oODAwcHgsIDEwMHZoIC0gMzJweCk7XFxuICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0M2E0OTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzA1cHggMWZyO1xcbn1cXG5cXG4ubW9kYWxMaXN0IHtcXG4gIGJhY2tncm91bmQ6ICMyNTJjNDE7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWxMaXN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1vZGFsTGlzdFN1YnRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uZmllbGRMaXN0IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbEl0ZW0ge1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubW9kYWxJdGVtOmhvdmVyLFxcbi5tb2RhbEl0ZW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogIzMzNDA1ZjtcXG4gIGJvcmRlci1jb2xvcjogI2I2YzRlZDtcXG59XFxuXFxuLm1vZGFsSXRlbVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjYjhiZmQxO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mbyBzcGFuIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uIHtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOWNhOGM0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5tb2RhbEJvdHRvbUFjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmpzb25CdXR0b24ge1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcXG4gIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICBjb2xvcjogI2YzZjRmNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5qc29uQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5qc29uQnV0dG9uIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbFJpZ2h0UGFuZWwge1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tb2RhbEl0ZW1GdWxsSW5mbyB7XFxuICBmbGV4OiAxO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIHBhZGRpbmc6IDIycHg7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYTQwNTA7XFxufVxcblxcbi5yaWdodFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5yaWdodEZpZWxkIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxcbi5ydWxlQWN0aW9ucyxcXG4uZ3JvdXBBY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5pY29uQnV0dG9uLFxcbi5taW5pSWNvbkJ1dHRvbiB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XFxuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWluaUljb25CdXR0b24ge1xcbiAgd2lkdGg6IDI2cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5pY29uQnV0dG9uOmhvdmVyLFxcbi5taW5pSWNvbkJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbi5kYW5nZXIsXFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XFxuICBib3JkZXItY29sb3I6ICM4ZjRmNWI7XFxuICBjb2xvcjogI2ZmYjhjMTtcXG59XFxuXFxuLnJ1bGVzQXJlYSB7XFxuICBwYWRkaW5nLXRvcDogMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucnVsZUNhcmQge1xcbiAgcGFkZGluZzogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNDY1YjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5ydWxlQ2FyZC5zZWxlY3RlZFJ1bGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgYmFja2dyb3VuZDogIzJjMzQ0ODtcXG59XFxuXFxuLnJ1bGVIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucnVsZUluZm8ge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLnJ1bGVMYWJlbCB7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnJ1bGVWYWx1ZSB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnJ1bGVBY3Rpb25zIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ydWxlQ2FyZDpob3ZlciAucnVsZUFjdGlvbnMge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNtYWxsQnV0dG9uIHtcXG4gIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLnNtYWxsQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzYjQ4Njg7XFxufVxcblxcbi5ncm91cHNBcmVhIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogN3B4O1xcbn1cXG5cXG4uZ3JvdXBSb3cge1xcbiAgYmFja2dyb3VuZDogIzFkMjIzMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODQyNTg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIGNvbG9yOiAjZDlkZWVhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZ3JvdXBSb3cuc2VsZWN0ZWRHcm91cCB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xcbn1cXG5cXG4uZ3JvdXBSb3cgc3BhbiB7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwQWN0aW9ucyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZ3JvdXBSb3c6aG92ZXIgLmdyb3VwQWN0aW9ucyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMmIzMzQ4O1xcbn1cXG5cXG4uZW1wdHlNaW5pLFxcbi5lbXB0eVJ1bGVzIHtcXG4gIGNvbG9yOiAjOGU5NmFhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uZW1wdHlSdWxlcyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNTU1Zjc2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGlhbG9nQXJlYSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBpbnNldDogMDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dCbG9jayB7XFxuICB3aWR0aDogNTIwcHg7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzI1MmIzODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YzU2NmM7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMThweDtcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmRpYWxvZ1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uZGlhbG9nVGV4dCB7XFxuICBjb2xvcjogI2MyYzhkNTtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5kaWFsb2dJbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGlhbG9nSW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzNiNDY1ZDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6ICM5ODU1NjUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICM0YTI0MzAgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcGVyYXRvclRhYnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiAjZDhkZWVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbjpob3ZlcixcXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcXG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udHdvSW5wdXRHcmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbkxpc3RBcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5pbkFkZFJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uaW5WYWx1ZVJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm9wdGlvbmFsUnVsZUJsb2NrIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xcbn1cXG5cXG4ub3B0aW9uYWxSdWxlVGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjYzZjY2RhO1xcbn1cXG5cXG4uYnVsa0FjdGlvbkJhciB7XFxuICBtaW4taGVpZ2h0OiA0MnB4O1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYmFja2dyb3VuZDogIzIwMjYzNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMnB4O1xcbiAgY29sb3I6ICNkOGRlZWE7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbCB7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4NTU2NTtcXG4gIGJhY2tncm91bmQ6ICM0YTI0MzA7XFxuICBjb2xvcjogI2ZmYzRjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM2MzMwNDA7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveCB7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGFjY2VudC1jb2xvcjogIzliYWVlMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZ3JvdXBJZGVudGl0eSB7XFxuICBtaW4td2lkdGg6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4uZ3JvdXBOYW1lIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBOYW1lTG9hZGluZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uZ3JvdXBJZCB7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cE1lbWJlcnMge1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgY29sb3I6ICM4ZmEzY2Y7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5ncm91cElkQ29weUJ1dHRvbiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uZ3JvdXBJZENvcHlCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNldHRpbmdOb3RpY2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyOHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgei1pbmRleDogMTEwMDA7XFxuICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgcGFkZGluZzogMTFweCAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcXG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWluLWhlaWdodDogNjZweDtcXG4gIHBhZGRpbmc6IDEzcHggMjJweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2E0MDUwO1xcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlIHtcXG4gIGNvbG9yOiAjOGU5NmFhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlLmNoYW5nZWQge1xcbiAgY29sb3I6ICNmMWMyN2Q7XFxufVxcblxcbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiAwIDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzI4YWMzO1xcbiAgYmFja2dyb3VuZDogIzM4NTA4MztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQ6ICMzODQzNWI7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBiYWNrZ3JvdW5kOiAjNDY2MTlhO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmRpc2FibGVkLFxcbi5hcHBseUNvbmZpZ0J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjQ1O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9Mb2FkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vTG9hZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zZXR0aW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3NldHRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIlxuXG5pbXBvcnQgXCIuL0xvYWRlci5jc3NcIlxuXG5leHBvcnQgdHlwZSBMb2FkZXJQcm9wcyA9IHtcbiAgICB2YXJpYW50PzogXCJkZWZhdWx0XCIgfCBcImNvbXBhY3RcIlxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIFwiYXJpYS1sYWJlbFwiPzogc3RyaW5nXG4gICAgYXJpYUxhYmVsPzogc3RyaW5nXG4gICAgZmlsbD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvYWRlcihwcm9wczogTG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBmaWxsID0gZmFsc2UsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxQcm9wLFxuICAgICAgICBhcmlhTGFiZWwsXG4gICAgfSA9IHByb3BzXG4gICAgY29uc3QgbGFiZWwgPSBhcmlhTGFiZWwgPz8gYXJpYUxhYmVsUHJvcCA/PyBcIkxvYWRpbmdcIlxuXG4gICAgY29uc3Qgc3Bpbm5lciA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgXCJmaXJlLWxvYWRlclwiLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQgPT09IFwiY29tcGFjdFwiID8gXCJmaXJlLWxvYWRlci1jb21wYWN0XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgLz5cbiAgICApXG5cbiAgICBpZiAoIWZpbGwpIHtcbiAgICAgICAgcmV0dXJuIHNwaW5uZXJcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmaXJlLWxvYWRlci1zaGVsbC1maWxsXCI+e3NwaW5uZXJ9PC9kaXY+XG59XG4iLCJleHBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi9Mb2FkZXJcIlxuZXhwb3J0IHR5cGUgeyBMb2FkZXJQcm9wcyB9IGZyb20gXCIuL0xvYWRlclwiXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgZ2V0QXBwU3RvcmUsIEltbXV0YWJsZSwgQWxsRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHR5cGUgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCI7XG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiLi4vcnVudGltZS9zaGFyZWQvbG9hZGVyXCI7XG5pbXBvcnQgXCIuL3NldHRpbmcuY3NzXCI7XG5cbnR5cGUgUnVsZU9wZXJhdG9yID0gXCJlcXVhbFwiIHwgXCJyYW5nZVwiIHwgXCJpbmNsdWRlXCIgfCBcImxpa2VcIjtcblxudHlwZSBBY2Nlc3NSdWxlID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgb3BlcmF0b3I6IFJ1bGVPcGVyYXRvcjtcbiAgICB2YWx1ZT86IHN0cmluZztcbiAgICBmcm9tPzogc3RyaW5nO1xuICAgIHRvPzogc3RyaW5nO1xuICAgIHZhbHVlcz86IHN0cmluZ1tdO1xuICAgIGdyb3Vwczogc3RyaW5nW107XG59O1xuXG50eXBlIEFjY2Vzc0ZpZWxkUnVsZSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZmllbGQ6IHN0cmluZztcbiAgICBydWxlczogQWNjZXNzUnVsZVtdO1xufTtcblxudHlwZSBBY2Nlc3NDb25maWcgPSB7XG4gICAgZnVsbEFjY2Vzc0dyb3Vwczogc3RyaW5nW107XG4gICAgcnVsZXM6IEFjY2Vzc0ZpZWxkUnVsZVtdO1xufTtcblxudHlwZSBQb3J0YWxHcm91cEluZm8gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHVzZXJzQ291bnQ6IG51bWJlciB8IG51bGw7XG4gICAgaXNVbmF2YWlsYWJsZT86IGJvb2xlYW47XG59O1xuXG50eXBlIEVzcmlSZXF1ZXN0RnVuY3Rpb24gPSAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgICAgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+O1xuICAgICAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XG4gICAgfVxuKSA9PiBQcm9taXNlPHsgZGF0YTogYW55IH0+O1xuXG50eXBlIERpYWxvZ1N0YXRlID1cbiAgICB8IG51bGxcbiAgICB8IHtcbiAgICAgICAgdHlwZTpcbiAgICAgICAgfCBcImFkZEZpZWxkXCJcbiAgICAgICAgfCBcImVkaXRGaWVsZFwiXG4gICAgICAgIHwgXCJkZWxldGVGaWVsZFwiXG4gICAgICAgIHwgXCJhZGRSdWxlXCJcbiAgICAgICAgfCBcImVkaXRSdWxlXCJcbiAgICAgICAgfCBcImRlbGV0ZVJ1bGVcIlxuICAgICAgICB8IFwiYWRkR3JvdXBcIlxuICAgICAgICB8IFwiZWRpdEdyb3VwXCJcbiAgICAgICAgfCBcImRlbGV0ZUdyb3VwXCJcbiAgICAgICAgfCBcImFkZEdsb2JhbEdyb3VwXCJcbiAgICAgICAgfCBcImVkaXRHbG9iYWxHcm91cFwiXG4gICAgICAgIHwgXCJkZWxldGVHbG9iYWxHcm91cFwiO1xuICAgICAgICBwYXlsb2FkPzogYW55O1xuICAgIH07XG5cbmNvbnN0IEdMT0JBTF9BQ0NFU1NfSUQgPSBcIl9fZ2xvYmFsX2FjY2Vzc19fXCI7XG5cbmNvbnN0IG1ha2VJZCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG59O1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBBY2Nlc3NDb25maWcgPSB7XG4gICAgZnVsbEFjY2Vzc0dyb3VwczogW10sXG4gICAgcnVsZXM6IFtdLFxufTtcblxuY29uc3QgcXVvdGVWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKC9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodHJpbW1lZCkpIHtcbiAgICAgICAgcmV0dXJuIHRyaW1tZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAnJHt0cmltbWVkLnJlcGxhY2UoLycvZywgXCInJ1wiKX0nYDtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZU9wZXJhdG9yID0gKG9wZXJhdG9yOiBhbnkpOiBSdWxlT3BlcmF0b3IgPT4ge1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJlcXVhbFwiKSByZXR1cm4gXCJlcXVhbFwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJyYW5nZVwiKSByZXR1cm4gXCJyYW5nZVwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIpIHJldHVybiBcImluY2x1ZGVcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwibGlrZVwiKSByZXR1cm4gXCJsaWtlXCI7XG5cbiAgICBpZiAob3BlcmF0b3IgPT09IFwiZXFcIikgcmV0dXJuIFwiZXF1YWxcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiYmV0d2VlblwiKSByZXR1cm4gXCJyYW5nZVwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJpblwiKSByZXR1cm4gXCJpbmNsdWRlXCI7XG5cbiAgICByZXR1cm4gXCJlcXVhbFwiO1xufTtcblxuY29uc3QgYnVpbGRSdWxlV2hlcmUgPSAoZmllbGQ6IHN0cmluZywgcnVsZTogQWNjZXNzUnVsZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwiZXF1YWxcIikge1xuICAgICAgICByZXR1cm4gYCR7ZmllbGR9ID0gJHtxdW90ZVZhbHVlKHJ1bGUudmFsdWUgPz8gXCJcIil9YDtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgIHJldHVybiBgJHtmaWVsZH0gQkVUV0VFTiAke3F1b3RlVmFsdWUocnVsZS5mcm9tID8/IFwiXCIpfSBBTkQgJHtxdW90ZVZhbHVlKHJ1bGUudG8gPz8gXCJcIil9YDtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gcnVsZS52YWx1ZXMgPz8gW107XG4gICAgICAgIHJldHVybiBgJHtmaWVsZH0gSU4gKCR7dmFsdWVzLm1hcChxdW90ZVZhbHVlKS5qb2luKFwiLCBcIil9KWA7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwibGlrZVwiKSB7XG4gICAgICAgIHJldHVybiBgJHtmaWVsZH0gTElLRSAke3F1b3RlVmFsdWUocnVsZS52YWx1ZSA/PyBcIlwiKX1gO1xuICAgIH1cblxuICAgIHJldHVybiBcIjE9MFwiO1xufTtcblxuY29uc3Qgbm9ybWFsaXplTG9hZGVkQ29uZmlnID0gKGRhdGE6IGFueSk6IEFjY2Vzc0NvbmZpZyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogQXJyYXkuaXNBcnJheShkYXRhPy5mdWxsQWNjZXNzR3JvdXBzKVxuICAgICAgICAgICAgPyBkYXRhLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChpdGVtOiBhbnkpID0+IFN0cmluZyhpdGVtKSlcbiAgICAgICAgICAgIDogW10sXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGRhdGE/LnJ1bGVzKVxuICAgICAgICAgICAgPyBkYXRhLnJ1bGVzLm1hcCgoZmllbGRJdGVtOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGZpZWxkSXRlbS5pZCB8fCBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZmllbGRJdGVtLnRpdGxlIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkSXRlbS5maWVsZCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGZpZWxkSXRlbS5ydWxlcylcbiAgICAgICAgICAgICAgICAgICAgPyBmaWVsZEl0ZW0ucnVsZXMubWFwKChydWxlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcnVsZS5pZCB8fCBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBub3JtYWxpemVPcGVyYXRvcihydWxlLm9wZXJhdG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogcnVsZS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHJ1bGUudG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IEFycmF5LmlzQXJyYXkocnVsZS52YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLnZhbHVlcy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IEFycmF5LmlzQXJyYXkocnVsZS5ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLmdyb3Vwcy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgIH07XG59O1xuXG5jb25zdCBjbG9uZUFjY2Vzc0NvbmZpZyA9IChkYXRhOiBBY2Nlc3NDb25maWcpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIHJldHVybiBub3JtYWxpemVMb2FkZWRDb25maWcoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkpO1xufTtcblxuY29uc3QgZ2V0SW5pdGlhbEFjY2Vzc0NvbmZpZyA9ICh3aWRnZXRDb25maWc6IGFueSk6IEFjY2Vzc0NvbmZpZyA9PiB7XG4gICAgY29uc3Qgc3RvcmVkQ29uZmlnID0gd2lkZ2V0Q29uZmlnPy5hY2Nlc3NDb25maWc7XG5cbiAgICBpZiAoIXN0b3JlZENvbmZpZykge1xuICAgICAgICByZXR1cm4gY2xvbmVBY2Nlc3NDb25maWcoZGVmYXVsdENvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhaW5Db25maWcgPVxuICAgICAgICB0eXBlb2Ygc3RvcmVkQ29uZmlnLmFzTXV0YWJsZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0b3JlZENvbmZpZy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgICAgICAgICA6IHN0b3JlZENvbmZpZztcblxuICAgIHJldHVybiBub3JtYWxpemVMb2FkZWRDb25maWcocGxhaW5Db25maWcpO1xufTtcblxuY29uc3QgZ2V0Q29uZmlnR3JvdXBJZHMgPSAoY29uZmlnOiBBY2Nlc3NDb25maWcpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJZHMgPSBbXG4gICAgICAgIC4uLmNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLFxuICAgICAgICAuLi5jb25maWcucnVsZXMuZmxhdE1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICBmaWVsZC5ydWxlcy5mbGF0TWFwKChydWxlKSA9PiBydWxlLmdyb3VwcylcbiAgICAgICAgKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChncm91cElkcykpLnNvcnQoKTtcbn07XG5cbmNvbnN0IGdldFBvcnRhbEdyb3VwSW5mbyA9IGFzeW5jIChcbiAgICBlc3JpUmVxdWVzdDogRXNyaVJlcXVlc3RGdW5jdGlvbixcbiAgICBwb3J0YWxVcmw6IHN0cmluZyxcbiAgICBncm91cElkOiBzdHJpbmdcbik6IFByb21pc2U8UG9ydGFsR3JvdXBJbmZvPiA9PiB7XG4gICAgY29uc3QgZW5jb2RlZEdyb3VwSWQgPSBlbmNvZGVVUklDb21wb25lbnQoZ3JvdXBJZCk7XG4gICAgY29uc3QgZ3JvdXBVcmwgPVxuICAgICAgICBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb21tdW5pdHkvZ3JvdXBzLyR7ZW5jb2RlZEdyb3VwSWR9YDtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChncm91cFVybCwge1xuICAgICAgICAgICAgcXVlcnk6IHsgZjogXCJqc29uXCIgfSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChncm91cFJlc3BvbnNlLmRhdGE/LmVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ3JvdXBSZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UgfHwgXCLQk9GA0YPQv9C/0LAg0L3QtdC00L7RgdGC0YPQv9C90LBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXNlcnNDb3VudDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChgJHtncm91cFVybH0vdXNlckxpc3RgLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZjogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxuICAgICAgICAgICAgICAgICAgICBudW06IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhdXNlcnNSZXNwb25zZS5kYXRhPy5lcnJvciAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB1c2Vyc1Jlc3BvbnNlLmRhdGE/LnRvdGFsID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAqIHVzZXJMaXN0INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIG93bmVyINC+0YLQtNC10LvRjNC90L4g0L7RgiDQvNCw0YHRgdC40LLQsCB1c2Vycy5cbiAgICAgICAgICAgICAgICAgKiDQn9C+0Y3RgtC+0LzRgyDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQu9Cw0LTQtdC70YzRhtCwINC6INC60L7Qu9C40YfQtdGB0YLQstGDINC+0YHRgtCw0LvRjNC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB1c2Vyc0NvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgdXNlcnNSZXNwb25zZS5kYXRhLnRvdGFsXG4gICAgICAgICAgICAgICAgLy8gKyAodXNlcnNSZXNwb25zZS5kYXRhLm93bmVyPy51c2VybmFtZSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB1c2Vyc0NvdW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ3JvdXBJZCxcbiAgICAgICAgICAgIHRpdGxlOiBncm91cFJlc3BvbnNlLmRhdGE/LnRpdGxlIHx8IFwi0JHQtdC3INC90LDQt9Cy0LDQvdC40Y9cIixcbiAgICAgICAgICAgIHVzZXJzQ291bnQsXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ3JvdXBJZCxcbiAgICAgICAgICAgIHRpdGxlOiBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIixcbiAgICAgICAgICAgIHVzZXJzQ291bnQ6IG51bGwsXG4gICAgICAgICAgICBpc1VuYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZyhwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4pIHtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxBY2Nlc3NDb25maWc+KCgpID0+XG4gICAgICAgIGdldEluaXRpYWxBY2Nlc3NDb25maWcocHJvcHMuY29uZmlnKVxuICAgICk7XG4gICAgY29uc3QgW3NhdmVkQ29uZmlnLCBzZXRTYXZlZENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxBY2Nlc3NDb25maWc+KCgpID0+XG4gICAgICAgIGdldEluaXRpYWxBY2Nlc3NDb25maWcocHJvcHMuY29uZmlnKVxuICAgICk7XG4gICAgY29uc3QgW2hhc1Vuc2F2ZWRDaGFuZ2VzLCBzZXRIYXNVbnNhdmVkQ2hhbmdlc10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW25vdGljZSwgc2V0Tm90aWNlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IG5vdGljZVRpbWVyID0gUmVhY3QudXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc3Qgc2hvd05vdGljZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKG5vdGljZVRpbWVyLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobm90aWNlVGltZXIuY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXROb3RpY2UobWVzc2FnZSk7XG4gICAgICAgIG5vdGljZVRpbWVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXROb3RpY2UobnVsbCk7XG4gICAgICAgICAgICBub3RpY2VUaW1lci5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSwgMTgwMCk7XG4gICAgfTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobm90aWNlVGltZXIuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobm90aWNlVGltZXIuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2V0RHJhZnRDb25maWcgPSAoXG4gICAgICAgIHVwZGF0ZTogKHByZXZpb3VzOiBBY2Nlc3NDb25maWcpID0+IEFjY2Vzc0NvbmZpZ1xuICAgICk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRDb25maWcoKHByZXZpb3VzKSA9PiB1cGRhdGUocHJldmlvdXMpKTtcbiAgICAgICAgc2V0SGFzVW5zYXZlZENoYW5nZXModHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBbZ3JvdXBzSW5mbywgc2V0R3JvdXBzSW5mb10gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBQb3J0YWxHcm91cEluZm8+Pih7fSk7XG4gICAgY29uc3QgW2dyb3Vwc0xvYWRpbmcsIHNldEdyb3Vwc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3QgZ3JvdXBJZHNTaWduYXR1cmUgPSBnZXRDb25maWdHcm91cElkcyhjb25maWcpLmpvaW4oXCJ8XCIpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbG9hZEdyb3Vwc0luZm8gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBjb25zdCBncm91cElkcyA9IGdldENvbmZpZ0dyb3VwSWRzKGNvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmIChncm91cElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRHcm91cHNJbmZvKHt9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8ucG9ydGFsVXJsO1xuXG4gICAgICAgICAgICBpZiAoIXBvcnRhbFVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0R3JvdXBzTG9hZGluZyh0cnVlKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXNyaVJlcXVlc3RdID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAgICAgICAgICAgICAgIFwiZXNyaS9yZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgXSkgYXMgW0VzcmlSZXF1ZXN0RnVuY3Rpb25dO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWRzLm1hcCgoZ3JvdXBJZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvcnRhbEdyb3VwSW5mbyhlc3JpUmVxdWVzdCwgcG9ydGFsVXJsLCBncm91cElkKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkID0gcmVzdWx0LnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBQb3J0YWxHcm91cEluZm8+PihcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2l0ZW0uaWRdID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRHcm91cHNJbmZvKG1hcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEdyb3Vwc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2b2lkIGxvYWRHcm91cHNJbmZvKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LCBbZ3JvdXBJZHNTaWduYXR1cmVdKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlPERpYWxvZ1N0YXRlPihudWxsKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFJ1bGVJZHMsIHNldFNlbGVjdGVkUnVsZUlkc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtzZWxlY3RlZEdyb3VwS2V5cywgc2V0U2VsZWN0ZWRHcm91cEtleXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICAgIGNvbnN0IFtmb3JtVGl0bGUsIHNldEZvcm1UaXRsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtmb3JtRmllbGQsIHNldEZvcm1GaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtmb3JtR3JvdXAsIHNldEZvcm1Hcm91cF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgY29uc3QgW3J1bGVPcGVyYXRvciwgc2V0UnVsZU9wZXJhdG9yXSA9IFJlYWN0LnVzZVN0YXRlPFJ1bGVPcGVyYXRvcj4oXCJlcXVhbFwiKTtcbiAgICBjb25zdCBbcnVsZVZhbHVlLCBzZXRSdWxlVmFsdWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcnVsZUZyb20sIHNldFJ1bGVGcm9tXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3J1bGVUbywgc2V0UnVsZVRvXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3J1bGVWYWx1ZXMsIHNldFJ1bGVWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBbbmV3TGlzdFZhbHVlLCBzZXROZXdMaXN0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkRmllbGQgPVxuICAgICAgICBzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogY29uZmlnLnJ1bGVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpID8/IG51bGw7XG5cbiAgICBjb25zdCByZW5kZXJHcm91cElkZW50aXR5ID0gKGdyb3VwSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBncm91cEluZm8gPSBncm91cHNJbmZvW2dyb3VwSWRdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwSWRlbnRpdHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Z3JvdXBzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwTmFtZUxvYWRpbmdcIiBhcmlhLWJ1c3k9XCJ0cnVlXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciB2YXJpYW50PVwiY29tcGFjdFwiIGFyaWFMYWJlbD1cItCX0LDQs9GA0YPQt9C60LDigKZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmZvPy50aXRsZSA/PyBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCh0LrQvtC/0LjRgNC+0LLQsNGC0YwgSURcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBjb3B5R3JvdXBJZChncm91cElkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtncm91cElkfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAge2dyb3VwSW5mbz8udXNlcnNDb3VudCAhPT0gbnVsbCAmJiBncm91cEluZm8/LnVzZXJzQ291bnQgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBNZW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70LXQuToge2dyb3VwSW5mby51c2Vyc0NvdW50fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoW10pO1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlbGVjdExlZnRJdGVtID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChpZCk7XG4gICAgICAgIHJlc2V0U2VsZWN0aW9uKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0UnVsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldFJ1bGVPcGVyYXRvcihcImVxdWFsXCIpO1xuICAgICAgICBzZXRSdWxlVmFsdWUoXCJcIik7XG4gICAgICAgIHNldFJ1bGVGcm9tKFwiXCIpO1xuICAgICAgICBzZXRSdWxlVG8oXCJcIik7XG4gICAgICAgIHNldFJ1bGVWYWx1ZXMoW10pO1xuICAgICAgICBzZXROZXdMaXN0VmFsdWUoXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFJ1bGVGcm9tRm9ybSA9ICgpOiBBY2Nlc3NSdWxlIHwgbnVsbCA9PiB7XG4gICAgICAgIGlmIChydWxlT3BlcmF0b3IgPT09IFwiZXF1YWxcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlVmFsdWUudHJpbSgpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwiZXF1YWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcnVsZVZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlT3BlcmF0b3IgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlRnJvbS50cmltKCkgfHwgIXJ1bGVUby50cmltKCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgIGZyb206IHJ1bGVGcm9tLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB0bzogcnVsZVRvLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBjbGVhblZhbHVlcyA9IHJ1bGVWYWx1ZXMubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICAgICAgICBpZiAoY2xlYW5WYWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlczogY2xlYW5WYWx1ZXMsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlVmFsdWUudHJpbSgpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwibGlrZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlVmFsdWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGxSdWxlRm9ybSA9IChydWxlOiBBY2Nlc3NSdWxlKSA9PiB7XG4gICAgICAgIHNldFJ1bGVPcGVyYXRvcihydWxlLm9wZXJhdG9yKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlKHJ1bGUudmFsdWUgPz8gXCJcIik7XG4gICAgICAgIHNldFJ1bGVGcm9tKHJ1bGUuZnJvbSA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZVRvKHJ1bGUudG8gPz8gXCJcIik7XG4gICAgICAgIHNldFJ1bGVWYWx1ZXMocnVsZS52YWx1ZXMgPz8gW10pO1xuICAgICAgICBzZXROZXdMaXN0VmFsdWUoXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Rm9ybVRpdGxlKFwiXCIpO1xuICAgICAgICBzZXRGb3JtRmllbGQoXCJcIik7XG4gICAgICAgIHJlc2V0UnVsZUZvcm0oKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRGaWVsZFwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHJldHVybjtcblxuICAgICAgICBzZXRGb3JtVGl0bGUoc2VsZWN0ZWRGaWVsZC50aXRsZSk7XG4gICAgICAgIHNldEZvcm1GaWVsZChzZWxlY3RlZEZpZWxkLmZpZWxkKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0RmllbGRcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBmaWVsZElkOiBzZWxlY3RlZEZpZWxkLmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFmb3JtVGl0bGUudHJpbSgpIHx8ICFmb3JtRmllbGQudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRGaWVsZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3RmllbGQ6IEFjY2Vzc0ZpZWxkUnVsZSA9IHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGZvcm1UaXRsZS50cmltKCksXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZvcm1GaWVsZC50cmltKCksXG4gICAgICAgICAgICAgICAgcnVsZXM6IGZpcnN0UnVsZSA/IFtmaXJzdFJ1bGVdIDogW10sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBbLi4ucHJldi5ydWxlcywgbmV3RmllbGRdLFxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG5ld0ZpZWxkLmlkKTtcbiAgICAgICAgICAgIHJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImVkaXRGaWVsZFwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pZCA9PT0gZGlhbG9nLnBheWxvYWQuZmllbGRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZm9ybVRpdGxlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZm9ybUZpZWxkLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJ1bGVzID0gcHJldi5ydWxlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHNlbGVjdGVkRmllbGQuaWQpO1xuXG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG5leHRSdWxlc1swXT8uaWQgPz8gR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IG5leHRSdWxlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZFJ1bGUgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0UnVsZUZvcm0oKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRSdWxlXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0UnVsZSA9IChydWxlOiBBY2Nlc3NSdWxlKSA9PiB7XG4gICAgICAgIGZpbGxSdWxlRm9ybShydWxlKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0UnVsZVwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHJ1bGVJZDogcnVsZS5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlUnVsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZm9ybVJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICBpZiAoIWZvcm1SdWxlKSB7XG4gICAgICAgICAgICBhbGVydChcItCX0LDQv9C+0LvQvdC4INC30L3QsNGH0LXQvdC40LUg0L/RgNCw0LLQuNC70LBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZFJ1bGVcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFsuLi5maWVsZC5ydWxlcywgZm9ybVJ1bGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImVkaXRSdWxlXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm9ybVJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJ1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlUnVsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFkaWFsb2c/LnBheWxvYWQ/LnJ1bGVJZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5maWx0ZXIoKHJ1bGUpID0+IHJ1bGUuaWQgIT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcygocHJldikgPT4gcHJldi5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gZGlhbG9nLnBheWxvYWQucnVsZUlkKSk7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKFtdKTtcblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVJ1bGVTZWxlY3QgPSAocnVsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRSdWxlSWRzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5pbmNsdWRlcyhydWxlSWQpXG4gICAgICAgICAgICAgICAgPyBwcmV2LmZpbHRlcigoaWQpID0+IGlkICE9PSBydWxlSWQpXG4gICAgICAgICAgICAgICAgOiBbLi4ucHJldiwgcnVsZUlkXVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVTZWxlY3RlZFJ1bGVzID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgc2VsZWN0ZWRSdWxlSWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5maWx0ZXIoKHJ1bGUpID0+ICFzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCkpLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogZmllbGRcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoW10pO1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VHcm91cEtleSA9IChydWxlSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgJHtydWxlSWR9XyR7aW5kZXh9YDtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUdsb2JhbEdyb3VwS2V5ID0gKGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYGdsb2JhbF8ke2luZGV4fWA7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZUdyb3VwU2VsZWN0ID0gKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5pbmNsdWRlcyhrZXkpXG4gICAgICAgICAgICAgICAgPyBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0ga2V5KVxuICAgICAgICAgICAgICAgIDogWy4uLnByZXYsIGtleV1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlU2VsZWN0ZWRHcm91cHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEdyb3VwS2V5cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJZCA9PT0gR0xPQkFMX0FDQ0VTU19JRCkge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBmdWxsQWNjZXNzR3JvdXBzOiBwcmV2LmZ1bGxBY2Nlc3NHcm91cHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+ICFzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhtYWtlR2xvYmFsR3JvdXBLZXkoaW5kZXgpKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWRGaWVsZCkge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNlbGVjdGVkR3JvdXBLZXlzLmluY2x1ZGVzKG1ha2VHcm91cEtleShydWxlLmlkLCBpbmRleCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRHcm91cCA9IChydWxlSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoXCJcIik7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiYWRkR3JvdXBcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBydWxlSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRHcm91cCA9IChydWxlSWQ6IHN0cmluZywgZ3JvdXBJbmRleDogbnVtYmVyLCBncm91cFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybUdyb3VwKGdyb3VwVmFsdWUpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImVkaXRHcm91cFwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHJ1bGVJZCxcbiAgICAgICAgICAgICAgICBncm91cEluZGV4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVHcm91cCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFmb3JtR3JvdXAudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHcm91cFwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBbLi4ucnVsZS5ncm91cHMsIGZvcm1Hcm91cC50cmltKCldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0R3JvdXBcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMubWFwKChncm91cCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1Hcm91cC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVHcm91cCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFkaWFsb2c/LnBheWxvYWQpIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJ1bGUuZ3JvdXBzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoKHByZXYpID0+XG4gICAgICAgICAgICBwcmV2LmZpbHRlcihcbiAgICAgICAgICAgICAgICAoa2V5KSA9PiBrZXkgIT09IG1ha2VHcm91cEtleShkaWFsb2cucGF5bG9hZC5ydWxlSWQsIGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXgpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIHNldEZvcm1Hcm91cChcIlwiKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRHbG9iYWxHcm91cFwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdEdsb2JhbEdyb3VwID0gKGdyb3VwSW5kZXg6IG51bWJlciwgZ3JvdXBWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Hcm91cChncm91cFZhbHVlKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0R2xvYmFsR3JvdXBcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBncm91cEluZGV4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVHbG9iYWxHcm91cCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFmb3JtR3JvdXAudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHbG9iYWxHcm91cFwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IFsuLi5wcmV2LmZ1bGxBY2Nlc3NHcm91cHMsIGZvcm1Hcm91cC50cmltKCldLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0R2xvYmFsR3JvdXBcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBmdWxsQWNjZXNzR3JvdXBzOiBwcmV2LmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4ID8gZm9ybUdyb3VwLnRyaW0oKSA6IGdyb3VwXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogcHJldi5mdWxsQWNjZXNzR3JvdXBzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4XG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoKHByZXYpID0+XG4gICAgICAgICAgICBwcmV2LmZpbHRlcigoa2V5KSA9PiBrZXkgIT09IG1ha2VHbG9iYWxHcm91cEtleShkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4KSlcbiAgICAgICAgKTtcblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFZhbHVlVG9Jbkxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3TGlzdFZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT4gWy4uLnByZXYsIHZhbHVlXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVmFsdWVGcm9tSW5MaXN0ID0gKGluZGV4Rm9yUmVtb3ZlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT4gcHJldi5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhGb3JSZW1vdmUpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVmFsdWVJbkxpc3QgPSAoaW5kZXhGb3JVcGRhdGU6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRSdWxlVmFsdWVzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoaW5kZXggPT09IGluZGV4Rm9yVXBkYXRlID8gdmFsdWUgOiBpdGVtKSlcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZG93bmxvYWRKc29uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgNCldLCB7XG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgbGluay5kb3dubG9hZCA9IFwiYWNjZXNzLWNvbmZpZy5qc29uXCI7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcblxuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwbG9hZEpzb24gPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcblxuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcblxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoU3RyaW5nKHJlYWRlci5yZXN1bHQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplTG9hZGVkQ29uZmlnKHBhcnNlZCk7XG5cbiAgICAgICAgICAgICAgICBzZXREcmFmdENvbmZpZygoKSA9PiBub3JtYWxpemVkKTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKEdMT0JBTF9BQ0NFU1NfSUQpO1xuICAgICAgICAgICAgICAgIHJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBhbGVydChcItCd0LXQstC10YDQvdCw0Y8g0YHRgtGA0YPQutGC0YPRgNCwIEpTT05cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvcHlHcm91cElkID0gYXN5bmMgKGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQ/LndyaXRlVGV4dCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGdyb3VwSWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wb3JhcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC52YWx1ZSA9IGdyb3VwSWQ7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcG9yYXJ5SW5wdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaG93Tm90aWNlKFwiSUQg0YHQutC+0L/QuNGA0L7QstCw0L1cIik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQutC+0L/QuNGA0L7QstCw0YLRjCBJRFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcHBseUNvbmZpZyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgbmV4dENvbmZpZyA9IGNsb25lQWNjZXNzQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHdpZGdldENvbmZpZyA9IHByb3BzLmNvbmZpZyA/PyBJbW11dGFibGUoe30pO1xuXG4gICAgICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICAgICAgICBpZDogcHJvcHMuaWQsXG4gICAgICAgICAgICBjb25maWc6IHdpZGdldENvbmZpZy5zZXQoXCJhY2Nlc3NDb25maWdcIiwgSW1tdXRhYmxlKG5leHRDb25maWcpKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0U2F2ZWRDb25maWcobmV4dENvbmZpZyk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGljZShcItCd0LDRgdGC0YDQvtC50LrQuCDQv9GA0LjQvNC10L3QtdC90YtcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbmNlbENvbmZpZ0NoYW5nZXMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHNldENvbmZpZyhjbG9uZUFjY2Vzc0NvbmZpZyhzYXZlZENvbmZpZykpO1xuICAgICAgICBzZXRTZWxlY3RlZElkKEdMT0JBTF9BQ0NFU1NfSUQpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgICAgIHJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGljZShcItCY0LfQvNC10L3QtdC90LjRjyDQvtGC0LzQtdC90LXQvdGLXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICAgICAgICBpZDogcHJvcHMuaWQsXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcyxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkV2hlcmVGb3JDdXJyZW50VXNlciA9ICh1c2VyR3JvdXBzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0Z1bGxBY2Nlc3MgPSBjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5zb21lKChncm91cCkgPT4gdXNlckdyb3Vwcy5pbmNsdWRlcyhncm91cCkpO1xuXG4gICAgICAgIGlmIChoYXNGdWxsQWNjZXNzKSByZXR1cm4gXCIxPTFcIjtcblxuICAgICAgICBjb25zdCBhbGxvd2VkUnVsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgY29uZmlnLnJ1bGVzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBmaWVsZC5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzUnVsZUFjY2VzcyA9IHJ1bGUuZ3JvdXBzLnNvbWUoKGdyb3VwKSA9PiB1c2VyR3JvdXBzLmluY2x1ZGVzKGdyb3VwKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzUnVsZUFjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUnVsZXMucHVzaChgKCR7YnVpbGRSdWxlV2hlcmUoZmllbGQuZmllbGQsIHJ1bGUpfSlgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFsbG93ZWRSdWxlcy5sZW5ndGggPiAwID8gYWxsb3dlZFJ1bGVzLmpvaW4oXCIgT1IgXCIpIDogXCIxPTBcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUnVsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BlcmF0b3JUYWJzIGZvdXJUYWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVPcGVyYXRvcihcImVxdWFsXCIpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBFcXVhbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJyYW5nZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJpbmNsdWRlXCIpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmNsdWRlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImxpa2VcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwibGlrZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGlrZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsocnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgfHwgcnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JfQvdCw0YfQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cnVsZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSdWxlVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cnVsZU9wZXJhdG9yID09PSBcInJhbmdlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b0lucHV0R3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RglwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVGcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UnVsZUZyb20oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JTQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJ1bGVUbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3J1bGVPcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluTGlzdEFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5BZGRSb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCX0L3QsNGH0LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TGlzdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0xpc3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIiBvbkNsaWNrPXthZGRWYWx1ZVRvSW5MaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtydWxlVmFsdWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5TWluaVwiPtCh0L/QuNGB0L7QuiDQv9GD0YHRgjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5WYWx1ZVJvd1wiIGtleT17YCR7dmFsdWV9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQl9C90LDRh9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVWYWx1ZUluTGlzdChpbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVmFsdWVGcm9tSW5MaXN0KGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkRmllbGQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdXaGVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QmNGC0L7Qs9C+0LLQvtC1INGD0YHQu9C+0LLQuNC1OjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBSdWxlID0gZ2V0UnVsZUZyb21Gb3JtKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBSdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJ1aWxkUnVsZVdoZXJlKHNlbGVjdGVkRmllbGQuZmllbGQsIHRlbXBSdWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtzZWxlY3RlZEZpZWxkLmZpZWxkfSAuLi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nQXJlYVwiPlxuICAgICAgICAgICAge25vdGljZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdOb3RpY2VcIj57bm90aWNlfTwvZGl2Pn1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nc0NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZVNlbGVjdG9yQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsQ2FyZExhYmVsXCI+0KHQu9C+0Lkg0LTQsNC90L3Ri9GFPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXM9e0ltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3Byb3BzLnVzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc0NvbnRyb2xDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzQ29udHJvbEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sVGl0bGVcIj7QlNC+0YHRgtGD0L8g0Log0LTQsNC90L3Ri9C8PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRgdGC0YDQvtC50YLQtSDQs9GA0YPQv9C/0Ysg0Lgg0YPRgdC70L7QstC40Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQvtCx0YrQtdC60YLQvtCyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2Vzc1NldHRpbmdzQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGB0YLRgNC+0LnQutCwINC00L7RgdGC0YPQv9CwXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxBcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxMaXN0SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdFRpdGxlXCI+0J/RgNCw0LLQuNC70LAg0LTQvtGB0YLRg9C/0LA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxMaXN0U3VidGl0bGVcIj5KU09OIGFjY2VzcyBjb25maWc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oR0xPQkFMX0FDQ0VTU19JRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbVRpdGxlXCI+0J/QvtC70L3Ri9C5INC00L7RgdGC0YPQvzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YHQu9C+0LLQuNC1OiA8c3Bhbj4xPTE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5ydWxlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9kYWxJdGVtICR7c2VsZWN0ZWRJZCA9PT0gaXRlbS5pZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbEl0ZW1UaXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkNGC0YDQuNCx0YPRgjogPHNwYW4+e2l0ZW0uZmllbGR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkRmllbGRCdXR0b25cIiBvbkNsaWNrPXtvcGVuQWRkRmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCb3R0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJqc29uQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQuNGC0YwgSlNPTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRKc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImpzb25CdXR0b25cIiBvbkNsaWNrPXtkb3dubG9hZEpzb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQutCw0YfQsNGC0YwgSlNPTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsUmlnaHRQYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtRnVsbEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRUaXRsZVwiPtCf0L7Qu9C90YvQuSDQtNC+0YHRgtGD0L88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRGaWVsZFwiPtCj0YHQu9C+0LLQuNC1OiAxPTE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiIG9uQ2xpY2s9e29wZW5BZGRHbG9iYWxHcm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0Ywg0LPRgNGD0L/Qv9GDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc0FyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkR3JvdXBLZXlzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWxrQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JLRi9Cx0YDQsNC90L4g0LPRgNGD0L/Qvzoge3NlbGVjdGVkR3JvdXBLZXlzLmxlbmd0aH08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlU2VsZWN0ZWRHcm91cHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQstGL0LHRgNCw0L3QvdGL0LVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9GA0YPQv9C/0Ysg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LAg0LXRidGRINC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSBtYWtlR2xvYmFsR3JvdXBLZXkoaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXBSb3cgJHtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhncm91cEtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2dyb3VwfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0Q2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkR3JvdXBLZXlzLmluY2x1ZGVzKGdyb3VwS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlR3JvdXBTZWxlY3QoZ3JvdXBLZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdyb3VwSWRlbnRpdHkoZ3JvdXApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkVkaXRHbG9iYWxHcm91cChpbmRleCwgZ3JvdXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKcjlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZUdsb2JhbEdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogIXNlbGVjdGVkRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5FbXB0eTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0VGl0bGVcIj57c2VsZWN0ZWRGaWVsZC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0YLRgNC40LHRg9GCOiB7c2VsZWN0ZWRGaWVsZC5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0SGVhZGVyQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uQnV0dG9uXCIgb25DbGljaz17b3BlbkVkaXRGaWVsZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pyOXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2coeyB0eXBlOiBcImRlbGV0ZUZpZWxkXCIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJ1bGVJZHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1bGtBY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QktGL0LHRgNCw0L3QviDQv9GA0LDQstC40Ls6IHtzZWxlY3RlZFJ1bGVJZHMubGVuZ3RofTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTZWxlY3RlZFJ1bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywg0LLRi9Cx0YDQsNC90L3Ri9C1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRHcm91cEtleXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1bGtBY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QktGL0LHRgNCw0L3QviDQs9GA0YPQv9C/OiB7c2VsZWN0ZWRHcm91cEtleXMubGVuZ3RofTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTZWxlY3RlZEdyb3Vwc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINCy0YvQsdGA0LDQvdC90YvQtVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRmllbGQucnVsZXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVJ1bGVzXCI+0J/RgNCw0LLQuNC70LAg0LXRidGRINC90LUg0LTQvtCx0LDQstC70LXQvdGLPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcnVsZUNhcmQgJHtzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWxlY3RlZFJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtydWxlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdENoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZVJ1bGVTZWxlY3QocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlTGFiZWxcIj7Qo9GB0LvQvtCy0LjQtTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZVZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidWlsZFJ1bGVXaGVyZShzZWxlY3RlZEZpZWxkLmZpZWxkLCBydWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5BZGRHcm91cChydWxlLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsg0LPRgNGD0L/Qv9CwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuRWRpdFJ1bGUocnVsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDinI5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVJ1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVJZDogcnVsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc0FyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtydWxlLmdyb3Vwcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eU1pbmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9GLINC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuZ3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdyb3VwS2V5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bncm91cFJvdyAke3NlbGVjdGVkR3JvdXBLZXlzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkR3JvdXBLZXlzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVHcm91cFNlbGVjdChncm91cEtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyR3JvdXBJZGVudGl0eShncm91cCl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0R3JvdXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pyOXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkUnVsZUJ1dHRvblwiIG9uQ2xpY2s9e29wZW5BZGRSdWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsg0JTQvtCx0LDQstC40YLRjCDQv9GA0LDQstC40LvQvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbFNldHRpbmdBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2F2ZVN0YXRlICR7aGFzVW5zYXZlZENoYW5nZXMgPyBcImNoYW5nZWRcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzVW5zYXZlZENoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JXRgdGC0Ywg0L3QtdGB0L7RhdGA0LDQvdGR0L3QvdGL0LUg0LjQt9C80LXQvdC10L3QuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0JjQt9C80LXQvdC10L3QuNC5INC90LXRglwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbFNldHRpbmdCdXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FuY2VsQ29uZmlnQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxDb25maWdDaGFuZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzVW5zYXZlZENoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBseUNvbmZpZ0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXBwbHlDb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNVbnNhdmVkQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LjQvNC10L3QuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRGaWVsZFwiIHx8IGRpYWxvZy50eXBlID09PSBcImVkaXRGaWVsZFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQlNC+0LHQsNCy0LjRgtGMINGB0YLQvtC70LHQtdGGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1UaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7Qu9C1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1GaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRmllbGQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkRmllbGRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uYWxSdWxlQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uYWxSdWxlVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C10YDQstC+0LUg0L/RgNCw0LLQuNC70L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclJ1bGVGb3JtKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVGaWVsZH0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlRmllbGRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj7Qo9C00LDQu9C40YLRjCDRgdGC0L7Qu9Cx0LXRhj88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRgdC1INC/0YDQsNCy0LjQu9CwINCy0L3Rg9GC0YDQuCDQvdC10LPQviDRgtC+0LbQtSDQsdGD0LTRg9GCINGD0LTQsNC70LXQvdGLLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVGaWVsZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkUnVsZVwiIHx8IGRpYWxvZy50eXBlID09PSBcImVkaXRSdWxlXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkUnVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQv9GA0LDQstC40LvQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0L/RgNCw0LLQuNC70L5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSdWxlRm9ybSgpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlUnVsZX0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlUnVsZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINC/0YDQsNCy0LjQu9C+PzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9GA0YPQv9C/0Ysg0LLQvdGD0YLRgNC4INGN0YLQvtCz0L4g0L/RgNCw0LLQuNC70LAg0YLQvtC20LUg0LHRg9C00YPRgiDRg9C00LDQu9C10L3Riy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlUnVsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkR3JvdXBcIiB8fCBkaWFsb2cudHlwZSA9PT0gXCJlZGl0R3JvdXBcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQs9GA0YPQv9C/0YNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINCz0YDRg9C/0L/Rg1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQk9GA0YPQv9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1Hcm91cChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUdyb3VwfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHcm91cFwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/Rgz88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9CwINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0YLQvtC70YzQutC+INC40Lcg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHbG9iYWxHcm91cFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCT0YDRg9C/0L/QsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtR3JvdXAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlR2xvYmFsR3JvdXB9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUdsb2JhbEdyb3VwXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/RgyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3RgtCwINCz0YDRg9C/0L/QsCDQsdC+0LvRjNGI0LUg0L3QtSDQsdGD0LTQtdGCINC/0L7Qu9GD0YfQsNGC0Ywg0LTQvtGB0YLRg9C/INC60L4g0LLRgdC10Lwg0LTQsNC90L3Ri9C8LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZUdsb2JhbEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=