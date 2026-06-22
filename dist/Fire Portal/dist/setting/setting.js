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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.settingArea {
  width: 100%;
  padding: 0;
  color: inherit;
  font-family: inherit;
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
  font-family: Arial, sans-serif;
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
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Fire Portal/src/setting/setting.css","webpack://./your-extensions/widgets/Fire%20Portal/src/setting/setting.css"],"names":[],"mappings":"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","sourcesContent":[".settingArea {\n    width: 100%;\n    padding: 0;\n    color: inherit;\n    font-family: inherit;\n}\n\n.settingsContent {\n    padding: 14px 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n\n.sourceSelectorCard {\n    padding: 12px;\n}\n\n.panelCardLabel {\n    margin-bottom: 9px;\n    color: var(--dark-800, rgba(255, 255, 255, 0.72));\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n}\n\n.sourceSelectorCard>div:last-child {\n    width: 100%;\n}\n\n.accessControlCard {\n    padding: 13px 12px 12px;\n}\n\n.accessControlHeader {\n    margin-bottom: 12px;\n}\n\n.accessControlTitle {\n    margin-bottom: 3px;\n    color: inherit;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n}\n\n.accessControlDescription {\n    color: var(--dark-800, rgba(255, 255, 255, 0.66));\n    font-size: 12px;\n    line-height: 17px;\n}\n\n.accessSettingsButton {\n    width: 100%;\n    min-height: 34px;\n    border-radius: 4px;\n    font-weight: 500;\n}\n\n.sourceSelectorCard button {\n    border-radius: 4px;\n}\n\n.modalArea {\n    color: #f3f4f6;\n    font-family: Arial, sans-serif;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modalBlock {\n    width: min(1200px, calc(100vw - 32px));\n    height: min(800px, calc(100vh - 32px));\n    background: #1f222b;\n    border: 1px solid #343a49;\n    border-radius: 10px;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n    background: #252c41;\n    padding: 14px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    min-height: 0;\n}\n\n.modalListHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.modalListTitle {\n    font-size: 17px;\n    font-weight: 700;\n}\n\n.modalListSubtitle {\n    margin-top: 3px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.fieldList {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    min-height: 0;\n}\n\n.modalItem {\n    padding: 12px 14px;\n    border-radius: 8px;\n    border: 1px solid #77839f;\n    background: #293148;\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n    background: #33405f;\n    border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.modalItemInfo {\n    margin-top: 5px;\n    font-size: 13px;\n    color: #b8bfd1;\n}\n\n.modalItemInfo span {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.addFieldButton {\n    height: 64px;\n    border-radius: 8px;\n    border: 1px dashed #9ca8c4;\n    background: transparent;\n    color: #ffffff;\n    font-size: 34px;\n    cursor: pointer;\n}\n\n.addFieldButton:hover {\n    background: #303a56;\n}\n\n.modalBottomActions {\n    margin-top: auto;\n    display: grid;\n    gap: 8px;\n}\n\n.jsonButton {\n    height: 38px;\n    border-radius: 8px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #f3f4f6;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n}\n\n.jsonButton:hover {\n    background: #303a56;\n}\n\n.jsonButton input {\n    display: none;\n}\n\n.modalRightPanel {\n    min-width: 0;\n    min-height: 0;\n    background: #20232c;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.modalItemFullInfo {\n    flex: 1;\n    min-height: 0;\n    padding: 22px;\n    background: #20232c;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.rightHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n    padding-bottom: 16px;\n    border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n    font-size: 24px;\n    font-weight: 800;\n}\n\n.rightField {\n    margin-top: 6px;\n    color: #aeb6ca;\n    font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.iconButton,\n.miniIconButton {\n    width: 34px;\n    height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n}\n\n.miniIconButton {\n    width: 26px;\n    height: 26px;\n    font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n    background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n    border-color: #8f4f5b;\n    color: #ffb8c1;\n}\n\n.rulesArea {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.ruleCard {\n    padding: 14px;\n    border-radius: 10px;\n    background: #262b36;\n    border: 1px solid #3d465b;\n    transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n    border-color: #9baee0;\n    background: #2c3448;\n}\n\n.ruleHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.ruleInfo {\n    flex: 1;\n    min-width: 0;\n}\n\n.ruleLabel {\n    color: #aeb6ca;\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.ruleValue {\n    font-size: 15px;\n    font-weight: 700;\n    color: #ffffff;\n    overflow-wrap: anywhere;\n}\n\n.ruleActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n    opacity: 1;\n}\n\n.smallButton {\n    min-height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n    padding: 0 10px;\n}\n\n.smallButton:hover {\n    background: #3b4868;\n}\n\n.groupsArea {\n    margin-top: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.groupRow {\n    background: #1d2230;\n    border: 1px solid #384258;\n    border-radius: 8px;\n    padding: 8px 10px;\n    color: #d9deea;\n    font-size: 13px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 12px;\n    transition: 0.2s;\n}\n\n.groupRow.selectedGroup {\n    border-color: #9baee0;\n    background: #273149;\n}\n\n.groupRow span {\n    overflow-wrap: anywhere;\n}\n\n.groupActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n    opacity: 1;\n}\n\n.addRuleButton {\n    height: 44px;\n    border-radius: 9px;\n    border: 1px dashed #78849f;\n    background: transparent;\n    color: white;\n    cursor: pointer;\n}\n\n.addRuleButton:hover {\n    background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.emptyRules {\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px dashed #555f76;\n    text-align: center;\n}\n\n.dialogArea {\n    position: fixed;\n    inset: 0;\n    z-index: 10000;\n    background: rgba(0, 0, 0, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dialogBlock {\n    width: 520px;\n    max-width: calc(100vw - 32px);\n    max-height: calc(100vh - 32px);\n    overflow: auto;\n    background: #252b38;\n    border: 1px solid #4c566c;\n    border-radius: 12px;\n    padding: 18px;\n    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n    font-size: 18px;\n    font-weight: 800;\n    margin-bottom: 12px;\n}\n\n.dialogText {\n    color: #c2c8d5;\n    margin-bottom: 16px;\n}\n\n.dialogInput {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: white;\n    outline: none;\n}\n\n.dialogInput:focus {\n    border-color: #9baee0;\n}\n\n.dialogActions {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n    margin-top: 10px;\n}\n\n.dialogActions button {\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #30384a;\n    color: white;\n    cursor: pointer;\n}\n\n.dialogActions button:hover {\n    background: #3b465d;\n}\n\n.dangerButton {\n    border-color: #985565 !important;\n    background: #4a2430 !important;\n    color: #ffc4cc !important;\n}\n\n.operatorTabs {\n    display: grid;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n    background: #35415b;\n    border-color: #9baee0;\n    color: #ffffff;\n}\n\n.twoInputGrid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.inListArea {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.inAddRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.inValueRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.previewWhere {\n    margin-top: 12px;\n    padding: 10px 12px;\n    border-radius: 8px;\n    border: 1px solid #465169;\n    background: #1e2430;\n    color: #aeb6ca;\n    font-size: 13px;\n}\n\n.previewWhere span {\n    display: block;\n    margin-top: 6px;\n    color: #ffffff;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n    margin-top: 12px;\n    padding: 12px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #202637;\n}\n\n.optionalRuleTitle {\n    margin-bottom: 10px;\n    font-size: 13px;\n    color: #c6ccda;\n}\n\n.bulkActionBar {\n    min-height: 42px;\n    padding: 8px 10px;\n    border-radius: 9px;\n    border: 1px solid #59657d;\n    background: #202637;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    color: #d8deea;\n    font-size: 13px;\n}\n\n.dangerButtonSmall {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #985565;\n    background: #4a2430;\n    color: #ffc4cc;\n    cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n    background: #633040;\n}\n\n.selectCheckbox {\n    width: 16px;\n    height: 16px;\n    accent-color: #9baee0;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.groupIdentity {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n.groupName {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.groupId {\n    color: #aeb6ca;\n    font-size: 12px;\n    font-family: Consolas, \"Courier New\", monospace;\n    overflow-wrap: anywhere;\n}\n\n.groupMembers {\n    margin-top: 2px;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n\n.groupIdCopyButton {\n    width: fit-content;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: #aeb6ca;\n    font-size: 12px;\n    line-height: 1.35;\n    font-family: Consolas, \"Courier New\", monospace;\n    text-align: left;\n    overflow-wrap: anywhere;\n    cursor: pointer;\n    transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n    color: #ffffff;\n    text-decoration: underline;\n}\n\n.settingNotice {\n    position: fixed;\n    top: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 11000;\n    min-width: 210px;\n    padding: 11px 18px;\n    border-radius: 9px;\n    border: 1px solid #7185ae;\n    background: #273149;\n    color: #ffffff;\n    font-size: 13px;\n    text-align: center;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n    pointer-events: none;\n}\n\n.globalSettingActions {\n    flex-shrink: 0;\n    min-height: 66px;\n    padding: 13px 22px;\n    border-top: 1px solid #3a4050;\n    background: #20232c;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.saveState {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.saveState.changed {\n    color: #f1c27d;\n}\n\n.globalSettingButtons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n    height: 38px;\n    padding: 0 18px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 13px;\n    transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n}\n\n.applyConfigButton {\n    border: 1px solid #728ac3;\n    background: #385083;\n    color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n    background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n    background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n    opacity: 0.45;\n    cursor: default;\n}",".settingArea {\n  width: 100%;\n  padding: 0;\n  color: inherit;\n  font-family: inherit;\n}\n\n.settingsContent {\n  padding: 14px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n.sourceSelectorCard {\n  padding: 12px;\n}\n\n.panelCardLabel {\n  margin-bottom: 9px;\n  color: var(--dark-800, rgba(255, 255, 255, 0.72));\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n}\n\n.sourceSelectorCard > div:last-child {\n  width: 100%;\n}\n\n.accessControlCard {\n  padding: 13px 12px 12px;\n}\n\n.accessControlHeader {\n  margin-bottom: 12px;\n}\n\n.accessControlTitle {\n  margin-bottom: 3px;\n  color: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.accessControlDescription {\n  color: var(--dark-800, rgba(255, 255, 255, 0.66));\n  font-size: 12px;\n  line-height: 17px;\n}\n\n.accessSettingsButton {\n  width: 100%;\n  min-height: 34px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n\n.sourceSelectorCard button {\n  border-radius: 4px;\n}\n\n.modalArea {\n  color: #f3f4f6;\n  font-family: Arial, sans-serif;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modalBlock {\n  width: min(1200px, 100vw - 32px);\n  height: min(800px, 100vh - 32px);\n  background: #1f222b;\n  border: 1px solid #343a49;\n  border-radius: 10px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n  background: #252c41;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n}\n\n.modalListHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.modalListTitle {\n  font-size: 17px;\n  font-weight: 700;\n}\n\n.modalListSubtitle {\n  margin-top: 3px;\n  color: #aeb6ca;\n  font-size: 12px;\n}\n\n.fieldList {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-height: 0;\n}\n\n.modalItem {\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid #77839f;\n  background: #293148;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n  background: #33405f;\n  border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.modalItemInfo {\n  margin-top: 5px;\n  font-size: 13px;\n  color: #b8bfd1;\n}\n\n.modalItemInfo span {\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.addFieldButton {\n  height: 64px;\n  border-radius: 8px;\n  border: 1px dashed #9ca8c4;\n  background: transparent;\n  color: #ffffff;\n  font-size: 34px;\n  cursor: pointer;\n}\n\n.addFieldButton:hover {\n  background: #303a56;\n}\n\n.modalBottomActions {\n  margin-top: auto;\n  display: grid;\n  gap: 8px;\n}\n\n.jsonButton {\n  height: 38px;\n  border-radius: 8px;\n  border: 1px solid #56627c;\n  background: #1f2638;\n  color: #f3f4f6;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n\n.jsonButton:hover {\n  background: #303a56;\n}\n\n.jsonButton input {\n  display: none;\n}\n\n.modalRightPanel {\n  min-width: 0;\n  min-height: 0;\n  background: #20232c;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.modalItemFullInfo {\n  flex: 1;\n  min-height: 0;\n  padding: 22px;\n  background: #20232c;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.rightHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.rightField {\n  margin-top: 6px;\n  color: #aeb6ca;\n  font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.iconButton,\n.miniIconButton {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n}\n\n.miniIconButton {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n  background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n  border-color: #8f4f5b;\n  color: #ffb8c1;\n}\n\n.rulesArea {\n  padding-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.ruleCard {\n  padding: 14px;\n  border-radius: 10px;\n  background: #262b36;\n  border: 1px solid #3d465b;\n  transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n  border-color: #9baee0;\n  background: #2c3448;\n}\n\n.ruleHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.ruleInfo {\n  flex: 1;\n  min-width: 0;\n}\n\n.ruleLabel {\n  color: #aeb6ca;\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n\n.ruleValue {\n  font-size: 15px;\n  font-weight: 700;\n  color: #ffffff;\n  overflow-wrap: anywhere;\n}\n\n.ruleActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n  opacity: 1;\n}\n\n.smallButton {\n  min-height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n}\n\n.smallButton:hover {\n  background: #3b4868;\n}\n\n.groupsArea {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.groupRow {\n  background: #1d2230;\n  border: 1px solid #384258;\n  border-radius: 8px;\n  padding: 8px 10px;\n  color: #d9deea;\n  font-size: 13px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  transition: 0.2s;\n}\n\n.groupRow.selectedGroup {\n  border-color: #9baee0;\n  background: #273149;\n}\n\n.groupRow span {\n  overflow-wrap: anywhere;\n}\n\n.groupActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n  opacity: 1;\n}\n\n.addRuleButton {\n  height: 44px;\n  border-radius: 9px;\n  border: 1px dashed #78849f;\n  background: transparent;\n  color: white;\n  cursor: pointer;\n}\n\n.addRuleButton:hover {\n  background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.emptyRules {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px dashed #555f76;\n  text-align: center;\n}\n\n.dialogArea {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dialogBlock {\n  width: 520px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #252b38;\n  border: 1px solid #4c566c;\n  border-radius: 12px;\n  padding: 18px;\n  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n  font-size: 18px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n\n.dialogText {\n  color: #c2c8d5;\n  margin-bottom: 16px;\n}\n\n.dialogInput {\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding: 0 12px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: white;\n  outline: none;\n}\n\n.dialogInput:focus {\n  border-color: #9baee0;\n}\n\n.dialogActions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.dialogActions button {\n  height: 36px;\n  padding: 0 14px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #30384a;\n  color: white;\n  cursor: pointer;\n}\n\n.dialogActions button:hover {\n  background: #3b465d;\n}\n\n.dangerButton {\n  border-color: #985565 !important;\n  background: #4a2430 !important;\n  color: #ffc4cc !important;\n}\n\n.operatorTabs {\n  display: grid;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: #d8deea;\n  cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n  background: #35415b;\n  border-color: #9baee0;\n  color: #ffffff;\n}\n\n.twoInputGrid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.inListArea {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.inAddRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.inValueRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.previewWhere {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #465169;\n  background: #1e2430;\n  color: #aeb6ca;\n  font-size: 13px;\n}\n\n.previewWhere span {\n  display: block;\n  margin-top: 6px;\n  color: #ffffff;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n  margin-top: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1px solid #465169;\n  background: #202637;\n}\n\n.optionalRuleTitle {\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #c6ccda;\n}\n\n.bulkActionBar {\n  min-height: 42px;\n  padding: 8px 10px;\n  border-radius: 9px;\n  border: 1px solid #59657d;\n  background: #202637;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: #d8deea;\n  font-size: 13px;\n}\n\n.dangerButtonSmall {\n  min-height: 30px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #985565;\n  background: #4a2430;\n  color: #ffc4cc;\n  cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n  background: #633040;\n}\n\n.selectCheckbox {\n  width: 16px;\n  height: 16px;\n  accent-color: #9baee0;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.groupIdentity {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.groupName {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.groupId {\n  color: #aeb6ca;\n  font-size: 12px;\n  font-family: Consolas, \"Courier New\", monospace;\n  overflow-wrap: anywhere;\n}\n\n.groupMembers {\n  margin-top: 2px;\n  color: #8fa3cf;\n  font-size: 12px;\n}\n\n.groupIdCopyButton {\n  width: fit-content;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #aeb6ca;\n  font-size: 12px;\n  line-height: 1.35;\n  font-family: Consolas, \"Courier New\", monospace;\n  text-align: left;\n  overflow-wrap: anywhere;\n  cursor: pointer;\n  transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n.settingNotice {\n  position: fixed;\n  top: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 11000;\n  min-width: 210px;\n  padding: 11px 18px;\n  border-radius: 9px;\n  border: 1px solid #7185ae;\n  background: #273149;\n  color: #ffffff;\n  font-size: 13px;\n  text-align: center;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n  pointer-events: none;\n}\n\n.globalSettingActions {\n  flex-shrink: 0;\n  min-height: 66px;\n  padding: 13px 22px;\n  border-top: 1px solid #3a4050;\n  background: #20232c;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.saveState {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.saveState.changed {\n  color: #f1c27d;\n}\n\n.globalSettingButtons {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n  height: 38px;\n  padding: 0 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n  border: 1px solid #59657d;\n  background: #293148;\n  color: #ffffff;\n}\n\n.applyConfigButton {\n  border: 1px solid #728ac3;\n  background: #385083;\n  color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n  background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n  background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n  opacity: 0.45;\n  cursor: default;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/Fire Portal/src/setting/setting.css");
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
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupName" }, (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.title) !== null && _a !== void 0 ? _a : (groupsLoading ? "Загрузка..." : "Название недоступно")),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9GaXJlIFBvcnRhbC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sME1BQTBNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdB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QUFDLHNDQUFRLEVBQ3BCLEtBQUssRUFBRSxTQUFTLEVBQ2hCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQy9DO3dCQUVGLG9FQUFLLFNBQVMsRUFBQyxlQUFlOzRCQUMxQix1RUFBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywyQ0FBaUI7NEJBQ3ZELHVFQUFRLE9BQU8sRUFBRSxlQUFlLDZEQUFvQixDQUNsRCxDQUNQLENBQ047b0JBRUosTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsSUFBSSxDQUNwQzt3QkFDSSxvRUFBSyxTQUFTLEVBQUMsYUFBYSw2S0FFdEI7d0JBQ04sb0VBQUssU0FBUyxFQUFDLFlBQVksaVRBRXJCO3dCQUVOLG9FQUFLLFNBQVMsRUFBQyxlQUFlOzRCQUMxQix1RUFBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywyQ0FBaUI7NEJBQ3ZELHVFQUNJLFNBQVMsRUFBQyxjQUFjLEVBQ3hCLE9BQU8sRUFBRSxpQkFBaUIsaURBR3JCLENBQ1AsQ0FDUCxDQUNOLENBQ0MsQ0FDSixDQUNULENBQ0MsQ0FDVCxDQUNDLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFDTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlIFBvcnRhbC9zcmMvc2V0dGluZy9zZXR0aW5nLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0ZpcmUgUG9ydGFsL3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzPzhjYmEiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZXR0aW5nQXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbi5zZXR0aW5nc0NvbnRlbnQge1xuICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLyogLnNvdXJjZVNlbGVjdG9yQ2FyZCxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay00MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLTEwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSkpO1xufSAqL1xuLnNvdXJjZVNlbGVjdG9yQ2FyZCB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5wYW5lbENhcmRMYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnNvdXJjZVNlbGVjdG9yQ2FyZCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY2Nlc3NDb250cm9sQ2FyZCB7XG4gIHBhZGRpbmc6IDEzcHggMTJweCAxMnB4O1xufVxuXG4uYWNjZXNzQ29udHJvbEhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5hY2Nlc3NDb250cm9sVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvdXJjZVNlbGVjdG9yQ2FyZCBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tb2RhbEFyZWEge1xuICBjb2xvcjogI2YzZjRmNjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsQmxvY2sge1xuICB3aWR0aDogbWluKDEyMDBweCwgMTAwdncgLSAzMnB4KTtcbiAgaGVpZ2h0OiBtaW4oODAwcHgsIDEwMHZoIC0gMzJweCk7XG4gIGJhY2tncm91bmQ6ICMxZjIyMmI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzA1cHggMWZyO1xufVxuXG4ubW9kYWxMaXN0IHtcbiAgYmFja2dyb3VuZDogIzI1MmM0MTtcbiAgcGFkZGluZzogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4ubW9kYWxMaXN0SGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubW9kYWxMaXN0VGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb2RhbExpc3RTdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpZWxkTGlzdCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLm1vZGFsSXRlbSB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzc4MzlmO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5tb2RhbEl0ZW06aG92ZXIsXG4ubW9kYWxJdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzMzNDA1ZjtcbiAgYm9yZGVyLWNvbG9yOiAjYjZjNGVkO1xufVxuXG4ubW9kYWxJdGVtVGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tb2RhbEl0ZW1JbmZvIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjhiZmQxO1xufVxuXG4ubW9kYWxJdGVtSW5mbyBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hZGRGaWVsZEJ1dHRvbiB7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzljYThjNDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZEZpZWxkQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMwM2E1Njtcbn1cblxuLm1vZGFsQm90dG9tQWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogOHB4O1xufVxuXG4uanNvbkJ1dHRvbiB7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTY2MjdjO1xuICBiYWNrZ3JvdW5kOiAjMWYyNjM4O1xuICBjb2xvcjogI2YzZjRmNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uanNvbkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XG59XG5cbi5qc29uQnV0dG9uIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vZGFsUmlnaHRQYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsSXRlbUZ1bGxJbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgcGFkZGluZzogMjJweDtcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ucmlnaHRIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNhNDA1MDtcbn1cblxuLnJpZ2h0VGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yaWdodEZpZWxkIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxuLnJ1bGVBY3Rpb25zLFxuLmdyb3VwQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uaWNvbkJ1dHRvbixcbi5taW5pSWNvbkJ1dHRvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5taW5pSWNvbkJ1dHRvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmljb25CdXR0b246aG92ZXIsXG4ubWluaUljb25CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xufVxuXG4uaWNvbkJ1dHRvbi5kYW5nZXIsXG4ubWluaUljb25CdXR0b24uZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGY0ZjViO1xuICBjb2xvcjogI2ZmYjhjMTtcbn1cblxuLnJ1bGVzQXJlYSB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5ydWxlQ2FyZCB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyNjJiMzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDQ2NWI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5ydWxlQ2FyZC5zZWxlY3RlZFJ1bGUge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMyYzM0NDg7XG59XG5cbi5ydWxlSGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucnVsZUluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5ydWxlTGFiZWwge1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5ydWxlVmFsdWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLnJ1bGVBY3Rpb25zIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5ydWxlQ2FyZDpob3ZlciAucnVsZUFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc21hbGxCdXR0b24ge1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5zbWFsbEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzYjQ4Njg7XG59XG5cbi5ncm91cHNBcmVhIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3cHg7XG59XG5cbi5ncm91cFJvdyB7XG4gIGJhY2tncm91bmQ6ICMxZDIyMzA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODQyNTg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGNvbG9yOiAjZDlkZWVhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uZ3JvdXBSb3cuc2VsZWN0ZWRHcm91cCB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcbn1cblxuLmdyb3VwUm93IHNwYW4ge1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZ3JvdXBSb3c6aG92ZXIgLmdyb3VwQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hZGRSdWxlQnV0dG9uIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNzg4NDlmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRSdWxlQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJiMzM0ODtcbn1cblxuLmVtcHR5TWluaSxcbi5lbXB0eVJ1bGVzIHtcbiAgY29sb3I6ICM4ZTk2YWE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmVtcHR5UnVsZXMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzU1NWY3NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlhbG9nQXJlYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpYWxvZ0Jsb2NrIHtcbiAgd2lkdGg6IDUyMHB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogIzI1MmIzODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjNTY2YztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMThweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZGlhbG9nVGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaWFsb2dUZXh0IHtcbiAgY29sb3I6ICNjMmM4ZDU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5kaWFsb2dJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGlhbG9nSW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG59XG5cbi5kaWFsb2dBY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbiB7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMzMDM4NGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlhbG9nQWN0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0NjVkO1xufVxuXG4uZGFuZ2VyQnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTg1NTY1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0YTI0MzAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmM0Y2MgIWltcG9ydGFudDtcbn1cblxuLm9wZXJhdG9yVGFicyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ub3BlcmF0b3JUYWJzLmZvdXJUYWJzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbn1cblxuLm9wZXJhdG9yVGFicyBidXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNkOGRlZWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wZXJhdG9yVGFicyBidXR0b246aG92ZXIsXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udHdvSW5wdXRHcmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbkxpc3RBcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5pbkFkZFJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5pblZhbHVlUm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLnByZXZpZXdXaGVyZSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJldmlld1doZXJlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5vcHRpb25hbFJ1bGVCbG9jayB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XG59XG5cbi5vcHRpb25hbFJ1bGVUaXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNjNmNjZGE7XG59XG5cbi5idWxrQWN0aW9uQmFyIHtcbiAgbWluLWhlaWdodDogNDJweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzIwMjYzNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5kYW5nZXJCdXR0b25TbWFsbCB7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTg1NTY1O1xuICBiYWNrZ3JvdW5kOiAjNGEyNDMwO1xuICBjb2xvcjogI2ZmYzRjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjMzMDQwO1xufVxuXG4uc2VsZWN0Q2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhY2NlbnQtY29sb3I6ICM5YmFlZTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5ncm91cElkZW50aXR5IHtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDNweDtcbn1cblxuLmdyb3VwTmFtZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4uZ3JvdXBJZCB7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4uZ3JvdXBNZW1iZXJzIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb2xvcjogIzhmYTNjZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZ3JvdXBJZENvcHlCdXR0b24ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xOHMgZWFzZTtcbn1cblxuLmdyb3VwSWRDb3B5QnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2V0dGluZ05vdGljZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyOHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTEwMDA7XG4gIG1pbi13aWR0aDogMjEwcHg7XG4gIHBhZGRpbmc6IDExcHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE4NWFlO1xuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLWhlaWdodDogNjZweDtcbiAgcGFkZGluZzogMTNweCAyMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzNhNDA1MDtcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG59XG5cbi5zYXZlU3RhdGUge1xuICBjb2xvcjogIzhlOTZhYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2F2ZVN0YXRlLmNoYW5nZWQge1xuICBjb2xvcjogI2YxYzI3ZDtcbn1cblxuLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b24sXG4uYXBwbHlDb25maWdCdXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLmNhbmNlbENvbmZpZ0J1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYXBwbHlDb25maWdCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzI4YWMzO1xuICBiYWNrZ3JvdW5kOiAjMzg1MDgzO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhbmNlbENvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMzODQzNWI7XG59XG5cbi5hcHBseUNvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICM0NjYxOWE7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b246ZGlzYWJsZWQsXG4uYXBwbHlDb25maWdCdXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ1O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlIFBvcnRhbC9zcmMvc2V0dGluZy9zZXR0aW5nLmNzc1wiLFwid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSUyMFBvcnRhbC9zcmMvc2V0dGluZy9zZXR0aW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTs7Ozs7R0FBQTtBQU9BO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7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U0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUNESjs7QURJQTs7RUFFSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTs7RUFFSSxhQUFBO0VBQ0EsZUFBQTtBQ0RKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR0aW5nQXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5zZXR0aW5nc0NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAxNHB4IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLyogLnNvdXJjZVNlbGVjdG9yQ2FyZCxcXG4uYWNjZXNzQ29udHJvbENhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLTQwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay0xMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpKTtcXG59ICovXFxuXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5wYW5lbENhcmRMYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG59XFxuXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZD5kaXY6bGFzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbENhcmQge1xcbiAgICBwYWRkaW5nOiAxM3B4IDEycHggMTJweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xIZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbFRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWxBcmVhIHtcXG4gICAgY29sb3I6ICNmM2Y0ZjY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbEJsb2NrIHtcXG4gICAgd2lkdGg6IG1pbigxMjAwcHgsIGNhbGMoMTAwdncgLSAzMnB4KSk7XFxuICAgIGhlaWdodDogbWluKDgwMHB4LCBjYWxjKDEwMHZoIC0gMzJweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcXG59XFxuXFxuLm1vZGFsTGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICMyNTJjNDE7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLm1vZGFsTGlzdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsTGlzdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0U3VidGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5maWVsZExpc3Qge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbEl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubW9kYWxJdGVtOmhvdmVyLFxcbi5tb2RhbEl0ZW0uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzM0MDVmO1xcbiAgICBib3JkZXItY29sb3I6ICNiNmM0ZWQ7XFxufVxcblxcbi5tb2RhbEl0ZW1UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICNiOGJmZDE7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHNwYW4ge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWNhOGM0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkRmllbGRCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4ubW9kYWxCb3R0b21BY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5qc29uQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjYyN2M7XFxuICAgIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICAgIGNvbG9yOiAjZjNmNGY2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5qc29uQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmpzb25CdXR0b24gaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxSaWdodFBhbmVsIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWxJdGVtRnVsbEluZm8ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5yaWdodEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2E0MDUwO1xcbn1cXG5cXG4ucmlnaHRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnJpZ2h0RmllbGQge1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5yaWdodEhlYWRlckFjdGlvbnMsXFxuLnJ1bGVBY3Rpb25zLFxcbi5ncm91cEFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDM0cHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpob3ZlcixcXG4ubWluaUljb25CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbi5kYW5nZXIsXFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcXG4gICAgY29sb3I6ICNmZmI4YzE7XFxufVxcblxcbi5ydWxlc0FyZWEge1xcbiAgICBwYWRkaW5nLXRvcDogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucnVsZUNhcmQge1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xcbn1cXG5cXG4ucnVsZUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnJ1bGVJbmZvIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4ucnVsZUxhYmVsIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucnVsZVZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ydWxlQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNtYWxsQnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4uc21hbGxCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uZ3JvdXBzQXJlYSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4uZ3JvdXBSb3cge1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMjMwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg0MjU4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICBjb2xvcjogI2Q5ZGVlYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmdyb3VwUm93LnNlbGVjdGVkR3JvdXAge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxufVxcblxcbi5ncm91cFJvdyBzcGFuIHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmdyb3VwUm93OmhvdmVyIC5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyYjMzNDg7XFxufVxcblxcbi5lbXB0eU1pbmksXFxuLmVtcHR5UnVsZXMge1xcbiAgICBjb2xvcjogIzhlOTZhYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uZW1wdHlSdWxlcyB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNTU1Zjc2O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dBcmVhIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlhbG9nQmxvY2sge1xcbiAgICB3aWR0aDogNTIwcHg7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjUyYjM4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGM1NjZjO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5kaWFsb2dUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmRpYWxvZ1RleHQge1xcbiAgICBjb2xvcjogI2MyYzhkNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRpYWxvZ0lucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kaWFsb2dJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzMwMzg0YTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzYjQ2NWQ7XFxufVxcblxcbi5kYW5nZXJCdXR0b24ge1xcbiAgICBib3JkZXItY29sb3I6ICM5ODU1NjUgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogIzRhMjQzMCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmYzRjYyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5vcGVyYXRvclRhYnMuZm91clRhYnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbjpob3ZlcixcXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udHdvSW5wdXRHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbkxpc3RBcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5pbkFkZFJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5pblZhbHVlUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLnByZXZpZXdXaGVyZSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVCbG9jayB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICAgIGJhY2tncm91bmQ6ICMyMDI2Mzc7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICNjNmNjZGE7XFxufVxcblxcbi5idWxrQWN0aW9uQmFyIHtcXG4gICAgbWluLWhlaWdodDogNDJweDtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzIwMjYzNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTg1NTY1O1xcbiAgICBiYWNrZ3JvdW5kOiAjNGEyNDMwO1xcbiAgICBjb2xvcjogI2ZmYzRjYztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNjMzMDQwO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3gge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBhY2NlbnQtY29sb3I6ICM5YmFlZTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cElkZW50aXR5IHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLmdyb3VwTmFtZSB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBJZCB7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwTWVtYmVycyB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgY29sb3I6ICM4ZmEzY2Y7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuXFxuLmdyb3VwSWRDb3B5QnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uZ3JvdXBJZENvcHlCdXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zZXR0aW5nTm90aWNlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDI4cHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB6LWluZGV4OiAxMTAwMDtcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXG4gICAgcGFkZGluZzogMTFweCAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MTg1YWU7XFxuICAgIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nbG9iYWxTZXR0aW5nQWN0aW9ucyB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBtaW4taGVpZ2h0OiA2NnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4IDIycHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2E0MDUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnNhdmVTdGF0ZSB7XFxuICAgIGNvbG9yOiAjOGU5NmFhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5zYXZlU3RhdGUuY2hhbmdlZCB7XFxuICAgIGNvbG9yOiAjZjFjMjdkO1xcbn1cXG5cXG4uZ2xvYmFsU2V0dGluZ0J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbixcXG4uYXBwbHlDb25maWdCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIHBhZGRpbmc6IDAgMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uYXBwbHlDb25maWdCdXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzI4YWMzO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzg1MDgzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICAgIGJhY2tncm91bmQ6ICMzODQzNWI7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICAgIGJhY2tncm91bmQ6ICM0NjYxOWE7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b246ZGlzYWJsZWQsXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC40NTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIixcIi5zZXR0aW5nQXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uc2V0dGluZ3NDb250ZW50IHtcXG4gIHBhZGRpbmc6IDE0cHggMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4vKiAuc291cmNlU2VsZWN0b3JDYXJkLFxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstNDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLTEwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSkpO1xcbn0gKi9cXG4uc291cmNlU2VsZWN0b3JDYXJkIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5wYW5lbENhcmRMYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MikpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XFxuICBwYWRkaW5nOiAxM3B4IDEycHggMTJweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xIZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tb2RhbEFyZWEge1xcbiAgY29sb3I6ICNmM2Y0ZjY7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsQmxvY2sge1xcbiAgd2lkdGg6IG1pbigxMjAwcHgsIDEwMHZ3IC0gMzJweCk7XFxuICBoZWlnaHQ6IG1pbig4MDBweCwgMTAwdmggLSAzMnB4KTtcXG4gIGJhY2tncm91bmQ6ICMxZjIyMmI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDVweCAxZnI7XFxufVxcblxcbi5tb2RhbExpc3Qge1xcbiAgYmFja2dyb3VuZDogIzI1MmM0MTtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbExpc3RIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbExpc3RUaXRsZSB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0U3VidGl0bGUge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgY29sb3I6ICNhZWI2Y2E7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5maWVsZExpc3Qge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLm1vZGFsSXRlbSB7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzc4MzlmO1xcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5tb2RhbEl0ZW06aG92ZXIsXFxuLm1vZGFsSXRlbS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMzM0MDVmO1xcbiAgYm9yZGVyLWNvbG9yOiAjYjZjNGVkO1xcbn1cXG5cXG4ubW9kYWxJdGVtVGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm8ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6ICNiOGJmZDE7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHNwYW4ge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYWRkRmllbGRCdXR0b24ge1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5Y2E4YzQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkRmllbGRCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLm1vZGFsQm90dG9tQWN0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uanNvbkJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTY2MjdjO1xcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcXG4gIGNvbG9yOiAjZjNmNGY2O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmpzb25CdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmpzb25CdXR0b24gaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsUmlnaHRQYW5lbCB7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1vZGFsSXRlbUZ1bGxJbmZvIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgcGFkZGluZzogMjJweDtcXG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ucmlnaHRIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNhNDA1MDtcXG59XFxuXFxuLnJpZ2h0VGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnJpZ2h0RmllbGQge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgY29sb3I6ICNhZWI2Y2E7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5yaWdodEhlYWRlckFjdGlvbnMsXFxuLnJ1bGVBY3Rpb25zLFxcbi5ncm91cEFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5taW5pSWNvbkJ1dHRvbiB7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmljb25CdXR0b246aG92ZXIsXFxuLm1pbmlJY29uQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzYjQ4Njg7XFxufVxcblxcbi5pY29uQnV0dG9uLmRhbmdlcixcXG4ubWluaUljb25CdXR0b24uZGFuZ2VyIHtcXG4gIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcXG4gIGNvbG9yOiAjZmZiOGMxO1xcbn1cXG5cXG4ucnVsZXNBcmVhIHtcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5ydWxlQ2FyZCB7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICMyNjJiMzY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnJ1bGVDYXJkLnNlbGVjdGVkUnVsZSB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xcbn1cXG5cXG4ucnVsZUhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5ydWxlSW5mbyB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4ucnVsZUxhYmVsIHtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucnVsZVZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ucnVsZUFjdGlvbnMge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnJ1bGVDYXJkOmhvdmVyIC5ydWxlQWN0aW9ucyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc21hbGxCdXR0b24ge1xcbiAgbWluLWhlaWdodDogMzRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XFxuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4uc21hbGxCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcXG59XFxuXFxuLmdyb3Vwc0FyZWEge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3cHg7XFxufVxcblxcbi5ncm91cFJvdyB7XFxuICBiYWNrZ3JvdW5kOiAjMWQyMjMwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4NDI1ODtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgY29sb3I6ICNkOWRlZWE7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5ncm91cFJvdy5zZWxlY3RlZEdyb3VwIHtcXG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxufVxcblxcbi5ncm91cFJvdyBzcGFuIHtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBBY3Rpb25zIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cFJvdzpob3ZlciAuZ3JvdXBBY3Rpb25zIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5hZGRSdWxlQnV0dG9uIHtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNzg4NDlmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRSdWxlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyYjMzNDg7XFxufVxcblxcbi5lbXB0eU1pbmksXFxuLmVtcHR5UnVsZXMge1xcbiAgY29sb3I6ICM4ZTk2YWE7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5lbXB0eVJ1bGVzIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM1NTVmNzY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dBcmVhIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGluc2V0OiAwO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpYWxvZ0Jsb2NrIHtcXG4gIHdpZHRoOiA1MjBweDtcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjMjUyYjM4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjNTY2YztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxOHB4O1xcbiAgYm94LXNoYWRvdzogMCAyMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZGlhbG9nVGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5kaWFsb2dUZXh0IHtcXG4gIGNvbG9yOiAjYzJjOGQ1O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRpYWxvZ0lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kaWFsb2dJbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMzMDM4NGE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjM2I0NjVkO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uIHtcXG4gIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogIzRhMjQzMCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNmZmM0Y2MgIWltcG9ydGFudDtcXG59XFxuXFxuLm9wZXJhdG9yVGFicyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzLmZvdXJUYWJzIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgY29sb3I6ICNkOGRlZWE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxcbi5vcGVyYXRvclRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi50d29JbnB1dEdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmluTGlzdEFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmluQWRkUm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5pblZhbHVlUm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5wcmV2aWV3V2hlcmUge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgY29sb3I6ICNhZWI2Y2E7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5wcmV2aWV3V2hlcmUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ub3B0aW9uYWxSdWxlQmxvY2sge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcXG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6ICNjNmNjZGE7XFxufVxcblxcbi5idWxrQWN0aW9uQmFyIHtcXG4gIG1pbi1oZWlnaHQ6IDQycHg7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEycHg7XFxuICBjb2xvcjogI2Q4ZGVlYTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsIHtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTg1NTY1O1xcbiAgYmFja2dyb3VuZDogIzRhMjQzMDtcXG4gIGNvbG9yOiAjZmZjNGNjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzYzMzA0MDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94IHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYWNjZW50LWNvbG9yOiAjOWJhZWUwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cElkZW50aXR5IHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5ncm91cE5hbWUge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cElkIHtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwTWVtYmVycyB7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBjb2xvcjogIzhmYTNjZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmdyb3VwSWRDb3B5QnV0dG9uIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICBmb250LWZhbWlseTogQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XFxufVxcblxcbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2V0dGluZ05vdGljZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI4cHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB6LWluZGV4OiAxMTAwMDtcXG4gIG1pbi13aWR0aDogMjEwcHg7XFxuICBwYWRkaW5nOiAxMXB4IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzE4NWFlO1xcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtaW4taGVpZ2h0OiA2NnB4O1xcbiAgcGFkZGluZzogMTNweCAyMnB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5zYXZlU3RhdGUge1xcbiAgY29sb3I6ICM4ZTk2YWE7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5zYXZlU3RhdGUuY2hhbmdlZCB7XFxuICBjb2xvcjogI2YxYzI3ZDtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b24sXFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDAgMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MjhhYzM7XFxuICBiYWNrZ3JvdW5kOiAjMzg1MDgzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgYmFja2dyb3VuZDogIzM4NDM1YjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQ6ICM0NjYxOWE7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b246ZGlzYWJsZWQsXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNDU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3NldHRpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc2V0dGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIGdldEFwcFN0b3JlLCBJbW11dGFibGUsIEFsbERhdGFTb3VyY2VUeXBlcyB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiO1xuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IFwiLi9zZXR0aW5nLmNzc1wiO1xuXG50eXBlIFJ1bGVPcGVyYXRvciA9IFwiZXF1YWxcIiB8IFwicmFuZ2VcIiB8IFwiaW5jbHVkZVwiIHwgXCJsaWtlXCI7XG5cbnR5cGUgQWNjZXNzUnVsZSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG9wZXJhdG9yOiBSdWxlT3BlcmF0b3I7XG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHN0cmluZztcbiAgICB0bz86IHN0cmluZztcbiAgICB2YWx1ZXM/OiBzdHJpbmdbXTtcbiAgICBncm91cHM6IHN0cmluZ1tdO1xufTtcblxudHlwZSBBY2Nlc3NGaWVsZFJ1bGUgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgcnVsZXM6IEFjY2Vzc1J1bGVbXTtcbn07XG5cbnR5cGUgQWNjZXNzQ29uZmlnID0ge1xuICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHN0cmluZ1tdO1xuICAgIHJ1bGVzOiBBY2Nlc3NGaWVsZFJ1bGVbXTtcbn07XG5cbnR5cGUgUG9ydGFsR3JvdXBJbmZvID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB1c2Vyc0NvdW50OiBudW1iZXIgfCBudWxsO1xuICAgIGlzVW5hdmFpbGFibGU/OiBib29sZWFuO1xufTtcblxudHlwZSBFc3JpUmVxdWVzdEZ1bmN0aW9uID0gKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAgIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPjtcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xuICAgIH1cbikgPT4gUHJvbWlzZTx7IGRhdGE6IGFueSB9PjtcblxudHlwZSBEaWFsb2dTdGF0ZSA9XG4gICAgfCBudWxsXG4gICAgfCB7XG4gICAgICAgIHR5cGU6XG4gICAgICAgIHwgXCJhZGRGaWVsZFwiXG4gICAgICAgIHwgXCJlZGl0RmllbGRcIlxuICAgICAgICB8IFwiZGVsZXRlRmllbGRcIlxuICAgICAgICB8IFwiYWRkUnVsZVwiXG4gICAgICAgIHwgXCJlZGl0UnVsZVwiXG4gICAgICAgIHwgXCJkZWxldGVSdWxlXCJcbiAgICAgICAgfCBcImFkZEdyb3VwXCJcbiAgICAgICAgfCBcImVkaXRHcm91cFwiXG4gICAgICAgIHwgXCJkZWxldGVHcm91cFwiXG4gICAgICAgIHwgXCJhZGRHbG9iYWxHcm91cFwiXG4gICAgICAgIHwgXCJlZGl0R2xvYmFsR3JvdXBcIlxuICAgICAgICB8IFwiZGVsZXRlR2xvYmFsR3JvdXBcIjtcbiAgICAgICAgcGF5bG9hZD86IGFueTtcbiAgICB9O1xuXG5jb25zdCBHTE9CQUxfQUNDRVNTX0lEID0gXCJfX2dsb2JhbF9hY2Nlc3NfX1wiO1xuXG5jb25zdCBtYWtlSWQgPSAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gYCR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xufTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogQWNjZXNzQ29uZmlnID0ge1xuICAgIGZ1bGxBY2Nlc3NHcm91cHM6IFtdLFxuICAgIHJ1bGVzOiBbXSxcbn07XG5cbmNvbnN0IHF1b3RlVmFsdWUgPSAodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcblxuICAgIGlmICgvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRyaW1tZWQpKSB7XG4gICAgICAgIHJldHVybiB0cmltbWVkO1xuICAgIH1cblxuICAgIHJldHVybiBgJyR7dHJpbW1lZC5yZXBsYWNlKC8nL2csIFwiJydcIil9J2A7XG59O1xuXG5jb25zdCBub3JtYWxpemVPcGVyYXRvciA9IChvcGVyYXRvcjogYW55KTogUnVsZU9wZXJhdG9yID0+IHtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiZXF1YWxcIikgcmV0dXJuIFwiZXF1YWxcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwicmFuZ2VcIikgcmV0dXJuIFwicmFuZ2VcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiKSByZXR1cm4gXCJpbmNsdWRlXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImxpa2VcIikgcmV0dXJuIFwibGlrZVwiO1xuXG4gICAgaWYgKG9wZXJhdG9yID09PSBcImVxXCIpIHJldHVybiBcImVxdWFsXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImJldHdlZW5cIikgcmV0dXJuIFwicmFuZ2VcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiaW5cIikgcmV0dXJuIFwiaW5jbHVkZVwiO1xuXG4gICAgcmV0dXJuIFwiZXF1YWxcIjtcbn07XG5cbmNvbnN0IGJ1aWxkUnVsZVdoZXJlID0gKGZpZWxkOiBzdHJpbmcsIHJ1bGU6IEFjY2Vzc1J1bGUpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImVxdWFsXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2ZpZWxkfSA9ICR7cXVvdGVWYWx1ZShydWxlLnZhbHVlID8/IFwiXCIpfWA7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwicmFuZ2VcIikge1xuICAgICAgICByZXR1cm4gYCR7ZmllbGR9IEJFVFdFRU4gJHtxdW90ZVZhbHVlKHJ1bGUuZnJvbSA/PyBcIlwiKX0gQU5EICR7cXVvdGVWYWx1ZShydWxlLnRvID8/IFwiXCIpfWA7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHJ1bGUudmFsdWVzID8/IFtdO1xuICAgICAgICByZXR1cm4gYCR7ZmllbGR9IElOICgke3ZhbHVlcy5tYXAocXVvdGVWYWx1ZSkuam9pbihcIiwgXCIpfSlgO1xuICAgIH1cblxuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImxpa2VcIikge1xuICAgICAgICByZXR1cm4gYCR7ZmllbGR9IExJS0UgJHtxdW90ZVZhbHVlKHJ1bGUudmFsdWUgPz8gXCJcIil9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCIxPTBcIjtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUxvYWRlZENvbmZpZyA9IChkYXRhOiBhbnkpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IEFycmF5LmlzQXJyYXkoZGF0YT8uZnVsbEFjY2Vzc0dyb3VwcylcbiAgICAgICAgICAgID8gZGF0YS5mdWxsQWNjZXNzR3JvdXBzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShkYXRhPy5ydWxlcylcbiAgICAgICAgICAgID8gZGF0YS5ydWxlcy5tYXAoKGZpZWxkSXRlbTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiBmaWVsZEl0ZW0uaWQgfHwgbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpZWxkSXRlbS50aXRsZSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEl0ZW0uZmllbGQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShmaWVsZEl0ZW0ucnVsZXMpXG4gICAgICAgICAgICAgICAgICAgID8gZmllbGRJdGVtLnJ1bGVzLm1hcCgocnVsZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJ1bGUuaWQgfHwgbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogbm9ybWFsaXplT3BlcmF0b3IocnVsZS5vcGVyYXRvciksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcnVsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHJ1bGUuZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBydWxlLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBBcnJheS5pc0FycmF5KHJ1bGUudmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcnVsZS52YWx1ZXMubWFwKChpdGVtOiBhbnkpID0+IFN0cmluZyhpdGVtKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBBcnJheS5pc0FycmF5KHJ1bGUuZ3JvdXBzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcnVsZS5ncm91cHMubWFwKChpdGVtOiBhbnkpID0+IFN0cmluZyhpdGVtKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgOiBbXSxcbiAgICB9O1xufTtcblxuY29uc3QgY2xvbmVBY2Nlc3NDb25maWcgPSAoZGF0YTogQWNjZXNzQ29uZmlnKTogQWNjZXNzQ29uZmlnID0+IHtcbiAgICByZXR1cm4gbm9ybWFsaXplTG9hZGVkQ29uZmlnKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcbn07XG5cbmNvbnN0IGdldEluaXRpYWxBY2Nlc3NDb25maWcgPSAod2lkZ2V0Q29uZmlnOiBhbnkpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIGNvbnN0IHN0b3JlZENvbmZpZyA9IHdpZGdldENvbmZpZz8uYWNjZXNzQ29uZmlnO1xuXG4gICAgaWYgKCFzdG9yZWRDb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lQWNjZXNzQ29uZmlnKGRlZmF1bHRDb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWluQ29uZmlnID1cbiAgICAgICAgdHlwZW9mIHN0b3JlZENvbmZpZy5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdG9yZWRDb25maWcuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICAgICAgICAgICAgOiBzdG9yZWRDb25maWc7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplTG9hZGVkQ29uZmlnKHBsYWluQ29uZmlnKTtcbn07XG5cbmNvbnN0IGdldENvbmZpZ0dyb3VwSWRzID0gKGNvbmZpZzogQWNjZXNzQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICAgIGNvbnN0IGdyb3VwSWRzID0gW1xuICAgICAgICAuLi5jb25maWcuZnVsbEFjY2Vzc0dyb3VwcyxcbiAgICAgICAgLi4uY29uZmlnLnJ1bGVzLmZsYXRNYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgZmllbGQucnVsZXMuZmxhdE1hcCgocnVsZSkgPT4gcnVsZS5ncm91cHMpXG4gICAgICAgICksXG4gICAgXTtcblxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoZ3JvdXBJZHMpKS5zb3J0KCk7XG59O1xuXG5jb25zdCBnZXRQb3J0YWxHcm91cEluZm8gPSBhc3luYyAoXG4gICAgZXNyaVJlcXVlc3Q6IEVzcmlSZXF1ZXN0RnVuY3Rpb24sXG4gICAgcG9ydGFsVXJsOiBzdHJpbmcsXG4gICAgZ3JvdXBJZDogc3RyaW5nXG4pOiBQcm9taXNlPFBvcnRhbEdyb3VwSW5mbz4gPT4ge1xuICAgIGNvbnN0IGVuY29kZWRHcm91cElkID0gZW5jb2RlVVJJQ29tcG9uZW50KGdyb3VwSWQpO1xuICAgIGNvbnN0IGdyb3VwVXJsID1cbiAgICAgICAgYCR7cG9ydGFsVXJsfS9zaGFyaW5nL3Jlc3QvY29tbXVuaXR5L2dyb3Vwcy8ke2VuY29kZWRHcm91cElkfWA7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBncm91cFJlc3BvbnNlID0gYXdhaXQgZXNyaVJlcXVlc3QoZ3JvdXBVcmwsIHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7IGY6IFwianNvblwiIH0sXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZ3JvdXBSZXNwb25zZS5kYXRhPy5lcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGdyb3VwUmVzcG9uc2UuZGF0YS5lcnJvci5tZXNzYWdlIHx8IFwi0JPRgNGD0L/Qv9CwINC90LXQtNC+0YHRgtGD0L/QvdCwXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVzZXJzQ291bnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2Vyc1Jlc3BvbnNlID0gYXdhaXQgZXNyaVJlcXVlc3QoYCR7Z3JvdXBVcmx9L3VzZXJMaXN0YCwge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIGY6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcbiAgICAgICAgICAgICAgICAgICAgbnVtOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIXVzZXJzUmVzcG9uc2UuZGF0YT8uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdXNlcnNSZXNwb25zZS5kYXRhPy50b3RhbCA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgKiB1c2VyTGlzdCDQstC+0LfQstGA0LDRidCw0LXRgiBvd25lciDQvtGC0LTQtdC70YzQvdC+INC+0YIg0LzQsNGB0YHQuNCy0LAgdXNlcnMuXG4gICAgICAgICAgICAgICAgICog0J/QvtGN0YLQvtC80YMg0LTQvtCx0LDQstC70Y/QtdC8INCy0LvQsNC00LXQu9GM0YbQsCDQuiDQutC+0LvQuNGH0LXRgdGC0LLRgyDQvtGB0YLQsNC70YzQvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LkuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdXNlcnNDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzUmVzcG9uc2UuZGF0YS50b3RhbFxuICAgICAgICAgICAgICAgIC8vICsgKHVzZXJzUmVzcG9uc2UuZGF0YS5vd25lcj8udXNlcm5hbWUgPyAxIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdXNlcnNDb3VudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgICAgICB0aXRsZTogZ3JvdXBSZXNwb25zZS5kYXRhPy50aXRsZSB8fCBcItCR0LXQtyDQvdCw0LfQstCw0L3QuNGPXCIsXG4gICAgICAgICAgICB1c2Vyc0NvdW50LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgICAgICB0aXRsZTogXCLQndCw0LfQstCw0L3QuNC1INC90LXQtNC+0YHRgtGD0L/QvdC+XCIsXG4gICAgICAgICAgICB1c2Vyc0NvdW50OiBudWxsLFxuICAgICAgICAgICAgaXNVbmF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+KSB7XG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWNjZXNzQ29uZmlnPigoKSA9PlxuICAgICAgICBnZXRJbml0aWFsQWNjZXNzQ29uZmlnKHByb3BzLmNvbmZpZylcbiAgICApO1xuICAgIGNvbnN0IFtzYXZlZENvbmZpZywgc2V0U2F2ZWRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWNjZXNzQ29uZmlnPigoKSA9PlxuICAgICAgICBnZXRJbml0aWFsQWNjZXNzQ29uZmlnKHByb3BzLmNvbmZpZylcbiAgICApO1xuICAgIGNvbnN0IFtoYXNVbnNhdmVkQ2hhbmdlcywgc2V0SGFzVW5zYXZlZENoYW5nZXNdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtub3RpY2UsIHNldE5vdGljZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBub3RpY2VUaW1lciA9IFJlYWN0LnVzZVJlZjxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICAgIGNvbnN0IHNob3dOb3RpY2UgPSAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChub3RpY2VUaW1lci5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG5vdGljZVRpbWVyLmN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0Tm90aWNlKG1lc3NhZ2UpO1xuICAgICAgICBub3RpY2VUaW1lci5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0Tm90aWNlKG51bGwpO1xuICAgICAgICAgICAgbm90aWNlVGltZXIuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0sIDE4MDApO1xuICAgIH07XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vdGljZVRpbWVyLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG5vdGljZVRpbWVyLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHNldERyYWZ0Q29uZmlnID0gKFxuICAgICAgICB1cGRhdGU6IChwcmV2aW91czogQWNjZXNzQ29uZmlnKSA9PiBBY2Nlc3NDb25maWdcbiAgICApOiB2b2lkID0+IHtcbiAgICAgICAgc2V0Q29uZmlnKChwcmV2aW91cykgPT4gdXBkYXRlKHByZXZpb3VzKSk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgW2dyb3Vwc0luZm8sIHNldEdyb3Vwc0luZm9dID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgUG9ydGFsR3JvdXBJbmZvPj4oe30pO1xuICAgIGNvbnN0IFtncm91cHNMb2FkaW5nLCBzZXRHcm91cHNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0IGdyb3VwSWRzU2lnbmF0dXJlID0gZ2V0Q29uZmlnR3JvdXBJZHMoY29uZmlnKS5qb2luKFwifFwiKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGxvYWRHcm91cHNJbmZvID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBJZHMgPSBnZXRDb25maWdHcm91cElkcyhjb25maWcpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0R3JvdXBzSW5mbyh7fSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwb3J0YWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LnBvcnRhbFVybDtcblxuICAgICAgICAgICAgaWYgKCFwb3J0YWxVcmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldEdyb3Vwc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2VzcmlSZXF1ZXN0XSA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgICAgICAgICAgICAgICBcImVzcmkvcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIF0pIGFzIFtFc3JpUmVxdWVzdEZ1bmN0aW9uXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICBncm91cElkcy5tYXAoKGdyb3VwSWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQb3J0YWxHcm91cEluZm8oZXNyaVJlcXVlc3QsIHBvcnRhbFVybCwgZ3JvdXBJZClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IHJlc3VsdC5yZWR1Y2U8UmVjb3JkPHN0cmluZywgUG9ydGFsR3JvdXBJbmZvPj4oXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpdGVtLmlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0R3JvdXBzSW5mbyhtYXBwZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRHcm91cHNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm9pZCBsb2FkR3JvdXBzSW5mbygpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpc0NhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgfSwgW2dyb3VwSWRzU2lnbmF0dXJlXSk7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KEdMT0JBTF9BQ0NFU1NfSUQpO1xuICAgIGNvbnN0IFtkaWFsb2csIHNldERpYWxvZ10gPSBSZWFjdC51c2VTdGF0ZTxEaWFsb2dTdGF0ZT4obnVsbCk7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRSdWxlSWRzLCBzZXRTZWxlY3RlZFJ1bGVJZHNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRHcm91cEtleXMsIHNldFNlbGVjdGVkR3JvdXBLZXlzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICBjb25zdCBbZm9ybVRpdGxlLCBzZXRGb3JtVGl0bGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZm9ybUZpZWxkLCBzZXRGb3JtRmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZm9ybUdyb3VwLCBzZXRGb3JtR3JvdXBdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIGNvbnN0IFtydWxlT3BlcmF0b3IsIHNldFJ1bGVPcGVyYXRvcl0gPSBSZWFjdC51c2VTdGF0ZTxSdWxlT3BlcmF0b3I+KFwiZXF1YWxcIik7XG4gICAgY29uc3QgW3J1bGVWYWx1ZSwgc2V0UnVsZVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3J1bGVGcm9tLCBzZXRSdWxlRnJvbV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtydWxlVG8sIHNldFJ1bGVUb10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtydWxlVmFsdWVzLCBzZXRSdWxlVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW25ld0xpc3RWYWx1ZSwgc2V0TmV3TGlzdFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgICBjb25zdCBzZWxlY3RlZEZpZWxkID1cbiAgICAgICAgc2VsZWN0ZWRJZCA9PT0gR0xPQkFMX0FDQ0VTU19JRFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IGNvbmZpZy5ydWxlcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBzZWxlY3RlZElkKSA/PyBudWxsO1xuXG4gICAgY29uc3QgcmVuZGVyR3JvdXBJZGVudGl0eSA9IChncm91cElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cElkZW50aXR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2dyb3VwSW5mbz8udGl0bGUgPz8gKGdyb3Vwc0xvYWRpbmcgPyBcItCX0LDQs9GA0YPQt9C60LAuLi5cIiA6IFwi0J3QsNC30LLQsNC90LjQtSDQvdC10LTQvtGB0YLRg9C/0L3QvlwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwSWRDb3B5QnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgY29weUdyb3VwSWQoZ3JvdXBJZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Z3JvdXBJZH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHtncm91cEluZm8/LnVzZXJzQ291bnQgIT09IG51bGwgJiYgZ3JvdXBJbmZvPy51c2Vyc0NvdW50ICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwTWVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk6IHtncm91cEluZm8udXNlcnNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldFNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRSdWxlSWRzKFtdKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoW10pO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3RMZWZ0SXRlbSA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoaWQpO1xuICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldFJ1bGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRSdWxlT3BlcmF0b3IoXCJlcXVhbFwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlKFwiXCIpO1xuICAgICAgICBzZXRSdWxlRnJvbShcIlwiKTtcbiAgICAgICAgc2V0UnVsZVRvKFwiXCIpO1xuICAgICAgICBzZXRSdWxlVmFsdWVzKFtdKTtcbiAgICAgICAgc2V0TmV3TGlzdFZhbHVlKFwiXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRSdWxlRnJvbUZvcm0gPSAoKTogQWNjZXNzUnVsZSB8IG51bGwgPT4ge1xuICAgICAgICBpZiAocnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIpIHtcbiAgICAgICAgICAgIGlmICghcnVsZVZhbHVlLnRyaW0oKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcImVxdWFsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGVWYWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZU9wZXJhdG9yID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIGlmICghcnVsZUZyb20udHJpbSgpIHx8ICFydWxlVG8udHJpbSgpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwicmFuZ2VcIixcbiAgICAgICAgICAgICAgICBmcm9tOiBydWxlRnJvbS50cmltKCksXG4gICAgICAgICAgICAgICAgdG86IHJ1bGVUby50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZU9wZXJhdG9yID09PSBcImluY2x1ZGVcIikge1xuICAgICAgICAgICAgY29uc3QgY2xlYW5WYWx1ZXMgPSBydWxlVmFsdWVzLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgICAgICAgaWYgKGNsZWFuVmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcImluY2x1ZGVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IGNsZWFuVmFsdWVzLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJsaWtlXCIpIHtcbiAgICAgICAgICAgIGlmICghcnVsZVZhbHVlLnRyaW0oKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcImxpa2VcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogcnVsZVZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCBmaWxsUnVsZUZvcm0gPSAocnVsZTogQWNjZXNzUnVsZSkgPT4ge1xuICAgICAgICBzZXRSdWxlT3BlcmF0b3IocnVsZS5vcGVyYXRvcik7XG4gICAgICAgIHNldFJ1bGVWYWx1ZShydWxlLnZhbHVlID8/IFwiXCIpO1xuICAgICAgICBzZXRSdWxlRnJvbShydWxlLmZyb20gPz8gXCJcIik7XG4gICAgICAgIHNldFJ1bGVUbyhydWxlLnRvID8/IFwiXCIpO1xuICAgICAgICBzZXRSdWxlVmFsdWVzKHJ1bGUudmFsdWVzID8/IFtdKTtcbiAgICAgICAgc2V0TmV3TGlzdFZhbHVlKFwiXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIHNldEZvcm1UaXRsZShcIlwiKTtcbiAgICAgICAgc2V0Rm9ybUZpZWxkKFwiXCIpO1xuICAgICAgICByZXNldFJ1bGVGb3JtKCk7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkRmllbGRcIiB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSByZXR1cm47XG5cbiAgICAgICAgc2V0Rm9ybVRpdGxlKHNlbGVjdGVkRmllbGQudGl0bGUpO1xuICAgICAgICBzZXRGb3JtRmllbGQoc2VsZWN0ZWRGaWVsZC5maWVsZCk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdEZpZWxkXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZmllbGRJZDogc2VsZWN0ZWRGaWVsZC5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZm9ybVRpdGxlLnRyaW0oKSB8fCAhZm9ybUZpZWxkLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkRmllbGRcIikge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZ2V0UnVsZUZyb21Gb3JtKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpZWxkOiBBY2Nlc3NGaWVsZFJ1bGUgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmb3JtVGl0bGUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmb3JtRmllbGQudHJpbSgpLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBmaXJzdFJ1bGUgPyBbZmlyc3RSdWxlXSA6IFtdLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogWy4uLnByZXYucnVsZXMsIG5ld0ZpZWxkXSxcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChuZXdGaWVsZC5pZCk7XG4gICAgICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0RmllbGRcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPT09IGRpYWxvZy5wYXlsb2FkLmZpZWxkSWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGZvcm1UaXRsZS50cmltKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZvcm1GaWVsZC50cmltKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRSdWxlcyA9IHByZXYucnVsZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBzZWxlY3RlZEZpZWxkLmlkKTtcblxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChuZXh0UnVsZXNbMF0/LmlkID8/IEdMT0JBTF9BQ0NFU1NfSUQpO1xuICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBuZXh0UnVsZXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRSdWxlID0gKCkgPT4ge1xuICAgICAgICByZXNldFJ1bGVGb3JtKCk7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkUnVsZVwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdFJ1bGUgPSAocnVsZTogQWNjZXNzUnVsZSkgPT4ge1xuICAgICAgICBmaWxsUnVsZUZvcm0ocnVsZSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdFJ1bGVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBydWxlSWQ6IHJ1bGUuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZVJ1bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGZvcm1SdWxlID0gZ2V0UnVsZUZyb21Gb3JtKCk7XG5cbiAgICAgICAgaWYgKCFmb3JtUnVsZSkge1xuICAgICAgICAgICAgYWxlcnQoXCLQl9Cw0L/QvtC70L3QuCDQt9C90LDRh9C10L3QuNC1INC/0YDQsNCy0LjQu9CwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRSdWxlXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbLi4uZmllbGQucnVsZXMsIGZvcm1SdWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0UnVsZVwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1SdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVJ1bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZGlhbG9nPy5wYXlsb2FkPy5ydWxlSWQpIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMuZmlsdGVyKChydWxlKSA9PiBydWxlLmlkICE9PSBkaWFsb2cucGF5bG9hZC5ydWxlSWQpLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogZmllbGRcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoKHByZXYpID0+IHByZXYuZmlsdGVyKChpZCkgPT4gaWQgIT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCkpO1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVSdWxlU2VsZWN0ID0gKHJ1bGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuaW5jbHVkZXMocnVsZUlkKVxuICAgICAgICAgICAgICAgID8gcHJldi5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gcnVsZUlkKVxuICAgICAgICAgICAgICAgIDogWy4uLnByZXYsIHJ1bGVJZF1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlU2VsZWN0ZWRSdWxlcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8IHNlbGVjdGVkUnVsZUlkcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMuZmlsdGVyKChydWxlKSA9PiAhc2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRSdWxlSWRzKFtdKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoW10pO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlR3JvdXBLZXkgPSAocnVsZUlkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYCR7cnVsZUlkfV8ke2luZGV4fWA7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VHbG9iYWxHcm91cEtleSA9IChpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGBnbG9iYWxfJHtpbmRleH1gO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVHcm91cFNlbGVjdCA9IChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuaW5jbHVkZXMoa2V5KVxuICAgICAgICAgICAgICAgID8gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGtleSlcbiAgICAgICAgICAgICAgICA6IFsuLi5wcmV2LCBrZXldXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkR3JvdXBzID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRHcm91cEtleXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogcHJldi5mdWxsQWNjZXNzR3JvdXBzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiAhc2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMobWFrZUdsb2JhbEdyb3VwS2V5KGluZGV4KSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRmllbGQpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhtYWtlR3JvdXBLZXkocnVsZS5pZCwgaW5kZXgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoW10pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR3JvdXAgPSAocnVsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybUdyb3VwKFwiXCIpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImFkZEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcnVsZUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0R3JvdXAgPSAocnVsZUlkOiBzdHJpbmcsIGdyb3VwSW5kZXg6IG51bWJlciwgZ3JvdXBWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Hcm91cChncm91cFZhbHVlKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0R3JvdXBcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBydWxlSWQsXG4gICAgICAgICAgICAgICAgZ3JvdXBJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZm9ybUdyb3VwLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkR3JvdXBcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogWy4uLnJ1bGUuZ3JvdXBzLCBmb3JtR3JvdXAudHJpbSgpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEdyb3VwXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJ1bGUuZ3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtR3JvdXAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGtleSkgPT4ga2V5ICE9PSBtYWtlR3JvdXBLZXkoZGlhbG9nLnBheWxvYWQucnVsZUlkLCBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZEdsb2JhbEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoXCJcIik7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkR2xvYmFsR3JvdXBcIiB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRHbG9iYWxHcm91cCA9IChncm91cEluZGV4OiBudW1iZXIsIGdyb3VwVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoZ3JvdXBWYWx1ZSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdEdsb2JhbEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZm9ybUdyb3VwLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkR2xvYmFsR3JvdXBcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBmdWxsQWNjZXNzR3JvdXBzOiBbLi4ucHJldi5mdWxsQWNjZXNzR3JvdXBzLCBmb3JtR3JvdXAudHJpbSgpXSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEdsb2JhbEdyb3VwXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogcHJldi5mdWxsQWNjZXNzR3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCA/IGZvcm1Hcm91cC50cmltKCkgOiBncm91cFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUdsb2JhbEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRpYWxvZz8ucGF5bG9hZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHByZXYuZnVsbEFjY2Vzc0dyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoKGtleSkgPT4ga2V5ICE9PSBtYWtlR2xvYmFsR3JvdXBLZXkoZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRWYWx1ZVRvSW5MaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ld0xpc3RWYWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgIHNldFJ1bGVWYWx1ZXMoKHByZXYpID0+IFsuLi5wcmV2LCB2YWx1ZV0pO1xuICAgICAgICBzZXROZXdMaXN0VmFsdWUoXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVZhbHVlRnJvbUluTGlzdCA9IChpbmRleEZvclJlbW92ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldFJ1bGVWYWx1ZXMoKHByZXYpID0+IHByZXYuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggIT09IGluZGV4Rm9yUmVtb3ZlKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVZhbHVlSW5MaXN0ID0gKGluZGV4Rm9yVXBkYXRlOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYubWFwKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ID09PSBpbmRleEZvclVwZGF0ZSA/IHZhbHVlIDogaXRlbSkpXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRvd25sb2FkSnNvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDQpXSwge1xuICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBcImFjY2Vzcy1jb25maWcuanNvblwiO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG5cbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGxvYWRKc29uID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XG5cbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKFN0cmluZyhyZWFkZXIucmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUxvYWRlZENvbmZpZyhwYXJzZWQpO1xuXG4gICAgICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKCkgPT4gbm9ybWFsaXplZCk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChHTE9CQUxfQUNDRVNTX0lEKTtcbiAgICAgICAgICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCLQndC10LLQtdGA0L3QsNGPINGB0YLRgNGD0LrRgtGD0YDQsCBKU09OXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH07XG5cbiAgICBjb25zdCBjb3B5R3JvdXBJZCA9IGFzeW5jIChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkPy53cml0ZVRleHQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChncm91cElkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQudmFsdWUgPSBncm91cElkO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hvd05vdGljZShcIklEINGB0LrQvtC/0LjRgNC+0LLQsNC9XCIpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQndC1INGD0LTQsNC70L7RgdGMINGB0LrQvtC/0LjRgNC+0LLQsNGC0YwgSURcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXBwbHlDb25maWcgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRDb25maWcgPSBjbG9uZUFjY2Vzc0NvbmZpZyhjb25maWcpO1xuICAgICAgICBjb25zdCB3aWRnZXRDb25maWcgPSBwcm9wcy5jb25maWcgPz8gSW1tdXRhYmxlKHt9KTtcblxuICAgICAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgY29uZmlnOiB3aWRnZXRDb25maWcuc2V0KFwiYWNjZXNzQ29uZmlnXCIsIEltbXV0YWJsZShuZXh0Q29uZmlnKSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFNhdmVkQ29uZmlnKG5leHRDb25maWcpO1xuICAgICAgICBzZXRIYXNVbnNhdmVkQ2hhbmdlcyhmYWxzZSk7XG4gICAgICAgIHNob3dOb3RpY2UoXCLQndCw0YHRgtGA0L7QudC60Lgg0L/RgNC40LzQtdC90LXQvdGLXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5jZWxDb25maWdDaGFuZ2VzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRDb25maWcoY2xvbmVBY2Nlc3NDb25maWcoc2F2ZWRDb25maWcpKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChHTE9CQUxfQUNDRVNTX0lEKTtcbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuICAgICAgICBzZXRIYXNVbnNhdmVkQ2hhbmdlcyhmYWxzZSk7XG4gICAgICAgIHNob3dOb3RpY2UoXCLQmNC30LzQtdC90LXQvdC40Y8g0L7RgtC80LXQvdC10L3Ri1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgICAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXMsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFdoZXJlRm9yQ3VycmVudFVzZXIgPSAodXNlckdyb3Vwczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBoYXNGdWxsQWNjZXNzID0gY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMuc29tZSgoZ3JvdXApID0+IHVzZXJHcm91cHMuaW5jbHVkZXMoZ3JvdXApKTtcblxuICAgICAgICBpZiAoaGFzRnVsbEFjY2VzcykgcmV0dXJuIFwiMT0xXCI7XG5cbiAgICAgICAgY29uc3QgYWxsb3dlZFJ1bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGNvbmZpZy5ydWxlcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1J1bGVBY2Nlc3MgPSBydWxlLmdyb3Vwcy5zb21lKChncm91cCkgPT4gdXNlckdyb3Vwcy5pbmNsdWRlcyhncm91cCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1J1bGVBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFJ1bGVzLnB1c2goYCgke2J1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlKX0pYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbGxvd2VkUnVsZXMubGVuZ3RoID4gMCA/IGFsbG93ZWRSdWxlcy5qb2luKFwiIE9SIFwiKSA6IFwiMT0wXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclJ1bGVGb3JtID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZXJhdG9yVGFicyBmb3VyVGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJlcXVhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJlcXVhbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXF1YWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtydWxlT3BlcmF0b3IgPT09IFwicmFuZ2VcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwicmFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJhbmdlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImluY2x1ZGVcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwiaW5jbHVkZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5jbHVkZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJsaWtlXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVPcGVyYXRvcihcImxpa2VcIil9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpa2VcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7KHJ1bGVPcGVyYXRvciA9PT0gXCJlcXVhbFwiIHx8IHJ1bGVPcGVyYXRvciA9PT0gXCJsaWtlXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCX0L3QsNGH0LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UnVsZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3J1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29JbnB1dEdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCe0YJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtydWxlRnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJ1bGVGcm9tKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCU0L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtydWxlVG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSdWxlVG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbkxpc3RBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluQWRkUm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQl9C90LDRh9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0xpc3RWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdMaXN0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNtYWxsQnV0dG9uXCIgb25DbGljaz17YWRkVmFsdWVUb0luTGlzdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cnVsZVZhbHVlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eU1pbmlcIj7QodC/0LjRgdC+0Log0L/Rg9GB0YI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZVZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluVmFsdWVSb3dcIiBrZXk9e2Ake3ZhbHVlfV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JfQvdCw0YfQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlVmFsdWVJbkxpc3QoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVZhbHVlRnJvbUluTGlzdChpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZpZWxkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3V2hlcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0JjRgtC+0LPQvtCy0L7QtSDRg9GB0LvQvtCy0LjQtTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wUnVsZSA9IGdldFJ1bGVGcm9tRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wUnVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBidWlsZFJ1bGVXaGVyZShzZWxlY3RlZEZpZWxkLmZpZWxkLCB0ZW1wUnVsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7c2VsZWN0ZWRGaWVsZC5maWVsZH0gLi4uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ0FyZWFcIj5cbiAgICAgICAgICAgIHtub3RpY2UgJiYgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nTm90aWNlXCI+e25vdGljZX08L2Rpdj59XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3NDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3VyY2VTZWxlY3RvckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbENhcmRMYWJlbFwiPtCh0LvQvtC5INC00LDQvdC90YvRhTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzPXtJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtwcm9wcy51c2VEYXRhU291cmNlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkRhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc0NvbnRyb2xIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzQ29udHJvbFRpdGxlXCI+0JTQvtGB0YLRg9C/INC6INC00LDQvdC90YvQvDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCw0YHRgtGA0L7QudGC0LUg0LPRgNGD0L/Qv9GLINC4INGD0YHQu9C+0LLQuNGPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0L7QsdGK0LXQutGC0L7QslxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nlc3NTZXR0aW5nc0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRgdGC0YDQvtC50LrQsCDQtNC+0YHRgtGD0L/QsFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RUaXRsZVwiPtCf0YDQsNCy0LjQu9CwINC00L7RgdGC0YPQv9CwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdFN1YnRpdGxlXCI+SlNPTiBhY2Nlc3MgY29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb2RhbEl0ZW0gJHtzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdExlZnRJdGVtKEdMT0JBTF9BQ0NFU1NfSUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbEl0ZW1UaXRsZVwiPtCf0L7Qu9C90YvQuSDQtNC+0YHRgtGD0L88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbEl0ZW1JbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9GB0LvQvtCy0LjQtTogPHNwYW4+MT0xPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcucnVsZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IGl0ZW0uaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdExlZnRJdGVtKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtVGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JDRgtGA0LjQsdGD0YI6IDxzcGFuPntpdGVtLmZpZWxkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZEZpZWxkQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZEZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsQm90dG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwianNvbkJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LjRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSnNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqc29uQnV0dG9uXCIgb25DbGljaz17ZG93bmxvYWRKc29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LrQsNGH0LDRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFJpZ2h0UGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUZ1bGxJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0VGl0bGVcIj7Qn9C+0LvQvdGL0Lkg0LTQvtGB0YLRg9C/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0RmllbGRcIj7Qo9GB0LvQvtCy0LjQtTogMT0xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIiBvbkNsaWNrPXtvcGVuQWRkR2xvYmFsR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINCz0YDRg9C/0L/Rg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEdyb3VwS2V5cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVsa0FjdGlvbkJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvQsdGA0LDQvdC+INCz0YDRg9C/0L86IHtzZWxlY3RlZEdyb3VwS2V5cy5sZW5ndGh9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25TbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVNlbGVjdGVkR3JvdXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywg0LLRi9Cx0YDQsNC90L3Ri9C1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVJ1bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9GLINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwINC10YnRkSDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdsb2JhbEdyb3VwS2V5KGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwUm93ICR7c2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdENoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhncm91cEtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUdyb3VwU2VsZWN0KGdyb3VwS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJHcm91cElkZW50aXR5KGdyb3VwKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0R2xvYmFsR3JvdXAoaW5kZXgsIGdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDinI5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVHbG9iYWxHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICFzZWxlY3RlZEZpZWxkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVJ1bGVzXCI+RW1wdHk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFRpdGxlXCI+e3NlbGVjdGVkRmllbGQudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0RmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkNGC0YDQuNCx0YPRgjoge3NlbGVjdGVkRmllbGQuZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEhlYWRlckFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiIG9uQ2xpY2s9e29wZW5FZGl0RmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKcjlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKHsgdHlwZTogXCJkZWxldGVGaWVsZFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSdWxlSWRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWxrQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JLRi9Cx0YDQsNC90L4g0L/RgNCw0LLQuNC7OiB7c2VsZWN0ZWRSdWxlSWRzLmxlbmd0aH08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlU2VsZWN0ZWRSdWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINCy0YvQsdGA0LDQvdC90YvQtVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkR3JvdXBLZXlzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWxrQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JLRi9Cx0YDQsNC90L4g0LPRgNGD0L/Qvzoge3NlbGVjdGVkR3JvdXBLZXlzLmxlbmd0aH08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlU2VsZWN0ZWRHcm91cHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQstGL0LHRgNCw0L3QvdGL0LVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZpZWxkLnJ1bGVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPtCf0YDQsNCy0LjQu9CwINC10YnRkSDQvdC1INC00L7QsdCw0LLQu9C10L3RizwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJ1bGVDYXJkICR7c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRSdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cnVsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVSdWxlU2VsZWN0KHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUxhYmVsXCI+0KPRgdC70L7QstC40LU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVWYWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnVpbGRSdWxlV2hlcmUoc2VsZWN0ZWRGaWVsZC5maWVsZCwgcnVsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuQWRkR3JvdXAocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCz0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRSdWxlKHJ1bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pyOXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVSdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlSWQ6IHJ1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5ncm91cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlNaW5pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cEtleSA9IG1ha2VHcm91cEtleShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXBSb3cgJHtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWxlY3RlZEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Z3JvdXB9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0Q2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXBTZWxlY3QoZ3JvdXBLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdyb3VwSWRlbnRpdHkoZ3JvdXApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdEdyb3VwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKcjlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZUdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVJZDogcnVsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZFJ1bGVCdXR0b25cIiBvbkNsaWNrPXtvcGVuQWRkUnVsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0Ywg0L/RgNCw0LLQuNC70L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbG9iYWxTZXR0aW5nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNhdmVTdGF0ZSAke2hhc1Vuc2F2ZWRDaGFuZ2VzID8gXCJjaGFuZ2VkXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1Vuc2F2ZWRDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCV0YHRgtGMINC90LXRgdC+0YXRgNCw0L3RkdC90L3Ri9C1INC40LfQvNC10L3QtdC90LjRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCY0LfQvNC10L3QtdC90LjQuSDQvdC10YJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbG9iYWxTZXR0aW5nQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbmNlbENvbmZpZ0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ29uZmlnQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1Vuc2F2ZWRDaGFuZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQvNC10L3QuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwbHlDb25maWdCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FwcGx5Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzVW5zYXZlZENoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC40LzQtdC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2RpYWxvZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkRmllbGRcIiB8fCBkaWFsb2cudHlwZSA9PT0gXCJlZGl0RmllbGRcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRGaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDRgdGC0L7Qu9Cx0LXRhlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0YHRgtC+0LvQsdC10YZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybVRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LvQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybUZpZWxkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbmFsUnVsZUJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbmFsUnVsZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QtdGA0LLQvtC1INC/0YDQsNCy0LjQu9C+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSdWxlRm9ybSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlRmllbGR9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+0KPQtNCw0LvQuNGC0Ywg0YHRgtC+0LvQsdC10YY/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YHQtSDQv9GA0LDQstC40LvQsCDQstC90YPRgtGA0Lgg0L3QtdCz0L4g0YLQvtC20LUg0LHRg9C00YPRgiDRg9C00LDQu9C10L3Riy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlRmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIiB8fCBkaWFsb2cudHlwZSA9PT0gXCJlZGl0UnVsZVwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/RgNCw0LLQuNC70L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC/0YDQsNCy0LjQu9C+XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUnVsZUZvcm0oKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZVJ1bGV9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZVJ1bGVcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj7Qo9C00LDQu9C40YLRjCDQv9GA0LDQstC40LvQvj88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9GLINCy0L3Rg9GC0YDQuCDRjdGC0L7Qs9C+INC/0YDQsNCy0LjQu9CwINGC0L7QttC1INCx0YPQtNGD0YIg0YPQtNCw0LvQtdC90YsuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblwiIG9uQ2xpY2s9e2RlbGV0ZVJ1bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEdyb3VwXCIgfHwgZGlhbG9nLnR5cGUgPT09IFwiZWRpdEdyb3VwXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0LPRgNGD0L/Qv9GDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQs9GA0YPQv9C/0YNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JPRgNGD0L/Qv9CwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Hcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtR3JvdXAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVHcm91cH0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlR3JvdXBcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj7Qo9C00LDQu9C40YLRjCDQs9GA0YPQv9C/0YM/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/QsCDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdCwINGC0L7Qu9GM0LrQviDQuNC3INGN0YLQvtCz0L4g0L/RgNCw0LLQuNC70LAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblwiIG9uQ2xpY2s9e2RlbGV0ZUdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRHbG9iYWxHcm91cFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0R2xvYmFsR3JvdXBcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRHbG9iYWxHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0LPRgNGD0L/Qv9GDINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LPRgNGD0L/Qv9GDINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQk9GA0YPQv9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Hcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybUdyb3VwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUdsb2JhbEdyb3VwfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHbG9iYWxHcm91cFwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCt0YLQsCDQs9GA0YPQv9C/0LAg0LHQvtC70YzRiNC1INC90LUg0LHRg9C00LXRgiDQv9C+0LvRg9GH0LDRgtGMINC00L7RgdGC0YPQvyDQutC+INCy0YHQtdC8INC00LDQvdC90YvQvC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVHbG9iYWxHcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9