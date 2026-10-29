System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
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
  padding: 0;
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
  padding: 0;
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
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid var(--sys-color-primary-main, #00a9c0);
  border-radius: 3px;
  background: var(--sys-color-primary-main, #00a9c0);
  color: var(--sys-color-primary-contrast-text, #ffffff);
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.accessSettingsButton:hover,
.accessSettingsButton:focus-visible {
  border-color: var(--sys-color-primary-dark, #008ca0);
  background: var(--sys-color-primary-dark, #008ca0);
  color: var(--sys-color-primary-contrast-text, #ffffff);
}

.accessSettingsButton:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--sys-color-primary-main, #00a9c0) 28%, transparent);
}

.accessSettingsButtonText {
  width: 100%;
  line-height: 18px;
  text-align: center;
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

.popupAccessHeader {
  align-items: center;
}

.popupAccessToggleGroup {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
}

.popupAccessToggle {
  min-width: 112px;
  padding: 8px 10px;
  border: 1px solid #59657d;
  border-radius: 8px;
  background: #1e2430;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: #dce2ef;
  font-size: 12px;
  font-weight: 700;
}

.popupAccessToggle.inverted {
  border-color: #d79a48;
  background: #3b2d1e;
  color: #ffd9a1;
}

.popupAccessToggle input {
  margin: 0;
}

.popupAccessToggle input:disabled + span {
  opacity: 0.45;
}

.popupAccessNotice {
  padding: 10px 12px;
  border: 1px solid #46516a;
  border-radius: 8px;
  background: #252c3d;
  color: #b8c2d8;
  font-size: 12px;
  line-height: 1.45;
}

.popupAccessFieldLabel {
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: #dce2ef;
  font-size: 12px;
  font-weight: 700;
}

.popupAccessFieldsSection {
  flex: 0 0 auto;
}

.popupAccessFieldsList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.popupAccessFieldRow {
  min-height: 34px;
  padding: 4px 5px 4px 10px;
  border: 1px solid #59657d;
  border-radius: 8px;
  background: #252c3d;
  display: flex;
  align-items: center;
  gap: 8px;
}

.popupAccessFieldRow code {
  color: #f3f5fa;
  font-size: 12px;
}

.popupAccessGrid {
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.popupAccessSection {
  min-width: 0;
  min-height: 0;
  padding: 12px;
  border: 1px solid #3e475b;
  border-radius: 9px;
  background: #1d212b;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.popupAccessAddRow {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
}

.popupAccessList {
  max-height: 260px;
  overflow: auto;
}

@media (max-width: 850px) {
  .popupAccessGrid {
    grid-template-columns: 1fr;
  }
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

.rightHeaderActions,
.ruleActions {
  flex-wrap: wrap;
  justify-content: flex-end;
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

.usersArea {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.ruleUsersArea {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #44506a;
}

.accessEntitySectionTitle {
  margin-top: 20px;
  color: #aeb6ca;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
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

.groupRow.userRow {
  grid-template-columns: 1fr auto;
  border-color: #3e526f;
  background: #1d2634;
}

.userIdentity .groupIdCopyButton {
  color: #9fb6df;
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

.fieldTypeField {
  margin-bottom: 10px;
}

.fieldTypeField label {
  display: block;
  margin: 0 0 5px 2px;
  color: #aeb6ca;
  font-size: 12px;
  font-weight: 600;
}

.fieldTypeNativeSelect {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #59657d;
  border-radius: 8px;
  background: #1e2430;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  cursor: pointer;
}

.fieldTypeNativeSelect:hover {
  border-color: #6d7890;
}

.fieldTypeNativeSelect:focus {
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
}

.staticSelectionBar {
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 2;
  min-height: 46px;
  margin-bottom: 2px;
  backdrop-filter: blur(6px);
}

.staticSelectionBar.emptySelection {
  border-color: #3b4356;
  background: #1f2532;
  color: #8790a5;
}

.staticSelectionBar b {
  color: #ffffff;
}

.staticSelectionBar.emptySelection b {
  color: #aeb6ca;
}

.combinedSelectionBar {
  align-items: center;
}

.selectionCounters,
.selectionActions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.selectionCounters span {
  white-space: nowrap;
}

.dangerButtonSmall:disabled {
  opacity: 0.42;
  cursor: default;
  background: #2a2230;
  border-color: #554350;
  color: #9a8590;
}

.dangerButtonSmall:hover:disabled {
  background: #2a2230;
}

.bottomAccessPanel {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.bottomSelectionActions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.bottomAccessPanel .saveState {
  white-space: nowrap;
}

.selectCheckbox {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid #697795;
  background: #1e2430;
  cursor: pointer;
  flex-shrink: 0;
  display: inline-grid;
  place-content: center;
  transition: 0.18s ease;
}

.selectCheckbox:hover:not(:disabled) {
  border-color: #a9b9e0;
  background: #273149;
}

.selectCheckbox:checked {
  border-color: #9baee0;
  background: #3d527d;
}

.selectCheckbox:checked::after {
  content: "";
  width: 9px;
  height: 5px;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transform: rotate(-45deg) translate(1px, -1px);
}

.selectCheckbox:disabled {
  cursor: default;
  opacity: 0.9;
  border-color: #7484a8;
  background: #34476d;
}

.groupRow.lockedGroup {
  border-color: #6e7fa6;
  background: #29344c;
}

.groupRow.lockedGroup .groupActions {
  opacity: 0.45;
}

@media (max-width: 820px) {
  .globalSettingActions {
    align-items: flex-start;
    flex-direction: column;
  }
  .globalSettingButtons {
    width: 100%;
    justify-content: flex-end;
  }
}
.iconButton,
.miniIconButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
}

.buttonSvgIcon {
  width: 16px;
  height: 16px;
  display: block;
  fill: currentColor;
  pointer-events: none;
}

.miniIconButton .buttonSvgIcon {
  width: 13px;
  height: 13px;
}

.iconButton:not(.danger),
.miniIconButton:not(.danger) {
  color: #d8deea;
}

.sideSearchInput,
.groupSearchInput {
  width: 100%;
  min-height: 36px;
  padding: 0 11px;
  border-radius: 8px;
  border: 1px solid #4b5670;
  background: #1d2330;
  color: #ffffff;
  outline: none;
  font-size: 13px;
}

.sideSearchInput:focus,
.groupSearchInput:focus {
  border-color: #9baee0;
}

.groupSearchInput {
  margin-top: 14px;
}

.modalItemMeta {
  margin-top: 9px;
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
  color: #8fa3cf;
  font-size: 12px;
}

.warningPill {
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px solid #856a35;
  background: rgba(132, 93, 25, 0.22);
  color: #f2c678;
}

.operatorPill {
  margin-left: 8px;
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px solid #59657d;
  background: #1e2430;
  color: #d8deea;
  font-size: 11px;
  text-transform: uppercase;
}

.operator-equal {
  border-color: #6e83b8;
  color: #c9d7ff;
}

.operator-range {
  border-color: #6f9070;
  color: #c8f2c9;
}

.operator-include {
  border-color: #8c7ab8;
  color: #e0d2ff;
}

.operator-like {
  border-color: #9a7a5a;
  color: #ffd7b5;
}

.ruleWarnings {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.ruleWarnings span {
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid #82603b;
  background: rgba(130, 96, 59, 0.2);
  color: #f2c678;
  font-size: 12px;
  font-weight: 600;
}

.bottomAccessPanel {
  min-width: 0;
}

.whereToggleButton {
  min-height: 30px;
  padding: 0 10px;
  border-radius: 7px;
  border: 1px solid #56627c;
  background: #1f2638;
  color: #d8deea;
  cursor: pointer;
  font-size: 12px;
}

.whereToggleButton:hover {
  background: #303a56;
}

.bottomWherePreview {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 74px;
  max-height: 155px;
  border-radius: 10px;
  border: 1px solid #465169;
  background: #171c27;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.34);
  overflow: hidden;
}

.bottomWhereHeader {
  min-height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #30394d;
  color: #c6ccda;
  font-size: 13px;
  font-weight: 700;
}

.bottomWhereHeader button {
  min-height: 26px;
  padding: 0 9px;
  border-radius: 7px;
  border: 1px solid #59657d;
  background: #293148;
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
}

.bottomWhereHeader button:hover {
  background: #3b4868;
}

.bottomWherePreview pre {
  margin: 0;
  padding: 12px;
  max-height: 118px;
  overflow: auto;
  color: #ffffff;
  font-size: 12px;
  line-height: 1.45;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-family: Consolas, "Courier New", monospace;
}

.modalRightPanel {
  position: relative;
}

.joinOperatorControl {
  min-height: 32px;
  padding: 4px;
  border: 1px solid #59657d;
  border-radius: 8px;
  background: #1e2430;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #aeb6ca;
  font-size: 12px;
}

.joinOperatorControl span {
  padding: 0 7px;
  white-space: nowrap;
}

.joinOperatorControl button {
  height: 24px;
  padding: 0 9px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: #d8deea;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
}

.joinOperatorControl button:hover,
.joinOperatorControl button.active {
  border-color: #9baee0;
  background: #35415b;
  color: #ffffff;
}

.modalItemInfoLine {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.modalItemCondition {
  min-width: 0;
  color: #aeb6ca !important;
  font-weight: 500 !important;
  overflow-wrap: anywhere;
}

.modalItemCondition b {
  color: #ffffff;
  font-weight: 700;
}

.modalItemCount {
  flex-shrink: 0;
  color: #8fa3cf !important;
  font-size: 12px;
  font-weight: 700;
  white-space: normal;
  text-align: right;
}

.groupIdTitleLine {
  min-width: 0;
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}

.groupTitleAfterId {
  min-width: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.ruleModeRow {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 8px;
  margin-bottom: 12px;
}

.ruleModeRow .operatorTabs {
  margin-bottom: 0;
}

.notToggleButton {
  height: 36px;
  min-width: 58px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #6d5d76;
  background: #1e2430;
  color: #d8deea;
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  transition: 0.18s ease;
}

.notToggleButton:hover {
  border-color: #c59be0;
  background: #2b2638;
  color: #ffffff;
}

.notToggleButton.active {
  border-color: #d1a7ef;
  background: #49345f;
  color: #ffffff;
  box-shadow: 0 0 0 1px rgba(209, 167, 239, 0.18) inset;
}

@media (max-width: 620px) {
  .ruleModeRow {
    grid-template-columns: 1fr;
  }
  .notToggleButton {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.css","webpack://./your-extensions/widgets/Fire%20Portal/src/setting/AccessSetting/AccessSetting.css"],"names":[],"mappings":"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","sourcesContent":[".settingArea {\n    width: 100%;\n    padding: 0;\n    color: inherit;\n    font-family: inherit;\n}\n\n.settingsContent {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n\n.sourceSelectorCard {\n    padding: 12px;\n}\n\n.panelCardLabel {\n    margin-bottom: 9px;\n    color: var(--dark-800, rgba(255, 255, 255, 0.72));\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n}\n\n.sourceSelectorCard>div:last-child {\n    width: 100%;\n}\n\n.accessControlCard {\n    padding: 0;\n}\n\n.accessControlHeader {\n    margin-bottom: 12px;\n}\n\n.accessControlTitle {\n    margin-bottom: 3px;\n    color: inherit;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n}\n\n.accessControlDescription {\n    color: var(--dark-800, rgba(255, 255, 255, 0.66));\n    font-size: 12px;\n    line-height: 17px;\n}\n\n.accessSettingsButton {\n    width: 100%;\n    min-height: 40px;\n    padding: 8px 14px;\n    border: 1px solid var(--sys-color-primary-main, #00a9c0);\n    border-radius: 3px;\n    background: var(--sys-color-primary-main, #00a9c0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n    box-shadow: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 18px;\n    text-align: center;\n    transition:\n        background-color 0.15s ease,\n        border-color 0.15s ease,\n        box-shadow 0.15s ease;\n}\n\n.accessSettingsButton:hover,\n.accessSettingsButton:focus-visible {\n    border-color: var(--sys-color-primary-dark, #008ca0);\n    background: var(--sys-color-primary-dark, #008ca0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n}\n\n.accessSettingsButton:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 2px color-mix(in srgb, var(--sys-color-primary-main, #00a9c0) 28%, transparent);\n}\n\n.accessSettingsButtonText {\n    width: 100%;\n    line-height: 18px;\n    text-align: center;\n}\n\n.sourceSelectorCard button {\n    border-radius: 4px;\n}\n\n.modalArea {\n    color: #f3f4f6;\n    font-family: Arial, sans-serif;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modalBlock {\n    width: min(1200px, calc(100vw - 32px));\n    height: min(800px, calc(100vh - 32px));\n    background: #1f222b;\n    border: 1px solid #343a49;\n    border-radius: 10px;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n    background: #252c41;\n    padding: 14px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    min-height: 0;\n}\n\n.modalListHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.modalListTitle {\n    font-size: 17px;\n    font-weight: 700;\n}\n\n.modalListSubtitle {\n    margin-top: 3px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.fieldList {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    min-height: 0;\n}\n\n.modalItem {\n    padding: 12px 14px;\n    border-radius: 8px;\n    border: 1px solid #77839f;\n    background: #293148;\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n    background: #33405f;\n    border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.modalItemInfo {\n    margin-top: 5px;\n    font-size: 13px;\n    color: #b8bfd1;\n}\n\n.modalItemInfo span {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.addFieldButton {\n    height: 64px;\n    border-radius: 8px;\n    border: 1px dashed #9ca8c4;\n    background: transparent;\n    color: #ffffff;\n    font-size: 34px;\n    cursor: pointer;\n}\n\n.addFieldButton:hover {\n    background: #303a56;\n}\n\n.modalBottomActions {\n    margin-top: auto;\n    display: grid;\n    gap: 8px;\n}\n\n.jsonButton {\n    height: 38px;\n    border-radius: 8px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #f3f4f6;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n}\n\n.jsonButton:hover {\n    background: #303a56;\n}\n\n.jsonButton input {\n    display: none;\n}\n\n.modalRightPanel {\n    min-width: 0;\n    min-height: 0;\n    background: #20232c;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.modalItemFullInfo {\n    flex: 1;\n    min-height: 0;\n    padding: 22px;\n    background: #20232c;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.rightHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n    padding-bottom: 16px;\n    border-bottom: 1px solid #3a4050;\n}\n\n.popupAccessHeader {\n    align-items: center;\n}\n\n.popupAccessToggleGroup {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.popupAccessToggle {\n    min-width: 112px;\n    padding: 8px 10px;\n    border: 1px solid #59657d;\n    border-radius: 8px;\n    background: #1e2430;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n    color: #dce2ef;\n    font-size: 12px;\n    font-weight: 700;\n}\n\n.popupAccessToggle.inverted {\n    border-color: #d79a48;\n    background: #3b2d1e;\n    color: #ffd9a1;\n}\n\n.popupAccessToggle input {\n    margin: 0;\n}\n\n.popupAccessToggle input:disabled + span {\n    opacity: 0.45;\n}\n\n.popupAccessNotice {\n    padding: 10px 12px;\n    border: 1px solid #46516a;\n    border-radius: 8px;\n    background: #252c3d;\n    color: #b8c2d8;\n    font-size: 12px;\n    line-height: 1.45;\n}\n\n.popupAccessFieldLabel {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    color: #dce2ef;\n    font-size: 12px;\n    font-weight: 700;\n}\n\n.popupAccessFieldsSection {\n    flex: 0 0 auto;\n}\n\n.popupAccessFieldsList {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n}\n\n.popupAccessFieldRow {\n    min-height: 34px;\n    padding: 4px 5px 4px 10px;\n    border: 1px solid #59657d;\n    border-radius: 8px;\n    background: #252c3d;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.popupAccessFieldRow code {\n    color: #f3f5fa;\n    font-size: 12px;\n}\n\n.popupAccessGrid {\n    min-height: 0;\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 12px;\n}\n\n.popupAccessSection {\n    min-width: 0;\n    min-height: 0;\n    padding: 12px;\n    border: 1px solid #3e475b;\n    border-radius: 9px;\n    background: #1d212b;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.popupAccessAddRow {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 8px;\n}\n\n.popupAccessList {\n    max-height: 260px;\n    overflow: auto;\n}\n\n@media (max-width: 850px) {\n    .popupAccessGrid {\n        grid-template-columns: 1fr;\n    }\n}\n\n.rightTitle {\n    font-size: 24px;\n    font-weight: 800;\n}\n\n.rightField {\n    margin-top: 6px;\n    color: #aeb6ca;\n    font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.rightHeaderActions,\n.ruleActions {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.iconButton,\n.miniIconButton {\n    width: 34px;\n    height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n}\n\n.miniIconButton {\n    width: 26px;\n    height: 26px;\n    font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n    background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n    border-color: #8f4f5b;\n    color: #ffb8c1;\n}\n\n.rulesArea {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.ruleCard {\n    padding: 14px;\n    border-radius: 10px;\n    background: #262b36;\n    border: 1px solid #3d465b;\n    transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n    border-color: #9baee0;\n    background: #2c3448;\n}\n\n.ruleHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.ruleInfo {\n    flex: 1;\n    min-width: 0;\n}\n\n.ruleLabel {\n    color: #aeb6ca;\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.ruleValue {\n    font-size: 15px;\n    font-weight: 700;\n    color: #ffffff;\n    overflow-wrap: anywhere;\n}\n\n.ruleActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n    opacity: 1;\n}\n\n.smallButton {\n    min-height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n    padding: 0 10px;\n}\n\n.smallButton:hover {\n    background: #3b4868;\n}\n\n.groupsArea {\n    margin-top: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.usersArea {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.ruleUsersArea {\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px dashed #44506a;\n}\n\n.accessEntitySectionTitle {\n    margin-top: 20px;\n    color: #aeb6ca;\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n}\n\n.groupRow {\n    background: #1d2230;\n    border: 1px solid #384258;\n    border-radius: 8px;\n    padding: 8px 10px;\n    color: #d9deea;\n    font-size: 13px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 12px;\n    transition: 0.2s;\n}\n\n.groupRow.userRow {\n    grid-template-columns: 1fr auto;\n    border-color: #3e526f;\n    background: #1d2634;\n}\n\n.userIdentity .groupIdCopyButton {\n    color: #9fb6df;\n}\n\n.groupRow.selectedGroup {\n    border-color: #9baee0;\n    background: #273149;\n}\n\n.groupRow span {\n    overflow-wrap: anywhere;\n}\n\n.groupActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n    opacity: 1;\n}\n\n.addRuleButton {\n    height: 44px;\n    border-radius: 9px;\n    border: 1px dashed #78849f;\n    background: transparent;\n    color: white;\n    cursor: pointer;\n}\n\n.addRuleButton:hover {\n    background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.emptyRules {\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px dashed #555f76;\n    text-align: center;\n}\n\n.dialogArea {\n    position: fixed;\n    inset: 0;\n    z-index: 10000;\n    background: rgba(0, 0, 0, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dialogBlock {\n    width: 520px;\n    max-width: calc(100vw - 32px);\n    max-height: calc(100vh - 32px);\n    overflow: auto;\n    background: #252b38;\n    border: 1px solid #4c566c;\n    border-radius: 12px;\n    padding: 18px;\n    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n    font-size: 18px;\n    font-weight: 800;\n    margin-bottom: 12px;\n}\n\n.dialogText {\n    color: #c2c8d5;\n    margin-bottom: 16px;\n}\n\n.dialogInput {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: white;\n    outline: none;\n}\n\n.dialogInput:focus {\n    border-color: #9baee0;\n}\n\n.fieldTypeField {\n    margin-bottom: 10px;\n}\n\n.fieldTypeField label {\n    display: block;\n    margin: 0 0 5px 2px;\n    color: #aeb6ca;\n    font-size: 12px;\n    font-weight: 600;\n}\n\n.fieldTypeNativeSelect {\n    width: 100%;\n    height: 40px;\n    padding: 0 10px;\n    border: 1px solid #59657d;\n    border-radius: 8px;\n    background: #1e2430;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    outline: none;\n    cursor: pointer;\n}\n\n.fieldTypeNativeSelect:hover {\n    border-color: #6d7890;\n}\n\n.fieldTypeNativeSelect:focus {\n    border-color: #9baee0;\n}\n\n.dialogActions {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n    margin-top: 10px;\n}\n\n.dialogActions button {\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #30384a;\n    color: white;\n    cursor: pointer;\n}\n\n.dialogActions button:hover {\n    background: #3b465d;\n}\n\n.dangerButton {\n    border-color: #985565 !important;\n    background: #4a2430 !important;\n    color: #ffc4cc !important;\n}\n\n.operatorTabs {\n    display: grid;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n    background: #35415b;\n    border-color: #9baee0;\n    color: #ffffff;\n}\n\n.twoInputGrid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.inListArea {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.inAddRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.inValueRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.previewWhere {\n    margin-top: 12px;\n    padding: 10px 12px;\n    border-radius: 8px;\n    border: 1px solid #465169;\n    background: #1e2430;\n    color: #aeb6ca;\n    font-size: 13px;\n}\n\n.previewWhere span {\n    display: block;\n    margin-top: 6px;\n    color: #ffffff;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n    margin-top: 12px;\n    padding: 12px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #202637;\n}\n\n.optionalRuleTitle {\n    margin-bottom: 10px;\n    font-size: 13px;\n    color: #c6ccda;\n}\n\n.bulkActionBar {\n    min-height: 42px;\n    padding: 8px 10px;\n    border-radius: 9px;\n    border: 1px solid #59657d;\n    background: #202637;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    color: #d8deea;\n    font-size: 13px;\n}\n\n.dangerButtonSmall {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #985565;\n    background: #4a2430;\n    color: #ffc4cc;\n    cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n    background: #633040;\n}\n\n.selectCheckbox {\n    width: 16px;\n    height: 16px;\n    accent-color: #9baee0;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.groupIdentity {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n.groupName {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.groupId {\n    color: #aeb6ca;\n    font-size: 12px;\n    font-family: Consolas, \"Courier New\", monospace;\n    overflow-wrap: anywhere;\n}\n\n.groupMembers {\n    margin-top: 2px;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n\n.groupIdCopyButton {\n    width: fit-content;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: #aeb6ca;\n    font-size: 12px;\n    line-height: 1.35;\n    font-family: Consolas, \"Courier New\", monospace;\n    text-align: left;\n    overflow-wrap: anywhere;\n    cursor: pointer;\n    transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n    color: #ffffff;\n    text-decoration: underline;\n}\n\n.settingNotice {\n    position: fixed;\n    top: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 11000;\n    min-width: 210px;\n    padding: 11px 18px;\n    border-radius: 9px;\n    border: 1px solid #7185ae;\n    background: #273149;\n    color: #ffffff;\n    font-size: 13px;\n    text-align: center;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n    pointer-events: none;\n}\n\n.globalSettingActions {\n    flex-shrink: 0;\n    min-height: 66px;\n    padding: 13px 22px;\n    border-top: 1px solid #3a4050;\n    background: #20232c;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.saveState {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.saveState.changed {\n    color: #f1c27d;\n}\n\n.globalSettingButtons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n    height: 38px;\n    padding: 0 18px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 13px;\n    transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n}\n\n.applyConfigButton {\n    border: 1px solid #728ac3;\n    background: #385083;\n    color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n    background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n    background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n    opacity: 0.45;\n    cursor: default;\n}\n.staticSelectionBar {\n    flex-shrink: 0;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    min-height: 46px;\n    margin-bottom: 2px;\n    backdrop-filter: blur(6px);\n}\n\n.staticSelectionBar.emptySelection {\n    border-color: #3b4356;\n    background: #1f2532;\n    color: #8790a5;\n}\n\n.staticSelectionBar b {\n    color: #ffffff;\n}\n\n.staticSelectionBar.emptySelection b {\n    color: #aeb6ca;\n}\n\n.combinedSelectionBar {\n    align-items: center;\n}\n\n.selectionCounters,\n.selectionActions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.selectionCounters span {\n    white-space: nowrap;\n}\n\n.dangerButtonSmall:disabled {\n    opacity: 0.42;\n    cursor: default;\n    background: #2a2230;\n    border-color: #554350;\n    color: #9a8590;\n}\n\n.dangerButtonSmall:hover:disabled {\n    background: #2a2230;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n}\n\n.bottomSelectionActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.bottomAccessPanel .saveState {\n    white-space: nowrap;\n}\n\n.selectCheckbox {\n    appearance: none;\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    border: 1px solid #697795;\n    background: #1e2430;\n    cursor: pointer;\n    flex-shrink: 0;\n    display: inline-grid;\n    place-content: center;\n    transition: 0.18s ease;\n}\n\n.selectCheckbox:hover:not(:disabled) {\n    border-color: #a9b9e0;\n    background: #273149;\n}\n\n.selectCheckbox:checked {\n    border-color: #9baee0;\n    background: #3d527d;\n}\n\n.selectCheckbox:checked::after {\n    content: \"\";\n    width: 9px;\n    height: 5px;\n    border-left: 2px solid #ffffff;\n    border-bottom: 2px solid #ffffff;\n    transform: rotate(-45deg) translate(1px, -1px);\n}\n\n.selectCheckbox:disabled {\n    cursor: default;\n    opacity: 0.9;\n    border-color: #7484a8;\n    background: #34476d;\n}\n\n.groupRow.lockedGroup {\n    border-color: #6e7fa6;\n    background: #29344c;\n}\n\n.groupRow.lockedGroup .groupActions {\n    opacity: 0.45;\n}\n\n@media (max-width: 820px) {\n    .globalSettingActions {\n        align-items: flex-start;\n        flex-direction: column;\n    }\n\n    .globalSettingButtons {\n        width: 100%;\n        justify-content: flex-end;\n    }\n}\n\n.iconButton,\n.miniIconButton {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    line-height: 1;\n}\n\n.buttonSvgIcon {\n    width: 16px;\n    height: 16px;\n    display: block;\n    fill: currentColor;\n    pointer-events: none;\n}\n\n.miniIconButton .buttonSvgIcon {\n    width: 13px;\n    height: 13px;\n}\n\n.iconButton:not(.danger),\n.miniIconButton:not(.danger) {\n    color: #d8deea;\n}\n\n.sideSearchInput,\n.groupSearchInput {\n    width: 100%;\n    min-height: 36px;\n    padding: 0 11px;\n    border-radius: 8px;\n    border: 1px solid #4b5670;\n    background: #1d2330;\n    color: #ffffff;\n    outline: none;\n    font-size: 13px;\n}\n\n.sideSearchInput:focus,\n.groupSearchInput:focus {\n    border-color: #9baee0;\n}\n\n.groupSearchInput {\n    margin-top: 14px;\n}\n\n.modalItemMeta {\n    margin-top: 9px;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n    flex-wrap: wrap;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n.warningPill {\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #856a35;\n    background: rgba(132, 93, 25, 0.22);\n    color: #f2c678;\n}\n\n.operatorPill {\n    margin-left: 8px;\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    font-size: 11px;\n    text-transform: uppercase;\n}\n\n.operator-equal { border-color: #6e83b8; color: #c9d7ff; }\n.operator-range { border-color: #6f9070; color: #c8f2c9; }\n.operator-include { border-color: #8c7ab8; color: #e0d2ff; }\n.operator-like { border-color: #9a7a5a; color: #ffd7b5; }\n\n.ruleWarnings {\n    margin-top: 8px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n}\n\n.ruleWarnings span {\n    padding: 3px 8px;\n    border-radius: 999px;\n    border: 1px solid #82603b;\n    background: rgba(130, 96, 59, 0.2);\n    color: #f2c678;\n    font-size: 12px;\n    font-weight: 600;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n}\n\n.whereToggleButton {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.whereToggleButton:hover {\n    background: #303a56;\n}\n\n.bottomWherePreview {\n    position: absolute;\n    left: 22px;\n    right: 22px;\n    bottom: 74px;\n    max-height: 155px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #171c27;\n    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.34);\n    overflow: hidden;\n}\n\n.bottomWhereHeader {\n    min-height: 36px;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid #30394d;\n    color: #c6ccda;\n    font-size: 13px;\n    font-weight: 700;\n}\n\n.bottomWhereHeader button {\n    min-height: 26px;\n    padding: 0 9px;\n    border-radius: 7px;\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.bottomWhereHeader button:hover {\n    background: #3b4868;\n}\n\n.bottomWherePreview pre {\n    margin: 0;\n    padding: 12px;\n    max-height: 118px;\n    overflow: auto;\n    color: #ffffff;\n    font-size: 12px;\n    line-height: 1.45;\n    white-space: pre-wrap;\n    overflow-wrap: anywhere;\n    font-family: Consolas, \"Courier New\", monospace;\n}\n\n.modalRightPanel {\n    position: relative;\n}\n\n.joinOperatorControl {\n    min-height: 32px;\n    padding: 4px;\n    border: 1px solid #59657d;\n    border-radius: 8px;\n    background: #1e2430;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.joinOperatorControl span {\n    padding: 0 7px;\n    white-space: nowrap;\n}\n\n.joinOperatorControl button {\n    height: 24px;\n    padding: 0 9px;\n    border-radius: 6px;\n    border: 1px solid transparent;\n    background: transparent;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 700;\n}\n\n.joinOperatorControl button:hover,\n.joinOperatorControl button.active {\n    border-color: #9baee0;\n    background: #35415b;\n    color: #ffffff;\n}\n\n.modalItemInfoLine {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.modalItemCondition {\n    min-width: 0;\n    color: #aeb6ca !important;\n    font-weight: 500 !important;\n    overflow-wrap: anywhere;\n}\n\n.modalItemCondition b {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.modalItemCount {\n    flex-shrink: 0;\n    color: #8fa3cf !important;\n    font-size: 12px;\n    font-weight: 700;\n    white-space: normal;\n    text-align: right;\n}\n\n.groupIdTitleLine {\n    min-width: 0;\n    display: flex;\n    align-items: baseline;\n    gap: 6px;\n    flex-wrap: wrap;\n}\n\n.groupTitleAfterId {\n    min-width: 0;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.ruleModeRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: start;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.ruleModeRow .operatorTabs {\n    margin-bottom: 0;\n}\n\n.notToggleButton {\n    height: 36px;\n    min-width: 58px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #6d5d76;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 0.04em;\n    transition: 0.18s ease;\n}\n\n.notToggleButton:hover {\n    border-color: #c59be0;\n    background: #2b2638;\n    color: #ffffff;\n}\n\n.notToggleButton.active {\n    border-color: #d1a7ef;\n    background: #49345f;\n    color: #ffffff;\n    box-shadow: 0 0 0 1px rgba(209, 167, 239, 0.18) inset;\n}\n\n@media (max-width: 620px) {\n    .ruleModeRow {\n        grid-template-columns: 1fr;\n    }\n\n    .notToggleButton {\n        width: 100%;\n    }\n}\n",".settingArea {\n  width: 100%;\n  padding: 0;\n  color: inherit;\n  font-family: inherit;\n}\n\n.settingsContent {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n.sourceSelectorCard {\n  padding: 12px;\n}\n\n.panelCardLabel {\n  margin-bottom: 9px;\n  color: var(--dark-800, rgba(255, 255, 255, 0.72));\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n}\n\n.sourceSelectorCard > div:last-child {\n  width: 100%;\n}\n\n.accessControlCard {\n  padding: 0;\n}\n\n.accessControlHeader {\n  margin-bottom: 12px;\n}\n\n.accessControlTitle {\n  margin-bottom: 3px;\n  color: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.accessControlDescription {\n  color: var(--dark-800, rgba(255, 255, 255, 0.66));\n  font-size: 12px;\n  line-height: 17px;\n}\n\n.accessSettingsButton {\n  width: 100%;\n  min-height: 40px;\n  padding: 8px 14px;\n  border: 1px solid var(--sys-color-primary-main, #00a9c0);\n  border-radius: 3px;\n  background: var(--sys-color-primary-main, #00a9c0);\n  color: var(--sys-color-primary-contrast-text, #ffffff);\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: center;\n  transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.accessSettingsButton:hover,\n.accessSettingsButton:focus-visible {\n  border-color: var(--sys-color-primary-dark, #008ca0);\n  background: var(--sys-color-primary-dark, #008ca0);\n  color: var(--sys-color-primary-contrast-text, #ffffff);\n}\n\n.accessSettingsButton:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--sys-color-primary-main, #00a9c0) 28%, transparent);\n}\n\n.accessSettingsButtonText {\n  width: 100%;\n  line-height: 18px;\n  text-align: center;\n}\n\n.sourceSelectorCard button {\n  border-radius: 4px;\n}\n\n.modalArea {\n  color: #f3f4f6;\n  font-family: Arial, sans-serif;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modalBlock {\n  width: min(1200px, 100vw - 32px);\n  height: min(800px, 100vh - 32px);\n  background: #1f222b;\n  border: 1px solid #343a49;\n  border-radius: 10px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n  background: #252c41;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n}\n\n.modalListHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.modalListTitle {\n  font-size: 17px;\n  font-weight: 700;\n}\n\n.modalListSubtitle {\n  margin-top: 3px;\n  color: #aeb6ca;\n  font-size: 12px;\n}\n\n.fieldList {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-height: 0;\n}\n\n.modalItem {\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid #77839f;\n  background: #293148;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n  background: #33405f;\n  border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.modalItemInfo {\n  margin-top: 5px;\n  font-size: 13px;\n  color: #b8bfd1;\n}\n\n.modalItemInfo span {\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.addFieldButton {\n  height: 64px;\n  border-radius: 8px;\n  border: 1px dashed #9ca8c4;\n  background: transparent;\n  color: #ffffff;\n  font-size: 34px;\n  cursor: pointer;\n}\n\n.addFieldButton:hover {\n  background: #303a56;\n}\n\n.modalBottomActions {\n  margin-top: auto;\n  display: grid;\n  gap: 8px;\n}\n\n.jsonButton {\n  height: 38px;\n  border-radius: 8px;\n  border: 1px solid #56627c;\n  background: #1f2638;\n  color: #f3f4f6;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n\n.jsonButton:hover {\n  background: #303a56;\n}\n\n.jsonButton input {\n  display: none;\n}\n\n.modalRightPanel {\n  min-width: 0;\n  min-height: 0;\n  background: #20232c;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.modalItemFullInfo {\n  flex: 1;\n  min-height: 0;\n  padding: 22px;\n  background: #20232c;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.rightHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #3a4050;\n}\n\n.popupAccessHeader {\n  align-items: center;\n}\n\n.popupAccessToggleGroup {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.popupAccessToggle {\n  min-width: 112px;\n  padding: 8px 10px;\n  border: 1px solid #59657d;\n  border-radius: 8px;\n  background: #1e2430;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  color: #dce2ef;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.popupAccessToggle.inverted {\n  border-color: #d79a48;\n  background: #3b2d1e;\n  color: #ffd9a1;\n}\n\n.popupAccessToggle input {\n  margin: 0;\n}\n\n.popupAccessToggle input:disabled + span {\n  opacity: 0.45;\n}\n\n.popupAccessNotice {\n  padding: 10px 12px;\n  border: 1px solid #46516a;\n  border-radius: 8px;\n  background: #252c3d;\n  color: #b8c2d8;\n  font-size: 12px;\n  line-height: 1.45;\n}\n\n.popupAccessFieldLabel {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  color: #dce2ef;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.popupAccessFieldsSection {\n  flex: 0 0 auto;\n}\n\n.popupAccessFieldsList {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.popupAccessFieldRow {\n  min-height: 34px;\n  padding: 4px 5px 4px 10px;\n  border: 1px solid #59657d;\n  border-radius: 8px;\n  background: #252c3d;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.popupAccessFieldRow code {\n  color: #f3f5fa;\n  font-size: 12px;\n}\n\n.popupAccessGrid {\n  min-height: 0;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.popupAccessSection {\n  min-width: 0;\n  min-height: 0;\n  padding: 12px;\n  border: 1px solid #3e475b;\n  border-radius: 9px;\n  background: #1d212b;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.popupAccessAddRow {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 8px;\n}\n\n.popupAccessList {\n  max-height: 260px;\n  overflow: auto;\n}\n\n@media (max-width: 850px) {\n  .popupAccessGrid {\n    grid-template-columns: 1fr;\n  }\n}\n.rightTitle {\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.rightField {\n  margin-top: 6px;\n  color: #aeb6ca;\n  font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.rightHeaderActions,\n.ruleActions {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.iconButton,\n.miniIconButton {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n}\n\n.miniIconButton {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n  background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n  border-color: #8f4f5b;\n  color: #ffb8c1;\n}\n\n.rulesArea {\n  padding-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.ruleCard {\n  padding: 14px;\n  border-radius: 10px;\n  background: #262b36;\n  border: 1px solid #3d465b;\n  transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n  border-color: #9baee0;\n  background: #2c3448;\n}\n\n.ruleHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.ruleInfo {\n  flex: 1;\n  min-width: 0;\n}\n\n.ruleLabel {\n  color: #aeb6ca;\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n\n.ruleValue {\n  font-size: 15px;\n  font-weight: 700;\n  color: #ffffff;\n  overflow-wrap: anywhere;\n}\n\n.ruleActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n  opacity: 1;\n}\n\n.smallButton {\n  min-height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n}\n\n.smallButton:hover {\n  background: #3b4868;\n}\n\n.groupsArea {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.usersArea {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.ruleUsersArea {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px dashed #44506a;\n}\n\n.accessEntitySectionTitle {\n  margin-top: 20px;\n  color: #aeb6ca;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.groupRow {\n  background: #1d2230;\n  border: 1px solid #384258;\n  border-radius: 8px;\n  padding: 8px 10px;\n  color: #d9deea;\n  font-size: 13px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  transition: 0.2s;\n}\n\n.groupRow.userRow {\n  grid-template-columns: 1fr auto;\n  border-color: #3e526f;\n  background: #1d2634;\n}\n\n.userIdentity .groupIdCopyButton {\n  color: #9fb6df;\n}\n\n.groupRow.selectedGroup {\n  border-color: #9baee0;\n  background: #273149;\n}\n\n.groupRow span {\n  overflow-wrap: anywhere;\n}\n\n.groupActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n  opacity: 1;\n}\n\n.addRuleButton {\n  height: 44px;\n  border-radius: 9px;\n  border: 1px dashed #78849f;\n  background: transparent;\n  color: white;\n  cursor: pointer;\n}\n\n.addRuleButton:hover {\n  background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.emptyRules {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px dashed #555f76;\n  text-align: center;\n}\n\n.dialogArea {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dialogBlock {\n  width: 520px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #252b38;\n  border: 1px solid #4c566c;\n  border-radius: 12px;\n  padding: 18px;\n  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n  font-size: 18px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n\n.dialogText {\n  color: #c2c8d5;\n  margin-bottom: 16px;\n}\n\n.dialogInput {\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding: 0 12px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: white;\n  outline: none;\n}\n\n.dialogInput:focus {\n  border-color: #9baee0;\n}\n\n.fieldTypeField {\n  margin-bottom: 10px;\n}\n\n.fieldTypeField label {\n  display: block;\n  margin: 0 0 5px 2px;\n  color: #aeb6ca;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.fieldTypeNativeSelect {\n  width: 100%;\n  height: 40px;\n  padding: 0 10px;\n  border: 1px solid #59657d;\n  border-radius: 8px;\n  background: #1e2430;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  outline: none;\n  cursor: pointer;\n}\n\n.fieldTypeNativeSelect:hover {\n  border-color: #6d7890;\n}\n\n.fieldTypeNativeSelect:focus {\n  border-color: #9baee0;\n}\n\n.dialogActions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.dialogActions button {\n  height: 36px;\n  padding: 0 14px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #30384a;\n  color: white;\n  cursor: pointer;\n}\n\n.dialogActions button:hover {\n  background: #3b465d;\n}\n\n.dangerButton {\n  border-color: #985565 !important;\n  background: #4a2430 !important;\n  color: #ffc4cc !important;\n}\n\n.operatorTabs {\n  display: grid;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: #d8deea;\n  cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n  background: #35415b;\n  border-color: #9baee0;\n  color: #ffffff;\n}\n\n.twoInputGrid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.inListArea {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.inAddRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.inValueRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.previewWhere {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #465169;\n  background: #1e2430;\n  color: #aeb6ca;\n  font-size: 13px;\n}\n\n.previewWhere span {\n  display: block;\n  margin-top: 6px;\n  color: #ffffff;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n  margin-top: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1px solid #465169;\n  background: #202637;\n}\n\n.optionalRuleTitle {\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #c6ccda;\n}\n\n.bulkActionBar {\n  min-height: 42px;\n  padding: 8px 10px;\n  border-radius: 9px;\n  border: 1px solid #59657d;\n  background: #202637;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: #d8deea;\n  font-size: 13px;\n}\n\n.dangerButtonSmall {\n  min-height: 30px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #985565;\n  background: #4a2430;\n  color: #ffc4cc;\n  cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n  background: #633040;\n}\n\n.selectCheckbox {\n  width: 16px;\n  height: 16px;\n  accent-color: #9baee0;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.groupIdentity {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.groupName {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.groupId {\n  color: #aeb6ca;\n  font-size: 12px;\n  font-family: Consolas, \"Courier New\", monospace;\n  overflow-wrap: anywhere;\n}\n\n.groupMembers {\n  margin-top: 2px;\n  color: #8fa3cf;\n  font-size: 12px;\n}\n\n.groupIdCopyButton {\n  width: fit-content;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #aeb6ca;\n  font-size: 12px;\n  line-height: 1.35;\n  font-family: Consolas, \"Courier New\", monospace;\n  text-align: left;\n  overflow-wrap: anywhere;\n  cursor: pointer;\n  transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n.settingNotice {\n  position: fixed;\n  top: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 11000;\n  min-width: 210px;\n  padding: 11px 18px;\n  border-radius: 9px;\n  border: 1px solid #7185ae;\n  background: #273149;\n  color: #ffffff;\n  font-size: 13px;\n  text-align: center;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n  pointer-events: none;\n}\n\n.globalSettingActions {\n  flex-shrink: 0;\n  min-height: 66px;\n  padding: 13px 22px;\n  border-top: 1px solid #3a4050;\n  background: #20232c;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.saveState {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.saveState.changed {\n  color: #f1c27d;\n}\n\n.globalSettingButtons {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n  height: 38px;\n  padding: 0 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n  border: 1px solid #59657d;\n  background: #293148;\n  color: #ffffff;\n}\n\n.applyConfigButton {\n  border: 1px solid #728ac3;\n  background: #385083;\n  color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n  background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n  background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n\n.staticSelectionBar {\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  min-height: 46px;\n  margin-bottom: 2px;\n  backdrop-filter: blur(6px);\n}\n\n.staticSelectionBar.emptySelection {\n  border-color: #3b4356;\n  background: #1f2532;\n  color: #8790a5;\n}\n\n.staticSelectionBar b {\n  color: #ffffff;\n}\n\n.staticSelectionBar.emptySelection b {\n  color: #aeb6ca;\n}\n\n.combinedSelectionBar {\n  align-items: center;\n}\n\n.selectionCounters,\n.selectionActions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.selectionCounters span {\n  white-space: nowrap;\n}\n\n.dangerButtonSmall:disabled {\n  opacity: 0.42;\n  cursor: default;\n  background: #2a2230;\n  border-color: #554350;\n  color: #9a8590;\n}\n\n.dangerButtonSmall:hover:disabled {\n  background: #2a2230;\n}\n\n.bottomAccessPanel {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.bottomSelectionActions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.bottomAccessPanel .saveState {\n  white-space: nowrap;\n}\n\n.selectCheckbox {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 1px solid #697795;\n  background: #1e2430;\n  cursor: pointer;\n  flex-shrink: 0;\n  display: inline-grid;\n  place-content: center;\n  transition: 0.18s ease;\n}\n\n.selectCheckbox:hover:not(:disabled) {\n  border-color: #a9b9e0;\n  background: #273149;\n}\n\n.selectCheckbox:checked {\n  border-color: #9baee0;\n  background: #3d527d;\n}\n\n.selectCheckbox:checked::after {\n  content: \"\";\n  width: 9px;\n  height: 5px;\n  border-left: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff;\n  transform: rotate(-45deg) translate(1px, -1px);\n}\n\n.selectCheckbox:disabled {\n  cursor: default;\n  opacity: 0.9;\n  border-color: #7484a8;\n  background: #34476d;\n}\n\n.groupRow.lockedGroup {\n  border-color: #6e7fa6;\n  background: #29344c;\n}\n\n.groupRow.lockedGroup .groupActions {\n  opacity: 0.45;\n}\n\n@media (max-width: 820px) {\n  .globalSettingActions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .globalSettingButtons {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n.iconButton,\n.miniIconButton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  line-height: 1;\n}\n\n.buttonSvgIcon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.miniIconButton .buttonSvgIcon {\n  width: 13px;\n  height: 13px;\n}\n\n.iconButton:not(.danger),\n.miniIconButton:not(.danger) {\n  color: #d8deea;\n}\n\n.sideSearchInput,\n.groupSearchInput {\n  width: 100%;\n  min-height: 36px;\n  padding: 0 11px;\n  border-radius: 8px;\n  border: 1px solid #4b5670;\n  background: #1d2330;\n  color: #ffffff;\n  outline: none;\n  font-size: 13px;\n}\n\n.sideSearchInput:focus,\n.groupSearchInput:focus {\n  border-color: #9baee0;\n}\n\n.groupSearchInput {\n  margin-top: 14px;\n}\n\n.modalItemMeta {\n  margin-top: 9px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n  color: #8fa3cf;\n  font-size: 12px;\n}\n\n.warningPill {\n  padding: 2px 7px;\n  border-radius: 999px;\n  border: 1px solid #856a35;\n  background: rgba(132, 93, 25, 0.22);\n  color: #f2c678;\n}\n\n.operatorPill {\n  margin-left: 8px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: #d8deea;\n  font-size: 11px;\n  text-transform: uppercase;\n}\n\n.operator-equal {\n  border-color: #6e83b8;\n  color: #c9d7ff;\n}\n\n.operator-range {\n  border-color: #6f9070;\n  color: #c8f2c9;\n}\n\n.operator-include {\n  border-color: #8c7ab8;\n  color: #e0d2ff;\n}\n\n.operator-like {\n  border-color: #9a7a5a;\n  color: #ffd7b5;\n}\n\n.ruleWarnings {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.ruleWarnings span {\n  padding: 3px 8px;\n  border-radius: 999px;\n  border: 1px solid #82603b;\n  background: rgba(130, 96, 59, 0.2);\n  color: #f2c678;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.bottomAccessPanel {\n  min-width: 0;\n}\n\n.whereToggleButton {\n  min-height: 30px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #56627c;\n  background: #1f2638;\n  color: #d8deea;\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.whereToggleButton:hover {\n  background: #303a56;\n}\n\n.bottomWherePreview {\n  position: absolute;\n  left: 22px;\n  right: 22px;\n  bottom: 74px;\n  max-height: 155px;\n  border-radius: 10px;\n  border: 1px solid #465169;\n  background: #171c27;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.34);\n  overflow: hidden;\n}\n\n.bottomWhereHeader {\n  min-height: 36px;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #30394d;\n  color: #c6ccda;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.bottomWhereHeader button {\n  min-height: 26px;\n  padding: 0 9px;\n  border-radius: 7px;\n  border: 1px solid #59657d;\n  background: #293148;\n  color: #ffffff;\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.bottomWhereHeader button:hover {\n  background: #3b4868;\n}\n\n.bottomWherePreview pre {\n  margin: 0;\n  padding: 12px;\n  max-height: 118px;\n  overflow: auto;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: 1.45;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  font-family: Consolas, \"Courier New\", monospace;\n}\n\n.modalRightPanel {\n  position: relative;\n}\n\n.joinOperatorControl {\n  min-height: 32px;\n  padding: 4px;\n  border: 1px solid #59657d;\n  border-radius: 8px;\n  background: #1e2430;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #aeb6ca;\n  font-size: 12px;\n}\n\n.joinOperatorControl span {\n  padding: 0 7px;\n  white-space: nowrap;\n}\n\n.joinOperatorControl button {\n  height: 24px;\n  padding: 0 9px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: #d8deea;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.joinOperatorControl button:hover,\n.joinOperatorControl button.active {\n  border-color: #9baee0;\n  background: #35415b;\n  color: #ffffff;\n}\n\n.modalItemInfoLine {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.modalItemCondition {\n  min-width: 0;\n  color: #aeb6ca !important;\n  font-weight: 500 !important;\n  overflow-wrap: anywhere;\n}\n\n.modalItemCondition b {\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.modalItemCount {\n  flex-shrink: 0;\n  color: #8fa3cf !important;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: normal;\n  text-align: right;\n}\n\n.groupIdTitleLine {\n  min-width: 0;\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.groupTitleAfterId {\n  min-width: 0;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.ruleModeRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: start;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.ruleModeRow .operatorTabs {\n  margin-bottom: 0;\n}\n\n.notToggleButton {\n  height: 36px;\n  min-width: 58px;\n  padding: 0 12px;\n  border-radius: 8px;\n  border: 1px solid #6d5d76;\n  background: #1e2430;\n  color: #d8deea;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  transition: 0.18s ease;\n}\n\n.notToggleButton:hover {\n  border-color: #c59be0;\n  background: #2b2638;\n  color: #ffffff;\n}\n\n.notToggleButton.active {\n  border-color: #d1a7ef;\n  background: #49345f;\n  color: #ffffff;\n  box-shadow: 0 0 0 1px rgba(209, 167, 239, 0.18) inset;\n}\n\n@media (max-width: 620px) {\n  .ruleModeRow {\n    grid-template-columns: 1fr;\n  }\n  .notToggleButton {\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dashboard-template-setting,
.dashboard-template-setting * {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.dashboard-template-setting {
  width: 100%;
  padding: 16px;
  line-height: 1.5;
}

.setting-section {
  width: 100%;
}

.setting-section + .setting-section {
  margin-top: 16px;
}

.main-layer-setting-section {
  padding: 14px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.02);
}

.setting-section-title {
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
}

.setting-section-description {
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 12px;
  line-height: 1.4;
}

.main-layer-selector {
  width: 100%;
}

.access-setting-section {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Fire Portal/src/setting/setting.css","webpack://./your-extensions/widgets/Fire%20Portal/src/setting/setting.css"],"names":[],"mappings":"AAAA;;EAEI,sBAAA;EACA,8BAAA;ACCJ;;ADEA;EACI,WAAA;EACA,aAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,WAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,aAAA;EACA,qCAAA;EACA,kBAAA;EACA,+BAAA;ACCJ;;ADEA;EACI,kBAAA;EACA,eAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,mBAAA;EACA,0BAAA;EACA,eAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,WAAA;ACCJ;;ADEA;EACI,WAAA;ACCJ","sourcesContent":[".dashboard-template-setting,\n.dashboard-template-setting * {\n    box-sizing: border-box;\n    font-family: Arial, sans-serif;\n}\n\n.dashboard-template-setting {\n    width: 100%;\n    padding: 16px;\n    line-height: 1.5;\n}\n\n.setting-section {\n    width: 100%;\n}\n\n.setting-section + .setting-section {\n    margin-top: 16px;\n}\n\n.main-layer-setting-section {\n    padding: 14px;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 8px;\n    background: rgba(0, 0, 0, 0.02);\n}\n\n.setting-section-title {\n    margin-bottom: 4px;\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.setting-section-description {\n    margin-bottom: 10px;\n    color: rgba(0, 0, 0, 0.65);\n    font-size: 12px;\n    line-height: 1.4;\n}\n\n.main-layer-selector {\n    width: 100%;\n}\n\n.access-setting-section {\n    width: 100%;\n}\n",".dashboard-template-setting,\n.dashboard-template-setting * {\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n}\n\n.dashboard-template-setting {\n  width: 100%;\n  padding: 16px;\n  line-height: 1.5;\n}\n\n.setting-section {\n  width: 100%;\n}\n\n.setting-section + .setting-section {\n  margin-top: 16px;\n}\n\n.main-layer-setting-section {\n  padding: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.02);\n}\n\n.setting-section-title {\n  margin-bottom: 4px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.setting-section-description {\n  margin-bottom: 10px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 12px;\n  line-height: 1.4;\n}\n\n.main-layer-selector {\n  width: 100%;\n}\n\n.access-setting-section {\n  width: 100%;\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.css"
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.css ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./AccessSetting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.tsx"
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.tsx ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccessSetting),
/* harmony export */   defaultAccessConfig: () => (/* binding */ defaultAccessConfig)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _AccessSetting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessSetting.css */ "./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.css");
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
const POPUP_FIELD_ACCESS_ID = "__popup_field_access__";
const EditIcon = () => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", { className: "buttonSvgIcon", viewBox: "0 0 20 20", "aria-hidden": "true" },
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M17.519531 0.078125 C17.234375 0.136719 16.917969 0.277344 16.691406 0.449219 C16.566406 0.539062 16.203125 0.882812 15.878906 1.207031 L15.292969 1.796875 L16.769531 3.269531 L18.242188 4.746094 L18.867188 4.121094 C19.214844 3.777344 19.558594 3.398438 19.640625 3.28125 C20.195312 2.445312 20.089844 1.371094 19.378906 0.660156 C18.882812 0.164062 18.1875 -0.0546875 17.519531 0.078125 Z" }),
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M11.066406 6.023438 C8.390625 8.703125 7.734375 9.382812 7.703125 9.492188 C7.683594 9.566406 7.539062 10.277344 7.382812 11.074219 C7.191406 12.035156 7.105469 12.554688 7.121094 12.628906 C7.15625 12.765625 7.273438 12.882812 7.410156 12.917969 C7.558594 12.953125 10.539062 12.359375 10.691406 12.265625 C10.75 12.226562 12.277344 10.71875 14.082031 8.910156 L17.363281 5.625 L15.898438 4.160156 C15.09375 3.355469 14.425781 2.695312 14.414062 2.695312 C14.402344 2.695312 12.898438 4.195312 11.066406 6.023438 Z" }),
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M2.042969 3.417969 C1.292969 3.554688 0.597656 4.085938 0.257812 4.785156 C-0.015625 5.347656 -0.00390625 4.953125 0.0078125 11.835938 L0.0195312 18.027344 L0.105469 18.28125 C0.234375 18.65625 0.457031 19.007812 0.742188 19.296875 C1.035156 19.589844 1.324219 19.769531 1.707031 19.902344 L1.972656 20 L14.644531 20 L14.949219 19.902344 C15.734375 19.65625 16.351562 19 16.589844 18.160156 C16.65625 17.925781 16.660156 17.671875 16.660156 14.273438 L16.660156 10.636719 L16.542969 10.449219 C16.371094 10.171875 16.082031 10.023438 15.769531 10.050781 C15.496094 10.074219 15.28125 10.203125 15.128906 10.4375 L15.019531 10.601562 L15 14.195312 C14.980469 17.484375 14.976562 17.804688 14.914062 17.914062 C14.820312 18.085938 14.597656 18.269531 14.425781 18.320312 C14.320312 18.351562 12.511719 18.359375 8.238281 18.351562 L2.199219 18.339844 L2.046875 18.234375 C1.964844 18.175781 1.851562 18.0625 1.796875 17.980469 L1.699219 17.835938 L1.6875 11.75 C1.679688 5.816406 1.679688 5.660156 1.753906 5.515625 C1.796875 5.4375 1.878906 5.324219 1.941406 5.265625 C2.1875 5.027344 2.015625 5.039062 5.804688 5.039062 C8.433594 5.039062 9.308594 5.027344 9.429688 4.992188 C9.652344 4.925781 9.894531 4.671875 9.957031 4.441406 C10.0625 4.070312 9.90625 3.679688 9.578125 3.488281 L9.394531 3.378906 L5.859375 3.371094 C3.078125 3.367188 2.265625 3.375 2.042969 3.417969 Z" })));
const TrashIcon = () => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", { className: "buttonSvgIcon", viewBox: "0 0 20 20", "aria-hidden": "true" },
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M7.933594 1.9375 C7.609375 2.023438 7.289062 2.214844 7.058594 2.457031 C6.808594 2.714844 6.699219 2.925781 6.527344 3.445312 C6.386719 3.867188 6.203125 4.121094 5.921875 4.269531 C5.765625 4.351562 5.714844 4.355469 4.230469 4.375 C2.753906 4.394531 2.695312 4.398438 2.589844 4.476562 C2.207031 4.761719 2.207031 5.238281 2.589844 5.523438 L2.699219 5.605469 L17.300781 5.605469 L17.410156 5.523438 C17.792969 5.238281 17.792969 4.761719 17.410156 4.476562 C17.304688 4.398438 17.246094 4.394531 15.769531 4.375 C14.285156 4.355469 14.234375 4.351562 14.078125 4.269531 C13.796875 4.121094 13.613281 3.867188 13.472656 3.445312 C13.300781 2.925781 13.191406 2.714844 12.941406 2.457031 C12.703125 2.207031 12.390625 2.023438 12.050781 1.933594 C11.71875 1.847656 8.253906 1.851562 7.933594 1.9375 Z" }),
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { d: "M4.121094 6.488281 C4.058594 6.503906 3.953125 6.566406 3.890625 6.625 C3.648438 6.851562 3.648438 6.640625 3.90625 10.496094 C4.179688 14.597656 4.210938 14.929688 4.351562 15.609375 C4.664062 17.097656 5.480469 17.824219 7.089844 18.050781 C7.546875 18.113281 11.496094 18.144531 12.324219 18.089844 C13.78125 17.992188 14.527344 17.6875 15.0625 16.976562 C15.398438 16.535156 15.570312 16.074219 15.699219 15.308594 C15.816406 14.613281 15.835938 14.371094 16.09375 10.5 C16.269531 7.871094 16.316406 6.96875 16.285156 6.886719 C16.222656 6.71875 16.015625 6.527344 15.851562 6.480469 C15.574219 6.40625 15.238281 6.566406 15.132812 6.820312 C15.09375 6.910156 15.003906 8.039062 14.84375 10.457031 C14.5625 14.679688 14.519531 15.113281 14.347656 15.644531 C14.1875 16.148438 13.894531 16.488281 13.492188 16.640625 C12.957031 16.839844 12.710938 16.855469 10 16.855469 C7.289062 16.855469 7.042969 16.839844 6.507812 16.640625 C6.105469 16.488281 5.8125 16.148438 5.652344 15.644531 C5.480469 15.113281 5.4375 14.679688 5.15625 10.457031 C4.996094 8.058594 4.90625 6.910156 4.867188 6.824219 C4.800781 6.664062 4.691406 6.570312 4.503906 6.5 C4.332031 6.441406 4.285156 6.4375 4.121094 6.488281 Z" })));
const makeId = () => {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
};
const defaultAccessConfig = {
    fullAccessGroups: [],
    fullAccessUsers: [],
    rules: [],
    fieldJoinOperator: "and",
    popupFieldAccess: {
        enabled: false,
        inverted: false,
        fields: [],
        groups: [],
        users: [],
    },
};
const knownFieldTypes = {
    objectid: "number", uniqueid: "string", coordinate: "string", region: "string", district: "string",
    fire_date: "string", year: "string", areaha: "number", region_id: "string", distric_id: "string",
    mfy_id: "string", type_id: "string", created_date: "date", inspector_name: "string",
    inspection_date: "date", inspection_result: "string", fire_present: "boolean", notes: "string",
    photo_paths: "string", photo_uploaded: "boolean", court_decision_uploaded: "boolean",
    damage_amount: "number", fine_amount: "number", dalolatnoma_path: "string", sud_qarori_path: "string",
    inspection_created_at: "date", inspection_updated_at: "date", inspection_uniqueid: "string",
};
const getKnownFieldType = (field) => { var _a; return (_a = knownFieldTypes[String(field || "").trim().toLowerCase()]) !== null && _a !== void 0 ? _a : "string"; };
const quoteValue = (value, fieldType = "string") => {
    const trimmed = value.trim();
    if (fieldType === "number") {
        return /^-?\d+(\.\d+)?$/.test(trimmed) ? trimmed : "0";
    }
    if (fieldType === "boolean") {
        return ["true", "1", "yes", "ha", "да"].includes(trimmed.toLowerCase()) ? "1" : "0";
    }
    if (fieldType === "date") {
        return `DATE '${trimmed.replace(/'/g, "''")}'`;
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
    if (operator === "before")
        return "before";
    if (operator === "after")
        return "after";
    if (operator === "eq")
        return "equal";
    if (operator === "between")
        return "range";
    if (operator === "in")
        return "include";
    return "equal";
};
const buildRuleWhere = (field, rule, fieldType = "string") => {
    var _a, _b, _c, _d, _e, _f, _g;
    let where = "1=0";
    if (rule.operator === "equal") {
        where = `${field} = ${quoteValue((_a = rule.value) !== null && _a !== void 0 ? _a : "", fieldType)}`;
    }
    if (rule.operator === "range") {
        where = `${field} BETWEEN ${quoteValue((_b = rule.from) !== null && _b !== void 0 ? _b : "", fieldType)} AND ${quoteValue((_c = rule.to) !== null && _c !== void 0 ? _c : "", fieldType)}`;
    }
    if (rule.operator === "include") {
        const values = (_d = rule.values) !== null && _d !== void 0 ? _d : [];
        where = `${field} IN (${values.map((value) => quoteValue(value, fieldType)).join(", ")})`;
    }
    if (rule.operator === "like") {
        where = `${field} LIKE ${quoteValue((_e = rule.value) !== null && _e !== void 0 ? _e : "", fieldType)}`;
    }
    if (rule.operator === "before")
        where = `${field} < ${quoteValue((_f = rule.value) !== null && _f !== void 0 ? _f : "", fieldType)}`;
    if (rule.operator === "after")
        where = `${field} > ${quoteValue((_g = rule.value) !== null && _g !== void 0 ? _g : "", fieldType)}`;
    return rule.isNot ? `NOT (${where})` : where;
};
const wrapWherePart = (value, shouldWrap) => {
    return shouldWrap ? `(${value})` : value;
};
const buildWhereForGroup = (config, groupId) => {
    const joinWord = config.fieldJoinOperator === "or" ? "OR" : "AND";
    const fieldParts = [];
    config.rules.forEach((field) => {
        const ruleParts = field.rules
            .filter((rule) => rule.groups.includes(groupId))
            .map((rule) => { var _a; return buildRuleWhere(field.field, rule, (_a = field.fieldType) !== null && _a !== void 0 ? _a : getKnownFieldType(field.field)); });
        if (ruleParts.length === 1) {
            fieldParts.push(ruleParts[0]);
        }
        if (ruleParts.length > 1) {
            fieldParts.push(`(${ruleParts.join(" OR ")})`);
        }
    });
    if (fieldParts.length === 0)
        return "1=0";
    return fieldParts
        .map((part) => wrapWherePart(part, fieldParts.length > 1 && /\sOR\s/.test(part)))
        .join(` ${joinWord} `);
};
const getRuleAccessGroupIds = (config) => {
    return Array.from(new Set(config.rules.flatMap((field) => field.rules.flatMap((rule) => rule.groups)))).sort();
};
const normalizeLoadedConfig = (data) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const fieldJoinOperator = (data === null || data === void 0 ? void 0 : data.fieldJoinOperator) === "or" ? "or" : "and";
    const legacyPopupField = ((_a = data === null || data === void 0 ? void 0 : data.popupFieldAccess) === null || _a === void 0 ? void 0 : _a.enabled) === true
        ? String(((_b = data === null || data === void 0 ? void 0 : data.popupFieldAccess) === null || _b === void 0 ? void 0 : _b.field) || "").trim()
        : "";
    const popupFields = Array.isArray((_c = data === null || data === void 0 ? void 0 : data.popupFieldAccess) === null || _c === void 0 ? void 0 : _c.fields)
        ? data.popupFieldAccess.fields
            .map((item) => String(item).trim())
            .filter(Boolean)
        : legacyPopupField
            ? [legacyPopupField]
            : [];
    return {
        fullAccessGroups: Array.isArray(data === null || data === void 0 ? void 0 : data.fullAccessGroups)
            ? data.fullAccessGroups.map((item) => String(item))
            : [],
        fullAccessUsers: Array.isArray(data === null || data === void 0 ? void 0 : data.fullAccessUsers)
            ? data.fullAccessUsers.map((item) => String(item))
            : [],
        popupFieldAccess: {
            enabled: ((_d = data === null || data === void 0 ? void 0 : data.popupFieldAccess) === null || _d === void 0 ? void 0 : _d.enabled) === true,
            inverted: ((_e = data === null || data === void 0 ? void 0 : data.popupFieldAccess) === null || _e === void 0 ? void 0 : _e.inverted) === true,
            fields: Array.from(new Set(popupFields)),
            groups: Array.isArray((_f = data === null || data === void 0 ? void 0 : data.popupFieldAccess) === null || _f === void 0 ? void 0 : _f.groups)
                ? data.popupFieldAccess.groups.map((item) => String(item))
                : [],
            users: Array.isArray((_g = data === null || data === void 0 ? void 0 : data.popupFieldAccess) === null || _g === void 0 ? void 0 : _g.users)
                ? data.popupFieldAccess.users.map((item) => String(item))
                : [],
        },
        rules: Array.isArray(data === null || data === void 0 ? void 0 : data.rules)
            ? data.rules.map((fieldItem) => ({
                id: fieldItem.id || makeId(),
                title: fieldItem.title || "",
                field: fieldItem.field || "",
                fieldType: fieldItem.fieldType || getKnownFieldType(fieldItem.field),
                rules: Array.isArray(fieldItem.rules)
                    ? fieldItem.rules.map((rule) => ({
                        id: rule.id || makeId(),
                        operator: normalizeOperator(rule.operator),
                        isNot: rule.isNot === true,
                        value: rule.value,
                        from: rule.from,
                        to: rule.to,
                        values: Array.isArray(rule.values)
                            ? rule.values.map((item) => String(item))
                            : [],
                        groups: Array.isArray(rule.groups)
                            ? rule.groups.map((item) => String(item))
                            : [],
                        users: Array.isArray(rule.users)
                            ? rule.users.map((item) => String(item))
                            : [],
                    }))
                    : [],
            }))
            : [],
        fieldJoinOperator,
    };
};
const cloneAccessConfig = (data) => {
    return normalizeLoadedConfig(JSON.parse(JSON.stringify(data)));
};
const getInitialAccessConfig = (widgetConfig) => {
    const storedConfig = widgetConfig === null || widgetConfig === void 0 ? void 0 : widgetConfig.accessConfig;
    if (!storedConfig) {
        return cloneAccessConfig(defaultAccessConfig);
    }
    const plainConfig = typeof storedConfig.asMutable === "function"
        ? storedConfig.asMutable({ deep: true })
        : storedConfig;
    return normalizeLoadedConfig(plainConfig);
};
const getConfigGroupIds = (config) => {
    var _a, _b;
    const groupIds = [
        ...config.fullAccessGroups,
        ...((_b = (_a = config.popupFieldAccess) === null || _a === void 0 ? void 0 : _a.groups) !== null && _b !== void 0 ? _b : []),
        ...config.rules.flatMap((field) => field.rules.flatMap((rule) => rule.groups)),
    ];
    return Array.from(new Set(groupIds)).sort();
};
const getConfigUserIds = (config) => {
    var _a, _b;
    const userIds = [
        ...config.fullAccessUsers,
        ...((_b = (_a = config.popupFieldAccess) === null || _a === void 0 ? void 0 : _a.users) !== null && _b !== void 0 ? _b : []),
        ...config.rules.flatMap((field) => field.rules.flatMap((rule) => rule.users)),
    ];
    return Array.from(new Set(userIds)).sort();
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
                usersCount = usersResponse.data.total;
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
const getPortalUserInfo = (esriRequest, portalUrl, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const toInfo = (data) => {
        if (!data || data.error)
            return null;
        if (!data.username && !data.id && !data.userId)
            return null;
        const resolvedId = String(data.id || data.userId || userId);
        const username = data.username ? String(data.username) : undefined;
        if (!resolvedId && !username)
            return null;
        return {
            id: userId,
            username,
            fullName: data.fullName ? String(data.fullName) : undefined,
        };
    };
    try {
        const directResponse = yield esriRequest(`${portalUrl}/sharing/rest/community/users/${encodeURIComponent(userId)}`, { query: { f: "json" }, responseType: "json" });
        const directInfo = toInfo(directResponse.data);
        if (directInfo)
            return directInfo;
        const searchResponse = yield esriRequest(`${portalUrl}/sharing/rest/community/users`, {
            query: { f: "json", q: userId, num: 20 },
            responseType: "json",
        });
        const candidates = Array.isArray((_a = searchResponse.data) === null || _a === void 0 ? void 0 : _a.results)
            ? searchResponse.data.results
            : [];
        const match = candidates.find((item) => [item === null || item === void 0 ? void 0 : item.id, item === null || item === void 0 ? void 0 : item.userId, item === null || item === void 0 ? void 0 : item.username]
            .map((value) => String(value || ""))
            .includes(userId));
        const searchInfo = toInfo(match);
        if (searchInfo)
            return searchInfo;
    }
    catch (_b) {
        // Ниже возвращается безопасная заглушка.
    }
    return { id: userId, isUnavailable: true };
});
function AccessSetting(props) {
    var _a, _b, _c, _d, _e;
    const [showModal, setShowModal] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [config, setConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => { var _a; return normalizeLoadedConfig((_a = props.value) !== null && _a !== void 0 ? _a : defaultAccessConfig); });
    const [savedConfig, setSavedConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => { var _a; return normalizeLoadedConfig((_a = props.value) !== null && _a !== void 0 ? _a : defaultAccessConfig); });
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
    const [usersInfo, setUsersInfo] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState({});
    const [usersLoading, setUsersLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const groupIdsSignature = getConfigGroupIds(config).join("|");
    const userIdsSignature = getConfigUserIds(config).join("|");
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
                const [esriRequest] = (yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
                    "esri/request",
                ]));
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
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let isCancelled = false;
        const loadUsersInfo = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userIds = getConfigUserIds(config);
            if (userIds.length === 0) {
                setUsersInfo({});
                return;
            }
            const portalUrl = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.portalUrl;
            if (!portalUrl)
                return;
            setUsersLoading(true);
            try {
                const [esriRequest] = (yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
                    "esri/request",
                ]));
                const result = yield Promise.all(userIds.map((userId) => getPortalUserInfo(esriRequest, portalUrl, userId)));
                if (!isCancelled) {
                    setUsersInfo(result.reduce((acc, item) => {
                        acc[item.id] = item;
                        return acc;
                    }, {}));
                }
            }
            finally {
                if (!isCancelled)
                    setUsersLoading(false);
            }
        });
        void loadUsersInfo();
        return () => {
            isCancelled = true;
        };
    }, [userIdsSignature]);
    const [selectedId, setSelectedId] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(GLOBAL_ACCESS_ID);
    const [dialog, setDialog] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [selectedRuleIds, setSelectedRuleIds] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [selectedGroupKeys, setSelectedGroupKeys] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [formTitle, setFormTitle] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [formField, setFormField] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [formFieldType, setFormFieldType] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("string");
    const [formGroup, setFormGroup] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [formUser, setFormUser] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [popupGroupInput, setPopupGroupInput] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [popupUserInput, setPopupUserInput] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [popupFieldInput, setPopupFieldInput] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleOperator, setRuleOperator] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("equal");
    const [ruleIsNot, setRuleIsNot] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [ruleValue, setRuleValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleFrom, setRuleFrom] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleTo, setRuleTo] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [ruleValues, setRuleValues] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [newListValue, setNewListValue] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [fieldSearch, setFieldSearch] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [groupSearch, setGroupSearch] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [showWherePreview, setShowWherePreview] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const selectedField = selectedId === GLOBAL_ACCESS_ID || selectedId === POPUP_FIELD_ACCESS_ID
        ? null
        : ((_a = config.rules.find((item) => item.id === selectedId)) !== null && _a !== void 0 ? _a : null);
    const popupFieldAccess = (_b = config.popupFieldAccess) !== null && _b !== void 0 ? _b : defaultAccessConfig.popupFieldAccess;
    const updatePopupFieldAccess = (patch) => {
        setDraftConfig((previous) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return (Object.assign(Object.assign({}, previous), { popupFieldAccess: Object.assign({ enabled: ((_a = previous.popupFieldAccess) === null || _a === void 0 ? void 0 : _a.enabled) === true, inverted: ((_b = previous.popupFieldAccess) === null || _b === void 0 ? void 0 : _b.inverted) === true, fields: (_d = (_c = previous.popupFieldAccess) === null || _c === void 0 ? void 0 : _c.fields) !== null && _d !== void 0 ? _d : [], groups: (_f = (_e = previous.popupFieldAccess) === null || _e === void 0 ? void 0 : _e.groups) !== null && _f !== void 0 ? _f : [], users: (_h = (_g = previous.popupFieldAccess) === null || _g === void 0 ? void 0 : _g.users) !== null && _h !== void 0 ? _h : [] }, patch) }));
        });
    };
    const addPopupAccessFields = () => {
        const newFields = popupFieldInput
            .split(/[,;\n]+/)
            .map((field) => field.trim())
            .filter(Boolean);
        if (newFields.length === 0)
            return;
        const existing = new Set(popupFieldAccess.fields.map((field) => field.toLowerCase()));
        const uniqueNewFields = newFields.filter((field) => !existing.has(field.toLowerCase()));
        if (uniqueNewFields.length === 0) {
            showNotice("Такие столбцы уже добавлены");
            return;
        }
        updatePopupFieldAccess({ fields: [...popupFieldAccess.fields, ...uniqueNewFields] });
        setPopupFieldInput("");
    };
    const addPopupAccessGroup = () => {
        const groupId = popupGroupInput.trim();
        if (!groupId)
            return;
        if (popupFieldAccess.groups.includes(groupId)) {
            showNotice("Такая группа уже добавлена");
            return;
        }
        updatePopupFieldAccess({ groups: [...popupFieldAccess.groups, groupId] });
        setPopupGroupInput("");
    };
    const addPopupAccessUser = () => {
        const userId = popupUserInput.trim();
        if (!userId)
            return;
        if (popupFieldAccess.users.includes(userId)) {
            showNotice("Такой пользователь уже добавлен");
            return;
        }
        updatePopupFieldAccess({ users: [...popupFieldAccess.users, userId] });
        setPopupUserInput("");
    };
    const renderGroupIdentity = (groupId) => {
        var _a;
        const groupInfo = groupsInfo[groupId];
        const groupTitle = (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.title) !== null && _a !== void 0 ? _a : (groupsLoading ? "Загрузка..." : "Название недоступно");
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupIdentity" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupIdTitleLine" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "groupTitleAfterId" },
                    groupTitle,
                    " \u2014"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "groupIdCopyButton", title: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID", onClick: (event) => {
                        event.stopPropagation();
                        void copyGroupId(groupId);
                    } }, groupId)),
            (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.usersCount) !== null &&
                (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.usersCount) !== undefined && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupMembers" },
                "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ",
                groupInfo.usersCount))));
    };
    const renderUserIdentity = (userId) => {
        const userInfo = usersInfo[userId];
        const title = (userInfo === null || userInfo === void 0 ? void 0 : userInfo.fullName) || (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username) ||
            (usersLoading ? "Загрузка..." : "Пользователь не найден");
        const subtitle = (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username) && userInfo.username !== userId
            ? `${userInfo.username} — `
            : "";
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupIdentity userIdentity" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupIdTitleLine" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "groupTitleAfterId" },
                    title,
                    " \u2014"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "groupIdCopyButton", title: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", onClick: (event) => {
                        event.stopPropagation();
                        void copyGroupId(userId);
                    } },
                    subtitle,
                    userId))));
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
        setRuleIsNot(false);
        setRuleValue("");
        setRuleFrom("");
        setRuleTo("");
        setRuleValues([]);
        setNewListValue("");
    };
    const getRuleFromForm = () => {
        if (ruleOperator === "equal" || ruleOperator === "before" || ruleOperator === "after") {
            if (!ruleValue.trim())
                return null;
            return {
                id: makeId(),
                operator: ruleOperator,
                isNot: ruleIsNot,
                value: ruleValue.trim(),
                groups: [],
                users: [],
            };
        }
        if (ruleOperator === "range") {
            if (!ruleFrom.trim() || !ruleTo.trim())
                return null;
            return {
                id: makeId(),
                operator: "range",
                isNot: ruleIsNot,
                from: ruleFrom.trim(),
                to: ruleTo.trim(),
                groups: [],
                users: [],
            };
        }
        if (ruleOperator === "include") {
            const cleanValues = ruleValues.reduce((result, item) => {
                const value = item.trim();
                if (value && !result.includes(value)) {
                    result.push(value);
                }
                return result;
            }, []);
            if (cleanValues.length === 0)
                return null;
            return {
                id: makeId(),
                operator: "include",
                isNot: ruleIsNot,
                values: cleanValues,
                groups: [],
                users: [],
            };
        }
        if (ruleOperator === "like") {
            if (!ruleValue.trim())
                return null;
            return {
                id: makeId(),
                operator: "like",
                isNot: ruleIsNot,
                value: ruleValue.trim(),
                groups: [],
                users: [],
            };
        }
        return null;
    };
    const fillRuleForm = (rule) => {
        var _a, _b, _c, _d;
        setRuleOperator(rule.operator);
        setRuleIsNot(rule.isNot === true);
        setRuleValue((_a = rule.value) !== null && _a !== void 0 ? _a : "");
        setRuleFrom((_b = rule.from) !== null && _b !== void 0 ? _b : "");
        setRuleTo((_c = rule.to) !== null && _c !== void 0 ? _c : "");
        setRuleValues((_d = rule.values) !== null && _d !== void 0 ? _d : []);
        setNewListValue("");
    };
    const openAddField = () => {
        setFormTitle("");
        setFormField("");
        setFormFieldType("string");
        resetRuleForm();
        setDialog({ type: "addField" });
    };
    const openEditField = () => {
        var _a;
        if (!selectedField)
            return;
        setFormTitle(selectedField.title);
        setFormField(selectedField.field);
        setFormFieldType((_a = selectedField.fieldType) !== null && _a !== void 0 ? _a : getKnownFieldType(selectedField.field));
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
                fieldType: formFieldType,
                rules: firstRule ? [firstRule] : [],
            };
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: [...prev.rules, newField] })));
            setSelectedId(newField.id);
            resetSelection();
        }
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "editField") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((item) => item.id === dialog.payload.fieldId
                    ? Object.assign(Object.assign({}, item), { title: formTitle.trim(), field: formField.trim(), fieldType: formFieldType }) : item) })));
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
                            ? Object.assign(Object.assign({}, formRule), { id: rule.id, groups: rule.groups, users: rule.users }) : rule) }) : field) })));
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
    const autoSelectedGroupKeys = selectedField
        ? selectedField.rules.reduce((result, rule) => {
            if (!selectedRuleIds.includes(rule.id))
                return result;
            rule.groups.forEach((_, index) => {
                result.push(makeGroupKey(rule.id, index));
            });
            return result;
        }, [])
        : [];
    const effectiveSelectedGroupKeys = Array.from(new Set([...selectedGroupKeys, ...autoSelectedGroupKeys]));
    const selectedGroupsCount = selectedId === GLOBAL_ACCESS_ID
        ? selectedGroupKeys.length
        : effectiveSelectedGroupKeys.length;
    const filteredFields = config.rules.filter((item) => {
        const search = fieldSearch.trim().toLowerCase();
        if (!search)
            return true;
        return (item.title.toLowerCase().includes(search) ||
            item.field.toLowerCase().includes(search));
    });
    const groupMatchesSearch = (groupId) => {
        var _a;
        const search = groupSearch.trim().toLowerCase();
        if (!search)
            return true;
        const groupInfo = groupsInfo[groupId];
        return (groupId.toLowerCase().includes(search) ||
            ((_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.title) !== null && _a !== void 0 ? _a : "").toLowerCase().includes(search));
    };
    const userMatchesSearch = (userId) => {
        const search = groupSearch.trim().toLowerCase();
        if (!search)
            return true;
        const userInfo = usersInfo[userId];
        return [userId, userInfo === null || userInfo === void 0 ? void 0 : userInfo.username, userInfo === null || userInfo === void 0 ? void 0 : userInfo.fullName]
            .some((value) => String(value || "").toLowerCase().includes(search));
    };
    const getPreviewGroupLabel = (groupId) => {
        var _a;
        const groupInfo = groupsInfo[groupId];
        const groupTitle = (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.title) === null || _a === void 0 ? void 0 : _a.trim();
        if (!groupTitle)
            return groupId;
        return `${groupTitle} (${groupId})`;
    };
    const getPreviewUserLabel = (userId) => {
        const userInfo = usersInfo[userId];
        const name = (userInfo === null || userInfo === void 0 ? void 0 : userInfo.fullName) || (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username);
        return name ? `${name} (${userId})` : userId;
    };
    const buildConfigWherePreview = () => {
        const fullAccessLines = config.fullAccessGroups.length > 0
            ? config.fullAccessGroups.map((groupId) => `  ${getPreviewGroupLabel(groupId)}: 1=1`)
            : ["  —"];
        const ruleGroupIds = getRuleAccessGroupIds(config);
        const ruleAccessLines = ruleGroupIds.length > 0
            ? ruleGroupIds.map((groupId) => `  ${getPreviewGroupLabel(groupId)}: ${buildWhereForGroup(config, groupId)}`)
            : ["  —"];
        const fullUserAccessLines = config.fullAccessUsers.length > 0
            ? config.fullAccessUsers.map((userId) => `  ${getPreviewUserLabel(userId)}: 1=1`)
            : ["  —"];
        const ruleUserIds = Array.from(new Set(config.rules.flatMap((field) => field.rules.flatMap((rule) => rule.users)))).sort();
        const ruleUserAccessLines = ruleUserIds.length > 0
            ? ruleUserIds.map((userId) => {
                const parts = [];
                config.rules.forEach((field) => {
                    field.rules.forEach((rule) => {
                        var _a;
                        if (rule.users.includes(userId))
                            parts.push(`(${buildRuleWhere(field.field, rule, (_a = field.fieldType) !== null && _a !== void 0 ? _a : getKnownFieldType(field.field))})`);
                    });
                });
                return `  ${getPreviewUserLabel(userId)}: ${parts.join(" OR ") || "1=0"}`;
            })
            : ["  —"];
        return [
            "FULL ACCESS:",
            ...fullAccessLines,
            "RULE ACCESS:",
            ...ruleAccessLines,
            "FULL USER ACCESS:",
            ...fullUserAccessLines,
            "RULE USER ACCESS:",
            ...ruleUserAccessLines,
        ].join("\n");
    };
    const copyConfigWherePreview = () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield navigator.clipboard.writeText(buildConfigWherePreview());
            showNotice("WHERE скопирован");
        }
        catch (_a) {
            showNotice("Не удалось скопировать WHERE");
        }
    });
    const setFieldJoinOperator = (operator) => {
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fieldJoinOperator: operator })));
    };
    const getRuleWarnings = (field, rule) => {
        var _a, _b, _c, _d, _e, _f;
        const warnings = [];
        const fieldType = (_a = field.fieldType) !== null && _a !== void 0 ? _a : getKnownFieldType(field.field);
        const currentWhere = buildRuleWhere(field.field, rule, fieldType);
        const duplicates = field.rules.filter((item) => item.id !== rule.id && buildRuleWhere(field.field, item, fieldType) === currentWhere);
        if (duplicates.length > 0)
            warnings.push("Дублирует другое правило");
        if (rule.groups.length === 0 && rule.users.length === 0)
            warnings.push("Нет групп или пользователей доступа");
        if (rule.operator === "equal" && !((_b = rule.value) !== null && _b !== void 0 ? _b : "").trim()) {
            warnings.push("Пустое значение");
        }
        if (rule.operator === "like" && !((_c = rule.value) !== null && _c !== void 0 ? _c : "").trim()) {
            warnings.push("Пустое LIKE значение");
        }
        if (rule.operator === "include" && ((_d = rule.values) !== null && _d !== void 0 ? _d : []).length === 0) {
            warnings.push("IN без значений");
        }
        if (rule.operator === "range") {
            const from = Number(rule.from);
            const to = Number(rule.to);
            if (!((_e = rule.from) !== null && _e !== void 0 ? _e : "").trim() || !((_f = rule.to) !== null && _f !== void 0 ? _f : "").trim()) {
                warnings.push("Range заполнен не полностью");
            }
            else if (!Number.isNaN(from) && !Number.isNaN(to) && from > to) {
                warnings.push("Range не выполнится: от больше чем до");
            }
        }
        return warnings;
    };
    const getFieldWarningsCount = (field) => {
        return field.rules.reduce((total, rule) => total + getRuleWarnings(field, rule).length, 0);
    };
    const toggleGroupSelect = (key, isLocked = false) => {
        if (isLocked)
            return;
        setSelectedGroupKeys((prev) => prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]);
    };
    const deleteSelectedGroups = () => {
        const groupKeysForDelete = selectedId === GLOBAL_ACCESS_ID
            ? selectedGroupKeys
            : effectiveSelectedGroupKeys;
        if (groupKeysForDelete.length === 0)
            return;
        if (selectedId === GLOBAL_ACCESS_ID) {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fullAccessGroups: prev.fullAccessGroups.filter((_, index) => !groupKeysForDelete.includes(makeGlobalGroupKey(index))) })));
        }
        if (selectedField) {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                    ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => (Object.assign(Object.assign({}, rule), { groups: rule.groups.filter((_, index) => !groupKeysForDelete.includes(makeGroupKey(rule.id, index))) }))) }) : field) })));
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
            const targetRule = selectedField.rules.find((rule) => rule.id === dialog.payload.ruleId);
            if (targetRule === null || targetRule === void 0 ? void 0 : targetRule.groups.some((group) => group.trim() === formGroup.trim())) {
                showNotice("Такая группа уже добавлена");
                return;
            }
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
        setSelectedGroupKeys((prev) => prev.filter((key) => key !==
            makeGroupKey(dialog.payload.ruleId, dialog.payload.groupIndex)));
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
            if (config.fullAccessGroups.some((group) => group.trim() === formGroup.trim())) {
                showNotice("Такая группа уже добавлена");
                return;
            }
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
    const openAddUser = (ruleId) => {
        setFormUser("");
        setDialog({ type: "addUser", payload: { ruleId } });
    };
    const openEditUser = (ruleId, userIndex, userValue) => {
        setFormUser(userValue);
        setDialog({ type: "editUser", payload: { ruleId, userIndex } });
    };
    const saveUser = () => {
        if (!selectedField || !formUser.trim() || !(dialog === null || dialog === void 0 ? void 0 : dialog.payload))
            return;
        const nextUser = formUser.trim();
        if (dialog.type === "addUser") {
            const targetRule = selectedField.rules.find((rule) => rule.id === dialog.payload.ruleId);
            if (targetRule === null || targetRule === void 0 ? void 0 : targetRule.users.includes(nextUser)) {
                showNotice("Такой пользователь уже добавлен");
                return;
            }
        }
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => rule.id === dialog.payload.ruleId
                        ? Object.assign(Object.assign({}, rule), { users: dialog.type === "addUser"
                                ? [...rule.users, nextUser]
                                : rule.users.map((user, index) => index === dialog.payload.userIndex
                                    ? nextUser
                                    : user) }) : rule) }) : field) })));
        setDialog(null);
    };
    const deleteUser = () => {
        if (!selectedField || !(dialog === null || dialog === void 0 ? void 0 : dialog.payload))
            return;
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((field) => field.id === selectedField.id
                ? Object.assign(Object.assign({}, field), { rules: field.rules.map((rule) => rule.id === dialog.payload.ruleId
                        ? Object.assign(Object.assign({}, rule), { users: rule.users.filter((_, index) => index !== dialog.payload.userIndex) }) : rule) }) : field) })));
        setDialog(null);
    };
    const openAddGlobalUser = () => {
        setFormUser("");
        setDialog({ type: "addGlobalUser" });
    };
    const openEditGlobalUser = (userIndex, userValue) => {
        setFormUser(userValue);
        setDialog({ type: "editGlobalUser", payload: { userIndex } });
    };
    const saveGlobalUser = () => {
        const nextUser = formUser.trim();
        if (!nextUser)
            return;
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addGlobalUser" && config.fullAccessUsers.includes(nextUser)) {
            showNotice("Такой пользователь уже добавлен");
            return;
        }
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fullAccessUsers: (dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addGlobalUser"
                ? [...prev.fullAccessUsers, nextUser]
                : prev.fullAccessUsers.map((user, index) => { var _a; return index === ((_a = dialog === null || dialog === void 0 ? void 0 : dialog.payload) === null || _a === void 0 ? void 0 : _a.userIndex) ? nextUser : user; }) })));
        setDialog(null);
    };
    const deleteGlobalUser = () => {
        if (!(dialog === null || dialog === void 0 ? void 0 : dialog.payload))
            return;
        setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { fullAccessUsers: prev.fullAccessUsers.filter((_, index) => index !== dialog.payload.userIndex) })));
        setDialog(null);
    };
    const hasSameInValue = (values, value, ignoreIndex) => {
        const normalizedValue = value.trim();
        if (!normalizedValue)
            return false;
        return values.some((item, index) => {
            if (ignoreIndex !== undefined && index === ignoreIndex)
                return false;
            return item.trim() === normalizedValue;
        });
    };
    const addValueToInList = () => {
        const value = newListValue.trim();
        if (!value)
            return;
        if (hasSameInValue(ruleValues, value)) {
            showNotice("Такое значение уже добавлено");
            return;
        }
        setRuleValues((prev) => [...prev, value]);
        setNewListValue("");
    };
    const removeValueFromInList = (indexForRemove) => {
        setRuleValues((prev) => prev.filter((_, index) => index !== indexForRemove));
    };
    const updateValueInList = (indexForUpdate, value) => {
        const nextValue = value.trim();
        if (nextValue && hasSameInValue(ruleValues, nextValue, indexForUpdate)) {
            showNotice("Такое значение уже добавлено");
            return;
        }
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
        const nextConfig = cloneAccessConfig(config);
        props.onChange(nextConfig);
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
    const buildWhereForCurrentUser = (userGroups, userIds = []) => {
        const hasFullAccess = config.fullAccessGroups.some((group) => userGroups.includes(group)) ||
            config.fullAccessUsers.some((userId) => userIds.includes(userId));
        if (hasFullAccess)
            return "1=1";
        const allowedRules = [];
        config.rules.forEach((field) => {
            field.rules.forEach((rule) => {
                var _a;
                const hasRuleAccess = rule.groups.some((group) => userGroups.includes(group)) ||
                    rule.users.some((userId) => userIds.includes(userId));
                if (hasRuleAccess) {
                    allowedRules.push(`(${buildRuleWhere(field.field, rule, (_a = field.fieldType) !== null && _a !== void 0 ? _a : getKnownFieldType(field.field))})`);
                }
            });
        });
        return allowedRules.length > 0 ? allowedRules.join(" OR ") : "1=0";
    };
    const getPreviewFieldName = () => {
        var _a;
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addField") {
            return formField.trim();
        }
        return (_a = selectedField === null || selectedField === void 0 ? void 0 : selectedField.field) !== null && _a !== void 0 ? _a : "";
    };
    const getPreviewFieldType = () => {
        var _a, _b;
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addField")
            return formFieldType;
        return (_a = selectedField === null || selectedField === void 0 ? void 0 : selectedField.fieldType) !== null && _a !== void 0 ? _a : getKnownFieldType((_b = selectedField === null || selectedField === void 0 ? void 0 : selectedField.field) !== null && _b !== void 0 ? _b : "");
    };
    const renderRuleForm = () => {
        const previewFieldName = getPreviewFieldName();
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleModeRow" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "operatorTabs fourTabs" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "equal" ? "active" : "", onClick: () => setRuleOperator("equal") }, "Equal"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "range" ? "active" : "", onClick: () => setRuleOperator("range") }, "Range"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "include" ? "active" : "", onClick: () => setRuleOperator("include") }, "Include"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "like" ? "active" : "", onClick: () => setRuleOperator("like") }, "Like"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "before" ? "active" : "", onClick: () => setRuleOperator("before") }, "Before"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "after" ? "active" : "", onClick: () => setRuleOperator("after") }, "After")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: `notToggleButton ${ruleIsNot ? "active" : ""}`, onClick: () => setRuleIsNot((value) => !value), title: "\u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435" }, "NOT")),
            (ruleOperator === "equal" || ruleOperator === "like" || ruleOperator === "before" || ruleOperator === "after") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: ruleValue, onChange: (e) => setRuleValue(e.target.value) })),
            ruleOperator === "range" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "twoInputGrid" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u041E\u0442", value: ruleFrom, onChange: (e) => setRuleFrom(e.target.value) }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0414\u043E", value: ruleTo, onChange: (e) => setRuleTo(e.target.value) }))),
            ruleOperator === "include" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "inListArea" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "inAddRow" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: newListValue, onChange: (e) => setNewListValue(e.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: addValueToInList }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
                ruleValues.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyMini" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442")) : (ruleValues.map((value, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "inValueRow", key: `${value}_${index}` },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: value, onChange: (e) => updateValueInList(index, e.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => removeValueFromInList(index) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))))))),
            previewFieldName && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "previewWhere" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, "\u0418\u0442\u043E\u0433\u043E\u0432\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, (() => {
                    const tempRule = getRuleFromForm();
                    return tempRule
                        ? buildRuleWhere(previewFieldName, tempRule, getPreviewFieldType())
                        : `${previewFieldName} ...`;
                })())))));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingArea" },
        notice && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingNotice" }, notice),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingsContent" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlCard" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlHeader" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlTitle" }, (_c = props.title) !== null && _c !== void 0 ? _c : "Доступ к данным"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlDescription" }, (_d = props.description) !== null && _d !== void 0 ? _d : "Настройте группы и условия отображения объектов")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "default", size: "sm", className: "accessSettingsButton", onClick: () => setShowModal(true) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "accessSettingsButtonText" }, (_e = props.buttonLabel) !== null && _e !== void 0 ? _e : "Настройка доступа")))),
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
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "sideSearchInput", placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0438\u043B\u0438 \u043F\u043E\u043B\u044E", value: fieldSearch, onChange: (event) => setFieldSearch(event.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `modalItem ${selectedId === GLOBAL_ACCESS_ID ? "selected" : ""}`, onClick: () => selectLeftItem(GLOBAL_ACCESS_ID) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemTitle" }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemInfo modalItemInfoLine" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "modalItemCondition" },
                                "\u0423\u0441\u043B\u043E\u0432\u0438\u0435: ",
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("b", null, "1=1")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "modalItemCount" },
                                config.fullAccessGroups.length,
                                " \u0433\u0440\u0443\u043F\u043F \u00B7 ",
                                config.fullAccessUsers.length,
                                " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `modalItem ${selectedId === POPUP_FIELD_ACCESS_ID ? "selected" : ""}`, onClick: () => selectLeftItem(POPUP_FIELD_ACCESS_ID) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemTitle" }, "\u041F\u043E\u043B\u044F popup"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemInfo modalItemInfoLine" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "modalItemCondition" },
                                "\u0421\u0442\u043E\u043B\u0431\u0446\u044B: ",
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("b", null, popupFieldAccess.fields.length || "—")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "modalItemCount" }, popupFieldAccess.enabled
                                ? (popupFieldAccess.inverted ? "Инверсия" : "Ограничено")
                                : "Выключено"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "fieldList" },
                        filteredFields.map((item) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: item.id, className: `modalItem ${selectedId === item.id ? "selected" : ""}`, onClick: () => selectLeftItem(item.id) },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemTitle" }, item.title),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemInfo modalItemInfoLine" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "modalItemCondition" },
                                    "\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("b", null, item.field)),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "modalItemCount" },
                                    item.rules.length,
                                    " \u043F\u0440\u0430\u0432\u0438\u043B")),
                            getFieldWarningsCount(item) > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "modalItemMeta" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "warningPill" },
                                    getFieldWarningsCount(item),
                                    " warning")))))),
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
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightHeaderActions" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: openAddGlobalGroup }, "+ \u0413\u0440\u0443\u043F\u043F\u0430"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: openAddGlobalUser }, "+ \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "groupSearchInput", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0433\u0440\u0443\u043F\u043F\u044B \u0438\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", value: groupSearch, onChange: (event) => setGroupSearch(event.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rulesArea" }, config.fullAccessGroups.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (config.fullAccessGroups.map((group, index) => {
                            if (!groupMatchesSearch(group))
                                return null;
                            const groupKey = makeGlobalGroupKey(index);
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `groupRow ${selectedGroupKeys.includes(groupKey)
                                    ? "selectedGroup"
                                    : ""}`, key: `${group}_${index}` },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedGroupKeys.includes(groupKey), onChange: () => toggleGroupSelect(groupKey) }),
                                renderGroupIdentity(group),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupActions" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGlobalGroup(index, group) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(EditIcon, null)),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                            type: "deleteGlobalGroup",
                                            payload: {
                                                groupIndex: index,
                                            },
                                        }) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))));
                        }))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessEntitySectionTitle" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rulesArea usersArea" }, config.fullAccessUsers.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (config.fullAccessUsers.map((userId, index) => {
                            if (!userMatchesSearch(userId))
                                return null;
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupRow userRow", key: `${userId}_${index}` },
                                renderUserIdentity(userId),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupActions" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGlobalUser(index, userId) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(EditIcon, null)),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                            type: "deleteGlobalUser",
                                            payload: { userIndex: index },
                                        }) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))));
                        }))))) : selectedId === POPUP_FIELD_ACCESS_ID ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightHeader popupAccessHeader" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightTitle" }, "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u043E\u043B\u044F\u043C popup"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightField" }, "\u0421\u0442\u043E\u043B\u0431\u0446\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0432 popup-\u0437\u0430\u043F\u0440\u043E\u0441 \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0433\u0440\u0443\u043F\u043F")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessToggleGroup" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "popupAccessToggle" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: popupFieldAccess.enabled, onChange: (event) => updatePopupFieldAccess({ enabled: event.target.checked }) }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, popupFieldAccess.enabled ? "Включено" : "Выключено")),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: `popupAccessToggle ${popupFieldAccess.inverted ? "inverted" : ""}` },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: popupFieldAccess.inverted, disabled: !popupFieldAccess.enabled, onChange: (event) => updatePopupFieldAccess({ inverted: event.target.checked }) }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u0418\u043D\u0432\u0435\u0440\u0441\u0438\u044F")))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessNotice" }, !popupFieldAccess.enabled
                            ? "Настройка выключена: поля доступны всем пользователям с доступом к порталу."
                            : popupFieldAccess.inverted
                                ? "Инверсия включена: пользователи и группы из списка не получают выбранные поля, остальные получают."
                                : "Обычный режим: выбранные поля получают только пользователи и группы из списка, включая пользователей полного доступа."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "popupAccessSection popupAccessFieldsSection" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessEntitySectionTitle" }, "\u0421\u0442\u043E\u043B\u0431\u0446\u044B popup"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessAddRow" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", value: popupFieldInput, placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: photo_paths, dalolatnoma_path", onChange: (event) => setPopupFieldInput(event.target.value), onKeyDown: (event) => {
                                        if (event.key === "Enter")
                                            addPopupAccessFields();
                                    } }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "smallButton", onClick: addPopupAccessFields }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessFieldsList" }, popupFieldAccess.fields.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u0421\u0442\u043E\u043B\u0431\u0446\u044B \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : popupFieldAccess.fields.map((field, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessFieldRow", key: `${field}_${index}` },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("code", null, field),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "miniIconButton danger", onClick: () => updatePopupFieldAccess({
                                        fields: popupFieldAccess.fields.filter((_, itemIndex) => itemIndex !== index),
                                    }) },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null))))))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessGrid" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "popupAccessSection" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessEntitySectionTitle" }, popupFieldAccess.inverted ? "Группы без доступа" : "Разрешённые группы"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessAddRow" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", value: popupGroupInput, placeholder: "Portal group ID", onChange: (event) => setPopupGroupInput(event.target.value), onKeyDown: (event) => {
                                            if (event.key === "Enter")
                                                addPopupAccessGroup();
                                        } }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "smallButton", onClick: addPopupAccessGroup }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rulesArea popupAccessList" }, popupFieldAccess.groups.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : popupFieldAccess.groups.map((groupId, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupRow", key: `${groupId}_${index}` },
                                    renderGroupIdentity(groupId),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "miniIconButton danger", onClick: () => updatePopupFieldAccess({
                                            groups: popupFieldAccess.groups.filter((_, itemIndex) => itemIndex !== index),
                                        }) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null))))))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "popupAccessSection" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessEntitySectionTitle" }, popupFieldAccess.inverted ? "Пользователи без доступа" : "Разрешённые пользователи"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "popupAccessAddRow" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", value: popupUserInput, placeholder: "Portal user ID \u0438\u043B\u0438 username", onChange: (event) => setPopupUserInput(event.target.value), onKeyDown: (event) => {
                                            if (event.key === "Enter")
                                                addPopupAccessUser();
                                        } }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "smallButton", onClick: addPopupAccessUser }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rulesArea popupAccessList" }, popupFieldAccess.users.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : popupFieldAccess.users.map((userId, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupRow userRow", key: `${userId}_${index}` },
                                    renderUserIdentity(userId),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", className: "miniIconButton danger", onClick: () => updatePopupFieldAccess({
                                            users: popupFieldAccess.users.filter((_, itemIndex) => itemIndex !== index),
                                        }) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))))))))) : !selectedField ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "Empty")) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightHeader" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightTitle" }, selectedField.title),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightField" },
                                    "\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",
                                    selectedField.field)),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rightHeaderActions" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton", onClick: openEditField },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(EditIcon, null)),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton danger", onClick: () => setDialog({ type: "deleteField" }) },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "groupSearchInput", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0433\u0440\u0443\u043F\u043F\u044B \u0438\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0440\u0430\u0432\u0438\u043B", value: groupSearch, onChange: (event) => setGroupSearch(event.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "rulesArea" },
                            selectedField.rules.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (selectedField.rules.map((rule) => {
                                var _a;
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `ruleCard ${selectedRuleIds.includes(rule.id)
                                        ? "selectedRule"
                                        : ""}`, key: rule.id },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleHeader" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedRuleIds.includes(rule.id), onChange: () => toggleRuleSelect(rule.id) }),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleInfo" },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleLabel" },
                                                "\u0423\u0441\u043B\u043E\u0432\u0438\u0435",
                                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: `operatorPill operator-${rule.operator}` }, rule.isNot ? `NOT ${rule.operator}` : rule.operator)),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleValue" }, buildRuleWhere(selectedField.field, rule, (_a = selectedField.fieldType) !== null && _a !== void 0 ? _a : getKnownFieldType(selectedField.field))),
                                            getRuleWarnings(selectedField, rule).length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleWarnings" }, getRuleWarnings(selectedField, rule).map((warning) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { key: warning }, warning)))))),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleActions" },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: () => openAddGroup(rule.id) }, "+ \u0433\u0440\u0443\u043F\u043F\u0430"),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "smallButton", onClick: () => openAddUser(rule.id) }, "+ \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton", onClick: () => openEditRule(rule) },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(EditIcon, null)),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "iconButton danger", onClick: () => setDialog({
                                                    type: "deleteRule",
                                                    payload: {
                                                        ruleId: rule.id,
                                                    },
                                                }) },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupsArea" }, rule.groups.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyMini" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (rule.groups.map((group, index) => {
                                        if (!groupMatchesSearch(group))
                                            return null;
                                        const groupKey = makeGroupKey(rule.id, index);
                                        const isGroupLocked = selectedRuleIds.includes(rule.id);
                                        const isGroupSelected = isGroupLocked || selectedGroupKeys.includes(groupKey);
                                        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `groupRow ${isGroupSelected ? "selectedGroup" : ""} ${isGroupLocked ? "lockedGroup" : ""}`, key: `${group}_${index}` },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: isGroupSelected, disabled: isGroupLocked, title: isGroupLocked
                                                    ? "Группа выбрана вместе с правилом"
                                                    : undefined, onChange: () => toggleGroupSelect(groupKey, isGroupLocked) }),
                                            renderGroupIdentity(group),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupActions" },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGroup(rule.id, index, group) },
                                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(EditIcon, null)),
                                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                                        type: "deleteGroup",
                                                        payload: {
                                                            ruleId: rule.id,
                                                            groupIndex: index,
                                                        },
                                                    }) },
                                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))));
                                    }))),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "usersArea ruleUsersArea" }, rule.users.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyMini" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (rule.users.map((userId, index) => {
                                        if (!userMatchesSearch(userId))
                                            return null;
                                        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupRow userRow", key: `${userId}_${index}` },
                                            renderUserIdentity(userId),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "groupActions" },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditUser(rule.id, index, userId) },
                                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(EditIcon, null)),
                                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                                        type: "deleteUser",
                                                        payload: {
                                                            ruleId: rule.id,
                                                            userIndex: index,
                                                        },
                                                    }) },
                                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))));
                                    })))));
                            })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "addRuleButton", onClick: openAddRule }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "globalSettingActions" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bottomAccessPanel" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bottomSelectionActions" },
                                selectedField && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButtonSmall", type: "button", onClick: deleteSelectedRules, disabled: selectedRuleIds.length === 0 },
                                    "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ",
                                    selectedRuleIds.length,
                                    " \u043F\u0440\u0430\u0432\u0438\u043B")),
                                selectedId !== POPUP_FIELD_ACCESS_ID && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButtonSmall", type: "button", onClick: deleteSelectedGroups, disabled: selectedGroupsCount === 0 },
                                    "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ",
                                    selectedGroupsCount,
                                    " \u0433\u0440\u0443\u043F\u043F"))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: `saveState ${hasUnsavedChanges ? "changed" : ""}` }, hasUnsavedChanges
                                ? "Есть несохранённые изменения"
                                : "Изменений нет"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "whereToggleButton", type: "button", onClick: () => setShowWherePreview((value) => !value) }, showWherePreview ? "Скрыть WHERE" : "Показать WHERE")),
                        showWherePreview && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bottomWherePreview" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bottomWhereHeader" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0439 WHERE"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { type: "button", onClick: copyConfigWherePreview }, "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("pre", null, buildConfigWherePreview()))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "globalSettingButtons" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "cancelConfigButton", type: "button", onClick: cancelConfigChanges, disabled: !hasUnsavedChanges }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "applyConfigButton", type: "button", onClick: applyConfig, disabled: !hasUnsavedChanges }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"))))),
            dialog && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogArea" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogBlock" },
                    (dialog.type === "addField" ||
                        dialog.type === "editField") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addField"
                            ? "Добавить столбец"
                            : "Редактировать столбец"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", value: formTitle, onChange: (e) => setFormTitle(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "\u041F\u043E\u043B\u0435", value: formField, onChange: (e) => {
                                const field = e.target.value;
                                setFormField(field);
                                setFormFieldType(getKnownFieldType(field));
                            } }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "fieldTypeField" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: "access-field-type" }, "Data type"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { id: "access-field-type", className: "fieldTypeNativeSelect", value: formFieldType, onChange: (e) => setFormFieldType(e.target.value) },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "string" }, "Text"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "number" }, "Number"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "date" }, "Date"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "boolean" }, "Boolean"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "guid" }, "GUID"))),
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
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogText" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0432\u043D\u0443\u0442\u0440\u0438 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0442\u043E\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteRule }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addGroup" ||
                        dialog.type === "editGroup") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
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
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteGlobalGroup }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addUser" ||
                        dialog.type === "editUser") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addUser"
                            ? "Добавить пользователя"
                            : "Редактировать пользователя"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 username", value: formUser, onChange: (e) => setFormUser(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: saveUser }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteUser" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogText" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteUser }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addGlobalUser" ||
                        dialog.type === "editGlobalUser") && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addGlobalUser"
                            ? "Добавить пользователя полного доступа"
                            : "Редактировать пользователя полного доступа"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { className: "dialogInput", placeholder: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 username", value: formUser, onChange: (e) => setFormUser(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: saveGlobalUser }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteGlobalUser" && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogText" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u043C."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButton", onClick: deleteGlobalUser }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))))))))));
}


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
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessSetting/AccessSetting */ "./your-extensions/widgets/Fire Portal/src/setting/AccessSetting/AccessSetting.tsx");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/Fire Portal/src/setting/setting.css");




function Setting(props) {
    var _a;
    const storedAccess = (_a = props.config) === null || _a === void 0 ? void 0 : _a.accessConfig;
    const accessValue = storedAccess
        ? typeof storedAccess.asMutable === "function"
            ? storedAccess.asMutable({ deep: true })
            : storedAccess
        : _AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_2__.defaultAccessConfig;
    const handleMainLayerChange = (useDataSources) => {
        props.onSettingChange({ id: props.id, useDataSources });
    };
    const handleAccessChange = (accessConfig) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set("accessConfig", (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(accessConfig)),
        });
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dashboard-template-setting" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "setting-section main-layer-setting-section" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section-title" }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u043B\u043E\u0439 \u0434\u0430\u043D\u043D\u044B\u0445"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section-description" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 FeatureLayer \u0434\u043B\u044F \u043F\u043E\u0440\u0442\u0430\u043B\u0430."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "main-layer-selector" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer]), useDataSources: props.useDataSources, onChange: handleMainLayerChange, widgetId: props.id }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "setting-section access-setting-section" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_2__["default"], { value: accessValue, onChange: handleAccessChange, title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430", description: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 Portal.", buttonLabel: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430" }))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9GaXJlIFBvcnRhbC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtQQUFrUCxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdB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QjtnQkFDaEMsMkRBQUMscUZBQWtCLElBQ2YsaUJBQWlCLFFBQ2pCLEtBQUssRUFBRSxvREFBUyxDQUFDLENBQUMseURBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsRUFDbkQsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQ3BDLFFBQVEsRUFBRSxxQkFBcUIsRUFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQ3BCLENBQ0EsQ0FDQTtRQUNWLHdFQUFTLFNBQVMsRUFBQyx3Q0FBd0M7WUFDdkQsMkRBQUMsb0VBQWEsSUFDVixLQUFLLEVBQUUsV0FBVyxFQUNsQixRQUFRLEVBQUUsa0JBQWtCLEVBQzVCLEtBQUssRUFBQyxtR0FBbUIsRUFDekIsV0FBVyxFQUFDLGtXQUEwRSxFQUN0RixXQUFXLEVBQUMsOElBQTJCLEdBQ3pDLENBQ0ksQ0FDUixDQUNULENBQUM7QUFDTixDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3NldHRpbmcvQWNjZXNzU2V0dGluZy9BY2Nlc3NTZXR0aW5nLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3NldHRpbmcvc2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlIFBvcnRhbC9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcuY3NzPzgwYTIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0ZpcmUgUG9ydGFsL3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzPzhjYmEiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3NldHRpbmcvQWNjZXNzU2V0dGluZy9BY2Nlc3NTZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRmlyZSBQb3J0YWwvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZXR0aW5nQXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbi5zZXR0aW5nc0NvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstNDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay0xMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpKTtcbn0gKi9cbi5zb3VyY2VTZWxlY3RvckNhcmQge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ucGFuZWxDYXJkTGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWNjZXNzQ29udHJvbEhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5hY2Nlc3NDb250cm9sVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcbiAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXRleHQsICNmZmZmZmYpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG5cbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpob3Zlcixcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XG4gIGNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1jb250cmFzdC10ZXh0LCAjZmZmZmZmKTtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApIDI4JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uYWNjZXNzU2V0dGluZ3NCdXR0b25UZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWxBcmVhIHtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbEJsb2NrIHtcbiAgd2lkdGg6IG1pbigxMjAwcHgsIDEwMHZ3IC0gMzJweCk7XG4gIGhlaWdodDogbWluKDgwMHB4LCAxMDB2aCAtIDMycHgpO1xuICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcbn1cblxuLm1vZGFsTGlzdCB7XG4gIGJhY2tncm91bmQ6ICMyNTJjNDE7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLm1vZGFsTGlzdEhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsTGlzdFRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9kYWxMaXN0U3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWVsZExpc3Qge1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5tb2RhbEl0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubW9kYWxJdGVtOmhvdmVyLFxuLm1vZGFsSXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMzMzQwNWY7XG4gIGJvcmRlci1jb2xvcjogI2I2YzRlZDtcbn1cblxuLm1vZGFsSXRlbVRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWxJdGVtSW5mbyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2I4YmZkMTtcbn1cblxuLm1vZGFsSXRlbUluZm8gc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkRmllbGRCdXR0b24ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5Y2E4YzQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRGaWVsZEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XG59XG5cbi5tb2RhbEJvdHRvbUFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbn1cblxuLmpzb25CdXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmpzb25CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xufVxuXG4uanNvbkJ1dHRvbiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2RhbFJpZ2h0UGFuZWwge1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbEl0ZW1GdWxsSW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnJpZ2h0SGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYTQwNTA7XG59XG5cbi5wb3B1cEFjY2Vzc0hlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cEFjY2Vzc1RvZ2dsZUdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBvcHVwQWNjZXNzVG9nZ2xlIHtcbiAgbWluLXdpZHRoOiAxMTJweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBjb2xvcjogI2RjZTJlZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucG9wdXBBY2Nlc3NUb2dnbGUuaW52ZXJ0ZWQge1xuICBib3JkZXItY29sb3I6ICNkNzlhNDg7XG4gIGJhY2tncm91bmQ6ICMzYjJkMWU7XG4gIGNvbG9yOiAjZmZkOWExO1xufVxuXG4ucG9wdXBBY2Nlc3NUb2dnbGUgaW5wdXQge1xuICBtYXJnaW46IDA7XG59XG5cbi5wb3B1cEFjY2Vzc1RvZ2dsZSBpbnB1dDpkaXNhYmxlZCArIHNwYW4ge1xuICBvcGFjaXR5OiAwLjQ1O1xufVxuXG4ucG9wdXBBY2Nlc3NOb3RpY2Uge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzI1MmMzZDtcbiAgY29sb3I6ICNiOGMyZDg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG5cbi5wb3B1cEFjY2Vzc0ZpZWxkTGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDdweDtcbiAgY29sb3I6ICNkY2UyZWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnBvcHVwQWNjZXNzRmllbGRzU2VjdGlvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4ucG9wdXBBY2Nlc3NGaWVsZHNMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbn1cblxuLnBvcHVwQWNjZXNzRmllbGRSb3cge1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiA0cHggNXB4IDRweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMyNTJjM2Q7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ucG9wdXBBY2Nlc3NGaWVsZFJvdyBjb2RlIHtcbiAgY29sb3I6ICNmM2Y1ZmE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBvcHVwQWNjZXNzR3JpZCB7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucG9wdXBBY2Nlc3NTZWN0aW9uIHtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2U0NzViO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQ6ICMxZDIxMmI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLnBvcHVwQWNjZXNzQWRkUm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBhdXRvO1xuICBnYXA6IDhweDtcbn1cblxuLnBvcHVwQWNjZXNzTGlzdCB7XG4gIG1heC1oZWlnaHQ6IDI2MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5wb3B1cEFjY2Vzc0dyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4ucmlnaHRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJpZ2h0RmllbGQge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yaWdodEhlYWRlckFjdGlvbnMsXG4ucnVsZUFjdGlvbnMsXG4uZ3JvdXBBY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5yaWdodEhlYWRlckFjdGlvbnMsXG4ucnVsZUFjdGlvbnMge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pY29uQnV0dG9uLFxuLm1pbmlJY29uQnV0dG9uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1pbmlJY29uQnV0dG9uIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNvbkJ1dHRvbjpob3Zlcixcbi5taW5pSWNvbkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzYjQ4Njg7XG59XG5cbi5pY29uQnV0dG9uLmRhbmdlcixcbi5taW5pSWNvbkJ1dHRvbi5kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICM4ZjRmNWI7XG4gIGNvbG9yOiAjZmZiOGMxO1xufVxuXG4ucnVsZXNBcmVhIHtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLnJ1bGVDYXJkIHtcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI2MmIzNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNkNDY1YjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnJ1bGVDYXJkLnNlbGVjdGVkUnVsZSB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbiAgYmFja2dyb3VuZDogIzJjMzQ0ODtcbn1cblxuLnJ1bGVIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG59XG5cbi5ydWxlSW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnJ1bGVMYWJlbCB7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnJ1bGVWYWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ucnVsZUFjdGlvbnMge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnJ1bGVDYXJkOmhvdmVyIC5ydWxlQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbWFsbEJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnNtYWxsQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcbn1cblxuLmdyb3Vwc0FyZWEge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDdweDtcbn1cblxuLnVzZXJzQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogN3B4O1xufVxuXG4ucnVsZVVzZXJzQXJlYSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM0NDUwNmE7XG59XG5cbi5hY2Nlc3NFbnRpdHlTZWN0aW9uVGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xufVxuXG4uZ3JvdXBSb3cge1xuICBiYWNrZ3JvdW5kOiAjMWQyMjMwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg0MjU4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBjb2xvcjogI2Q5ZGVlYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmdyb3VwUm93LnVzZXJSb3cge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBib3JkZXItY29sb3I6ICMzZTUyNmY7XG4gIGJhY2tncm91bmQ6ICMxZDI2MzQ7XG59XG5cbi51c2VySWRlbnRpdHkgLmdyb3VwSWRDb3B5QnV0dG9uIHtcbiAgY29sb3I6ICM5ZmI2ZGY7XG59XG5cbi5ncm91cFJvdy5zZWxlY3RlZEdyb3VwIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xufVxuXG4uZ3JvdXBSb3cgc3BhbiB7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4uZ3JvdXBBY3Rpb25zIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5ncm91cFJvdzpob3ZlciAuZ3JvdXBBY3Rpb25zIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFkZFJ1bGVCdXR0b24ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM3ODg0OWY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZFJ1bGVCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmIzMzQ4O1xufVxuXG4uZW1wdHlNaW5pLFxuLmVtcHR5UnVsZXMge1xuICBjb2xvcjogIzhlOTZhYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZW1wdHlSdWxlcyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNTU1Zjc2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaWFsb2dBcmVhIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGlhbG9nQmxvY2sge1xuICB3aWR0aDogNTIwcHg7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMjUyYjM4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGM1NjZjO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5kaWFsb2dUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRpYWxvZ1RleHQge1xuICBjb2xvcjogI2MyYzhkNTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmRpYWxvZ0lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kaWFsb2dJbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbn1cblxuLmZpZWxkVHlwZUZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZpZWxkVHlwZUZpZWxkIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDVweCAycHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5maWVsZFR5cGVOYXRpdmVTZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmllbGRUeXBlTmF0aXZlU2VsZWN0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmQ3ODkwO1xufVxuXG4uZmllbGRUeXBlTmF0aXZlU2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xufVxuXG4uZGlhbG9nQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDY1ZDtcbn1cblxuLmRhbmdlckJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNGEyNDMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XG59XG5cbi5vcGVyYXRvclRhYnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxuLm9wZXJhdG9yVGFicyBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnR3b0lucHV0R3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5MaXN0QXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uaW5BZGRSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uaW5WYWx1ZVJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5wcmV2aWV3V2hlcmUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByZXZpZXdXaGVyZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ub3B0aW9uYWxSdWxlQmxvY2sge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xufVxuXG4ub3B0aW9uYWxSdWxlVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYzZjY2RhO1xufVxuXG4uYnVsa0FjdGlvbkJhciB7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGwge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4NTU2NTtcbiAgYmFja2dyb3VuZDogIzRhMjQzMDtcbiAgY29sb3I6ICNmZmM0Y2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYzMzA0MDtcbn1cblxuLnNlbGVjdENoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYWNjZW50LWNvbG9yOiAjOWJhZWUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZ3JvdXBJZGVudGl0eSB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5ncm91cE5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwSWQge1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwTWVtYmVycyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY29sb3I6ICM4ZmEzY2Y7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmdyb3VwSWRDb3B5QnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XG59XG5cbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnNldHRpbmdOb3RpY2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjhweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDExMDAwO1xuICBtaW4td2lkdGg6IDIxMHB4O1xuICBwYWRkaW5nOiAxMXB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi1oZWlnaHQ6IDY2cHg7XG4gIHBhZGRpbmc6IDEzcHggMjJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2F2ZVN0YXRlIHtcbiAgY29sb3I6ICM4ZTk2YWE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNhdmVTdGF0ZS5jaGFuZ2VkIHtcbiAgY29sb3I6ICNmMWMyN2Q7XG59XG5cbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyOGFjMztcbiAgYmFja2dyb3VuZDogIzM4NTA4MztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMzg0MzViO1xufVxuXG4uYXBwbHlDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjNDY2MTlhO1xufVxuXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmRpc2FibGVkLFxuLmFwcGx5Q29uZmlnQnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40NTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc3RhdGljU2VsZWN0aW9uQmFyIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbn1cblxuLnN0YXRpY1NlbGVjdGlvbkJhci5lbXB0eVNlbGVjdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogIzNiNDM1NjtcbiAgYmFja2dyb3VuZDogIzFmMjUzMjtcbiAgY29sb3I6ICM4NzkwYTU7XG59XG5cbi5zdGF0aWNTZWxlY3Rpb25CYXIgYiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3RhdGljU2VsZWN0aW9uQmFyLmVtcHR5U2VsZWN0aW9uIGIge1xuICBjb2xvcjogI2FlYjZjYTtcbn1cblxuLmNvbWJpbmVkU2VsZWN0aW9uQmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGlvbkNvdW50ZXJzLFxuLnNlbGVjdGlvbkFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNlbGVjdGlvbkNvdW50ZXJzIHNwYW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGw6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XG4gIGJvcmRlci1jb2xvcjogIzU1NDM1MDtcbiAgY29sb3I6ICM5YTg1OTA7XG59XG5cbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XG59XG5cbi5ib3R0b21BY2Nlc3NQYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ib3R0b21TZWxlY3Rpb25BY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJvdHRvbUFjY2Vzc1BhbmVsIC5zYXZlU3RhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2VsZWN0Q2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY5Nzc5NTtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLnNlbGVjdENoZWNrYm94OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTliOWUwO1xuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xufVxuXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbiAgYmFja2dyb3VuZDogIzNkNTI3ZDtcbn1cblxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDFweCwgLTFweCk7XG59XG5cbi5zZWxlY3RDaGVja2JveDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXItY29sb3I6ICM3NDg0YTg7XG4gIGJhY2tncm91bmQ6ICMzNDQ3NmQ7XG59XG5cbi5ncm91cFJvdy5sb2NrZWRHcm91cCB7XG4gIGJvcmRlci1jb2xvcjogIzZlN2ZhNjtcbiAgYmFja2dyb3VuZDogIzI5MzQ0Yztcbn1cblxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIC5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAwLjQ1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuLmljb25CdXR0b24sXG4ubWluaUljb25CdXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYnV0dG9uU3ZnSWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubWluaUljb25CdXR0b24gLmJ1dHRvblN2Z0ljb24ge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuXG4uaWNvbkJ1dHRvbjpub3QoLmRhbmdlciksXG4ubWluaUljb25CdXR0b246bm90KC5kYW5nZXIpIHtcbiAgY29sb3I6ICNkOGRlZWE7XG59XG5cbi5zaWRlU2VhcmNoSW5wdXQsXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwIDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiNTY3MDtcbiAgYmFja2dyb3VuZDogIzFkMjMzMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNpZGVTZWFyY2hJbnB1dDpmb2N1cyxcbi5ncm91cFNlYXJjaElucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xufVxuXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5tb2RhbEl0ZW1NZXRhIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogIzhmYTNjZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2FybmluZ1BpbGwge1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg1NmEzNTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzIsIDkzLCAyNSwgMC4yMik7XG4gIGNvbG9yOiAjZjJjNjc4O1xufVxuXG4ub3BlcmF0b3JQaWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5vcGVyYXRvci1lcXVhbCB7XG4gIGJvcmRlci1jb2xvcjogIzZlODNiODtcbiAgY29sb3I6ICNjOWQ3ZmY7XG59XG5cbi5vcGVyYXRvci1yYW5nZSB7XG4gIGJvcmRlci1jb2xvcjogIzZmOTA3MDtcbiAgY29sb3I6ICNjOGYyYzk7XG59XG5cbi5vcGVyYXRvci1pbmNsdWRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGM3YWI4O1xuICBjb2xvcjogI2UwZDJmZjtcbn1cblxuLm9wZXJhdG9yLWxpa2Uge1xuICBib3JkZXItY29sb3I6ICM5YTdhNWE7XG4gIGNvbG9yOiAjZmZkN2I1O1xufVxuXG4ucnVsZVdhcm5pbmdzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNnB4O1xufVxuXG4ucnVsZVdhcm5pbmdzIHNwYW4ge1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgyNjAzYjtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDk2LCA1OSwgMC4yKTtcbiAgY29sb3I6ICNmMmM2Nzg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJvdHRvbUFjY2Vzc1BhbmVsIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ud2hlcmVUb2dnbGVCdXR0b24ge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcbiAgY29sb3I6ICNkOGRlZWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2hlcmVUb2dnbGVCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xufVxuXG4uYm90dG9tV2hlcmVQcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMnB4O1xuICByaWdodDogMjJweDtcbiAgYm90dG9tOiA3NHB4O1xuICBtYXgtaGVpZ2h0OiAxNTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcbiAgYmFja2dyb3VuZDogIzE3MWMyNztcbiAgYm94LXNoYWRvdzogMCAxNHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjM0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvdHRvbVdoZXJlSGVhZGVyIHtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzAzOTRkO1xuICBjb2xvcjogI2M2Y2NkYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uIHtcbiAgbWluLWhlaWdodDogMjZweDtcbiAgcGFkZGluZzogMCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcbn1cblxuLmJvdHRvbVdoZXJlUHJldmlldyBwcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1heC1oZWlnaHQ6IDExOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5tb2RhbFJpZ2h0UGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIHtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uam9pbk9wZXJhdG9yQ29udHJvbCBzcGFuIHtcbiAgcGFkZGluZzogMCA3cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbjpob3Zlcixcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbi5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMzNTQxNWI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubW9kYWxJdGVtSW5mb0xpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbn1cblxuLm1vZGFsSXRlbUNvbmRpdGlvbiB7XG4gIG1pbi13aWR0aDogMDtcbiAgY29sb3I6ICNhZWI2Y2EgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLm1vZGFsSXRlbUNvbmRpdGlvbiBiIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb2RhbEl0ZW1Db3VudCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogIzhmYTNjZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ3JvdXBJZFRpdGxlTGluZSB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ3JvdXBUaXRsZUFmdGVySWQge1xuICBtaW4td2lkdGg6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ucnVsZU1vZGVSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucnVsZU1vZGVSb3cgLm9wZXJhdG9yVGFicyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5ub3RUb2dnbGVCdXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1pbi13aWR0aDogNThweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDVkNzY7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLm5vdFRvZ2dsZUJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2M1OWJlMDtcbiAgYmFja2dyb3VuZDogIzJiMjYzODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ub3RUb2dnbGVCdXR0b24uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDFhN2VmO1xuICBiYWNrZ3JvdW5kOiAjNDkzNDVmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjA5LCAxNjcsIDIzOSwgMC4xOCkgaW5zZXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAucnVsZU1vZGVSb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5ub3RUb2dnbGVCdXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlIFBvcnRhbC9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcuY3NzXCIsXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlJTIwUG9ydGFsL3NyYy9zZXR0aW5nL0FjY2Vzc1NldHRpbmcvQWNjZXNzU2V0dGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTs7Ozs7R0FBQTtBQU9BO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RkFDSTtBQ0RSOztBRE1BOztFQUVJLG9E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QkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQ1NKOztBRE5BO0VBQ0k7SUFDSSwwQkFBQTtFQ1NOO0VETkU7SUFDSSxXQUFBO0VDUU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2V0dGluZ0FyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uc2V0dGluZ3NDb250ZW50IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4vKiAuc291cmNlU2VsZWN0b3JDYXJkLFxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstNDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLTEwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSkpO1xcbn0gKi9cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnBhbmVsQ2FyZExhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MikpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkPmRpdjpsYXN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sSGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sRGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xcbiAgICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktY29udHJhc3QtdGV4dCwgI2ZmZmZmZik7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsXFxuICAgICAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZSxcXG4gICAgICAgIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmhvdmVyLFxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XFxuICAgIGNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1jb250cmFzdC10ZXh0LCAjZmZmZmZmKTtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApIDI4JSwgdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b25UZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWxBcmVhIHtcXG4gICAgY29sb3I6ICNmM2Y0ZjY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbEJsb2NrIHtcXG4gICAgd2lkdGg6IG1pbigxMjAwcHgsIGNhbGMoMTAwdncgLSAzMnB4KSk7XFxuICAgIGhlaWdodDogbWluKDgwMHB4LCBjYWxjKDEwMHZoIC0gMzJweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcXG59XFxuXFxuLm1vZGFsTGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICMyNTJjNDE7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLm1vZGFsTGlzdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsTGlzdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0U3VidGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5maWVsZExpc3Qge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbEl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubW9kYWxJdGVtOmhvdmVyLFxcbi5tb2RhbEl0ZW0uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzM0MDVmO1xcbiAgICBib3JkZXItY29sb3I6ICNiNmM0ZWQ7XFxufVxcblxcbi5tb2RhbEl0ZW1UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICNiOGJmZDE7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHNwYW4ge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWNhOGM0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkRmllbGRCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4ubW9kYWxCb3R0b21BY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5qc29uQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjYyN2M7XFxuICAgIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICAgIGNvbG9yOiAjZjNmNGY2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5qc29uQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmpzb25CdXR0b24gaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxSaWdodFBhbmVsIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWxJdGVtRnVsbEluZm8ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5yaWdodEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2E0MDUwO1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NIZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NUb2dnbGVHcm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wb3B1cEFjY2Vzc1RvZ2dsZSB7XFxuICAgIG1pbi13aWR0aDogMTEycHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDdweDtcXG4gICAgY29sb3I6ICNkY2UyZWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnBvcHVwQWNjZXNzVG9nZ2xlLmludmVydGVkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZDc5YTQ4O1xcbiAgICBiYWNrZ3JvdW5kOiAjM2IyZDFlO1xcbiAgICBjb2xvcjogI2ZmZDlhMTtcXG59XFxuXFxuLnBvcHVwQWNjZXNzVG9nZ2xlIGlucHV0IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NUb2dnbGUgaW5wdXQ6ZGlzYWJsZWQgKyBzcGFuIHtcXG4gICAgb3BhY2l0eTogMC40NTtcXG59XFxuXFxuLnBvcHVwQWNjZXNzTm90aWNlIHtcXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTZhO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQ6ICMyNTJjM2Q7XFxuICAgIGNvbG9yOiAjYjhjMmQ4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NGaWVsZExhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGNvbG9yOiAjZGNlMmVmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0ZpZWxkc1NlY3Rpb24ge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLnBvcHVwQWNjZXNzRmllbGRzTGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0ZpZWxkUm93IHtcXG4gICAgbWluLWhlaWdodDogMzRweDtcXG4gICAgcGFkZGluZzogNHB4IDVweCA0cHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjUyYzNkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnBvcHVwQWNjZXNzRmllbGRSb3cgY29kZSB7XFxuICAgIGNvbG9yOiAjZjNmNWZhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0dyaWQge1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnBvcHVwQWNjZXNzU2VjdGlvbiB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlNDc1YjtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMTJiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0FkZFJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0xpc3Qge1xcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgICAucG9wdXBBY2Nlc3NHcmlkIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxufVxcblxcbi5yaWdodFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ucmlnaHRGaWVsZCB7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcXG4ucnVsZUFjdGlvbnMsXFxuLmdyb3VwQWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxcbi5ydWxlQWN0aW9ucyB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDM0cHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpob3ZlcixcXG4ubWluaUljb25CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbi5kYW5nZXIsXFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcXG4gICAgY29sb3I6ICNmZmI4YzE7XFxufVxcblxcbi5ydWxlc0FyZWEge1xcbiAgICBwYWRkaW5nLXRvcDogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucnVsZUNhcmQge1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xcbn1cXG5cXG4ucnVsZUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnJ1bGVJbmZvIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4ucnVsZUxhYmVsIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucnVsZVZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ydWxlQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNtYWxsQnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4uc21hbGxCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uZ3JvdXBzQXJlYSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4udXNlcnNBcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5ydWxlVXNlcnNBcmVhIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzQ0NTA2YTtcXG59XFxuXFxuLmFjY2Vzc0VudGl0eVNlY3Rpb25UaXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcblxcbi5ncm91cFJvdyB7XFxuICAgIGJhY2tncm91bmQ6ICMxZDIyMzA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODQyNTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGNvbG9yOiAjZDlkZWVhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZ3JvdXBSb3cudXNlclJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGJvcmRlci1jb2xvcjogIzNlNTI2ZjtcXG4gICAgYmFja2dyb3VuZDogIzFkMjYzNDtcXG59XFxuXFxuLnVzZXJJZGVudGl0eSAuZ3JvdXBJZENvcHlCdXR0b24ge1xcbiAgICBjb2xvcjogIzlmYjZkZjtcXG59XFxuXFxuLmdyb3VwUm93LnNlbGVjdGVkR3JvdXAge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxufVxcblxcbi5ncm91cFJvdyBzcGFuIHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmdyb3VwUm93OmhvdmVyIC5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyYjMzNDg7XFxufVxcblxcbi5lbXB0eU1pbmksXFxuLmVtcHR5UnVsZXMge1xcbiAgICBjb2xvcjogIzhlOTZhYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uZW1wdHlSdWxlcyB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNTU1Zjc2O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dBcmVhIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlhbG9nQmxvY2sge1xcbiAgICB3aWR0aDogNTIwcHg7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjUyYjM4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGM1NjZjO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5kaWFsb2dUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmRpYWxvZ1RleHQge1xcbiAgICBjb2xvcjogI2MyYzhkNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRpYWxvZ0lucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kaWFsb2dJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG59XFxuXFxuLmZpZWxkVHlwZUZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZpZWxkVHlwZUZpZWxkIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCAwIDVweCAycHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5maWVsZFR5cGVOYXRpdmVTZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmllbGRUeXBlTmF0aXZlU2VsZWN0OmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmQ3ODkwO1xcbn1cXG5cXG4uZmllbGRUeXBlTmF0aXZlU2VsZWN0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzNiNDY1ZDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvbiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kOiAjNGEyNDMwICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcGVyYXRvclRhYnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxcbi5vcGVyYXRvclRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6ICMzNTQxNWI7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi50d29JbnB1dEdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmluTGlzdEFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmluQWRkUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmluVmFsdWVSb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5wcmV2aWV3V2hlcmUgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm9wdGlvbmFsUnVsZUJsb2NrIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcXG4gICAgYmFja2dyb3VuZDogIzIwMjYzNztcXG59XFxuXFxuLm9wdGlvbmFsUnVsZVRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogI2M2Y2NkYTtcXG59XFxuXFxuLmJ1bGtBY3Rpb25CYXIge1xcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsIHtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ODU1NjU7XFxuICAgIGJhY2tncm91bmQ6ICM0YTI0MzA7XFxuICAgIGNvbG9yOiAjZmZjNGNjO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM2MzMwNDA7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveCB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGFjY2VudC1jb2xvcjogIzliYWVlMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmdyb3VwSWRlbnRpdHkge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uZ3JvdXBOYW1lIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cElkIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBNZW1iZXJzIHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBjb2xvcjogIzhmYTNjZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5cXG4uZ3JvdXBJZENvcHlCdXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XFxufVxcblxcbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNldHRpbmdOb3RpY2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjhweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHotaW5kZXg6IDExMDAwO1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICBwYWRkaW5nOiAxMXB4IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcXG4gICAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDY2cHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMjJweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XFxuICAgIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlIHtcXG4gICAgY29sb3I6ICM4ZTk2YWE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnNhdmVTdGF0ZS5jaGFuZ2VkIHtcXG4gICAgY29sb3I6ICNmMWMyN2Q7XFxufVxcblxcbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MjhhYzM7XFxuICAgIGJhY2tncm91bmQ6ICMzODUwODM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYmFja2dyb3VuZDogIzM4NDM1YjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYmFja2dyb3VuZDogIzQ2NjE5YTtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbjpkaXNhYmxlZCxcXG4uYXBwbHlDb25maWdCdXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjQ1O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5zdGF0aWNTZWxlY3Rpb25CYXIge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBtaW4taGVpZ2h0OiA0NnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbn1cXG5cXG4uc3RhdGljU2VsZWN0aW9uQmFyLmVtcHR5U2VsZWN0aW9uIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2I0MzU2O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyNTMyO1xcbiAgICBjb2xvcjogIzg3OTBhNTtcXG59XFxuXFxuLnN0YXRpY1NlbGVjdGlvbkJhciBiIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIuZW1wdHlTZWxlY3Rpb24gYiB7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbn1cXG5cXG4uY29tYmluZWRTZWxlY3Rpb25CYXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VsZWN0aW9uQ291bnRlcnMsXFxuLnNlbGVjdGlvbkFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNlbGVjdGlvbkNvdW50ZXJzIHNwYW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjQyO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGJhY2tncm91bmQ6ICMyYTIyMzA7XFxuICAgIGJvcmRlci1jb2xvcjogIzU1NDM1MDtcXG4gICAgY29sb3I6ICM5YTg1OTA7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlcjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQ6ICMyYTIyMzA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib3R0b21TZWxlY3Rpb25BY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvdHRvbUFjY2Vzc1BhbmVsIC5zYXZlU3RhdGUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3gge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY5Nzc5NTtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYTliOWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gICAgYmFja2dyb3VuZDogIzNkNTI3ZDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiA5cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgxcHgsIC0xcHgpO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNzQ4NGE4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMzQ0NzZkO1xcbn1cXG5cXG4uZ3JvdXBSb3cubG9ja2VkR3JvdXAge1xcbiAgICBib3JkZXItY29sb3I6ICM2ZTdmYTY7XFxuICAgIGJhY2tncm91bmQ6ICMyOTM0NGM7XFxufVxcblxcbi5ncm91cFJvdy5sb2NrZWRHcm91cCAuZ3JvdXBBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMC40NTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAgIC5nbG9iYWxTZXR0aW5nQWN0aW9ucyB7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcbn1cXG5cXG4uaWNvbkJ1dHRvbixcXG4ubWluaUljb25CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uYnV0dG9uU3ZnSWNvbiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWluaUljb25CdXR0b24gLmJ1dHRvblN2Z0ljb24ge1xcbiAgICB3aWR0aDogMTNweDtcXG4gICAgaGVpZ2h0OiAxM3B4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpub3QoLmRhbmdlciksXFxuLm1pbmlJY29uQnV0dG9uOm5vdCguZGFuZ2VyKSB7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbn1cXG5cXG4uc2lkZVNlYXJjaElucHV0LFxcbi5ncm91cFNlYXJjaElucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDAgMTFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI1NjcwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMzMwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uc2lkZVNlYXJjaElucHV0OmZvY3VzLFxcbi5ncm91cFNlYXJjaElucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5tb2RhbEl0ZW1NZXRhIHtcXG4gICAgbWFyZ2luLXRvcDogOXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDdweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBjb2xvcjogIzhmYTNjZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ud2FybmluZ1BpbGwge1xcbiAgICBwYWRkaW5nOiAycHggN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg1NmEzNTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzIsIDkzLCAyNSwgMC4yMik7XFxuICAgIGNvbG9yOiAjZjJjNjc4O1xcbn1cXG5cXG4ub3BlcmF0b3JQaWxsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZzogMnB4IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5vcGVyYXRvci1lcXVhbCB7IGJvcmRlci1jb2xvcjogIzZlODNiODsgY29sb3I6ICNjOWQ3ZmY7IH1cXG4ub3BlcmF0b3ItcmFuZ2UgeyBib3JkZXItY29sb3I6ICM2ZjkwNzA7IGNvbG9yOiAjYzhmMmM5OyB9XFxuLm9wZXJhdG9yLWluY2x1ZGUgeyBib3JkZXItY29sb3I6ICM4YzdhYjg7IGNvbG9yOiAjZTBkMmZmOyB9XFxuLm9wZXJhdG9yLWxpa2UgeyBib3JkZXItY29sb3I6ICM5YTdhNWE7IGNvbG9yOiAjZmZkN2I1OyB9XFxuXFxuLnJ1bGVXYXJuaW5ncyB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLnJ1bGVXYXJuaW5ncyBzcGFuIHtcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MjYwM2I7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTMwLCA5NiwgNTksIDAuMik7XFxuICAgIGNvbG9yOiAjZjJjNjc4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCB7XFxuICAgIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLndoZXJlVG9nZ2xlQnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjYyN2M7XFxuICAgIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLndoZXJlVG9nZ2xlQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmJvdHRvbVdoZXJlUHJldmlldyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjJweDtcXG4gICAgcmlnaHQ6IDIycHg7XFxuICAgIGJvdHRvbTogNzRweDtcXG4gICAgbWF4LWhlaWdodDogMTU1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICAgIGJhY2tncm91bmQ6ICMxNzFjMjc7XFxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4zNCk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ib3R0b21XaGVyZUhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMwMzk0ZDtcXG4gICAgY29sb3I6ICNjNmNjZGE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJvdHRvbVdoZXJlSGVhZGVyIGJ1dHRvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XFxuICAgIHBhZGRpbmc6IDAgOXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmJvdHRvbVdoZXJlSGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzYjQ4Njg7XFxufVxcblxcbi5ib3R0b21XaGVyZVByZXZpZXcgcHJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMThweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1vZGFsUmlnaHRQYW5lbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wge1xcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwIDdweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwYWRkaW5nOiAwIDlweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uOmhvdmVyLFxcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbi5hY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMzNTQxNWI7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mb0xpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1vZGFsSXRlbUNvbmRpdGlvbiB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgY29sb3I6ICNhZWI2Y2EgIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm1vZGFsSXRlbUNvbmRpdGlvbiBiIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tb2RhbEl0ZW1Db3VudCB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBjb2xvcjogIzhmYTNjZiAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZ3JvdXBJZFRpdGxlTGluZSB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBnYXA6IDZweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZ3JvdXBUaXRsZUFmdGVySWQge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ucnVsZU1vZGVSb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ucnVsZU1vZGVSb3cgLm9wZXJhdG9yVGFicyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5ub3RUb2dnbGVCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG1pbi13aWR0aDogNThweDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZDVkNzY7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcXG59XFxuXFxuLm5vdFRvZ2dsZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2M1OWJlMDtcXG4gICAgYmFja2dyb3VuZDogIzJiMjYzODtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5ub3RUb2dnbGVCdXR0b24uYWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZDFhN2VmO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDkzNDVmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjA5LCAxNjcsIDIzOSwgMC4xOCkgaW5zZXQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xcbiAgICAucnVsZU1vZGVSb3cge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLm5vdFRvZ2dsZUJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cIixcIi5zZXR0aW5nQXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uc2V0dGluZ3NDb250ZW50IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLyogLnNvdXJjZVNlbGVjdG9yQ2FyZCxcXG4uYWNjZXNzQ29udHJvbENhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLTQwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay0xMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpKTtcXG59ICovXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZCB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4ucGFuZWxDYXJkTGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG59XFxuXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbENhcmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xIZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiA4cHggMTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbiwgIzAwYTljMCk7XFxuICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktY29udHJhc3QtdGV4dCwgI2ZmZmZmZik7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmhvdmVyLFxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcXG4gIGNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1jb250cmFzdC10ZXh0LCAjZmZmZmZmKTtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbiwgIzAwYTljMCkgMjglLCB0cmFuc3BhcmVudCk7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvblRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWxBcmVhIHtcXG4gIGNvbG9yOiAjZjNmNGY2O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbEJsb2NrIHtcXG4gIHdpZHRoOiBtaW4oMTIwMHB4LCAxMDB2dyAtIDMycHgpO1xcbiAgaGVpZ2h0OiBtaW4oODAwcHgsIDEwMHZoIC0gMzJweCk7XFxuICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0M2E0OTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzA1cHggMWZyO1xcbn1cXG5cXG4ubW9kYWxMaXN0IHtcXG4gIGJhY2tncm91bmQ6ICMyNTJjNDE7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWxMaXN0VGl0bGUge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1vZGFsTGlzdFN1YnRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uZmllbGRMaXN0IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbEl0ZW0ge1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubW9kYWxJdGVtOmhvdmVyLFxcbi5tb2RhbEl0ZW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogIzMzNDA1ZjtcXG4gIGJvcmRlci1jb2xvcjogI2I2YzRlZDtcXG59XFxuXFxuLm1vZGFsSXRlbVRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjYjhiZmQxO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mbyBzcGFuIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uIHtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjOWNhOGM0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5tb2RhbEJvdHRvbUFjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmpzb25CdXR0b24ge1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcXG4gIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICBjb2xvcjogI2YzZjRmNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5qc29uQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5qc29uQnV0dG9uIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbFJpZ2h0UGFuZWwge1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tb2RhbEl0ZW1GdWxsSW5mbyB7XFxuICBmbGV4OiAxO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIHBhZGRpbmc6IDIycHg7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYTQwNTA7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0hlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NUb2dnbGVHcm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDhweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnBvcHVwQWNjZXNzVG9nZ2xlIHtcXG4gIG1pbi13aWR0aDogMTEycHg7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbiAgY29sb3I6ICNkY2UyZWY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NUb2dnbGUuaW52ZXJ0ZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDc5YTQ4O1xcbiAgYmFja2dyb3VuZDogIzNiMmQxZTtcXG4gIGNvbG9yOiAjZmZkOWExO1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NUb2dnbGUgaW5wdXQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NUb2dnbGUgaW5wdXQ6ZGlzYWJsZWQgKyBzcGFuIHtcXG4gIG9wYWNpdHk6IDAuNDU7XFxufVxcblxcbi5wb3B1cEFjY2Vzc05vdGljZSB7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTZhO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogIzI1MmMzZDtcXG4gIGNvbG9yOiAjYjhjMmQ4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0ZpZWxkTGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDdweDtcXG4gIGNvbG9yOiAjZGNlMmVmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnBvcHVwQWNjZXNzRmllbGRzU2VjdGlvbiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLnBvcHVwQWNjZXNzRmllbGRzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wb3B1cEFjY2Vzc0ZpZWxkUm93IHtcXG4gIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICBwYWRkaW5nOiA0cHggNXB4IDRweCAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6ICMyNTJjM2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NGaWVsZFJvdyBjb2RlIHtcXG4gIGNvbG9yOiAjZjNmNWZhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NHcmlkIHtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucG9wdXBBY2Nlc3NTZWN0aW9uIHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNlNDc1YjtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJhY2tncm91bmQ6ICMxZDIxMmI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnBvcHVwQWNjZXNzQWRkUm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG87XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnBvcHVwQWNjZXNzTGlzdCB7XFxuICBtYXgtaGVpZ2h0OiAyNjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIC5wb3B1cEFjY2Vzc0dyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuLnJpZ2h0VGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnJpZ2h0RmllbGQge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgY29sb3I6ICNhZWI2Y2E7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5yaWdodEhlYWRlckFjdGlvbnMsXFxuLnJ1bGVBY3Rpb25zLFxcbi5ncm91cEFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcXG4ucnVsZUFjdGlvbnMge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5taW5pSWNvbkJ1dHRvbiB7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmljb25CdXR0b246aG92ZXIsXFxuLm1pbmlJY29uQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzYjQ4Njg7XFxufVxcblxcbi5pY29uQnV0dG9uLmRhbmdlcixcXG4ubWluaUljb25CdXR0b24uZGFuZ2VyIHtcXG4gIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcXG4gIGNvbG9yOiAjZmZiOGMxO1xcbn1cXG5cXG4ucnVsZXNBcmVhIHtcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5ydWxlQ2FyZCB7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICMyNjJiMzY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnJ1bGVDYXJkLnNlbGVjdGVkUnVsZSB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xcbn1cXG5cXG4ucnVsZUhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5ydWxlSW5mbyB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4ucnVsZUxhYmVsIHtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucnVsZVZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ucnVsZUFjdGlvbnMge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnJ1bGVDYXJkOmhvdmVyIC5ydWxlQWN0aW9ucyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc21hbGxCdXR0b24ge1xcbiAgbWluLWhlaWdodDogMzRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XFxuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4uc21hbGxCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcXG59XFxuXFxuLmdyb3Vwc0FyZWEge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3cHg7XFxufVxcblxcbi51c2Vyc0FyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDdweDtcXG59XFxuXFxuLnJ1bGVVc2Vyc0FyZWEge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjNDQ1MDZhO1xcbn1cXG5cXG4uYWNjZXNzRW50aXR5U2VjdGlvblRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG59XFxuXFxuLmdyb3VwUm93IHtcXG4gIGJhY2tncm91bmQ6ICMxZDIyMzA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzg0MjU4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxuICBjb2xvcjogI2Q5ZGVlYTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmdyb3VwUm93LnVzZXJSb3cge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGJvcmRlci1jb2xvcjogIzNlNTI2ZjtcXG4gIGJhY2tncm91bmQ6ICMxZDI2MzQ7XFxufVxcblxcbi51c2VySWRlbnRpdHkgLmdyb3VwSWRDb3B5QnV0dG9uIHtcXG4gIGNvbG9yOiAjOWZiNmRmO1xcbn1cXG5cXG4uZ3JvdXBSb3cuc2VsZWN0ZWRHcm91cCB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xcbn1cXG5cXG4uZ3JvdXBSb3cgc3BhbiB7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwQWN0aW9ucyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZ3JvdXBSb3c6aG92ZXIgLmdyb3VwQWN0aW9ucyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMmIzMzQ4O1xcbn1cXG5cXG4uZW1wdHlNaW5pLFxcbi5lbXB0eVJ1bGVzIHtcXG4gIGNvbG9yOiAjOGU5NmFhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uZW1wdHlSdWxlcyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNTU1Zjc2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGlhbG9nQXJlYSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBpbnNldDogMDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dCbG9jayB7XFxuICB3aWR0aDogNTIwcHg7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzI1MmIzODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YzU2NmM7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMThweDtcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmRpYWxvZ1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uZGlhbG9nVGV4dCB7XFxuICBjb2xvcjogI2MyYzhkNTtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5kaWFsb2dJbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGlhbG9nSW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZmllbGRUeXBlRmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmZpZWxkVHlwZUZpZWxkIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIDAgNXB4IDJweDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZpZWxkVHlwZU5hdGl2ZVNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpZWxkVHlwZU5hdGl2ZVNlbGVjdDpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICM2ZDc4OTA7XFxufVxcblxcbi5maWVsZFR5cGVOYXRpdmVTZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzNiNDY1ZDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6ICM5ODU1NjUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICM0YTI0MzAgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcGVyYXRvclRhYnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiAjZDhkZWVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbjpob3ZlcixcXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcXG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udHdvSW5wdXRHcmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbkxpc3RBcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5pbkFkZFJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uaW5WYWx1ZVJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm9wdGlvbmFsUnVsZUJsb2NrIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xcbn1cXG5cXG4ub3B0aW9uYWxSdWxlVGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjYzZjY2RhO1xcbn1cXG5cXG4uYnVsa0FjdGlvbkJhciB7XFxuICBtaW4taGVpZ2h0OiA0MnB4O1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYmFja2dyb3VuZDogIzIwMjYzNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMnB4O1xcbiAgY29sb3I6ICNkOGRlZWE7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbCB7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4NTU2NTtcXG4gIGJhY2tncm91bmQ6ICM0YTI0MzA7XFxuICBjb2xvcjogI2ZmYzRjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM2MzMwNDA7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveCB7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGFjY2VudC1jb2xvcjogIzliYWVlMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZ3JvdXBJZGVudGl0eSB7XFxuICBtaW4td2lkdGg6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4uZ3JvdXBOYW1lIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBJZCB7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cE1lbWJlcnMge1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgY29sb3I6ICM4ZmEzY2Y7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5ncm91cElkQ29weUJ1dHRvbiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uZ3JvdXBJZENvcHlCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNldHRpbmdOb3RpY2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyOHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgei1pbmRleDogMTEwMDA7XFxuICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgcGFkZGluZzogMTFweCAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcXG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWluLWhlaWdodDogNjZweDtcXG4gIHBhZGRpbmc6IDEzcHggMjJweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2E0MDUwO1xcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlIHtcXG4gIGNvbG9yOiAjOGU5NmFhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlLmNoYW5nZWQge1xcbiAgY29sb3I6ICNmMWMyN2Q7XFxufVxcblxcbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiAwIDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzI4YWMzO1xcbiAgYmFja2dyb3VuZDogIzM4NTA4MztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQ6ICMzODQzNWI7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBiYWNrZ3JvdW5kOiAjNDY2MTlhO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmRpc2FibGVkLFxcbi5hcHBseUNvbmZpZ0J1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjQ1O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uc3RhdGljU2VsZWN0aW9uQmFyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBtaW4taGVpZ2h0OiA0NnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIuZW1wdHlTZWxlY3Rpb24ge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2I0MzU2O1xcbiAgYmFja2dyb3VuZDogIzFmMjUzMjtcXG4gIGNvbG9yOiAjODc5MGE1O1xcbn1cXG5cXG4uc3RhdGljU2VsZWN0aW9uQmFyIGIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIuZW1wdHlTZWxlY3Rpb24gYiB7XFxuICBjb2xvcjogI2FlYjZjYTtcXG59XFxuXFxuLmNvbWJpbmVkU2VsZWN0aW9uQmFyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3Rpb25Db3VudGVycyxcXG4uc2VsZWN0aW9uQWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNlbGVjdGlvbkNvdW50ZXJzIHNwYW4ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNDI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kOiAjMmEyMjMwO1xcbiAgYm9yZGVyLWNvbG9yOiAjNTU0MzUwO1xcbiAgY29sb3I6ICM5YTg1OTA7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlcjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMmEyMjMwO1xcbn1cXG5cXG4uYm90dG9tQWNjZXNzUGFuZWwge1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE0cHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib3R0b21TZWxlY3Rpb25BY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCAuc2F2ZVN0YXRlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveCB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjk3Nzk1O1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgYm9yZGVyLWNvbG9yOiAjYTliOWUwO1xcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgYmFja2dyb3VuZDogIzNkNTI3ZDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDlweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgxcHgsIC0xcHgpO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgb3BhY2l0eTogMC45O1xcbiAgYm9yZGVyLWNvbG9yOiAjNzQ4NGE4O1xcbiAgYmFja2dyb3VuZDogIzM0NDc2ZDtcXG59XFxuXFxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIHtcXG4gIGJvcmRlci1jb2xvcjogIzZlN2ZhNjtcXG4gIGJhY2tncm91bmQ6ICMyOTM0NGM7XFxufVxcblxcbi5ncm91cFJvdy5sb2NrZWRHcm91cCAuZ3JvdXBBY3Rpb25zIHtcXG4gIG9wYWNpdHk6IDAuNDU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcbiAgLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ2xvYmFsU2V0dGluZ0J1dHRvbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG59XFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uYnV0dG9uU3ZnSWNvbiB7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5taW5pSWNvbkJ1dHRvbiAuYnV0dG9uU3ZnSWNvbiB7XFxuICB3aWR0aDogMTNweDtcXG4gIGhlaWdodDogMTNweDtcXG59XFxuXFxuLmljb25CdXR0b246bm90KC5kYW5nZXIpLFxcbi5taW5pSWNvbkJ1dHRvbjpub3QoLmRhbmdlcikge1xcbiAgY29sb3I6ICNkOGRlZWE7XFxufVxcblxcbi5zaWRlU2VhcmNoSW5wdXQsXFxuLmdyb3VwU2VhcmNoSW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCAxMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiNTY3MDtcXG4gIGJhY2tncm91bmQ6ICMxZDIzMzA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5zaWRlU2VhcmNoSW5wdXQ6Zm9jdXMsXFxuLmdyb3VwU2VhcmNoSW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4ubW9kYWxJdGVtTWV0YSB7XFxuICBtYXJnaW4tdG9wOiA5cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgY29sb3I6ICM4ZmEzY2Y7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi53YXJuaW5nUGlsbCB7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODU2YTM1O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMzIsIDkzLCAyNSwgMC4yMik7XFxuICBjb2xvcjogI2YyYzY3ODtcXG59XFxuXFxuLm9wZXJhdG9yUGlsbCB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgcGFkZGluZzogMnB4IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICBjb2xvcjogI2Q4ZGVlYTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5vcGVyYXRvci1lcXVhbCB7XFxuICBib3JkZXItY29sb3I6ICM2ZTgzYjg7XFxuICBjb2xvcjogI2M5ZDdmZjtcXG59XFxuXFxuLm9wZXJhdG9yLXJhbmdlIHtcXG4gIGJvcmRlci1jb2xvcjogIzZmOTA3MDtcXG4gIGNvbG9yOiAjYzhmMmM5O1xcbn1cXG5cXG4ub3BlcmF0b3ItaW5jbHVkZSB7XFxuICBib3JkZXItY29sb3I6ICM4YzdhYjg7XFxuICBjb2xvcjogI2UwZDJmZjtcXG59XFxuXFxuLm9wZXJhdG9yLWxpa2Uge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWE3YTVhO1xcbiAgY29sb3I6ICNmZmQ3YjU7XFxufVxcblxcbi5ydWxlV2FybmluZ3Mge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG4ucnVsZVdhcm5pbmdzIHNwYW4ge1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzgyNjAzYjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTMwLCA5NiwgNTksIDAuMik7XFxuICBjb2xvcjogI2YyYzY3ODtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCB7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi53aGVyZVRvZ2dsZUJ1dHRvbiB7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcXG4gIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICBjb2xvcjogI2Q4ZGVlYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLndoZXJlVG9nZ2xlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5ib3R0b21XaGVyZVByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjJweDtcXG4gIHJpZ2h0OiAyMnB4O1xcbiAgYm90dG9tOiA3NHB4O1xcbiAgbWF4LWhlaWdodDogMTU1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcXG4gIGJhY2tncm91bmQ6ICMxNzFjMjc7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMzQpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJvdHRvbVdoZXJlSGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzAzOTRkO1xcbiAgY29sb3I6ICNjNmNjZGE7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uIHtcXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XFxuICBwYWRkaW5nOiAwIDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5ib3R0b21XaGVyZUhlYWRlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcXG59XFxuXFxuLmJvdHRvbVdoZXJlUHJldmlldyBwcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIG1heC1oZWlnaHQ6IDExOHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBmb250LWZhbWlseTogQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1vZGFsUmlnaHRQYW5lbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIHtcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgc3BhbiB7XFxuICBwYWRkaW5nOiAwIDdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiAwIDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2Q4ZGVlYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbjpob3ZlcixcXG4uam9pbk9wZXJhdG9yQ29udHJvbCBidXR0b24uYWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gIGJhY2tncm91bmQ6ICMzNTQxNWI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm9MaW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWxJdGVtQ29uZGl0aW9uIHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGNvbG9yOiAjYWViNmNhICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm1vZGFsSXRlbUNvbmRpdGlvbiBiIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1vZGFsSXRlbUNvdW50IHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgY29sb3I6ICM4ZmEzY2YgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5ncm91cElkVGl0bGVMaW5lIHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDZweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdyb3VwVGl0bGVBZnRlcklkIHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ucnVsZU1vZGVSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5ydWxlTW9kZVJvdyAub3BlcmF0b3JUYWJzIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5ub3RUb2dnbGVCdXR0b24ge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgbWluLXdpZHRoOiA1OHB4O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZkNWQ3NjtcXG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICBjb2xvcjogI2Q4ZGVlYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcXG59XFxuXFxuLm5vdFRvZ2dsZUJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICNjNTliZTA7XFxuICBiYWNrZ3JvdW5kOiAjMmIyNjM4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5ub3RUb2dnbGVCdXR0b24uYWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogI2QxYTdlZjtcXG4gIGJhY2tncm91bmQ6ICM0OTM0NWY7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDIwOSwgMTY3LCAyMzksIDAuMTgpIGluc2V0O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcXG4gIC5ydWxlTW9kZVJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgLm5vdFRvZ2dsZUJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyxcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnNldHRpbmctc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZy1zZWN0aW9uICsgLnNldHRpbmctc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tYWluLWxheWVyLXNldHRpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbn1cblxuLnNldHRpbmctc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2V0dGluZy1zZWN0aW9uLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLm1haW4tbGF5ZXItc2VsZWN0b3Ige1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjY2Vzcy1zZXR0aW5nLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0ZpcmUgUG9ydGFsL3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzXCIsXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9GaXJlJTIwUG9ydGFsL3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVJLHNCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyxcXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5zZXR0aW5nLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNldHRpbmctc2VjdGlvbiArIC5zZXR0aW5nLXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWFpbi1sYXllci1zZXR0aW5nLXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XFxufVxcblxcbi5zZXR0aW5nLXNlY3Rpb24tdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNldHRpbmctc2VjdGlvbi1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbi5tYWluLWxheWVyLXNlbGVjdG9yIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY2Nlc3Mtc2V0dGluZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblwiLFwiLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nLFxcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uICsgLnNldHRpbmctc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWFpbi1sYXllci1zZXR0aW5nLXNlY3Rpb24ge1xcbiAgcGFkZGluZzogMTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zZXR0aW5nLXNlY3Rpb24tZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG59XFxuXFxuLm1haW4tbGF5ZXItc2VsZWN0b3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY2Nlc3Mtc2V0dGluZy1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9BY2Nlc3NTZXR0aW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL0FjY2Vzc1NldHRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3NldHRpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc2V0dGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFJlYWN0LCBnZXRBcHBTdG9yZSB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgXCIuL0FjY2Vzc1NldHRpbmcuY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFJ1bGVPcGVyYXRvciA9IFwiZXF1YWxcIiB8IFwicmFuZ2VcIiB8IFwiaW5jbHVkZVwiIHwgXCJsaWtlXCIgfCBcImJlZm9yZVwiIHwgXCJhZnRlclwiO1xuZXhwb3J0IHR5cGUgQWNjZXNzRmllbGRUeXBlID0gXCJzdHJpbmdcIiB8IFwibnVtYmVyXCIgfCBcImRhdGVcIiB8IFwiYm9vbGVhblwiIHwgXCJndWlkXCIgfCBcImdlb21ldHJ5XCI7XG5cbmV4cG9ydCB0eXBlIEFjY2Vzc1J1bGUgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBvcGVyYXRvcjogUnVsZU9wZXJhdG9yO1xuICAgIGlzTm90PzogYm9vbGVhbjtcbiAgICB2YWx1ZT86IHN0cmluZztcbiAgICBmcm9tPzogc3RyaW5nO1xuICAgIHRvPzogc3RyaW5nO1xuICAgIHZhbHVlcz86IHN0cmluZ1tdO1xuICAgIGdyb3Vwczogc3RyaW5nW107XG4gICAgdXNlcnM6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzRmllbGRSdWxlID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBmaWVsZDogc3RyaW5nO1xuICAgIGZpZWxkVHlwZT86IEFjY2Vzc0ZpZWxkVHlwZTtcbiAgICBydWxlczogQWNjZXNzUnVsZVtdO1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzRmllbGRKb2luT3BlcmF0b3IgPSBcImFuZFwiIHwgXCJvclwiO1xuXG5leHBvcnQgdHlwZSBQb3B1cEZpZWxkQWNjZXNzQ29uZmlnID0ge1xuICAgIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgaW52ZXJ0ZWQ6IGJvb2xlYW47XG4gICAgZmllbGRzOiBzdHJpbmdbXTtcbiAgICBncm91cHM6IHN0cmluZ1tdO1xuICAgIHVzZXJzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjY2Vzc0NvbmZpZyA9IHtcbiAgICBmdWxsQWNjZXNzR3JvdXBzOiBzdHJpbmdbXTtcbiAgICBmdWxsQWNjZXNzVXNlcnM6IHN0cmluZ1tdO1xuICAgIHJ1bGVzOiBBY2Nlc3NGaWVsZFJ1bGVbXTtcbiAgICAvKipcbiAgICAgKiDQmtCw0Log0L7QsdGK0LXQtNC40L3Rj9GC0Ywg0YDQsNC30L3Ri9C1INGB0YLQvtC70LHRhtGLINC00LvRjyDQvtC00L3QvtC5INCz0YDRg9C/0L/Riy5cbiAgICAgKiDQn9GA0LDQstC40LvQsCDQstC90YPRgtGA0Lgg0L7QtNC90L7Qs9C+INGB0YLQvtC70LHRhtCwINCy0YHQtdCz0LTQsCDQvtCx0YrQtdC00LjQvdGP0Y7RgtGB0Y8g0YfQtdGA0LXQtyBPUi5cbiAgICAgKi9cbiAgICBmaWVsZEpvaW5PcGVyYXRvcj86IEFjY2Vzc0ZpZWxkSm9pbk9wZXJhdG9yO1xuICAgIHBvcHVwRmllbGRBY2Nlc3M/OiBQb3B1cEZpZWxkQWNjZXNzQ29uZmlnO1xufTtcblxudHlwZSBQb3J0YWxHcm91cEluZm8gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHVzZXJzQ291bnQ6IG51bWJlciB8IG51bGw7XG4gICAgaXNVbmF2YWlsYWJsZT86IGJvb2xlYW47XG59O1xuXG50eXBlIFBvcnRhbFVzZXJJbmZvID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgZnVsbE5hbWU/OiBzdHJpbmc7XG4gICAgaXNVbmF2YWlsYWJsZT86IGJvb2xlYW47XG59O1xuXG50eXBlIEVzcmlSZXF1ZXN0RnVuY3Rpb24gPSAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgICAgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+O1xuICAgICAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XG4gICAgfSxcbikgPT4gUHJvbWlzZTx7IGRhdGE6IGFueSB9PjtcblxudHlwZSBEaWFsb2dTdGF0ZSA9IG51bGwgfCB7XG4gICAgdHlwZTpcbiAgICB8IFwiYWRkRmllbGRcIlxuICAgIHwgXCJlZGl0RmllbGRcIlxuICAgIHwgXCJkZWxldGVGaWVsZFwiXG4gICAgfCBcImFkZFJ1bGVcIlxuICAgIHwgXCJlZGl0UnVsZVwiXG4gICAgfCBcImRlbGV0ZVJ1bGVcIlxuICAgIHwgXCJhZGRHcm91cFwiXG4gICAgfCBcImVkaXRHcm91cFwiXG4gICAgfCBcImRlbGV0ZUdyb3VwXCJcbiAgICB8IFwiYWRkR2xvYmFsR3JvdXBcIlxuICAgIHwgXCJlZGl0R2xvYmFsR3JvdXBcIlxuICAgIHwgXCJkZWxldGVHbG9iYWxHcm91cFwiXG4gICAgfCBcImFkZFVzZXJcIlxuICAgIHwgXCJlZGl0VXNlclwiXG4gICAgfCBcImRlbGV0ZVVzZXJcIlxuICAgIHwgXCJhZGRHbG9iYWxVc2VyXCJcbiAgICB8IFwiZWRpdEdsb2JhbFVzZXJcIlxuICAgIHwgXCJkZWxldGVHbG9iYWxVc2VyXCI7XG4gICAgcGF5bG9hZD86IGFueTtcbn07XG5cbmNvbnN0IEdMT0JBTF9BQ0NFU1NfSUQgPSBcIl9fZ2xvYmFsX2FjY2Vzc19fXCI7XG5jb25zdCBQT1BVUF9GSUVMRF9BQ0NFU1NfSUQgPSBcIl9fcG9wdXBfZmllbGRfYWNjZXNzX19cIjtcblxuY29uc3QgRWRpdEljb24gPSAoKSA9PiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9XCJidXR0b25TdmdJY29uXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTE3LjUxOTUzMSAwLjA3ODEyNSBDMTcuMjM0Mzc1IDAuMTM2NzE5IDE2LjkxNzk2OSAwLjI3NzM0NCAxNi42OTE0MDYgMC40NDkyMTkgQzE2LjU2NjQwNiAwLjUzOTA2MiAxNi4yMDMxMjUgMC44ODI4MTIgMTUuODc4OTA2IDEuMjA3MDMxIEwxNS4yOTI5NjkgMS43OTY4NzUgTDE2Ljc2OTUzMSAzLjI2OTUzMSBMMTguMjQyMTg4IDQuNzQ2MDk0IEwxOC44NjcxODggNC4xMjEwOTQgQzE5LjIxNDg0NCAzLjc3NzM0NCAxOS41NTg1OTQgMy4zOTg0MzggMTkuNjQwNjI1IDMuMjgxMjUgQzIwLjE5NTMxMiAyLjQ0NTMxMiAyMC4wODk4NDQgMS4zNzEwOTQgMTkuMzc4OTA2IDAuNjYwMTU2IEMxOC44ODI4MTIgMC4xNjQwNjIgMTguMTg3NSAtMC4wNTQ2ODc1IDE3LjUxOTUzMSAwLjA3ODEyNSBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMS4wNjY0MDYgNi4wMjM0MzggQzguMzkwNjI1IDguNzAzMTI1IDcuNzM0Mzc1IDkuMzgyODEyIDcuNzAzMTI1IDkuNDkyMTg4IEM3LjY4MzU5NCA5LjU2NjQwNiA3LjUzOTA2MiAxMC4yNzczNDQgNy4zODI4MTIgMTEuMDc0MjE5IEM3LjE5MTQwNiAxMi4wMzUxNTYgNy4xMDU0NjkgMTIuNTU0Njg4IDcuMTIxMDk0IDEyLjYyODkwNiBDNy4xNTYyNSAxMi43NjU2MjUgNy4yNzM0MzggMTIuODgyODEyIDcuNDEwMTU2IDEyLjkxNzk2OSBDNy41NTg1OTQgMTIuOTUzMTI1IDEwLjUzOTA2MiAxMi4zNTkzNzUgMTAuNjkxNDA2IDEyLjI2NTYyNSBDMTAuNzUgMTIuMjI2NTYyIDEyLjI3NzM0NCAxMC43MTg3NSAxNC4wODIwMzEgOC45MTAxNTYgTDE3LjM2MzI4MSA1LjYyNSBMMTUuODk4NDM4IDQuMTYwMTU2IEMxNS4wOTM3NSAzLjM1NTQ2OSAxNC40MjU3ODEgMi42OTUzMTIgMTQuNDE0MDYyIDIuNjk1MzEyIEMxNC40MDIzNDQgMi42OTUzMTIgMTIuODk4NDM4IDQuMTk1MzEyIDExLjA2NjQwNiA2LjAyMzQzOCBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yLjA0Mjk2OSAzLjQxNzk2OSBDMS4yOTI5NjkgMy41NTQ2ODggMC41OTc2NTYgNC4wODU5MzggMC4yNTc4MTIgNC43ODUxNTYgQy0wLjAxNTYyNSA1LjM0NzY1NiAtMC4wMDM5MDYyNSA0Ljk1MzEyNSAwLjAwNzgxMjUgMTEuODM1OTM4IEwwLjAxOTUzMTIgMTguMDI3MzQ0IEwwLjEwNTQ2OSAxOC4yODEyNSBDMC4yMzQzNzUgMTguNjU2MjUgMC40NTcwMzEgMTkuMDA3ODEyIDAuNzQyMTg4IDE5LjI5Njg3NSBDMS4wMzUxNTYgMTkuNTg5ODQ0IDEuMzI0MjE5IDE5Ljc2OTUzMSAxLjcwNzAzMSAxOS45MDIzNDQgTDEuOTcyNjU2IDIwIEwxNC42NDQ1MzEgMjAgTDE0Ljk0OTIxOSAxOS45MDIzNDQgQzE1LjczNDM3NSAxOS42NTYyNSAxNi4zNTE1NjIgMTkgMTYuNTg5ODQ0IDE4LjE2MDE1NiBDMTYuNjU2MjUgMTcuOTI1NzgxIDE2LjY2MDE1NiAxNy42NzE4NzUgMTYuNjYwMTU2IDE0LjI3MzQzOCBMMTYuNjYwMTU2IDEwLjYzNjcxOSBMMTYuNTQyOTY5IDEwLjQ0OTIxOSBDMTYuMzcxMDk0IDEwLjE3MTg3NSAxNi4wODIwMzEgMTAuMDIzNDM4IDE1Ljc2OTUzMSAxMC4wNTA3ODEgQzE1LjQ5NjA5NCAxMC4wNzQyMTkgMTUuMjgxMjUgMTAuMjAzMTI1IDE1LjEyODkwNiAxMC40Mzc1IEwxNS4wMTk1MzEgMTAuNjAxNTYyIEwxNSAxNC4xOTUzMTIgQzE0Ljk4MDQ2OSAxNy40ODQzNzUgMTQuOTc2NTYyIDE3LjgwNDY4OCAxNC45MTQwNjIgMTcuOTE0MDYyIEMxNC44MjAzMTIgMTguMDg1OTM4IDE0LjU5NzY1NiAxOC4yNjk1MzEgMTQuNDI1NzgxIDE4LjMyMDMxMiBDMTQuMzIwMzEyIDE4LjM1MTU2MiAxMi41MTE3MTkgMTguMzU5Mzc1IDguMjM4MjgxIDE4LjM1MTU2MiBMMi4xOTkyMTkgMTguMzM5ODQ0IEwyLjA0Njg3NSAxOC4yMzQzNzUgQzEuOTY0ODQ0IDE4LjE3NTc4MSAxLjg1MTU2MiAxOC4wNjI1IDEuNzk2ODc1IDE3Ljk4MDQ2OSBMMS42OTkyMTkgMTcuODM1OTM4IEwxLjY4NzUgMTEuNzUgQzEuNjc5Njg4IDUuODE2NDA2IDEuNjc5Njg4IDUuNjYwMTU2IDEuNzUzOTA2IDUuNTE1NjI1IEMxLjc5Njg3NSA1LjQzNzUgMS44Nzg5MDYgNS4zMjQyMTkgMS45NDE0MDYgNS4yNjU2MjUgQzIuMTg3NSA1LjAyNzM0NCAyLjAxNTYyNSA1LjAzOTA2MiA1LjgwNDY4OCA1LjAzOTA2MiBDOC40MzM1OTQgNS4wMzkwNjIgOS4zMDg1OTQgNS4wMjczNDQgOS40Mjk2ODggNC45OTIxODggQzkuNjUyMzQ0IDQuOTI1NzgxIDkuODk0NTMxIDQuNjcxODc1IDkuOTU3MDMxIDQuNDQxNDA2IEMxMC4wNjI1IDQuMDcwMzEyIDkuOTA2MjUgMy42Nzk2ODggOS41NzgxMjUgMy40ODgyODEgTDkuMzk0NTMxIDMuMzc4OTA2IEw1Ljg1OTM3NSAzLjM3MTA5NCBDMy4wNzgxMjUgMy4zNjcxODggMi4yNjU2MjUgMy4zNzUgMi4wNDI5NjkgMy40MTc5NjkgWlwiIC8+XG4gICAgPC9zdmc+XG4pO1xuXG5jb25zdCBUcmFzaEljb24gPSAoKSA9PiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9XCJidXR0b25TdmdJY29uXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTcuOTMzNTk0IDEuOTM3NSBDNy42MDkzNzUgMi4wMjM0MzggNy4yODkwNjIgMi4yMTQ4NDQgNy4wNTg1OTQgMi40NTcwMzEgQzYuODA4NTk0IDIuNzE0ODQ0IDYuNjk5MjE5IDIuOTI1NzgxIDYuNTI3MzQ0IDMuNDQ1MzEyIEM2LjM4NjcxOSAzLjg2NzE4OCA2LjIwMzEyNSA0LjEyMTA5NCA1LjkyMTg3NSA0LjI2OTUzMSBDNS43NjU2MjUgNC4zNTE1NjIgNS43MTQ4NDQgNC4zNTU0NjkgNC4yMzA0NjkgNC4zNzUgQzIuNzUzOTA2IDQuMzk0NTMxIDIuNjk1MzEyIDQuMzk4NDM4IDIuNTg5ODQ0IDQuNDc2NTYyIEMyLjIwNzAzMSA0Ljc2MTcxOSAyLjIwNzAzMSA1LjIzODI4MSAyLjU4OTg0NCA1LjUyMzQzOCBMMi42OTkyMTkgNS42MDU0NjkgTDE3LjMwMDc4MSA1LjYwNTQ2OSBMMTcuNDEwMTU2IDUuNTIzNDM4IEMxNy43OTI5NjkgNS4yMzgyODEgMTcuNzkyOTY5IDQuNzYxNzE5IDE3LjQxMDE1NiA0LjQ3NjU2MiBDMTcuMzA0Njg4IDQuMzk4NDM4IDE3LjI0NjA5NCA0LjM5NDUzMSAxNS43Njk1MzEgNC4zNzUgQzE0LjI4NTE1NiA0LjM1NTQ2OSAxNC4yMzQzNzUgNC4zNTE1NjIgMTQuMDc4MTI1IDQuMjY5NTMxIEMxMy43OTY4NzUgNC4xMjEwOTQgMTMuNjEzMjgxIDMuODY3MTg4IDEzLjQ3MjY1NiAzLjQ0NTMxMiBDMTMuMzAwNzgxIDIuOTI1NzgxIDEzLjE5MTQwNiAyLjcxNDg0NCAxMi45NDE0MDYgMi40NTcwMzEgQzEyLjcwMzEyNSAyLjIwNzAzMSAxMi4zOTA2MjUgMi4wMjM0MzggMTIuMDUwNzgxIDEuOTMzNTk0IEMxMS43MTg3NSAxLjg0NzY1NiA4LjI1MzkwNiAxLjg1MTU2MiA3LjkzMzU5NCAxLjkzNzUgWlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNC4xMjEwOTQgNi40ODgyODEgQzQuMDU4NTk0IDYuNTAzOTA2IDMuOTUzMTI1IDYuNTY2NDA2IDMuODkwNjI1IDYuNjI1IEMzLjY0ODQzOCA2Ljg1MTU2MiAzLjY0ODQzOCA2LjY0MDYyNSAzLjkwNjI1IDEwLjQ5NjA5NCBDNC4xNzk2ODggMTQuNTk3NjU2IDQuMjEwOTM4IDE0LjkyOTY4OCA0LjM1MTU2MiAxNS42MDkzNzUgQzQuNjY0MDYyIDE3LjA5NzY1NiA1LjQ4MDQ2OSAxNy44MjQyMTkgNy4wODk4NDQgMTguMDUwNzgxIEM3LjU0Njg3NSAxOC4xMTMyODEgMTEuNDk2MDk0IDE4LjE0NDUzMSAxMi4zMjQyMTkgMTguMDg5ODQ0IEMxMy43ODEyNSAxNy45OTIxODggMTQuNTI3MzQ0IDE3LjY4NzUgMTUuMDYyNSAxNi45NzY1NjIgQzE1LjM5ODQzOCAxNi41MzUxNTYgMTUuNTcwMzEyIDE2LjA3NDIxOSAxNS42OTkyMTkgMTUuMzA4NTk0IEMxNS44MTY0MDYgMTQuNjEzMjgxIDE1LjgzNTkzOCAxNC4zNzEwOTQgMTYuMDkzNzUgMTAuNSBDMTYuMjY5NTMxIDcuODcxMDk0IDE2LjMxNjQwNiA2Ljk2ODc1IDE2LjI4NTE1NiA2Ljg4NjcxOSBDMTYuMjIyNjU2IDYuNzE4NzUgMTYuMDE1NjI1IDYuNTI3MzQ0IDE1Ljg1MTU2MiA2LjQ4MDQ2OSBDMTUuNTc0MjE5IDYuNDA2MjUgMTUuMjM4MjgxIDYuNTY2NDA2IDE1LjEzMjgxMiA2LjgyMDMxMiBDMTUuMDkzNzUgNi45MTAxNTYgMTUuMDAzOTA2IDguMDM5MDYyIDE0Ljg0Mzc1IDEwLjQ1NzAzMSBDMTQuNTYyNSAxNC42Nzk2ODggMTQuNTE5NTMxIDE1LjExMzI4MSAxNC4zNDc2NTYgMTUuNjQ0NTMxIEMxNC4xODc1IDE2LjE0ODQzOCAxMy44OTQ1MzEgMTYuNDg4MjgxIDEzLjQ5MjE4OCAxNi42NDA2MjUgQzEyLjk1NzAzMSAxNi44Mzk4NDQgMTIuNzEwOTM4IDE2Ljg1NTQ2OSAxMCAxNi44NTU0NjkgQzcuMjg5MDYyIDE2Ljg1NTQ2OSA3LjA0Mjk2OSAxNi44Mzk4NDQgNi41MDc4MTIgMTYuNjQwNjI1IEM2LjEwNTQ2OSAxNi40ODgyODEgNS44MTI1IDE2LjE0ODQzOCA1LjY1MjM0NCAxNS42NDQ1MzEgQzUuNDgwNDY5IDE1LjExMzI4MSA1LjQzNzUgMTQuNjc5Njg4IDUuMTU2MjUgMTAuNDU3MDMxIEM0Ljk5NjA5NCA4LjA1ODU5NCA0LjkwNjI1IDYuOTEwMTU2IDQuODY3MTg4IDYuODI0MjE5IEM0LjgwMDc4MSA2LjY2NDA2MiA0LjY5MTQwNiA2LjU3MDMxMiA0LjUwMzkwNiA2LjUgQzQuMzMyMDMxIDYuNDQxNDA2IDQuMjg1MTU2IDYuNDM3NSA0LjEyMTA5NCA2LjQ4ODI4MSBaXCIgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmNvbnN0IG1ha2VJZCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEFjY2Vzc0NvbmZpZzogQWNjZXNzQ29uZmlnID0ge1xuICAgIGZ1bGxBY2Nlc3NHcm91cHM6IFtdLFxuICAgIGZ1bGxBY2Nlc3NVc2VyczogW10sXG4gICAgcnVsZXM6IFtdLFxuICAgIGZpZWxkSm9pbk9wZXJhdG9yOiBcImFuZFwiLFxuICAgIHBvcHVwRmllbGRBY2Nlc3M6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGludmVydGVkOiBmYWxzZSxcbiAgICAgICAgZmllbGRzOiBbXSxcbiAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgdXNlcnM6IFtdLFxuICAgIH0sXG59O1xuXG5jb25zdCBrbm93bkZpZWxkVHlwZXM6IFJlY29yZDxzdHJpbmcsIEFjY2Vzc0ZpZWxkVHlwZT4gPSB7XG4gICAgb2JqZWN0aWQ6IFwibnVtYmVyXCIsIHVuaXF1ZWlkOiBcInN0cmluZ1wiLCBjb29yZGluYXRlOiBcInN0cmluZ1wiLCByZWdpb246IFwic3RyaW5nXCIsIGRpc3RyaWN0OiBcInN0cmluZ1wiLFxuICAgIGZpcmVfZGF0ZTogXCJzdHJpbmdcIiwgeWVhcjogXCJzdHJpbmdcIiwgYXJlYWhhOiBcIm51bWJlclwiLCByZWdpb25faWQ6IFwic3RyaW5nXCIsIGRpc3RyaWNfaWQ6IFwic3RyaW5nXCIsXG4gICAgbWZ5X2lkOiBcInN0cmluZ1wiLCB0eXBlX2lkOiBcInN0cmluZ1wiLCBjcmVhdGVkX2RhdGU6IFwiZGF0ZVwiLCBpbnNwZWN0b3JfbmFtZTogXCJzdHJpbmdcIixcbiAgICBpbnNwZWN0aW9uX2RhdGU6IFwiZGF0ZVwiLCBpbnNwZWN0aW9uX3Jlc3VsdDogXCJzdHJpbmdcIiwgZmlyZV9wcmVzZW50OiBcImJvb2xlYW5cIiwgbm90ZXM6IFwic3RyaW5nXCIsXG4gICAgcGhvdG9fcGF0aHM6IFwic3RyaW5nXCIsIHBob3RvX3VwbG9hZGVkOiBcImJvb2xlYW5cIiwgY291cnRfZGVjaXNpb25fdXBsb2FkZWQ6IFwiYm9vbGVhblwiLFxuICAgIGRhbWFnZV9hbW91bnQ6IFwibnVtYmVyXCIsIGZpbmVfYW1vdW50OiBcIm51bWJlclwiLCBkYWxvbGF0bm9tYV9wYXRoOiBcInN0cmluZ1wiLCBzdWRfcWFyb3JpX3BhdGg6IFwic3RyaW5nXCIsXG4gICAgaW5zcGVjdGlvbl9jcmVhdGVkX2F0OiBcImRhdGVcIiwgaW5zcGVjdGlvbl91cGRhdGVkX2F0OiBcImRhdGVcIiwgaW5zcGVjdGlvbl91bmlxdWVpZDogXCJzdHJpbmdcIixcbn07XG5cbmNvbnN0IGdldEtub3duRmllbGRUeXBlID0gKGZpZWxkOiBzdHJpbmcpOiBBY2Nlc3NGaWVsZFR5cGUgPT5cbiAgICBrbm93bkZpZWxkVHlwZXNbU3RyaW5nKGZpZWxkIHx8IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXSA/PyBcInN0cmluZ1wiO1xuXG5jb25zdCBxdW90ZVZhbHVlID0gKHZhbHVlOiBzdHJpbmcsIGZpZWxkVHlwZTogQWNjZXNzRmllbGRUeXBlID0gXCJzdHJpbmdcIik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcblxuICAgIGlmIChmaWVsZFR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodHJpbW1lZCkgPyB0cmltbWVkIDogXCIwXCI7XG4gICAgfVxuICAgIGlmIChmaWVsZFR5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBbXCJ0cnVlXCIsIFwiMVwiLCBcInllc1wiLCBcImhhXCIsIFwi0LTQsFwiXS5pbmNsdWRlcyh0cmltbWVkLnRvTG93ZXJDYXNlKCkpID8gXCIxXCIgOiBcIjBcIjtcbiAgICB9XG4gICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgcmV0dXJuIGBEQVRFICcke3RyaW1tZWQucmVwbGFjZSgvJy9nLCBcIicnXCIpfSdgO1xuICAgIH1cblxuICAgIHJldHVybiBgJyR7dHJpbW1lZC5yZXBsYWNlKC8nL2csIFwiJydcIil9J2A7XG59O1xuXG5jb25zdCBub3JtYWxpemVPcGVyYXRvciA9IChvcGVyYXRvcjogYW55KTogUnVsZU9wZXJhdG9yID0+IHtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiZXF1YWxcIikgcmV0dXJuIFwiZXF1YWxcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwicmFuZ2VcIikgcmV0dXJuIFwicmFuZ2VcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiKSByZXR1cm4gXCJpbmNsdWRlXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImxpa2VcIikgcmV0dXJuIFwibGlrZVwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJiZWZvcmVcIikgcmV0dXJuIFwiYmVmb3JlXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImFmdGVyXCIpIHJldHVybiBcImFmdGVyXCI7XG5cbiAgICBpZiAob3BlcmF0b3IgPT09IFwiZXFcIikgcmV0dXJuIFwiZXF1YWxcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiYmV0d2VlblwiKSByZXR1cm4gXCJyYW5nZVwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJpblwiKSByZXR1cm4gXCJpbmNsdWRlXCI7XG5cbiAgICByZXR1cm4gXCJlcXVhbFwiO1xufTtcblxuY29uc3QgYnVpbGRSdWxlV2hlcmUgPSAoZmllbGQ6IHN0cmluZywgcnVsZTogQWNjZXNzUnVsZSwgZmllbGRUeXBlOiBBY2Nlc3NGaWVsZFR5cGUgPSBcInN0cmluZ1wiKTogc3RyaW5nID0+IHtcbiAgICBsZXQgd2hlcmUgPSBcIjE9MFwiO1xuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwiZXF1YWxcIikge1xuICAgICAgICB3aGVyZSA9IGAke2ZpZWxkfSA9ICR7cXVvdGVWYWx1ZShydWxlLnZhbHVlID8/IFwiXCIsIGZpZWxkVHlwZSl9YDtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgIHdoZXJlID0gYCR7ZmllbGR9IEJFVFdFRU4gJHtxdW90ZVZhbHVlKHJ1bGUuZnJvbSA/PyBcIlwiLCBmaWVsZFR5cGUpfSBBTkQgJHtxdW90ZVZhbHVlKHJ1bGUudG8gPz8gXCJcIiwgZmllbGRUeXBlKX1gO1xuICAgIH1cblxuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImluY2x1ZGVcIikge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBydWxlLnZhbHVlcyA/PyBbXTtcbiAgICAgICAgd2hlcmUgPSBgJHtmaWVsZH0gSU4gKCR7dmFsdWVzLm1hcCgodmFsdWUpID0+IHF1b3RlVmFsdWUodmFsdWUsIGZpZWxkVHlwZSkpLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJsaWtlXCIpIHtcbiAgICAgICAgd2hlcmUgPSBgJHtmaWVsZH0gTElLRSAke3F1b3RlVmFsdWUocnVsZS52YWx1ZSA/PyBcIlwiLCBmaWVsZFR5cGUpfWA7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwiYmVmb3JlXCIpIHdoZXJlID0gYCR7ZmllbGR9IDwgJHtxdW90ZVZhbHVlKHJ1bGUudmFsdWUgPz8gXCJcIiwgZmllbGRUeXBlKX1gO1xuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImFmdGVyXCIpIHdoZXJlID0gYCR7ZmllbGR9ID4gJHtxdW90ZVZhbHVlKHJ1bGUudmFsdWUgPz8gXCJcIiwgZmllbGRUeXBlKX1gO1xuXG4gICAgcmV0dXJuIHJ1bGUuaXNOb3QgPyBgTk9UICgke3doZXJlfSlgIDogd2hlcmU7XG59O1xuXG5jb25zdCB3cmFwV2hlcmVQYXJ0ID0gKHZhbHVlOiBzdHJpbmcsIHNob3VsZFdyYXA6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBzaG91bGRXcmFwID8gYCgke3ZhbHVlfSlgIDogdmFsdWU7XG59O1xuXG5jb25zdCBidWlsZFdoZXJlRm9yR3JvdXAgPSAoY29uZmlnOiBBY2Nlc3NDb25maWcsIGdyb3VwSWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qgam9pbldvcmQgPSBjb25maWcuZmllbGRKb2luT3BlcmF0b3IgPT09IFwib3JcIiA/IFwiT1JcIiA6IFwiQU5EXCI7XG4gICAgY29uc3QgZmllbGRQYXJ0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbmZpZy5ydWxlcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCBydWxlUGFydHMgPSBmaWVsZC5ydWxlc1xuICAgICAgICAgICAgLmZpbHRlcigocnVsZSkgPT4gcnVsZS5ncm91cHMuaW5jbHVkZXMoZ3JvdXBJZCkpXG4gICAgICAgICAgICAubWFwKChydWxlKSA9PiBidWlsZFJ1bGVXaGVyZShmaWVsZC5maWVsZCwgcnVsZSwgZmllbGQuZmllbGRUeXBlID8/IGdldEtub3duRmllbGRUeXBlKGZpZWxkLmZpZWxkKSkpO1xuXG4gICAgICAgIGlmIChydWxlUGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBmaWVsZFBhcnRzLnB1c2gocnVsZVBhcnRzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlUGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZmllbGRQYXJ0cy5wdXNoKGAoJHtydWxlUGFydHMuam9pbihcIiBPUiBcIil9KWApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGRQYXJ0cy5sZW5ndGggPT09IDApIHJldHVybiBcIjE9MFwiO1xuXG4gICAgcmV0dXJuIGZpZWxkUGFydHNcbiAgICAgICAgLm1hcCgocGFydCkgPT4gd3JhcFdoZXJlUGFydChwYXJ0LCBmaWVsZFBhcnRzLmxlbmd0aCA+IDEgJiYgL1xcc09SXFxzLy50ZXN0KHBhcnQpKSlcbiAgICAgICAgLmpvaW4oYCAke2pvaW5Xb3JkfSBgKTtcbn07XG5cbmNvbnN0IGdldFJ1bGVBY2Nlc3NHcm91cElkcyA9IChjb25maWc6IEFjY2Vzc0NvbmZpZyk6IHN0cmluZ1tdID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgICAgbmV3IFNldChcbiAgICAgICAgICAgIGNvbmZpZy5ydWxlcy5mbGF0TWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5ydWxlcy5mbGF0TWFwKChydWxlKSA9PiBydWxlLmdyb3VwcyksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICkuc29ydCgpO1xufTtcblxuXG5jb25zdCBub3JtYWxpemVMb2FkZWRDb25maWcgPSAoZGF0YTogYW55KTogQWNjZXNzQ29uZmlnID0+IHtcbiAgICBjb25zdCBmaWVsZEpvaW5PcGVyYXRvcjogQWNjZXNzRmllbGRKb2luT3BlcmF0b3IgPVxuICAgICAgICBkYXRhPy5maWVsZEpvaW5PcGVyYXRvciA9PT0gXCJvclwiID8gXCJvclwiIDogXCJhbmRcIjtcbiAgICBjb25zdCBsZWdhY3lQb3B1cEZpZWxkID0gZGF0YT8ucG9wdXBGaWVsZEFjY2Vzcz8uZW5hYmxlZCA9PT0gdHJ1ZVxuICAgICAgICA/IFN0cmluZyhkYXRhPy5wb3B1cEZpZWxkQWNjZXNzPy5maWVsZCB8fCBcIlwiKS50cmltKClcbiAgICAgICAgOiBcIlwiO1xuICAgIGNvbnN0IHBvcHVwRmllbGRzOiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoZGF0YT8ucG9wdXBGaWVsZEFjY2Vzcz8uZmllbGRzKVxuICAgICAgICA/IGRhdGEucG9wdXBGaWVsZEFjY2Vzcy5maWVsZHNcbiAgICAgICAgICAgIC5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pLnRyaW0oKSlcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgOiBsZWdhY3lQb3B1cEZpZWxkXG4gICAgICAgICAgICA/IFtsZWdhY3lQb3B1cEZpZWxkXVxuICAgICAgICAgICAgOiBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IEFycmF5LmlzQXJyYXkoZGF0YT8uZnVsbEFjY2Vzc0dyb3VwcylcbiAgICAgICAgICAgID8gZGF0YS5mdWxsQWNjZXNzR3JvdXBzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBmdWxsQWNjZXNzVXNlcnM6IEFycmF5LmlzQXJyYXkoZGF0YT8uZnVsbEFjY2Vzc1VzZXJzKVxuICAgICAgICAgICAgPyBkYXRhLmZ1bGxBY2Nlc3NVc2Vycy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgcG9wdXBGaWVsZEFjY2Vzczoge1xuICAgICAgICAgICAgZW5hYmxlZDogZGF0YT8ucG9wdXBGaWVsZEFjY2Vzcz8uZW5hYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGludmVydGVkOiBkYXRhPy5wb3B1cEZpZWxkQWNjZXNzPy5pbnZlcnRlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGZpZWxkczogQXJyYXkuZnJvbShuZXcgU2V0KHBvcHVwRmllbGRzKSksXG4gICAgICAgICAgICBncm91cHM6IEFycmF5LmlzQXJyYXkoZGF0YT8ucG9wdXBGaWVsZEFjY2Vzcz8uZ3JvdXBzKVxuICAgICAgICAgICAgICAgID8gZGF0YS5wb3B1cEZpZWxkQWNjZXNzLmdyb3Vwcy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICB1c2VyczogQXJyYXkuaXNBcnJheShkYXRhPy5wb3B1cEZpZWxkQWNjZXNzPy51c2VycylcbiAgICAgICAgICAgICAgICA/IGRhdGEucG9wdXBGaWVsZEFjY2Vzcy51c2Vycy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGRhdGE/LnJ1bGVzKVxuICAgICAgICAgICAgPyBkYXRhLnJ1bGVzLm1hcCgoZmllbGRJdGVtOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGZpZWxkSXRlbS5pZCB8fCBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZmllbGRJdGVtLnRpdGxlIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkSXRlbS5maWVsZCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogZmllbGRJdGVtLmZpZWxkVHlwZSB8fCBnZXRLbm93bkZpZWxkVHlwZShmaWVsZEl0ZW0uZmllbGQpLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGZpZWxkSXRlbS5ydWxlcylcbiAgICAgICAgICAgICAgICAgICAgPyBmaWVsZEl0ZW0ucnVsZXMubWFwKChydWxlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcnVsZS5pZCB8fCBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBub3JtYWxpemVPcGVyYXRvcihydWxlLm9wZXJhdG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90OiBydWxlLmlzTm90ID09PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBydWxlLmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogcnVsZS50byxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogQXJyYXkuaXNBcnJheShydWxlLnZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJ1bGUudmFsdWVzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogQXJyYXkuaXNBcnJheShydWxlLmdyb3VwcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJ1bGUuZ3JvdXBzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiBBcnJheS5pc0FycmF5KHJ1bGUudXNlcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLnVzZXJzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogW10sXG4gICAgICAgIGZpZWxkSm9pbk9wZXJhdG9yLFxuICAgIH07XG59O1xuXG5jb25zdCBjbG9uZUFjY2Vzc0NvbmZpZyA9IChkYXRhOiBBY2Nlc3NDb25maWcpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIHJldHVybiBub3JtYWxpemVMb2FkZWRDb25maWcoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkpO1xufTtcblxuY29uc3QgZ2V0SW5pdGlhbEFjY2Vzc0NvbmZpZyA9ICh3aWRnZXRDb25maWc6IGFueSk6IEFjY2Vzc0NvbmZpZyA9PiB7XG4gICAgY29uc3Qgc3RvcmVkQ29uZmlnID0gd2lkZ2V0Q29uZmlnPy5hY2Nlc3NDb25maWc7XG5cbiAgICBpZiAoIXN0b3JlZENvbmZpZykge1xuICAgICAgICByZXR1cm4gY2xvbmVBY2Nlc3NDb25maWcoZGVmYXVsdEFjY2Vzc0NvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhaW5Db25maWcgPVxuICAgICAgICB0eXBlb2Ygc3RvcmVkQ29uZmlnLmFzTXV0YWJsZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0b3JlZENvbmZpZy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgICAgICAgICA6IHN0b3JlZENvbmZpZztcblxuICAgIHJldHVybiBub3JtYWxpemVMb2FkZWRDb25maWcocGxhaW5Db25maWcpO1xufTtcblxuY29uc3QgZ2V0Q29uZmlnR3JvdXBJZHMgPSAoY29uZmlnOiBBY2Nlc3NDb25maWcpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJZHMgPSBbXG4gICAgICAgIC4uLmNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLFxuICAgICAgICAuLi4oY29uZmlnLnBvcHVwRmllbGRBY2Nlc3M/Lmdyb3VwcyA/PyBbXSksXG4gICAgICAgIC4uLmNvbmZpZy5ydWxlcy5mbGF0TWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZsYXRNYXAoKHJ1bGUpID0+IHJ1bGUuZ3JvdXBzKSxcbiAgICAgICAgKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChncm91cElkcykpLnNvcnQoKTtcbn07XG5cbmNvbnN0IGdldENvbmZpZ1VzZXJJZHMgPSAoY29uZmlnOiBBY2Nlc3NDb25maWcpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgdXNlcklkcyA9IFtcbiAgICAgICAgLi4uY29uZmlnLmZ1bGxBY2Nlc3NVc2VycyxcbiAgICAgICAgLi4uKGNvbmZpZy5wb3B1cEZpZWxkQWNjZXNzPy51c2VycyA/PyBbXSksXG4gICAgICAgIC4uLmNvbmZpZy5ydWxlcy5mbGF0TWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZsYXRNYXAoKHJ1bGUpID0+IHJ1bGUudXNlcnMpLFxuICAgICAgICApLFxuICAgIF07XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHVzZXJJZHMpKS5zb3J0KCk7XG59O1xuXG5jb25zdCBnZXRQb3J0YWxHcm91cEluZm8gPSBhc3luYyAoXG4gICAgZXNyaVJlcXVlc3Q6IEVzcmlSZXF1ZXN0RnVuY3Rpb24sXG4gICAgcG9ydGFsVXJsOiBzdHJpbmcsXG4gICAgZ3JvdXBJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxQb3J0YWxHcm91cEluZm8+ID0+IHtcbiAgICBjb25zdCBlbmNvZGVkR3JvdXBJZCA9IGVuY29kZVVSSUNvbXBvbmVudChncm91cElkKTtcbiAgICBjb25zdCBncm91cFVybCA9IGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbW11bml0eS9ncm91cHMvJHtlbmNvZGVkR3JvdXBJZH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ3JvdXBSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KGdyb3VwVXJsLCB7XG4gICAgICAgICAgICBxdWVyeTogeyBmOiBcImpzb25cIiB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGdyb3VwUmVzcG9uc2UuZGF0YT8uZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihncm91cFJlc3BvbnNlLmRhdGEuZXJyb3IubWVzc2FnZSB8fCBcItCT0YDRg9C/0L/QsCDQvdC10LTQvtGB0YLRg9C/0L3QsFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2Vyc0NvdW50OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlcnNSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KGAke2dyb3VwVXJsfS91c2VyTGlzdGAsIHtcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG51bTogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICF1c2Vyc1Jlc3BvbnNlLmRhdGE/LmVycm9yICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHVzZXJzUmVzcG9uc2UuZGF0YT8udG90YWwgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogdXNlckxpc3Qg0LLQvtC30LLRgNCw0YnQsNC10YIgb3duZXIg0L7RgtC00LXQu9GM0L3QviDQvtGCINC80LDRgdGB0LjQstCwIHVzZXJzLlxuICAgICAgICAgICAgICAgICAqINCf0L7RjdGC0L7QvNGDINC00L7QsdCw0LLQu9GP0LXQvCDQstC70LDQtNC10LvRjNGG0LAg0Log0LrQvtC70LjRh9C10YHRgtCy0YMg0L7RgdGC0LDQu9GM0L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHVzZXJzQ291bnQgPSB1c2Vyc1Jlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgLy8gKyAodXNlcnNSZXNwb25zZS5kYXRhLm93bmVyPy51c2VybmFtZSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB1c2Vyc0NvdW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ3JvdXBJZCxcbiAgICAgICAgICAgIHRpdGxlOiBncm91cFJlc3BvbnNlLmRhdGE/LnRpdGxlIHx8IFwi0JHQtdC3INC90LDQt9Cy0LDQvdC40Y9cIixcbiAgICAgICAgICAgIHVzZXJzQ291bnQsXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ3JvdXBJZCxcbiAgICAgICAgICAgIHRpdGxlOiBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIixcbiAgICAgICAgICAgIHVzZXJzQ291bnQ6IG51bGwsXG4gICAgICAgICAgICBpc1VuYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmNvbnN0IGdldFBvcnRhbFVzZXJJbmZvID0gYXN5bmMgKFxuICAgIGVzcmlSZXF1ZXN0OiBFc3JpUmVxdWVzdEZ1bmN0aW9uLFxuICAgIHBvcnRhbFVybDogc3RyaW5nLFxuICAgIHVzZXJJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxQb3J0YWxVc2VySW5mbz4gPT4ge1xuICAgIGNvbnN0IHRvSW5mbyA9IChkYXRhOiBhbnkpOiBQb3J0YWxVc2VySW5mbyB8IG51bGwgPT4ge1xuICAgICAgICBpZiAoIWRhdGEgfHwgZGF0YS5lcnJvcikgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICghZGF0YS51c2VybmFtZSAmJiAhZGF0YS5pZCAmJiAhZGF0YS51c2VySWQpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCByZXNvbHZlZElkID0gU3RyaW5nKGRhdGEuaWQgfHwgZGF0YS51c2VySWQgfHwgdXNlcklkKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lID8gU3RyaW5nKGRhdGEudXNlcm5hbWUpIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXJlc29sdmVkSWQgJiYgIXVzZXJuYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGZ1bGxOYW1lOiBkYXRhLmZ1bGxOYW1lID8gU3RyaW5nKGRhdGEuZnVsbE5hbWUpIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXJlY3RSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KFxuICAgICAgICAgICAgYCR7cG9ydGFsVXJsfS9zaGFyaW5nL3Jlc3QvY29tbXVuaXR5L3VzZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCl9YCxcbiAgICAgICAgICAgIHsgcXVlcnk6IHsgZjogXCJqc29uXCIgfSwgcmVzcG9uc2VUeXBlOiBcImpzb25cIiB9LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkaXJlY3RJbmZvID0gdG9JbmZvKGRpcmVjdFJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBpZiAoZGlyZWN0SW5mbykgcmV0dXJuIGRpcmVjdEluZm87XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChcbiAgICAgICAgICAgIGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbW11bml0eS91c2Vyc2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgZjogXCJqc29uXCIsIHE6IHVzZXJJZCwgbnVtOiAyMCB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShzZWFyY2hSZXNwb25zZS5kYXRhPy5yZXN1bHRzKVxuICAgICAgICAgICAgPyBzZWFyY2hSZXNwb25zZS5kYXRhLnJlc3VsdHNcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIGNvbnN0IG1hdGNoID0gY2FuZGlkYXRlcy5maW5kKChpdGVtOiBhbnkpID0+XG4gICAgICAgICAgICBbaXRlbT8uaWQsIGl0ZW0/LnVzZXJJZCwgaXRlbT8udXNlcm5hbWVdXG4gICAgICAgICAgICAgICAgLm1hcCgodmFsdWUpID0+IFN0cmluZyh2YWx1ZSB8fCBcIlwiKSlcbiAgICAgICAgICAgICAgICAuaW5jbHVkZXModXNlcklkKSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoSW5mbyA9IHRvSW5mbyhtYXRjaCk7XG4gICAgICAgIGlmIChzZWFyY2hJbmZvKSByZXR1cm4gc2VhcmNoSW5mbztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8g0J3QuNC20LUg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINCx0LXQt9C+0L/QsNGB0L3QsNGPINC30LDQs9C70YPRiNC60LAuXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaWQ6IHVzZXJJZCwgaXNVbmF2YWlsYWJsZTogdHJ1ZSB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzU2V0dGluZ1Byb3BzID0ge1xuICAgIHZhbHVlPzogQWNjZXNzQ29uZmlnO1xuICAgIG9uQ2hhbmdlOiAoY29uZmlnOiBBY2Nlc3NDb25maWcpID0+IHZvaWQ7XG4gICAgYnV0dG9uTGFiZWw/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2Nlc3NTZXR0aW5nKHByb3BzOiBBY2Nlc3NTZXR0aW5nUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxBY2Nlc3NDb25maWc+KCgpID0+XG4gICAgICAgIG5vcm1hbGl6ZUxvYWRlZENvbmZpZyhwcm9wcy52YWx1ZSA/PyBkZWZhdWx0QWNjZXNzQ29uZmlnKSxcbiAgICApO1xuICAgIGNvbnN0IFtzYXZlZENvbmZpZywgc2V0U2F2ZWRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWNjZXNzQ29uZmlnPigoKSA9PlxuICAgICAgICBub3JtYWxpemVMb2FkZWRDb25maWcocHJvcHMudmFsdWUgPz8gZGVmYXVsdEFjY2Vzc0NvbmZpZyksXG4gICAgKTtcbiAgICBjb25zdCBbaGFzVW5zYXZlZENoYW5nZXMsIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzXSA9XG4gICAgICAgIFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbbm90aWNlLCBzZXROb3RpY2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgbm90aWNlVGltZXIgPSBSZWFjdC51c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBzaG93Tm90aWNlID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAobm90aWNlVGltZXIuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChub3RpY2VUaW1lci5jdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldE5vdGljZShtZXNzYWdlKTtcbiAgICAgICAgbm90aWNlVGltZXIuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldE5vdGljZShudWxsKTtcbiAgICAgICAgICAgIG5vdGljZVRpbWVyLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9LCAxODAwKTtcbiAgICB9O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChub3RpY2VUaW1lci5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChub3RpY2VUaW1lci5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzZXREcmFmdENvbmZpZyA9IChcbiAgICAgICAgdXBkYXRlOiAocHJldmlvdXM6IEFjY2Vzc0NvbmZpZykgPT4gQWNjZXNzQ29uZmlnLFxuICAgICk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRDb25maWcoKHByZXZpb3VzKSA9PiB1cGRhdGUocHJldmlvdXMpKTtcbiAgICAgICAgc2V0SGFzVW5zYXZlZENoYW5nZXModHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBbZ3JvdXBzSW5mbywgc2V0R3JvdXBzSW5mb10gPSBSZWFjdC51c2VTdGF0ZTxcbiAgICAgICAgUmVjb3JkPHN0cmluZywgUG9ydGFsR3JvdXBJbmZvPlxuICAgID4oe30pO1xuICAgIGNvbnN0IFtncm91cHNMb2FkaW5nLCBzZXRHcm91cHNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbdXNlcnNJbmZvLCBzZXRVc2Vyc0luZm9dID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgUG9ydGFsVXNlckluZm8+Pih7fSk7XG4gICAgY29uc3QgW3VzZXJzTG9hZGluZywgc2V0VXNlcnNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0IGdyb3VwSWRzU2lnbmF0dXJlID0gZ2V0Q29uZmlnR3JvdXBJZHMoY29uZmlnKS5qb2luKFwifFwiKTtcbiAgICBjb25zdCB1c2VySWRzU2lnbmF0dXJlID0gZ2V0Q29uZmlnVXNlcklkcyhjb25maWcpLmpvaW4oXCJ8XCIpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbG9hZEdyb3Vwc0luZm8gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBjb25zdCBncm91cElkcyA9IGdldENvbmZpZ0dyb3VwSWRzKGNvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmIChncm91cElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRHcm91cHNJbmZvKHt9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8ucG9ydGFsVXJsO1xuXG4gICAgICAgICAgICBpZiAoIXBvcnRhbFVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0R3JvdXBzTG9hZGluZyh0cnVlKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXNyaVJlcXVlc3RdID0gKGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgICAgICAgICAgICAgICBcImVzcmkvcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIF0pKSBhcyBbRXNyaVJlcXVlc3RGdW5jdGlvbl07XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZHMubWFwKChncm91cElkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UG9ydGFsR3JvdXBJbmZvKGVzcmlSZXF1ZXN0LCBwb3J0YWxVcmwsIGdyb3VwSWQpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IHJlc3VsdC5yZWR1Y2U8UmVjb3JkPHN0cmluZywgUG9ydGFsR3JvdXBJbmZvPj4oXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpdGVtLmlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEdyb3Vwc0luZm8obWFwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICghaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0R3JvdXBzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZvaWQgbG9hZEdyb3Vwc0luZm8oKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH0sIFtncm91cElkc1NpZ25hdHVyZV0pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbG9hZFVzZXJzSW5mbyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZHMgPSBnZXRDb25maWdVc2VySWRzKGNvbmZpZyk7XG4gICAgICAgICAgICBpZiAodXNlcklkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRVc2Vyc0luZm8oe30pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5wb3J0YWxVcmw7XG4gICAgICAgICAgICBpZiAoIXBvcnRhbFVybCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzZXRVc2Vyc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtlc3JpUmVxdWVzdF0gPSAoYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAgICAgICAgICAgICAgIFwiZXNyaS9yZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgXSkpIGFzIFtFc3JpUmVxdWVzdEZ1bmN0aW9uXTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkcy5tYXAoKHVzZXJJZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvcnRhbFVzZXJJbmZvKGVzcmlSZXF1ZXN0LCBwb3J0YWxVcmwsIHVzZXJJZCksXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJzSW5mbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZWR1Y2U8UmVjb3JkPHN0cmluZywgUG9ydGFsVXNlckluZm8+PigoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjW2l0ZW0uaWRdID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbmNlbGxlZCkgc2V0VXNlcnNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2b2lkIGxvYWRVc2Vyc0luZm8oKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlcklkc1NpZ25hdHVyZV0pO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihHTE9CQUxfQUNDRVNTX0lEKTtcbiAgICBjb25zdCBbZGlhbG9nLCBzZXREaWFsb2ddID0gUmVhY3QudXNlU3RhdGU8RGlhbG9nU3RhdGU+KG51bGwpO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkUnVsZUlkcywgc2V0U2VsZWN0ZWRSdWxlSWRzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW3NlbGVjdGVkR3JvdXBLZXlzLCBzZXRTZWxlY3RlZEdyb3VwS2V5c10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oXG4gICAgICAgIFtdLFxuICAgICk7XG5cbiAgICBjb25zdCBbZm9ybVRpdGxlLCBzZXRGb3JtVGl0bGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZm9ybUZpZWxkLCBzZXRGb3JtRmllbGRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZm9ybUZpZWxkVHlwZSwgc2V0Rm9ybUZpZWxkVHlwZV0gPSBSZWFjdC51c2VTdGF0ZTxBY2Nlc3NGaWVsZFR5cGU+KFwic3RyaW5nXCIpO1xuICAgIGNvbnN0IFtmb3JtR3JvdXAsIHNldEZvcm1Hcm91cF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtmb3JtVXNlciwgc2V0Rm9ybVVzZXJdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcG9wdXBHcm91cElucHV0LCBzZXRQb3B1cEdyb3VwSW5wdXRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcG9wdXBVc2VySW5wdXQsIHNldFBvcHVwVXNlcklucHV0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3BvcHVwRmllbGRJbnB1dCwgc2V0UG9wdXBGaWVsZElucHV0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgICBjb25zdCBbcnVsZU9wZXJhdG9yLCBzZXRSdWxlT3BlcmF0b3JdID0gUmVhY3QudXNlU3RhdGU8UnVsZU9wZXJhdG9yPihcImVxdWFsXCIpO1xuICAgIGNvbnN0IFtydWxlSXNOb3QsIHNldFJ1bGVJc05vdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3J1bGVWYWx1ZSwgc2V0UnVsZVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3J1bGVGcm9tLCBzZXRSdWxlRnJvbV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtydWxlVG8sIHNldFJ1bGVUb10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtydWxlVmFsdWVzLCBzZXRSdWxlVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gICAgY29uc3QgW25ld0xpc3RWYWx1ZSwgc2V0TmV3TGlzdFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2ZpZWxkU2VhcmNoLCBzZXRGaWVsZFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtncm91cFNlYXJjaCwgc2V0R3JvdXBTZWFyY2hdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbc2hvd1doZXJlUHJldmlldywgc2V0U2hvd1doZXJlUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICBjb25zdCBzZWxlY3RlZEZpZWxkID1cbiAgICAgICAgc2VsZWN0ZWRJZCA9PT0gR0xPQkFMX0FDQ0VTU19JRCB8fCBzZWxlY3RlZElkID09PSBQT1BVUF9GSUVMRF9BQ0NFU1NfSURcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiAoY29uZmlnLnJ1bGVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpID8/IG51bGwpO1xuXG4gICAgY29uc3QgcG9wdXBGaWVsZEFjY2VzcyA9IGNvbmZpZy5wb3B1cEZpZWxkQWNjZXNzID8/IGRlZmF1bHRBY2Nlc3NDb25maWcucG9wdXBGaWVsZEFjY2VzcyE7XG5cbiAgICBjb25zdCB1cGRhdGVQb3B1cEZpZWxkQWNjZXNzID0gKFxuICAgICAgICBwYXRjaDogUGFydGlhbDxQb3B1cEZpZWxkQWNjZXNzQ29uZmlnPixcbiAgICApOiB2b2lkID0+IHtcbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICBwb3B1cEZpZWxkQWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogcHJldmlvdXMucG9wdXBGaWVsZEFjY2Vzcz8uZW5hYmxlZCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnZlcnRlZDogcHJldmlvdXMucG9wdXBGaWVsZEFjY2Vzcz8uaW52ZXJ0ZWQgPT09IHRydWUsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBwcmV2aW91cy5wb3B1cEZpZWxkQWNjZXNzPy5maWVsZHMgPz8gW10sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBwcmV2aW91cy5wb3B1cEZpZWxkQWNjZXNzPy5ncm91cHMgPz8gW10sXG4gICAgICAgICAgICAgICAgdXNlcnM6IHByZXZpb3VzLnBvcHVwRmllbGRBY2Nlc3M/LnVzZXJzID8/IFtdLFxuICAgICAgICAgICAgICAgIC4uLnBhdGNoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQb3B1cEFjY2Vzc0ZpZWxkcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgbmV3RmllbGRzID0gcG9wdXBGaWVsZElucHV0XG4gICAgICAgICAgICAuc3BsaXQoL1ssO1xcbl0rLylcbiAgICAgICAgICAgIC5tYXAoKGZpZWxkKSA9PiBmaWVsZC50cmltKCkpXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICBpZiAobmV3RmllbGRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3IFNldChwb3B1cEZpZWxkQWNjZXNzLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiBmaWVsZC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgIGNvbnN0IHVuaXF1ZU5ld0ZpZWxkcyA9IG5ld0ZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiAhZXhpc3RpbmcuaGFzKGZpZWxkLnRvTG93ZXJDYXNlKCkpKTtcblxuICAgICAgICBpZiAodW5pcXVlTmV3RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC40LUg0YHRgtC+0LvQsdGG0Ysg0YPQttC1INC00L7QsdCw0LLQu9C10L3Ri1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVBvcHVwRmllbGRBY2Nlc3MoeyBmaWVsZHM6IFsuLi5wb3B1cEZpZWxkQWNjZXNzLmZpZWxkcywgLi4udW5pcXVlTmV3RmllbGRzXSB9KTtcbiAgICAgICAgc2V0UG9wdXBGaWVsZElucHV0KFwiXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRQb3B1cEFjY2Vzc0dyb3VwID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBncm91cElkID0gcG9wdXBHcm91cElucHV0LnRyaW0oKTtcbiAgICAgICAgaWYgKCFncm91cElkKSByZXR1cm47XG4gICAgICAgIGlmIChwb3B1cEZpZWxkQWNjZXNzLmdyb3Vwcy5pbmNsdWRlcyhncm91cElkKSkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutCw0Y8g0LPRgNGD0L/Qv9CwINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90LBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVQb3B1cEZpZWxkQWNjZXNzKHsgZ3JvdXBzOiBbLi4ucG9wdXBGaWVsZEFjY2Vzcy5ncm91cHMsIGdyb3VwSWRdIH0pO1xuICAgICAgICBzZXRQb3B1cEdyb3VwSW5wdXQoXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFBvcHVwQWNjZXNzVXNlciA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgdXNlcklkID0gcG9wdXBVc2VySW5wdXQudHJpbSgpO1xuICAgICAgICBpZiAoIXVzZXJJZCkgcmV0dXJuO1xuICAgICAgICBpZiAocG9wdXBGaWVsZEFjY2Vzcy51c2Vycy5pbmNsdWRlcyh1c2VySWQpKSB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60L7QuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YPQttC1INC00L7QsdCw0LLQu9C10L1cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVQb3B1cEZpZWxkQWNjZXNzKHsgdXNlcnM6IFsuLi5wb3B1cEZpZWxkQWNjZXNzLnVzZXJzLCB1c2VySWRdIH0pO1xuICAgICAgICBzZXRQb3B1cFVzZXJJbnB1dChcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyR3JvdXBJZGVudGl0eSA9IChncm91cElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcbiAgICAgICAgY29uc3QgZ3JvdXBUaXRsZSA9IGdyb3VwSW5mbz8udGl0bGUgPz9cbiAgICAgICAgICAgIChncm91cHNMb2FkaW5nID8gXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIgOiBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZGVudGl0eVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZFRpdGxlTGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cFRpdGxlQWZ0ZXJJZFwiPntncm91cFRpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgY29weUdyb3VwSWQoZ3JvdXBJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXBJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7Z3JvdXBJbmZvPy51c2Vyc0NvdW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSW5mbz8udXNlcnNDb3VudCAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBNZW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk6IHtncm91cEluZm8udXNlcnNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclVzZXJJZGVudGl0eSA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHVzZXJJbmZvPy5mdWxsTmFtZSB8fCB1c2VySW5mbz8udXNlcm5hbWUgfHxcbiAgICAgICAgICAgICh1c2Vyc0xvYWRpbmcgPyBcItCX0LDQs9GA0YPQt9C60LAuLi5cIiA6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9XCIpO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IHVzZXJJbmZvPy51c2VybmFtZSAmJiB1c2VySW5mby51c2VybmFtZSAhPT0gdXNlcklkXG4gICAgICAgICAgICA/IGAke3VzZXJJbmZvLnVzZXJuYW1lfSDigJQgYFxuICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwSWRlbnRpdHkgdXNlcklkZW50aXR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cElkVGl0bGVMaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwVGl0bGVBZnRlcklkXCI+e3RpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIGNvcHlHcm91cElkKHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcyhbXSk7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKFtdKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0TGVmdEl0ZW0gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZElkKGlkKTtcbiAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRSdWxlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0UnVsZU9wZXJhdG9yKFwiZXF1YWxcIik7XG4gICAgICAgIHNldFJ1bGVJc05vdChmYWxzZSk7XG4gICAgICAgIHNldFJ1bGVWYWx1ZShcIlwiKTtcbiAgICAgICAgc2V0UnVsZUZyb20oXCJcIik7XG4gICAgICAgIHNldFJ1bGVUbyhcIlwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlcyhbXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UnVsZUZyb21Gb3JtID0gKCk6IEFjY2Vzc1J1bGUgfCBudWxsID0+IHtcbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJlcXVhbFwiIHx8IHJ1bGVPcGVyYXRvciA9PT0gXCJiZWZvcmVcIiB8fCBydWxlT3BlcmF0b3IgPT09IFwiYWZ0ZXJcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlVmFsdWUudHJpbSgpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHJ1bGVPcGVyYXRvcixcbiAgICAgICAgICAgICAgICBpc05vdDogcnVsZUlzTm90LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlVmFsdWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlT3BlcmF0b3IgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlRnJvbS50cmltKCkgfHwgIXJ1bGVUby50cmltKCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJyYW5nZVwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgZnJvbTogcnVsZUZyb20udHJpbSgpLFxuICAgICAgICAgICAgICAgIHRvOiBydWxlVG8udHJpbSgpLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBjbGVhblZhbHVlcyA9IHJ1bGVWYWx1ZXMucmVkdWNlPHN0cmluZ1tdPigocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiAhcmVzdWx0LmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgICAgICAgaWYgKGNsZWFuVmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcImluY2x1ZGVcIixcbiAgICAgICAgICAgICAgICBpc05vdDogcnVsZUlzTm90LFxuICAgICAgICAgICAgICAgIHZhbHVlczogY2xlYW5WYWx1ZXMsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJsaWtlXCIpIHtcbiAgICAgICAgICAgIGlmICghcnVsZVZhbHVlLnRyaW0oKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcImxpa2VcIixcbiAgICAgICAgICAgICAgICBpc05vdDogcnVsZUlzTm90LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlVmFsdWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCBmaWxsUnVsZUZvcm0gPSAocnVsZTogQWNjZXNzUnVsZSkgPT4ge1xuICAgICAgICBzZXRSdWxlT3BlcmF0b3IocnVsZS5vcGVyYXRvcik7XG4gICAgICAgIHNldFJ1bGVJc05vdChydWxlLmlzTm90ID09PSB0cnVlKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlKHJ1bGUudmFsdWUgPz8gXCJcIik7XG4gICAgICAgIHNldFJ1bGVGcm9tKHJ1bGUuZnJvbSA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZVRvKHJ1bGUudG8gPz8gXCJcIik7XG4gICAgICAgIHNldFJ1bGVWYWx1ZXMocnVsZS52YWx1ZXMgPz8gW10pO1xuICAgICAgICBzZXROZXdMaXN0VmFsdWUoXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Rm9ybVRpdGxlKFwiXCIpO1xuICAgICAgICBzZXRGb3JtRmllbGQoXCJcIik7XG4gICAgICAgIHNldEZvcm1GaWVsZFR5cGUoXCJzdHJpbmdcIik7XG4gICAgICAgIHJlc2V0UnVsZUZvcm0oKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRGaWVsZFwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHJldHVybjtcblxuICAgICAgICBzZXRGb3JtVGl0bGUoc2VsZWN0ZWRGaWVsZC50aXRsZSk7XG4gICAgICAgIHNldEZvcm1GaWVsZChzZWxlY3RlZEZpZWxkLmZpZWxkKTtcbiAgICAgICAgc2V0Rm9ybUZpZWxkVHlwZShzZWxlY3RlZEZpZWxkLmZpZWxkVHlwZSA/PyBnZXRLbm93bkZpZWxkVHlwZShzZWxlY3RlZEZpZWxkLmZpZWxkKSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdEZpZWxkXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZmllbGRJZDogc2VsZWN0ZWRGaWVsZC5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZm9ybVRpdGxlLnRyaW0oKSB8fCAhZm9ybUZpZWxkLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkRmllbGRcIikge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZ2V0UnVsZUZyb21Gb3JtKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpZWxkOiBBY2Nlc3NGaWVsZFJ1bGUgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmb3JtVGl0bGUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmb3JtRmllbGQudHJpbSgpLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogZm9ybUZpZWxkVHlwZSxcbiAgICAgICAgICAgICAgICBydWxlczogZmlyc3RSdWxlID8gW2ZpcnN0UnVsZV0gOiBbXSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IFsuLi5wcmV2LnJ1bGVzLCBuZXdGaWVsZF0sXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobmV3RmllbGQuaWQpO1xuICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEZpZWxkXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09PSBkaWFsb2cucGF5bG9hZC5maWVsZElkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmb3JtVGl0bGUudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmb3JtRmllbGQudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogZm9ybUZpZWxkVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRSdWxlcyA9IHByZXYucnVsZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSBzZWxlY3RlZEZpZWxkLmlkLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChuZXh0UnVsZXNbMF0/LmlkID8/IEdMT0JBTF9BQ0NFU1NfSUQpO1xuICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBuZXh0UnVsZXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRSdWxlID0gKCkgPT4ge1xuICAgICAgICByZXNldFJ1bGVGb3JtKCk7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkUnVsZVwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdFJ1bGUgPSAocnVsZTogQWNjZXNzUnVsZSkgPT4ge1xuICAgICAgICBmaWxsUnVsZUZvcm0ocnVsZSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdFJ1bGVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBydWxlSWQ6IHJ1bGUuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZVJ1bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGZvcm1SdWxlID0gZ2V0UnVsZUZyb21Gb3JtKCk7XG5cbiAgICAgICAgaWYgKCFmb3JtUnVsZSkge1xuICAgICAgICAgICAgYWxlcnQoXCLQl9Cw0L/QvtC70L3QuCDQt9C90LDRh9C10L3QuNC1INC/0YDQsNCy0LjQu9CwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRSdWxlXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbLi4uZmllbGQucnVsZXMsIGZvcm1SdWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdFJ1bGVcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5mb3JtUnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcnVsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJ1bGUuZ3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiBydWxlLnVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVJ1bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZGlhbG9nPy5wYXlsb2FkPy5ydWxlSWQpIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChydWxlKSA9PiBydWxlLmlkICE9PSBkaWFsb2cucGF5bG9hZC5ydWxlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRSdWxlSWRzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gZGlhbG9nLnBheWxvYWQucnVsZUlkKSxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoW10pO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlUnVsZVNlbGVjdCA9IChydWxlSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoKHByZXYpID0+XG4gICAgICAgICAgICBwcmV2LmluY2x1ZGVzKHJ1bGVJZClcbiAgICAgICAgICAgICAgICA/IHByZXYuZmlsdGVyKChpZCkgPT4gaWQgIT09IHJ1bGVJZClcbiAgICAgICAgICAgICAgICA6IFsuLi5wcmV2LCBydWxlSWRdLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVTZWxlY3RlZFJ1bGVzID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgc2VsZWN0ZWRSdWxlSWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJ1bGUpID0+ICFzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRSdWxlSWRzKFtdKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoW10pO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlR3JvdXBLZXkgPSAocnVsZUlkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYCR7cnVsZUlkfV8ke2luZGV4fWA7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VHbG9iYWxHcm91cEtleSA9IChpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGBnbG9iYWxfJHtpbmRleH1gO1xuICAgIH07XG5cbiAgICBjb25zdCBhdXRvU2VsZWN0ZWRHcm91cEtleXMgPSBzZWxlY3RlZEZpZWxkXG4gICAgICAgID8gc2VsZWN0ZWRGaWVsZC5ydWxlcy5yZWR1Y2U8c3RyaW5nW10+KChyZXN1bHQsIHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpKSByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgICAgICBydWxlLmdyb3Vwcy5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1ha2VHcm91cEtleShydWxlLmlkLCBpbmRleCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKVxuICAgICAgICA6IFtdO1xuXG4gICAgY29uc3QgZWZmZWN0aXZlU2VsZWN0ZWRHcm91cEtleXMgPSBBcnJheS5mcm9tKFxuICAgICAgICBuZXcgU2V0KFsuLi5zZWxlY3RlZEdyb3VwS2V5cywgLi4uYXV0b1NlbGVjdGVkR3JvdXBLZXlzXSksXG4gICAgKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkR3JvdXBzQ291bnQgPVxuICAgICAgICBzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEXG4gICAgICAgICAgICA/IHNlbGVjdGVkR3JvdXBLZXlzLmxlbmd0aFxuICAgICAgICAgICAgOiBlZmZlY3RpdmVTZWxlY3RlZEdyb3VwS2V5cy5sZW5ndGg7XG5cbiAgICBjb25zdCBmaWx0ZXJlZEZpZWxkcyA9IGNvbmZpZy5ydWxlcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZmllbGRTZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxuICAgICAgICAgICAgaXRlbS5maWVsZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaClcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdyb3VwTWF0Y2hlc1NlYXJjaCA9IChncm91cElkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZ3JvdXBTZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGdyb3VwSW5mbyA9IGdyb3Vwc0luZm9bZ3JvdXBJZF07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGdyb3VwSWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpIHx8XG4gICAgICAgICAgICAoZ3JvdXBJbmZvPy50aXRsZSA/PyBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXNlck1hdGNoZXNTZWFyY2ggPSAodXNlcklkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZ3JvdXBTZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghc2VhcmNoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSB1c2Vyc0luZm9bdXNlcklkXTtcbiAgICAgICAgcmV0dXJuIFt1c2VySWQsIHVzZXJJbmZvPy51c2VybmFtZSwgdXNlckluZm8/LmZ1bGxOYW1lXVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiBTdHJpbmcodmFsdWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJldmlld0dyb3VwTGFiZWwgPSAoZ3JvdXBJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcbiAgICAgICAgY29uc3QgZ3JvdXBUaXRsZSA9IGdyb3VwSW5mbz8udGl0bGU/LnRyaW0oKTtcblxuICAgICAgICBpZiAoIWdyb3VwVGl0bGUpIHJldHVybiBncm91cElkO1xuXG4gICAgICAgIHJldHVybiBgJHtncm91cFRpdGxlfSAoJHtncm91cElkfSlgO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmV2aWV3VXNlckxhYmVsID0gKHVzZXJJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSB1c2Vyc0luZm9bdXNlcklkXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHVzZXJJbmZvPy5mdWxsTmFtZSB8fCB1c2VySW5mbz8udXNlcm5hbWU7XG4gICAgICAgIHJldHVybiBuYW1lID8gYCR7bmFtZX0gKCR7dXNlcklkfSlgIDogdXNlcklkO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZENvbmZpZ1doZXJlUHJldmlldyA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBmdWxsQWNjZXNzTGluZXMgPSBjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLm1hcCgoZ3JvdXBJZCkgPT4gYCAgJHtnZXRQcmV2aWV3R3JvdXBMYWJlbChncm91cElkKX06IDE9MWApXG4gICAgICAgICAgICA6IFtcIiAg4oCUXCJdO1xuXG4gICAgICAgIGNvbnN0IHJ1bGVHcm91cElkcyA9IGdldFJ1bGVBY2Nlc3NHcm91cElkcyhjb25maWcpO1xuICAgICAgICBjb25zdCBydWxlQWNjZXNzTGluZXMgPSBydWxlR3JvdXBJZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBydWxlR3JvdXBJZHMubWFwKChncm91cElkKSA9PiBgICAke2dldFByZXZpZXdHcm91cExhYmVsKGdyb3VwSWQpfTogJHtidWlsZFdoZXJlRm9yR3JvdXAoY29uZmlnLCBncm91cElkKX1gKVxuICAgICAgICAgICAgOiBbXCIgIOKAlFwiXTtcblxuICAgICAgICBjb25zdCBmdWxsVXNlckFjY2Vzc0xpbmVzID0gY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGNvbmZpZy5mdWxsQWNjZXNzVXNlcnMubWFwKCh1c2VySWQpID0+XG4gICAgICAgICAgICAgICAgYCAgJHtnZXRQcmV2aWV3VXNlckxhYmVsKHVzZXJJZCl9OiAxPTFgLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBbXCIgIOKAlFwiXTtcblxuICAgICAgICBjb25zdCBydWxlVXNlcklkcyA9IEFycmF5LmZyb20obmV3IFNldChjb25maWcucnVsZXMuZmxhdE1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICBmaWVsZC5ydWxlcy5mbGF0TWFwKChydWxlKSA9PiBydWxlLnVzZXJzKSxcbiAgICAgICAgKSkpLnNvcnQoKTtcbiAgICAgICAgY29uc3QgcnVsZVVzZXJBY2Nlc3NMaW5lcyA9IHJ1bGVVc2VySWRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gcnVsZVVzZXJJZHMubWFwKCh1c2VySWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgICAgICBjb25maWcucnVsZXMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUudXNlcnMuaW5jbHVkZXModXNlcklkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGAoJHtidWlsZFJ1bGVXaGVyZShmaWVsZC5maWVsZCwgcnVsZSwgZmllbGQuZmllbGRUeXBlID8/IGdldEtub3duRmllbGRUeXBlKGZpZWxkLmZpZWxkKSl9KWApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCAgJHtnZXRQcmV2aWV3VXNlckxhYmVsKHVzZXJJZCl9OiAke3BhcnRzLmpvaW4oXCIgT1IgXCIpIHx8IFwiMT0wXCJ9YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFtcIiAg4oCUXCJdO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBcIkZVTEwgQUNDRVNTOlwiLFxuICAgICAgICAgICAgLi4uZnVsbEFjY2Vzc0xpbmVzLFxuICAgICAgICAgICAgXCJSVUxFIEFDQ0VTUzpcIixcbiAgICAgICAgICAgIC4uLnJ1bGVBY2Nlc3NMaW5lcyxcbiAgICAgICAgICAgIFwiRlVMTCBVU0VSIEFDQ0VTUzpcIixcbiAgICAgICAgICAgIC4uLmZ1bGxVc2VyQWNjZXNzTGluZXMsXG4gICAgICAgICAgICBcIlJVTEUgVVNFUiBBQ0NFU1M6XCIsXG4gICAgICAgICAgICAuLi5ydWxlVXNlckFjY2Vzc0xpbmVzLFxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvcHlDb25maWdXaGVyZVByZXZpZXcgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChidWlsZENvbmZpZ1doZXJlUHJldmlldygpKTtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCJXSEVSRSDRgdC60L7Qv9C40YDQvtCy0LDQvVwiKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC60L7Qv9C40YDQvtCy0LDRgtGMIFdIRVJFXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEZpZWxkSm9pbk9wZXJhdG9yID0gKG9wZXJhdG9yOiBBY2Nlc3NGaWVsZEpvaW5PcGVyYXRvcik6IHZvaWQgPT4ge1xuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBmaWVsZEpvaW5PcGVyYXRvcjogb3BlcmF0b3IsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UnVsZVdhcm5pbmdzID0gKGZpZWxkOiBBY2Nlc3NGaWVsZFJ1bGUsIHJ1bGU6IEFjY2Vzc1J1bGUpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBjb25zdCBmaWVsZFR5cGUgPSBmaWVsZC5maWVsZFR5cGUgPz8gZ2V0S25vd25GaWVsZFR5cGUoZmllbGQuZmllbGQpO1xuICAgICAgICBjb25zdCBjdXJyZW50V2hlcmUgPSBidWlsZFJ1bGVXaGVyZShmaWVsZC5maWVsZCwgcnVsZSwgZmllbGRUeXBlKTtcbiAgICAgICAgY29uc3QgZHVwbGljYXRlcyA9IGZpZWxkLnJ1bGVzLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSBydWxlLmlkICYmIGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBpdGVtLCBmaWVsZFR5cGUpID09PSBjdXJyZW50V2hlcmUsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGR1cGxpY2F0ZXMubGVuZ3RoID4gMCkgd2FybmluZ3MucHVzaChcItCU0YPQsdC70LjRgNGD0LXRgiDQtNGA0YPQs9C+0LUg0L/RgNCw0LLQuNC70L5cIik7XG4gICAgICAgIGlmIChydWxlLmdyb3Vwcy5sZW5ndGggPT09IDAgJiYgcnVsZS51c2Vycy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB3YXJuaW5ncy5wdXNoKFwi0J3QtdGCINCz0YDRg9C/0L8g0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INC00L7RgdGC0YPQv9CwXCIpO1xuXG4gICAgICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImVxdWFsXCIgJiYgIShydWxlLnZhbHVlID8/IFwiXCIpLnRyaW0oKSkge1xuICAgICAgICAgICAgd2FybmluZ3MucHVzaChcItCf0YPRgdGC0L7QtSDQt9C90LDRh9C10L3QuNC1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwibGlrZVwiICYmICEocnVsZS52YWx1ZSA/PyBcIlwiKS50cmltKCkpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCLQn9GD0YHRgtC+0LUgTElLRSDQt9C90LDRh9C10L3QuNC1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiICYmIChydWxlLnZhbHVlcyA/PyBbXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB3YXJuaW5ncy5wdXNoKFwiSU4g0LHQtdC3INC30L3QsNGH0LXQvdC40LlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tID0gTnVtYmVyKHJ1bGUuZnJvbSk7XG4gICAgICAgICAgICBjb25zdCB0byA9IE51bWJlcihydWxlLnRvKTtcblxuICAgICAgICAgICAgaWYgKCEocnVsZS5mcm9tID8/IFwiXCIpLnRyaW0oKSB8fCAhKHJ1bGUudG8gPz8gXCJcIikudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZ3MucHVzaChcIlJhbmdlINC30LDQv9C+0LvQvdC10L0g0L3QtSDQv9C+0LvQvdC+0YHRgtGM0Y5cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFOdW1iZXIuaXNOYU4oZnJvbSkgJiYgIU51bWJlci5pc05hTih0bykgJiYgZnJvbSA+IHRvKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZ3MucHVzaChcIlJhbmdlINC90LUg0LLRi9C/0L7Qu9C90LjRgtGB0Y86INC+0YIg0LHQvtC70YzRiNC1INGH0LXQvCDQtNC+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdhcm5pbmdzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRGaWVsZFdhcm5pbmdzQ291bnQgPSAoZmllbGQ6IEFjY2Vzc0ZpZWxkUnVsZSk6IG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5ydWxlcy5yZWR1Y2UoXG4gICAgICAgICAgICAodG90YWwsIHJ1bGUpID0+IHRvdGFsICsgZ2V0UnVsZVdhcm5pbmdzKGZpZWxkLCBydWxlKS5sZW5ndGgsXG4gICAgICAgICAgICAwLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVHcm91cFNlbGVjdCA9IChrZXk6IHN0cmluZywgaXNMb2NrZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoaXNMb2NrZWQpIHJldHVybjtcblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuaW5jbHVkZXMoa2V5KSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBrZXkpIDogWy4uLnByZXYsIGtleV0sXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkR3JvdXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEtleXNGb3JEZWxldGUgPVxuICAgICAgICAgICAgc2VsZWN0ZWRJZCA9PT0gR0xPQkFMX0FDQ0VTU19JRFxuICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRHcm91cEtleXNcbiAgICAgICAgICAgICAgICA6IGVmZmVjdGl2ZVNlbGVjdGVkR3JvdXBLZXlzO1xuXG4gICAgICAgIGlmIChncm91cEtleXNGb3JEZWxldGUubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogcHJldi5mdWxsQWNjZXNzR3JvdXBzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiAhZ3JvdXBLZXlzRm9yRGVsZXRlLmluY2x1ZGVzKG1ha2VHbG9iYWxHcm91cEtleShpbmRleCkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWRGaWVsZCkge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWdyb3VwS2V5c0ZvckRlbGV0ZS5pbmNsdWRlcyhtYWtlR3JvdXBLZXkocnVsZS5pZCwgaW5kZXgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRHcm91cCA9IChydWxlSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoXCJcIik7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiYWRkR3JvdXBcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBydWxlSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRHcm91cCA9IChcbiAgICAgICAgcnVsZUlkOiBzdHJpbmcsXG4gICAgICAgIGdyb3VwSW5kZXg6IG51bWJlcixcbiAgICAgICAgZ3JvdXBWYWx1ZTogc3RyaW5nLFxuICAgICkgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoZ3JvdXBWYWx1ZSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcnVsZUlkLFxuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZUdyb3VwID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgIWZvcm1Hcm91cC50cmltKCkpIHJldHVybjtcblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZEdyb3VwXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFJ1bGUgPSBzZWxlY3RlZEZpZWxkLnJ1bGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHJ1bGUpID0+IHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRSdWxlPy5ncm91cHMuc29tZSgoZ3JvdXApID0+IGdyb3VwLnRyaW0oKSA9PT0gZm9ybUdyb3VwLnRyaW0oKSkpIHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60LDRjyDQs9GA0YPQv9C/0LAg0YPQttC1INC00L7QsdCw0LLQu9C10L3QsFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IFsuLi5ydWxlLmdyb3VwcywgZm9ybUdyb3VwLnRyaW0oKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEdyb3VwXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJ1bGUuZ3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtR3JvdXAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdyb3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGtleSkgPT5cbiAgICAgICAgICAgICAgICAgICAga2V5ICE9PVxuICAgICAgICAgICAgICAgICAgICBtYWtlR3JvdXBLZXkoZGlhbG9nLnBheWxvYWQucnVsZUlkLCBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4KSxcbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIHNldEZvcm1Hcm91cChcIlwiKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRHbG9iYWxHcm91cFwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdEdsb2JhbEdyb3VwID0gKGdyb3VwSW5kZXg6IG51bWJlciwgZ3JvdXBWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Hcm91cChncm91cFZhbHVlKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0R2xvYmFsR3JvdXBcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBncm91cEluZGV4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVHbG9iYWxHcm91cCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFmb3JtR3JvdXAudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHbG9iYWxHcm91cFwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMuc29tZSgoZ3JvdXApID0+IGdyb3VwLnRyaW0oKSA9PT0gZm9ybUdyb3VwLnRyaW0oKSkpIHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60LDRjyDQs9GA0YPQv9C/0LAg0YPQttC1INC00L7QsdCw0LLQu9C10L3QsFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogWy4uLnByZXYuZnVsbEFjY2Vzc0dyb3VwcywgZm9ybUdyb3VwLnRyaW0oKV0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImVkaXRHbG9iYWxHcm91cFwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHByZXYuZnVsbEFjY2Vzc0dyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXggPyBmb3JtR3JvdXAudHJpbSgpIDogZ3JvdXAsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogcHJldi5mdWxsQWNjZXNzR3JvdXBzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGtleSkgPT4ga2V5ICE9PSBtYWtlR2xvYmFsR3JvdXBLZXkoZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCksXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZFVzZXIgPSAocnVsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIoXCJcIik7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkVXNlclwiLCBwYXlsb2FkOiB7IHJ1bGVJZCB9IH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdFVzZXIgPSAocnVsZUlkOiBzdHJpbmcsIHVzZXJJbmRleDogbnVtYmVyLCB1c2VyVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtVXNlcih1c2VyVmFsdWUpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImVkaXRVc2VyXCIsIHBheWxvYWQ6IHsgcnVsZUlkLCB1c2VySW5kZXggfSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZVVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZm9ybVVzZXIudHJpbSgpIHx8ICFkaWFsb2c/LnBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV4dFVzZXIgPSBmb3JtVXNlci50cmltKCk7XG5cbiAgICAgICAgaWYgKGRpYWxvZy50eXBlID09PSBcImFkZFVzZXJcIikge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UnVsZSA9IHNlbGVjdGVkRmllbGQucnVsZXMuZmluZChcbiAgICAgICAgICAgICAgICAocnVsZSkgPT4gcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRSdWxlPy51c2Vycy5pbmNsdWRlcyhuZXh0VXNlcikpIHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60L7QuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YPQttC1INC00L7QsdCw0LLQu9C10L1cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IGRpYWxvZy50eXBlID09PSBcImFkZFVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gWy4uLnJ1bGUudXNlcnMsIG5leHRVc2VyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZS51c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gZGlhbG9nLnBheWxvYWQudXNlckluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5leHRVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlVXNlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFkaWFsb2c/LnBheWxvYWQpIHJldHVybjtcbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHJ1bGUudXNlcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfLCBpbmRleCkgPT4gaW5kZXggIT09IGRpYWxvZy5wYXlsb2FkLnVzZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRHbG9iYWxVc2VyID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtVXNlcihcIlwiKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRHbG9iYWxVc2VyXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0R2xvYmFsVXNlciA9ICh1c2VySW5kZXg6IG51bWJlciwgdXNlclZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIodXNlclZhbHVlKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJlZGl0R2xvYmFsVXNlclwiLCBwYXlsb2FkOiB7IHVzZXJJbmRleCB9IH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlR2xvYmFsVXNlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFVzZXIgPSBmb3JtVXNlci50cmltKCk7XG4gICAgICAgIGlmICghbmV4dFVzZXIpIHJldHVybjtcblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZEdsb2JhbFVzZXJcIiAmJiBjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmluY2x1ZGVzKG5leHRVc2VyKSkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC9XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZnVsbEFjY2Vzc1VzZXJzOiBkaWFsb2c/LnR5cGUgPT09IFwiYWRkR2xvYmFsVXNlclwiXG4gICAgICAgICAgICAgICAgPyBbLi4ucHJldi5mdWxsQWNjZXNzVXNlcnMsIG5leHRVc2VyXVxuICAgICAgICAgICAgICAgIDogcHJldi5mdWxsQWNjZXNzVXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZz8ucGF5bG9hZD8udXNlckluZGV4ID8gbmV4dFVzZXIgOiB1c2VyLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVHbG9iYWxVc2VyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRpYWxvZz8ucGF5bG9hZCkgcmV0dXJuO1xuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBmdWxsQWNjZXNzVXNlcnM6IHByZXYuZnVsbEFjY2Vzc1VzZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC51c2VySW5kZXgsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFzU2FtZUluVmFsdWUgPSAodmFsdWVzOiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZywgaWdub3JlSW5kZXg/OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghbm9ybWFsaXplZFZhbHVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcy5zb21lKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlnbm9yZUluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPT09IGlnbm9yZUluZGV4KSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKSA9PT0gbm9ybWFsaXplZFZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVmFsdWVUb0luTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXdMaXN0VmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgICAgICBpZiAoaGFzU2FtZUluVmFsdWUocnVsZVZhbHVlcywgdmFsdWUpKSB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60L7QtSDQt9C90LDRh9C10L3QuNC1INGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90L5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRSdWxlVmFsdWVzKChwcmV2KSA9PiBbLi4ucHJldiwgdmFsdWVdKTtcbiAgICAgICAgc2V0TmV3TGlzdFZhbHVlKFwiXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVWYWx1ZUZyb21Jbkxpc3QgPSAoaW5kZXhGb3JSZW1vdmU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRSdWxlVmFsdWVzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhGb3JSZW1vdmUpLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVWYWx1ZUluTGlzdCA9IChpbmRleEZvclVwZGF0ZTogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlICYmIGhhc1NhbWVJblZhbHVlKHJ1bGVWYWx1ZXMsIG5leHRWYWx1ZSwgaW5kZXhGb3JVcGRhdGUpKSB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60L7QtSDQt9C90LDRh9C10L3QuNC1INGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90L5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRSdWxlVmFsdWVzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoaW5kZXggPT09IGluZGV4Rm9yVXBkYXRlID8gdmFsdWUgOiBpdGVtKSksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRvd25sb2FkSnNvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDQpXSwge1xuICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBcImFjY2Vzcy1jb25maWcuanNvblwiO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG5cbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGxvYWRKc29uID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XG5cbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKFN0cmluZyhyZWFkZXIucmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUxvYWRlZENvbmZpZyhwYXJzZWQpO1xuXG4gICAgICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKCkgPT4gbm9ybWFsaXplZCk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChHTE9CQUxfQUNDRVNTX0lEKTtcbiAgICAgICAgICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCLQndC10LLQtdGA0L3QsNGPINGB0YLRgNGD0LrRgtGD0YDQsCBKU09OXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH07XG5cbiAgICBjb25zdCBjb3B5R3JvdXBJZCA9IGFzeW5jIChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkPy53cml0ZVRleHQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChncm91cElkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQudmFsdWUgPSBncm91cElkO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hvd05vdGljZShcIklEINGB0LrQvtC/0LjRgNC+0LLQsNC9XCIpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQndC1INGD0LTQsNC70L7RgdGMINGB0LrQvtC/0LjRgNC+0LLQsNGC0YwgSURcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXBwbHlDb25maWcgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRDb25maWcgPSBjbG9uZUFjY2Vzc0NvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKG5leHRDb25maWcpO1xuICAgICAgICBzZXRTYXZlZENvbmZpZyhuZXh0Q29uZmlnKTtcbiAgICAgICAgc2V0SGFzVW5zYXZlZENoYW5nZXMoZmFsc2UpO1xuICAgICAgICBzaG93Tm90aWNlKFwi0J3QsNGB0YLRgNC+0LnQutC4INC/0YDQuNC80LXQvdC10L3Ri1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuY2VsQ29uZmlnQ2hhbmdlcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0Q29uZmlnKGNsb25lQWNjZXNzQ29uZmlnKHNhdmVkQ29uZmlnKSk7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgc2V0SGFzVW5zYXZlZENoYW5nZXMoZmFsc2UpO1xuICAgICAgICBzaG93Tm90aWNlKFwi0JjQt9C80LXQvdC10L3QuNGPINC+0YLQvNC10L3QtdC90YtcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkV2hlcmVGb3JDdXJyZW50VXNlciA9IChcbiAgICAgICAgdXNlckdyb3Vwczogc3RyaW5nW10sXG4gICAgICAgIHVzZXJJZHM6IHN0cmluZ1tdID0gW10sXG4gICAgKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgaGFzRnVsbEFjY2VzcyA9XG4gICAgICAgICAgICBjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5zb21lKChncm91cCkgPT4gdXNlckdyb3Vwcy5pbmNsdWRlcyhncm91cCkpIHx8XG4gICAgICAgICAgICBjb25maWcuZnVsbEFjY2Vzc1VzZXJzLnNvbWUoKHVzZXJJZCkgPT4gdXNlcklkcy5pbmNsdWRlcyh1c2VySWQpKTtcblxuICAgICAgICBpZiAoaGFzRnVsbEFjY2VzcykgcmV0dXJuIFwiMT0xXCI7XG5cbiAgICAgICAgY29uc3QgYWxsb3dlZFJ1bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGNvbmZpZy5ydWxlcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1J1bGVBY2Nlc3MgPVxuICAgICAgICAgICAgICAgICAgICBydWxlLmdyb3Vwcy5zb21lKChncm91cCkgPT4gdXNlckdyb3Vwcy5pbmNsdWRlcyhncm91cCkpIHx8XG4gICAgICAgICAgICAgICAgICAgIHJ1bGUudXNlcnMuc29tZSgodXNlcklkKSA9PiB1c2VySWRzLmluY2x1ZGVzKHVzZXJJZCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1J1bGVBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFJ1bGVzLnB1c2goYCgke2J1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlLCBmaWVsZC5maWVsZFR5cGUgPz8gZ2V0S25vd25GaWVsZFR5cGUoZmllbGQuZmllbGQpKX0pYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbGxvd2VkUnVsZXMubGVuZ3RoID4gMCA/IGFsbG93ZWRSdWxlcy5qb2luKFwiIE9SIFwiKSA6IFwiMT0wXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByZXZpZXdGaWVsZE5hbWUgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRGaWVsZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybUZpZWxkLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEZpZWxkPy5maWVsZCA/PyBcIlwiO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmV2aWV3RmllbGRUeXBlID0gKCk6IEFjY2Vzc0ZpZWxkVHlwZSA9PiB7XG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkRmllbGRcIikgcmV0dXJuIGZvcm1GaWVsZFR5cGU7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZEZpZWxkPy5maWVsZFR5cGUgPz8gZ2V0S25vd25GaWVsZFR5cGUoc2VsZWN0ZWRGaWVsZD8uZmllbGQgPz8gXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclJ1bGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aWV3RmllbGROYW1lID0gZ2V0UHJldmlld0ZpZWxkTmFtZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZU1vZGVSb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVyYXRvclRhYnMgZm91clRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJlcXVhbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwiZXF1YWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXF1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtydWxlT3BlcmF0b3IgPT09IFwicmFuZ2VcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVPcGVyYXRvcihcInJhbmdlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImluY2x1ZGVcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVPcGVyYXRvcihcImluY2x1ZGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5jbHVkZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJsaWtlXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJsaWtlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpa2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtydWxlT3BlcmF0b3IgPT09IFwiYmVmb3JlXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJiZWZvcmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVmb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImFmdGVyXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJhZnRlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5vdFRvZ2dsZUJ1dHRvbiAke3J1bGVJc05vdCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlSXNOb3QoKHZhbHVlKSA9PiAhdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQmNC90LLQtdGA0YLQuNGA0L7QstCw0YLRjCDRg9GB0LvQvtCy0LjQtVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5PVFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsocnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgfHwgcnVsZU9wZXJhdG9yID09PSBcImxpa2VcIiB8fCBydWxlT3BlcmF0b3IgPT09IFwiYmVmb3JlXCIgfHwgcnVsZU9wZXJhdG9yID09PSBcImFmdGVyXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCX0L3QsNGH0LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UnVsZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3J1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29JbnB1dEdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCe0YJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtydWxlRnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJ1bGVGcm9tKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCU0L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtydWxlVG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSdWxlVG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbkxpc3RBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluQWRkUm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQl9C90LDRh9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0xpc3RWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdMaXN0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNtYWxsQnV0dG9uXCIgb25DbGljaz17YWRkVmFsdWVUb0luTGlzdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cnVsZVZhbHVlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eU1pbmlcIj7QodC/0LjRgdC+0Log0L/Rg9GB0YI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZVZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluVmFsdWVSb3dcIiBrZXk9e2Ake3ZhbHVlfV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JfQvdCw0YfQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlVmFsdWVJbkxpc3QoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVZhbHVlRnJvbUluTGlzdChpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3ByZXZpZXdGaWVsZE5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdXaGVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QmNGC0L7Qs9C+0LLQvtC1INGD0YHQu9C+0LLQuNC1OjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBSdWxlID0gZ2V0UnVsZUZyb21Gb3JtKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBSdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJ1aWxkUnVsZVdoZXJlKHByZXZpZXdGaWVsZE5hbWUsIHRlbXBSdWxlLCBnZXRQcmV2aWV3RmllbGRUeXBlKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3ByZXZpZXdGaWVsZE5hbWV9IC4uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdBcmVhXCI+XG4gICAgICAgICAgICB7bm90aWNlICYmIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ05vdGljZVwiPntub3RpY2V9PC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzQ29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzQ29udHJvbENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc0NvbnRyb2xUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSA/PyBcItCU0L7RgdGC0YPQvyDQuiDQtNCw0L3QvdGL0LxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb24gPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQndCw0YHRgtGA0L7QudGC0LUg0LPRgNGD0L/Qv9GLINC4INGD0YHQu9C+0LLQuNGPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0L7QsdGK0LXQutGC0L7QslwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nlc3NTZXR0aW5nc0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY2Vzc1NldHRpbmdzQnV0dG9uVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5idXR0b25MYWJlbCA/PyBcItCd0LDRgdGC0YDQvtC50LrQsCDQtNC+0YHRgtGD0L/QsFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RUaXRsZVwiPtCf0YDQsNCy0LjQu9CwINC00L7RgdGC0YPQv9CwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdFN1YnRpdGxlXCI+SlNPTiBhY2Nlc3MgY29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGVTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQv9C+INC90LDQt9Cy0LDQvdC40Y4g0LjQu9C4INC/0L7Qu9GOXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRGaWVsZFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oR0xPQkFMX0FDQ0VTU19JRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbVRpdGxlXCI+0J/QvtC70L3Ri9C5INC00L7RgdGC0YPQvzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvbmRpdGlvblwiPtCj0YHQu9C+0LLQuNC1OiA8Yj4xPTE8L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubGVuZ3RofSDQs9GA0YPQv9C/IMK3IHtjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmxlbmd0aH0g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IFBPUFVQX0ZJRUxEX0FDQ0VTU19JRCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oUE9QVVBfRklFTERfQUNDRVNTX0lEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtVGl0bGVcIj7Qn9C+0LvRjyBwb3B1cDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvbmRpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0YLQvtC70LHRhtGLOiA8Yj57cG9wdXBGaWVsZEFjY2Vzcy5maWVsZHMubGVuZ3RoIHx8IFwi4oCUXCJ9PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9wdXBGaWVsZEFjY2Vzcy5lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHBvcHVwRmllbGRBY2Nlc3MuaW52ZXJ0ZWQgPyBcItCY0L3QstC10YDRgdC40Y9cIiA6IFwi0J7Qs9GA0LDQvdC40YfQtdC90L5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCS0YvQutC70Y7Rh9C10L3QvlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEZpZWxkcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9kYWxJdGVtICR7c2VsZWN0ZWRJZCA9PT0gaXRlbS5pZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbEl0ZW1UaXRsZVwiPntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtSW5mbyBtb2RhbEl0ZW1JbmZvTGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2RhbEl0ZW1Db25kaXRpb25cIj7QkNGC0YDQuNCx0YPRgjogPGI+e2l0ZW0uZmllbGR9PC9iPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ291bnRcIj57aXRlbS5ydWxlcy5sZW5ndGh9INC/0YDQsNCy0LjQuzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGRXYXJuaW5nc0NvdW50KGl0ZW0pID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtTWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2FybmluZ1BpbGxcIj57Z2V0RmllbGRXYXJuaW5nc0NvdW50KGl0ZW0pfSB3YXJuaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkRmllbGRCdXR0b25cIiBvbkNsaWNrPXtvcGVuQWRkRmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCb3R0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJqc29uQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQuNGC0YwgSlNPTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRKc29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImpzb25CdXR0b25cIiBvbkNsaWNrPXtkb3dubG9hZEpzb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQutCw0YfQsNGC0YwgSlNPTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsUmlnaHRQYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtRnVsbEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRUaXRsZVwiPtCf0L7Qu9C90YvQuSDQtNC+0YHRgtGD0L88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRGaWVsZFwiPtCj0YHQu9C+0LLQuNC1OiAxPTE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEhlYWRlckFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbkFkZEdsb2JhbEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsg0JPRgNGD0L/Qv9CwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbkFkZEdsb2JhbFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQn9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cFNlYXJjaElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6INCz0YDRg9C/0L/RiyDQuNC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VwU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRHcm91cFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVJ1bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9GLINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwINC10YnRkSDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBNYXRjaGVzU2VhcmNoKGdyb3VwKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSBtYWtlR2xvYmFsR3JvdXBLZXkoaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXBSb3cgJHtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhncm91cEtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2dyb3VwfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0Q2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkR3JvdXBLZXlzLmluY2x1ZGVzKGdyb3VwS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlR3JvdXBTZWxlY3QoZ3JvdXBLZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdyb3VwSWRlbnRpdHkoZ3JvdXApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkVkaXRHbG9iYWxHcm91cChpbmRleCwgZ3JvdXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZUdsb2JhbEdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NFbnRpdHlTZWN0aW9uVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc0FyZWEgdXNlcnNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsCDQtdGJ0ZEg0L3QtSDQtNC+0LHQsNCy0LvQtdC90YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5tYXAoKHVzZXJJZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJNYXRjaGVzU2VhcmNoKHVzZXJJZCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBSb3cgdXNlclJvd1wiIGtleT17YCR7dXNlcklkfV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclVzZXJJZGVudGl0eSh1c2VySWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRHbG9iYWxVc2VyKGluZGV4LCB1c2VySWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVHbG9iYWxVc2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IHVzZXJJbmRleDogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHNlbGVjdGVkSWQgPT09IFBPUFVQX0ZJRUxEX0FDQ0VTU19JRCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEhlYWRlciBwb3B1cEFjY2Vzc0hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFRpdGxlXCI+0JTQvtGB0YLRg9C/INC6INC/0L7Qu9GP0LwgcG9wdXA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0YLQvtC70LHRhtGLINC00L7QsdCw0LLQu9GP0Y7RgtGB0Y8g0LIgcG9wdXAt0LfQsNC/0YDQvtGBINGBINGD0YfRkdGC0L7QvCDRgdC/0LjRgdC60LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0Lgg0LPRgNGD0L/Qv1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBBY2Nlc3NUb2dnbGVHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzVG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3BvcHVwRmllbGRBY2Nlc3MuZW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlUG9wdXBGaWVsZEFjY2Vzcyh7IGVuYWJsZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BvcHVwRmllbGRBY2Nlc3MuZW5hYmxlZCA/IFwi0JLQutC70Y7Rh9C10L3QvlwiIDogXCLQktGL0LrQu9GO0YfQtdC90L5cIn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgcG9wdXBBY2Nlc3NUb2dnbGUgJHtwb3B1cEZpZWxkQWNjZXNzLmludmVydGVkID8gXCJpbnZlcnRlZFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cG9wdXBGaWVsZEFjY2Vzcy5pbnZlcnRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwb3B1cEZpZWxkQWNjZXNzLmVuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHVwZGF0ZVBvcHVwRmllbGRBY2Nlc3MoeyBpbnZlcnRlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QmNC90LLQtdGA0YHQuNGPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzTm90aWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshcG9wdXBGaWVsZEFjY2Vzcy5lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0J3QsNGB0YLRgNC+0LnQutCwINCy0YvQutC70Y7Rh9C10L3QsDog0L/QvtC70Y8g0LTQvtGB0YLRg9C/0L3RiyDQstGB0LXQvCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y/QvCDRgSDQtNC+0YHRgtGD0L/QvtC8INC6INC/0L7RgNGC0LDQu9GDLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvcHVwRmllbGRBY2Nlc3MuaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JjQvdCy0LXRgNGB0LjRjyDQstC60LvRjtGH0LXQvdCwOiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0Lgg0LPRgNGD0L/Qv9GLINC40Lcg0YHQv9C40YHQutCwINC90LUg0L/QvtC70YPRh9Cw0Y7RgiDQstGL0LHRgNCw0L3QvdGL0LUg0L/QvtC70Y8sINC+0YHRgtCw0LvRjNC90YvQtSDQv9C+0LvRg9GH0LDRjtGCLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCe0LHRi9GH0L3Ri9C5INGA0LXQttC40Lw6INCy0YvQsdGA0LDQvdC90YvQtSDQv9C+0LvRjyDQv9C+0LvRg9GH0LDRjtGCINGC0L7Qu9GM0LrQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0Lgg0LPRgNGD0L/Qv9GLINC40Lcg0YHQv9C40YHQutCwLCDQstC60LvRjtGH0LDRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsC5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzU2VjdGlvbiBwb3B1cEFjY2Vzc0ZpZWxkc1NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NFbnRpdHlTZWN0aW9uVGl0bGVcIj7QodGC0L7Qu9Cx0YbRiyBwb3B1cDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzQWRkUm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BvcHVwRmllbGRJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LDQv9GA0LjQvNC10YA6IHBob3RvX3BhdGhzLCBkYWxvbGF0bm9tYV9wYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQb3B1cEZpZWxkSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIGFkZFBvcHVwQWNjZXNzRmllbGRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiIG9uQ2xpY2s9e2FkZFBvcHVwQWNjZXNzRmllbGRzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cEFjY2Vzc0ZpZWxkc0xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3B1cEZpZWxkQWNjZXNzLmZpZWxkcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVJ1bGVzXCI+0KHRgtC+0LvQsdGG0Ysg0LXRidGRINC90LUg0LTQvtCx0LDQstC70LXQvdGLPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogcG9wdXBGaWVsZEFjY2Vzcy5maWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzRmllbGRSb3dcIiBrZXk9e2Ake2ZpZWxkfV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57ZmllbGR9PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVQb3B1cEZpZWxkQWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHBvcHVwRmllbGRBY2Nlc3MuZmllbGRzLmZpbHRlcigoXywgaXRlbUluZGV4KSA9PiBpdGVtSW5kZXggIT09IGluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBBY2Nlc3NHcmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NFbnRpdHlTZWN0aW9uVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9wdXBGaWVsZEFjY2Vzcy5pbnZlcnRlZCA/IFwi0JPRgNGD0L/Qv9GLINCx0LXQtyDQtNC+0YHRgtGD0L/QsFwiIDogXCLQoNCw0LfRgNC10YjRkdC90L3Ri9C1INCz0YDRg9C/0L/Ri1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzQWRkUm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BvcHVwR3JvdXBJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3J0YWwgZ3JvdXAgSURcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQb3B1cEdyb3VwSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikgYWRkUG9wdXBBY2Nlc3NHcm91cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIiBvbkNsaWNrPXthZGRQb3B1cEFjY2Vzc0dyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNBcmVhIHBvcHVwQWNjZXNzTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3B1cEZpZWxkQWNjZXNzLmdyb3Vwcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPtCT0YDRg9C/0L/RiyDQvdC1INC00L7QsdCw0LLQu9C10L3RizwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBwb3B1cEZpZWxkQWNjZXNzLmdyb3Vwcy5tYXAoKGdyb3VwSWQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBSb3dcIiBrZXk9e2Ake2dyb3VwSWR9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyR3JvdXBJZGVudGl0eShncm91cElkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVBvcHVwRmllbGRBY2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IHBvcHVwRmllbGRBY2Nlc3MuZ3JvdXBzLmZpbHRlcigoXywgaXRlbUluZGV4KSA9PiBpdGVtSW5kZXggIT09IGluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NFbnRpdHlTZWN0aW9uVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9wdXBGaWVsZEFjY2Vzcy5pbnZlcnRlZCA/IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INCx0LXQtyDQtNC+0YHRgtGD0L/QsFwiIDogXCLQoNCw0LfRgNC10YjRkdC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQWNjZXNzQWRkUm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BvcHVwVXNlcklucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvcnRhbCB1c2VyIElEINC40LvQuCB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFBvcHVwVXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIGFkZFBvcHVwQWNjZXNzVXNlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIiBvbkNsaWNrPXthZGRQb3B1cEFjY2Vzc1VzZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc0FyZWEgcG9wdXBBY2Nlc3NMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvcHVwRmllbGRBY2Nlc3MudXNlcnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0L3QtSDQtNC+0LHQsNCy0LvQtdC90Ys8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogcG9wdXBGaWVsZEFjY2Vzcy51c2Vycy5tYXAoKHVzZXJJZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFJvdyB1c2VyUm93XCIga2V5PXtgJHt1c2VySWR9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVXNlcklkZW50aXR5KHVzZXJJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVQb3B1cEZpZWxkQWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHBvcHVwRmllbGRBY2Nlc3MudXNlcnMuZmlsdGVyKChfLCBpdGVtSW5kZXgpID0+IGl0ZW1JbmRleCAhPT0gaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICFzZWxlY3RlZEZpZWxkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVJ1bGVzXCI+RW1wdHk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFRpdGxlXCI+e3NlbGVjdGVkRmllbGQudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0RmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQkNGC0YDQuNCx0YPRgjoge3NlbGVjdGVkRmllbGQuZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEhlYWRlckFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiIG9uQ2xpY2s9e29wZW5FZGl0RmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKHsgdHlwZTogXCJkZWxldGVGaWVsZFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cFNlYXJjaElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6INCz0YDRg9C/0L/RiyDQuNC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINCy0L3Rg9GC0YDQuCDQv9GA0LDQstC40LtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3JvdXBTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEdyb3VwU2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZpZWxkLnJ1bGVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQsNCy0LjQu9CwINC10YnRkSDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcnVsZUNhcmQgJHtzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzZWxlY3RlZFJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtydWxlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdENoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZVJ1bGVTZWxlY3QocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlTGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPRgdC70L7QstC40LVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgb3BlcmF0b3JQaWxsIG9wZXJhdG9yLSR7cnVsZS5vcGVyYXRvcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtydWxlLmlzTm90ID8gYE5PVCAke3J1bGUub3BlcmF0b3J9YCA6IHJ1bGUub3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVWYWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnVpbGRSdWxlV2hlcmUoc2VsZWN0ZWRGaWVsZC5maWVsZCwgcnVsZSwgc2VsZWN0ZWRGaWVsZC5maWVsZFR5cGUgPz8gZ2V0S25vd25GaWVsZFR5cGUoc2VsZWN0ZWRGaWVsZC5maWVsZCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRSdWxlV2FybmluZ3Moc2VsZWN0ZWRGaWVsZCwgcnVsZSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZVdhcm5pbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0UnVsZVdhcm5pbmdzKHNlbGVjdGVkRmllbGQsIHJ1bGUpLm1hcCgod2FybmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17d2FybmluZ30+e3dhcm5pbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuQWRkR3JvdXAocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCz0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5BZGRVc2VyKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0UnVsZShydWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlUnVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5ncm91cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlNaW5pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTWF0Y2hlc1NlYXJjaChncm91cCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cExvY2tlZCA9IHNlbGVjdGVkUnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cFNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWQgfHwgc2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXBSb3cgJHtpc0dyb3VwU2VsZWN0ZWQgPyBcInNlbGVjdGVkR3JvdXBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAke2lzR3JvdXBMb2NrZWQgPyBcImxvY2tlZEdyb3VwXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzR3JvdXBTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzR3JvdXBMb2NrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JPRgNGD0L/Qv9CwINCy0YvQsdGA0LDQvdCwINCy0LzQtdGB0YLQtSDRgSDQv9GA0LDQstC40LvQvtC8XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXBTZWxlY3QoZ3JvdXBLZXksIGlzR3JvdXBMb2NrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdyb3VwSWRlbnRpdHkoZ3JvdXApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdEdyb3VwKHJ1bGUuaWQsIGluZGV4LCBncm91cClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzQXJlYSBydWxlVXNlcnNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS51c2Vycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eU1pbmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUudXNlcnMubWFwKCh1c2VySWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlck1hdGNoZXNTZWFyY2godXNlcklkKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwUm93IHVzZXJSb3dcIiBrZXk9e2Ake3VzZXJJZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVXNlcklkZW50aXR5KHVzZXJJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRVc2VyKHJ1bGUuaWQsIGluZGV4LCB1c2VySWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRSdWxlQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZFJ1bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINC/0YDQsNCy0LjQu9C+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbFNldHRpbmdBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tQWNjZXNzUGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VsZWN0aW9uQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEZpZWxkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTZWxlY3RlZFJ1bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkUnVsZUlkcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMIHtzZWxlY3RlZFJ1bGVJZHMubGVuZ3RofSDQv9GA0LDQstC40LtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkICE9PSBQT1BVUF9GSUVMRF9BQ0NFU1NfSUQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25TbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVNlbGVjdGVkR3JvdXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkR3JvdXBzQ291bnQgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMIHtzZWxlY3RlZEdyb3Vwc0NvdW50fSDQs9GA0YPQv9C/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzYXZlU3RhdGUgJHtoYXNVbnNhdmVkQ2hhbmdlcyA/IFwiY2hhbmdlZFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNVbnNhdmVkQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JXRgdGC0Ywg0L3QtdGB0L7RhdGA0LDQvdGR0L3QvdGL0LUg0LjQt9C80LXQvdC10L3QuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCY0LfQvNC10L3QtdC90LjQuSDQvdC10YJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndoZXJlVG9nZ2xlQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93V2hlcmVQcmV2aWV3KCh2YWx1ZSkgPT4gIXZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1doZXJlUHJldmlldyA/IFwi0KHQutGA0YvRgtGMIFdIRVJFXCIgOiBcItCf0L7QutCw0LfQsNGC0YwgV0hFUkVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1doZXJlUHJldmlldyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVdoZXJlUHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tV2hlcmVIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JjRgtC+0LPQvtCy0YvQuSBXSEVSRTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y29weUNvbmZpZ1doZXJlUHJldmlld30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodC60L7Qv9C40YDQvtCy0LDRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e2J1aWxkQ29uZmlnV2hlcmVQcmV2aWV3KCl9PC9wcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbFNldHRpbmdCdXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FuY2VsQ29uZmlnQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxDb25maWdDaGFuZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzVW5zYXZlZENoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBseUNvbmZpZ0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXBwbHlDb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNVbnNhdmVkQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LjQvNC10L3QuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRGaWVsZFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0RmllbGRcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRGaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0YHRgtC+0LvQsdC10YZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDRgdGC0L7Qu9Cx0LXRhlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LvQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGb3JtRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1GaWVsZFR5cGUoZ2V0S25vd25GaWVsZFR5cGUoZmllbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFR5cGVGaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY2Nlc3MtZmllbGQtdHlwZVwiPkRhdGEgdHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2Nlc3MtZmllbGQtdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmllbGRUeXBlTmF0aXZlU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUZpZWxkVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1GaWVsZFR5cGUoZS50YXJnZXQudmFsdWUgYXMgQWNjZXNzRmllbGRUeXBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RyaW5nXCI+VGV4dDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudW1iZXJcIj5OdW1iZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZVwiPkRhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYm9vbGVhblwiPkJvb2xlYW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3VpZFwiPkdVSUQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkRmllbGRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbmFsUnVsZUJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25hbFJ1bGVUaXRsZVwiPtCf0LXRgNCy0L7QtSDQv9GA0LDQstC40LvQvjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSdWxlRm9ybSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVGaWVsZH0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlRmllbGRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj7Qo9C00LDQu9C40YLRjCDRgdGC0L7Qu9Cx0LXRhj88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLRgdC1INC/0YDQsNCy0LjQu9CwINCy0L3Rg9GC0YDQuCDQvdC10LPQviDRgtC+0LbQtSDQsdGD0LTRg9GCINGD0LTQsNC70LXQvdGLLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVGaWVsZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkUnVsZVwiIHx8IGRpYWxvZy50eXBlID09PSBcImVkaXRSdWxlXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkUnVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQv9GA0LDQstC40LvQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0L/RgNCw0LLQuNC70L5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSdWxlRm9ybSgpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlUnVsZX0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlUnVsZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINC/0YDQsNCy0LjQu9C+PzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9GA0YPQv9C/0Ysg0Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INCy0L3Rg9GC0YDQuCDRjdGC0L7Qs9C+INC/0YDQsNCy0LjQu9CwINGC0L7QttC1INCx0YPQtNGD0YIg0YPQtNCw0LvQtdC90YsuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblwiIG9uQ2xpY2s9e2RlbGV0ZVJ1bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEdyb3VwXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHcm91cFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQs9GA0YPQv9C/0YNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQs9GA0YPQv9C/0YNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCT0YDRg9C/0L/QsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtR3JvdXAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlR3JvdXB9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUdyb3VwXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+0KPQtNCw0LvQuNGC0Ywg0LPRgNGD0L/Qv9GDPzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQk9GA0YPQv9C/0LAg0LHRg9C00LXRgiDRg9C00LDQu9C10L3QsCDRgtC+0LvRjNC60L4g0LjQtyDRjdGC0L7Qs9C+INC/0YDQsNCy0LjQu9CwLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVHcm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkR2xvYmFsR3JvdXBcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLnR5cGUgPT09IFwiZWRpdEdsb2JhbEdyb3VwXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkR2xvYmFsR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQlNC+0LHQsNCy0LjRgtGMINCz0YDRg9C/0L/RgyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINCz0YDRg9C/0L/RgyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JPRgNGD0L/Qv9CwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtR3JvdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1Hcm91cChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVHbG9iYWxHcm91cH0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlR2xvYmFsR3JvdXBcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywg0LPRgNGD0L/Qv9GDINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQrdGC0LAg0LPRgNGD0L/Qv9CwINCx0L7Qu9GM0YjQtSDQvdC1INCx0YPQtNC10YIg0L/QvtC70YPRh9Cw0YLRjCDQtNC+0YHRgtGD0L8g0LrQviDQstGB0LXQvCDQtNCw0L3QvdGL0LwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlR2xvYmFsR3JvdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRVc2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRVc2VyXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSUQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1Vc2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVVc2VyfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVVc2VyXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+0KPQtNCw0LvQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LHRg9C00LXRgiDRg9C00LDQu9GR0L0g0YLQvtC70YzQutC+INC40Lcg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblwiIG9uQ2xpY2s9e2RlbGV0ZVVzZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbFVzZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLnR5cGUgPT09IFwiZWRpdEdsb2JhbFVzZXJcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRHbG9iYWxVc2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJRCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LjQu9C4IHVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybVVzZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUdsb2JhbFVzZXJ9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUdsb2JhbFVzZXJcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LHQvtC70YzRiNC1INC90LUg0LHRg9C00LXRgiDQv9C+0LvRg9GH0LDRgtGMINC00L7RgdGC0YPQvyDQutC+INCy0YHQtdC8INC00LDQvdC90YvQvC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRhbmdlckJ1dHRvblwiIG9uQ2xpY2s9e2RlbGV0ZUdsb2JhbFVzZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIEltbXV0YWJsZSwgQWxsRGF0YVNvdXJjZVR5cGVzLCB0eXBlIFVzZURhdGFTb3VyY2UgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgdHlwZSB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiO1xuaW1wb3J0IEFjY2Vzc1NldHRpbmcsIHsgZGVmYXVsdEFjY2Vzc0NvbmZpZywgdHlwZSBBY2Nlc3NDb25maWcgfSBmcm9tIFwiLi9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmdcIjtcbmltcG9ydCBcIi4vc2V0dGluZy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZyhwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4pIHtcbiAgICBjb25zdCBzdG9yZWRBY2Nlc3MgPSBwcm9wcy5jb25maWc/LmFjY2Vzc0NvbmZpZztcbiAgICBjb25zdCBhY2Nlc3NWYWx1ZTogQWNjZXNzQ29uZmlnID0gc3RvcmVkQWNjZXNzXG4gICAgICAgID8gdHlwZW9mIHN0b3JlZEFjY2Vzcy5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdG9yZWRBY2Nlc3MuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICAgICAgICAgICAgOiBzdG9yZWRBY2Nlc3NcbiAgICAgICAgOiBkZWZhdWx0QWNjZXNzQ29uZmlnO1xuXG4gICAgY29uc3QgaGFuZGxlTWFpbkxheWVyQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pOiB2b2lkID0+IHtcbiAgICAgICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCB1c2VEYXRhU291cmNlcyB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQWNjZXNzQ2hhbmdlID0gKGFjY2Vzc0NvbmZpZzogQWNjZXNzQ29uZmlnKTogdm9pZCA9PiB7XG4gICAgICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICAgICAgICBpZDogcHJvcHMuaWQsXG4gICAgICAgICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoXCJhY2Nlc3NDb25maWdcIiwgSW1tdXRhYmxlKGFjY2Vzc0NvbmZpZykpLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZ1wiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1haW4tbGF5ZXItc2V0dGluZy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24tdGl0bGVcIj7QntGB0L3QvtCy0L3QvtC5INGB0LvQvtC5INC00LDQvdC90YvRhTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+0JLRi9Cx0LXRgNC40YLQtSDQvtGB0L3QvtCy0L3QvtC5IEZlYXR1cmVMYXllciDQtNC70Y8g0L/QvtGA0YLQsNC70LAuPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWxheWVyLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlcz17SW1tdXRhYmxlKFtBbGxEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17cHJvcHMudXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWFpbkxheWVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIGFjY2Vzcy1zZXR0aW5nLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8QWNjZXNzU2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjZXNzVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBY2Nlc3NDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0J3QsNGB0YLRgNC+0LnQutC4INC00L7RgdGC0YPQv9CwXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCLQndCw0YHRgtGA0L7QudGC0LUg0L/QvtC70L3Ri9C5INC4INC+0LPRgNCw0L3QuNGH0LXQvdC90YvQuSDQtNC+0YHRgtGD0L8g0LTQu9GPINCz0YDRg9C/0L8g0Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LkgUG9ydGFsLlwiXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxhYmVsPVwi0J7RgtC60YDRi9GC0Ywg0L3QsNGB0YLRgNC+0LnQutC4INC00L7RgdGC0YPQv9CwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==