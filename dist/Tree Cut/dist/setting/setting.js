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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.css","webpack://./your-extensions/widgets/Tree%20Cut/src/setting/AccessSetting/AccessSetting.css"],"names":[],"mappings":"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","sourcesContent":[".settingArea {\n    width: 100%;\n    padding: 0;\n    color: inherit;\n    font-family: inherit;\n}\n\n.settingsContent {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n\n.sourceSelectorCard {\n    padding: 12px;\n}\n\n.panelCardLabel {\n    margin-bottom: 9px;\n    color: var(--dark-800, rgba(255, 255, 255, 0.72));\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n}\n\n.sourceSelectorCard>div:last-child {\n    width: 100%;\n}\n\n.accessControlCard {\n    padding: 0;\n}\n\n.accessControlHeader {\n    margin-bottom: 12px;\n}\n\n.accessControlTitle {\n    margin-bottom: 3px;\n    color: inherit;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n}\n\n.accessControlDescription {\n    color: var(--dark-800, rgba(255, 255, 255, 0.66));\n    font-size: 12px;\n    line-height: 17px;\n}\n\n.accessSettingsButton {\n    width: 100%;\n    min-height: 40px;\n    padding: 8px 14px;\n    border: 1px solid var(--sys-color-primary-main, #00a9c0);\n    border-radius: 3px;\n    background: var(--sys-color-primary-main, #00a9c0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n    box-shadow: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 18px;\n    text-align: center;\n    transition:\n        background-color 0.15s ease,\n        border-color 0.15s ease,\n        box-shadow 0.15s ease;\n}\n\n.accessSettingsButton:hover,\n.accessSettingsButton:focus-visible {\n    border-color: var(--sys-color-primary-dark, #008ca0);\n    background: var(--sys-color-primary-dark, #008ca0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n}\n\n.accessSettingsButton:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 2px color-mix(in srgb, var(--sys-color-primary-main, #00a9c0) 28%, transparent);\n}\n\n.accessSettingsButtonText {\n    width: 100%;\n    line-height: 18px;\n    text-align: center;\n}\n\n.sourceSelectorCard button {\n    border-radius: 4px;\n}\n\n.modalArea {\n    color: #f3f4f6;\n    font-family: Arial, sans-serif;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modalBlock {\n    width: min(1200px, calc(100vw - 32px));\n    height: min(800px, calc(100vh - 32px));\n    background: #1f222b;\n    border: 1px solid #343a49;\n    border-radius: 10px;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n    background: #252c41;\n    padding: 14px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    min-height: 0;\n}\n\n.modalListHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.modalListTitle {\n    font-size: 17px;\n    font-weight: 700;\n}\n\n.modalListSubtitle {\n    margin-top: 3px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.fieldList {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    min-height: 0;\n}\n\n.modalItem {\n    padding: 12px 14px;\n    border-radius: 8px;\n    border: 1px solid #77839f;\n    background: #293148;\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n    background: #33405f;\n    border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.modalItemInfo {\n    margin-top: 5px;\n    font-size: 13px;\n    color: #b8bfd1;\n}\n\n.modalItemInfo span {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.addFieldButton {\n    height: 64px;\n    border-radius: 8px;\n    border: 1px dashed #9ca8c4;\n    background: transparent;\n    color: #ffffff;\n    font-size: 34px;\n    cursor: pointer;\n}\n\n.addFieldButton:hover {\n    background: #303a56;\n}\n\n.modalBottomActions {\n    margin-top: auto;\n    display: grid;\n    gap: 8px;\n}\n\n.jsonButton {\n    height: 38px;\n    border-radius: 8px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #f3f4f6;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n}\n\n.jsonButton:hover {\n    background: #303a56;\n}\n\n.jsonButton input {\n    display: none;\n}\n\n.modalRightPanel {\n    min-width: 0;\n    min-height: 0;\n    background: #20232c;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.modalItemFullInfo {\n    flex: 1;\n    min-height: 0;\n    padding: 22px;\n    background: #20232c;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.rightHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n    padding-bottom: 16px;\n    border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n    font-size: 24px;\n    font-weight: 800;\n}\n\n.rightField {\n    margin-top: 6px;\n    color: #aeb6ca;\n    font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.rightHeaderActions,\n.ruleActions {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.iconButton,\n.miniIconButton {\n    width: 34px;\n    height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n}\n\n.miniIconButton {\n    width: 26px;\n    height: 26px;\n    font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n    background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n    border-color: #8f4f5b;\n    color: #ffb8c1;\n}\n\n.rulesArea {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.ruleCard {\n    padding: 14px;\n    border-radius: 10px;\n    background: #262b36;\n    border: 1px solid #3d465b;\n    transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n    border-color: #9baee0;\n    background: #2c3448;\n}\n\n.ruleHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.ruleInfo {\n    flex: 1;\n    min-width: 0;\n}\n\n.ruleLabel {\n    color: #aeb6ca;\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.ruleValue {\n    font-size: 15px;\n    font-weight: 700;\n    color: #ffffff;\n    overflow-wrap: anywhere;\n}\n\n.ruleActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n    opacity: 1;\n}\n\n.smallButton {\n    min-height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n    padding: 0 10px;\n}\n\n.smallButton:hover {\n    background: #3b4868;\n}\n\n.groupsArea {\n    margin-top: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.usersArea {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.ruleUsersArea {\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px dashed #44506a;\n}\n\n.accessEntitySectionTitle {\n    margin-top: 20px;\n    color: #aeb6ca;\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n}\n\n.groupRow {\n    background: #1d2230;\n    border: 1px solid #384258;\n    border-radius: 8px;\n    padding: 8px 10px;\n    color: #d9deea;\n    font-size: 13px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 12px;\n    transition: 0.2s;\n}\n\n.groupRow.userRow {\n    grid-template-columns: 1fr auto;\n    border-color: #3e526f;\n    background: #1d2634;\n}\n\n.userIdentity .groupIdCopyButton {\n    color: #9fb6df;\n}\n\n.groupRow.selectedGroup {\n    border-color: #9baee0;\n    background: #273149;\n}\n\n.groupRow span {\n    overflow-wrap: anywhere;\n}\n\n.groupActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n    opacity: 1;\n}\n\n.addRuleButton {\n    height: 44px;\n    border-radius: 9px;\n    border: 1px dashed #78849f;\n    background: transparent;\n    color: white;\n    cursor: pointer;\n}\n\n.addRuleButton:hover {\n    background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.emptyRules {\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px dashed #555f76;\n    text-align: center;\n}\n\n.dialogArea {\n    position: fixed;\n    inset: 0;\n    z-index: 10000;\n    background: rgba(0, 0, 0, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dialogBlock {\n    width: 520px;\n    max-width: calc(100vw - 32px);\n    max-height: calc(100vh - 32px);\n    overflow: auto;\n    background: #252b38;\n    border: 1px solid #4c566c;\n    border-radius: 12px;\n    padding: 18px;\n    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n    font-size: 18px;\n    font-weight: 800;\n    margin-bottom: 12px;\n}\n\n.dialogText {\n    color: #c2c8d5;\n    margin-bottom: 16px;\n}\n\n.dialogInput {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: white;\n    outline: none;\n}\n\n.dialogInput:focus {\n    border-color: #9baee0;\n}\n\n.dialogActions {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n    margin-top: 10px;\n}\n\n.dialogActions button {\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #30384a;\n    color: white;\n    cursor: pointer;\n}\n\n.dialogActions button:hover {\n    background: #3b465d;\n}\n\n.dangerButton {\n    border-color: #985565 !important;\n    background: #4a2430 !important;\n    color: #ffc4cc !important;\n}\n\n.operatorTabs {\n    display: grid;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n    background: #35415b;\n    border-color: #9baee0;\n    color: #ffffff;\n}\n\n.twoInputGrid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.inListArea {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.inAddRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.inValueRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.previewWhere {\n    margin-top: 12px;\n    padding: 10px 12px;\n    border-radius: 8px;\n    border: 1px solid #465169;\n    background: #1e2430;\n    color: #aeb6ca;\n    font-size: 13px;\n}\n\n.previewWhere span {\n    display: block;\n    margin-top: 6px;\n    color: #ffffff;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n    margin-top: 12px;\n    padding: 12px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #202637;\n}\n\n.optionalRuleTitle {\n    margin-bottom: 10px;\n    font-size: 13px;\n    color: #c6ccda;\n}\n\n.bulkActionBar {\n    min-height: 42px;\n    padding: 8px 10px;\n    border-radius: 9px;\n    border: 1px solid #59657d;\n    background: #202637;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    color: #d8deea;\n    font-size: 13px;\n}\n\n.dangerButtonSmall {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #985565;\n    background: #4a2430;\n    color: #ffc4cc;\n    cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n    background: #633040;\n}\n\n.selectCheckbox {\n    width: 16px;\n    height: 16px;\n    accent-color: #9baee0;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.groupIdentity {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n.groupName {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.groupId {\n    color: #aeb6ca;\n    font-size: 12px;\n    font-family: Consolas, \"Courier New\", monospace;\n    overflow-wrap: anywhere;\n}\n\n.groupMembers {\n    margin-top: 2px;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n\n.groupIdCopyButton {\n    width: fit-content;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: #aeb6ca;\n    font-size: 12px;\n    line-height: 1.35;\n    font-family: Consolas, \"Courier New\", monospace;\n    text-align: left;\n    overflow-wrap: anywhere;\n    cursor: pointer;\n    transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n    color: #ffffff;\n    text-decoration: underline;\n}\n\n.settingNotice {\n    position: fixed;\n    top: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 11000;\n    min-width: 210px;\n    padding: 11px 18px;\n    border-radius: 9px;\n    border: 1px solid #7185ae;\n    background: #273149;\n    color: #ffffff;\n    font-size: 13px;\n    text-align: center;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n    pointer-events: none;\n}\n\n.globalSettingActions {\n    flex-shrink: 0;\n    min-height: 66px;\n    padding: 13px 22px;\n    border-top: 1px solid #3a4050;\n    background: #20232c;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.saveState {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.saveState.changed {\n    color: #f1c27d;\n}\n\n.globalSettingButtons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n    height: 38px;\n    padding: 0 18px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 13px;\n    transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n}\n\n.applyConfigButton {\n    border: 1px solid #728ac3;\n    background: #385083;\n    color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n    background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n    background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n    opacity: 0.45;\n    cursor: default;\n}\n.staticSelectionBar {\n    flex-shrink: 0;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    min-height: 46px;\n    margin-bottom: 2px;\n    backdrop-filter: blur(6px);\n}\n\n.staticSelectionBar.emptySelection {\n    border-color: #3b4356;\n    background: #1f2532;\n    color: #8790a5;\n}\n\n.staticSelectionBar b {\n    color: #ffffff;\n}\n\n.staticSelectionBar.emptySelection b {\n    color: #aeb6ca;\n}\n\n.combinedSelectionBar {\n    align-items: center;\n}\n\n.selectionCounters,\n.selectionActions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.selectionCounters span {\n    white-space: nowrap;\n}\n\n.dangerButtonSmall:disabled {\n    opacity: 0.42;\n    cursor: default;\n    background: #2a2230;\n    border-color: #554350;\n    color: #9a8590;\n}\n\n.dangerButtonSmall:hover:disabled {\n    background: #2a2230;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n}\n\n.bottomSelectionActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.bottomAccessPanel .saveState {\n    white-space: nowrap;\n}\n\n.selectCheckbox {\n    appearance: none;\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    border: 1px solid #697795;\n    background: #1e2430;\n    cursor: pointer;\n    flex-shrink: 0;\n    display: inline-grid;\n    place-content: center;\n    transition: 0.18s ease;\n}\n\n.selectCheckbox:hover:not(:disabled) {\n    border-color: #a9b9e0;\n    background: #273149;\n}\n\n.selectCheckbox:checked {\n    border-color: #9baee0;\n    background: #3d527d;\n}\n\n.selectCheckbox:checked::after {\n    content: \"\";\n    width: 9px;\n    height: 5px;\n    border-left: 2px solid #ffffff;\n    border-bottom: 2px solid #ffffff;\n    transform: rotate(-45deg) translate(1px, -1px);\n}\n\n.selectCheckbox:disabled {\n    cursor: default;\n    opacity: 0.9;\n    border-color: #7484a8;\n    background: #34476d;\n}\n\n.groupRow.lockedGroup {\n    border-color: #6e7fa6;\n    background: #29344c;\n}\n\n.groupRow.lockedGroup .groupActions {\n    opacity: 0.45;\n}\n\n@media (max-width: 820px) {\n    .globalSettingActions {\n        align-items: flex-start;\n        flex-direction: column;\n    }\n\n    .globalSettingButtons {\n        width: 100%;\n        justify-content: flex-end;\n    }\n}\n\n.iconButton,\n.miniIconButton {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    line-height: 1;\n}\n\n.buttonSvgIcon {\n    width: 16px;\n    height: 16px;\n    display: block;\n    fill: currentColor;\n    pointer-events: none;\n}\n\n.miniIconButton .buttonSvgIcon {\n    width: 13px;\n    height: 13px;\n}\n\n.iconButton:not(.danger),\n.miniIconButton:not(.danger) {\n    color: #d8deea;\n}\n\n.sideSearchInput,\n.groupSearchInput {\n    width: 100%;\n    min-height: 36px;\n    padding: 0 11px;\n    border-radius: 8px;\n    border: 1px solid #4b5670;\n    background: #1d2330;\n    color: #ffffff;\n    outline: none;\n    font-size: 13px;\n}\n\n.sideSearchInput:focus,\n.groupSearchInput:focus {\n    border-color: #9baee0;\n}\n\n.groupSearchInput {\n    margin-top: 14px;\n}\n\n.modalItemMeta {\n    margin-top: 9px;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n    flex-wrap: wrap;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n.warningPill {\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #856a35;\n    background: rgba(132, 93, 25, 0.22);\n    color: #f2c678;\n}\n\n.operatorPill {\n    margin-left: 8px;\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    font-size: 11px;\n    text-transform: uppercase;\n}\n\n.operator-equal { border-color: #6e83b8; color: #c9d7ff; }\n.operator-range { border-color: #6f9070; color: #c8f2c9; }\n.operator-include { border-color: #8c7ab8; color: #e0d2ff; }\n.operator-like { border-color: #9a7a5a; color: #ffd7b5; }\n\n.ruleWarnings {\n    margin-top: 8px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n}\n\n.ruleWarnings span {\n    padding: 3px 8px;\n    border-radius: 999px;\n    border: 1px solid #82603b;\n    background: rgba(130, 96, 59, 0.2);\n    color: #f2c678;\n    font-size: 12px;\n    font-weight: 600;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n}\n\n.whereToggleButton {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.whereToggleButton:hover {\n    background: #303a56;\n}\n\n.bottomWherePreview {\n    position: absolute;\n    left: 22px;\n    right: 22px;\n    bottom: 74px;\n    max-height: 155px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #171c27;\n    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.34);\n    overflow: hidden;\n}\n\n.bottomWhereHeader {\n    min-height: 36px;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid #30394d;\n    color: #c6ccda;\n    font-size: 13px;\n    font-weight: 700;\n}\n\n.bottomWhereHeader button {\n    min-height: 26px;\n    padding: 0 9px;\n    border-radius: 7px;\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.bottomWhereHeader button:hover {\n    background: #3b4868;\n}\n\n.bottomWherePreview pre {\n    margin: 0;\n    padding: 12px;\n    max-height: 118px;\n    overflow: auto;\n    color: #ffffff;\n    font-size: 12px;\n    line-height: 1.45;\n    white-space: pre-wrap;\n    overflow-wrap: anywhere;\n    font-family: Consolas, \"Courier New\", monospace;\n}\n\n.modalRightPanel {\n    position: relative;\n}\n\n.joinOperatorControl {\n    min-height: 32px;\n    padding: 4px;\n    border: 1px solid #59657d;\n    border-radius: 8px;\n    background: #1e2430;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.joinOperatorControl span {\n    padding: 0 7px;\n    white-space: nowrap;\n}\n\n.joinOperatorControl button {\n    height: 24px;\n    padding: 0 9px;\n    border-radius: 6px;\n    border: 1px solid transparent;\n    background: transparent;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 700;\n}\n\n.joinOperatorControl button:hover,\n.joinOperatorControl button.active {\n    border-color: #9baee0;\n    background: #35415b;\n    color: #ffffff;\n}\n\n.modalItemInfoLine {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.modalItemCondition {\n    min-width: 0;\n    color: #aeb6ca !important;\n    font-weight: 500 !important;\n    overflow-wrap: anywhere;\n}\n\n.modalItemCondition b {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.modalItemCount {\n    flex-shrink: 0;\n    color: #8fa3cf !important;\n    font-size: 12px;\n    font-weight: 700;\n    white-space: normal;\n    text-align: right;\n}\n\n.groupIdTitleLine {\n    min-width: 0;\n    display: flex;\n    align-items: baseline;\n    gap: 6px;\n    flex-wrap: wrap;\n}\n\n.groupTitleAfterId {\n    min-width: 0;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.ruleModeRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: start;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.ruleModeRow .operatorTabs {\n    margin-bottom: 0;\n}\n\n.notToggleButton {\n    height: 36px;\n    min-width: 58px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #6d5d76;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 0.04em;\n    transition: 0.18s ease;\n}\n\n.notToggleButton:hover {\n    border-color: #c59be0;\n    background: #2b2638;\n    color: #ffffff;\n}\n\n.notToggleButton.active {\n    border-color: #d1a7ef;\n    background: #49345f;\n    color: #ffffff;\n    box-shadow: 0 0 0 1px rgba(209, 167, 239, 0.18) inset;\n}\n\n@media (max-width: 620px) {\n    .ruleModeRow {\n        grid-template-columns: 1fr;\n    }\n\n    .notToggleButton {\n        width: 100%;\n    }\n}\n",".settingArea {\n  width: 100%;\n  padding: 0;\n  color: inherit;\n  font-family: inherit;\n}\n\n.settingsContent {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n.sourceSelectorCard {\n  padding: 12px;\n}\n\n.panelCardLabel {\n  margin-bottom: 9px;\n  color: var(--dark-800, rgba(255, 255, 255, 0.72));\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n}\n\n.sourceSelectorCard > div:last-child {\n  width: 100%;\n}\n\n.accessControlCard {\n  padding: 0;\n}\n\n.accessControlHeader {\n  margin-bottom: 12px;\n}\n\n.accessControlTitle {\n  margin-bottom: 3px;\n  color: inherit;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.accessControlDescription {\n  color: var(--dark-800, rgba(255, 255, 255, 0.66));\n  font-size: 12px;\n  line-height: 17px;\n}\n\n.accessSettingsButton {\n  width: 100%;\n  min-height: 40px;\n  padding: 8px 14px;\n  border: 1px solid var(--sys-color-primary-main, #00a9c0);\n  border-radius: 3px;\n  background: var(--sys-color-primary-main, #00a9c0);\n  color: var(--sys-color-primary-contrast-text, #ffffff);\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: center;\n  transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.accessSettingsButton:hover,\n.accessSettingsButton:focus-visible {\n  border-color: var(--sys-color-primary-dark, #008ca0);\n  background: var(--sys-color-primary-dark, #008ca0);\n  color: var(--sys-color-primary-contrast-text, #ffffff);\n}\n\n.accessSettingsButton:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--sys-color-primary-main, #00a9c0) 28%, transparent);\n}\n\n.accessSettingsButtonText {\n  width: 100%;\n  line-height: 18px;\n  text-align: center;\n}\n\n.sourceSelectorCard button {\n  border-radius: 4px;\n}\n\n.modalArea {\n  color: #f3f4f6;\n  font-family: Arial, sans-serif;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modalBlock {\n  width: min(1200px, 100vw - 32px);\n  height: min(800px, 100vh - 32px);\n  background: #1f222b;\n  border: 1px solid #343a49;\n  border-radius: 10px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n  background: #252c41;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n}\n\n.modalListHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.modalListTitle {\n  font-size: 17px;\n  font-weight: 700;\n}\n\n.modalListSubtitle {\n  margin-top: 3px;\n  color: #aeb6ca;\n  font-size: 12px;\n}\n\n.fieldList {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-height: 0;\n}\n\n.modalItem {\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid #77839f;\n  background: #293148;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n  background: #33405f;\n  border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.modalItemInfo {\n  margin-top: 5px;\n  font-size: 13px;\n  color: #b8bfd1;\n}\n\n.modalItemInfo span {\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.addFieldButton {\n  height: 64px;\n  border-radius: 8px;\n  border: 1px dashed #9ca8c4;\n  background: transparent;\n  color: #ffffff;\n  font-size: 34px;\n  cursor: pointer;\n}\n\n.addFieldButton:hover {\n  background: #303a56;\n}\n\n.modalBottomActions {\n  margin-top: auto;\n  display: grid;\n  gap: 8px;\n}\n\n.jsonButton {\n  height: 38px;\n  border-radius: 8px;\n  border: 1px solid #56627c;\n  background: #1f2638;\n  color: #f3f4f6;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n\n.jsonButton:hover {\n  background: #303a56;\n}\n\n.jsonButton input {\n  display: none;\n}\n\n.modalRightPanel {\n  min-width: 0;\n  min-height: 0;\n  background: #20232c;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.modalItemFullInfo {\n  flex: 1;\n  min-height: 0;\n  padding: 22px;\n  background: #20232c;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.rightHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.rightField {\n  margin-top: 6px;\n  color: #aeb6ca;\n  font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.rightHeaderActions,\n.ruleActions {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.iconButton,\n.miniIconButton {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n}\n\n.miniIconButton {\n  width: 26px;\n  height: 26px;\n  font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n  background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n  border-color: #8f4f5b;\n  color: #ffb8c1;\n}\n\n.rulesArea {\n  padding-top: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.ruleCard {\n  padding: 14px;\n  border-radius: 10px;\n  background: #262b36;\n  border: 1px solid #3d465b;\n  transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n  border-color: #9baee0;\n  background: #2c3448;\n}\n\n.ruleHeader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.ruleInfo {\n  flex: 1;\n  min-width: 0;\n}\n\n.ruleLabel {\n  color: #aeb6ca;\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n\n.ruleValue {\n  font-size: 15px;\n  font-weight: 700;\n  color: #ffffff;\n  overflow-wrap: anywhere;\n}\n\n.ruleActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n  opacity: 1;\n}\n\n.smallButton {\n  min-height: 34px;\n  border-radius: 8px;\n  border: 1px solid #5a6680;\n  background: #293148;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n}\n\n.smallButton:hover {\n  background: #3b4868;\n}\n\n.groupsArea {\n  margin-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.usersArea {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.ruleUsersArea {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px dashed #44506a;\n}\n\n.accessEntitySectionTitle {\n  margin-top: 20px;\n  color: #aeb6ca;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.groupRow {\n  background: #1d2230;\n  border: 1px solid #384258;\n  border-radius: 8px;\n  padding: 8px 10px;\n  color: #d9deea;\n  font-size: 13px;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 12px;\n  transition: 0.2s;\n}\n\n.groupRow.userRow {\n  grid-template-columns: 1fr auto;\n  border-color: #3e526f;\n  background: #1d2634;\n}\n\n.userIdentity .groupIdCopyButton {\n  color: #9fb6df;\n}\n\n.groupRow.selectedGroup {\n  border-color: #9baee0;\n  background: #273149;\n}\n\n.groupRow span {\n  overflow-wrap: anywhere;\n}\n\n.groupActions {\n  opacity: 0;\n  transition: 0.2s;\n  flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n  opacity: 1;\n}\n\n.addRuleButton {\n  height: 44px;\n  border-radius: 9px;\n  border: 1px dashed #78849f;\n  background: transparent;\n  color: white;\n  cursor: pointer;\n}\n\n.addRuleButton:hover {\n  background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.emptyRules {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px dashed #555f76;\n  text-align: center;\n}\n\n.dialogArea {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dialogBlock {\n  width: 520px;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  overflow: auto;\n  background: #252b38;\n  border: 1px solid #4c566c;\n  border-radius: 12px;\n  padding: 18px;\n  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n  font-size: 18px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n\n.dialogText {\n  color: #c2c8d5;\n  margin-bottom: 16px;\n}\n\n.dialogInput {\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding: 0 12px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: white;\n  outline: none;\n}\n\n.dialogInput:focus {\n  border-color: #9baee0;\n}\n\n.dialogActions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.dialogActions button {\n  height: 36px;\n  padding: 0 14px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #30384a;\n  color: white;\n  cursor: pointer;\n}\n\n.dialogActions button:hover {\n  background: #3b465d;\n}\n\n.dangerButton {\n  border-color: #985565 !important;\n  background: #4a2430 !important;\n  color: #ffc4cc !important;\n}\n\n.operatorTabs {\n  display: grid;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: #d8deea;\n  cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n  background: #35415b;\n  border-color: #9baee0;\n  color: #ffffff;\n}\n\n.twoInputGrid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.inListArea {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.inAddRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.inValueRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: start;\n}\n\n.previewWhere {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #465169;\n  background: #1e2430;\n  color: #aeb6ca;\n  font-size: 13px;\n}\n\n.previewWhere span {\n  display: block;\n  margin-top: 6px;\n  color: #ffffff;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n  margin-top: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1px solid #465169;\n  background: #202637;\n}\n\n.optionalRuleTitle {\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #c6ccda;\n}\n\n.bulkActionBar {\n  min-height: 42px;\n  padding: 8px 10px;\n  border-radius: 9px;\n  border: 1px solid #59657d;\n  background: #202637;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: #d8deea;\n  font-size: 13px;\n}\n\n.dangerButtonSmall {\n  min-height: 30px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #985565;\n  background: #4a2430;\n  color: #ffc4cc;\n  cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n  background: #633040;\n}\n\n.selectCheckbox {\n  width: 16px;\n  height: 16px;\n  accent-color: #9baee0;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n.groupIdentity {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.groupName {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.groupId {\n  color: #aeb6ca;\n  font-size: 12px;\n  font-family: Consolas, \"Courier New\", monospace;\n  overflow-wrap: anywhere;\n}\n\n.groupMembers {\n  margin-top: 2px;\n  color: #8fa3cf;\n  font-size: 12px;\n}\n\n.groupIdCopyButton {\n  width: fit-content;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #aeb6ca;\n  font-size: 12px;\n  line-height: 1.35;\n  font-family: Consolas, \"Courier New\", monospace;\n  text-align: left;\n  overflow-wrap: anywhere;\n  cursor: pointer;\n  transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n.settingNotice {\n  position: fixed;\n  top: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 11000;\n  min-width: 210px;\n  padding: 11px 18px;\n  border-radius: 9px;\n  border: 1px solid #7185ae;\n  background: #273149;\n  color: #ffffff;\n  font-size: 13px;\n  text-align: center;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n  pointer-events: none;\n}\n\n.globalSettingActions {\n  flex-shrink: 0;\n  min-height: 66px;\n  padding: 13px 22px;\n  border-top: 1px solid #3a4050;\n  background: #20232c;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.saveState {\n  color: #8e96aa;\n  font-size: 13px;\n}\n\n.saveState.changed {\n  color: #f1c27d;\n}\n\n.globalSettingButtons {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n  height: 38px;\n  padding: 0 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n  border: 1px solid #59657d;\n  background: #293148;\n  color: #ffffff;\n}\n\n.applyConfigButton {\n  border: 1px solid #728ac3;\n  background: #385083;\n  color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n  background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n  background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n\n.staticSelectionBar {\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  min-height: 46px;\n  margin-bottom: 2px;\n  backdrop-filter: blur(6px);\n}\n\n.staticSelectionBar.emptySelection {\n  border-color: #3b4356;\n  background: #1f2532;\n  color: #8790a5;\n}\n\n.staticSelectionBar b {\n  color: #ffffff;\n}\n\n.staticSelectionBar.emptySelection b {\n  color: #aeb6ca;\n}\n\n.combinedSelectionBar {\n  align-items: center;\n}\n\n.selectionCounters,\n.selectionActions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.selectionCounters span {\n  white-space: nowrap;\n}\n\n.dangerButtonSmall:disabled {\n  opacity: 0.42;\n  cursor: default;\n  background: #2a2230;\n  border-color: #554350;\n  color: #9a8590;\n}\n\n.dangerButtonSmall:hover:disabled {\n  background: #2a2230;\n}\n\n.bottomAccessPanel {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.bottomSelectionActions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.bottomAccessPanel .saveState {\n  white-space: nowrap;\n}\n\n.selectCheckbox {\n  appearance: none;\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  border: 1px solid #697795;\n  background: #1e2430;\n  cursor: pointer;\n  flex-shrink: 0;\n  display: inline-grid;\n  place-content: center;\n  transition: 0.18s ease;\n}\n\n.selectCheckbox:hover:not(:disabled) {\n  border-color: #a9b9e0;\n  background: #273149;\n}\n\n.selectCheckbox:checked {\n  border-color: #9baee0;\n  background: #3d527d;\n}\n\n.selectCheckbox:checked::after {\n  content: \"\";\n  width: 9px;\n  height: 5px;\n  border-left: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff;\n  transform: rotate(-45deg) translate(1px, -1px);\n}\n\n.selectCheckbox:disabled {\n  cursor: default;\n  opacity: 0.9;\n  border-color: #7484a8;\n  background: #34476d;\n}\n\n.groupRow.lockedGroup {\n  border-color: #6e7fa6;\n  background: #29344c;\n}\n\n.groupRow.lockedGroup .groupActions {\n  opacity: 0.45;\n}\n\n@media (max-width: 820px) {\n  .globalSettingActions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .globalSettingButtons {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n.iconButton,\n.miniIconButton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  line-height: 1;\n}\n\n.buttonSvgIcon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.miniIconButton .buttonSvgIcon {\n  width: 13px;\n  height: 13px;\n}\n\n.iconButton:not(.danger),\n.miniIconButton:not(.danger) {\n  color: #d8deea;\n}\n\n.sideSearchInput,\n.groupSearchInput {\n  width: 100%;\n  min-height: 36px;\n  padding: 0 11px;\n  border-radius: 8px;\n  border: 1px solid #4b5670;\n  background: #1d2330;\n  color: #ffffff;\n  outline: none;\n  font-size: 13px;\n}\n\n.sideSearchInput:focus,\n.groupSearchInput:focus {\n  border-color: #9baee0;\n}\n\n.groupSearchInput {\n  margin-top: 14px;\n}\n\n.modalItemMeta {\n  margin-top: 9px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n  color: #8fa3cf;\n  font-size: 12px;\n}\n\n.warningPill {\n  padding: 2px 7px;\n  border-radius: 999px;\n  border: 1px solid #856a35;\n  background: rgba(132, 93, 25, 0.22);\n  color: #f2c678;\n}\n\n.operatorPill {\n  margin-left: 8px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  border: 1px solid #59657d;\n  background: #1e2430;\n  color: #d8deea;\n  font-size: 11px;\n  text-transform: uppercase;\n}\n\n.operator-equal {\n  border-color: #6e83b8;\n  color: #c9d7ff;\n}\n\n.operator-range {\n  border-color: #6f9070;\n  color: #c8f2c9;\n}\n\n.operator-include {\n  border-color: #8c7ab8;\n  color: #e0d2ff;\n}\n\n.operator-like {\n  border-color: #9a7a5a;\n  color: #ffd7b5;\n}\n\n.ruleWarnings {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.ruleWarnings span {\n  padding: 3px 8px;\n  border-radius: 999px;\n  border: 1px solid #82603b;\n  background: rgba(130, 96, 59, 0.2);\n  color: #f2c678;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.bottomAccessPanel {\n  min-width: 0;\n}\n\n.whereToggleButton {\n  min-height: 30px;\n  padding: 0 10px;\n  border-radius: 7px;\n  border: 1px solid #56627c;\n  background: #1f2638;\n  color: #d8deea;\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.whereToggleButton:hover {\n  background: #303a56;\n}\n\n.bottomWherePreview {\n  position: absolute;\n  left: 22px;\n  right: 22px;\n  bottom: 74px;\n  max-height: 155px;\n  border-radius: 10px;\n  border: 1px solid #465169;\n  background: #171c27;\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.34);\n  overflow: hidden;\n}\n\n.bottomWhereHeader {\n  min-height: 36px;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #30394d;\n  color: #c6ccda;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.bottomWhereHeader button {\n  min-height: 26px;\n  padding: 0 9px;\n  border-radius: 7px;\n  border: 1px solid #59657d;\n  background: #293148;\n  color: #ffffff;\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.bottomWhereHeader button:hover {\n  background: #3b4868;\n}\n\n.bottomWherePreview pre {\n  margin: 0;\n  padding: 12px;\n  max-height: 118px;\n  overflow: auto;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: 1.45;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n  font-family: Consolas, \"Courier New\", monospace;\n}\n\n.modalRightPanel {\n  position: relative;\n}\n\n.joinOperatorControl {\n  min-height: 32px;\n  padding: 4px;\n  border: 1px solid #59657d;\n  border-radius: 8px;\n  background: #1e2430;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #aeb6ca;\n  font-size: 12px;\n}\n\n.joinOperatorControl span {\n  padding: 0 7px;\n  white-space: nowrap;\n}\n\n.joinOperatorControl button {\n  height: 24px;\n  padding: 0 9px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: #d8deea;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.joinOperatorControl button:hover,\n.joinOperatorControl button.active {\n  border-color: #9baee0;\n  background: #35415b;\n  color: #ffffff;\n}\n\n.modalItemInfoLine {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.modalItemCondition {\n  min-width: 0;\n  color: #aeb6ca !important;\n  font-weight: 500 !important;\n  overflow-wrap: anywhere;\n}\n\n.modalItemCondition b {\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.modalItemCount {\n  flex-shrink: 0;\n  color: #8fa3cf !important;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: normal;\n  text-align: right;\n}\n\n.groupIdTitleLine {\n  min-width: 0;\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.groupTitleAfterId {\n  min-width: 0;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n  overflow-wrap: anywhere;\n}\n\n.ruleModeRow {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: start;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.ruleModeRow .operatorTabs {\n  margin-bottom: 0;\n}\n\n.notToggleButton {\n  height: 36px;\n  min-width: 58px;\n  padding: 0 12px;\n  border-radius: 8px;\n  border: 1px solid #6d5d76;\n  background: #1e2430;\n  color: #d8deea;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  transition: 0.18s ease;\n}\n\n.notToggleButton:hover {\n  border-color: #c59be0;\n  background: #2b2638;\n  color: #ffffff;\n}\n\n.notToggleButton.active {\n  border-color: #d1a7ef;\n  background: #49345f;\n  color: #ffffff;\n  box-shadow: 0 0 0 1px rgba(209, 167, 239, 0.18) inset;\n}\n\n@media (max-width: 620px) {\n  .ruleModeRow {\n    grid-template-columns: 1fr;\n  }\n  .notToggleButton {\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Tree Cut/src/setting/setting.css"
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Tree Cut/src/setting/setting.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  padding: 8px;
  color: #ffffff;
  line-height: 1.5;
}

.setting-section {
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.025);
}

.setting-section + .setting-section {
  margin-top: 16px;
}

.main-layer-setting-section {
  padding: 14px;
}

.setting-section-title {
  margin-bottom: 4px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}

.setting-section-description {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 12px;
  line-height: 1.4;
}

.main-layer-selector {
  width: 100%;
  color: #ffffff;
  --calcite-color-text-1: #ffffff;
  --calcite-color-text-2: rgba(255, 255, 255, 0.86);
  --calcite-color-text-3: rgba(255, 255, 255, 0.72);
}

.access-setting-section {
  width: 100%;
}

.dashboard-template-setting .main-layer-selector,
.dashboard-template-setting .main-layer-selector *,
.dashboard-template-setting .accessControlTitle {
  color: #ffffff;
}

.dashboard-template-setting .accessControlDescription {
  color: rgba(255, 255, 255, 0.76);
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/Tree Cut/src/setting/setting.css","webpack://./your-extensions/widgets/Tree%20Cut/src/setting/setting.css"],"names":[],"mappings":"AAAA;;EAEI,sBAAA;EACA,8BAAA;ACCJ;;ADEA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,WAAA;EACA,aAAA;EACA,0CAAA;EACA,kBAAA;EACA,sCAAA;ACCJ;;ADEA;EACI,gBAAA;ACCJ;;ADEA;EACI,aAAA;ACCJ;;ADEA;EACI,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,mBAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;ACCJ;;ADEA;EACI,WAAA;EACA,cAAA;EACA,+BAAA;EACA,iDAAA;EACA,iDAAA;ACCJ;;ADEA;EACI,WAAA;ACCJ;;ADEA;;;EAGI,cAAA;ACCJ;;ADEA;EACI,gCAAA;ACCJ","sourcesContent":[".dashboard-template-setting,\n.dashboard-template-setting * {\n    box-sizing: border-box;\n    font-family: Arial, sans-serif;\n}\n\n.dashboard-template-setting {\n    width: 100%;\n    padding: 8px;\n    color: #ffffff;\n    line-height: 1.5;\n}\n\n.setting-section {\n    width: 100%;\n    padding: 14px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.025);\n}\n\n.setting-section + .setting-section {\n    margin-top: 16px;\n}\n\n.main-layer-setting-section {\n    padding: 14px;\n}\n\n.setting-section-title {\n    margin-bottom: 4px;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.setting-section-description {\n    margin-bottom: 10px;\n    color: rgba(255, 255, 255, 0.76);\n    font-size: 12px;\n    line-height: 1.4;\n}\n\n.main-layer-selector {\n    width: 100%;\n    color: #ffffff;\n    --calcite-color-text-1: #ffffff;\n    --calcite-color-text-2: rgba(255, 255, 255, 0.86);\n    --calcite-color-text-3: rgba(255, 255, 255, 0.72);\n}\n\n.access-setting-section {\n    width: 100%;\n}\n\n.dashboard-template-setting .main-layer-selector,\n.dashboard-template-setting .main-layer-selector *,\n.dashboard-template-setting .accessControlTitle {\n    color: #ffffff;\n}\n\n.dashboard-template-setting .accessControlDescription {\n    color: rgba(255, 255, 255, 0.76);\n}\n",".dashboard-template-setting,\n.dashboard-template-setting * {\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n}\n\n.dashboard-template-setting {\n  width: 100%;\n  padding: 8px;\n  color: #ffffff;\n  line-height: 1.5;\n}\n\n.setting-section {\n  width: 100%;\n  padding: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.025);\n}\n\n.setting-section + .setting-section {\n  margin-top: 16px;\n}\n\n.main-layer-setting-section {\n  padding: 14px;\n}\n\n.setting-section-title {\n  margin-bottom: 4px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.setting-section-description {\n  margin-bottom: 10px;\n  color: rgba(255, 255, 255, 0.76);\n  font-size: 12px;\n  line-height: 1.4;\n}\n\n.main-layer-selector {\n  width: 100%;\n  color: #ffffff;\n  --calcite-color-text-1: #ffffff;\n  --calcite-color-text-2: rgba(255, 255, 255, 0.86);\n  --calcite-color-text-3: rgba(255, 255, 255, 0.72);\n}\n\n.access-setting-section {\n  width: 100%;\n}\n\n.dashboard-template-setting .main-layer-selector,\n.dashboard-template-setting .main-layer-selector *,\n.dashboard-template-setting .accessControlTitle {\n  color: #ffffff;\n}\n\n.dashboard-template-setting .accessControlDescription {\n  color: rgba(255, 255, 255, 0.76);\n}"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.css"
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.css ***!
  \**************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./AccessSetting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./your-extensions/widgets/Tree Cut/src/setting/setting.css"
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/Tree Cut/src/setting/setting.css ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./setting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/Tree Cut/src/setting/setting.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.tsx"
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.tsx ***!
  \**************************************************************************************/
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
/* harmony import */ var _AccessSetting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessSetting.css */ "./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.css");
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
    let where = "1=0";
    if (rule.operator === "equal") {
        where = `${field} = ${quoteValue((_a = rule.value) !== null && _a !== void 0 ? _a : "")}`;
    }
    if (rule.operator === "range") {
        where = `${field} BETWEEN ${quoteValue((_b = rule.from) !== null && _b !== void 0 ? _b : "")} AND ${quoteValue((_c = rule.to) !== null && _c !== void 0 ? _c : "")}`;
    }
    if (rule.operator === "include") {
        const values = (_d = rule.values) !== null && _d !== void 0 ? _d : [];
        where = `${field} IN (${values.map(quoteValue).join(", ")})`;
    }
    if (rule.operator === "like") {
        where = `${field} LIKE ${quoteValue((_e = rule.value) !== null && _e !== void 0 ? _e : "")}`;
    }
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
            .map((rule) => buildRuleWhere(field.field, rule));
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
    const fieldJoinOperator = (data === null || data === void 0 ? void 0 : data.fieldJoinOperator) === "or" ? "or" : "and";
    return {
        fullAccessGroups: Array.isArray(data === null || data === void 0 ? void 0 : data.fullAccessGroups)
            ? data.fullAccessGroups.map((item) => String(item))
            : [],
        fullAccessUsers: Array.isArray(data === null || data === void 0 ? void 0 : data.fullAccessUsers)
            ? data.fullAccessUsers.map((item) => String(item))
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
    const groupIds = [
        ...config.fullAccessGroups,
        ...config.rules.flatMap((field) => field.rules.flatMap((rule) => rule.groups)),
    ];
    return Array.from(new Set(groupIds)).sort();
};
const getConfigUserIds = (config) => {
    const userIds = [
        ...config.fullAccessUsers,
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
    var _a, _b, _c, _d;
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
    const [formGroup, setFormGroup] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
    const [formUser, setFormUser] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState("");
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
    const selectedField = selectedId === GLOBAL_ACCESS_ID
        ? null
        : ((_a = config.rules.find((item) => item.id === selectedId)) !== null && _a !== void 0 ? _a : null);
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
        if (ruleOperator === "equal") {
            if (!ruleValue.trim())
                return null;
            return {
                id: makeId(),
                operator: "equal",
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
                        if (rule.users.includes(userId))
                            parts.push(`(${buildRuleWhere(field.field, rule)})`);
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
        var _a, _b, _c, _d, _e;
        const warnings = [];
        const currentWhere = buildRuleWhere(field.field, rule);
        const duplicates = field.rules.filter((item) => item.id !== rule.id && buildRuleWhere(field.field, item) === currentWhere);
        if (duplicates.length > 0)
            warnings.push("Дублирует другое правило");
        if (rule.groups.length === 0 && rule.users.length === 0)
            warnings.push("Нет групп или пользователей доступа");
        if (rule.operator === "equal" && !((_a = rule.value) !== null && _a !== void 0 ? _a : "").trim()) {
            warnings.push("Пустое значение");
        }
        if (rule.operator === "like" && !((_b = rule.value) !== null && _b !== void 0 ? _b : "").trim()) {
            warnings.push("Пустое LIKE значение");
        }
        if (rule.operator === "include" && ((_c = rule.values) !== null && _c !== void 0 ? _c : []).length === 0) {
            warnings.push("IN без значений");
        }
        if (rule.operator === "range") {
            const from = Number(rule.from);
            const to = Number(rule.to);
            if (!((_d = rule.from) !== null && _d !== void 0 ? _d : "").trim() || !((_e = rule.to) !== null && _e !== void 0 ? _e : "").trim()) {
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
                const hasRuleAccess = rule.groups.some((group) => userGroups.includes(group)) ||
                    rule.users.some((userId) => userIds.includes(userId));
                if (hasRuleAccess) {
                    allowedRules.push(`(${buildRuleWhere(field.field, rule)})`);
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
    const renderRuleForm = () => {
        const previewFieldName = getPreviewFieldName();
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleModeRow" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "operatorTabs fourTabs" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "equal" ? "active" : "", onClick: () => setRuleOperator("equal") }, "Equal"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "range" ? "active" : "", onClick: () => setRuleOperator("range") }, "Range"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "include" ? "active" : "", onClick: () => setRuleOperator("include") }, "Include"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: ruleOperator === "like" ? "active" : "", onClick: () => setRuleOperator("like") }, "Like")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: `notToggleButton ${ruleIsNot ? "active" : ""}`, onClick: () => setRuleIsNot((value) => !value), title: "\u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435" }, "NOT")),
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
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "miniIconButton danger", onClick: () => removeValueFromInList(index) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TrashIcon, null)))))))),
            previewFieldName && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "previewWhere" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, "\u0418\u0442\u043E\u0433\u043E\u0432\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, (() => {
                    const tempRule = getRuleFromForm();
                    return tempRule
                        ? buildRuleWhere(previewFieldName, tempRule)
                        : `${previewFieldName} ...`;
                })())))));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingArea" },
        notice && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingNotice" }, notice),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "settingsContent" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlCard" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlHeader" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlTitle" }, (_b = props.title) !== null && _b !== void 0 ? _b : "Доступ к данным"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "accessControlDescription" }, (_c = props.description) !== null && _c !== void 0 ? _c : "Настройте группы и условия отображения объектов")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "default", size: "sm", className: "accessSettingsButton", onClick: () => setShowModal(true) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "accessSettingsButtonText" }, (_d = props.buttonLabel) !== null && _d !== void 0 ? _d : "Настройка доступа")))),
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
                        }))))) : !selectedField ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "Empty")) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
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
                            selectedField.rules.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "emptyRules" }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (selectedField.rules.map((rule) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `ruleCard ${selectedRuleIds.includes(rule.id)
                                    ? "selectedRule"
                                    : ""}`, key: rule.id },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleHeader" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedRuleIds.includes(rule.id), onChange: () => toggleRuleSelect(rule.id) }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleInfo" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleLabel" },
                                            "\u0423\u0441\u043B\u043E\u0432\u0438\u0435",
                                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: `operatorPill operator-${rule.operator}` }, rule.isNot ? `NOT ${rule.operator}` : rule.operator)),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ruleValue" }, buildRuleWhere(selectedField.field, rule)),
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
                                }))))))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "addRuleButton", onClick: openAddRule }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "globalSettingActions" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bottomAccessPanel" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "bottomSelectionActions" },
                                selectedId !== GLOBAL_ACCESS_ID && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButtonSmall", type: "button", onClick: deleteSelectedRules, disabled: selectedRuleIds.length === 0 },
                                    "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ",
                                    selectedRuleIds.length,
                                    " \u043F\u0440\u0430\u0432\u0438\u043B")),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { className: "dangerButtonSmall", type: "button", onClick: deleteSelectedGroups, disabled: selectedGroupsCount === 0 },
                                    "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ",
                                    selectedGroupsCount,
                                    " \u0433\u0440\u0443\u043F\u043F")),
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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/Tree Cut/src/setting/setting.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessSetting/AccessSetting */ "./your-extensions/widgets/Tree Cut/src/setting/AccessSetting/AccessSetting.tsx");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/Tree Cut/src/setting/setting.css");




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9UcmVlIEN1dC9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQ2pCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNE9BQTRPLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxV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Q3BDLFFBQVEsRUFBRSxxQkFBcUIsRUFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQ3BCLENBQ0EsQ0FDQTtRQUNWLHdFQUFTLFNBQVMsRUFBQyx3Q0FBd0M7WUFDdkQsMkRBQUMsb0VBQWEsSUFDVixLQUFLLEVBQUUsV0FBVyxFQUNsQixRQUFRLEVBQUUsa0JBQWtCLEVBQzVCLEtBQUssRUFBQyxtR0FBbUIsRUFDekIsV0FBVyxFQUFDLGtXQUEwRSxFQUN0RixXQUFXLEVBQUMsOElBQTJCLEdBQ3pDLENBQ0ksQ0FDUixDQUNULENBQUM7QUFDTixDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvVHJlZSBDdXQvc3JjL3NldHRpbmcvQWNjZXNzU2V0dGluZy9BY2Nlc3NTZXR0aW5nLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvVHJlZSBDdXQvc3JjL3NldHRpbmcvc2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9UcmVlIEN1dC9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcuY3NzPzE0YzciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL1RyZWUgQ3V0L3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzPzVlMTgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvVHJlZSBDdXQvc3JjL3NldHRpbmcvQWNjZXNzU2V0dGluZy9BY2Nlc3NTZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvVHJlZSBDdXQvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZXR0aW5nQXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbi5zZXR0aW5nc0NvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstNDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay0xMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpKTtcbn0gKi9cbi5zb3VyY2VTZWxlY3RvckNhcmQge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ucGFuZWxDYXJkTGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWNjZXNzQ29udHJvbEhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5hY2Nlc3NDb250cm9sVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcbiAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXRleHQsICNmZmZmZmYpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG5cbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpob3Zlcixcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XG4gIGNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1jb250cmFzdC10ZXh0LCAjZmZmZmZmKTtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApIDI4JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uYWNjZXNzU2V0dGluZ3NCdXR0b25UZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWxBcmVhIHtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbEJsb2NrIHtcbiAgd2lkdGg6IG1pbigxMjAwcHgsIDEwMHZ3IC0gMzJweCk7XG4gIGhlaWdodDogbWluKDgwMHB4LCAxMDB2aCAtIDMycHgpO1xuICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcbn1cblxuLm1vZGFsTGlzdCB7XG4gIGJhY2tncm91bmQ6ICMyNTJjNDE7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLm1vZGFsTGlzdEhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsTGlzdFRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9kYWxMaXN0U3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWVsZExpc3Qge1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5tb2RhbEl0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubW9kYWxJdGVtOmhvdmVyLFxuLm1vZGFsSXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMzMzQwNWY7XG4gIGJvcmRlci1jb2xvcjogI2I2YzRlZDtcbn1cblxuLm1vZGFsSXRlbVRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWxJdGVtSW5mbyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2I4YmZkMTtcbn1cblxuLm1vZGFsSXRlbUluZm8gc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkRmllbGRCdXR0b24ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5Y2E4YzQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRGaWVsZEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XG59XG5cbi5tb2RhbEJvdHRvbUFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbn1cblxuLmpzb25CdXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmpzb25CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xufVxuXG4uanNvbkJ1dHRvbiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2RhbFJpZ2h0UGFuZWwge1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbEl0ZW1GdWxsSW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnJpZ2h0SGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYTQwNTA7XG59XG5cbi5yaWdodFRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmlnaHRGaWVsZCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcbi5ydWxlQWN0aW9ucyxcbi5ncm91cEFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcbi5ydWxlQWN0aW9ucyB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmljb25CdXR0b24sXG4ubWluaUljb25CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWluaUljb25CdXR0b24ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pY29uQnV0dG9uOmhvdmVyLFxuLm1pbmlJY29uQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcbn1cblxuLmljb25CdXR0b24uZGFuZ2VyLFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcbiAgY29sb3I6ICNmZmI4YzE7XG59XG5cbi5ydWxlc0FyZWEge1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucnVsZUNhcmQge1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xufVxuXG4ucnVsZUhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbn1cblxuLnJ1bGVJbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ucnVsZUxhYmVsIHtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucnVsZVZhbHVlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ydWxlQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNtYWxsQnV0dG9uIHtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uc21hbGxCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xufVxuXG4uZ3JvdXBzQXJlYSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogN3B4O1xufVxuXG4udXNlcnNBcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3cHg7XG59XG5cbi5ydWxlVXNlcnNBcmVhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzQ0NTA2YTtcbn1cblxuLmFjY2Vzc0VudGl0eVNlY3Rpb25UaXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG5cbi5ncm91cFJvdyB7XG4gIGJhY2tncm91bmQ6ICMxZDIyMzA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODQyNTg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGNvbG9yOiAjZDlkZWVhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uZ3JvdXBSb3cudXNlclJvdyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGJvcmRlci1jb2xvcjogIzNlNTI2ZjtcbiAgYmFja2dyb3VuZDogIzFkMjYzNDtcbn1cblxuLnVzZXJJZGVudGl0eSAuZ3JvdXBJZENvcHlCdXR0b24ge1xuICBjb2xvcjogIzlmYjZkZjtcbn1cblxuLmdyb3VwUm93LnNlbGVjdGVkR3JvdXAge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XG59XG5cbi5ncm91cFJvdyBzcGFuIHtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmdyb3VwUm93OmhvdmVyIC5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYWRkUnVsZUJ1dHRvbiB7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYjMzNDg7XG59XG5cbi5lbXB0eU1pbmksXG4uZW1wdHlSdWxlcyB7XG4gIGNvbG9yOiAjOGU5NmFhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5lbXB0eVJ1bGVzIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM1NTVmNzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZ0FyZWEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2dCbG9jayB7XG4gIHdpZHRoOiA1MjBweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMyNTJiMzg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YzU2NmM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmRpYWxvZ1RpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGlhbG9nVGV4dCB7XG4gIGNvbG9yOiAjYzJjOGQ1O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZGlhbG9nSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRpYWxvZ0lucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xufVxuXG4uZGlhbG9nQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDY1ZDtcbn1cblxuLmRhbmdlckJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNGEyNDMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XG59XG5cbi5vcGVyYXRvclRhYnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxuLm9wZXJhdG9yVGFicyBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnR3b0lucHV0R3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5MaXN0QXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uaW5BZGRSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uaW5WYWx1ZVJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5wcmV2aWV3V2hlcmUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByZXZpZXdXaGVyZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ub3B0aW9uYWxSdWxlQmxvY2sge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xufVxuXG4ub3B0aW9uYWxSdWxlVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYzZjY2RhO1xufVxuXG4uYnVsa0FjdGlvbkJhciB7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGwge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4NTU2NTtcbiAgYmFja2dyb3VuZDogIzRhMjQzMDtcbiAgY29sb3I6ICNmZmM0Y2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYzMzA0MDtcbn1cblxuLnNlbGVjdENoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYWNjZW50LWNvbG9yOiAjOWJhZWUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZ3JvdXBJZGVudGl0eSB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5ncm91cE5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwSWQge1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwTWVtYmVycyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY29sb3I6ICM4ZmEzY2Y7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmdyb3VwSWRDb3B5QnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XG59XG5cbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnNldHRpbmdOb3RpY2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjhweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDExMDAwO1xuICBtaW4td2lkdGg6IDIxMHB4O1xuICBwYWRkaW5nOiAxMXB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi1oZWlnaHQ6IDY2cHg7XG4gIHBhZGRpbmc6IDEzcHggMjJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2F2ZVN0YXRlIHtcbiAgY29sb3I6ICM4ZTk2YWE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNhdmVTdGF0ZS5jaGFuZ2VkIHtcbiAgY29sb3I6ICNmMWMyN2Q7XG59XG5cbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyOGFjMztcbiAgYmFja2dyb3VuZDogIzM4NTA4MztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMzg0MzViO1xufVxuXG4uYXBwbHlDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjNDY2MTlhO1xufVxuXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmRpc2FibGVkLFxuLmFwcGx5Q29uZmlnQnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40NTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc3RhdGljU2VsZWN0aW9uQmFyIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbn1cblxuLnN0YXRpY1NlbGVjdGlvbkJhci5lbXB0eVNlbGVjdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogIzNiNDM1NjtcbiAgYmFja2dyb3VuZDogIzFmMjUzMjtcbiAgY29sb3I6ICM4NzkwYTU7XG59XG5cbi5zdGF0aWNTZWxlY3Rpb25CYXIgYiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3RhdGljU2VsZWN0aW9uQmFyLmVtcHR5U2VsZWN0aW9uIGIge1xuICBjb2xvcjogI2FlYjZjYTtcbn1cblxuLmNvbWJpbmVkU2VsZWN0aW9uQmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGlvbkNvdW50ZXJzLFxuLnNlbGVjdGlvbkFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNlbGVjdGlvbkNvdW50ZXJzIHNwYW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGw6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XG4gIGJvcmRlci1jb2xvcjogIzU1NDM1MDtcbiAgY29sb3I6ICM5YTg1OTA7XG59XG5cbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XG59XG5cbi5ib3R0b21BY2Nlc3NQYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ib3R0b21TZWxlY3Rpb25BY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJvdHRvbUFjY2Vzc1BhbmVsIC5zYXZlU3RhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2VsZWN0Q2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY5Nzc5NTtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLnNlbGVjdENoZWNrYm94OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTliOWUwO1xuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xufVxuXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbiAgYmFja2dyb3VuZDogIzNkNTI3ZDtcbn1cblxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDFweCwgLTFweCk7XG59XG5cbi5zZWxlY3RDaGVja2JveDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXItY29sb3I6ICM3NDg0YTg7XG4gIGJhY2tncm91bmQ6ICMzNDQ3NmQ7XG59XG5cbi5ncm91cFJvdy5sb2NrZWRHcm91cCB7XG4gIGJvcmRlci1jb2xvcjogIzZlN2ZhNjtcbiAgYmFja2dyb3VuZDogIzI5MzQ0Yztcbn1cblxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIC5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAwLjQ1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuLmljb25CdXR0b24sXG4ubWluaUljb25CdXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYnV0dG9uU3ZnSWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubWluaUljb25CdXR0b24gLmJ1dHRvblN2Z0ljb24ge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuXG4uaWNvbkJ1dHRvbjpub3QoLmRhbmdlciksXG4ubWluaUljb25CdXR0b246bm90KC5kYW5nZXIpIHtcbiAgY29sb3I6ICNkOGRlZWE7XG59XG5cbi5zaWRlU2VhcmNoSW5wdXQsXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwIDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiNTY3MDtcbiAgYmFja2dyb3VuZDogIzFkMjMzMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNpZGVTZWFyY2hJbnB1dDpmb2N1cyxcbi5ncm91cFNlYXJjaElucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xufVxuXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5tb2RhbEl0ZW1NZXRhIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogIzhmYTNjZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2FybmluZ1BpbGwge1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg1NmEzNTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzIsIDkzLCAyNSwgMC4yMik7XG4gIGNvbG9yOiAjZjJjNjc4O1xufVxuXG4ub3BlcmF0b3JQaWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5vcGVyYXRvci1lcXVhbCB7XG4gIGJvcmRlci1jb2xvcjogIzZlODNiODtcbiAgY29sb3I6ICNjOWQ3ZmY7XG59XG5cbi5vcGVyYXRvci1yYW5nZSB7XG4gIGJvcmRlci1jb2xvcjogIzZmOTA3MDtcbiAgY29sb3I6ICNjOGYyYzk7XG59XG5cbi5vcGVyYXRvci1pbmNsdWRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGM3YWI4O1xuICBjb2xvcjogI2UwZDJmZjtcbn1cblxuLm9wZXJhdG9yLWxpa2Uge1xuICBib3JkZXItY29sb3I6ICM5YTdhNWE7XG4gIGNvbG9yOiAjZmZkN2I1O1xufVxuXG4ucnVsZVdhcm5pbmdzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNnB4O1xufVxuXG4ucnVsZVdhcm5pbmdzIHNwYW4ge1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgyNjAzYjtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDk2LCA1OSwgMC4yKTtcbiAgY29sb3I6ICNmMmM2Nzg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJvdHRvbUFjY2Vzc1BhbmVsIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ud2hlcmVUb2dnbGVCdXR0b24ge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcbiAgY29sb3I6ICNkOGRlZWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2hlcmVUb2dnbGVCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xufVxuXG4uYm90dG9tV2hlcmVQcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMnB4O1xuICByaWdodDogMjJweDtcbiAgYm90dG9tOiA3NHB4O1xuICBtYXgtaGVpZ2h0OiAxNTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcbiAgYmFja2dyb3VuZDogIzE3MWMyNztcbiAgYm94LXNoYWRvdzogMCAxNHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjM0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvdHRvbVdoZXJlSGVhZGVyIHtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzAzOTRkO1xuICBjb2xvcjogI2M2Y2NkYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uIHtcbiAgbWluLWhlaWdodDogMjZweDtcbiAgcGFkZGluZzogMCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcbn1cblxuLmJvdHRvbVdoZXJlUHJldmlldyBwcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1heC1oZWlnaHQ6IDExOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5tb2RhbFJpZ2h0UGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIHtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uam9pbk9wZXJhdG9yQ29udHJvbCBzcGFuIHtcbiAgcGFkZGluZzogMCA3cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbjpob3Zlcixcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbi5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMzNTQxNWI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubW9kYWxJdGVtSW5mb0xpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbn1cblxuLm1vZGFsSXRlbUNvbmRpdGlvbiB7XG4gIG1pbi13aWR0aDogMDtcbiAgY29sb3I6ICNhZWI2Y2EgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLm1vZGFsSXRlbUNvbmRpdGlvbiBiIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb2RhbEl0ZW1Db3VudCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogIzhmYTNjZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ3JvdXBJZFRpdGxlTGluZSB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ3JvdXBUaXRsZUFmdGVySWQge1xuICBtaW4td2lkdGg6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ucnVsZU1vZGVSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucnVsZU1vZGVSb3cgLm9wZXJhdG9yVGFicyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5ub3RUb2dnbGVCdXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1pbi13aWR0aDogNThweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDVkNzY7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLm5vdFRvZ2dsZUJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2M1OWJlMDtcbiAgYmFja2dyb3VuZDogIzJiMjYzODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ub3RUb2dnbGVCdXR0b24uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDFhN2VmO1xuICBiYWNrZ3JvdW5kOiAjNDkzNDVmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjA5LCAxNjcsIDIzOSwgMC4xOCkgaW5zZXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAucnVsZU1vZGVSb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5ub3RUb2dnbGVCdXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9UcmVlIEN1dC9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcuY3NzXCIsXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9UcmVlJTIwQ3V0L3NyYy9zZXR0aW5nL0FjY2Vzc1NldHRpbmcvQWNjZXNzU2V0dGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTs7Ozs7R0FBQTtBQU9BO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RkFDSTtBQ0RSOztBRE1BOztFQUVJLG9EQUFBO0VBQ0Esa0RBQUE7RUFDQSxzREFBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLGlHQUFBO0FDSEo7O0FETUE7RUFDSSxXQUFB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RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDVUo7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURQQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURQQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ1VKOztBRFBBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1VKOztBRFBBO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QURQQTtFQUNJLGdCQUFBO0FDVUo7O0FEUEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNVSjs7QURQQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDVUo7O0FEUEE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0FDVUo7O0FEUEE7RUFDSTtJQUNJLDBCQUFBO0VDVU47RURQRTtJQUNJLFdBQUE7RUNTTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR0aW5nQXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5zZXR0aW5nc0NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay00MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstMTAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KSk7XFxufSAqL1xcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4ucGFuZWxDYXJkTGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQ+ZGl2Omxhc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xIZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbFRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbiwgIzAwYTljMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbiwgIzAwYTljMCk7XFxuICAgIGNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1jb250cmFzdC10ZXh0LCAjZmZmZmZmKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjpcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSxcXG4gICAgICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLFxcbiAgICAgICAgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b246aG92ZXIsXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWRhcmssICMwMDhjYTApO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcXG4gICAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXRleHQsICNmZmZmZmYpO1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbiwgIzAwYTljMCkgMjglLCB0cmFuc3BhcmVudCk7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvblRleHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZCBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tb2RhbEFyZWEge1xcbiAgICBjb2xvcjogI2YzZjRmNjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsQmxvY2sge1xcbiAgICB3aWR0aDogbWluKDEyMDBweCwgY2FsYygxMDB2dyAtIDMycHgpKTtcXG4gICAgaGVpZ2h0OiBtaW4oODAwcHgsIGNhbGMoMTAwdmggLSAzMnB4KSk7XFxuICAgIGJhY2tncm91bmQ6ICMxZjIyMmI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzA1cHggMWZyO1xcbn1cXG5cXG4ubW9kYWxMaXN0IHtcXG4gICAgYmFja2dyb3VuZDogIzI1MmM0MTtcXG4gICAgcGFkZGluZzogMTRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWxMaXN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tb2RhbExpc3RTdWJ0aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmZpZWxkTGlzdCB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLm1vZGFsSXRlbSB7XFxuICAgIHBhZGRpbmc6IDEycHggMTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc4MzlmO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5tb2RhbEl0ZW06aG92ZXIsXFxuLm1vZGFsSXRlbS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6ICMzMzQwNWY7XFxuICAgIGJvcmRlci1jb2xvcjogI2I2YzRlZDtcXG59XFxuXFxuLm1vZGFsSXRlbVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mbyB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogI2I4YmZkMTtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm8gc3BhbiB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYWRkRmllbGRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM5Y2E4YzQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRGaWVsZEJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5tb2RhbEJvdHRvbUFjdGlvbnMge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmpzb25CdXR0b24ge1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcXG4gICAgYmFja2dyb3VuZDogIzFmMjYzODtcXG4gICAgY29sb3I6ICNmM2Y0ZjY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmpzb25CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4uanNvbkJ1dHRvbiBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbFJpZ2h0UGFuZWwge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tb2RhbEl0ZW1GdWxsSW5mbyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDIycHg7XFxuICAgIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYTQwNTA7XFxufVxcblxcbi5yaWdodFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ucmlnaHRGaWVsZCB7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcXG4ucnVsZUFjdGlvbnMsXFxuLmdyb3VwQWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxcbi5ydWxlQWN0aW9ucyB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDM0cHg7XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpob3ZlcixcXG4ubWluaUljb25CdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbi5kYW5nZXIsXFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcXG4gICAgY29sb3I6ICNmZmI4YzE7XFxufVxcblxcbi5ydWxlc0FyZWEge1xcbiAgICBwYWRkaW5nLXRvcDogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucnVsZUNhcmQge1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xcbn1cXG5cXG4ucnVsZUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnJ1bGVJbmZvIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4ucnVsZUxhYmVsIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucnVsZVZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ydWxlQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNtYWxsQnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogMzRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4uc21hbGxCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uZ3JvdXBzQXJlYSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4udXNlcnNBcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5ydWxlVXNlcnNBcmVhIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzQ0NTA2YTtcXG59XFxuXFxuLmFjY2Vzc0VudGl0eVNlY3Rpb25UaXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxufVxcblxcbi5ncm91cFJvdyB7XFxuICAgIGJhY2tncm91bmQ6ICMxZDIyMzA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODQyNTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGNvbG9yOiAjZDlkZWVhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZ3JvdXBSb3cudXNlclJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGJvcmRlci1jb2xvcjogIzNlNTI2ZjtcXG4gICAgYmFja2dyb3VuZDogIzFkMjYzNDtcXG59XFxuXFxuLnVzZXJJZGVudGl0eSAuZ3JvdXBJZENvcHlCdXR0b24ge1xcbiAgICBjb2xvcjogIzlmYjZkZjtcXG59XFxuXFxuLmdyb3VwUm93LnNlbGVjdGVkR3JvdXAge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxufVxcblxcbi5ncm91cFJvdyBzcGFuIHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmdyb3VwUm93OmhvdmVyIC5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyYjMzNDg7XFxufVxcblxcbi5lbXB0eU1pbmksXFxuLmVtcHR5UnVsZXMge1xcbiAgICBjb2xvcjogIzhlOTZhYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uZW1wdHlSdWxlcyB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNTU1Zjc2O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dBcmVhIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlhbG9nQmxvY2sge1xcbiAgICB3aWR0aDogNTIwcHg7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjUyYjM4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGM1NjZjO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDIwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5kaWFsb2dUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmRpYWxvZ1RleHQge1xcbiAgICBjb2xvcjogI2MyYzhkNTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRpYWxvZ0lucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kaWFsb2dJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwIDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzMwMzg0YTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzYjQ2NWQ7XFxufVxcblxcbi5kYW5nZXJCdXR0b24ge1xcbiAgICBib3JkZXItY29sb3I6ICM5ODU1NjUgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogIzRhMjQzMCAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogI2ZmYzRjYyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5vcGVyYXRvclRhYnMuZm91clRhYnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbjpob3ZlcixcXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4udHdvSW5wdXRHcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5pbkxpc3RBcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5pbkFkZFJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5pblZhbHVlUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLnByZXZpZXdXaGVyZSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVCbG9jayB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICAgIGJhY2tncm91bmQ6ICMyMDI2Mzc7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICNjNmNjZGE7XFxufVxcblxcbi5idWxrQWN0aW9uQmFyIHtcXG4gICAgbWluLWhlaWdodDogNDJweDtcXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzIwMjYzNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTg1NTY1O1xcbiAgICBiYWNrZ3JvdW5kOiAjNGEyNDMwO1xcbiAgICBjb2xvcjogI2ZmYzRjYztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNjMzMDQwO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3gge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBhY2NlbnQtY29sb3I6ICM5YmFlZTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cElkZW50aXR5IHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLmdyb3VwTmFtZSB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBJZCB7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwTWVtYmVycyB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgY29sb3I6ICM4ZmEzY2Y7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuXFxuLmdyb3VwSWRDb3B5QnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uZ3JvdXBJZENvcHlCdXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zZXR0aW5nTm90aWNlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDI4cHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB6LWluZGV4OiAxMTAwMDtcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXG4gICAgcGFkZGluZzogMTFweCAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MTg1YWU7XFxuICAgIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nbG9iYWxTZXR0aW5nQWN0aW9ucyB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBtaW4taGVpZ2h0OiA2NnB4O1xcbiAgICBwYWRkaW5nOiAxM3B4IDIycHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2E0MDUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnNhdmVTdGF0ZSB7XFxuICAgIGNvbG9yOiAjOGU5NmFhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5zYXZlU3RhdGUuY2hhbmdlZCB7XFxuICAgIGNvbG9yOiAjZjFjMjdkO1xcbn1cXG5cXG4uZ2xvYmFsU2V0dGluZ0J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbixcXG4uYXBwbHlDb25maWdCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDM4cHg7XFxuICAgIHBhZGRpbmc6IDAgMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uYXBwbHlDb25maWdCdXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzI4YWMzO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzg1MDgzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICAgIGJhY2tncm91bmQ6ICMzODQzNWI7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICAgIGJhY2tncm91bmQ6ICM0NjYxOWE7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b246ZGlzYWJsZWQsXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC40NTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uc3RhdGljU2VsZWN0aW9uQmFyIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbWluLWhlaWdodDogNDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG59XFxuXFxuLnN0YXRpY1NlbGVjdGlvbkJhci5lbXB0eVNlbGVjdGlvbiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzNiNDM1NjtcXG4gICAgYmFja2dyb3VuZDogIzFmMjUzMjtcXG4gICAgY29sb3I6ICM4NzkwYTU7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIgYiB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc3RhdGljU2VsZWN0aW9uQmFyLmVtcHR5U2VsZWN0aW9uIGIge1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG59XFxuXFxuLmNvbWJpbmVkU2VsZWN0aW9uQmFyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdGlvbkNvdW50ZXJzLFxcbi5zZWxlY3Rpb25BY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zZWxlY3Rpb25Db3VudGVycyBzcGFuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC40MjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBiYWNrZ3JvdW5kOiAjMmEyMjMwO1xcbiAgICBib3JkZXItY29sb3I6ICM1NTQzNTA7XFxuICAgIGNvbG9yOiAjOWE4NTkwO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXI6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMmEyMjMwO1xcbn1cXG5cXG4uYm90dG9tQWNjZXNzUGFuZWwge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTRweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uYm90dG9tU2VsZWN0aW9uQWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCAuc2F2ZVN0YXRlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2OTc3OTU7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2E5YjllMDtcXG4gICAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMzZDUyN2Q7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveDpjaGVja2VkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogOXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMXB4LCAtMXB4KTtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGJvcmRlci1jb2xvcjogIzc0ODRhODtcXG4gICAgYmFja2dyb3VuZDogIzM0NDc2ZDtcXG59XFxuXFxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNmU3ZmE2O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzNDRjO1xcbn1cXG5cXG4uZ3JvdXBSb3cubG9ja2VkR3JvdXAgLmdyb3VwQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDAuNDU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcbiAgICAuZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIH1cXG59XFxuXFxuLmljb25CdXR0b24sXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmJ1dHRvblN2Z0ljb24ge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1pbmlJY29uQnV0dG9uIC5idXR0b25TdmdJY29uIHtcXG4gICAgd2lkdGg6IDEzcHg7XFxuICAgIGhlaWdodDogMTNweDtcXG59XFxuXFxuLmljb25CdXR0b246bm90KC5kYW5nZXIpLFxcbi5taW5pSWNvbkJ1dHRvbjpub3QoLmRhbmdlcikge1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG59XFxuXFxuLnNpZGVTZWFyY2hJbnB1dCxcXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwIDExcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRiNTY3MDtcXG4gICAgYmFja2dyb3VuZDogIzFkMjMzMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnNpZGVTZWFyY2hJbnB1dDpmb2N1cyxcXG4uZ3JvdXBTZWFyY2hJbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG59XFxuXFxuLmdyb3VwU2VhcmNoSW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4ubW9kYWxJdGVtTWV0YSB7XFxuICAgIG1hcmdpbi10b3A6IDlweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgY29sb3I6ICM4ZmEzY2Y7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLndhcm5pbmdQaWxsIHtcXG4gICAgcGFkZGluZzogMnB4IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NTZhMzU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTMyLCA5MywgMjUsIDAuMjIpO1xcbiAgICBjb2xvcjogI2YyYzY3ODtcXG59XFxuXFxuLm9wZXJhdG9yUGlsbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmc6IDJweCA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ub3BlcmF0b3ItZXF1YWwgeyBib3JkZXItY29sb3I6ICM2ZTgzYjg7IGNvbG9yOiAjYzlkN2ZmOyB9XFxuLm9wZXJhdG9yLXJhbmdlIHsgYm9yZGVyLWNvbG9yOiAjNmY5MDcwOyBjb2xvcjogI2M4ZjJjOTsgfVxcbi5vcGVyYXRvci1pbmNsdWRlIHsgYm9yZGVyLWNvbG9yOiAjOGM3YWI4OyBjb2xvcjogI2UwZDJmZjsgfVxcbi5vcGVyYXRvci1saWtlIHsgYm9yZGVyLWNvbG9yOiAjOWE3YTVhOyBjb2xvcjogI2ZmZDdiNTsgfVxcblxcbi5ydWxlV2FybmluZ3Mge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5ydWxlV2FybmluZ3Mgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDNweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODI2MDNiO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzMCwgOTYsIDU5LCAwLjIpO1xcbiAgICBjb2xvcjogI2YyYzY3ODtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYm90dG9tQWNjZXNzUGFuZWwge1xcbiAgICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi53aGVyZVRvZ2dsZUJ1dHRvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTY2MjdjO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyNjM4O1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi53aGVyZVRvZ2dsZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5ib3R0b21XaGVyZVByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDIycHg7XFxuICAgIHJpZ2h0OiAyMnB4O1xcbiAgICBib3R0b206IDc0cHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMTcxYzI3O1xcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMzQpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYm90dG9tV2hlcmVIZWFkZXIge1xcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMDM5NGQ7XFxuICAgIGNvbG9yOiAjYzZjY2RhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5ib3R0b21XaGVyZUhlYWRlciBidXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xcbiAgICBwYWRkaW5nOiAwIDlweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5ib3R0b21XaGVyZUhlYWRlciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uYm90dG9tV2hlcmVQcmV2aWV3IHByZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgbWF4LWhlaWdodDogMTE4cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS40NTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbi5tb2RhbFJpZ2h0UGFuZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIHtcXG4gICAgbWluLWhlaWdodDogMzJweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uam9pbk9wZXJhdG9yQ29udHJvbCBzcGFuIHtcXG4gICAgcGFkZGluZzogMCA3cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgcGFkZGluZzogMCA5cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbjpob3ZlcixcXG4uam9pbk9wZXJhdG9yQ29udHJvbCBidXR0b24uYWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm9MaW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbEl0ZW1Db25kaXRpb24ge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGNvbG9yOiAjYWViNmNhICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5tb2RhbEl0ZW1Db25kaXRpb24gYiB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWxJdGVtQ291bnQge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgY29sb3I6ICM4ZmEzY2YgIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmdyb3VwSWRUaXRsZUxpbmUge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdyb3VwVGl0bGVBZnRlcklkIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnJ1bGVNb2RlUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLnJ1bGVNb2RlUm93IC5vcGVyYXRvclRhYnMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubm90VG9nZ2xlQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBtaW4td2lkdGg6IDU4cHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmQ1ZDc2O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxuICAgIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XFxufVxcblxcbi5ub3RUb2dnbGVCdXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNjNTliZTA7XFxuICAgIGJhY2tncm91bmQ6ICMyYjI2Mzg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ubm90VG9nZ2xlQnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2QxYTdlZjtcXG4gICAgYmFja2dyb3VuZDogIzQ5MzQ1ZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDIwOSwgMTY3LCAyMzksIDAuMTgpIGluc2V0O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcXG4gICAgLnJ1bGVNb2RlUm93IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgIC5ub3RUb2dnbGVCdXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXCIsXCIuc2V0dGluZ0FyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnNldHRpbmdzQ29udGVudCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay00MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstMTAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KSk7XFxufSAqL1xcbi5zb3VyY2VTZWxlY3RvckNhcmQge1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnBhbmVsQ2FyZExhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xDYXJkIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sSGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sVGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sRGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogOHB4IDE0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xcbiAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXRleHQsICNmZmZmZmYpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpob3ZlcixcXG4uYWNjZXNzU2V0dGluZ3NCdXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWRhcmssICMwMDhjYTApO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XFxuICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktY29udHJhc3QtdGV4dCwgI2ZmZmZmZik7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApIDI4JSwgdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b25UZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1vZGFsQXJlYSB7XFxuICBjb2xvcjogI2YzZjRmNjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxCbG9jayB7XFxuICB3aWR0aDogbWluKDEyMDBweCwgMTAwdncgLSAzMnB4KTtcXG4gIGhlaWdodDogbWluKDgwMHB4LCAxMDB2aCAtIDMycHgpO1xcbiAgYmFja2dyb3VuZDogIzFmMjIyYjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcXG59XFxuXFxuLm1vZGFsTGlzdCB7XFxuICBiYWNrZ3JvdW5kOiAjMjUyYzQxO1xcbiAgcGFkZGluZzogMTRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLm1vZGFsTGlzdEhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsTGlzdFRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tb2RhbExpc3RTdWJ0aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmZpZWxkTGlzdCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxuICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4ubW9kYWxJdGVtIHtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NzgzOWY7XFxuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLm1vZGFsSXRlbTpob3ZlcixcXG4ubW9kYWxJdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6ICMzMzQwNWY7XFxuICBib3JkZXItY29sb3I6ICNiNmM0ZWQ7XFxufVxcblxcbi5tb2RhbEl0ZW1UaXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mbyB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogI2I4YmZkMTtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm8gc3BhbiB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hZGRGaWVsZEJ1dHRvbiB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgIzljYThjNDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRGaWVsZEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4ubW9kYWxCb3R0b21BY3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5qc29uQnV0dG9uIHtcXG4gIGhlaWdodDogMzhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NjYyN2M7XFxuICBiYWNrZ3JvdW5kOiAjMWYyNjM4O1xcbiAgY29sb3I6ICNmM2Y0ZjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uanNvbkJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4uanNvbkJ1dHRvbiBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxSaWdodFBhbmVsIHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWxJdGVtRnVsbEluZm8ge1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBwYWRkaW5nOiAyMnB4O1xcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5yaWdodEhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2E0MDUwO1xcbn1cXG5cXG4ucmlnaHRUaXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4ucmlnaHRGaWVsZCB7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBjb2xvcjogI2FlYjZjYTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcXG4ucnVsZUFjdGlvbnMsXFxuLmdyb3VwQWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxcbi5ydWxlQWN0aW9ucyB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaWNvbkJ1dHRvbixcXG4ubWluaUljb25CdXR0b24ge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1pbmlJY29uQnV0dG9uIHtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpob3ZlcixcXG4ubWluaUljb25CdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcXG59XFxuXFxuLmljb25CdXR0b24uZGFuZ2VyLFxcbi5taW5pSWNvbkJ1dHRvbi5kYW5nZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGY0ZjViO1xcbiAgY29sb3I6ICNmZmI4YzE7XFxufVxcblxcbi5ydWxlc0FyZWEge1xcbiAgcGFkZGluZy10b3A6IDE4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnJ1bGVDYXJkIHtcXG4gIHBhZGRpbmc6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogIzI2MmIzNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDQ2NWI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcXG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gIGJhY2tncm91bmQ6ICMyYzM0NDg7XFxufVxcblxcbi5ydWxlSGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnJ1bGVJbmZvIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi5ydWxlTGFiZWwge1xcbiAgY29sb3I6ICNhZWI2Y2E7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5ydWxlVmFsdWUge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ydWxlQWN0aW9ucyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zbWFsbEJ1dHRvbiB7XFxuICBtaW4taGVpZ2h0OiAzNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5zbWFsbEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uZ3JvdXBzQXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDdweDtcXG59XFxuXFxuLnVzZXJzQXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogN3B4O1xcbn1cXG5cXG4ucnVsZVVzZXJzQXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM0NDUwNmE7XFxufVxcblxcbi5hY2Nlc3NFbnRpdHlTZWN0aW9uVGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbn1cXG5cXG4uZ3JvdXBSb3cge1xcbiAgYmFja2dyb3VuZDogIzFkMjIzMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODQyNTg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIGNvbG9yOiAjZDlkZWVhO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZ3JvdXBSb3cudXNlclJvdyB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgYm9yZGVyLWNvbG9yOiAjM2U1MjZmO1xcbiAgYmFja2dyb3VuZDogIzFkMjYzNDtcXG59XFxuXFxuLnVzZXJJZGVudGl0eSAuZ3JvdXBJZENvcHlCdXR0b24ge1xcbiAgY29sb3I6ICM5ZmI2ZGY7XFxufVxcblxcbi5ncm91cFJvdy5zZWxlY3RlZEdyb3VwIHtcXG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxufVxcblxcbi5ncm91cFJvdyBzcGFuIHtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBBY3Rpb25zIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cFJvdzpob3ZlciAuZ3JvdXBBY3Rpb25zIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5hZGRSdWxlQnV0dG9uIHtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNzg4NDlmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRSdWxlQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyYjMzNDg7XFxufVxcblxcbi5lbXB0eU1pbmksXFxuLmVtcHR5UnVsZXMge1xcbiAgY29sb3I6ICM4ZTk2YWE7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5lbXB0eVJ1bGVzIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM1NTVmNzY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dBcmVhIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGluc2V0OiAwO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpYWxvZ0Jsb2NrIHtcXG4gIHdpZHRoOiA1MjBweDtcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjMjUyYjM4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjNTY2YztcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxOHB4O1xcbiAgYm94LXNoYWRvdzogMCAyMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZGlhbG9nVGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5kaWFsb2dUZXh0IHtcXG4gIGNvbG9yOiAjYzJjOGQ1O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRpYWxvZ0lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kaWFsb2dJbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMzMDM4NGE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjM2I0NjVkO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uIHtcXG4gIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogIzRhMjQzMCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNmZmM0Y2MgIWltcG9ydGFudDtcXG59XFxuXFxuLm9wZXJhdG9yVGFicyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzLmZvdXJUYWJzIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgY29sb3I6ICNkOGRlZWE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxcbi5vcGVyYXRvclRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi50d29JbnB1dEdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmluTGlzdEFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmluQWRkUm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5pblZhbHVlUm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5wcmV2aWV3V2hlcmUge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgY29sb3I6ICNhZWI2Y2E7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5wcmV2aWV3V2hlcmUgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ub3B0aW9uYWxSdWxlQmxvY2sge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcXG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XFxufVxcblxcbi5vcHRpb25hbFJ1bGVUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6ICNjNmNjZGE7XFxufVxcblxcbi5idWxrQWN0aW9uQmFyIHtcXG4gIG1pbi1oZWlnaHQ6IDQycHg7XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEycHg7XFxuICBjb2xvcjogI2Q4ZGVlYTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsIHtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTg1NTY1O1xcbiAgYmFja2dyb3VuZDogIzRhMjQzMDtcXG4gIGNvbG9yOiAjZmZjNGNjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzYzMzA0MDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94IHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYWNjZW50LWNvbG9yOiAjOWJhZWUwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cElkZW50aXR5IHtcXG4gIG1pbi13aWR0aDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5ncm91cE5hbWUge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cElkIHtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwTWVtYmVycyB7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBjb2xvcjogIzhmYTNjZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmdyb3VwSWRDb3B5QnV0dG9uIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XFxuICBmb250LWZhbWlseTogQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XFxufVxcblxcbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2V0dGluZ05vdGljZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI4cHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB6LWluZGV4OiAxMTAwMDtcXG4gIG1pbi13aWR0aDogMjEwcHg7XFxuICBwYWRkaW5nOiAxMXB4IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzE4NWFlO1xcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtaW4taGVpZ2h0OiA2NnB4O1xcbiAgcGFkZGluZzogMTNweCAyMnB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5zYXZlU3RhdGUge1xcbiAgY29sb3I6ICM4ZTk2YWE7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5zYXZlU3RhdGUuY2hhbmdlZCB7XFxuICBjb2xvcjogI2YxYzI3ZDtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b24sXFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDAgMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MjhhYzM7XFxuICBiYWNrZ3JvdW5kOiAjMzg1MDgzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgYmFja2dyb3VuZDogIzM4NDM1YjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQ6ICM0NjYxOWE7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b246ZGlzYWJsZWQsXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNDU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMjtcXG4gIG1pbi1oZWlnaHQ6IDQ2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG59XFxuXFxuLnN0YXRpY1NlbGVjdGlvbkJhci5lbXB0eVNlbGVjdGlvbiB7XFxuICBib3JkZXItY29sb3I6ICMzYjQzNTY7XFxuICBiYWNrZ3JvdW5kOiAjMWYyNTMyO1xcbiAgY29sb3I6ICM4NzkwYTU7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIgYiB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnN0YXRpY1NlbGVjdGlvbkJhci5lbXB0eVNlbGVjdGlvbiBiIHtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbn1cXG5cXG4uY29tYmluZWRTZWxlY3Rpb25CYXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdGlvbkNvdW50ZXJzLFxcbi5zZWxlY3Rpb25BY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc2VsZWN0aW9uQ291bnRlcnMgc3BhbiB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC40MjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XFxuICBib3JkZXItY29sb3I6ICM1NTQzNTA7XFxuICBjb2xvcjogIzlhODU5MDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCB7XFxuICBtaW4td2lkdGg6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTRweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvdHRvbVNlbGVjdGlvbkFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvdHRvbUFjY2Vzc1BhbmVsIC5zYXZlU3RhdGUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2OTc3OTU7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBib3JkZXItY29sb3I6ICNhOWI5ZTA7XFxuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZCB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICBiYWNrZ3JvdW5kOiAjM2Q1MjdkO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmZmZmY7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDFweCwgLTFweCk7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveDpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBib3JkZXItY29sb3I6ICM3NDg0YTg7XFxuICBiYWNrZ3JvdW5kOiAjMzQ0NzZkO1xcbn1cXG5cXG4uZ3JvdXBSb3cubG9ja2VkR3JvdXAge1xcbiAgYm9yZGVyLWNvbG9yOiAjNmU3ZmE2O1xcbiAgYmFja2dyb3VuZDogIzI5MzQ0YztcXG59XFxuXFxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIC5ncm91cEFjdGlvbnMge1xcbiAgb3BhY2l0eTogMC40NTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAuZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG4uaWNvbkJ1dHRvbixcXG4ubWluaUljb25CdXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5idXR0b25TdmdJY29uIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1pbmlJY29uQnV0dG9uIC5idXR0b25TdmdJY29uIHtcXG4gIHdpZHRoOiAxM3B4O1xcbiAgaGVpZ2h0OiAxM3B4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpub3QoLmRhbmdlciksXFxuLm1pbmlJY29uQnV0dG9uOm5vdCguZGFuZ2VyKSB7XFxuICBjb2xvcjogI2Q4ZGVlYTtcXG59XFxuXFxuLnNpZGVTZWFyY2hJbnB1dCxcXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDExcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGI1NjcwO1xcbiAgYmFja2dyb3VuZDogIzFkMjMzMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnNpZGVTZWFyY2hJbnB1dDpmb2N1cyxcXG4uZ3JvdXBTZWFyY2hJbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxufVxcblxcbi5ncm91cFNlYXJjaElucHV0IHtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5tb2RhbEl0ZW1NZXRhIHtcXG4gIG1hcmdpbi10b3A6IDlweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjb2xvcjogIzhmYTNjZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLndhcm5pbmdQaWxsIHtcXG4gIHBhZGRpbmc6IDJweCA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NTZhMzU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEzMiwgOTMsIDI1LCAwLjIyKTtcXG4gIGNvbG9yOiAjZjJjNjc4O1xcbn1cXG5cXG4ub3BlcmF0b3JQaWxsIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBwYWRkaW5nOiAycHggN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiAjZDhkZWVhO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm9wZXJhdG9yLWVxdWFsIHtcXG4gIGJvcmRlci1jb2xvcjogIzZlODNiODtcXG4gIGNvbG9yOiAjYzlkN2ZmO1xcbn1cXG5cXG4ub3BlcmF0b3ItcmFuZ2Uge1xcbiAgYm9yZGVyLWNvbG9yOiAjNmY5MDcwO1xcbiAgY29sb3I6ICNjOGYyYzk7XFxufVxcblxcbi5vcGVyYXRvci1pbmNsdWRlIHtcXG4gIGJvcmRlci1jb2xvcjogIzhjN2FiODtcXG4gIGNvbG9yOiAjZTBkMmZmO1xcbn1cXG5cXG4ub3BlcmF0b3ItbGlrZSB7XFxuICBib3JkZXItY29sb3I6ICM5YTdhNWE7XFxuICBjb2xvcjogI2ZmZDdiNTtcXG59XFxuXFxuLnJ1bGVXYXJuaW5ncyB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbi5ydWxlV2FybmluZ3Mgc3BhbiB7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODI2MDNiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDk2LCA1OSwgMC4yKTtcXG4gIGNvbG9yOiAjZjJjNjc4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmJvdHRvbUFjY2Vzc1BhbmVsIHtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLndoZXJlVG9nZ2xlQnV0dG9uIHtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTY2MjdjO1xcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcXG4gIGNvbG9yOiAjZDhkZWVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ud2hlcmVUb2dnbGVCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmJvdHRvbVdoZXJlUHJldmlldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyMnB4O1xcbiAgcmlnaHQ6IDIycHg7XFxuICBib3R0b206IDc0cHg7XFxuICBtYXgtaGVpZ2h0OiAxNTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgYmFja2dyb3VuZDogIzE3MWMyNztcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4zNCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYm90dG9tV2hlcmVIZWFkZXIge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMDM5NGQ7XFxuICBjb2xvcjogI2M2Y2NkYTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5ib3R0b21XaGVyZUhlYWRlciBidXR0b24ge1xcbiAgbWluLWhlaWdodDogMjZweDtcXG4gIHBhZGRpbmc6IDAgOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmJvdHRvbVdoZXJlSGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xcbn1cXG5cXG4uYm90dG9tV2hlcmVQcmV2aWV3IHByZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWF4LWhlaWdodDogMTE4cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4ubW9kYWxSaWdodFBhbmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wge1xcbiAgbWluLWhlaWdodDogMzJweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIGNvbG9yOiAjYWViNmNhO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uam9pbk9wZXJhdG9yQ29udHJvbCBzcGFuIHtcXG4gIHBhZGRpbmc6IDAgN3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDAgOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZDhkZWVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uOmhvdmVyLFxcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbi5hY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mb0xpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbEl0ZW1Db25kaXRpb24ge1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgY29sb3I6ICNhZWI2Y2EgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ubW9kYWxJdGVtQ29uZGl0aW9uIGIge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWxJdGVtQ291bnQge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBjb2xvcjogIzhmYTNjZiAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmdyb3VwSWRUaXRsZUxpbmUge1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGdhcDogNnB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZ3JvdXBUaXRsZUFmdGVySWQge1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ydWxlTW9kZVJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLnJ1bGVNb2RlUm93IC5vcGVyYXRvclRhYnMge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm5vdFRvZ2dsZUJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBtaW4td2lkdGg6IDU4cHg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmQ1ZDc2O1xcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gIGNvbG9yOiAjZDhkZWVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XFxuICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4ubm90VG9nZ2xlQnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2M1OWJlMDtcXG4gIGJhY2tncm91bmQ6ICMyYjI2Mzg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm5vdFRvZ2dsZUJ1dHRvbi5hY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDFhN2VmO1xcbiAgYmFja2dyb3VuZDogIzQ5MzQ1ZjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjA5LCAxNjcsIDIzOSwgMC4xOCkgaW5zZXQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xcbiAgLnJ1bGVNb2RlUm93IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICAubm90VG9nZ2xlQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nLFxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uc2V0dGluZy1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KTtcbn1cblxuLnNldHRpbmctc2VjdGlvbiArIC5zZXR0aW5nLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubWFpbi1sYXllci1zZXR0aW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNHB4O1xufVxuXG4uc2V0dGluZy1zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2V0dGluZy1zZWN0aW9uLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Nik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLm1haW4tbGF5ZXItc2VsZWN0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nik7XG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTM6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XG59XG5cbi5hY2Nlc3Mtc2V0dGluZy1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyAubWFpbi1sYXllci1zZWxlY3Rvcixcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyAubWFpbi1sYXllci1zZWxlY3RvciAqLFxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nIC5hY2Nlc3NDb250cm9sVGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nIC5hY2Nlc3NDb250cm9sRGVzY3JpcHRpb24ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL1RyZWUgQ3V0L3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzXCIsXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9UcmVlJTIwQ3V0L3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVJLHNCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaURBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTs7O0VBR0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcsXFxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KTtcXG59XFxuXFxuLnNldHRpbmctc2VjdGlvbiArIC5zZXR0aW5nLXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4ubWFpbi1sYXllci1zZXR0aW5nLXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Nik7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXG59XFxuXFxuLm1haW4tbGF5ZXItc2VsZWN0b3Ige1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nik7XFxuICAgIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTM6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XFxufVxcblxcbi5hY2Nlc3Mtc2V0dGluZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyAubWFpbi1sYXllci1zZWxlY3RvcixcXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcgLm1haW4tbGF5ZXItc2VsZWN0b3IgKixcXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcgLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcgLmFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzYpO1xcbn1cXG5cIixcIi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyxcXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5zZXR0aW5nLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSk7XFxufVxcblxcbi5zZXR0aW5nLXNlY3Rpb24gKyAuc2V0dGluZy1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5tYWluLWxheWVyLXNldHRpbmctc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNldHRpbmctc2VjdGlvbi1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Nik7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbn1cXG5cXG4ubWFpbi1sYXllci1zZWxlY3RvciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgLS1jYWxjaXRlLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY2FsY2l0ZS1jb2xvci10ZXh0LTI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nik7XFxuICAtLWNhbGNpdGUtY29sb3ItdGV4dC0zOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xcbn1cXG5cXG4uYWNjZXNzLXNldHRpbmctc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nIC5tYWluLWxheWVyLXNlbGVjdG9yLFxcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyAubWFpbi1sYXllci1zZWxlY3RvciAqLFxcbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyAuYWNjZXNzQ29udHJvbFRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcgLmFjY2Vzc0NvbnRyb2xEZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vQWNjZXNzU2V0dGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9BY2Nlc3NTZXR0aW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zZXR0aW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3NldHRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBSZWFjdCwgZ2V0QXBwU3RvcmUgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IFwiLi9BY2Nlc3NTZXR0aW5nLmNzc1wiO1xuXG5leHBvcnQgdHlwZSBSdWxlT3BlcmF0b3IgPSBcImVxdWFsXCIgfCBcInJhbmdlXCIgfCBcImluY2x1ZGVcIiB8IFwibGlrZVwiO1xuXG5leHBvcnQgdHlwZSBBY2Nlc3NSdWxlID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgb3BlcmF0b3I6IFJ1bGVPcGVyYXRvcjtcbiAgICBpc05vdD86IGJvb2xlYW47XG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gICAgZnJvbT86IHN0cmluZztcbiAgICB0bz86IHN0cmluZztcbiAgICB2YWx1ZXM/OiBzdHJpbmdbXTtcbiAgICBncm91cHM6IHN0cmluZ1tdO1xuICAgIHVzZXJzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjY2Vzc0ZpZWxkUnVsZSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZmllbGQ6IHN0cmluZztcbiAgICBydWxlczogQWNjZXNzUnVsZVtdO1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzRmllbGRKb2luT3BlcmF0b3IgPSBcImFuZFwiIHwgXCJvclwiO1xuXG5leHBvcnQgdHlwZSBBY2Nlc3NDb25maWcgPSB7XG4gICAgZnVsbEFjY2Vzc0dyb3Vwczogc3RyaW5nW107XG4gICAgZnVsbEFjY2Vzc1VzZXJzOiBzdHJpbmdbXTtcbiAgICBydWxlczogQWNjZXNzRmllbGRSdWxlW107XG4gICAgLyoqXG4gICAgICog0JrQsNC6INC+0LHRitC10LTQuNC90Y/RgtGMINGA0LDQt9C90YvQtSDRgdGC0L7Qu9Cx0YbRiyDQtNC70Y8g0L7QtNC90L7QuSDQs9GA0YPQv9C/0YsuXG4gICAgICog0J/RgNCw0LLQuNC70LAg0LLQvdGD0YLRgNC4INC+0LTQvdC+0LPQviDRgdGC0L7Qu9Cx0YbQsCDQstGB0LXQs9C00LAg0L7QsdGK0LXQtNC40L3Rj9GO0YLRgdGPINGH0LXRgNC10LcgT1IuXG4gICAgICovXG4gICAgZmllbGRKb2luT3BlcmF0b3I/OiBBY2Nlc3NGaWVsZEpvaW5PcGVyYXRvcjtcbn07XG5cbnR5cGUgUG9ydGFsR3JvdXBJbmZvID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB1c2Vyc0NvdW50OiBudW1iZXIgfCBudWxsO1xuICAgIGlzVW5hdmFpbGFibGU/OiBib29sZWFuO1xufTtcblxudHlwZSBQb3J0YWxVc2VySW5mbyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIGZ1bGxOYW1lPzogc3RyaW5nO1xuICAgIGlzVW5hdmFpbGFibGU/OiBib29sZWFuO1xufTtcblxudHlwZSBFc3JpUmVxdWVzdEZ1bmN0aW9uID0gKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAgIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPjtcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xuICAgIH0sXG4pID0+IFByb21pc2U8eyBkYXRhOiBhbnkgfT47XG5cbnR5cGUgRGlhbG9nU3RhdGUgPSBudWxsIHwge1xuICAgIHR5cGU6XG4gICAgfCBcImFkZEZpZWxkXCJcbiAgICB8IFwiZWRpdEZpZWxkXCJcbiAgICB8IFwiZGVsZXRlRmllbGRcIlxuICAgIHwgXCJhZGRSdWxlXCJcbiAgICB8IFwiZWRpdFJ1bGVcIlxuICAgIHwgXCJkZWxldGVSdWxlXCJcbiAgICB8IFwiYWRkR3JvdXBcIlxuICAgIHwgXCJlZGl0R3JvdXBcIlxuICAgIHwgXCJkZWxldGVHcm91cFwiXG4gICAgfCBcImFkZEdsb2JhbEdyb3VwXCJcbiAgICB8IFwiZWRpdEdsb2JhbEdyb3VwXCJcbiAgICB8IFwiZGVsZXRlR2xvYmFsR3JvdXBcIlxuICAgIHwgXCJhZGRVc2VyXCJcbiAgICB8IFwiZWRpdFVzZXJcIlxuICAgIHwgXCJkZWxldGVVc2VyXCJcbiAgICB8IFwiYWRkR2xvYmFsVXNlclwiXG4gICAgfCBcImVkaXRHbG9iYWxVc2VyXCJcbiAgICB8IFwiZGVsZXRlR2xvYmFsVXNlclwiO1xuICAgIHBheWxvYWQ/OiBhbnk7XG59O1xuXG5jb25zdCBHTE9CQUxfQUNDRVNTX0lEID0gXCJfX2dsb2JhbF9hY2Nlc3NfX1wiO1xuXG5jb25zdCBFZGl0SWNvbiA9ICgpID0+IChcbiAgICA8c3ZnIGNsYXNzTmFtZT1cImJ1dHRvblN2Z0ljb25cIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTcuNTE5NTMxIDAuMDc4MTI1IEMxNy4yMzQzNzUgMC4xMzY3MTkgMTYuOTE3OTY5IDAuMjc3MzQ0IDE2LjY5MTQwNiAwLjQ0OTIxOSBDMTYuNTY2NDA2IDAuNTM5MDYyIDE2LjIwMzEyNSAwLjg4MjgxMiAxNS44Nzg5MDYgMS4yMDcwMzEgTDE1LjI5Mjk2OSAxLjc5Njg3NSBMMTYuNzY5NTMxIDMuMjY5NTMxIEwxOC4yNDIxODggNC43NDYwOTQgTDE4Ljg2NzE4OCA0LjEyMTA5NCBDMTkuMjE0ODQ0IDMuNzc3MzQ0IDE5LjU1ODU5NCAzLjM5ODQzOCAxOS42NDA2MjUgMy4yODEyNSBDMjAuMTk1MzEyIDIuNDQ1MzEyIDIwLjA4OTg0NCAxLjM3MTA5NCAxOS4zNzg5MDYgMC42NjAxNTYgQzE4Ljg4MjgxMiAwLjE2NDA2MiAxOC4xODc1IC0wLjA1NDY4NzUgMTcuNTE5NTMxIDAuMDc4MTI1IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTExLjA2NjQwNiA2LjAyMzQzOCBDOC4zOTA2MjUgOC43MDMxMjUgNy43MzQzNzUgOS4zODI4MTIgNy43MDMxMjUgOS40OTIxODggQzcuNjgzNTk0IDkuNTY2NDA2IDcuNTM5MDYyIDEwLjI3NzM0NCA3LjM4MjgxMiAxMS4wNzQyMTkgQzcuMTkxNDA2IDEyLjAzNTE1NiA3LjEwNTQ2OSAxMi41NTQ2ODggNy4xMjEwOTQgMTIuNjI4OTA2IEM3LjE1NjI1IDEyLjc2NTYyNSA3LjI3MzQzOCAxMi44ODI4MTIgNy40MTAxNTYgMTIuOTE3OTY5IEM3LjU1ODU5NCAxMi45NTMxMjUgMTAuNTM5MDYyIDEyLjM1OTM3NSAxMC42OTE0MDYgMTIuMjY1NjI1IEMxMC43NSAxMi4yMjY1NjIgMTIuMjc3MzQ0IDEwLjcxODc1IDE0LjA4MjAzMSA4LjkxMDE1NiBMMTcuMzYzMjgxIDUuNjI1IEwxNS44OTg0MzggNC4xNjAxNTYgQzE1LjA5Mzc1IDMuMzU1NDY5IDE0LjQyNTc4MSAyLjY5NTMxMiAxNC40MTQwNjIgMi42OTUzMTIgQzE0LjQwMjM0NCAyLjY5NTMxMiAxMi44OTg0MzggNC4xOTUzMTIgMTEuMDY2NDA2IDYuMDIzNDM4IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTIuMDQyOTY5IDMuNDE3OTY5IEMxLjI5Mjk2OSAzLjU1NDY4OCAwLjU5NzY1NiA0LjA4NTkzOCAwLjI1NzgxMiA0Ljc4NTE1NiBDLTAuMDE1NjI1IDUuMzQ3NjU2IC0wLjAwMzkwNjI1IDQuOTUzMTI1IDAuMDA3ODEyNSAxMS44MzU5MzggTDAuMDE5NTMxMiAxOC4wMjczNDQgTDAuMTA1NDY5IDE4LjI4MTI1IEMwLjIzNDM3NSAxOC42NTYyNSAwLjQ1NzAzMSAxOS4wMDc4MTIgMC43NDIxODggMTkuMjk2ODc1IEMxLjAzNTE1NiAxOS41ODk4NDQgMS4zMjQyMTkgMTkuNzY5NTMxIDEuNzA3MDMxIDE5LjkwMjM0NCBMMS45NzI2NTYgMjAgTDE0LjY0NDUzMSAyMCBMMTQuOTQ5MjE5IDE5LjkwMjM0NCBDMTUuNzM0Mzc1IDE5LjY1NjI1IDE2LjM1MTU2MiAxOSAxNi41ODk4NDQgMTguMTYwMTU2IEMxNi42NTYyNSAxNy45MjU3ODEgMTYuNjYwMTU2IDE3LjY3MTg3NSAxNi42NjAxNTYgMTQuMjczNDM4IEwxNi42NjAxNTYgMTAuNjM2NzE5IEwxNi41NDI5NjkgMTAuNDQ5MjE5IEMxNi4zNzEwOTQgMTAuMTcxODc1IDE2LjA4MjAzMSAxMC4wMjM0MzggMTUuNzY5NTMxIDEwLjA1MDc4MSBDMTUuNDk2MDk0IDEwLjA3NDIxOSAxNS4yODEyNSAxMC4yMDMxMjUgMTUuMTI4OTA2IDEwLjQzNzUgTDE1LjAxOTUzMSAxMC42MDE1NjIgTDE1IDE0LjE5NTMxMiBDMTQuOTgwNDY5IDE3LjQ4NDM3NSAxNC45NzY1NjIgMTcuODA0Njg4IDE0LjkxNDA2MiAxNy45MTQwNjIgQzE0LjgyMDMxMiAxOC4wODU5MzggMTQuNTk3NjU2IDE4LjI2OTUzMSAxNC40MjU3ODEgMTguMzIwMzEyIEMxNC4zMjAzMTIgMTguMzUxNTYyIDEyLjUxMTcxOSAxOC4zNTkzNzUgOC4yMzgyODEgMTguMzUxNTYyIEwyLjE5OTIxOSAxOC4zMzk4NDQgTDIuMDQ2ODc1IDE4LjIzNDM3NSBDMS45NjQ4NDQgMTguMTc1NzgxIDEuODUxNTYyIDE4LjA2MjUgMS43OTY4NzUgMTcuOTgwNDY5IEwxLjY5OTIxOSAxNy44MzU5MzggTDEuNjg3NSAxMS43NSBDMS42Nzk2ODggNS44MTY0MDYgMS42Nzk2ODggNS42NjAxNTYgMS43NTM5MDYgNS41MTU2MjUgQzEuNzk2ODc1IDUuNDM3NSAxLjg3ODkwNiA1LjMyNDIxOSAxLjk0MTQwNiA1LjI2NTYyNSBDMi4xODc1IDUuMDI3MzQ0IDIuMDE1NjI1IDUuMDM5MDYyIDUuODA0Njg4IDUuMDM5MDYyIEM4LjQzMzU5NCA1LjAzOTA2MiA5LjMwODU5NCA1LjAyNzM0NCA5LjQyOTY4OCA0Ljk5MjE4OCBDOS42NTIzNDQgNC45MjU3ODEgOS44OTQ1MzEgNC42NzE4NzUgOS45NTcwMzEgNC40NDE0MDYgQzEwLjA2MjUgNC4wNzAzMTIgOS45MDYyNSAzLjY3OTY4OCA5LjU3ODEyNSAzLjQ4ODI4MSBMOS4zOTQ1MzEgMy4zNzg5MDYgTDUuODU5Mzc1IDMuMzcxMDk0IEMzLjA3ODEyNSAzLjM2NzE4OCAyLjI2NTYyNSAzLjM3NSAyLjA0Mjk2OSAzLjQxNzk2OSBaXCIgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmNvbnN0IFRyYXNoSWNvbiA9ICgpID0+IChcbiAgICA8c3ZnIGNsYXNzTmFtZT1cImJ1dHRvblN2Z0ljb25cIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNy45MzM1OTQgMS45Mzc1IEM3LjYwOTM3NSAyLjAyMzQzOCA3LjI4OTA2MiAyLjIxNDg0NCA3LjA1ODU5NCAyLjQ1NzAzMSBDNi44MDg1OTQgMi43MTQ4NDQgNi42OTkyMTkgMi45MjU3ODEgNi41MjczNDQgMy40NDUzMTIgQzYuMzg2NzE5IDMuODY3MTg4IDYuMjAzMTI1IDQuMTIxMDk0IDUuOTIxODc1IDQuMjY5NTMxIEM1Ljc2NTYyNSA0LjM1MTU2MiA1LjcxNDg0NCA0LjM1NTQ2OSA0LjIzMDQ2OSA0LjM3NSBDMi43NTM5MDYgNC4zOTQ1MzEgMi42OTUzMTIgNC4zOTg0MzggMi41ODk4NDQgNC40NzY1NjIgQzIuMjA3MDMxIDQuNzYxNzE5IDIuMjA3MDMxIDUuMjM4MjgxIDIuNTg5ODQ0IDUuNTIzNDM4IEwyLjY5OTIxOSA1LjYwNTQ2OSBMMTcuMzAwNzgxIDUuNjA1NDY5IEwxNy40MTAxNTYgNS41MjM0MzggQzE3Ljc5Mjk2OSA1LjIzODI4MSAxNy43OTI5NjkgNC43NjE3MTkgMTcuNDEwMTU2IDQuNDc2NTYyIEMxNy4zMDQ2ODggNC4zOTg0MzggMTcuMjQ2MDk0IDQuMzk0NTMxIDE1Ljc2OTUzMSA0LjM3NSBDMTQuMjg1MTU2IDQuMzU1NDY5IDE0LjIzNDM3NSA0LjM1MTU2MiAxNC4wNzgxMjUgNC4yNjk1MzEgQzEzLjc5Njg3NSA0LjEyMTA5NCAxMy42MTMyODEgMy44NjcxODggMTMuNDcyNjU2IDMuNDQ1MzEyIEMxMy4zMDA3ODEgMi45MjU3ODEgMTMuMTkxNDA2IDIuNzE0ODQ0IDEyLjk0MTQwNiAyLjQ1NzAzMSBDMTIuNzAzMTI1IDIuMjA3MDMxIDEyLjM5MDYyNSAyLjAyMzQzOCAxMi4wNTA3ODEgMS45MzM1OTQgQzExLjcxODc1IDEuODQ3NjU2IDguMjUzOTA2IDEuODUxNTYyIDcuOTMzNTk0IDEuOTM3NSBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk00LjEyMTA5NCA2LjQ4ODI4MSBDNC4wNTg1OTQgNi41MDM5MDYgMy45NTMxMjUgNi41NjY0MDYgMy44OTA2MjUgNi42MjUgQzMuNjQ4NDM4IDYuODUxNTYyIDMuNjQ4NDM4IDYuNjQwNjI1IDMuOTA2MjUgMTAuNDk2MDk0IEM0LjE3OTY4OCAxNC41OTc2NTYgNC4yMTA5MzggMTQuOTI5Njg4IDQuMzUxNTYyIDE1LjYwOTM3NSBDNC42NjQwNjIgMTcuMDk3NjU2IDUuNDgwNDY5IDE3LjgyNDIxOSA3LjA4OTg0NCAxOC4wNTA3ODEgQzcuNTQ2ODc1IDE4LjExMzI4MSAxMS40OTYwOTQgMTguMTQ0NTMxIDEyLjMyNDIxOSAxOC4wODk4NDQgQzEzLjc4MTI1IDE3Ljk5MjE4OCAxNC41MjczNDQgMTcuNjg3NSAxNS4wNjI1IDE2Ljk3NjU2MiBDMTUuMzk4NDM4IDE2LjUzNTE1NiAxNS41NzAzMTIgMTYuMDc0MjE5IDE1LjY5OTIxOSAxNS4zMDg1OTQgQzE1LjgxNjQwNiAxNC42MTMyODEgMTUuODM1OTM4IDE0LjM3MTA5NCAxNi4wOTM3NSAxMC41IEMxNi4yNjk1MzEgNy44NzEwOTQgMTYuMzE2NDA2IDYuOTY4NzUgMTYuMjg1MTU2IDYuODg2NzE5IEMxNi4yMjI2NTYgNi43MTg3NSAxNi4wMTU2MjUgNi41MjczNDQgMTUuODUxNTYyIDYuNDgwNDY5IEMxNS41NzQyMTkgNi40MDYyNSAxNS4yMzgyODEgNi41NjY0MDYgMTUuMTMyODEyIDYuODIwMzEyIEMxNS4wOTM3NSA2LjkxMDE1NiAxNS4wMDM5MDYgOC4wMzkwNjIgMTQuODQzNzUgMTAuNDU3MDMxIEMxNC41NjI1IDE0LjY3OTY4OCAxNC41MTk1MzEgMTUuMTEzMjgxIDE0LjM0NzY1NiAxNS42NDQ1MzEgQzE0LjE4NzUgMTYuMTQ4NDM4IDEzLjg5NDUzMSAxNi40ODgyODEgMTMuNDkyMTg4IDE2LjY0MDYyNSBDMTIuOTU3MDMxIDE2LjgzOTg0NCAxMi43MTA5MzggMTYuODU1NDY5IDEwIDE2Ljg1NTQ2OSBDNy4yODkwNjIgMTYuODU1NDY5IDcuMDQyOTY5IDE2LjgzOTg0NCA2LjUwNzgxMiAxNi42NDA2MjUgQzYuMTA1NDY5IDE2LjQ4ODI4MSA1LjgxMjUgMTYuMTQ4NDM4IDUuNjUyMzQ0IDE1LjY0NDUzMSBDNS40ODA0NjkgMTUuMTEzMjgxIDUuNDM3NSAxNC42Nzk2ODggNS4xNTYyNSAxMC40NTcwMzEgQzQuOTk2MDk0IDguMDU4NTk0IDQuOTA2MjUgNi45MTAxNTYgNC44NjcxODggNi44MjQyMTkgQzQuODAwNzgxIDYuNjY0MDYyIDQuNjkxNDA2IDYuNTcwMzEyIDQuNTAzOTA2IDYuNSBDNC4zMzIwMzEgNi40NDE0MDYgNC4yODUxNTYgNi40Mzc1IDQuMTIxMDk0IDYuNDg4MjgxIFpcIiAvPlxuICAgIDwvc3ZnPlxuKTtcblxuY29uc3QgbWFrZUlkID0gKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGAke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QWNjZXNzQ29uZmlnOiBBY2Nlc3NDb25maWcgPSB7XG4gICAgZnVsbEFjY2Vzc0dyb3VwczogW10sXG4gICAgZnVsbEFjY2Vzc1VzZXJzOiBbXSxcbiAgICBydWxlczogW10sXG4gICAgZmllbGRKb2luT3BlcmF0b3I6IFwiYW5kXCIsXG59O1xuXG5jb25zdCBxdW90ZVZhbHVlID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKCk7XG5cbiAgICBpZiAoL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh0cmltbWVkKSkge1xuICAgICAgICByZXR1cm4gdHJpbW1lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCcke3RyaW1tZWQucmVwbGFjZSgvJy9nLCBcIicnXCIpfSdgO1xufTtcblxuY29uc3Qgbm9ybWFsaXplT3BlcmF0b3IgPSAob3BlcmF0b3I6IGFueSk6IFJ1bGVPcGVyYXRvciA9PiB7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImVxdWFsXCIpIHJldHVybiBcImVxdWFsXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcInJhbmdlXCIpIHJldHVybiBcInJhbmdlXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImluY2x1ZGVcIikgcmV0dXJuIFwiaW5jbHVkZVwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJsaWtlXCIpIHJldHVybiBcImxpa2VcIjtcblxuICAgIGlmIChvcGVyYXRvciA9PT0gXCJlcVwiKSByZXR1cm4gXCJlcXVhbFwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJiZXR3ZWVuXCIpIHJldHVybiBcInJhbmdlXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImluXCIpIHJldHVybiBcImluY2x1ZGVcIjtcblxuICAgIHJldHVybiBcImVxdWFsXCI7XG59O1xuXG5jb25zdCBidWlsZFJ1bGVXaGVyZSA9IChmaWVsZDogc3RyaW5nLCBydWxlOiBBY2Nlc3NSdWxlKTogc3RyaW5nID0+IHtcbiAgICBsZXQgd2hlcmUgPSBcIjE9MFwiO1xuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwiZXF1YWxcIikge1xuICAgICAgICB3aGVyZSA9IGAke2ZpZWxkfSA9ICR7cXVvdGVWYWx1ZShydWxlLnZhbHVlID8/IFwiXCIpfWA7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwicmFuZ2VcIikge1xuICAgICAgICB3aGVyZSA9IGAke2ZpZWxkfSBCRVRXRUVOICR7cXVvdGVWYWx1ZShydWxlLmZyb20gPz8gXCJcIil9IEFORCAke3F1b3RlVmFsdWUocnVsZS50byA/PyBcIlwiKX1gO1xuICAgIH1cblxuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImluY2x1ZGVcIikge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBydWxlLnZhbHVlcyA/PyBbXTtcbiAgICAgICAgd2hlcmUgPSBgJHtmaWVsZH0gSU4gKCR7dmFsdWVzLm1hcChxdW90ZVZhbHVlKS5qb2luKFwiLCBcIil9KWA7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwibGlrZVwiKSB7XG4gICAgICAgIHdoZXJlID0gYCR7ZmllbGR9IExJS0UgJHtxdW90ZVZhbHVlKHJ1bGUudmFsdWUgPz8gXCJcIil9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZS5pc05vdCA/IGBOT1QgKCR7d2hlcmV9KWAgOiB3aGVyZTtcbn07XG5cbmNvbnN0IHdyYXBXaGVyZVBhcnQgPSAodmFsdWU6IHN0cmluZywgc2hvdWxkV3JhcDogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHNob3VsZFdyYXAgPyBgKCR7dmFsdWV9KWAgOiB2YWx1ZTtcbn07XG5cbmNvbnN0IGJ1aWxkV2hlcmVGb3JHcm91cCA9IChjb25maWc6IEFjY2Vzc0NvbmZpZywgZ3JvdXBJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBqb2luV29yZCA9IGNvbmZpZy5maWVsZEpvaW5PcGVyYXRvciA9PT0gXCJvclwiID8gXCJPUlwiIDogXCJBTkRcIjtcbiAgICBjb25zdCBmaWVsZFBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uZmlnLnJ1bGVzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IGZpZWxkLnJ1bGVzXG4gICAgICAgICAgICAuZmlsdGVyKChydWxlKSA9PiBydWxlLmdyb3Vwcy5pbmNsdWRlcyhncm91cElkKSlcbiAgICAgICAgICAgIC5tYXAoKHJ1bGUpID0+IGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlKSk7XG5cbiAgICAgICAgaWYgKHJ1bGVQYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGZpZWxkUGFydHMucHVzaChydWxlUGFydHNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmaWVsZFBhcnRzLnB1c2goYCgke3J1bGVQYXJ0cy5qb2luKFwiIE9SIFwiKX0pYCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmaWVsZFBhcnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiMT0wXCI7XG5cbiAgICByZXR1cm4gZmllbGRQYXJ0c1xuICAgICAgICAubWFwKChwYXJ0KSA9PiB3cmFwV2hlcmVQYXJ0KHBhcnQsIGZpZWxkUGFydHMubGVuZ3RoID4gMSAmJiAvXFxzT1JcXHMvLnRlc3QocGFydCkpKVxuICAgICAgICAuam9pbihgICR7am9pbldvcmR9IGApO1xufTtcblxuY29uc3QgZ2V0UnVsZUFjY2Vzc0dyb3VwSWRzID0gKGNvbmZpZzogQWNjZXNzQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgICBuZXcgU2V0KFxuICAgICAgICAgICAgY29uZmlnLnJ1bGVzLmZsYXRNYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZsYXRNYXAoKHJ1bGUpID0+IHJ1bGUuZ3JvdXBzKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgKS5zb3J0KCk7XG59O1xuXG5cbmNvbnN0IG5vcm1hbGl6ZUxvYWRlZENvbmZpZyA9IChkYXRhOiBhbnkpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIGNvbnN0IGZpZWxkSm9pbk9wZXJhdG9yOiBBY2Nlc3NGaWVsZEpvaW5PcGVyYXRvciA9XG4gICAgICAgIGRhdGE/LmZpZWxkSm9pbk9wZXJhdG9yID09PSBcIm9yXCIgPyBcIm9yXCIgOiBcImFuZFwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogQXJyYXkuaXNBcnJheShkYXRhPy5mdWxsQWNjZXNzR3JvdXBzKVxuICAgICAgICAgICAgPyBkYXRhLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChpdGVtOiBhbnkpID0+IFN0cmluZyhpdGVtKSlcbiAgICAgICAgICAgIDogW10sXG4gICAgICAgIGZ1bGxBY2Nlc3NVc2VyczogQXJyYXkuaXNBcnJheShkYXRhPy5mdWxsQWNjZXNzVXNlcnMpXG4gICAgICAgICAgICA/IGRhdGEuZnVsbEFjY2Vzc1VzZXJzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShkYXRhPy5ydWxlcylcbiAgICAgICAgICAgID8gZGF0YS5ydWxlcy5tYXAoKGZpZWxkSXRlbTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiBmaWVsZEl0ZW0uaWQgfHwgbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpZWxkSXRlbS50aXRsZSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEl0ZW0uZmllbGQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShmaWVsZEl0ZW0ucnVsZXMpXG4gICAgICAgICAgICAgICAgICAgID8gZmllbGRJdGVtLnJ1bGVzLm1hcCgocnVsZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJ1bGUuaWQgfHwgbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogbm9ybWFsaXplT3BlcmF0b3IocnVsZS5vcGVyYXRvciksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc05vdDogcnVsZS5pc05vdCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogcnVsZS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHJ1bGUudG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IEFycmF5LmlzQXJyYXkocnVsZS52YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLnZhbHVlcy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IEFycmF5LmlzQXJyYXkocnVsZS5ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLmdyb3Vwcy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyczogQXJyYXkuaXNBcnJheShydWxlLnVzZXJzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcnVsZS51c2Vycy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBmaWVsZEpvaW5PcGVyYXRvcixcbiAgICB9O1xufTtcblxuY29uc3QgY2xvbmVBY2Nlc3NDb25maWcgPSAoZGF0YTogQWNjZXNzQ29uZmlnKTogQWNjZXNzQ29uZmlnID0+IHtcbiAgICByZXR1cm4gbm9ybWFsaXplTG9hZGVkQ29uZmlnKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcbn07XG5cbmNvbnN0IGdldEluaXRpYWxBY2Nlc3NDb25maWcgPSAod2lkZ2V0Q29uZmlnOiBhbnkpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIGNvbnN0IHN0b3JlZENvbmZpZyA9IHdpZGdldENvbmZpZz8uYWNjZXNzQ29uZmlnO1xuXG4gICAgaWYgKCFzdG9yZWRDb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lQWNjZXNzQ29uZmlnKGRlZmF1bHRBY2Nlc3NDb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWluQ29uZmlnID1cbiAgICAgICAgdHlwZW9mIHN0b3JlZENvbmZpZy5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdG9yZWRDb25maWcuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICAgICAgICAgICAgOiBzdG9yZWRDb25maWc7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplTG9hZGVkQ29uZmlnKHBsYWluQ29uZmlnKTtcbn07XG5cbmNvbnN0IGdldENvbmZpZ0dyb3VwSWRzID0gKGNvbmZpZzogQWNjZXNzQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICAgIGNvbnN0IGdyb3VwSWRzID0gW1xuICAgICAgICAuLi5jb25maWcuZnVsbEFjY2Vzc0dyb3VwcyxcbiAgICAgICAgLi4uY29uZmlnLnJ1bGVzLmZsYXRNYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgZmllbGQucnVsZXMuZmxhdE1hcCgocnVsZSkgPT4gcnVsZS5ncm91cHMpLFxuICAgICAgICApLFxuICAgIF07XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGdyb3VwSWRzKSkuc29ydCgpO1xufTtcblxuY29uc3QgZ2V0Q29uZmlnVXNlcklkcyA9IChjb25maWc6IEFjY2Vzc0NvbmZpZyk6IHN0cmluZ1tdID0+IHtcbiAgICBjb25zdCB1c2VySWRzID0gW1xuICAgICAgICAuLi5jb25maWcuZnVsbEFjY2Vzc1VzZXJzLFxuICAgICAgICAuLi5jb25maWcucnVsZXMuZmxhdE1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICBmaWVsZC5ydWxlcy5mbGF0TWFwKChydWxlKSA9PiBydWxlLnVzZXJzKSxcbiAgICAgICAgKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh1c2VySWRzKSkuc29ydCgpO1xufTtcblxuY29uc3QgZ2V0UG9ydGFsR3JvdXBJbmZvID0gYXN5bmMgKFxuICAgIGVzcmlSZXF1ZXN0OiBFc3JpUmVxdWVzdEZ1bmN0aW9uLFxuICAgIHBvcnRhbFVybDogc3RyaW5nLFxuICAgIGdyb3VwSWQ6IHN0cmluZyxcbik6IFByb21pc2U8UG9ydGFsR3JvdXBJbmZvPiA9PiB7XG4gICAgY29uc3QgZW5jb2RlZEdyb3VwSWQgPSBlbmNvZGVVUklDb21wb25lbnQoZ3JvdXBJZCk7XG4gICAgY29uc3QgZ3JvdXBVcmwgPSBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb21tdW5pdHkvZ3JvdXBzLyR7ZW5jb2RlZEdyb3VwSWR9YDtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChncm91cFVybCwge1xuICAgICAgICAgICAgcXVlcnk6IHsgZjogXCJqc29uXCIgfSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChncm91cFJlc3BvbnNlLmRhdGE/LmVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ3JvdXBSZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UgfHwgXCLQk9GA0YPQv9C/0LAg0L3QtdC00L7RgdGC0YPQv9C90LBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXNlcnNDb3VudDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChgJHtncm91cFVybH0vdXNlckxpc3RgLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZjogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxuICAgICAgICAgICAgICAgICAgICBudW06IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhdXNlcnNSZXNwb25zZS5kYXRhPy5lcnJvciAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB1c2Vyc1Jlc3BvbnNlLmRhdGE/LnRvdGFsID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAqIHVzZXJMaXN0INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIG93bmVyINC+0YLQtNC10LvRjNC90L4g0L7RgiDQvNCw0YHRgdC40LLQsCB1c2Vycy5cbiAgICAgICAgICAgICAgICAgKiDQn9C+0Y3RgtC+0LzRgyDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQu9Cw0LTQtdC70YzRhtCwINC6INC60L7Qu9C40YfQtdGB0YLQstGDINC+0YHRgtCw0LvRjNC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB1c2Vyc0NvdW50ID0gdXNlcnNSZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIC8vICsgKHVzZXJzUmVzcG9uc2UuZGF0YS5vd25lcj8udXNlcm5hbWUgPyAxIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdXNlcnNDb3VudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgICAgICB0aXRsZTogZ3JvdXBSZXNwb25zZS5kYXRhPy50aXRsZSB8fCBcItCR0LXQtyDQvdCw0LfQstCw0L3QuNGPXCIsXG4gICAgICAgICAgICB1c2Vyc0NvdW50LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgICAgICB0aXRsZTogXCLQndCw0LfQstCw0L3QuNC1INC90LXQtNC+0YHRgtGD0L/QvdC+XCIsXG4gICAgICAgICAgICB1c2Vyc0NvdW50OiBudWxsLFxuICAgICAgICAgICAgaXNVbmF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5jb25zdCBnZXRQb3J0YWxVc2VySW5mbyA9IGFzeW5jIChcbiAgICBlc3JpUmVxdWVzdDogRXNyaVJlcXVlc3RGdW5jdGlvbixcbiAgICBwb3J0YWxVcmw6IHN0cmluZyxcbiAgICB1c2VySWQ6IHN0cmluZyxcbik6IFByb21pc2U8UG9ydGFsVXNlckluZm8+ID0+IHtcbiAgICBjb25zdCB0b0luZm8gPSAoZGF0YTogYW55KTogUG9ydGFsVXNlckluZm8gfCBudWxsID0+IHtcbiAgICAgICAgaWYgKCFkYXRhIHx8IGRhdGEuZXJyb3IpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIWRhdGEudXNlcm5hbWUgJiYgIWRhdGEuaWQgJiYgIWRhdGEudXNlcklkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRJZCA9IFN0cmluZyhkYXRhLmlkIHx8IGRhdGEudXNlcklkIHx8IHVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS51c2VybmFtZSA/IFN0cmluZyhkYXRhLnVzZXJuYW1lKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFyZXNvbHZlZElkICYmICF1c2VybmFtZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBmdWxsTmFtZTogZGF0YS5mdWxsTmFtZSA/IFN0cmluZyhkYXRhLmZ1bGxOYW1lKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGlyZWN0UmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChcbiAgICAgICAgICAgIGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbW11bml0eS91c2Vycy8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpfWAsXG4gICAgICAgICAgICB7IHF1ZXJ5OiB7IGY6IFwianNvblwiIH0sIHJlc3BvbnNlVHlwZTogXCJqc29uXCIgfSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGlyZWN0SW5mbyA9IHRvSW5mbyhkaXJlY3RSZXNwb25zZS5kYXRhKTtcbiAgICAgICAgaWYgKGRpcmVjdEluZm8pIHJldHVybiBkaXJlY3RJbmZvO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3BvbnNlID0gYXdhaXQgZXNyaVJlcXVlc3QoXG4gICAgICAgICAgICBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb21tdW5pdHkvdXNlcnNgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGY6IFwianNvblwiLCBxOiB1c2VySWQsIG51bTogMjAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IEFycmF5LmlzQXJyYXkoc2VhcmNoUmVzcG9uc2UuZGF0YT8ucmVzdWx0cylcbiAgICAgICAgICAgID8gc2VhcmNoUmVzcG9uc2UuZGF0YS5yZXN1bHRzXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICBjb25zdCBtYXRjaCA9IGNhbmRpZGF0ZXMuZmluZCgoaXRlbTogYW55KSA9PlxuICAgICAgICAgICAgW2l0ZW0/LmlkLCBpdGVtPy51c2VySWQsIGl0ZW0/LnVzZXJuYW1lXVxuICAgICAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiBTdHJpbmcodmFsdWUgfHwgXCJcIikpXG4gICAgICAgICAgICAgICAgLmluY2x1ZGVzKHVzZXJJZCksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlYXJjaEluZm8gPSB0b0luZm8obWF0Y2gpO1xuICAgICAgICBpZiAoc2VhcmNoSW5mbykgcmV0dXJuIHNlYXJjaEluZm87XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vINCd0LjQttC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRjyDQsdC10LfQvtC/0LDRgdC90LDRjyDQt9Cw0LPQu9GD0YjQutCwLlxuICAgIH1cblxuICAgIHJldHVybiB7IGlkOiB1c2VySWQsIGlzVW5hdmFpbGFibGU6IHRydWUgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjY2Vzc1NldHRpbmdQcm9wcyA9IHtcbiAgICB2YWx1ZT86IEFjY2Vzc0NvbmZpZztcbiAgICBvbkNoYW5nZTogKGNvbmZpZzogQWNjZXNzQ29uZmlnKSA9PiB2b2lkO1xuICAgIGJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjZXNzU2V0dGluZyhwcm9wczogQWNjZXNzU2V0dGluZ1Byb3BzKSB7XG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWNjZXNzQ29uZmlnPigoKSA9PlxuICAgICAgICBub3JtYWxpemVMb2FkZWRDb25maWcocHJvcHMudmFsdWUgPz8gZGVmYXVsdEFjY2Vzc0NvbmZpZyksXG4gICAgKTtcbiAgICBjb25zdCBbc2F2ZWRDb25maWcsIHNldFNhdmVkQ29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPEFjY2Vzc0NvbmZpZz4oKCkgPT5cbiAgICAgICAgbm9ybWFsaXplTG9hZGVkQ29uZmlnKHByb3BzLnZhbHVlID8/IGRlZmF1bHRBY2Nlc3NDb25maWcpLFxuICAgICk7XG4gICAgY29uc3QgW2hhc1Vuc2F2ZWRDaGFuZ2VzLCBzZXRIYXNVbnNhdmVkQ2hhbmdlc10gPVxuICAgICAgICBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW25vdGljZSwgc2V0Tm90aWNlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IG5vdGljZVRpbWVyID0gUmVhY3QudXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc3Qgc2hvd05vdGljZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKG5vdGljZVRpbWVyLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobm90aWNlVGltZXIuY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXROb3RpY2UobWVzc2FnZSk7XG4gICAgICAgIG5vdGljZVRpbWVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXROb3RpY2UobnVsbCk7XG4gICAgICAgICAgICBub3RpY2VUaW1lci5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSwgMTgwMCk7XG4gICAgfTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobm90aWNlVGltZXIuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobm90aWNlVGltZXIuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2V0RHJhZnRDb25maWcgPSAoXG4gICAgICAgIHVwZGF0ZTogKHByZXZpb3VzOiBBY2Nlc3NDb25maWcpID0+IEFjY2Vzc0NvbmZpZyxcbiAgICApOiB2b2lkID0+IHtcbiAgICAgICAgc2V0Q29uZmlnKChwcmV2aW91cykgPT4gdXBkYXRlKHByZXZpb3VzKSk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgW2dyb3Vwc0luZm8sIHNldEdyb3Vwc0luZm9dID0gUmVhY3QudXNlU3RhdGU8XG4gICAgICAgIFJlY29yZDxzdHJpbmcsIFBvcnRhbEdyb3VwSW5mbz5cbiAgICA+KHt9KTtcbiAgICBjb25zdCBbZ3JvdXBzTG9hZGluZywgc2V0R3JvdXBzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJzSW5mbywgc2V0VXNlcnNJbmZvXSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIFBvcnRhbFVzZXJJbmZvPj4oe30pO1xuICAgIGNvbnN0IFt1c2Vyc0xvYWRpbmcsIHNldFVzZXJzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICBjb25zdCBncm91cElkc1NpZ25hdHVyZSA9IGdldENvbmZpZ0dyb3VwSWRzKGNvbmZpZykuam9pbihcInxcIik7XG4gICAgY29uc3QgdXNlcklkc1NpZ25hdHVyZSA9IGdldENvbmZpZ1VzZXJJZHMoY29uZmlnKS5qb2luKFwifFwiKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGxvYWRHcm91cHNJbmZvID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBJZHMgPSBnZXRDb25maWdHcm91cElkcyhjb25maWcpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0R3JvdXBzSW5mbyh7fSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwb3J0YWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LnBvcnRhbFVybDtcblxuICAgICAgICAgICAgaWYgKCFwb3J0YWxVcmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldEdyb3Vwc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2VzcmlSZXF1ZXN0XSA9IChhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICAgICAgICAgICAgICAgXCJlc3JpL3JlcXVlc3RcIixcbiAgICAgICAgICAgICAgICBdKSkgYXMgW0VzcmlSZXF1ZXN0RnVuY3Rpb25dO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWRzLm1hcCgoZ3JvdXBJZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvcnRhbEdyb3VwSW5mbyhlc3JpUmVxdWVzdCwgcG9ydGFsVXJsLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWQgPSByZXN1bHQucmVkdWNlPFJlY29yZDxzdHJpbmcsIFBvcnRhbEdyb3VwSW5mbz4+KFxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaXRlbS5pZF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRHcm91cHNJbmZvKG1hcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEdyb3Vwc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2b2lkIGxvYWRHcm91cHNJbmZvKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LCBbZ3JvdXBJZHNTaWduYXR1cmVdKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGxvYWRVc2Vyc0luZm8gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWRzID0gZ2V0Q29uZmlnVXNlcklkcyhjb25maWcpO1xuICAgICAgICAgICAgaWYgKHVzZXJJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcnNJbmZvKHt9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8ucG9ydGFsVXJsO1xuICAgICAgICAgICAgaWYgKCFwb3J0YWxVcmwpIHJldHVybjtcblxuICAgICAgICAgICAgc2V0VXNlcnNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXNyaVJlcXVlc3RdID0gKGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgICAgICAgICAgICAgICBcImVzcmkvcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIF0pKSBhcyBbRXNyaVJlcXVlc3RGdW5jdGlvbl07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZHMubWFwKCh1c2VySWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQb3J0YWxVc2VySW5mbyhlc3JpUmVxdWVzdCwgcG9ydGFsVXJsLCB1c2VySWQpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2Vyc0luZm8oXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVkdWNlPFJlY29yZDxzdHJpbmcsIFBvcnRhbFVzZXJJbmZvPj4oKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICghaXNDYW5jZWxsZWQpIHNldFVzZXJzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm9pZCBsb2FkVXNlcnNJbmZvKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpc0NhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgfSwgW3VzZXJJZHNTaWduYXR1cmVdKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlPERpYWxvZ1N0YXRlPihudWxsKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFJ1bGVJZHMsIHNldFNlbGVjdGVkUnVsZUlkc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtzZWxlY3RlZEdyb3VwS2V5cywgc2V0U2VsZWN0ZWRHcm91cEtleXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFxuICAgICAgICBbXSxcbiAgICApO1xuXG4gICAgY29uc3QgW2Zvcm1UaXRsZSwgc2V0Rm9ybVRpdGxlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1GaWVsZCwgc2V0Rm9ybUZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1Hcm91cCwgc2V0Rm9ybUdyb3VwXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1Vc2VyLCBzZXRGb3JtVXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgY29uc3QgW3J1bGVPcGVyYXRvciwgc2V0UnVsZU9wZXJhdG9yXSA9IFJlYWN0LnVzZVN0YXRlPFJ1bGVPcGVyYXRvcj4oXCJlcXVhbFwiKTtcbiAgICBjb25zdCBbcnVsZUlzTm90LCBzZXRSdWxlSXNOb3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtydWxlVmFsdWUsIHNldFJ1bGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtydWxlRnJvbSwgc2V0UnVsZUZyb21dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcnVsZVRvLCBzZXRSdWxlVG9dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcnVsZVZhbHVlcywgc2V0UnVsZVZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtuZXdMaXN0VmFsdWUsIHNldE5ld0xpc3RWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtmaWVsZFNlYXJjaCwgc2V0RmllbGRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZ3JvdXBTZWFyY2gsIHNldEdyb3VwU2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3Nob3dXaGVyZVByZXZpZXcsIHNldFNob3dXaGVyZVByZXZpZXddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWVsZCA9XG4gICAgICAgIHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSURcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiAoY29uZmlnLnJ1bGVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpID8/IG51bGwpO1xuXG4gICAgY29uc3QgcmVuZGVyR3JvdXBJZGVudGl0eSA9IChncm91cElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcbiAgICAgICAgY29uc3QgZ3JvdXBUaXRsZSA9IGdyb3VwSW5mbz8udGl0bGUgPz9cbiAgICAgICAgICAgIChncm91cHNMb2FkaW5nID8gXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIgOiBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZGVudGl0eVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZFRpdGxlTGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cFRpdGxlQWZ0ZXJJZFwiPntncm91cFRpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgY29weUdyb3VwSWQoZ3JvdXBJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXBJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7Z3JvdXBJbmZvPy51c2Vyc0NvdW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSW5mbz8udXNlcnNDb3VudCAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBNZW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk6IHtncm91cEluZm8udXNlcnNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclVzZXJJZGVudGl0eSA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHVzZXJJbmZvPy5mdWxsTmFtZSB8fCB1c2VySW5mbz8udXNlcm5hbWUgfHxcbiAgICAgICAgICAgICh1c2Vyc0xvYWRpbmcgPyBcItCX0LDQs9GA0YPQt9C60LAuLi5cIiA6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9XCIpO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IHVzZXJJbmZvPy51c2VybmFtZSAmJiB1c2VySW5mby51c2VybmFtZSAhPT0gdXNlcklkXG4gICAgICAgICAgICA/IGAke3VzZXJJbmZvLnVzZXJuYW1lfSDigJQgYFxuICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwSWRlbnRpdHkgdXNlcklkZW50aXR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cElkVGl0bGVMaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwVGl0bGVBZnRlcklkXCI+e3RpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIGNvcHlHcm91cElkKHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcyhbXSk7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKFtdKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0TGVmdEl0ZW0gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZElkKGlkKTtcbiAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRSdWxlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0UnVsZU9wZXJhdG9yKFwiZXF1YWxcIik7XG4gICAgICAgIHNldFJ1bGVJc05vdChmYWxzZSk7XG4gICAgICAgIHNldFJ1bGVWYWx1ZShcIlwiKTtcbiAgICAgICAgc2V0UnVsZUZyb20oXCJcIik7XG4gICAgICAgIHNldFJ1bGVUbyhcIlwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlcyhbXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UnVsZUZyb21Gb3JtID0gKCk6IEFjY2Vzc1J1bGUgfCBudWxsID0+IHtcbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJlcXVhbFwiKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVWYWx1ZS50cmltKCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJlcXVhbFwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGVWYWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVGcm9tLnRyaW0oKSB8fCAhcnVsZVRvLnRyaW0oKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgaXNOb3Q6IHJ1bGVJc05vdCxcbiAgICAgICAgICAgICAgICBmcm9tOiBydWxlRnJvbS50cmltKCksXG4gICAgICAgICAgICAgICAgdG86IHJ1bGVUby50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuVmFsdWVzID0gcnVsZVZhbHVlcy5yZWR1Y2U8c3RyaW5nW10+KChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0udHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmICFyZXN1bHQuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICBpZiAoY2xlYW5WYWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBjbGVhblZhbHVlcyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlVmFsdWUudHJpbSgpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwibGlrZVwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGVWYWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGxSdWxlRm9ybSA9IChydWxlOiBBY2Nlc3NSdWxlKSA9PiB7XG4gICAgICAgIHNldFJ1bGVPcGVyYXRvcihydWxlLm9wZXJhdG9yKTtcbiAgICAgICAgc2V0UnVsZUlzTm90KHJ1bGUuaXNOb3QgPT09IHRydWUpO1xuICAgICAgICBzZXRSdWxlVmFsdWUocnVsZS52YWx1ZSA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZUZyb20ocnVsZS5mcm9tID8/IFwiXCIpO1xuICAgICAgICBzZXRSdWxlVG8ocnVsZS50byA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlcyhydWxlLnZhbHVlcyA/PyBbXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtVGl0bGUoXCJcIik7XG4gICAgICAgIHNldEZvcm1GaWVsZChcIlwiKTtcbiAgICAgICAgcmVzZXRSdWxlRm9ybSgpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImFkZEZpZWxkXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0RmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldEZvcm1UaXRsZShzZWxlY3RlZEZpZWxkLnRpdGxlKTtcbiAgICAgICAgc2V0Rm9ybUZpZWxkKHNlbGVjdGVkRmllbGQuZmllbGQpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImVkaXRGaWVsZFwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGZpZWxkSWQ6IHNlbGVjdGVkRmllbGQuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZUZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWZvcm1UaXRsZS50cmltKCkgfHwgIWZvcm1GaWVsZC50cmltKCkpIHJldHVybjtcblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZEZpZWxkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UnVsZSA9IGdldFJ1bGVGcm9tRm9ybSgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdGaWVsZDogQWNjZXNzRmllbGRSdWxlID0ge1xuICAgICAgICAgICAgICAgIGlkOiBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZm9ybVRpdGxlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBmaWVsZDogZm9ybUZpZWxkLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBydWxlczogZmlyc3RSdWxlID8gW2ZpcnN0UnVsZV0gOiBbXSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IFsuLi5wcmV2LnJ1bGVzLCBuZXdGaWVsZF0sXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobmV3RmllbGQuaWQpO1xuICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEZpZWxkXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09PSBkaWFsb2cucGF5bG9hZC5maWVsZElkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmb3JtVGl0bGUudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmb3JtRmllbGQudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJ1bGVzID0gcHJldi5ydWxlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHNlbGVjdGVkRmllbGQuaWQsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG5leHRSdWxlc1swXT8uaWQgPz8gR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IG5leHRSdWxlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZFJ1bGUgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0UnVsZUZvcm0oKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRSdWxlXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0UnVsZSA9IChydWxlOiBBY2Nlc3NSdWxlKSA9PiB7XG4gICAgICAgIGZpbGxSdWxlRm9ybShydWxlKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0UnVsZVwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHJ1bGVJZDogcnVsZS5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlUnVsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZm9ybVJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICBpZiAoIWZvcm1SdWxlKSB7XG4gICAgICAgICAgICBhbGVydChcItCX0LDQv9C+0LvQvdC4INC30L3QsNGH0LXQvdC40LUg0L/RgNCw0LLQuNC70LBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZFJ1bGVcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFsuLi5maWVsZC5ydWxlcywgZm9ybVJ1bGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0UnVsZVwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1SdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHJ1bGUudXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlUnVsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFkaWFsb2c/LnBheWxvYWQ/LnJ1bGVJZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJ1bGUpID0+IHJ1bGUuaWQgIT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoKHByZXYpID0+XG4gICAgICAgICAgICBwcmV2LmZpbHRlcigoaWQpID0+IGlkICE9PSBkaWFsb2cucGF5bG9hZC5ydWxlSWQpLFxuICAgICAgICApO1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVSdWxlU2VsZWN0ID0gKHJ1bGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuaW5jbHVkZXMocnVsZUlkKVxuICAgICAgICAgICAgICAgID8gcHJldi5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gcnVsZUlkKVxuICAgICAgICAgICAgICAgIDogWy4uLnByZXYsIHJ1bGVJZF0sXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkUnVsZXMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCBzZWxlY3RlZFJ1bGVJZHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocnVsZSkgPT4gIXNlbGVjdGVkUnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoW10pO1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VHcm91cEtleSA9IChydWxlSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgJHtydWxlSWR9XyR7aW5kZXh9YDtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUdsb2JhbEdyb3VwS2V5ID0gKGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYGdsb2JhbF8ke2luZGV4fWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGF1dG9TZWxlY3RlZEdyb3VwS2V5cyA9IHNlbGVjdGVkRmllbGRcbiAgICAgICAgPyBzZWxlY3RlZEZpZWxkLnJ1bGVzLnJlZHVjZTxzdHJpbmdbXT4oKHJlc3VsdCwgcnVsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCkpIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgIHJ1bGUuZ3JvdXBzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgW10pXG4gICAgICAgIDogW107XG5cbiAgICBjb25zdCBlZmZlY3RpdmVTZWxlY3RlZEdyb3VwS2V5cyA9IEFycmF5LmZyb20oXG4gICAgICAgIG5ldyBTZXQoWy4uLnNlbGVjdGVkR3JvdXBLZXlzLCAuLi5hdXRvU2VsZWN0ZWRHcm91cEtleXNdKSxcbiAgICApO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cHNDb3VudCA9XG4gICAgICAgIHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSURcbiAgICAgICAgICAgID8gc2VsZWN0ZWRHcm91cEtleXMubGVuZ3RoXG4gICAgICAgICAgICA6IGVmZmVjdGl2ZVNlbGVjdGVkR3JvdXBLZXlzLmxlbmd0aDtcblxuICAgIGNvbnN0IGZpbHRlcmVkRmllbGRzID0gY29uZmlnLnJ1bGVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBmaWVsZFNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpIHx8XG4gICAgICAgICAgICBpdGVtLmZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ3JvdXBNYXRjaGVzU2VhcmNoID0gKGdyb3VwSWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBncm91cFNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZ3JvdXBJZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkgfHxcbiAgICAgICAgICAgIChncm91cEluZm8/LnRpdGxlID8/IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB1c2VyTWF0Y2hlc1NlYXJjaCA9ICh1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBncm91cFNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiB0cnVlO1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICByZXR1cm4gW3VzZXJJZCwgdXNlckluZm8/LnVzZXJuYW1lLCB1c2VySW5mbz8uZnVsbE5hbWVdXG4gICAgICAgICAgICAuc29tZSgodmFsdWUpID0+IFN0cmluZyh2YWx1ZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmV2aWV3R3JvdXBMYWJlbCA9IChncm91cElkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBncm91cEluZm8gPSBncm91cHNJbmZvW2dyb3VwSWRdO1xuICAgICAgICBjb25zdCBncm91cFRpdGxlID0gZ3JvdXBJbmZvPy50aXRsZT8udHJpbSgpO1xuXG4gICAgICAgIGlmICghZ3JvdXBUaXRsZSkgcmV0dXJuIGdyb3VwSWQ7XG5cbiAgICAgICAgcmV0dXJuIGAke2dyb3VwVGl0bGV9ICgke2dyb3VwSWR9KWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByZXZpZXdVc2VyTGFiZWwgPSAodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICBjb25zdCBuYW1lID0gdXNlckluZm8/LmZ1bGxOYW1lIHx8IHVzZXJJbmZvPy51c2VybmFtZTtcbiAgICAgICAgcmV0dXJuIG5hbWUgPyBgJHtuYW1lfSAoJHt1c2VySWR9KWAgOiB1c2VySWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkQ29uZmlnV2hlcmVQcmV2aWV3ID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bGxBY2Nlc3NMaW5lcyA9IGNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cElkKSA9PiBgICAke2dldFByZXZpZXdHcm91cExhYmVsKGdyb3VwSWQpfTogMT0xYClcbiAgICAgICAgICAgIDogW1wiICDigJRcIl07XG5cbiAgICAgICAgY29uc3QgcnVsZUdyb3VwSWRzID0gZ2V0UnVsZUFjY2Vzc0dyb3VwSWRzKGNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJ1bGVBY2Nlc3NMaW5lcyA9IHJ1bGVHcm91cElkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHJ1bGVHcm91cElkcy5tYXAoKGdyb3VwSWQpID0+IGAgICR7Z2V0UHJldmlld0dyb3VwTGFiZWwoZ3JvdXBJZCl9OiAke2J1aWxkV2hlcmVGb3JHcm91cChjb25maWcsIGdyb3VwSWQpfWApXG4gICAgICAgICAgICA6IFtcIiAg4oCUXCJdO1xuXG4gICAgICAgIGNvbnN0IGZ1bGxVc2VyQWNjZXNzTGluZXMgPSBjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5tYXAoKHVzZXJJZCkgPT5cbiAgICAgICAgICAgICAgICBgICAke2dldFByZXZpZXdVc2VyTGFiZWwodXNlcklkKX06IDE9MWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IFtcIiAg4oCUXCJdO1xuXG4gICAgICAgIGNvbnN0IHJ1bGVVc2VySWRzID0gQXJyYXkuZnJvbShuZXcgU2V0KGNvbmZpZy5ydWxlcy5mbGF0TWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZsYXRNYXAoKHJ1bGUpID0+IHJ1bGUudXNlcnMpLFxuICAgICAgICApKSkuc29ydCgpO1xuICAgICAgICBjb25zdCBydWxlVXNlckFjY2Vzc0xpbmVzID0gcnVsZVVzZXJJZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBydWxlVXNlcklkcy5tYXAoKHVzZXJJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbmZpZy5ydWxlcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS51c2Vycy5pbmNsdWRlcyh1c2VySWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goYCgke2J1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlKX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBgICAke2dldFByZXZpZXdVc2VyTGFiZWwodXNlcklkKX06ICR7cGFydHMuam9pbihcIiBPUiBcIikgfHwgXCIxPTBcIn1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW1wiICDigJRcIl07XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFwiRlVMTCBBQ0NFU1M6XCIsXG4gICAgICAgICAgICAuLi5mdWxsQWNjZXNzTGluZXMsXG4gICAgICAgICAgICBcIlJVTEUgQUNDRVNTOlwiLFxuICAgICAgICAgICAgLi4ucnVsZUFjY2Vzc0xpbmVzLFxuICAgICAgICAgICAgXCJGVUxMIFVTRVIgQUNDRVNTOlwiLFxuICAgICAgICAgICAgLi4uZnVsbFVzZXJBY2Nlc3NMaW5lcyxcbiAgICAgICAgICAgIFwiUlVMRSBVU0VSIEFDQ0VTUzpcIixcbiAgICAgICAgICAgIC4uLnJ1bGVVc2VyQWNjZXNzTGluZXMsXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29weUNvbmZpZ1doZXJlUHJldmlldyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGJ1aWxkQ29uZmlnV2hlcmVQcmV2aWV3KCkpO1xuICAgICAgICAgICAgc2hvd05vdGljZShcIldIRVJFINGB0LrQvtC/0LjRgNC+0LLQsNC9XCIpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQndC1INGD0LTQsNC70L7RgdGMINGB0LrQvtC/0LjRgNC+0LLQsNGC0YwgV0hFUkVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RmllbGRKb2luT3BlcmF0b3IgPSAob3BlcmF0b3I6IEFjY2Vzc0ZpZWxkSm9pbk9wZXJhdG9yKTogdm9pZCA9PiB7XG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZpZWxkSm9pbk9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRSdWxlV2FybmluZ3MgPSAoZmllbGQ6IEFjY2Vzc0ZpZWxkUnVsZSwgcnVsZTogQWNjZXNzUnVsZSk6IHN0cmluZ1tdID0+IHtcbiAgICAgICAgY29uc3Qgd2FybmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaGVyZSA9IGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlKTtcbiAgICAgICAgY29uc3QgZHVwbGljYXRlcyA9IGZpZWxkLnJ1bGVzLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSBydWxlLmlkICYmIGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBpdGVtKSA9PT0gY3VycmVudFdoZXJlLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApIHdhcm5pbmdzLnB1c2goXCLQlNGD0LHQu9C40YDRg9C10YIg0LTRgNGD0LPQvtC1INC/0YDQsNCy0LjQu9C+XCIpO1xuICAgICAgICBpZiAocnVsZS5ncm91cHMubGVuZ3RoID09PSAwICYmIHJ1bGUudXNlcnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgd2FybmluZ3MucHVzaChcItCd0LXRgiDQs9GA0YPQv9C/INC40LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDQtNC+0YHRgtGD0L/QsFwiKTtcblxuICAgICAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJlcXVhbFwiICYmICEocnVsZS52YWx1ZSA/PyBcIlwiKS50cmltKCkpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCLQn9GD0YHRgtC+0LUg0LfQvdCw0YfQtdC90LjQtVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImxpa2VcIiAmJiAhKHJ1bGUudmFsdWUgPz8gXCJcIikudHJpbSgpKSB7XG4gICAgICAgICAgICB3YXJuaW5ncy5wdXNoKFwi0J/Rg9GB0YLQvtC1IExJS0Ug0LfQvdCw0YfQtdC90LjQtVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImluY2x1ZGVcIiAmJiAocnVsZS52YWx1ZXMgPz8gW10pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgd2FybmluZ3MucHVzaChcIklOINCx0LXQtyDQt9C90LDRh9C10L3QuNC5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgY29uc3QgZnJvbSA9IE51bWJlcihydWxlLmZyb20pO1xuICAgICAgICAgICAgY29uc3QgdG8gPSBOdW1iZXIocnVsZS50byk7XG5cbiAgICAgICAgICAgIGlmICghKHJ1bGUuZnJvbSA/PyBcIlwiKS50cmltKCkgfHwgIShydWxlLnRvID8/IFwiXCIpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCJSYW5nZSDQt9Cw0L/QvtC70L3QtdC9INC90LUg0L/QvtC70L3QvtGB0YLRjNGOXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghTnVtYmVyLmlzTmFOKGZyb20pICYmICFOdW1iZXIuaXNOYU4odG8pICYmIGZyb20gPiB0bykge1xuICAgICAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCJSYW5nZSDQvdC1INCy0YvQv9C+0LvQvdC40YLRgdGPOiDQvtGCINCx0L7Qu9GM0YjQtSDRh9C10Lwg0LTQvlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3YXJuaW5ncztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RmllbGRXYXJuaW5nc0NvdW50ID0gKGZpZWxkOiBBY2Nlc3NGaWVsZFJ1bGUpOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQucnVsZXMucmVkdWNlKFxuICAgICAgICAgICAgKHRvdGFsLCBydWxlKSA9PiB0b3RhbCArIGdldFJ1bGVXYXJuaW5ncyhmaWVsZCwgcnVsZSkubGVuZ3RoLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlR3JvdXBTZWxlY3QgPSAoa2V5OiBzdHJpbmcsIGlzTG9ja2VkID0gZmFsc2UpID0+IHtcbiAgICAgICAgaWYgKGlzTG9ja2VkKSByZXR1cm47XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoKHByZXYpID0+XG4gICAgICAgICAgICBwcmV2LmluY2x1ZGVzKGtleSkgPyBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0ga2V5KSA6IFsuLi5wcmV2LCBrZXldLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVTZWxlY3RlZEdyb3VwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBLZXlzRm9yRGVsZXRlID1cbiAgICAgICAgICAgIHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSURcbiAgICAgICAgICAgICAgICA/IHNlbGVjdGVkR3JvdXBLZXlzXG4gICAgICAgICAgICAgICAgOiBlZmZlY3RpdmVTZWxlY3RlZEdyb3VwS2V5cztcblxuICAgICAgICBpZiAoZ3JvdXBLZXlzRm9yRGVsZXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHByZXYuZnVsbEFjY2Vzc0dyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChfLCBpbmRleCkgPT4gIWdyb3VwS2V5c0ZvckRlbGV0ZS5pbmNsdWRlcyhtYWtlR2xvYmFsR3JvdXBLZXkoaW5kZXgpKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRmllbGQpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFncm91cEtleXNGb3JEZWxldGUuaW5jbHVkZXMobWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoW10pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR3JvdXAgPSAocnVsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybUdyb3VwKFwiXCIpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImFkZEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcnVsZUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0R3JvdXAgPSAoXG4gICAgICAgIHJ1bGVJZDogc3RyaW5nLFxuICAgICAgICBncm91cEluZGV4OiBudW1iZXIsXG4gICAgICAgIGdyb3VwVmFsdWU6IHN0cmluZyxcbiAgICApID0+IHtcbiAgICAgICAgc2V0Rm9ybUdyb3VwKGdyb3VwVmFsdWUpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImVkaXRHcm91cFwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHJ1bGVJZCxcbiAgICAgICAgICAgICAgICBncm91cEluZGV4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVHcm91cCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFmb3JtR3JvdXAudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHcm91cFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRSdWxlID0gc2VsZWN0ZWRGaWVsZC5ydWxlcy5maW5kKFxuICAgICAgICAgICAgICAgIChydWxlKSA9PiBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWQsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UnVsZT8uZ3JvdXBzLnNvbWUoKGdyb3VwKSA9PiBncm91cC50cmltKCkgPT09IGZvcm1Hcm91cC50cmltKCkpKSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutCw0Y8g0LPRgNGD0L/Qv9CwINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90LBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBbLi4ucnVsZS5ncm91cHMsIGZvcm1Hcm91cC50cmltKCldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImVkaXRHcm91cFwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybUdyb3VwLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBncm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUdyb3VwID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgIWRpYWxvZz8ucGF5bG9hZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfLCBpbmRleCkgPT4gaW5kZXggIT09IGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChrZXkpID0+XG4gICAgICAgICAgICAgICAgICAgIGtleSAhPT1cbiAgICAgICAgICAgICAgICAgICAgbWFrZUdyb3VwS2V5KGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCwgZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCksXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZEdsb2JhbEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoXCJcIik7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkR2xvYmFsR3JvdXBcIiB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRHbG9iYWxHcm91cCA9IChncm91cEluZGV4OiBudW1iZXIsIGdyb3VwVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoZ3JvdXBWYWx1ZSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdEdsb2JhbEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZm9ybUdyb3VwLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkR2xvYmFsR3JvdXBcIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLnNvbWUoKGdyb3VwKSA9PiBncm91cC50cmltKCkgPT09IGZvcm1Hcm91cC50cmltKCkpKSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutCw0Y8g0LPRgNGD0L/Qv9CwINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90LBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IFsuLi5wcmV2LmZ1bGxBY2Nlc3NHcm91cHMsIGZvcm1Hcm91cC50cmltKCldLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0R2xvYmFsR3JvdXBcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBmdWxsQWNjZXNzR3JvdXBzOiBwcmV2LmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4ID8gZm9ybUdyb3VwLnRyaW0oKSA6IGdyb3VwLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUdsb2JhbEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRpYWxvZz8ucGF5bG9hZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHByZXYuZnVsbEFjY2Vzc0dyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChrZXkpID0+IGtleSAhPT0gbWFrZUdsb2JhbEdyb3VwS2V5KGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXgpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRVc2VyID0gKHJ1bGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Vc2VyKFwiXCIpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImFkZFVzZXJcIiwgcGF5bG9hZDogeyBydWxlSWQgfSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRVc2VyID0gKHJ1bGVJZDogc3RyaW5nLCB1c2VySW5kZXg6IG51bWJlciwgdXNlclZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIodXNlclZhbHVlKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJlZGl0VXNlclwiLCBwYXlsb2FkOiB7IHJ1bGVJZCwgdXNlckluZGV4IH0gfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVVc2VyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgIWZvcm1Vc2VyLnRyaW0oKSB8fCAhZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5leHRVc2VyID0gZm9ybVVzZXIudHJpbSgpO1xuXG4gICAgICAgIGlmIChkaWFsb2cudHlwZSA9PT0gXCJhZGRVc2VyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFJ1bGUgPSBzZWxlY3RlZEZpZWxkLnJ1bGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHJ1bGUpID0+IHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UnVsZT8udXNlcnMuaW5jbHVkZXMobmV4dFVzZXIpKSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC9XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiBkaWFsb2cudHlwZSA9PT0gXCJhZGRVc2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsuLi5ydWxlLnVzZXJzLCBuZXh0VXNlcl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUudXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZy5wYXlsb2FkLnVzZXJJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXh0VXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiBydWxlLnVzZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC51c2VySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR2xvYmFsVXNlciA9ICgpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIoXCJcIik7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkR2xvYmFsVXNlclwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdEdsb2JhbFVzZXIgPSAodXNlckluZGV4OiBudW1iZXIsIHVzZXJWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Vc2VyKHVzZXJWYWx1ZSk7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiZWRpdEdsb2JhbFVzZXJcIiwgcGF5bG9hZDogeyB1c2VySW5kZXggfSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZUdsb2JhbFVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRVc2VyID0gZm9ybVVzZXIudHJpbSgpO1xuICAgICAgICBpZiAoIW5leHRVc2VyKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHbG9iYWxVc2VyXCIgJiYgY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5pbmNsdWRlcyhuZXh0VXNlcikpIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQotCw0LrQvtC5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRg9C20LUg0LTQvtCx0LDQstC70LXQvVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZ1bGxBY2Nlc3NVc2VyczogZGlhbG9nPy50eXBlID09PSBcImFkZEdsb2JhbFVzZXJcIlxuICAgICAgICAgICAgICAgID8gWy4uLnByZXYuZnVsbEFjY2Vzc1VzZXJzLCBuZXh0VXNlcl1cbiAgICAgICAgICAgICAgICA6IHByZXYuZnVsbEFjY2Vzc1VzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBkaWFsb2c/LnBheWxvYWQ/LnVzZXJJbmRleCA/IG5leHRVc2VyIDogdXNlcixcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR2xvYmFsVXNlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFkaWFsb2c/LnBheWxvYWQpIHJldHVybjtcbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZnVsbEFjY2Vzc1VzZXJzOiBwcmV2LmZ1bGxBY2Nlc3NVc2Vycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQudXNlckluZGV4LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhc1NhbWVJblZhbHVlID0gKHZhbHVlczogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcsIGlnbm9yZUluZGV4PzogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZXMuc29tZSgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpZ25vcmVJbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ID09PSBpZ25vcmVJbmRleCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbS50cmltKCkgPT09IG5vcm1hbGl6ZWRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFZhbHVlVG9Jbkxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3TGlzdFZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGhhc1NhbWVJblZhbHVlKHJ1bGVWYWx1ZXMsIHZhbHVlKSkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0LUg0LfQvdCw0YfQtdC90LjQtSDRg9C20LUg0LTQvtCx0LDQstC70LXQvdC+XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT4gWy4uLnByZXYsIHZhbHVlXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVmFsdWVGcm9tSW5MaXN0ID0gKGluZGV4Rm9yUmVtb3ZlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggIT09IGluZGV4Rm9yUmVtb3ZlKSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVmFsdWVJbkxpc3QgPSAoaW5kZXhGb3JVcGRhdGU6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSB2YWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAmJiBoYXNTYW1lSW5WYWx1ZShydWxlVmFsdWVzLCBuZXh0VmFsdWUsIGluZGV4Rm9yVXBkYXRlKSkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0LUg0LfQvdCw0YfQtdC90LjQtSDRg9C20LUg0LTQvtCx0LDQstC70LXQvdC+XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYubWFwKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ID09PSBpbmRleEZvclVwZGF0ZSA/IHZhbHVlIDogaXRlbSkpLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBkb3dubG9hZEpzb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCA0KV0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLmRvd25sb2FkID0gXCJhY2Nlc3MtY29uZmlnLmpzb25cIjtcbiAgICAgICAgbGluay5jbGljaygpO1xuXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBsb2FkSnNvbiA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdO1xuXG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShTdHJpbmcocmVhZGVyLnJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVMb2FkZWRDb25maWcocGFyc2VkKTtcblxuICAgICAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKCgpID0+IG5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi0J3QtdCy0LXRgNC90LDRjyDRgdGC0YDRg9C60YLRg9GA0LAgSlNPTlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgY29weUdyb3VwSWQgPSBhc3luYyAoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZD8ud3JpdGVUZXh0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZ3JvdXBJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBvcmFyeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnZhbHVlID0gZ3JvdXBJZDtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCJJRCDRgdC60L7Qv9C40YDQvtCy0LDQvVwiKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC60L7Qv9C40YDQvtCy0LDRgtGMIElEXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcGx5Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBuZXh0Q29uZmlnID0gY2xvbmVBY2Nlc3NDb25maWcoY29uZmlnKTtcblxuICAgICAgICBwcm9wcy5vbkNoYW5nZShuZXh0Q29uZmlnKTtcbiAgICAgICAgc2V0U2F2ZWRDb25maWcobmV4dENvbmZpZyk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGljZShcItCd0LDRgdGC0YDQvtC50LrQuCDQv9GA0LjQvNC10L3QtdC90YtcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbmNlbENvbmZpZ0NoYW5nZXMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHNldENvbmZpZyhjbG9uZUFjY2Vzc0NvbmZpZyhzYXZlZENvbmZpZykpO1xuICAgICAgICBzZXRTZWxlY3RlZElkKEdMT0JBTF9BQ0NFU1NfSUQpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgICAgIHJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGljZShcItCY0LfQvNC10L3QtdC90LjRjyDQvtGC0LzQtdC90LXQvdGLXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFdoZXJlRm9yQ3VycmVudFVzZXIgPSAoXG4gICAgICAgIHVzZXJHcm91cHM6IHN0cmluZ1tdLFxuICAgICAgICB1c2VySWRzOiBzdHJpbmdbXSA9IFtdLFxuICAgICk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0Z1bGxBY2Nlc3MgPVxuICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMuc29tZSgoZ3JvdXApID0+IHVzZXJHcm91cHMuaW5jbHVkZXMoZ3JvdXApKSB8fFxuICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5zb21lKCh1c2VySWQpID0+IHVzZXJJZHMuaW5jbHVkZXModXNlcklkKSk7XG5cbiAgICAgICAgaWYgKGhhc0Z1bGxBY2Nlc3MpIHJldHVybiBcIjE9MVwiO1xuXG4gICAgICAgIGNvbnN0IGFsbG93ZWRSdWxlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBjb25maWcucnVsZXMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNSdWxlQWNjZXNzID1cbiAgICAgICAgICAgICAgICAgICAgcnVsZS5ncm91cHMuc29tZSgoZ3JvdXApID0+IHVzZXJHcm91cHMuaW5jbHVkZXMoZ3JvdXApKSB8fFxuICAgICAgICAgICAgICAgICAgICBydWxlLnVzZXJzLnNvbWUoKHVzZXJJZCkgPT4gdXNlcklkcy5pbmNsdWRlcyh1c2VySWQpKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNSdWxlQWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRSdWxlcy5wdXNoKGAoJHtidWlsZFJ1bGVXaGVyZShmaWVsZC5maWVsZCwgcnVsZSl9KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWxsb3dlZFJ1bGVzLmxlbmd0aCA+IDAgPyBhbGxvd2VkUnVsZXMuam9pbihcIiBPUiBcIikgOiBcIjE9MFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmV2aWV3RmllbGROYW1lID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkRmllbGRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1GaWVsZC50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRGaWVsZD8uZmllbGQgPz8gXCJcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUnVsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdGaWVsZE5hbWUgPSBnZXRQcmV2aWV3RmllbGROYW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlTW9kZVJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZXJhdG9yVGFicyBmb3VyVGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJlcXVhbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwicmFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwiaW5jbHVkZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmNsdWRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImxpa2VcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVPcGVyYXRvcihcImxpa2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlrZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5vdFRvZ2dsZUJ1dHRvbiAke3J1bGVJc05vdCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlSXNOb3QoKHZhbHVlKSA9PiAhdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQmNC90LLQtdGA0YLQuNGA0L7QstCw0YLRjCDRg9GB0LvQvtCy0LjQtVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5PVFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsocnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgfHwgcnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JfQvdCw0YfQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cnVsZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSdWxlVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cnVsZU9wZXJhdG9yID09PSBcInJhbmdlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b0lucHV0R3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RglwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVGcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UnVsZUZyb20oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JTQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJ1bGVUbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3J1bGVPcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluTGlzdEFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5BZGRSb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCX0L3QsNGH0LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TGlzdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0xpc3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIiBvbkNsaWNrPXthZGRWYWx1ZVRvSW5MaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtydWxlVmFsdWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5TWluaVwiPtCh0L/QuNGB0L7QuiDQv9GD0YHRgjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5WYWx1ZVJvd1wiIGtleT17YCR7dmFsdWV9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQl9C90LDRh9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVWYWx1ZUluTGlzdChpbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVmFsdWVGcm9tSW5MaXN0KGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cHJldmlld0ZpZWxkTmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1doZXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCY0YLQvtCz0L7QstC+0LUg0YPRgdC70L7QstC40LU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcFJ1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYnVpbGRSdWxlV2hlcmUocHJldmlld0ZpZWxkTmFtZSwgdGVtcFJ1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3ByZXZpZXdGaWVsZE5hbWV9IC4uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdBcmVhXCI+XG4gICAgICAgICAgICB7bm90aWNlICYmIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ05vdGljZVwiPntub3RpY2V9PC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzQ29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzQ29udHJvbENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc0NvbnRyb2xUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSA/PyBcItCU0L7RgdGC0YPQvyDQuiDQtNCw0L3QvdGL0LxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb24gPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQndCw0YHRgtGA0L7QudGC0LUg0LPRgNGD0L/Qv9GLINC4INGD0YHQu9C+0LLQuNGPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0L7QsdGK0LXQutGC0L7QslwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nlc3NTZXR0aW5nc0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY2Vzc1NldHRpbmdzQnV0dG9uVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5idXR0b25MYWJlbCA/PyBcItCd0LDRgdGC0YDQvtC50LrQsCDQtNC+0YHRgtGD0L/QsFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RUaXRsZVwiPtCf0YDQsNCy0LjQu9CwINC00L7RgdGC0YPQv9CwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdFN1YnRpdGxlXCI+SlNPTiBhY2Nlc3MgY29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGVTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQv9C+INC90LDQt9Cy0LDQvdC40Y4g0LjQu9C4INC/0L7Qu9GOXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRGaWVsZFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oR0xPQkFMX0FDQ0VTU19JRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbVRpdGxlXCI+0J/QvtC70L3Ri9C5INC00L7RgdGC0YPQvzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvbmRpdGlvblwiPtCj0YHQu9C+0LLQuNC1OiA8Yj4xPTE8L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubGVuZ3RofSDQs9GA0YPQv9C/IMK3IHtjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmxlbmd0aH0g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRGaWVsZHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IGl0ZW0uaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdExlZnRJdGVtKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtVGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ29uZGl0aW9uXCI+0JDRgtGA0LjQsdGD0YI6IDxiPntpdGVtLmZpZWxkfTwvYj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvdW50XCI+e2l0ZW0ucnVsZXMubGVuZ3RofSDQv9GA0LDQstC40Ls8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkV2FybmluZ3NDb3VudChpdGVtKSA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbU1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhcm5pbmdQaWxsXCI+e2dldEZpZWxkV2FybmluZ3NDb3VudChpdGVtKX0gd2FybmluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZEZpZWxkQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZEZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsQm90dG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwianNvbkJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LjRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSnNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqc29uQnV0dG9uXCIgb25DbGljaz17ZG93bmxvYWRKc29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LrQsNGH0LDRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFJpZ2h0UGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUZ1bGxJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0VGl0bGVcIj7Qn9C+0LvQvdGL0Lkg0LTQvtGB0YLRg9C/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0RmllbGRcIj7Qo9GB0LvQvtCy0LjQtTogMT0xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5BZGRHbG9iYWxHcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCT0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5BZGRHbG9iYWxVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQs9GA0YPQv9C/0Ysg0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0R3JvdXBTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc0FyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsCDQtdGJ0ZEg0L3QtSDQtNC+0LHQsNCy0LvQtdC90YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTWF0Y2hlc1NlYXJjaChncm91cCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdsb2JhbEdyb3VwS2V5KGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwUm93ICR7c2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdENoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhncm91cEtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUdyb3VwU2VsZWN0KGdyb3VwS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJHcm91cElkZW50aXR5KGdyb3VwKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0R2xvYmFsR3JvdXAoaW5kZXgsIGdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVHbG9iYWxHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzRW50aXR5U2VjdGlvblRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNBcmVhIHVzZXJzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LAg0LXRidGRINC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5mdWxsQWNjZXNzVXNlcnMubWFwKCh1c2VySWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyTWF0Y2hlc1NlYXJjaCh1c2VySWQpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwUm93IHVzZXJSb3dcIiBrZXk9e2Ake3VzZXJJZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJVc2VySWRlbnRpdHkodXNlcklkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0R2xvYmFsVXNlcihpbmRleCwgdXNlcklkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR2xvYmFsVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogeyB1c2VySW5kZXg6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAhc2VsZWN0ZWRGaWVsZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPkVtcHR5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRUaXRsZVwiPntzZWxlY3RlZEZpZWxkLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JDRgtGA0LjQsdGD0YI6IHtzZWxlY3RlZEZpZWxkLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb25CdXR0b25cIiBvbkNsaWNrPXtvcGVuRWRpdEZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyh7IHR5cGU6IFwiZGVsZXRlRmllbGRcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQs9GA0YPQv9C/0Ysg0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQstC90YPRgtGA0Lgg0L/RgNCw0LLQuNC7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VwU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRHcm91cFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWVsZC5ydWxlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LDQstC40LvQsCDQtdGJ0ZEg0L3QtSDQtNC+0LHQsNCy0LvQtdC90YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJ1bGVDYXJkICR7c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRSdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cnVsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVSdWxlU2VsZWN0KHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YHQu9C+0LLQuNC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG9wZXJhdG9yUGlsbCBvcGVyYXRvci0ke3J1bGUub3BlcmF0b3J9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5pc05vdCA/IGBOT1QgJHtydWxlLm9wZXJhdG9yfWAgOiBydWxlLm9wZXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlVmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1aWxkUnVsZVdoZXJlKHNlbGVjdGVkRmllbGQuZmllbGQsIHJ1bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRSdWxlV2FybmluZ3Moc2VsZWN0ZWRGaWVsZCwgcnVsZSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZVdhcm5pbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0UnVsZVdhcm5pbmdzKHNlbGVjdGVkRmllbGQsIHJ1bGUpLm1hcCgod2FybmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17d2FybmluZ30+e3dhcm5pbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuQWRkR3JvdXAocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCz0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5BZGRVc2VyKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0UnVsZShydWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlUnVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5ncm91cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlNaW5pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTWF0Y2hlc1NlYXJjaChncm91cCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cExvY2tlZCA9IHNlbGVjdGVkUnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cFNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWQgfHwgc2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXBSb3cgJHtpc0dyb3VwU2VsZWN0ZWQgPyBcInNlbGVjdGVkR3JvdXBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAke2lzR3JvdXBMb2NrZWQgPyBcImxvY2tlZEdyb3VwXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzR3JvdXBTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzR3JvdXBMb2NrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JPRgNGD0L/Qv9CwINCy0YvQsdGA0LDQvdCwINCy0LzQtdGB0YLQtSDRgSDQv9GA0LDQstC40LvQvtC8XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXBTZWxlY3QoZ3JvdXBLZXksIGlzR3JvdXBMb2NrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdyb3VwSWRlbnRpdHkoZ3JvdXApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdEdyb3VwKHJ1bGUuaWQsIGluZGV4LCBncm91cClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzQXJlYSBydWxlVXNlcnNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS51c2Vycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eU1pbmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUudXNlcnMubWFwKCh1c2VySWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlck1hdGNoZXNTZWFyY2godXNlcklkKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwUm93IHVzZXJSb3dcIiBrZXk9e2Ake3VzZXJJZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVXNlcklkZW50aXR5KHVzZXJJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRVc2VyKHJ1bGUuaWQsIGluZGV4LCB1c2VySWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRSdWxlQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZFJ1bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINC/0YDQsNCy0LjQu9C+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbFNldHRpbmdBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tQWNjZXNzUGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VsZWN0aW9uQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkICE9PSBHTE9CQUxfQUNDRVNTX0lEICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTZWxlY3RlZFJ1bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkUnVsZUlkcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMIHtzZWxlY3RlZFJ1bGVJZHMubGVuZ3RofSDQv9GA0LDQstC40LtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlU2VsZWN0ZWRHcm91cHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEdyb3Vwc0NvdW50ID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywge3NlbGVjdGVkR3JvdXBzQ291bnR9INCz0YDRg9C/0L9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNhdmVTdGF0ZSAke2hhc1Vuc2F2ZWRDaGFuZ2VzID8gXCJjaGFuZ2VkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1Vuc2F2ZWRDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQldGB0YLRjCDQvdC10YHQvtGF0YDQsNC90ZHQvdC90YvQtSDQuNC30LzQtdC90LXQvdC40Y9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0JjQt9C80LXQvdC10L3QuNC5INC90LXRglwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2hlcmVUb2dnbGVCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dXaGVyZVByZXZpZXcoKHZhbHVlKSA9PiAhdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93V2hlcmVQcmV2aWV3ID8gXCLQodC60YDRi9GC0YwgV0hFUkVcIiA6IFwi0J/QvtC60LDQt9Cw0YLRjCBXSEVSRVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93V2hlcmVQcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tV2hlcmVQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21XaGVyZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QmNGC0L7Qs9C+0LLRi9C5IFdIRVJFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjb3B5Q29uZmlnV2hlcmVQcmV2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LrQvtC/0LjRgNC+0LLQsNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57YnVpbGRDb25maWdXaGVyZVByZXZpZXcoKX08L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvYmFsU2V0dGluZ0J1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5jZWxDb25maWdCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbENvbmZpZ0NoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNVbnNhdmVkQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGx5Q29uZmlnQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthcHBseUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1Vuc2F2ZWRDaGFuZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNC80LXQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtkaWFsb2cgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRGaWVsZFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDRgdGC0L7Qu9Cx0LXRhlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1UaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7Qu9C1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1GaWVsZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25hbFJ1bGVCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uYWxSdWxlVGl0bGVcIj7Qn9C10YDQstC+0LUg0L/RgNCw0LLQuNC70L48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUnVsZUZvcm0oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlRmllbGR9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+0KPQtNCw0LvQuNGC0Ywg0YHRgtC+0LvQsdC10YY/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YHQtSDQv9GA0LDQstC40LvQsCDQstC90YPRgtGA0Lgg0L3QtdCz0L4g0YLQvtC20LUg0LHRg9C00YPRgiDRg9C00LDQu9C10L3Riy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlRmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIiB8fCBkaWFsb2cudHlwZSA9PT0gXCJlZGl0UnVsZVwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/RgNCw0LLQuNC70L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC/0YDQsNCy0LjQu9C+XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUnVsZUZvcm0oKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZVJ1bGV9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZVJ1bGVcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj7Qo9C00LDQu9C40YLRjCDQv9GA0LDQstC40LvQvj88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9GLINC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQstC90YPRgtGA0Lgg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsCDRgtC+0LbQtSDQsdGD0LTRg9GCINGD0LTQsNC70LXQvdGLLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVSdWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRHcm91cFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0R3JvdXBcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0LPRgNGD0L/Qv9GDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LPRgNGD0L/Qv9GDXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQk9GA0YPQv9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Hcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybUdyb3VwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUdyb3VwfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHcm91cFwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/Rgz88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9CwINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0YLQvtC70YzQutC+INC40Lcg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHbG9iYWxHcm91cFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCT0YDRg9C/0L/QsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtR3JvdXAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlR2xvYmFsR3JvdXB9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUdsb2JhbEdyb3VwXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/RgyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3RgtCwINCz0YDRg9C/0L/QsCDQsdC+0LvRjNGI0LUg0L3QtSDQsdGD0LTQtdGCINC/0L7Qu9GD0YfQsNGC0Ywg0LTQvtGB0YLRg9C/INC60L4g0LLRgdC10Lwg0LTQsNC90L3Ri9C8LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZUdsb2JhbEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkVXNlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0VXNlclwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZFVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQlNC+0LHQsNCy0LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklEINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70LggdXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Vc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVXNlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlVXNlcn0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlVXNlclwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjz88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0YPQtNC10YIg0YPQtNCw0LvRkdC9INGC0L7Qu9GM0LrQviDQuNC3INGN0YLQvtCz0L4g0L/RgNCw0LLQuNC70LAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVVc2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRHbG9iYWxVc2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHbG9iYWxVc2VyXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkR2xvYmFsVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSUQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1Vc2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVHbG9iYWxVc2VyfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHbG9iYWxVc2VyXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0L7Qu9GM0YjQtSDQvdC1INCx0YPQtNC10YIg0L/QvtC70YPRh9Cw0YLRjCDQtNC+0YHRgtGD0L8g0LrQviDQstGB0LXQvCDQtNCw0L3QvdGL0LwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVHbG9iYWxVc2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBJbW11dGFibGUsIEFsbERhdGFTb3VyY2VUeXBlcywgdHlwZSBVc2VEYXRhU291cmNlIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHR5cGUgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIjtcbmltcG9ydCBBY2Nlc3NTZXR0aW5nLCB7IGRlZmF1bHRBY2Nlc3NDb25maWcsIHR5cGUgQWNjZXNzQ29uZmlnIH0gZnJvbSBcIi4vQWNjZXNzU2V0dGluZy9BY2Nlc3NTZXR0aW5nXCI7XG5pbXBvcnQgXCIuL3NldHRpbmcuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+KSB7XG4gICAgY29uc3Qgc3RvcmVkQWNjZXNzID0gcHJvcHMuY29uZmlnPy5hY2Nlc3NDb25maWc7XG4gICAgY29uc3QgYWNjZXNzVmFsdWU6IEFjY2Vzc0NvbmZpZyA9IHN0b3JlZEFjY2Vzc1xuICAgICAgICA/IHR5cGVvZiBzdG9yZWRBY2Nlc3MuYXNNdXRhYmxlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3RvcmVkQWNjZXNzLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICAgICAgICAgIDogc3RvcmVkQWNjZXNzXG4gICAgICAgIDogZGVmYXVsdEFjY2Vzc0NvbmZpZztcblxuICAgIGNvbnN0IGhhbmRsZU1haW5MYXllckNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKTogdm9pZCA9PiB7XG4gICAgICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiBwcm9wcy5pZCwgdXNlRGF0YVNvdXJjZXMgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUFjY2Vzc0NoYW5nZSA9IChhY2Nlc3NDb25maWc6IEFjY2Vzc0NvbmZpZyk6IHZvaWQgPT4ge1xuICAgICAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KFwiYWNjZXNzQ29uZmlnXCIsIEltbXV0YWJsZShhY2Nlc3NDb25maWcpKSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmdcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtYWluLWxheWVyLXNldHRpbmctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uLXRpdGxlXCI+0J7RgdC90L7QstC90L7QuSDRgdC70L7QuSDQtNCw0L3QvdGL0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbi1kZXNjcmlwdGlvblwiPtCS0YvQsdC10YDQuNGC0LUg0L7RgdC90L7QstC90L7QuSBGZWF0dXJlTGF5ZXIg0LTQu9GPINC/0L7RgNGC0LDQu9CwLjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1sYXllci1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXM9e0ltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3Byb3BzLnVzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1haW5MYXllckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBhY2Nlc3Mtc2V0dGluZy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEFjY2Vzc1NldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY2Vzc1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQWNjZXNzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCd0LDRgdGC0YDQvtC50LrQuCDQtNC+0YHRgtGD0L/QsFwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi0J3QsNGB0YLRgNC+0LnRgtC1INC/0L7Qu9C90YvQuSDQuCDQvtCz0YDQsNC90LjRh9C10L3QvdGL0Lkg0LTQvtGB0YLRg9C/INC00LvRjyDQs9GA0YPQv9C/INC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5IFBvcnRhbC5cIlxuICAgICAgICAgICAgICAgICAgICBidXR0b25MYWJlbD1cItCe0YLQutGA0YvRgtGMINC90LDRgdGC0YDQvtC50LrQuCDQtNC+0YHRgtGD0L/QsFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=