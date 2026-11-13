System.register(["jimu-core","jimu-ui","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.css"],"names":[],"mappings":"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","sourcesContent":[".settingArea {\n    width: 100%;\n    padding: 0;\n    color: inherit;\n    font-family: inherit;\n}\n\n.settingsContent {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n\n.sourceSelectorCard {\n    padding: 12px;\n}\n\n.panelCardLabel {\n    margin-bottom: 9px;\n    color: var(--dark-800, rgba(255, 255, 255, 0.72));\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n}\n\n.sourceSelectorCard>div:last-child {\n    width: 100%;\n}\n\n.accessControlCard {\n    padding: 0;\n}\n\n.accessControlHeader {\n    margin-bottom: 12px;\n}\n\n.accessControlTitle {\n    margin-bottom: 3px;\n    color: inherit;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n}\n\n.accessControlDescription {\n    color: var(--dark-800, rgba(255, 255, 255, 0.66));\n    font-size: 12px;\n    line-height: 17px;\n}\n\n.accessSettingsButton {\n    width: 100%;\n    min-height: 40px;\n    padding: 8px 14px;\n    border: 1px solid var(--sys-color-primary-main, #00a9c0);\n    border-radius: 3px;\n    background: var(--sys-color-primary-main, #00a9c0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n    box-shadow: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 18px;\n    text-align: center;\n    transition:\n        background-color 0.15s ease,\n        border-color 0.15s ease,\n        box-shadow 0.15s ease;\n}\n\n.accessSettingsButton:hover,\n.accessSettingsButton:focus-visible {\n    border-color: var(--sys-color-primary-dark, #008ca0);\n    background: var(--sys-color-primary-dark, #008ca0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n}\n\n.accessSettingsButton:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 2px color-mix(in srgb, var(--sys-color-primary-main, #00a9c0) 28%, transparent);\n}\n\n.accessSettingsButtonText {\n    width: 100%;\n    line-height: 18px;\n    text-align: center;\n}\n\n.sourceSelectorCard button {\n    border-radius: 4px;\n}\n\n.modalArea {\n    color: #f3f4f6;\n    font-family: Arial, sans-serif;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modalBlock {\n    width: min(1200px, calc(100vw - 32px));\n    height: min(800px, calc(100vh - 32px));\n    background: #1f222b;\n    border: 1px solid #343a49;\n    border-radius: 10px;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n    background: #252c41;\n    padding: 14px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    min-height: 0;\n}\n\n.modalListHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.modalListTitle {\n    font-size: 17px;\n    font-weight: 700;\n}\n\n.modalListSubtitle {\n    margin-top: 3px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.fieldList {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    min-height: 0;\n}\n\n.modalItem {\n    padding: 12px 14px;\n    border-radius: 8px;\n    border: 1px solid #77839f;\n    background: #293148;\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n    background: #33405f;\n    border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.modalItemInfo {\n    margin-top: 5px;\n    font-size: 13px;\n    color: #b8bfd1;\n}\n\n.modalItemInfo span {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.addFieldButton {\n    height: 64px;\n    border-radius: 8px;\n    border: 1px dashed #9ca8c4;\n    background: transparent;\n    color: #ffffff;\n    font-size: 34px;\n    cursor: pointer;\n}\n\n.addFieldButton:hover {\n    background: #303a56;\n}\n\n.modalBottomActions {\n    margin-top: auto;\n    display: grid;\n    gap: 8px;\n}\n\n.jsonButton {\n    height: 38px;\n    border-radius: 8px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #f3f4f6;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n}\n\n.jsonButton:hover {\n    background: #303a56;\n}\n\n.jsonButton input {\n    display: none;\n}\n\n.modalRightPanel {\n    min-width: 0;\n    min-height: 0;\n    background: #20232c;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.modalItemFullInfo {\n    flex: 1;\n    min-height: 0;\n    padding: 22px;\n    background: #20232c;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.rightHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n    padding-bottom: 16px;\n    border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n    font-size: 24px;\n    font-weight: 800;\n}\n\n.rightField {\n    margin-top: 6px;\n    color: #aeb6ca;\n    font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.rightHeaderActions,\n.ruleActions {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.iconButton,\n.miniIconButton {\n    width: 34px;\n    height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n}\n\n.miniIconButton {\n    width: 26px;\n    height: 26px;\n    font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n    background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n    border-color: #8f4f5b;\n    color: #ffb8c1;\n}\n\n.rulesArea {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.ruleCard {\n    padding: 14px;\n    border-radius: 10px;\n    background: #262b36;\n    border: 1px solid #3d465b;\n    transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n    border-color: #9baee0;\n    background: #2c3448;\n}\n\n.ruleHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.ruleInfo {\n    flex: 1;\n    min-width: 0;\n}\n\n.ruleLabel {\n    color: #aeb6ca;\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.ruleValue {\n    font-size: 15px;\n    font-weight: 700;\n    color: #ffffff;\n    overflow-wrap: anywhere;\n}\n\n.ruleActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n    opacity: 1;\n}\n\n.smallButton {\n    min-height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n    padding: 0 10px;\n}\n\n.smallButton:hover {\n    background: #3b4868;\n}\n\n.groupsArea {\n    margin-top: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.usersArea {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.ruleUsersArea {\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px dashed #44506a;\n}\n\n.accessEntitySectionTitle {\n    margin-top: 20px;\n    color: #aeb6ca;\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n}\n\n.groupRow {\n    background: #1d2230;\n    border: 1px solid #384258;\n    border-radius: 8px;\n    padding: 8px 10px;\n    color: #d9deea;\n    font-size: 13px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 12px;\n    transition: 0.2s;\n}\n\n.groupRow.userRow {\n    grid-template-columns: 1fr auto;\n    border-color: #3e526f;\n    background: #1d2634;\n}\n\n.userIdentity .groupIdCopyButton {\n    color: #9fb6df;\n}\n\n.groupRow.selectedGroup {\n    border-color: #9baee0;\n    background: #273149;\n}\n\n.groupRow span {\n    overflow-wrap: anywhere;\n}\n\n.groupActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n    opacity: 1;\n}\n\n.addRuleButton {\n    height: 44px;\n    border-radius: 9px;\n    border: 1px dashed #78849f;\n    background: transparent;\n    color: white;\n    cursor: pointer;\n}\n\n.addRuleButton:hover {\n    background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.emptyRules {\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px dashed #555f76;\n    text-align: center;\n}\n\n.dialogArea {\n    position: fixed;\n    inset: 0;\n    z-index: 10000;\n    background: rgba(0, 0, 0, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dialogBlock {\n    width: 520px;\n    max-width: calc(100vw - 32px);\n    max-height: calc(100vh - 32px);\n    overflow: auto;\n    background: #252b38;\n    border: 1px solid #4c566c;\n    border-radius: 12px;\n    padding: 18px;\n    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n    font-size: 18px;\n    font-weight: 800;\n    margin-bottom: 12px;\n}\n\n.dialogText {\n    color: #c2c8d5;\n    margin-bottom: 16px;\n}\n\n.dialogInput {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: white;\n    outline: none;\n}\n\n.dialogInput:focus {\n    border-color: #9baee0;\n}\n\n.dialogActions {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n    margin-top: 10px;\n}\n\n.dialogActions button {\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #30384a;\n    color: white;\n    cursor: pointer;\n}\n\n.dialogActions button:hover {\n    background: #3b465d;\n}\n\n.dangerButton {\n    border-color: #985565 !important;\n    background: #4a2430 !important;\n    color: #ffc4cc !important;\n}\n\n.operatorTabs {\n    display: grid;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n    background: #35415b;\n    border-color: #9baee0;\n    color: #ffffff;\n}\n\n.twoInputGrid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.inListArea {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.inAddRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.inValueRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.previewWhere {\n    margin-top: 12px;\n    padding: 10px 12px;\n    border-radius: 8px;\n    border: 1px solid #465169;\n    background: #1e2430;\n    color: #aeb6ca;\n    font-size: 13px;\n}\n\n.previewWhere span {\n    display: block;\n    margin-top: 6px;\n    color: #ffffff;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n    margin-top: 12px;\n    padding: 12px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #202637;\n}\n\n.optionalRuleTitle {\n    margin-bottom: 10px;\n    font-size: 13px;\n    color: #c6ccda;\n}\n\n.bulkActionBar {\n    min-height: 42px;\n    padding: 8px 10px;\n    border-radius: 9px;\n    border: 1px solid #59657d;\n    background: #202637;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    color: #d8deea;\n    font-size: 13px;\n}\n\n.dangerButtonSmall {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #985565;\n    background: #4a2430;\n    color: #ffc4cc;\n    cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n    background: #633040;\n}\n\n.selectCheckbox {\n    width: 16px;\n    height: 16px;\n    accent-color: #9baee0;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.groupIdentity {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n.groupName {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.groupId {\n    color: #aeb6ca;\n    font-size: 12px;\n    font-family: Consolas, \"Courier New\", monospace;\n    overflow-wrap: anywhere;\n}\n\n.groupMembers {\n    margin-top: 2px;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n\n.groupIdCopyButton {\n    width: fit-content;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: #aeb6ca;\n    font-size: 12px;\n    line-height: 1.35;\n    font-family: Consolas, \"Courier New\", monospace;\n    text-align: left;\n    overflow-wrap: anywhere;\n    cursor: pointer;\n    transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n    color: #ffffff;\n    text-decoration: underline;\n}\n\n.settingNotice {\n    position: fixed;\n    top: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 11000;\n    min-width: 210px;\n    padding: 11px 18px;\n    border-radius: 9px;\n    border: 1px solid #7185ae;\n    background: #273149;\n    color: #ffffff;\n    font-size: 13px;\n    text-align: center;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n    pointer-events: none;\n}\n\n.globalSettingActions {\n    flex-shrink: 0;\n    min-height: 66px;\n    padding: 13px 22px;\n    border-top: 1px solid #3a4050;\n    background: #20232c;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.saveState {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.saveState.changed {\n    color: #f1c27d;\n}\n\n.globalSettingButtons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n    height: 38px;\n    padding: 0 18px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 13px;\n    transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n}\n\n.applyConfigButton {\n    border: 1px solid #728ac3;\n    background: #385083;\n    color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n    background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n    background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n    opacity: 0.45;\n    cursor: default;\n}\n.staticSelectionBar {\n    flex-shrink: 0;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    min-height: 46px;\n    margin-bottom: 2px;\n    backdrop-filter: blur(6px);\n}\n\n.staticSelectionBar.emptySelection {\n    border-color: #3b4356;\n    background: #1f2532;\n    color: #8790a5;\n}\n\n.staticSelectionBar b {\n    color: #ffffff;\n}\n\n.staticSelectionBar.emptySelection b {\n    color: #aeb6ca;\n}\n\n.combinedSelectionBar {\n    align-items: center;\n}\n\n.selectionCounters,\n.selectionActions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.selectionCounters span {\n    white-space: nowrap;\n}\n\n.dangerButtonSmall:disabled {\n    opacity: 0.42;\n    cursor: default;\n    background: #2a2230;\n    border-color: #554350;\n    color: #9a8590;\n}\n\n.dangerButtonSmall:hover:disabled {\n    background: #2a2230;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n}\n\n.bottomSelectionActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.bottomAccessPanel .saveState {\n    white-space: nowrap;\n}\n\n.selectCheckbox {\n    appearance: none;\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    border: 1px solid #697795;\n    background: #1e2430;\n    cursor: pointer;\n    flex-shrink: 0;\n    display: inline-grid;\n    place-content: center;\n    transition: 0.18s ease;\n}\n\n.selectCheckbox:hover:not(:disabled) {\n    border-color: #a9b9e0;\n    background: #273149;\n}\n\n.selectCheckbox:checked {\n    border-color: #9baee0;\n    background: #3d527d;\n}\n\n.selectCheckbox:checked::after {\n    content: \"\";\n    width: 9px;\n    height: 5px;\n    border-left: 2px solid #ffffff;\n    border-bottom: 2px solid #ffffff;\n    transform: rotate(-45deg) translate(1px, -1px);\n}\n\n.selectCheckbox:disabled {\n    cursor: default;\n    opacity: 0.9;\n    border-color: #7484a8;\n    background: #34476d;\n}\n\n.groupRow.lockedGroup {\n    border-color: #6e7fa6;\n    background: #29344c;\n}\n\n.groupRow.lockedGroup .groupActions {\n    opacity: 0.45;\n}\n\n@media (max-width: 820px) {\n    .globalSettingActions {\n        align-items: flex-start;\n        flex-direction: column;\n    }\n\n    .globalSettingButtons {\n        width: 100%;\n        justify-content: flex-end;\n    }\n}\n\n.iconButton,\n.miniIconButton {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    line-height: 1;\n}\n\n.buttonSvgIcon {\n    width: 16px;\n    height: 16px;\n    display: block;\n    fill: currentColor;\n    pointer-events: none;\n}\n\n.miniIconButton .buttonSvgIcon {\n    width: 13px;\n    height: 13px;\n}\n\n.iconButton:not(.danger),\n.miniIconButton:not(.danger) {\n    color: #d8deea;\n}\n\n.sideSearchInput,\n.groupSearchInput {\n    width: 100%;\n    min-height: 36px;\n    padding: 0 11px;\n    border-radius: 8px;\n    border: 1px solid #4b5670;\n    background: #1d2330;\n    color: #ffffff;\n    outline: none;\n    font-size: 13px;\n}\n\n.sideSearchInput:focus,\n.groupSearchInput:focus {\n    border-color: #9baee0;\n}\n\n.groupSearchInput {\n    margin-top: 14px;\n}\n\n.modalItemMeta {\n    margin-top: 9px;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n    flex-wrap: wrap;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n.warningPill {\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #856a35;\n    background: rgba(132, 93, 25, 0.22);\n    color: #f2c678;\n}\n\n.operatorPill {\n    margin-left: 8px;\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    font-size: 11px;\n    text-transform: uppercase;\n}\n\n.operator-equal { border-color: #6e83b8; color: #c9d7ff; }\n.operator-range { border-color: #6f9070; color: #c8f2c9; }\n.operator-include { border-color: #8c7ab8; color: #e0d2ff; }\n.operator-like { border-color: #9a7a5a; color: #ffd7b5; }\n\n.ruleWarnings {\n    margin-top: 8px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n}\n\n.ruleWarnings span {\n    padding: 3px 8px;\n    border-radius: 999px;\n    border: 1px solid #82603b;\n    background: rgba(130, 96, 59, 0.2);\n    color: #f2c678;\n    font-size: 12px;\n    font-weight: 600;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n}\n\n.whereToggleButton {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.whereToggleButton:hover {\n    background: #303a56;\n}\n\n.bottomWherePreview {\n    position: absolute;\n    left: 22px;\n    right: 22px;\n    bottom: 74px;\n    max-height: 155px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #171c27;\n    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.34);\n    overflow: hidden;\n}\n\n.bottomWhereHeader {\n    min-height: 36px;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid #30394d;\n    color: #c6ccda;\n    font-size: 13px;\n    font-weight: 700;\n}\n\n.bottomWhereHeader button {\n    min-height: 26px;\n    padding: 0 9px;\n    border-radius: 7px;\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.bottomWhereHeader button:hover {\n    background: #3b4868;\n}\n\n.bottomWherePreview pre {\n    margin: 0;\n    padding: 12px;\n    max-height: 118px;\n    overflow: auto;\n    color: #ffffff;\n    font-size: 12px;\n    line-height: 1.45;\n    white-space: pre-wrap;\n    overflow-wrap: anywhere;\n    font-family: Consolas, \"Courier New\", monospace;\n}\n\n.modalRightPanel {\n    position: relative;\n}\n\n.joinOperatorControl {\n    min-height: 32px;\n    padding: 4px;\n    border: 1px solid #59657d;\n    border-radius: 8px;\n    background: #1e2430;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.joinOperatorControl span {\n    padding: 0 7px;\n    white-space: nowrap;\n}\n\n.joinOperatorControl button {\n    height: 24px;\n    padding: 0 9px;\n    border-radius: 6px;\n    border: 1px solid transparent;\n    background: transparent;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 700;\n}\n\n.joinOperatorControl button:hover,\n.joinOperatorControl button.active {\n    border-color: #9baee0;\n    background: #35415b;\n    color: #ffffff;\n}\n\n.modalItemInfoLine {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.modalItemCondition {\n    min-width: 0;\n    color: #aeb6ca !important;\n    font-weight: 500 !important;\n    overflow-wrap: anywhere;\n}\n\n.modalItemCondition b {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.modalItemCount {\n    flex-shrink: 0;\n    color: #8fa3cf !important;\n    font-size: 12px;\n    font-weight: 700;\n    white-space: normal;\n    text-align: right;\n}\n\n.groupIdTitleLine {\n    min-width: 0;\n    display: flex;\n    align-items: baseline;\n    gap: 6px;\n    flex-wrap: wrap;\n}\n\n.groupTitleAfterId {\n    min-width: 0;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.ruleModeRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: start;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.ruleModeRow .operatorTabs {\n    margin-bottom: 0;\n}\n\n.notToggleButton {\n    height: 36px;\n    min-width: 58px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #6d5d76;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 0.04em;\n    transition: 0.18s ease;\n}\n\n.notToggleButton:hover {\n    border-color: #c59be0;\n    background: #2b2638;\n    color: #ffffff;\n}\n\n.notToggleButton.active {\n    border-color: #d1a7ef;\n    background: #49345f;\n    color: #ffffff;\n    box-shadow: 0 0 0 1px rgba(209, 167, 239, 0.18) inset;\n}\n\n@media (max-width: 620px) {\n    .ruleModeRow {\n        grid-template-columns: 1fr;\n    }\n\n    .notToggleButton {\n        width: 100%;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/authority/src/setting/setting.css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/authority/src/setting/setting.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.dashboard-template-setting,
.dashboard-template-setting * {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.dashboard-template-setting {
  width: 100%;
  min-height: 100%;
  padding: 16px;
  background: #101519;
  color: #eaf2f7;
  line-height: 1.5;
}

.setting-section {
  width: 100%;
}

.setting-section + .setting-section {
  margin-top: 14px;
}

.main-layer-setting-section {
  padding: 16px;
  border: 1px solid #2b3945;
  border-radius: 10px;
  background: linear-gradient(145deg, #151e26, #11181f);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
}

.setting-section-title {
  margin-bottom: 4px;
  color: #f4f8fb;
  font-size: 14px;
  font-weight: 700;
}

.setting-section-description {
  margin-bottom: 11px;
  color: #8fa5b5;
  font-size: 12px;
  line-height: 1.45;
}

.main-layer-selector {
  width: 100%;
  overflow: hidden;
  border: 1px dashed #4a626f;
  border-radius: 7px;
  background: #0f171d;
}

.main-layer-selector button, .main-layer-selector .btn {
  color: #09bfd5 !important;
}

.access-setting-section {
  width: 100%;
}

.access-setting-section .accessControlCard {
  padding: 16px;
  border: 1px solid #2b3945;
  border-radius: 10px;
  background: linear-gradient(145deg, #151e26, #11181f);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
}

.access-setting-section .accessControlTitle {
  color: #f4f8fb;
  font-weight: 700;
}

.access-setting-section .accessControlDescription {
  color: #8fa5b5;
}

/* Appearance and map size accompany the original access editor. */
.authority-appearance-setting {
  padding: 16px;
  border: 1px solid #2b3945;
  border-radius: 10px;
  background: linear-gradient(145deg, #151e26, #11181f);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1803921569);
}

.authority-setting-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
  min-width: 0;
  font-size: 12px;
}

.authority-setting-field:last-child {
  margin-bottom: 0;
}

.authority-setting-field select {
  width: 100%;
  min-height: 36px;
  padding: 7px 10px;
  border: 1px solid #435565;
  border-radius: 5px;
  background: #101920;
  color: #eaf2f7;
  font: inherit;
}

.authority-setting-field input[type=range] {
  width: 100%;
  margin: 0;
  accent-color: #00a9c0;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/authority/src/setting/setting.css"],"names":[],"mappings":"AAAA;;EACgC,sBAAA;EAAwB,8BAAA;AAGxD;;AADA;EACI,WAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;AAIJ;;AADA;EAAmB,WAAA;AAKnB;;AAJA;EAAsC,gBAAA;AAQtC;;AANA;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,qDAAA;EACA,0CAAA;AASJ;;AANA;EAAyB,kBAAA;EAAoB,cAAA;EAAgB,eAAA;EAAiB,gBAAA;AAa9E;;AAZA;EAA+B,mBAAA;EAAqB,cAAA;EAAgB,eAAA;EAAiB,iBAAA;AAmBrF;;AAlBA;EAAuB,WAAA;EAAa,gBAAA;EAAkB,0BAAA;EAA4B,kBAAA;EAAoB,mBAAA;AA0BtG;;AAzBA;EAAyD,yBAAA;AA6BzD;;AA5BA;EAA0B,WAAA;AAgC1B;;AA9BA;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,qDAAA;EACA,0CAAA;AAiCJ;;AA9BA;EACI,cAAA;EACA,gBAAA;AAiCJ;;AA9BA;EAAoD,cAAA;AAkCpD;;AAhCA,kEAAA;AACA;EAAgC,aAAA;EAAc,yBAAA;EAA0B,mBAAA;EAAoB,qDAAA;EAAoD,kDAAA;AAwChJ;;AAvCA;EAA2B,aAAA;EAAc,sBAAA;EAAuB,QAAA;EAAS,mBAAA;EAAoB,YAAA;EAAa,eAAA;AAgD1G;;AA/CA;EAAsC,gBAAA;AAmDtC;;AAlDA;EAAkC,WAAA;EAAY,gBAAA;EAAiB,iBAAA;EAAkB,yBAAA;EAA0B,kBAAA;EAAmB,mBAAA;EAAoB,cAAA;EAAe,aAAA;AA6DjK;;AA5DA;EAA6C,WAAA;EAAY,SAAA;EAAU,qBAAA;AAkEnE","sourcesContent":[".dashboard-template-setting,\n.dashboard-template-setting * { box-sizing: border-box; font-family: Arial, sans-serif; }\n\n.dashboard-template-setting {\n    width: 100%;\n    min-height: 100%;\n    padding: 16px;\n    background: #101519;\n    color: #eaf2f7;\n    line-height: 1.5;\n}\n\n.setting-section { width: 100%; }\n.setting-section + .setting-section { margin-top: 14px; }\n\n.main-layer-setting-section {\n    padding: 16px;\n    border: 1px solid #2b3945;\n    border-radius: 10px;\n    background: linear-gradient(145deg, #151e26, #11181f);\n    box-shadow: 0 8px 22px rgba(0, 0, 0, .18);\n}\n\n.setting-section-title { margin-bottom: 4px; color: #f4f8fb; font-size: 14px; font-weight: 700; }\n.setting-section-description { margin-bottom: 11px; color: #8fa5b5; font-size: 12px; line-height: 1.45; }\n.main-layer-selector { width: 100%; overflow: hidden; border: 1px dashed #4a626f; border-radius: 7px; background: #0f171d; }\n.main-layer-selector button, .main-layer-selector .btn { color: #09bfd5 !important; }\n.access-setting-section { width: 100%; }\n\n.access-setting-section .accessControlCard {\n    padding: 16px;\n    border: 1px solid #2b3945;\n    border-radius: 10px;\n    background: linear-gradient(145deg, #151e26, #11181f);\n    box-shadow: 0 8px 22px rgba(0, 0, 0, .18);\n}\n\n.access-setting-section .accessControlTitle {\n    color: #f4f8fb;\n    font-weight: 700;\n}\n\n.access-setting-section .accessControlDescription { color: #8fa5b5; }\n\n/* Appearance and map size accompany the original access editor. */\n.authority-appearance-setting { padding:16px; border:1px solid #2b3945; border-radius:10px; background:linear-gradient(145deg,#151e26,#11181f); box-shadow:0 8px 22px #0000002e; }\n.authority-setting-field { display:flex; flex-direction:column; gap:8px; margin-bottom:18px; min-width:0; font-size:12px; }\n.authority-setting-field:last-child { margin-bottom:0; }\n.authority-setting-field select { width:100%; min-height:36px; padding:7px 10px; border:1px solid #435565; border-radius:5px; background:#101920; color:#eaf2f7; font:inherit; }\n.authority-setting-field input[type=range] { width:100%; margin:0; accent-color:#00a9c0; }\n"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.css"
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.css ***!
  \***************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./AccessSetting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./your-extensions/widgets/authority/src/setting/setting.css"
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/authority/src/setting/setting.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./setting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/authority/src/setting/setting.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/authority/src/config/AccessValues.ts"
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/authority/src/config/AccessValues.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessLiteral: () => (/* binding */ accessLiteral),
/* harmony export */   accessRuleSql: () => (/* binding */ accessRuleSql),
/* harmony export */   accessValue: () => (/* binding */ accessValue)
/* harmony export */ });
function accessValue(value) {
    const text = String(value !== null && value !== void 0 ? value : '').trim(), quote = text[0];
    if (text.length >= 2 && (quote === "'" || quote === '"') && text.at(-1) === quote)
        return { value: text.slice(1, -1).split(quote + quote).join(quote), quoted: true };
    return { value: text, quoted: false };
}
function accessLiteral(input, type) {
    const { value, quoted } = accessValue(input);
    if (type === 'geometry')
        return null;
    if (type === 'number')
        return /^[-+]?\d+(?:\.\d+)?$/.test(value) && Number.isFinite(Number(value)) ? String(Number(value)) : null;
    if (type === 'boolean') {
        if (/^(true|1|yes|ha|да)$/i.test(value))
            return '1';
        if (/^(false|0|no|yo.q|нет)$/i.test(value))
            return '0';
        return null;
    }
    if (type === 'date')
        return /^\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}:\d{2})?$/.test(value) ? `DATE '${value}'` : null;
    if (!type && !quoted && /^[-+]?\d+(?:\.\d+)?$/.test(value) && Number.isFinite(Number(value)))
        return value;
    return "'" + value.replace(/'/g, "''") + "'";
}
function accessRuleSql(field, rule, type) {
    if (!['equal', 'range', 'include', 'like', 'before', 'after'].includes(rule.operator))
        return '1=0';
    if (!/^[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*$/.test(field) || type === 'geometry')
        return '1=0';
    const inputs = rule.operator === 'include' ? rule.values || [] : rule.operator === 'range' ? [rule.from, rule.to] : [rule.value];
    if (!inputs.length)
        return '1=0';
    const values = inputs.map(value => accessLiteral(value, type));
    if (values.some(value => value === null))
        return '1=0';
    const where = rule.operator === 'equal' ? `${field} = ${values[0]}` : rule.operator === 'range' ? `${field} BETWEEN ${values[0]} AND ${values[1]}` : rule.operator === 'include' ? `${field} IN (${values.join(', ')})` : rule.operator === 'like' ? `${field} LIKE ${accessLiteral(rule.value, 'string')}` : rule.operator === 'before' ? `${field} < ${values[0]}` : rule.operator === 'after' ? `${field} > ${values[0]}` : '1=0';
    return rule.isNot ? `NOT (${where})` : where;
}


/***/ },

/***/ "./your-extensions/widgets/authority/src/config/designs.ts"
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/authority/src/config/designs.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DESIGNS: () => (/* binding */ DESIGNS),
/* harmony export */   labText: () => (/* reexport safe */ _translations_designs__WEBPACK_IMPORTED_MODULE_0__.labText),
/* harmony export */   validDesign: () => (/* binding */ validDesign)
/* harmony export */ });
/* harmony import */ var _translations_designs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations/designs */ "./your-extensions/widgets/authority/src/translations/designs.ts");
const DESIGNS = [
    { id: 'original', name: { ru: 'Текущий', uz: 'Asosiy', en: 'Original' }, caption: { ru: 'Карта и раскрывающиеся карточки', uz: 'Xarita va kartochkalar', en: 'Map and expanding cards' } },
    { id: 'atlas', name: { ru: 'Атлас', uz: 'Atlas', en: 'Atlas' }, caption: { ru: 'Светлая редакционная подача', uz: 'Yorugʻ atlas uslubi', en: 'A light editorial atlas' } },
    { id: 'orbit', name: { ru: 'Орбита', uz: 'Orbita', en: 'Orbit' }, caption: { ru: 'Космическая обсерватория', uz: 'Kosmik observatoriya', en: 'A space observatory' } },
    { id: 'relief', name: { ru: 'Рельеф', uz: 'Relyef', en: 'Relief' }, caption: { ru: 'Объёмный макет территории', uz: 'Hududning hajmli maketi', en: 'A dimensional territory model' } },
    { id: 'mosaic', name: { ru: 'Мозаика', uz: 'Mozaika', en: 'Mosaic' }, caption: { ru: 'Крупная типографика и блоки', uz: 'Yirik matn va bloklar', en: 'Bold type and modular blocks' } },
    { id: 'contour', name: { ru: 'Контур', uz: 'Kontur', en: 'Contour' }, caption: { ru: 'Картографическое бюро', uz: 'Kartografiya byurosi', en: 'A cartographic atelier' } },
    { id: 'panorama', name: { ru: 'Панорама', uz: 'Panorama', en: 'Panorama' }, caption: { ru: 'Воздух, пейзаж и спокойствие', uz: 'Manzara va osoyishtalik', en: 'Open space and quiet landscapes' } },
    { id: 'porcelain', name: { ru: 'Фарфор', uz: 'Chinni', en: 'Porcelain' }, caption: { ru: 'Светлый скульптурный макет', uz: 'Yorugʻ haykaltaroshlik maketi', en: 'A light sculptural model' } },
    { id: 'aurora', name: { ru: 'Сияние', uz: 'Yogʻdu', en: 'Aurora' }, caption: { ru: 'Свет, глубина и живая география', uz: 'Yorugʻlik va jonli geografiya', en: 'Light, depth and living geography' } },
    { id: 'nexus', name: { ru: 'Связи', uz: 'Aloqalar', en: 'Nexus' }, caption: { ru: 'Карта в центре направлений', uz: 'Yoʻnalishlar markazidagi xarita', en: 'Geography at the center of projects' } }
];
function validDesign(value) { var _a; return ((_a = DESIGNS.find(design => design.id === value)) === null || _a === void 0 ? void 0 : _a.id) || 'original'; }



/***/ },

/***/ "./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.tsx"
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccessSetting),
/* harmony export */   defaultAccessConfig: () => (/* binding */ defaultAccessConfig)
/* harmony export */ });
/* harmony import */ var _config_AccessValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/AccessValues */ "./your-extensions/widgets/authority/src/config/AccessValues.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _AccessSetting_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessSetting.css */ "./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.css");
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
const EditIcon = () => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("svg", { className: "buttonSvgIcon", viewBox: "0 0 20 20", "aria-hidden": "true" },
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("path", { d: "M17.519531 0.078125 C17.234375 0.136719 16.917969 0.277344 16.691406 0.449219 C16.566406 0.539062 16.203125 0.882812 15.878906 1.207031 L15.292969 1.796875 L16.769531 3.269531 L18.242188 4.746094 L18.867188 4.121094 C19.214844 3.777344 19.558594 3.398438 19.640625 3.28125 C20.195312 2.445312 20.089844 1.371094 19.378906 0.660156 C18.882812 0.164062 18.1875 -0.0546875 17.519531 0.078125 Z" }),
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("path", { d: "M11.066406 6.023438 C8.390625 8.703125 7.734375 9.382812 7.703125 9.492188 C7.683594 9.566406 7.539062 10.277344 7.382812 11.074219 C7.191406 12.035156 7.105469 12.554688 7.121094 12.628906 C7.15625 12.765625 7.273438 12.882812 7.410156 12.917969 C7.558594 12.953125 10.539062 12.359375 10.691406 12.265625 C10.75 12.226562 12.277344 10.71875 14.082031 8.910156 L17.363281 5.625 L15.898438 4.160156 C15.09375 3.355469 14.425781 2.695312 14.414062 2.695312 C14.402344 2.695312 12.898438 4.195312 11.066406 6.023438 Z" }),
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("path", { d: "M2.042969 3.417969 C1.292969 3.554688 0.597656 4.085938 0.257812 4.785156 C-0.015625 5.347656 -0.00390625 4.953125 0.0078125 11.835938 L0.0195312 18.027344 L0.105469 18.28125 C0.234375 18.65625 0.457031 19.007812 0.742188 19.296875 C1.035156 19.589844 1.324219 19.769531 1.707031 19.902344 L1.972656 20 L14.644531 20 L14.949219 19.902344 C15.734375 19.65625 16.351562 19 16.589844 18.160156 C16.65625 17.925781 16.660156 17.671875 16.660156 14.273438 L16.660156 10.636719 L16.542969 10.449219 C16.371094 10.171875 16.082031 10.023438 15.769531 10.050781 C15.496094 10.074219 15.28125 10.203125 15.128906 10.4375 L15.019531 10.601562 L15 14.195312 C14.980469 17.484375 14.976562 17.804688 14.914062 17.914062 C14.820312 18.085938 14.597656 18.269531 14.425781 18.320312 C14.320312 18.351562 12.511719 18.359375 8.238281 18.351562 L2.199219 18.339844 L2.046875 18.234375 C1.964844 18.175781 1.851562 18.0625 1.796875 17.980469 L1.699219 17.835938 L1.6875 11.75 C1.679688 5.816406 1.679688 5.660156 1.753906 5.515625 C1.796875 5.4375 1.878906 5.324219 1.941406 5.265625 C2.1875 5.027344 2.015625 5.039062 5.804688 5.039062 C8.433594 5.039062 9.308594 5.027344 9.429688 4.992188 C9.652344 4.925781 9.894531 4.671875 9.957031 4.441406 C10.0625 4.070312 9.90625 3.679688 9.578125 3.488281 L9.394531 3.378906 L5.859375 3.371094 C3.078125 3.367188 2.265625 3.375 2.042969 3.417969 Z" })));
const TrashIcon = () => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("svg", { className: "buttonSvgIcon", viewBox: "0 0 20 20", "aria-hidden": "true" },
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("path", { d: "M7.933594 1.9375 C7.609375 2.023438 7.289062 2.214844 7.058594 2.457031 C6.808594 2.714844 6.699219 2.925781 6.527344 3.445312 C6.386719 3.867188 6.203125 4.121094 5.921875 4.269531 C5.765625 4.351562 5.714844 4.355469 4.230469 4.375 C2.753906 4.394531 2.695312 4.398438 2.589844 4.476562 C2.207031 4.761719 2.207031 5.238281 2.589844 5.523438 L2.699219 5.605469 L17.300781 5.605469 L17.410156 5.523438 C17.792969 5.238281 17.792969 4.761719 17.410156 4.476562 C17.304688 4.398438 17.246094 4.394531 15.769531 4.375 C14.285156 4.355469 14.234375 4.351562 14.078125 4.269531 C13.796875 4.121094 13.613281 3.867188 13.472656 3.445312 C13.300781 2.925781 13.191406 2.714844 12.941406 2.457031 C12.703125 2.207031 12.390625 2.023438 12.050781 1.933594 C11.71875 1.847656 8.253906 1.851562 7.933594 1.9375 Z" }),
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("path", { d: "M4.121094 6.488281 C4.058594 6.503906 3.953125 6.566406 3.890625 6.625 C3.648438 6.851562 3.648438 6.640625 3.90625 10.496094 C4.179688 14.597656 4.210938 14.929688 4.351562 15.609375 C4.664062 17.097656 5.480469 17.824219 7.089844 18.050781 C7.546875 18.113281 11.496094 18.144531 12.324219 18.089844 C13.78125 17.992188 14.527344 17.6875 15.0625 16.976562 C15.398438 16.535156 15.570312 16.074219 15.699219 15.308594 C15.816406 14.613281 15.835938 14.371094 16.09375 10.5 C16.269531 7.871094 16.316406 6.96875 16.285156 6.886719 C16.222656 6.71875 16.015625 6.527344 15.851562 6.480469 C15.574219 6.40625 15.238281 6.566406 15.132812 6.820312 C15.09375 6.910156 15.003906 8.039062 14.84375 10.457031 C14.5625 14.679688 14.519531 15.113281 14.347656 15.644531 C14.1875 16.148438 13.894531 16.488281 13.492188 16.640625 C12.957031 16.839844 12.710938 16.855469 10 16.855469 C7.289062 16.855469 7.042969 16.839844 6.507812 16.640625 C6.105469 16.488281 5.8125 16.148438 5.652344 15.644531 C5.480469 15.113281 5.4375 14.679688 5.15625 10.457031 C4.996094 8.058594 4.90625 6.910156 4.867188 6.824219 C4.800781 6.664062 4.691406 6.570312 4.503906 6.5 C4.332031 6.441406 4.285156 6.4375 4.121094 6.488281 Z" })));
const makeId = () => {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
};
const defaultAccessConfig = {
    fullAccessGroups: [],
    fullAccessUsers: [],
    rules: [],
    fieldJoinOperator: "and",
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
const buildRuleWhere = (field, rule, fieldType) => (0,_config_AccessValues__WEBPACK_IMPORTED_MODULE_0__.accessRuleSql)(field, rule, fieldType);
const wrapWherePart = (value, shouldWrap) => {
    return shouldWrap ? `(${value})` : value;
};
const buildWhereForGroup = (config, groupId) => {
    const joinWord = "AND";
    const fieldParts = [];
    config.rules.forEach((field) => {
        const ruleParts = field.rules
            .filter((rule) => rule.groups.includes(groupId))
            .map((rule) => buildRuleWhere(field.field, rule, field.fieldType));
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
                fieldType: fieldItem.fieldType,
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
    const [showModal, setShowModal] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [config, setConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(() => { var _a; return normalizeLoadedConfig((_a = props.value) !== null && _a !== void 0 ? _a : defaultAccessConfig); });
    const [savedConfig, setSavedConfig] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(() => { var _a; return normalizeLoadedConfig((_a = props.value) !== null && _a !== void 0 ? _a : defaultAccessConfig); });
    const [hasUnsavedChanges, setHasUnsavedChanges] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [notice, setNotice] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const noticeTimer = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
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
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
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
    const [groupsInfo, setGroupsInfo] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState({});
    const [groupsLoading, setGroupsLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [usersInfo, setUsersInfo] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState({});
    const [usersLoading, setUsersLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const groupIdsSignature = getConfigGroupIds(config).join("|");
    const userIdsSignature = getConfigUserIds(config).join("|");
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        let isCancelled = false;
        const loadGroupsInfo = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const groupIds = getConfigGroupIds(config);
            if (groupIds.length === 0) {
                setGroupsInfo({});
                return;
            }
            const portalUrl = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.portalUrl;
            if (!portalUrl) {
                return;
            }
            setGroupsLoading(true);
            try {
                const [esriRequest] = (yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.loadArcGISJSAPIModules)([
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
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        let isCancelled = false;
        const loadUsersInfo = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userIds = getConfigUserIds(config);
            if (userIds.length === 0) {
                setUsersInfo({});
                return;
            }
            const portalUrl = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.portalUrl;
            if (!portalUrl)
                return;
            setUsersLoading(true);
            try {
                const [esriRequest] = (yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.loadArcGISJSAPIModules)([
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
    const [selectedId, setSelectedId] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(GLOBAL_ACCESS_ID);
    const [dialog, setDialog] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!showModal)
            return;
        const closeByEscape = (event) => {
            if (event.key !== "Escape")
                return;
            event.preventDefault();
            event.stopPropagation();
            if (dialog) {
                setDialog(null);
                return;
            }
            setShowModal(false);
        };
        document.addEventListener("keydown", closeByEscape, true);
        return () => document.removeEventListener("keydown", closeByEscape, true);
    }, [showModal, dialog]);
    const [selectedRuleIds, setSelectedRuleIds] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [selectedGroupKeys, setSelectedGroupKeys] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [formTitle, setFormTitle] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [formField, setFormField] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [formFieldType, setFormFieldType] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [formGroup, setFormGroup] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [formUser, setFormUser] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [ruleOperator, setRuleOperator] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("equal");
    const [ruleIsNot, setRuleIsNot] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [ruleValue, setRuleValue] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [ruleFrom, setRuleFrom] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [ruleTo, setRuleTo] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [ruleValues, setRuleValues] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [newListValue, setNewListValue] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [fieldSearch, setFieldSearch] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [groupSearch, setGroupSearch] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState("");
    const [showWherePreview, setShowWherePreview] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const selectedField = selectedId === GLOBAL_ACCESS_ID
        ? null
        : ((_a = config.rules.find((item) => item.id === selectedId)) !== null && _a !== void 0 ? _a : null);
    const renderGroupIdentity = (groupId) => {
        var _a;
        const groupInfo = groupsInfo[groupId];
        const groupTitle = (_a = groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.title) !== null && _a !== void 0 ? _a : (groupsLoading ? "Загрузка..." : "Название недоступно");
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupIdentity" },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupIdTitleLine" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "groupTitleAfterId" },
                    groupTitle,
                    " \u2014"),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { type: "button", className: "groupIdCopyButton", title: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID", onClick: (event) => {
                        event.stopPropagation();
                        void copyGroupId(groupId);
                    } }, groupId)),
            (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.usersCount) !== null &&
                (groupInfo === null || groupInfo === void 0 ? void 0 : groupInfo.usersCount) !== undefined && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupMembers" },
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
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupIdentity userIdentity" },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupIdTitleLine" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "groupTitleAfterId" },
                    title,
                    " \u2014"),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { type: "button", className: "groupIdCopyButton", title: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", onClick: (event) => {
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
        setFormFieldType("");
        resetRuleForm();
        setDialog({ type: "addField" });
    };
    const openEditField = () => {
        if (!selectedField)
            return;
        setFormTitle(selectedField.title);
        setFormField(selectedField.field);
        setFormFieldType(selectedField.fieldType || "");
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
                fieldType: formFieldType || undefined,
                rules: firstRule ? [firstRule] : [],
            };
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: [...prev.rules, newField] })));
            setSelectedId(newField.id);
            resetSelection();
        }
        if ((dialog === null || dialog === void 0 ? void 0 : dialog.type) === "editField") {
            setDraftConfig((prev) => (Object.assign(Object.assign({}, prev), { rules: prev.rules.map((item) => item.id === dialog.payload.fieldId
                    ? Object.assign(Object.assign({}, item), { title: formTitle.trim(), field: formField.trim(), fieldType: formFieldType || undefined }) : item) })));
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
                            parts.push(`(${buildRuleWhere(field.field, rule, field.fieldType)})`);
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
        const currentWhere = buildRuleWhere(field.field, rule, field.fieldType);
        const duplicates = field.rules.filter((item) => item.id !== rule.id && buildRuleWhere(field.field, item, field.fieldType) === currentWhere);
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
                    allowedRules.push(`(${buildRuleWhere(field.field, rule, field.fieldType)})`);
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
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "ruleModeRow" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "operatorTabs fourTabs" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: ruleOperator === "equal" ? "active" : "", onClick: () => setRuleOperator("equal") }, "Equal"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: ruleOperator === "range" ? "active" : "", onClick: () => setRuleOperator("range") }, "Range"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: ruleOperator === "include" ? "active" : "", onClick: () => setRuleOperator("include") }, "Include"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: ruleOperator === "like" ? "active" : "", onClick: () => setRuleOperator("like") }, "Like")),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: `notToggleButton ${ruleIsNot ? "active" : ""}`, onClick: () => setRuleIsNot((value) => !value), title: "\u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435" }, "NOT")),
            (ruleOperator === "equal" || ruleOperator === "like") && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: ruleValue, onChange: (e) => setRuleValue(e.target.value) })),
            ruleOperator === "range" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "twoInputGrid" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u041E\u0442", value: ruleFrom, onChange: (e) => setRuleFrom(e.target.value) }),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u0414\u043E", value: ruleTo, onChange: (e) => setRuleTo(e.target.value) }))),
            ruleOperator === "include" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "inListArea" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "inAddRow" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: newListValue, onChange: (e) => setNewListValue(e.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "smallButton", onClick: addValueToInList }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),
                ruleValues.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "emptyMini" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442")) : (ruleValues.map((value, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "inValueRow", key: `${value}_${index}` },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: value, onChange: (e) => updateValueInList(index, e.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton danger", onClick: () => removeValueFromInList(index) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TrashIcon, null)))))))),
            previewFieldName && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "previewWhere" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", null, "\u0418\u0442\u043E\u0433\u043E\u0432\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", null, (() => {
                    const tempRule = getRuleFromForm();
                    return tempRule
                        ? buildRuleWhere(previewFieldName, tempRule, (dialog === null || dialog === void 0 ? void 0 : dialog.type) === "addField" ? formFieldType || undefined : selectedField === null || selectedField === void 0 ? void 0 : selectedField.fieldType)
                        : `${previewFieldName} ...`;
                })())))));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "settingArea" },
        notice && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "settingNotice" }, notice),
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "settingsContent" },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "accessControlCard" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "accessControlHeader" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "accessControlTitle" }, (_b = props.title) !== null && _b !== void 0 ? _b : "Доступ к данным"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "accessControlDescription" }, (_c = props.description) !== null && _c !== void 0 ? _c : "Настройте группы и условия отображения объектов")),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "default", size: "sm", className: "accessSettingsButton", onClick: () => setShowModal(true) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "accessSettingsButtonText" }, (_d = props.buttonLabel) !== null && _d !== void 0 ? _d : "Настройка доступа")))),
        showModal && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalArea", onClick: (event) => {
                if (event.target === event.currentTarget)
                    setShowModal(false);
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalBlock" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalList" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalListHeader" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalListTitle" }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalListSubtitle" }, "JSON access config"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "sideSearchInput", placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0438\u043B\u0438 \u043F\u043E\u043B\u044E", value: fieldSearch, onChange: (event) => setFieldSearch(event.target.value) }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: `modalItem ${selectedId === GLOBAL_ACCESS_ID ? "selected" : ""}`, onClick: () => selectLeftItem(GLOBAL_ACCESS_ID) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalItemTitle" }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalItemInfo modalItemInfoLine" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "modalItemCondition" },
                                "\u0423\u0441\u043B\u043E\u0432\u0438\u0435: ",
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("b", null, "1=1")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "modalItemCount" },
                                config.fullAccessGroups.length,
                                " \u0433\u0440\u0443\u043F\u043F \u00B7 ",
                                config.fullAccessUsers.length,
                                " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "fieldList" },
                        filteredFields.map((item) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { key: item.id, className: `modalItem ${selectedId === item.id ? "selected" : ""}`, onClick: () => selectLeftItem(item.id) },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalItemTitle" }, item.title),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalItemInfo modalItemInfoLine" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "modalItemCondition" },
                                    "\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("b", null, item.field)),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "modalItemCount" },
                                    item.rules.length,
                                    " \u043F\u0440\u0430\u0432\u0438\u043B")),
                            getFieldWarningsCount(item) > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalItemMeta" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: "warningPill" },
                                    getFieldWarningsCount(item),
                                    " warning")))))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "addFieldButton", onClick: openAddField }, "+")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalBottomActions" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", { className: "jsonButton" },
                            "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON",
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { type: "file", accept: "application/json", onChange: uploadJson })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "jsonButton", onClick: downloadJson }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON"))),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalRightPanel" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "modalItemFullInfo" }, selectedId === GLOBAL_ACCESS_ID ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightHeader" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightTitle" }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightField" }, "\u0423\u0441\u043B\u043E\u0432\u0438\u0435: 1=1")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightHeaderActions" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "smallButton", onClick: openAddGlobalGroup }, "+ \u0413\u0440\u0443\u043F\u043F\u0430"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "smallButton", onClick: openAddGlobalUser }, "+ \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "groupSearchInput", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0433\u0440\u0443\u043F\u043F\u044B \u0438\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", value: groupSearch, onChange: (event) => setGroupSearch(event.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rulesArea" }, config.fullAccessGroups.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "emptyRules" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (config.fullAccessGroups.map((group, index) => {
                            if (!groupMatchesSearch(group))
                                return null;
                            const groupKey = makeGlobalGroupKey(index);
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: `groupRow ${selectedGroupKeys.includes(groupKey)
                                    ? "selectedGroup"
                                    : ""}`, key: `${group}_${index}` },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedGroupKeys.includes(groupKey), onChange: () => toggleGroupSelect(groupKey) }),
                                renderGroupIdentity(group),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupActions" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGlobalGroup(index, group) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(EditIcon, null)),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                            type: "deleteGlobalGroup",
                                            payload: {
                                                groupIndex: index,
                                            },
                                        }) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TrashIcon, null)))));
                        }))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "accessEntitySectionTitle" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rulesArea usersArea" }, config.fullAccessUsers.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "emptyRules" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (config.fullAccessUsers.map((userId, index) => {
                            if (!userMatchesSearch(userId))
                                return null;
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupRow userRow", key: `${userId}_${index}` },
                                renderUserIdentity(userId),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupActions" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGlobalUser(index, userId) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(EditIcon, null)),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                            type: "deleteGlobalUser",
                                            payload: { userIndex: index },
                                        }) },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TrashIcon, null)))));
                        }))))) : !selectedField ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "emptyRules" }, "Empty")) : (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightHeader" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightTitle" }, selectedField.title),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightField" },
                                    "\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",
                                    selectedField.field,
                                    " \u00B7 ",
                                    selectedField.fieldType === "number" ? "Числовой" : selectedField.fieldType === "string" ? "Символьный" : "Автоматически")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rightHeaderActions" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "iconButton", onClick: openEditField },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(EditIcon, null)),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "iconButton danger", onClick: () => setDialog({ type: "deleteField" }) },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TrashIcon, null)))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "groupSearchInput", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0433\u0440\u0443\u043F\u043F\u044B \u0438\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u0440\u0430\u0432\u0438\u043B", value: groupSearch, onChange: (event) => setGroupSearch(event.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "rulesArea" },
                            selectedField.rules.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "emptyRules" }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (selectedField.rules.map((rule) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: `ruleCard ${selectedRuleIds.includes(rule.id)
                                    ? "selectedRule"
                                    : ""}`, key: rule.id },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "ruleHeader" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: selectedRuleIds.includes(rule.id), onChange: () => toggleRuleSelect(rule.id) }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "ruleInfo" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "ruleLabel" },
                                            "\u0423\u0441\u043B\u043E\u0432\u0438\u0435",
                                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: `operatorPill operator-${rule.operator}` }, rule.isNot ? `NOT ${rule.operator}` : rule.operator)),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "ruleValue" }, buildRuleWhere(selectedField.field, rule, selectedField.fieldType)),
                                        getRuleWarnings(selectedField, rule).length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "ruleWarnings" }, getRuleWarnings(selectedField, rule).map((warning) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { key: warning }, warning)))))),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "ruleActions" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "smallButton", onClick: () => openAddGroup(rule.id) }, "+ \u0433\u0440\u0443\u043F\u043F\u0430"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "smallButton", onClick: () => openAddUser(rule.id) }, "+ \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "iconButton", onClick: () => openEditRule(rule) },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(EditIcon, null)),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "iconButton danger", onClick: () => setDialog({
                                                type: "deleteRule",
                                                payload: {
                                                    ruleId: rule.id,
                                                },
                                            }) },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TrashIcon, null)))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupsArea" }, rule.groups.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "emptyMini" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (rule.groups.map((group, index) => {
                                    if (!groupMatchesSearch(group))
                                        return null;
                                    const groupKey = makeGroupKey(rule.id, index);
                                    const isGroupLocked = selectedRuleIds.includes(rule.id);
                                    const isGroupSelected = isGroupLocked || selectedGroupKeys.includes(groupKey);
                                    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: `groupRow ${isGroupSelected ? "selectedGroup" : ""} ${isGroupLocked ? "lockedGroup" : ""}`, key: `${group}_${index}` },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { type: "checkbox", className: "selectCheckbox", checked: isGroupSelected, disabled: isGroupLocked, title: isGroupLocked
                                                ? "Группа выбрана вместе с правилом"
                                                : undefined, onChange: () => toggleGroupSelect(groupKey, isGroupLocked) }),
                                        renderGroupIdentity(group),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupActions" },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditGroup(rule.id, index, group) },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(EditIcon, null)),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                                    type: "deleteGroup",
                                                    payload: {
                                                        ruleId: rule.id,
                                                        groupIndex: index,
                                                    },
                                                }) },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TrashIcon, null)))));
                                }))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "usersArea ruleUsersArea" }, rule.users.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "emptyMini" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B")) : (rule.users.map((userId, index) => {
                                    if (!userMatchesSearch(userId))
                                        return null;
                                    return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupRow userRow", key: `${userId}_${index}` },
                                        renderUserIdentity(userId),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "groupActions" },
                                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton", onClick: () => openEditUser(rule.id, index, userId) },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(EditIcon, null)),
                                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "miniIconButton danger", onClick: () => setDialog({
                                                    type: "deleteUser",
                                                    payload: {
                                                        ruleId: rule.id,
                                                        userIndex: index,
                                                    },
                                                }) },
                                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TrashIcon, null)))));
                                }))))))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "addRuleButton", onClick: openAddRule }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"))))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "globalSettingActions" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "bottomAccessPanel" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "bottomSelectionActions" },
                                selectedId !== GLOBAL_ACCESS_ID && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButtonSmall", type: "button", onClick: deleteSelectedRules, disabled: selectedRuleIds.length === 0 },
                                    "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ",
                                    selectedRuleIds.length,
                                    " \u043F\u0440\u0430\u0432\u0438\u043B")),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButtonSmall", type: "button", onClick: deleteSelectedGroups, disabled: selectedGroupsCount === 0 },
                                    "\u0423\u0434\u0430\u043B\u0438\u0442\u044C ",
                                    selectedGroupsCount,
                                    " \u0433\u0440\u0443\u043F\u043F")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", { className: `saveState ${hasUnsavedChanges ? "changed" : ""}` }, hasUnsavedChanges
                                ? "Есть несохранённые изменения"
                                : "Изменений нет"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "whereToggleButton", type: "button", onClick: () => setShowWherePreview((value) => !value) }, showWherePreview ? "Скрыть WHERE" : "Показать WHERE")),
                        showWherePreview && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "bottomWherePreview" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "bottomWhereHeader" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", null, "\u0418\u0442\u043E\u0433\u043E\u0432\u044B\u0439 WHERE"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { type: "button", onClick: copyConfigWherePreview }, "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("pre", null, buildConfigWherePreview()))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "globalSettingButtons" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "cancelConfigButton", type: "button", onClick: cancelConfigChanges, disabled: !hasUnsavedChanges }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "applyConfigButton", type: "button", onClick: applyConfig, disabled: !hasUnsavedChanges }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"))))),
            dialog && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogArea" },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogBlock" },
                    (dialog.type === "addField" ||
                        dialog.type === "editField") && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addField"
                            ? "Добавить столбец"
                            : "Редактировать столбец"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", value: formTitle, onChange: (e) => setFormTitle(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u041F\u043E\u043B\u0435", value: formField, onChange: (e) => setFormField(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", { className: "dialogText" },
                            "\u0422\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445",
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("select", { className: "dialogInput", "aria-label": "\u0422\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u043E\u043B\u0431\u0446\u0430", value: formFieldType, onChange: event => setFormFieldType(event.target.value) },
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "" }, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "number" }, "\u0427\u0438\u0441\u043B\u043E\u0432\u043E\u0439"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("option", { value: "string" }, "\u0421\u0438\u043C\u0432\u043E\u043B\u044C\u043D\u044B\u0439 (\u0442\u0435\u043A\u0441\u0442)"))),
                        dialog.type === "addField" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "optionalRuleBlock" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "optionalRuleTitle" }, "\u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E"),
                            renderRuleForm())),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: saveField }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteField" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogText" }, "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u043D\u0443\u0442\u0440\u0438 \u043D\u0435\u0433\u043E \u0442\u043E\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButton", onClick: deleteField }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addRule" || dialog.type === "editRule") && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addRule"
                            ? "Добавить правило"
                            : "Редактировать правило"),
                        renderRuleForm(),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: saveRule }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteRule" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogText" }, "\u0413\u0440\u0443\u043F\u043F\u044B \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0432\u043D\u0443\u0442\u0440\u0438 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0442\u043E\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButton", onClick: deleteRule }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addGroup" ||
                        dialog.type === "editGroup") && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addGroup"
                            ? "Добавить группу"
                            : "Редактировать группу"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430", value: formGroup, onChange: (e) => setFormGroup(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: saveGroup }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteGroup" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogText" }, "\u0413\u0440\u0443\u043F\u043F\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButton", onClick: deleteGroup }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addGlobalGroup" ||
                        dialog.type === "editGlobalGroup") && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addGlobalGroup"
                            ? "Добавить группу полного доступа"
                            : "Редактировать группу полного доступа"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430", value: formGroup, onChange: (e) => setFormGroup(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: saveGlobalGroup }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteGlobalGroup" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogText" }, "\u042D\u0442\u0430 \u0433\u0440\u0443\u043F\u043F\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u043C."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButton", onClick: deleteGlobalGroup }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addUser" ||
                        dialog.type === "editUser") && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addUser"
                            ? "Добавить пользователя"
                            : "Редактировать пользователя"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 username", value: formUser, onChange: (e) => setFormUser(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: saveUser }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteUser" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogText" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButton", onClick: deleteUser }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))),
                    (dialog.type === "addGlobalUser" ||
                        dialog.type === "editGlobalUser") && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, dialog.type === "addGlobalUser"
                            ? "Добавить пользователя полного доступа"
                            : "Редактировать пользователя полного доступа"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("input", { className: "dialogInput", placeholder: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 username", value: formUser, onChange: (e) => setFormUser(e.target.value) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: saveGlobalUser }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
                    dialog.type === "deleteGlobalUser" && (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogTitle" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430?"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogText" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u043C."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "dialogActions" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { onClick: () => setDialog(null) }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", { className: "dangerButton", onClick: deleteGlobalUser }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))))))))));
}


/***/ },

/***/ "./your-extensions/widgets/authority/src/translations/designs.ts"
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/authority/src/translations/designs.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   labText: () => (/* binding */ labText)
/* harmony export */ });
const copy = {
    atlasBrand: ['UZ / АТЛАС', 'UZ / ATLAS', 'UZ / ATLAS'],
    orbitBrand: ['UZSPACE / ОБСЕРВАТОРИЯ', 'UZSPACE / OBSERVATORIYA', 'UZSPACE / OBSERVATORY'],
    reliefBrand: ['ЛАБОРАТОРИЯ ТЕРРИТОРИЙ', 'HUDUDLAR LABORATORIYASI', 'TERRITORY LAB'],
    contourBrand: ['UZ / Картография', 'UZ / Kartografiya', 'UZ / Cartography'],
    panoramaBrand: ['УЗБЕКИСТАН / ПЕРСПЕКТИВЫ', 'O‘ZBEKISTON / ISTIQBOLLAR', 'UZBEKISTAN / PERSPECTIVES'],
    porcelainBrand: ['ТЕРРИТОРИЯ / ОБЪЕКТЫ', 'HUDUD / OBYEKTLAR', 'TERRITORY / OBJECTS'],
    nexusBrand: ['UZ / ГЕОГРАФИЯ', 'UZ / GEOGRAFIYA', 'UZ / GEOGRAPHY'],
    regions: ['регионов', 'hudud', 'regions'],
    districts: ['районов', 'tuman', 'districts'],
    districtMode: ['Районы', 'Tumanlar', 'Districts'],
    regionMode: ['Регионы', 'Hududlar', 'Regions'],
    country: ['Узбекистан', 'Oʻzbekiston', 'Uzbekistan'],
    noRegions: ['Нет доступных регионов', 'Ruxsat etilgan hudud yoʻq', 'No available regions'],
    projects: ['Проекты', 'Loyihalar', 'Projects'],
    selected: ['Выбрано', 'Tanlangan', 'Selected'],
    access: ['Доступные регионы', 'Ruxsat etilgan hududlar', 'Available regions'],
    all: ['Все регионы', 'Barcha hududlar', 'All regions'],
    scopeHint: ['1–3 региона: районы. 4 и более: регионы.', '1–3 hudud: tumanlar. 4 va undan koʻp: hududlar.', '1–3 regions: districts. 4 or more: regions.'],
    districtParameter: ['Параметр района в URL', 'URL dagi tuman parametri', 'District URL parameter'],
    atlasTitle: ['Территория\nв деталях.', 'Hudud\ntafsilotlari.', 'Territory,\nin detail.'],
    atlasIntro: ['Данные начинаются с места.', 'Maʼlumot joydan boshlanadi.', 'Every insight begins with a place.'],
    orbitTitle: ['Земля.\nВ поле зрения.', 'Yer.\nNigohimizda.', 'Earth.\nWithin sight.'],
    orbitIntro: ['Геопространственная обсерватория', 'Geofazoviy observatoriya', 'Geospatial observatory'],
    reliefTitle: ['Новая\nплоскость зрения.', 'Yangi\nqarash burchagi.', 'A new\nperspective.'],
    reliefIntro: ['Территория как объёмная модель', 'Hudud — hajmli model sifatida', 'Territory as a dimensional model'],
    mosaicTitle: ['Всё\nсвязано.', 'Barchasi\nbogʻliq.', 'Everything\nconnects.'],
    mosaicIntro: ['Одна территория. Разные направления.', 'Bir hudud. Turli yoʻnalishlar.', 'One territory. Many perspectives.'],
    contourTitle: ['Точная картина.', 'Aniq manzara.', 'A clearer picture.'],
    contourIntro: ['Картографическое бюро', 'Kartografiya byurosi', 'Cartographic atelier'],
    panoramaTitle: ['Смотреть\nшире.', 'Kengroq\nqarang.', 'See\nbeyond.'],
    panoramaIntro: ['Новый взгляд на знакомые территории', 'Tanish hududlarga yangi nigoh', 'A new view of familiar territories'],
    porcelainTitle: ['Форма\nтерритории.', 'Hudud\nshakli.', 'The shape\nof a place.'],
    porcelainIntro: ['География в новом измерении', 'Geografiya yangi oʻlchamda', 'Geography in a new dimension'],
    auroraTitle: ['Земля в новом свете.', 'Zamin yangi nurda.', 'Land in a new light.'],
    auroraIntro: ['От территории — к возможностям', 'Hududdan — imkoniyatlarga', 'From places to possibilities'],
    nexusTitle: ['Место, где всё связано.', 'Barchasi bogʻlangan joy.', 'Where everything connects.'],
    nexusIntro: ['Территория объединяет направления', 'Hudud yoʻnalishlarni birlashtiradi', 'Territory brings projects together'],
    registry: ['Каталог направлений', 'Yoʻnalishlar katalogi', 'Project directory'],
    territory: ['Территория', 'Hudud', 'Territory'],
    gallery: ['Варианты оформления', 'Dizayn variantlari', 'Design variants'],
    review: ['Выбор оформления', 'Dizayn tanlash', 'Choose design'],
    layers: ['наборов данных', 'maʼlumotlar toʻplami', 'datasets']
};
function labText(key, language) { return copy[key][language === 'ru' ? 0 : language === 'uz' ? 1 : 2]; }


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
  !*** ./your-extensions/widgets/authority/src/setting/setting.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config_designs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/designs */ "./your-extensions/widgets/authority/src/config/designs.ts");
/* harmony import */ var _AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessSetting/AccessSetting */ "./your-extensions/widgets/authority/src/setting/AccessSetting/AccessSetting.tsx");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/authority/src/setting/setting.css");




function Setting(props) {
    var _a, _b, _c;
    const config = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.asMutable) ? props.config.asMutable({ deep: true }) : ((_b = props.config) !== null && _b !== void 0 ? _b : {});
    const immutable = (_c = props.config) !== null && _c !== void 0 ? _c : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    const setValue = (key, value) => props.onSettingChange({ id: props.id, config: immutable.set(key, value) });
    const accessValue = config.accessConfig;
    const mapScale = Math.max(.7, Math.min(1, Number(config.mapScale) || .94));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "dashboard-template-setting authority-setting" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "setting-section access-setting-section" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_2__["default"], { value: accessValue || _AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_2__.defaultAccessConfig, onChange: value => setValue('accessConfig', value), title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430", description: "\u0415\u0434\u0438\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0438 \u0432\u0441\u0435\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u043C \u043F\u043E\u0440\u0442\u0430\u043B\u0430 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 Portal.", buttonLabel: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430" })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "setting-section authority-appearance-setting" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "authority-setting-field" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { "aria-label": "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442", value: (0,_config_designs__WEBPACK_IMPORTED_MODULE_1__.validDesign)(config.designVariant), onChange: event => setValue('designVariant', (0,_config_designs__WEBPACK_IMPORTED_MODULE_1__.validDesign)(event.target.value)) }, _config_designs__WEBPACK_IMPORTED_MODULE_1__.DESIGNS.map(design => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: design.id, value: design.id }, design.name.ru)))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "authority-setting-field" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, "\u0421\u0442\u0438\u043B\u044C \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 STT, \u043F\u0440\u0443\u0434\u043E\u0432 \u0438 \u043F\u043E\u0441\u0435\u0432\u043E\u0432"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { "aria-label": "\u0421\u0442\u0438\u043B\u044C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432", value: config.sectionStyleMode || 'original', onChange: event => setValue('sectionStyleMode', event.target.value === 'styled' ? 'styled' : 'original') },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "original" }, "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 Agro Monitoring"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "styled" }, "\u0412 \u0441\u0442\u0438\u043B\u0435 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: "authority-setting-field" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null,
                    "\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B \u00B7 ",
                    Math.round(mapScale * 100),
                    "%"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "range", "aria-label": "\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B", min: "0.7", max: "1", step: "0.01", value: mapScale, onChange: event => setValue('mapScale', Number(event.target.value)) }))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hdXRob3JpdHkvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnSkFBZ0osVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFB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QUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBQSxJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFFLE1BQUssS0FBRyxJQUFJLENBQUM7UUFBQyxPQUFPLEtBQUssQ0FBQztJQUMxSSxNQUFNLEtBQUssR0FBQyxJQUFJLENBQUMsUUFBUSxLQUFHLE9BQU8sRUFBQyxJQUFHLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxLQUFJLENBQUMsUUFBUSxLQUFHLE9BQU8sRUFBQyxJQUFHLEtBQUssWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsS0FBRyxTQUFTLEVBQUMsSUFBRyxLQUFLLFFBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLEtBQUksQ0FBQyxRQUFRLEtBQUcsTUFBTSxFQUFDLElBQUcsS0FBSyxTQUFTLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsS0FBRyxRQUFRLEVBQUMsSUFBRyxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsS0FBRyxPQUFPLEVBQUMsSUFBRyxLQUFLLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBSyxDQUFDO0lBQzlYLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBQyxTQUFRLEtBQUssR0FBRyxFQUFDLE1BQUssQ0FBQztBQUMxQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJNLE1BQU0sT0FBTyxHQUF3RztJQUMxSCxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsRUFBRSxPQUFPLEVBQUMsRUFBQyxFQUFFLEVBQUMsaUNB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c0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO3dCQUFTO2dCQUFBLHNFQUFPLElBQUksRUFBQyxPQUFPLGdCQUFZLHFFQUFjLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxHQUFFLFNBQVEsQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBSSxDQUFRLENBQ3JRLENBQ047QUFDUixDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXV0aG9yaXR5L3NyYy9zZXR0aW5nL0FjY2Vzc1NldHRpbmcvQWNjZXNzU2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGhvcml0eS9zcmMvc2V0dGluZy9zZXR0aW5nLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGhvcml0eS9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcuY3NzPzc5NzMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGhvcml0eS9zcmMvc2V0dGluZy9zZXR0aW5nLmNzcz8xYWUwIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGhvcml0eS9zcmMvY29uZmlnL0FjY2Vzc1ZhbHVlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXV0aG9yaXR5L3NyYy9jb25maWcvZGVzaWducy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXV0aG9yaXR5L3NyYy9zZXR0aW5nL0FjY2Vzc1NldHRpbmcvQWNjZXNzU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGhvcml0eS9zcmMvdHJhbnNsYXRpb25zL2Rlc2lnbnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGhvcml0eS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNldHRpbmdBcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuLnNldHRpbmdzQ29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLyogLnNvdXJjZVNlbGVjdG9yQ2FyZCxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay00MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLTEwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSkpO1xufSAqL1xuLnNvdXJjZVNlbGVjdG9yQ2FyZCB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5wYW5lbENhcmRMYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnNvdXJjZVNlbGVjdG9yQ2FyZCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY2Nlc3NDb250cm9sQ2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hY2Nlc3NDb250cm9sSGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5hY2Nlc3NDb250cm9sRGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuXG4uYWNjZXNzU2V0dGluZ3NCdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xuICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktY29udHJhc3QtdGV4dCwgI2ZmZmZmZik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmhvdmVyLFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xuICBib3JkZXItY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWRhcmssICMwMDhjYTApO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcbiAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXRleHQsICNmZmZmZmYpO1xufVxuXG4uYWNjZXNzU2V0dGluZ3NCdXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktbWFpbiwgIzAwYTljMCkgMjglLCB0cmFuc3BhcmVudCk7XG59XG5cbi5hY2Nlc3NTZXR0aW5nc0J1dHRvblRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNvdXJjZVNlbGVjdG9yQ2FyZCBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tb2RhbEFyZWEge1xuICBjb2xvcjogI2YzZjRmNjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsQmxvY2sge1xuICB3aWR0aDogbWluKDEyMDBweCwgMTAwdncgLSAzMnB4KTtcbiAgaGVpZ2h0OiBtaW4oODAwcHgsIDEwMHZoIC0gMzJweCk7XG4gIGJhY2tncm91bmQ6ICMxZjIyMmI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzA1cHggMWZyO1xufVxuXG4ubW9kYWxMaXN0IHtcbiAgYmFja2dyb3VuZDogIzI1MmM0MTtcbiAgcGFkZGluZzogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4ubW9kYWxMaXN0SGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubW9kYWxMaXN0VGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb2RhbExpc3RTdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpZWxkTGlzdCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLm1vZGFsSXRlbSB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzc4MzlmO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5tb2RhbEl0ZW06aG92ZXIsXG4ubW9kYWxJdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzMzNDA1ZjtcbiAgYm9yZGVyLWNvbG9yOiAjYjZjNGVkO1xufVxuXG4ubW9kYWxJdGVtVGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tb2RhbEl0ZW1JbmZvIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYjhiZmQxO1xufVxuXG4ubW9kYWxJdGVtSW5mbyBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hZGRGaWVsZEJ1dHRvbiB7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzljYThjNDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZEZpZWxkQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMwM2E1Njtcbn1cblxuLm1vZGFsQm90dG9tQWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogOHB4O1xufVxuXG4uanNvbkJ1dHRvbiB7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTY2MjdjO1xuICBiYWNrZ3JvdW5kOiAjMWYyNjM4O1xuICBjb2xvcjogI2YzZjRmNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uanNvbkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XG59XG5cbi5qc29uQnV0dG9uIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vZGFsUmlnaHRQYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsSXRlbUZ1bGxJbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgcGFkZGluZzogMjJweDtcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ucmlnaHRIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNhNDA1MDtcbn1cblxuLnJpZ2h0VGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yaWdodEZpZWxkIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxuLnJ1bGVBY3Rpb25zLFxuLmdyb3VwQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxuLnJ1bGVBY3Rpb25zIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaWNvbkJ1dHRvbixcbi5taW5pSWNvbkJ1dHRvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5taW5pSWNvbkJ1dHRvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmljb25CdXR0b246aG92ZXIsXG4ubWluaUljb25CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xufVxuXG4uaWNvbkJ1dHRvbi5kYW5nZXIsXG4ubWluaUljb25CdXR0b24uZGFuZ2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGY0ZjViO1xuICBjb2xvcjogI2ZmYjhjMTtcbn1cblxuLnJ1bGVzQXJlYSB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5ydWxlQ2FyZCB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyNjJiMzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZDQ2NWI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5ydWxlQ2FyZC5zZWxlY3RlZFJ1bGUge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMyYzM0NDg7XG59XG5cbi5ydWxlSGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucnVsZUluZm8ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5ydWxlTGFiZWwge1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5ydWxlVmFsdWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLnJ1bGVBY3Rpb25zIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5ydWxlQ2FyZDpob3ZlciAucnVsZUFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc21hbGxCdXR0b24ge1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5zbWFsbEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzYjQ4Njg7XG59XG5cbi5ncm91cHNBcmVhIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3cHg7XG59XG5cbi51c2Vyc0FyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDdweDtcbn1cblxuLnJ1bGVVc2Vyc0FyZWEge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjNDQ1MDZhO1xufVxuXG4uYWNjZXNzRW50aXR5U2VjdGlvblRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbn1cblxuLmdyb3VwUm93IHtcbiAgYmFja2dyb3VuZDogIzFkMjIzMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4NDI1ODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgY29sb3I6ICNkOWRlZWE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5ncm91cFJvdy51c2VyUm93IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgYm9yZGVyLWNvbG9yOiAjM2U1MjZmO1xuICBiYWNrZ3JvdW5kOiAjMWQyNjM0O1xufVxuXG4udXNlcklkZW50aXR5IC5ncm91cElkQ29weUJ1dHRvbiB7XG4gIGNvbG9yOiAjOWZiNmRmO1xufVxuXG4uZ3JvdXBSb3cuc2VsZWN0ZWRHcm91cCB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcbn1cblxuLmdyb3VwUm93IHNwYW4ge1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZ3JvdXBSb3c6aG92ZXIgLmdyb3VwQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hZGRSdWxlQnV0dG9uIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNzg4NDlmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRSdWxlQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzJiMzM0ODtcbn1cblxuLmVtcHR5TWluaSxcbi5lbXB0eVJ1bGVzIHtcbiAgY29sb3I6ICM4ZTk2YWE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmVtcHR5UnVsZXMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzU1NWY3NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlhbG9nQXJlYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpYWxvZ0Jsb2NrIHtcbiAgd2lkdGg6IDUyMHB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogIzI1MmIzODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjNTY2YztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMThweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZGlhbG9nVGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaWFsb2dUZXh0IHtcbiAgY29sb3I6ICNjMmM4ZDU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5kaWFsb2dJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGlhbG9nSW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG59XG5cbi5kaWFsb2dBY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbiB7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMzMDM4NGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlhbG9nQWN0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0NjVkO1xufVxuXG4uZGFuZ2VyQnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTg1NTY1ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICM0YTI0MzAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmM0Y2MgIWltcG9ydGFudDtcbn1cblxuLm9wZXJhdG9yVGFicyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ub3BlcmF0b3JUYWJzLmZvdXJUYWJzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbn1cblxuLm9wZXJhdG9yVGFicyBidXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNkOGRlZWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wZXJhdG9yVGFicyBidXR0b246aG92ZXIsXG4ub3BlcmF0b3JUYWJzIGJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMzU0MTViO1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udHdvSW5wdXRHcmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbkxpc3RBcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5pbkFkZFJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5pblZhbHVlUm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLnByZXZpZXdXaGVyZSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJldmlld1doZXJlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5vcHRpb25hbFJ1bGVCbG9jayB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XG59XG5cbi5vcHRpb25hbFJ1bGVUaXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNjNmNjZGE7XG59XG5cbi5idWxrQWN0aW9uQmFyIHtcbiAgbWluLWhlaWdodDogNDJweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzIwMjYzNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5kYW5nZXJCdXR0b25TbWFsbCB7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTg1NTY1O1xuICBiYWNrZ3JvdW5kOiAjNGEyNDMwO1xuICBjb2xvcjogI2ZmYzRjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjMzMDQwO1xufVxuXG4uc2VsZWN0Q2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhY2NlbnQtY29sb3I6ICM5YmFlZTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5ncm91cElkZW50aXR5IHtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDNweDtcbn1cblxuLmdyb3VwTmFtZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4uZ3JvdXBJZCB7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4uZ3JvdXBNZW1iZXJzIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb2xvcjogIzhmYTNjZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZ3JvdXBJZENvcHlCdXR0b24ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xOHMgZWFzZTtcbn1cblxuLmdyb3VwSWRDb3B5QnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2V0dGluZ05vdGljZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyOHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTEwMDA7XG4gIG1pbi13aWR0aDogMjEwcHg7XG4gIHBhZGRpbmc6IDExcHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzE4NWFlO1xuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLWhlaWdodDogNjZweDtcbiAgcGFkZGluZzogMTNweCAyMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzNhNDA1MDtcbiAgYmFja2dyb3VuZDogIzIwMjMyYztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG59XG5cbi5zYXZlU3RhdGUge1xuICBjb2xvcjogIzhlOTZhYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2F2ZVN0YXRlLmNoYW5nZWQge1xuICBjb2xvcjogI2YxYzI3ZDtcbn1cblxuLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b24sXG4uYXBwbHlDb25maWdCdXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLmNhbmNlbENvbmZpZ0J1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYXBwbHlDb25maWdCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzI4YWMzO1xuICBiYWNrZ3JvdW5kOiAjMzg1MDgzO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhbmNlbENvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMzODQzNWI7XG59XG5cbi5hcHBseUNvbmZpZ0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICM0NjYxOWE7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b246ZGlzYWJsZWQsXG4uYXBwbHlDb25maWdCdXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ1O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zdGF0aWNTZWxlY3Rpb25CYXIge1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xufVxuXG4uc3RhdGljU2VsZWN0aW9uQmFyLmVtcHR5U2VsZWN0aW9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2I0MzU2O1xuICBiYWNrZ3JvdW5kOiAjMWYyNTMyO1xuICBjb2xvcjogIzg3OTBhNTtcbn1cblxuLnN0YXRpY1NlbGVjdGlvbkJhciBiIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zdGF0aWNTZWxlY3Rpb25CYXIuZW1wdHlTZWxlY3Rpb24gYiB7XG4gIGNvbG9yOiAjYWViNmNhO1xufVxuXG4uY29tYmluZWRTZWxlY3Rpb25CYXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0aW9uQ291bnRlcnMsXG4uc2VsZWN0aW9uQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2VsZWN0aW9uQ291bnRlcnMgc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kYW5nZXJCdXR0b25TbWFsbDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZDogIzJhMjIzMDtcbiAgYm9yZGVyLWNvbG9yOiAjNTU0MzUwO1xuICBjb2xvcjogIzlhODU5MDtcbn1cblxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzJhMjIzMDtcbn1cblxuLmJvdHRvbUFjY2Vzc1BhbmVsIHtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJvdHRvbVNlbGVjdGlvbkFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYm90dG9tQWNjZXNzUGFuZWwgLnNhdmVTdGF0ZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWxlY3RDaGVja2JveCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjk3Nzk1O1xuICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xufVxuXG4uc2VsZWN0Q2hlY2tib3g6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBib3JkZXItY29sb3I6ICNhOWI5ZTA7XG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XG59XG5cbi5zZWxlY3RDaGVja2JveDpjaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBiYWNrZ3JvdW5kOiAjM2Q1MjdkO1xufVxuXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMXB4LCAtMXB4KTtcbn1cblxuLnNlbGVjdENoZWNrYm94OmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlci1jb2xvcjogIzc0ODRhODtcbiAgYmFja2dyb3VuZDogIzM0NDc2ZDtcbn1cblxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmU3ZmE2O1xuICBiYWNrZ3JvdW5kOiAjMjkzNDRjO1xufVxuXG4uZ3JvdXBSb3cubG9ja2VkR3JvdXAgLmdyb3VwQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDAuNDU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICAuZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG4uaWNvbkJ1dHRvbixcbi5taW5pSWNvbkJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5idXR0b25TdmdJY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5taW5pSWNvbkJ1dHRvbiAuYnV0dG9uU3ZnSWNvbiB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG59XG5cbi5pY29uQnV0dG9uOm5vdCguZGFuZ2VyKSxcbi5taW5pSWNvbkJ1dHRvbjpub3QoLmRhbmdlcikge1xuICBjb2xvcjogI2Q4ZGVlYTtcbn1cblxuLnNpZGVTZWFyY2hJbnB1dCxcbi5ncm91cFNlYXJjaElucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDAgMTFweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI1NjcwO1xuICBiYWNrZ3JvdW5kOiAjMWQyMzMwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc2lkZVNlYXJjaElucHV0OmZvY3VzLFxuLmdyb3VwU2VhcmNoSW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG59XG5cbi5ncm91cFNlYXJjaElucHV0IHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLm1vZGFsSXRlbU1ldGEge1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbG9yOiAjOGZhM2NmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi53YXJuaW5nUGlsbCB7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODU2YTM1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzMiwgOTMsIDI1LCAwLjIyKTtcbiAgY29sb3I6ICNmMmM2Nzg7XG59XG5cbi5vcGVyYXRvclBpbGwge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNkOGRlZWE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm9wZXJhdG9yLWVxdWFsIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmU4M2I4O1xuICBjb2xvcjogI2M5ZDdmZjtcbn1cblxuLm9wZXJhdG9yLXJhbmdlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmY5MDcwO1xuICBjb2xvcjogI2M4ZjJjOTtcbn1cblxuLm9wZXJhdG9yLWluY2x1ZGUge1xuICBib3JkZXItY29sb3I6ICM4YzdhYjg7XG4gIGNvbG9yOiAjZTBkMmZmO1xufVxuXG4ub3BlcmF0b3ItbGlrZSB7XG4gIGJvcmRlci1jb2xvcjogIzlhN2E1YTtcbiAgY29sb3I6ICNmZmQ3YjU7XG59XG5cbi5ydWxlV2FybmluZ3Mge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5ydWxlV2FybmluZ3Mgc3BhbiB7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODI2MDNiO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzMCwgOTYsIDU5LCAwLjIpO1xuICBjb2xvcjogI2YyYzY3ODtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYm90dG9tQWNjZXNzUGFuZWwge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi53aGVyZVRvZ2dsZUJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTY2MjdjO1xuICBiYWNrZ3JvdW5kOiAjMWYyNjM4O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi53aGVyZVRvZ2dsZUJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XG59XG5cbi5ib3R0b21XaGVyZVByZXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIycHg7XG4gIHJpZ2h0OiAyMnB4O1xuICBib3R0b206IDc0cHg7XG4gIG1heC1oZWlnaHQ6IDE1NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xuICBiYWNrZ3JvdW5kOiAjMTcxYzI3O1xuICBib3gtc2hhZG93OiAwIDE0cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMzQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm90dG9tV2hlcmVIZWFkZXIge1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMDM5NGQ7XG4gIGNvbG9yOiAjYzZjY2RhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ib3R0b21XaGVyZUhlYWRlciBidXR0b24ge1xuICBtaW4taGVpZ2h0OiAyNnB4O1xuICBwYWRkaW5nOiAwIDlweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ib3R0b21XaGVyZUhlYWRlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xufVxuXG4uYm90dG9tV2hlcmVQcmV2aWV3IHByZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTJweDtcbiAgbWF4LWhlaWdodDogMTE4cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLm1vZGFsUmlnaHRQYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmpvaW5PcGVyYXRvckNvbnRyb2wge1xuICBtaW4taGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIHNwYW4ge1xuICBwYWRkaW5nOiAwIDdweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwIDlweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uOmhvdmVyLFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tb2RhbEl0ZW1JbmZvTGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubW9kYWxJdGVtQ29uZGl0aW9uIHtcbiAgbWluLXdpZHRoOiAwO1xuICBjb2xvcjogI2FlYjZjYSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ubW9kYWxJdGVtQ29uZGl0aW9uIGIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm1vZGFsSXRlbUNvdW50IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiAjOGZhM2NmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ncm91cElkVGl0bGVMaW5lIHtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ncm91cFRpdGxlQWZ0ZXJJZCB7XG4gIG1pbi13aWR0aDogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ydWxlTW9kZVJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5ydWxlTW9kZVJvdyAub3BlcmF0b3JUYWJzIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5vdFRvZ2dsZUJ1dHRvbiB7XG4gIGhlaWdodDogMzZweDtcbiAgbWluLXdpZHRoOiA1OHB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZkNWQ3NjtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNkOGRlZWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xufVxuXG4ubm90VG9nZ2xlQnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzU5YmUwO1xuICBiYWNrZ3JvdW5kOiAjMmIyNjM4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm5vdFRvZ2dsZUJ1dHRvbi5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNkMWE3ZWY7XG4gIGJhY2tncm91bmQ6ICM0OTM0NWY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyMDksIDE2NywgMjM5LCAwLjE4KSBpbnNldDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5ydWxlTW9kZVJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLm5vdFRvZ2dsZUJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2F1dGhvcml0eS9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7Ozs7O0dBQUE7QUFPQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3REFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtC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cUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVVKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQVVKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUEE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFVSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUEE7RUFDSSxnQkFBQTtBQVVKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBVUo7O0FBUEE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVBBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQVVKOztBQVBBO0VBQ0k7SUFDSSwwQkFBQTtFQVVOO0VBUEU7SUFDSSxXQUFBO0VBU047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2V0dGluZ0FyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uc2V0dGluZ3NDb250ZW50IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4vKiAuc291cmNlU2VsZWN0b3JDYXJkLFxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstNDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLTEwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNSkpO1xcbn0gKi9cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnBhbmVsQ2FyZExhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MikpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkPmRpdjpsYXN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sSGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sRGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay04MDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogOHB4IDE0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApO1xcbiAgICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktY29udHJhc3QtdGV4dCwgI2ZmZmZmZik7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsXFxuICAgICAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZSxcXG4gICAgICAgIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmhvdmVyLFxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XFxuICAgIGNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1jb250cmFzdC10ZXh0LCAjZmZmZmZmKTtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApIDI4JSwgdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uYWNjZXNzU2V0dGluZ3NCdXR0b25UZXh0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWxBcmVhIHtcXG4gICAgY29sb3I6ICNmM2Y0ZjY7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBpbnNldDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbEJsb2NrIHtcXG4gICAgd2lkdGg6IG1pbigxMjAwcHgsIGNhbGMoMTAwdncgLSAzMnB4KSk7XFxuICAgIGhlaWdodDogbWluKDgwMHB4LCBjYWxjKDEwMHZoIC0gMzJweCkpO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcXG59XFxuXFxuLm1vZGFsTGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICMyNTJjNDE7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLm1vZGFsTGlzdEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsTGlzdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubW9kYWxMaXN0U3VidGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5maWVsZExpc3Qge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbEl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubW9kYWxJdGVtOmhvdmVyLFxcbi5tb2RhbEl0ZW0uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzM0MDVmO1xcbiAgICBib3JkZXItY29sb3I6ICNiNmM0ZWQ7XFxufVxcblxcbi5tb2RhbEl0ZW1UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1vZGFsSXRlbUluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6ICNiOGJmZDE7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHNwYW4ge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWNhOGM0O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkRmllbGRCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4ubW9kYWxCb3R0b21BY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5qc29uQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjYyN2M7XFxuICAgIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICAgIGNvbG9yOiAjZjNmNGY2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5qc29uQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmpzb25CdXR0b24gaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxSaWdodFBhbmVsIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubW9kYWxJdGVtRnVsbEluZm8ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMzJjO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5yaWdodEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2E0MDUwO1xcbn1cXG5cXG4ucmlnaHRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnJpZ2h0RmllbGQge1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5yaWdodEhlYWRlckFjdGlvbnMsXFxuLnJ1bGVBY3Rpb25zLFxcbi5ncm91cEFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcXG4ucnVsZUFjdGlvbnMge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5pY29uQnV0dG9uLFxcbi5taW5pSWNvbkJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzNHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5taW5pSWNvbkJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmljb25CdXR0b246aG92ZXIsXFxuLm1pbmlJY29uQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzNiNDg2ODtcXG59XFxuXFxuLmljb25CdXR0b24uZGFuZ2VyLFxcbi5taW5pSWNvbkJ1dHRvbi5kYW5nZXIge1xcbiAgICBib3JkZXItY29sb3I6ICM4ZjRmNWI7XFxuICAgIGNvbG9yOiAjZmZiOGMxO1xcbn1cXG5cXG4ucnVsZXNBcmVhIHtcXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnJ1bGVDYXJkIHtcXG4gICAgcGFkZGluZzogMTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzI2MmIzNjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNkNDY1YjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnJ1bGVDYXJkLnNlbGVjdGVkUnVsZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gICAgYmFja2dyb3VuZDogIzJjMzQ0ODtcXG59XFxuXFxuLnJ1bGVIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5ydWxlSW5mbyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLnJ1bGVMYWJlbCB7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnJ1bGVWYWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ucnVsZUFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnJ1bGVDYXJkOmhvdmVyIC5ydWxlQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zbWFsbEJ1dHRvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVhNjY4MDtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuLnNtYWxsQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzNiNDg2ODtcXG59XFxuXFxuLmdyb3Vwc0FyZWEge1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuLnVzZXJzQXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4ucnVsZVVzZXJzQXJlYSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM0NDUwNmE7XFxufVxcblxcbi5hY2Nlc3NFbnRpdHlTZWN0aW9uVGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbn1cXG5cXG4uZ3JvdXBSb3cge1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMjMwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg0MjU4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICBjb2xvcjogI2Q5ZGVlYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmdyb3VwUm93LnVzZXJSb3cge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBib3JkZXItY29sb3I6ICMzZTUyNmY7XFxuICAgIGJhY2tncm91bmQ6ICMxZDI2MzQ7XFxufVxcblxcbi51c2VySWRlbnRpdHkgLmdyb3VwSWRDb3B5QnV0dG9uIHtcXG4gICAgY29sb3I6ICM5ZmI2ZGY7XFxufVxcblxcbi5ncm91cFJvdy5zZWxlY3RlZEdyb3VwIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xcbn1cXG5cXG4uZ3JvdXBSb3cgc3BhbiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ncm91cFJvdzpob3ZlciAuZ3JvdXBBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmFkZFJ1bGVCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM3ODg0OWY7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZFJ1bGVCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMmIzMzQ4O1xcbn1cXG5cXG4uZW1wdHlNaW5pLFxcbi5lbXB0eVJ1bGVzIHtcXG4gICAgY29sb3I6ICM4ZTk2YWE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmVtcHR5UnVsZXMge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzU1NWY3NjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGlhbG9nQXJlYSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpYWxvZ0Jsb2NrIHtcXG4gICAgd2lkdGg6IDUyMHB4O1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZDogIzI1MmIzODtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRjNTY2YztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZGlhbG9nVGl0bGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5kaWFsb2dUZXh0IHtcXG4gICAgY29sb3I6ICNjMmM4ZDU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5kaWFsb2dJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGlhbG9nSW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5kaWFsb2dBY3Rpb25zIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMCAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMzMDM4NGE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2I0NjVkO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTg1NTY1ICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQ6ICM0YTI0MzAgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICNmZmM0Y2MgIWltcG9ydGFudDtcXG59XFxuXFxuLm9wZXJhdG9yVGFicyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ub3BlcmF0b3JUYWJzLmZvdXJUYWJzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG59XFxuXFxuLm9wZXJhdG9yVGFicyBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wZXJhdG9yVGFicyBidXR0b246aG92ZXIsXFxuLm9wZXJhdG9yVGFicyBidXR0b24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogIzM1NDE1YjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnR3b0lucHV0R3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5MaXN0QXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uaW5BZGRSb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uaW5WYWx1ZVJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGdhcDogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5wcmV2aWV3V2hlcmUge1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnByZXZpZXdXaGVyZSBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ub3B0aW9uYWxSdWxlQmxvY2sge1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xcbn1cXG5cXG4ub3B0aW9uYWxSdWxlVGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiAjYzZjY2RhO1xcbn1cXG5cXG4uYnVsa0FjdGlvbkJhciB7XFxuICAgIG1pbi1oZWlnaHQ6IDQycHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMyMDI2Mzc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBjb2xvcjogI2Q4ZGVlYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGwge1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk4NTU2NTtcXG4gICAgYmFja2dyb3VuZDogIzRhMjQzMDtcXG4gICAgY29sb3I6ICNmZmM0Y2M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzYzMzA0MDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94IHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgYWNjZW50LWNvbG9yOiAjOWJhZWUwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZ3JvdXBJZGVudGl0eSB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5ncm91cE5hbWUge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwSWQge1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cE1lbWJlcnMge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIGNvbG9yOiAjOGZhM2NmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcblxcbi5ncm91cElkQ29weUJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xOHMgZWFzZTtcXG59XFxuXFxuLmdyb3VwSWRDb3B5QnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2V0dGluZ05vdGljZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyOHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgei1pbmRleDogMTEwMDA7XFxuICAgIG1pbi13aWR0aDogMjEwcHg7XFxuICAgIHBhZGRpbmc6IDExcHggMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzE4NWFlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2xvYmFsU2V0dGluZ0FjdGlvbnMge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgbWluLWhlaWdodDogNjZweDtcXG4gICAgcGFkZGluZzogMTNweCAyMnB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzNhNDA1MDtcXG4gICAgYmFja2dyb3VuZDogIzIwMjMyYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5zYXZlU3RhdGUge1xcbiAgICBjb2xvcjogIzhlOTZhYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlLmNoYW5nZWQge1xcbiAgICBjb2xvcjogI2YxYzI3ZDtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b24sXFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBwYWRkaW5nOiAwIDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcyOGFjMztcXG4gICAgYmFja2dyb3VuZDogIzM4NTA4MztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jYW5jZWxDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzg0MzViO1xcbn1cXG5cXG4uYXBwbHlDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDY2MTlhO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmRpc2FibGVkLFxcbi5hcHBseUNvbmZpZ0J1dHRvbjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNDU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnN0YXRpY1NlbGVjdGlvbkJhciB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG1pbi1oZWlnaHQ6IDQ2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIuZW1wdHlTZWxlY3Rpb24ge1xcbiAgICBib3JkZXItY29sb3I6ICMzYjQzNTY7XFxuICAgIGJhY2tncm91bmQ6ICMxZjI1MzI7XFxuICAgIGNvbG9yOiAjODc5MGE1O1xcbn1cXG5cXG4uc3RhdGljU2VsZWN0aW9uQmFyIGIge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnN0YXRpY1NlbGVjdGlvbkJhci5lbXB0eVNlbGVjdGlvbiBiIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxufVxcblxcbi5jb21iaW5lZFNlbGVjdGlvbkJhciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3Rpb25Db3VudGVycyxcXG4uc2VsZWN0aW9uQWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc2VsZWN0aW9uQ291bnRlcnMgc3BhbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbDpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNDI7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgYmFja2dyb3VuZDogIzJhMjIzMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU0MzUwO1xcbiAgICBjb2xvcjogIzlhODU5MDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZDogIzJhMjIzMDtcXG59XFxuXFxuLmJvdHRvbUFjY2Vzc1BhbmVsIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE0cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvdHRvbVNlbGVjdGlvbkFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uYm90dG9tQWNjZXNzUGFuZWwgLnNhdmVTdGF0ZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjk3Nzk1O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgICBib3JkZXItY29sb3I6ICNhOWI5ZTA7XFxuICAgIGJhY2tncm91bmQ6ICMyNzMxNDk7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveDpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Q1MjdkO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDlweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmZmZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDFweCwgLTFweCk7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveDpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICBib3JkZXItY29sb3I6ICM3NDg0YTg7XFxuICAgIGJhY2tncm91bmQ6ICMzNDQ3NmQ7XFxufVxcblxcbi5ncm91cFJvdy5sb2NrZWRHcm91cCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzZlN2ZhNjtcXG4gICAgYmFja2dyb3VuZDogIzI5MzQ0YztcXG59XFxuXFxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIC5ncm91cEFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAwLjQ1O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcXG4gICAgLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZ2xvYmFsU2V0dGluZ0J1dHRvbnMge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB9XFxufVxcblxcbi5pY29uQnV0dG9uLFxcbi5taW5pSWNvbkJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5idXR0b25TdmdJY29uIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5taW5pSWNvbkJ1dHRvbiAuYnV0dG9uU3ZnSWNvbiB7XFxuICAgIHdpZHRoOiAxM3B4O1xcbiAgICBoZWlnaHQ6IDEzcHg7XFxufVxcblxcbi5pY29uQnV0dG9uOm5vdCguZGFuZ2VyKSxcXG4ubWluaUljb25CdXR0b246bm90KC5kYW5nZXIpIHtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxufVxcblxcbi5zaWRlU2VhcmNoSW5wdXQsXFxuLmdyb3VwU2VhcmNoSW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMCAxMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjU2NzA7XFxuICAgIGJhY2tncm91bmQ6ICMxZDIzMzA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5zaWRlU2VhcmNoSW5wdXQ6Zm9jdXMsXFxuLmdyb3VwU2VhcmNoSW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxufVxcblxcbi5ncm91cFNlYXJjaElucHV0IHtcXG4gICAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuLm1vZGFsSXRlbU1ldGEge1xcbiAgICBtYXJnaW4tdG9wOiA5cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogN3B4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGNvbG9yOiAjOGZhM2NmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi53YXJuaW5nUGlsbCB7XFxuICAgIHBhZGRpbmc6IDJweCA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODU2YTM1O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzMiwgOTMsIDI1LCAwLjIyKTtcXG4gICAgY29sb3I6ICNmMmM2Nzg7XFxufVxcblxcbi5vcGVyYXRvclBpbGwge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nOiAycHggN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm9wZXJhdG9yLWVxdWFsIHsgYm9yZGVyLWNvbG9yOiAjNmU4M2I4OyBjb2xvcjogI2M5ZDdmZjsgfVxcbi5vcGVyYXRvci1yYW5nZSB7IGJvcmRlci1jb2xvcjogIzZmOTA3MDsgY29sb3I6ICNjOGYyYzk7IH1cXG4ub3BlcmF0b3ItaW5jbHVkZSB7IGJvcmRlci1jb2xvcjogIzhjN2FiODsgY29sb3I6ICNlMGQyZmY7IH1cXG4ub3BlcmF0b3ItbGlrZSB7IGJvcmRlci1jb2xvcjogIzlhN2E1YTsgY29sb3I6ICNmZmQ3YjU7IH1cXG5cXG4ucnVsZVdhcm5pbmdzIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4ucnVsZVdhcm5pbmdzIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgyNjAzYjtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDk2LCA1OSwgMC4yKTtcXG4gICAgY29sb3I6ICNmMmM2Nzg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmJvdHRvbUFjY2Vzc1BhbmVsIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4ud2hlcmVUb2dnbGVCdXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcXG4gICAgYmFja2dyb3VuZDogIzFmMjYzODtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ud2hlcmVUb2dnbGVCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xcbn1cXG5cXG4uYm90dG9tV2hlcmVQcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyMnB4O1xcbiAgICByaWdodDogMjJweDtcXG4gICAgYm90dG9tOiA3NHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcXG4gICAgYmFja2dyb3VuZDogIzE3MWMyNztcXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjM0KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJvdHRvbVdoZXJlSGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzAzOTRkO1xcbiAgICBjb2xvcjogI2M2Y2NkYTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogMjZweDtcXG4gICAgcGFkZGluZzogMCA5cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzNiNDg2ODtcXG59XFxuXFxuLmJvdHRvbVdoZXJlUHJldmlldyBwcmUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIG1heC1oZWlnaHQ6IDExOHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDU7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4ubW9kYWxSaWdodFBhbmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uam9pbk9wZXJhdG9yQ29udHJvbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWUyNDMwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgc3BhbiB7XFxuICAgIHBhZGRpbmc6IDAgN3B4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uam9pbk9wZXJhdG9yQ29udHJvbCBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBhZGRpbmc6IDAgOXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uam9pbk9wZXJhdG9yQ29udHJvbCBidXR0b246aG92ZXIsXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gICAgYmFja2dyb3VuZDogIzM1NDE1YjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvTGluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWxJdGVtQ29uZGl0aW9uIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBjb2xvcjogI2FlYjZjYSAhaW1wb3J0YW50O1xcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ubW9kYWxJdGVtQ29uZGl0aW9uIGIge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1vZGFsSXRlbUNvdW50IHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGNvbG9yOiAjOGZhM2NmICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5ncm91cElkVGl0bGVMaW5lIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ncm91cFRpdGxlQWZ0ZXJJZCB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ydWxlTW9kZVJvdyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5ydWxlTW9kZVJvdyAub3BlcmF0b3JUYWJzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm5vdFRvZ2dsZUJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgbWluLXdpZHRoOiA1OHB4O1xcbiAgICBwYWRkaW5nOiAwIDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZkNWQ3NjtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4ubm90VG9nZ2xlQnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYzU5YmUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmIyNjM4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm5vdFRvZ2dsZUJ1dHRvbi5hY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6ICNkMWE3ZWY7XFxuICAgIGJhY2tncm91bmQ6ICM0OTM0NWY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyMDksIDE2NywgMjM5LCAwLjE4KSBpbnNldDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxuICAgIC5ydWxlTW9kZVJvdyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcblxcbiAgICAubm90VG9nZ2xlQnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nLFxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5kYXNoYm9hcmQtdGVtcGxhdGUtc2V0dGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjMTAxNTE5O1xuICBjb2xvcjogI2VhZjJmNztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnNldHRpbmctc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2V0dGluZy1zZWN0aW9uICsgLnNldHRpbmctc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5tYWluLWxheWVyLXNldHRpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYjM5NDU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxNTFlMjYsICMxMTE4MWYpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5zZXR0aW5nLXNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiAjZjRmOGZiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZXR0aW5nLXNlY3Rpb24tZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICBjb2xvcjogIzhmYTViNTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbn1cblxuLm1haW4tbGF5ZXItc2VsZWN0b3Ige1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM0YTYyNmY7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZDogIzBmMTcxZDtcbn1cblxuLm1haW4tbGF5ZXItc2VsZWN0b3IgYnV0dG9uLCAubWFpbi1sYXllci1zZWxlY3RvciAuYnRuIHtcbiAgY29sb3I6ICMwOWJmZDUgIWltcG9ydGFudDtcbn1cblxuLmFjY2Vzcy1zZXR0aW5nLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjY2Vzcy1zZXR0aW5nLXNlY3Rpb24gLmFjY2Vzc0NvbnRyb2xDYXJkIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJiMzk0NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE1MWUyNiwgIzExMTgxZik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIycHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLmFjY2Vzcy1zZXR0aW5nLXNlY3Rpb24gLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XG4gIGNvbG9yOiAjZjRmOGZiO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWNjZXNzLXNldHRpbmctc2VjdGlvbiAuYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM4ZmE1YjU7XG59XG5cbi8qIEFwcGVhcmFuY2UgYW5kIG1hcCBzaXplIGFjY29tcGFueSB0aGUgb3JpZ2luYWwgYWNjZXNzIGVkaXRvci4gKi9cbi5hdXRob3JpdHktYXBwZWFyYW5jZS1zZXR0aW5nIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJiMzk0NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE1MWUyNiwgIzExMTgxZik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIycHggcmdiYSgwLCAwLCAwLCAwLjE4MDM5MjE1NjkpO1xufVxuXG4uYXV0aG9yaXR5LXNldHRpbmctZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgbWluLXdpZHRoOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hdXRob3JpdHktc2V0dGluZy1maWVsZDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmF1dGhvcml0eS1zZXR0aW5nLWZpZWxkIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQzNTU2NTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTAxOTIwO1xuICBjb2xvcjogI2VhZjJmNztcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLmF1dGhvcml0eS1zZXR0aW5nLWZpZWxkIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYWNjZW50LWNvbG9yOiAjMDBhOWMwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXV0aG9yaXR5L3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUNnQyxzQkFBQTtFQUF3Qiw4QkFBQTtBQUd4RDs7QUFEQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQW1CLFdBQUE7QUFLbkI7O0FBSkE7RUFBc0MsZ0JBQUE7QUFRdEM7O0FBTkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsMENBQUE7QUFTSjs7QUFOQTtFQUF5QixrQkFBQTtFQUFvQixjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7QUFhOUU7O0FBWkE7RUFBK0IsbUJBQUE7RUFBcUIsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGlCQUFBO0FBbUJyRjs7QUFsQkE7RUFBdUIsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLDBCQUFBO0VBQTRCLGtCQUFBO0VBQW9CLG1CQUFBO0FBMEJ0Rzs7QUF6QkE7RUFBeUQseUJBQUE7QUE2QnpEOztBQTVCQTtFQUEwQixXQUFBO0FBZ0MxQjs7QUE5QkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsMENBQUE7QUFpQ0o7O0FBOUJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBaUNKOztBQTlCQTtFQUFvRCxjQUFBO0FBa0NwRDs7QUFoQ0Esa0VBQUE7QUFDQTtFQUFnQyxhQUFBO0VBQWMseUJBQUE7RUFBMEIsbUJBQUE7RUFBb0IscURBQUE7RUFBb0Qsa0RBQUE7QUF3Q2hKOztBQXZDQTtFQUEyQixhQUFBO0VBQWMsc0JBQUE7RUFBdUIsUUFBQTtFQUFTLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxlQUFBO0FBZ0QxRzs7QUEvQ0E7RUFBc0MsZ0JBQUE7QUFtRHRDOztBQWxEQTtFQUFrQyxXQUFBO0VBQVksZ0JBQUE7RUFBaUIsaUJBQUE7RUFBa0IseUJBQUE7RUFBMEIsa0JBQUE7RUFBbUIsbUJBQUE7RUFBb0IsY0FBQTtFQUFlLGFBQUE7QUE2RGpLOztBQTVEQTtFQUE2QyxXQUFBO0VBQVksU0FBQTtFQUFVLHFCQUFBO0FBa0VuRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcsXFxuLmRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG5cXG4uZGFzaGJvYXJkLXRlbXBsYXRlLXNldHRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZDogIzEwMTUxOTtcXG4gICAgY29sb3I6ICNlYWYyZjc7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5zZXR0aW5nLXNlY3Rpb24geyB3aWR0aDogMTAwJTsgfVxcbi5zZXR0aW5nLXNlY3Rpb24gKyAuc2V0dGluZy1zZWN0aW9uIHsgbWFyZ2luLXRvcDogMTRweDsgfVxcblxcbi5tYWluLWxheWVyLXNldHRpbmctc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjM5NDU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxNTFlMjYsICMxMTE4MWYpO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHJnYmEoMCwgMCwgMCwgLjE4KTtcXG59XFxuXFxuLnNldHRpbmctc2VjdGlvbi10aXRsZSB7IG1hcmdpbi1ib3R0b206IDRweDsgY29sb3I6ICNmNGY4ZmI7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbi5zZXR0aW5nLXNlY3Rpb24tZGVzY3JpcHRpb24geyBtYXJnaW4tYm90dG9tOiAxMXB4OyBjb2xvcjogIzhmYTViNTsgZm9udC1zaXplOiAxMnB4OyBsaW5lLWhlaWdodDogMS40NTsgfVxcbi5tYWluLWxheWVyLXNlbGVjdG9yIHsgd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMXB4IGRhc2hlZCAjNGE2MjZmOyBib3JkZXItcmFkaXVzOiA3cHg7IGJhY2tncm91bmQ6ICMwZjE3MWQ7IH1cXG4ubWFpbi1sYXllci1zZWxlY3RvciBidXR0b24sIC5tYWluLWxheWVyLXNlbGVjdG9yIC5idG4geyBjb2xvcjogIzA5YmZkNSAhaW1wb3J0YW50OyB9XFxuLmFjY2Vzcy1zZXR0aW5nLXNlY3Rpb24geyB3aWR0aDogMTAwJTsgfVxcblxcbi5hY2Nlc3Mtc2V0dGluZy1zZWN0aW9uIC5hY2Nlc3NDb250cm9sQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYjM5NDU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxNTFlMjYsICMxMTE4MWYpO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHJnYmEoMCwgMCwgMCwgLjE4KTtcXG59XFxuXFxuLmFjY2Vzcy1zZXR0aW5nLXNlY3Rpb24gLmFjY2Vzc0NvbnRyb2xUaXRsZSB7XFxuICAgIGNvbG9yOiAjZjRmOGZiO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYWNjZXNzLXNldHRpbmctc2VjdGlvbiAuYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHsgY29sb3I6ICM4ZmE1YjU7IH1cXG5cXG4vKiBBcHBlYXJhbmNlIGFuZCBtYXAgc2l6ZSBhY2NvbXBhbnkgdGhlIG9yaWdpbmFsIGFjY2VzcyBlZGl0b3IuICovXFxuLmF1dGhvcml0eS1hcHBlYXJhbmNlLXNldHRpbmcgeyBwYWRkaW5nOjE2cHg7IGJvcmRlcjoxcHggc29saWQgIzJiMzk0NTsgYm9yZGVyLXJhZGl1czoxMHB4OyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxNDVkZWcsIzE1MWUyNiwjMTExODFmKTsgYm94LXNoYWRvdzowIDhweCAyMnB4ICMwMDAwMDAyZTsgfVxcbi5hdXRob3JpdHktc2V0dGluZy1maWVsZCB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6OHB4OyBtYXJnaW4tYm90dG9tOjE4cHg7IG1pbi13aWR0aDowOyBmb250LXNpemU6MTJweDsgfVxcbi5hdXRob3JpdHktc2V0dGluZy1maWVsZDpsYXN0LWNoaWxkIHsgbWFyZ2luLWJvdHRvbTowOyB9XFxuLmF1dGhvcml0eS1zZXR0aW5nLWZpZWxkIHNlbGVjdCB7IHdpZHRoOjEwMCU7IG1pbi1oZWlnaHQ6MzZweDsgcGFkZGluZzo3cHggMTBweDsgYm9yZGVyOjFweCBzb2xpZCAjNDM1NTY1OyBib3JkZXItcmFkaXVzOjVweDsgYmFja2dyb3VuZDojMTAxOTIwOyBjb2xvcjojZWFmMmY3OyBmb250OmluaGVyaXQ7IH1cXG4uYXV0aG9yaXR5LXNldHRpbmctZmllbGQgaW5wdXRbdHlwZT1yYW5nZV0geyB3aWR0aDoxMDAlOyBtYXJnaW46MDsgYWNjZW50LWNvbG9yOiMwMGE5YzA7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9BY2Nlc3NTZXR0aW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL0FjY2Vzc1NldHRpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3NldHRpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc2V0dGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB0eXBlIExpdGVyYWxUeXBlPSdzdHJpbmcnfCdudW1iZXInfCdib29sZWFuJ3wnZGF0ZSd8J2d1aWQnfCdnZW9tZXRyeSc7XG5leHBvcnQgZnVuY3Rpb24gYWNjZXNzVmFsdWUodmFsdWU6dW5rbm93bik6e3ZhbHVlOnN0cmluZztxdW90ZWQ6Ym9vbGVhbn17XG4gY29uc3QgdGV4dD1TdHJpbmcodmFsdWU/PycnKS50cmltKCkscXVvdGU9dGV4dFswXTtcbiBpZih0ZXh0Lmxlbmd0aD49MiYmKHF1b3RlPT09XCInXCJ8fHF1b3RlPT09J1wiJykmJnRleHQuYXQoLTEpPT09cXVvdGUpcmV0dXJuIHt2YWx1ZTp0ZXh0LnNsaWNlKDEsLTEpLnNwbGl0KHF1b3RlK3F1b3RlKS5qb2luKHF1b3RlKSxxdW90ZWQ6dHJ1ZX07XG4gcmV0dXJuIHt2YWx1ZTp0ZXh0LHF1b3RlZDpmYWxzZX07XG59XG5leHBvcnQgZnVuY3Rpb24gYWNjZXNzTGl0ZXJhbChpbnB1dDp1bmtub3duLHR5cGU/OkxpdGVyYWxUeXBlKTpzdHJpbmd8bnVsbHtcbiBjb25zdCB7dmFsdWUscXVvdGVkfT1hY2Nlc3NWYWx1ZShpbnB1dCk7XG4gaWYodHlwZT09PSdnZW9tZXRyeScpcmV0dXJuIG51bGw7XG4gaWYodHlwZT09PSdudW1iZXInKXJldHVybiAvXlstK10/XFxkKyg/OlxcLlxcZCspPyQvLnRlc3QodmFsdWUpJiZOdW1iZXIuaXNGaW5pdGUoTnVtYmVyKHZhbHVlKSk/U3RyaW5nKE51bWJlcih2YWx1ZSkpOm51bGw7XG4gaWYodHlwZT09PSdib29sZWFuJyl7aWYoL14odHJ1ZXwxfHllc3xoYXzQtNCwKSQvaS50ZXN0KHZhbHVlKSlyZXR1cm4gJzEnO2lmKC9eKGZhbHNlfDB8bm98eW8ucXzQvdC10YIpJC9pLnRlc3QodmFsdWUpKXJldHVybiAnMCc7cmV0dXJuIG51bGx9XG4gaWYodHlwZT09PSdkYXRlJylyZXR1cm4gL15cXGR7NH0tXFxkezJ9LVxcZHsyfSg/OlsgVF1cXGR7Mn06XFxkezJ9OlxcZHsyfSk/JC8udGVzdCh2YWx1ZSk/YERBVEUgJyR7dmFsdWV9J2A6bnVsbDtcbiBpZighdHlwZSYmIXF1b3RlZCYmL15bLStdP1xcZCsoPzpcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSYmTnVtYmVyLmlzRmluaXRlKE51bWJlcih2YWx1ZSkpKXJldHVybiB2YWx1ZTtcbiByZXR1cm4gXCInXCIrdmFsdWUucmVwbGFjZSgvJy9nLFwiJydcIikrXCInXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gYWNjZXNzUnVsZVNxbChmaWVsZDpzdHJpbmcscnVsZTp7b3BlcmF0b3I6c3RyaW5nO3ZhbHVlPzp1bmtub3duO3ZhbHVlcz86dW5rbm93bltdO2Zyb20/OnVua25vd247dG8/OnVua25vd247aXNOb3Q/OmJvb2xlYW59LHR5cGU/OkxpdGVyYWxUeXBlKTpzdHJpbmd7XG4gaWYoIVsnZXF1YWwnLCdyYW5nZScsJ2luY2x1ZGUnLCdsaWtlJywnYmVmb3JlJywnYWZ0ZXInXS5pbmNsdWRlcyhydWxlLm9wZXJhdG9yKSlyZXR1cm4gJzE9MCc7XG4gaWYoIS9eW2EtekEtWl9dXFx3Kig/OlxcLlthLXpBLVpfXVxcdyopKiQvLnRlc3QoZmllbGQpfHx0eXBlPT09J2dlb21ldHJ5JylyZXR1cm4gJzE9MCc7XG4gY29uc3QgaW5wdXRzPXJ1bGUub3BlcmF0b3I9PT0naW5jbHVkZSc/cnVsZS52YWx1ZXN8fFtdOnJ1bGUub3BlcmF0b3I9PT0ncmFuZ2UnP1tydWxlLmZyb20scnVsZS50b106W3J1bGUudmFsdWVdO1xuIGlmKCFpbnB1dHMubGVuZ3RoKXJldHVybiAnMT0wJztjb25zdCB2YWx1ZXM9aW5wdXRzLm1hcCh2YWx1ZT0+YWNjZXNzTGl0ZXJhbCh2YWx1ZSx0eXBlKSk7aWYodmFsdWVzLnNvbWUodmFsdWU9PnZhbHVlPT09bnVsbCkpcmV0dXJuICcxPTAnO1xuIGNvbnN0IHdoZXJlPXJ1bGUub3BlcmF0b3I9PT0nZXF1YWwnP2Ake2ZpZWxkfSA9ICR7dmFsdWVzWzBdfWA6cnVsZS5vcGVyYXRvcj09PSdyYW5nZSc/YCR7ZmllbGR9IEJFVFdFRU4gJHt2YWx1ZXNbMF19IEFORCAke3ZhbHVlc1sxXX1gOnJ1bGUub3BlcmF0b3I9PT0naW5jbHVkZSc/YCR7ZmllbGR9IElOICgke3ZhbHVlcy5qb2luKCcsICcpfSlgOnJ1bGUub3BlcmF0b3I9PT0nbGlrZSc/YCR7ZmllbGR9IExJS0UgJHthY2Nlc3NMaXRlcmFsKHJ1bGUudmFsdWUsJ3N0cmluZycpfWA6cnVsZS5vcGVyYXRvcj09PSdiZWZvcmUnP2Ake2ZpZWxkfSA8ICR7dmFsdWVzWzBdfWA6cnVsZS5vcGVyYXRvcj09PSdhZnRlcic/YCR7ZmllbGR9ID4gJHt2YWx1ZXNbMF19YDonMT0wJztcbiByZXR1cm4gcnVsZS5pc05vdD9gTk9UICgke3doZXJlfSlgOndoZXJlO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBEZXNpZ25WYXJpYW50LCBMYW5ndWFnZSB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGNvbnN0IERFU0lHTlM6IHJlYWRvbmx5IHsgaWQ6IERlc2lnblZhcmlhbnQ7IG5hbWU6IFJlY29yZDxMYW5ndWFnZSwgc3RyaW5nPjsgY2FwdGlvbjogUmVjb3JkPExhbmd1YWdlLCBzdHJpbmc+IH1bXSA9IFtcbiAgeyBpZDogJ29yaWdpbmFsJywgbmFtZToge3J1OifQotC10LrRg9GJ0LjQuScsdXo6J0Fzb3NpeScsZW46J09yaWdpbmFsJ30sIGNhcHRpb246e3J1OifQmtCw0YDRgtCwINC4INGA0LDRgdC60YDRi9Cy0LDRjtGJ0LjQtdGB0Y8g0LrQsNGA0YLQvtGH0LrQuCcsdXo6J1hhcml0YSB2YSBrYXJ0b2Noa2FsYXInLGVuOidNYXAgYW5kIGV4cGFuZGluZyBjYXJkcyd9IH0sXG4gIHsgaWQ6ICdhdGxhcycsIG5hbWU6IHtydTon0JDRgtC70LDRgScsdXo6J0F0bGFzJyxlbjonQXRsYXMnfSwgY2FwdGlvbjp7cnU6J9Ch0LLQtdGC0LvQsNGPINGA0LXQtNCw0LrRhtC40L7QvdC90LDRjyDQv9C+0LTQsNGH0LAnLHV6OidZb3J1Z8q7IGF0bGFzIHVzbHViaScsZW46J0EgbGlnaHQgZWRpdG9yaWFsIGF0bGFzJ30gfSxcbiAgeyBpZDogJ29yYml0JywgbmFtZToge3J1OifQntGA0LHQuNGC0LAnLHV6OidPcmJpdGEnLGVuOidPcmJpdCd9LCBjYXB0aW9uOntydTon0JrQvtGB0LzQuNGH0LXRgdC60LDRjyDQvtCx0YHQtdGA0LLQsNGC0L7RgNC40Y8nLHV6OidLb3NtaWsgb2JzZXJ2YXRvcml5YScsZW46J0Egc3BhY2Ugb2JzZXJ2YXRvcnknfSB9LFxuICB7IGlkOiAncmVsaWVmJywgbmFtZToge3J1OifQoNC10LvRjNC10YQnLHV6OidSZWx5ZWYnLGVuOidSZWxpZWYnfSwgY2FwdGlvbjp7cnU6J9Ce0LHRitGR0LzQvdGL0Lkg0LzQsNC60LXRgiDRgtC10YDRgNC40YLQvtGA0LjQuCcsdXo6J0h1ZHVkbmluZyBoYWptbGkgbWFrZXRpJyxlbjonQSBkaW1lbnNpb25hbCB0ZXJyaXRvcnkgbW9kZWwnfSB9LFxuICB7IGlkOiAnbW9zYWljJywgbmFtZToge3J1OifQnNC+0LfQsNC40LrQsCcsdXo6J01vemFpa2EnLGVuOidNb3NhaWMnfSwgY2FwdGlvbjp7cnU6J9Ca0YDRg9C/0L3QsNGPINGC0LjQv9C+0LPRgNCw0YTQuNC60LAg0Lgg0LHQu9C+0LrQuCcsdXo6J1lpcmlrIG1hdG4gdmEgYmxva2xhcicsZW46J0JvbGQgdHlwZSBhbmQgbW9kdWxhciBibG9ja3MnfSB9LFxuICB7IGlkOiAnY29udG91cicsIG5hbWU6IHtydTon0JrQvtC90YLRg9GAJyx1ejonS29udHVyJyxlbjonQ29udG91cid9LCBjYXB0aW9uOntydTon0JrQsNGA0YLQvtCz0YDQsNGE0LjRh9C10YHQutC+0LUg0LHRjtGA0L4nLHV6OidLYXJ0b2dyYWZpeWEgYnl1cm9zaScsZW46J0EgY2FydG9ncmFwaGljIGF0ZWxpZXInfSB9LFxuICB7IGlkOiAncGFub3JhbWEnLCBuYW1lOiB7cnU6J9Cf0LDQvdC+0YDQsNC80LAnLHV6OidQYW5vcmFtYScsZW46J1Bhbm9yYW1hJ30sIGNhcHRpb246e3J1OifQktC+0LfQtNGD0YUsINC/0LXQudC30LDQtiDQuCDRgdC/0L7QutC+0LnRgdGC0LLQuNC1Jyx1ejonTWFuemFyYSB2YSBvc295aXNodGFsaWsnLGVuOidPcGVuIHNwYWNlIGFuZCBxdWlldCBsYW5kc2NhcGVzJ30gfSxcbiAgeyBpZDogJ3BvcmNlbGFpbicsIG5hbWU6e3J1OifQpNCw0YDRhNC+0YAnLHV6OidDaGlubmknLGVuOidQb3JjZWxhaW4nfSwgY2FwdGlvbjp7cnU6J9Ch0LLQtdGC0LvRi9C5INGB0LrRg9C70YzQv9GC0YPRgNC90YvQuSDQvNCw0LrQtdGCJyx1ejonWW9ydWfKuyBoYXlrYWx0YXJvc2hsaWsgbWFrZXRpJyxlbjonQSBsaWdodCBzY3VscHR1cmFsIG1vZGVsJ30gfSxcbiAgeyBpZDogJ2F1cm9yYScsIG5hbWU6e3J1OifQodC40Y/QvdC40LUnLHV6OidZb2fKu2R1JyxlbjonQXVyb3JhJ30sIGNhcHRpb246e3J1OifQodCy0LXRgiwg0LPQu9GD0LHQuNC90LAg0Lgg0LbQuNCy0LDRjyDQs9C10L7Qs9GA0LDRhNC40Y8nLHV6OidZb3J1Z8q7bGlrIHZhIGpvbmxpIGdlb2dyYWZpeWEnLGVuOidMaWdodCwgZGVwdGggYW5kIGxpdmluZyBnZW9ncmFwaHknfSB9LFxuICB7IGlkOiAnbmV4dXMnLCBuYW1lOntydTon0KHQstGP0LfQuCcsdXo6J0Fsb3FhbGFyJyxlbjonTmV4dXMnfSwgY2FwdGlvbjp7cnU6J9Ca0LDRgNGC0LAg0LIg0YbQtdC90YLRgNC1INC90LDQv9GA0LDQstC70LXQvdC40LknLHV6OidZb8q7bmFsaXNobGFyIG1hcmthemlkYWdpIHhhcml0YScsZW46J0dlb2dyYXBoeSBhdCB0aGUgY2VudGVyIG9mIHByb2plY3RzJ30gfVxuXVxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkRGVzaWduKHZhbHVlPzogc3RyaW5nKTogRGVzaWduVmFyaWFudCB7IHJldHVybiBERVNJR05TLmZpbmQoZGVzaWduID0+IGRlc2lnbi5pZCA9PT0gdmFsdWUpPy5pZCB8fCAnb3JpZ2luYWwnIH1cbmV4cG9ydCB7bGFiVGV4dH0gZnJvbSAnLi4vdHJhbnNsYXRpb25zL2Rlc2lnbnMnO1xuIiwiaW1wb3J0IHthY2Nlc3NSdWxlU3FsLHR5cGUgTGl0ZXJhbFR5cGV9IGZyb20gJy4uLy4uL2NvbmZpZy9BY2Nlc3NWYWx1ZXMnO1xuaW1wb3J0IHsgUmVhY3QsIGdldEFwcFN0b3JlIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCBcIi4vQWNjZXNzU2V0dGluZy5jc3NcIjtcblxuZXhwb3J0IHR5cGUgUnVsZU9wZXJhdG9yID0gXCJlcXVhbFwiIHwgXCJyYW5nZVwiIHwgXCJpbmNsdWRlXCIgfCBcImxpa2VcIjtcblxuZXhwb3J0IHR5cGUgQWNjZXNzUnVsZSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG9wZXJhdG9yOiBSdWxlT3BlcmF0b3I7XG4gICAgaXNOb3Q/OiBib29sZWFuO1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIGZyb20/OiBzdHJpbmc7XG4gICAgdG8/OiBzdHJpbmc7XG4gICAgdmFsdWVzPzogc3RyaW5nW107XG4gICAgZ3JvdXBzOiBzdHJpbmdbXTtcbiAgICB1c2Vyczogc3RyaW5nW107XG59O1xuXG5leHBvcnQgdHlwZSBBY2Nlc3NGaWVsZFJ1bGUgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgZmllbGRUeXBlPzpMaXRlcmFsVHlwZTtcbiAgICBydWxlczogQWNjZXNzUnVsZVtdO1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzRmllbGRKb2luT3BlcmF0b3IgPSBcImFuZFwiIHwgXCJvclwiO1xuXG5leHBvcnQgdHlwZSBBY2Nlc3NDb25maWcgPSB7XG4gICAgZnVsbEFjY2Vzc0dyb3Vwczogc3RyaW5nW107XG4gICAgZnVsbEFjY2Vzc1VzZXJzOiBzdHJpbmdbXTtcbiAgICBydWxlczogQWNjZXNzRmllbGRSdWxlW107XG4gICAgLyoqXG4gICAgICog0JrQsNC6INC+0LHRitC10LTQuNC90Y/RgtGMINGA0LDQt9C90YvQtSDRgdGC0L7Qu9Cx0YbRiyDQtNC70Y8g0L7QtNC90L7QuSDQs9GA0YPQv9C/0YsuXG4gICAgICog0J/RgNCw0LLQuNC70LAg0LLQvdGD0YLRgNC4INC+0LTQvdC+0LPQviDRgdGC0L7Qu9Cx0YbQsCDQstGB0LXQs9C00LAg0L7QsdGK0LXQtNC40L3Rj9GO0YLRgdGPINGH0LXRgNC10LcgT1IuXG4gICAgICovXG4gICAgZmllbGRKb2luT3BlcmF0b3I/OiBBY2Nlc3NGaWVsZEpvaW5PcGVyYXRvcjtcbn07XG5cbnR5cGUgUG9ydGFsR3JvdXBJbmZvID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB1c2Vyc0NvdW50OiBudW1iZXIgfCBudWxsO1xuICAgIGlzVW5hdmFpbGFibGU/OiBib29sZWFuO1xufTtcblxudHlwZSBQb3J0YWxVc2VySW5mbyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIGZ1bGxOYW1lPzogc3RyaW5nO1xuICAgIGlzVW5hdmFpbGFibGU/OiBib29sZWFuO1xufTtcblxudHlwZSBFc3JpUmVxdWVzdEZ1bmN0aW9uID0gKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAgIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPjtcbiAgICAgICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xuICAgIH0sXG4pID0+IFByb21pc2U8eyBkYXRhOiBhbnkgfT47XG5cbnR5cGUgRGlhbG9nU3RhdGUgPSBudWxsIHwge1xuICAgIHR5cGU6XG4gICAgfCBcImFkZEZpZWxkXCJcbiAgICB8IFwiZWRpdEZpZWxkXCJcbiAgICB8IFwiZGVsZXRlRmllbGRcIlxuICAgIHwgXCJhZGRSdWxlXCJcbiAgICB8IFwiZWRpdFJ1bGVcIlxuICAgIHwgXCJkZWxldGVSdWxlXCJcbiAgICB8IFwiYWRkR3JvdXBcIlxuICAgIHwgXCJlZGl0R3JvdXBcIlxuICAgIHwgXCJkZWxldGVHcm91cFwiXG4gICAgfCBcImFkZEdsb2JhbEdyb3VwXCJcbiAgICB8IFwiZWRpdEdsb2JhbEdyb3VwXCJcbiAgICB8IFwiZGVsZXRlR2xvYmFsR3JvdXBcIlxuICAgIHwgXCJhZGRVc2VyXCJcbiAgICB8IFwiZWRpdFVzZXJcIlxuICAgIHwgXCJkZWxldGVVc2VyXCJcbiAgICB8IFwiYWRkR2xvYmFsVXNlclwiXG4gICAgfCBcImVkaXRHbG9iYWxVc2VyXCJcbiAgICB8IFwiZGVsZXRlR2xvYmFsVXNlclwiO1xuICAgIHBheWxvYWQ/OiBhbnk7XG59O1xuXG5jb25zdCBHTE9CQUxfQUNDRVNTX0lEID0gXCJfX2dsb2JhbF9hY2Nlc3NfX1wiO1xuXG5jb25zdCBFZGl0SWNvbiA9ICgpID0+IChcbiAgICA8c3ZnIGNsYXNzTmFtZT1cImJ1dHRvblN2Z0ljb25cIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTcuNTE5NTMxIDAuMDc4MTI1IEMxNy4yMzQzNzUgMC4xMzY3MTkgMTYuOTE3OTY5IDAuMjc3MzQ0IDE2LjY5MTQwNiAwLjQ0OTIxOSBDMTYuNTY2NDA2IDAuNTM5MDYyIDE2LjIwMzEyNSAwLjg4MjgxMiAxNS44Nzg5MDYgMS4yMDcwMzEgTDE1LjI5Mjk2OSAxLjc5Njg3NSBMMTYuNzY5NTMxIDMuMjY5NTMxIEwxOC4yNDIxODggNC43NDYwOTQgTDE4Ljg2NzE4OCA0LjEyMTA5NCBDMTkuMjE0ODQ0IDMuNzc3MzQ0IDE5LjU1ODU5NCAzLjM5ODQzOCAxOS42NDA2MjUgMy4yODEyNSBDMjAuMTk1MzEyIDIuNDQ1MzEyIDIwLjA4OTg0NCAxLjM3MTA5NCAxOS4zNzg5MDYgMC42NjAxNTYgQzE4Ljg4MjgxMiAwLjE2NDA2MiAxOC4xODc1IC0wLjA1NDY4NzUgMTcuNTE5NTMxIDAuMDc4MTI1IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTExLjA2NjQwNiA2LjAyMzQzOCBDOC4zOTA2MjUgOC43MDMxMjUgNy43MzQzNzUgOS4zODI4MTIgNy43MDMxMjUgOS40OTIxODggQzcuNjgzNTk0IDkuNTY2NDA2IDcuNTM5MDYyIDEwLjI3NzM0NCA3LjM4MjgxMiAxMS4wNzQyMTkgQzcuMTkxNDA2IDEyLjAzNTE1NiA3LjEwNTQ2OSAxMi41NTQ2ODggNy4xMjEwOTQgMTIuNjI4OTA2IEM3LjE1NjI1IDEyLjc2NTYyNSA3LjI3MzQzOCAxMi44ODI4MTIgNy40MTAxNTYgMTIuOTE3OTY5IEM3LjU1ODU5NCAxMi45NTMxMjUgMTAuNTM5MDYyIDEyLjM1OTM3NSAxMC42OTE0MDYgMTIuMjY1NjI1IEMxMC43NSAxMi4yMjY1NjIgMTIuMjc3MzQ0IDEwLjcxODc1IDE0LjA4MjAzMSA4LjkxMDE1NiBMMTcuMzYzMjgxIDUuNjI1IEwxNS44OTg0MzggNC4xNjAxNTYgQzE1LjA5Mzc1IDMuMzU1NDY5IDE0LjQyNTc4MSAyLjY5NTMxMiAxNC40MTQwNjIgMi42OTUzMTIgQzE0LjQwMjM0NCAyLjY5NTMxMiAxMi44OTg0MzggNC4xOTUzMTIgMTEuMDY2NDA2IDYuMDIzNDM4IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTIuMDQyOTY5IDMuNDE3OTY5IEMxLjI5Mjk2OSAzLjU1NDY4OCAwLjU5NzY1NiA0LjA4NTkzOCAwLjI1NzgxMiA0Ljc4NTE1NiBDLTAuMDE1NjI1IDUuMzQ3NjU2IC0wLjAwMzkwNjI1IDQuOTUzMTI1IDAuMDA3ODEyNSAxMS44MzU5MzggTDAuMDE5NTMxMiAxOC4wMjczNDQgTDAuMTA1NDY5IDE4LjI4MTI1IEMwLjIzNDM3NSAxOC42NTYyNSAwLjQ1NzAzMSAxOS4wMDc4MTIgMC43NDIxODggMTkuMjk2ODc1IEMxLjAzNTE1NiAxOS41ODk4NDQgMS4zMjQyMTkgMTkuNzY5NTMxIDEuNzA3MDMxIDE5LjkwMjM0NCBMMS45NzI2NTYgMjAgTDE0LjY0NDUzMSAyMCBMMTQuOTQ5MjE5IDE5LjkwMjM0NCBDMTUuNzM0Mzc1IDE5LjY1NjI1IDE2LjM1MTU2MiAxOSAxNi41ODk4NDQgMTguMTYwMTU2IEMxNi42NTYyNSAxNy45MjU3ODEgMTYuNjYwMTU2IDE3LjY3MTg3NSAxNi42NjAxNTYgMTQuMjczNDM4IEwxNi42NjAxNTYgMTAuNjM2NzE5IEwxNi41NDI5NjkgMTAuNDQ5MjE5IEMxNi4zNzEwOTQgMTAuMTcxODc1IDE2LjA4MjAzMSAxMC4wMjM0MzggMTUuNzY5NTMxIDEwLjA1MDc4MSBDMTUuNDk2MDk0IDEwLjA3NDIxOSAxNS4yODEyNSAxMC4yMDMxMjUgMTUuMTI4OTA2IDEwLjQzNzUgTDE1LjAxOTUzMSAxMC42MDE1NjIgTDE1IDE0LjE5NTMxMiBDMTQuOTgwNDY5IDE3LjQ4NDM3NSAxNC45NzY1NjIgMTcuODA0Njg4IDE0LjkxNDA2MiAxNy45MTQwNjIgQzE0LjgyMDMxMiAxOC4wODU5MzggMTQuNTk3NjU2IDE4LjI2OTUzMSAxNC40MjU3ODEgMTguMzIwMzEyIEMxNC4zMjAzMTIgMTguMzUxNTYyIDEyLjUxMTcxOSAxOC4zNTkzNzUgOC4yMzgyODEgMTguMzUxNTYyIEwyLjE5OTIxOSAxOC4zMzk4NDQgTDIuMDQ2ODc1IDE4LjIzNDM3NSBDMS45NjQ4NDQgMTguMTc1NzgxIDEuODUxNTYyIDE4LjA2MjUgMS43OTY4NzUgMTcuOTgwNDY5IEwxLjY5OTIxOSAxNy44MzU5MzggTDEuNjg3NSAxMS43NSBDMS42Nzk2ODggNS44MTY0MDYgMS42Nzk2ODggNS42NjAxNTYgMS43NTM5MDYgNS41MTU2MjUgQzEuNzk2ODc1IDUuNDM3NSAxLjg3ODkwNiA1LjMyNDIxOSAxLjk0MTQwNiA1LjI2NTYyNSBDMi4xODc1IDUuMDI3MzQ0IDIuMDE1NjI1IDUuMDM5MDYyIDUuODA0Njg4IDUuMDM5MDYyIEM4LjQzMzU5NCA1LjAzOTA2MiA5LjMwODU5NCA1LjAyNzM0NCA5LjQyOTY4OCA0Ljk5MjE4OCBDOS42NTIzNDQgNC45MjU3ODEgOS44OTQ1MzEgNC42NzE4NzUgOS45NTcwMzEgNC40NDE0MDYgQzEwLjA2MjUgNC4wNzAzMTIgOS45MDYyNSAzLjY3OTY4OCA5LjU3ODEyNSAzLjQ4ODI4MSBMOS4zOTQ1MzEgMy4zNzg5MDYgTDUuODU5Mzc1IDMuMzcxMDk0IEMzLjA3ODEyNSAzLjM2NzE4OCAyLjI2NTYyNSAzLjM3NSAyLjA0Mjk2OSAzLjQxNzk2OSBaXCIgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmNvbnN0IFRyYXNoSWNvbiA9ICgpID0+IChcbiAgICA8c3ZnIGNsYXNzTmFtZT1cImJ1dHRvblN2Z0ljb25cIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNy45MzM1OTQgMS45Mzc1IEM3LjYwOTM3NSAyLjAyMzQzOCA3LjI4OTA2MiAyLjIxNDg0NCA3LjA1ODU5NCAyLjQ1NzAzMSBDNi44MDg1OTQgMi43MTQ4NDQgNi42OTkyMTkgMi45MjU3ODEgNi41MjczNDQgMy40NDUzMTIgQzYuMzg2NzE5IDMuODY3MTg4IDYuMjAzMTI1IDQuMTIxMDk0IDUuOTIxODc1IDQuMjY5NTMxIEM1Ljc2NTYyNSA0LjM1MTU2MiA1LjcxNDg0NCA0LjM1NTQ2OSA0LjIzMDQ2OSA0LjM3NSBDMi43NTM5MDYgNC4zOTQ1MzEgMi42OTUzMTIgNC4zOTg0MzggMi41ODk4NDQgNC40NzY1NjIgQzIuMjA3MDMxIDQuNzYxNzE5IDIuMjA3MDMxIDUuMjM4MjgxIDIuNTg5ODQ0IDUuNTIzNDM4IEwyLjY5OTIxOSA1LjYwNTQ2OSBMMTcuMzAwNzgxIDUuNjA1NDY5IEwxNy40MTAxNTYgNS41MjM0MzggQzE3Ljc5Mjk2OSA1LjIzODI4MSAxNy43OTI5NjkgNC43NjE3MTkgMTcuNDEwMTU2IDQuNDc2NTYyIEMxNy4zMDQ2ODggNC4zOTg0MzggMTcuMjQ2MDk0IDQuMzk0NTMxIDE1Ljc2OTUzMSA0LjM3NSBDMTQuMjg1MTU2IDQuMzU1NDY5IDE0LjIzNDM3NSA0LjM1MTU2MiAxNC4wNzgxMjUgNC4yNjk1MzEgQzEzLjc5Njg3NSA0LjEyMTA5NCAxMy42MTMyODEgMy44NjcxODggMTMuNDcyNjU2IDMuNDQ1MzEyIEMxMy4zMDA3ODEgMi45MjU3ODEgMTMuMTkxNDA2IDIuNzE0ODQ0IDEyLjk0MTQwNiAyLjQ1NzAzMSBDMTIuNzAzMTI1IDIuMjA3MDMxIDEyLjM5MDYyNSAyLjAyMzQzOCAxMi4wNTA3ODEgMS45MzM1OTQgQzExLjcxODc1IDEuODQ3NjU2IDguMjUzOTA2IDEuODUxNTYyIDcuOTMzNTk0IDEuOTM3NSBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk00LjEyMTA5NCA2LjQ4ODI4MSBDNC4wNTg1OTQgNi41MDM5MDYgMy45NTMxMjUgNi41NjY0MDYgMy44OTA2MjUgNi42MjUgQzMuNjQ4NDM4IDYuODUxNTYyIDMuNjQ4NDM4IDYuNjQwNjI1IDMuOTA2MjUgMTAuNDk2MDk0IEM0LjE3OTY4OCAxNC41OTc2NTYgNC4yMTA5MzggMTQuOTI5Njg4IDQuMzUxNTYyIDE1LjYwOTM3NSBDNC42NjQwNjIgMTcuMDk3NjU2IDUuNDgwNDY5IDE3LjgyNDIxOSA3LjA4OTg0NCAxOC4wNTA3ODEgQzcuNTQ2ODc1IDE4LjExMzI4MSAxMS40OTYwOTQgMTguMTQ0NTMxIDEyLjMyNDIxOSAxOC4wODk4NDQgQzEzLjc4MTI1IDE3Ljk5MjE4OCAxNC41MjczNDQgMTcuNjg3NSAxNS4wNjI1IDE2Ljk3NjU2MiBDMTUuMzk4NDM4IDE2LjUzNTE1NiAxNS41NzAzMTIgMTYuMDc0MjE5IDE1LjY5OTIxOSAxNS4zMDg1OTQgQzE1LjgxNjQwNiAxNC42MTMyODEgMTUuODM1OTM4IDE0LjM3MTA5NCAxNi4wOTM3NSAxMC41IEMxNi4yNjk1MzEgNy44NzEwOTQgMTYuMzE2NDA2IDYuOTY4NzUgMTYuMjg1MTU2IDYuODg2NzE5IEMxNi4yMjI2NTYgNi43MTg3NSAxNi4wMTU2MjUgNi41MjczNDQgMTUuODUxNTYyIDYuNDgwNDY5IEMxNS41NzQyMTkgNi40MDYyNSAxNS4yMzgyODEgNi41NjY0MDYgMTUuMTMyODEyIDYuODIwMzEyIEMxNS4wOTM3NSA2LjkxMDE1NiAxNS4wMDM5MDYgOC4wMzkwNjIgMTQuODQzNzUgMTAuNDU3MDMxIEMxNC41NjI1IDE0LjY3OTY4OCAxNC41MTk1MzEgMTUuMTEzMjgxIDE0LjM0NzY1NiAxNS42NDQ1MzEgQzE0LjE4NzUgMTYuMTQ4NDM4IDEzLjg5NDUzMSAxNi40ODgyODEgMTMuNDkyMTg4IDE2LjY0MDYyNSBDMTIuOTU3MDMxIDE2LjgzOTg0NCAxMi43MTA5MzggMTYuODU1NDY5IDEwIDE2Ljg1NTQ2OSBDNy4yODkwNjIgMTYuODU1NDY5IDcuMDQyOTY5IDE2LjgzOTg0NCA2LjUwNzgxMiAxNi42NDA2MjUgQzYuMTA1NDY5IDE2LjQ4ODI4MSA1LjgxMjUgMTYuMTQ4NDM4IDUuNjUyMzQ0IDE1LjY0NDUzMSBDNS40ODA0NjkgMTUuMTEzMjgxIDUuNDM3NSAxNC42Nzk2ODggNS4xNTYyNSAxMC40NTcwMzEgQzQuOTk2MDk0IDguMDU4NTk0IDQuOTA2MjUgNi45MTAxNTYgNC44NjcxODggNi44MjQyMTkgQzQuODAwNzgxIDYuNjY0MDYyIDQuNjkxNDA2IDYuNTcwMzEyIDQuNTAzOTA2IDYuNSBDNC4zMzIwMzEgNi40NDE0MDYgNC4yODUxNTYgNi40Mzc1IDQuMTIxMDk0IDYuNDg4MjgxIFpcIiAvPlxuICAgIDwvc3ZnPlxuKTtcblxuY29uc3QgbWFrZUlkID0gKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGAke0RhdGUubm93KCl9XyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0QWNjZXNzQ29uZmlnOiBBY2Nlc3NDb25maWcgPSB7XG4gICAgZnVsbEFjY2Vzc0dyb3VwczogW10sXG4gICAgZnVsbEFjY2Vzc1VzZXJzOiBbXSxcbiAgICBydWxlczogW10sXG4gICAgZmllbGRKb2luT3BlcmF0b3I6IFwiYW5kXCIsXG59O1xuXG5jb25zdCBub3JtYWxpemVPcGVyYXRvciA9IChvcGVyYXRvcjogYW55KTogUnVsZU9wZXJhdG9yID0+IHtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiZXF1YWxcIikgcmV0dXJuIFwiZXF1YWxcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwicmFuZ2VcIikgcmV0dXJuIFwicmFuZ2VcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiKSByZXR1cm4gXCJpbmNsdWRlXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImxpa2VcIikgcmV0dXJuIFwibGlrZVwiO1xuXG4gICAgaWYgKG9wZXJhdG9yID09PSBcImVxXCIpIHJldHVybiBcImVxdWFsXCI7XG4gICAgaWYgKG9wZXJhdG9yID09PSBcImJldHdlZW5cIikgcmV0dXJuIFwicmFuZ2VcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiaW5cIikgcmV0dXJuIFwiaW5jbHVkZVwiO1xuXG4gICAgcmV0dXJuIFwiZXF1YWxcIjtcbn07XG5cbmNvbnN0IGJ1aWxkUnVsZVdoZXJlPShmaWVsZDpzdHJpbmcscnVsZTpBY2Nlc3NSdWxlLGZpZWxkVHlwZT86TGl0ZXJhbFR5cGUpPT5hY2Nlc3NSdWxlU3FsKGZpZWxkLHJ1bGUsZmllbGRUeXBlKTtcblxuY29uc3Qgd3JhcFdoZXJlUGFydCA9ICh2YWx1ZTogc3RyaW5nLCBzaG91bGRXcmFwOiBib29sZWFuKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gc2hvdWxkV3JhcCA/IGAoJHt2YWx1ZX0pYCA6IHZhbHVlO1xufTtcblxuY29uc3QgYnVpbGRXaGVyZUZvckdyb3VwID0gKGNvbmZpZzogQWNjZXNzQ29uZmlnLCBncm91cElkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGpvaW5Xb3JkID0gXCJBTkRcIjtcbiAgICBjb25zdCBmaWVsZFBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uZmlnLnJ1bGVzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IGZpZWxkLnJ1bGVzXG4gICAgICAgICAgICAuZmlsdGVyKChydWxlKSA9PiBydWxlLmdyb3Vwcy5pbmNsdWRlcyhncm91cElkKSlcbiAgICAgICAgICAgIC5tYXAoKHJ1bGUpID0+IGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlLGZpZWxkLmZpZWxkVHlwZSkpO1xuXG4gICAgICAgIGlmIChydWxlUGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBmaWVsZFBhcnRzLnB1c2gocnVsZVBhcnRzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlUGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZmllbGRQYXJ0cy5wdXNoKGAoJHtydWxlUGFydHMuam9pbihcIiBPUiBcIil9KWApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGRQYXJ0cy5sZW5ndGggPT09IDApIHJldHVybiBcIjE9MFwiO1xuXG4gICAgcmV0dXJuIGZpZWxkUGFydHNcbiAgICAgICAgLm1hcCgocGFydCkgPT4gd3JhcFdoZXJlUGFydChwYXJ0LCBmaWVsZFBhcnRzLmxlbmd0aCA+IDEgJiYgL1xcc09SXFxzLy50ZXN0KHBhcnQpKSlcbiAgICAgICAgLmpvaW4oYCAke2pvaW5Xb3JkfSBgKTtcbn07XG5cbmNvbnN0IGdldFJ1bGVBY2Nlc3NHcm91cElkcyA9IChjb25maWc6IEFjY2Vzc0NvbmZpZyk6IHN0cmluZ1tdID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgICAgbmV3IFNldChcbiAgICAgICAgICAgIGNvbmZpZy5ydWxlcy5mbGF0TWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5ydWxlcy5mbGF0TWFwKChydWxlKSA9PiBydWxlLmdyb3VwcyksXG4gICAgICAgICAgICApLFxuICAgICAgICApLFxuICAgICkuc29ydCgpO1xufTtcblxuXG5jb25zdCBub3JtYWxpemVMb2FkZWRDb25maWcgPSAoZGF0YTogYW55KTogQWNjZXNzQ29uZmlnID0+IHtcbiAgICBjb25zdCBmaWVsZEpvaW5PcGVyYXRvcjogQWNjZXNzRmllbGRKb2luT3BlcmF0b3IgPVxuICAgICAgICBkYXRhPy5maWVsZEpvaW5PcGVyYXRvciA9PT0gXCJvclwiID8gXCJvclwiIDogXCJhbmRcIjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IEFycmF5LmlzQXJyYXkoZGF0YT8uZnVsbEFjY2Vzc0dyb3VwcylcbiAgICAgICAgICAgID8gZGF0YS5mdWxsQWNjZXNzR3JvdXBzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBmdWxsQWNjZXNzVXNlcnM6IEFycmF5LmlzQXJyYXkoZGF0YT8uZnVsbEFjY2Vzc1VzZXJzKVxuICAgICAgICAgICAgPyBkYXRhLmZ1bGxBY2Nlc3NVc2Vycy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgcnVsZXM6IEFycmF5LmlzQXJyYXkoZGF0YT8ucnVsZXMpXG4gICAgICAgICAgICA/IGRhdGEucnVsZXMubWFwKChmaWVsZEl0ZW06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgICBpZDogZmllbGRJdGVtLmlkIHx8IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBmaWVsZEl0ZW0udGl0bGUgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBmaWVsZDogZmllbGRJdGVtLmZpZWxkIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlOiBmaWVsZEl0ZW0uZmllbGRUeXBlLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGZpZWxkSXRlbS5ydWxlcylcbiAgICAgICAgICAgICAgICAgICAgPyBmaWVsZEl0ZW0ucnVsZXMubWFwKChydWxlOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcnVsZS5pZCB8fCBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBub3JtYWxpemVPcGVyYXRvcihydWxlLm9wZXJhdG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTm90OiBydWxlLmlzTm90ID09PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBydWxlLmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogcnVsZS50byxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogQXJyYXkuaXNBcnJheShydWxlLnZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJ1bGUudmFsdWVzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogQXJyYXkuaXNBcnJheShydWxlLmdyb3VwcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJ1bGUuZ3JvdXBzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiBBcnJheS5pc0FycmF5KHJ1bGUudXNlcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLnVzZXJzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogW10sXG4gICAgICAgIGZpZWxkSm9pbk9wZXJhdG9yLFxuICAgIH07XG59O1xuXG5jb25zdCBjbG9uZUFjY2Vzc0NvbmZpZyA9IChkYXRhOiBBY2Nlc3NDb25maWcpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIHJldHVybiBub3JtYWxpemVMb2FkZWRDb25maWcoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkpO1xufTtcblxuY29uc3QgZ2V0SW5pdGlhbEFjY2Vzc0NvbmZpZyA9ICh3aWRnZXRDb25maWc6IGFueSk6IEFjY2Vzc0NvbmZpZyA9PiB7XG4gICAgY29uc3Qgc3RvcmVkQ29uZmlnID0gd2lkZ2V0Q29uZmlnPy5hY2Nlc3NDb25maWc7XG5cbiAgICBpZiAoIXN0b3JlZENvbmZpZykge1xuICAgICAgICByZXR1cm4gY2xvbmVBY2Nlc3NDb25maWcoZGVmYXVsdEFjY2Vzc0NvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhaW5Db25maWcgPVxuICAgICAgICB0eXBlb2Ygc3RvcmVkQ29uZmlnLmFzTXV0YWJsZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0b3JlZENvbmZpZy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgICAgICAgICA6IHN0b3JlZENvbmZpZztcblxuICAgIHJldHVybiBub3JtYWxpemVMb2FkZWRDb25maWcocGxhaW5Db25maWcpO1xufTtcblxuY29uc3QgZ2V0Q29uZmlnR3JvdXBJZHMgPSAoY29uZmlnOiBBY2Nlc3NDb25maWcpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgZ3JvdXBJZHMgPSBbXG4gICAgICAgIC4uLmNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLFxuICAgICAgICAuLi5jb25maWcucnVsZXMuZmxhdE1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICBmaWVsZC5ydWxlcy5mbGF0TWFwKChydWxlKSA9PiBydWxlLmdyb3VwcyksXG4gICAgICAgICksXG4gICAgXTtcblxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoZ3JvdXBJZHMpKS5zb3J0KCk7XG59O1xuXG5jb25zdCBnZXRDb25maWdVc2VySWRzID0gKGNvbmZpZzogQWNjZXNzQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICAgIGNvbnN0IHVzZXJJZHMgPSBbXG4gICAgICAgIC4uLmNvbmZpZy5mdWxsQWNjZXNzVXNlcnMsXG4gICAgICAgIC4uLmNvbmZpZy5ydWxlcy5mbGF0TWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZsYXRNYXAoKHJ1bGUpID0+IHJ1bGUudXNlcnMpLFxuICAgICAgICApLFxuICAgIF07XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHVzZXJJZHMpKS5zb3J0KCk7XG59O1xuXG5jb25zdCBnZXRQb3J0YWxHcm91cEluZm8gPSBhc3luYyAoXG4gICAgZXNyaVJlcXVlc3Q6IEVzcmlSZXF1ZXN0RnVuY3Rpb24sXG4gICAgcG9ydGFsVXJsOiBzdHJpbmcsXG4gICAgZ3JvdXBJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxQb3J0YWxHcm91cEluZm8+ID0+IHtcbiAgICBjb25zdCBlbmNvZGVkR3JvdXBJZCA9IGVuY29kZVVSSUNvbXBvbmVudChncm91cElkKTtcbiAgICBjb25zdCBncm91cFVybCA9IGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbW11bml0eS9ncm91cHMvJHtlbmNvZGVkR3JvdXBJZH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ3JvdXBSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KGdyb3VwVXJsLCB7XG4gICAgICAgICAgICBxdWVyeTogeyBmOiBcImpzb25cIiB9LFxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGdyb3VwUmVzcG9uc2UuZGF0YT8uZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihncm91cFJlc3BvbnNlLmRhdGEuZXJyb3IubWVzc2FnZSB8fCBcItCT0YDRg9C/0L/QsCDQvdC10LTQvtGB0YLRg9C/0L3QsFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2Vyc0NvdW50OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlcnNSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KGAke2dyb3VwVXJsfS91c2VyTGlzdGAsIHtcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG51bTogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICF1c2Vyc1Jlc3BvbnNlLmRhdGE/LmVycm9yICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHVzZXJzUmVzcG9uc2UuZGF0YT8udG90YWwgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogdXNlckxpc3Qg0LLQvtC30LLRgNCw0YnQsNC10YIgb3duZXIg0L7RgtC00LXQu9GM0L3QviDQvtGCINC80LDRgdGB0LjQstCwIHVzZXJzLlxuICAgICAgICAgICAgICAgICAqINCf0L7RjdGC0L7QvNGDINC00L7QsdCw0LLQu9GP0LXQvCDQstC70LDQtNC10LvRjNGG0LAg0Log0LrQvtC70LjRh9C10YHRgtCy0YMg0L7RgdGC0LDQu9GM0L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHVzZXJzQ291bnQgPSB1c2Vyc1Jlc3BvbnNlLmRhdGEudG90YWw7XG4gICAgICAgICAgICAgICAgLy8gKyAodXNlcnNSZXNwb25zZS5kYXRhLm93bmVyPy51c2VybmFtZSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB1c2Vyc0NvdW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ3JvdXBJZCxcbiAgICAgICAgICAgIHRpdGxlOiBncm91cFJlc3BvbnNlLmRhdGE/LnRpdGxlIHx8IFwi0JHQtdC3INC90LDQt9Cy0LDQvdC40Y9cIixcbiAgICAgICAgICAgIHVzZXJzQ291bnQsXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ3JvdXBJZCxcbiAgICAgICAgICAgIHRpdGxlOiBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIixcbiAgICAgICAgICAgIHVzZXJzQ291bnQ6IG51bGwsXG4gICAgICAgICAgICBpc1VuYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmNvbnN0IGdldFBvcnRhbFVzZXJJbmZvID0gYXN5bmMgKFxuICAgIGVzcmlSZXF1ZXN0OiBFc3JpUmVxdWVzdEZ1bmN0aW9uLFxuICAgIHBvcnRhbFVybDogc3RyaW5nLFxuICAgIHVzZXJJZDogc3RyaW5nLFxuKTogUHJvbWlzZTxQb3J0YWxVc2VySW5mbz4gPT4ge1xuICAgIGNvbnN0IHRvSW5mbyA9IChkYXRhOiBhbnkpOiBQb3J0YWxVc2VySW5mbyB8IG51bGwgPT4ge1xuICAgICAgICBpZiAoIWRhdGEgfHwgZGF0YS5lcnJvcikgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICghZGF0YS51c2VybmFtZSAmJiAhZGF0YS5pZCAmJiAhZGF0YS51c2VySWQpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCByZXNvbHZlZElkID0gU3RyaW5nKGRhdGEuaWQgfHwgZGF0YS51c2VySWQgfHwgdXNlcklkKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lID8gU3RyaW5nKGRhdGEudXNlcm5hbWUpIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXJlc29sdmVkSWQgJiYgIXVzZXJuYW1lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGZ1bGxOYW1lOiBkYXRhLmZ1bGxOYW1lID8gU3RyaW5nKGRhdGEuZnVsbE5hbWUpIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkaXJlY3RSZXNwb25zZSA9IGF3YWl0IGVzcmlSZXF1ZXN0KFxuICAgICAgICAgICAgYCR7cG9ydGFsVXJsfS9zaGFyaW5nL3Jlc3QvY29tbXVuaXR5L3VzZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZCl9YCxcbiAgICAgICAgICAgIHsgcXVlcnk6IHsgZjogXCJqc29uXCIgfSwgcmVzcG9uc2VUeXBlOiBcImpzb25cIiB9LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkaXJlY3RJbmZvID0gdG9JbmZvKGRpcmVjdFJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBpZiAoZGlyZWN0SW5mbykgcmV0dXJuIGRpcmVjdEluZm87XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChcbiAgICAgICAgICAgIGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbW11bml0eS91c2Vyc2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgZjogXCJqc29uXCIsIHE6IHVzZXJJZCwgbnVtOiAyMCB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShzZWFyY2hSZXNwb25zZS5kYXRhPy5yZXN1bHRzKVxuICAgICAgICAgICAgPyBzZWFyY2hSZXNwb25zZS5kYXRhLnJlc3VsdHNcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIGNvbnN0IG1hdGNoID0gY2FuZGlkYXRlcy5maW5kKChpdGVtOiBhbnkpID0+XG4gICAgICAgICAgICBbaXRlbT8uaWQsIGl0ZW0/LnVzZXJJZCwgaXRlbT8udXNlcm5hbWVdXG4gICAgICAgICAgICAgICAgLm1hcCgodmFsdWUpID0+IFN0cmluZyh2YWx1ZSB8fCBcIlwiKSlcbiAgICAgICAgICAgICAgICAuaW5jbHVkZXModXNlcklkKSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoSW5mbyA9IHRvSW5mbyhtYXRjaCk7XG4gICAgICAgIGlmIChzZWFyY2hJbmZvKSByZXR1cm4gc2VhcmNoSW5mbztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8g0J3QuNC20LUg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINCx0LXQt9C+0L/QsNGB0L3QsNGPINC30LDQs9C70YPRiNC60LAuXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaWQ6IHVzZXJJZCwgaXNVbmF2YWlsYWJsZTogdHJ1ZSB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzU2V0dGluZ1Byb3BzID0ge1xuICAgIHZhbHVlPzogQWNjZXNzQ29uZmlnO1xuICAgIG9uQ2hhbmdlOiAoY29uZmlnOiBBY2Nlc3NDb25maWcpID0+IHZvaWQ7XG4gICAgYnV0dG9uTGFiZWw/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2Nlc3NTZXR0aW5nKHByb3BzOiBBY2Nlc3NTZXR0aW5nUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxBY2Nlc3NDb25maWc+KCgpID0+XG4gICAgICAgIG5vcm1hbGl6ZUxvYWRlZENvbmZpZyhwcm9wcy52YWx1ZSA/PyBkZWZhdWx0QWNjZXNzQ29uZmlnKSxcbiAgICApO1xuICAgIGNvbnN0IFtzYXZlZENvbmZpZywgc2V0U2F2ZWRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWNjZXNzQ29uZmlnPigoKSA9PlxuICAgICAgICBub3JtYWxpemVMb2FkZWRDb25maWcocHJvcHMudmFsdWUgPz8gZGVmYXVsdEFjY2Vzc0NvbmZpZyksXG4gICAgKTtcbiAgICBjb25zdCBbaGFzVW5zYXZlZENoYW5nZXMsIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzXSA9XG4gICAgICAgIFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbbm90aWNlLCBzZXROb3RpY2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgbm90aWNlVGltZXIgPSBSZWFjdC51c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBzaG93Tm90aWNlID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAobm90aWNlVGltZXIuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChub3RpY2VUaW1lci5jdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldE5vdGljZShtZXNzYWdlKTtcbiAgICAgICAgbm90aWNlVGltZXIuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldE5vdGljZShudWxsKTtcbiAgICAgICAgICAgIG5vdGljZVRpbWVyLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9LCAxODAwKTtcbiAgICB9O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChub3RpY2VUaW1lci5jdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChub3RpY2VUaW1lci5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzZXREcmFmdENvbmZpZyA9IChcbiAgICAgICAgdXBkYXRlOiAocHJldmlvdXM6IEFjY2Vzc0NvbmZpZykgPT4gQWNjZXNzQ29uZmlnLFxuICAgICk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRDb25maWcoKHByZXZpb3VzKSA9PiB1cGRhdGUocHJldmlvdXMpKTtcbiAgICAgICAgc2V0SGFzVW5zYXZlZENoYW5nZXModHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBbZ3JvdXBzSW5mbywgc2V0R3JvdXBzSW5mb10gPSBSZWFjdC51c2VTdGF0ZTxcbiAgICAgICAgUmVjb3JkPHN0cmluZywgUG9ydGFsR3JvdXBJbmZvPlxuICAgID4oe30pO1xuICAgIGNvbnN0IFtncm91cHNMb2FkaW5nLCBzZXRHcm91cHNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbdXNlcnNJbmZvLCBzZXRVc2Vyc0luZm9dID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgUG9ydGFsVXNlckluZm8+Pih7fSk7XG4gICAgY29uc3QgW3VzZXJzTG9hZGluZywgc2V0VXNlcnNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0IGdyb3VwSWRzU2lnbmF0dXJlID0gZ2V0Q29uZmlnR3JvdXBJZHMoY29uZmlnKS5qb2luKFwifFwiKTtcbiAgICBjb25zdCB1c2VySWRzU2lnbmF0dXJlID0gZ2V0Q29uZmlnVXNlcklkcyhjb25maWcpLmpvaW4oXCJ8XCIpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbG9hZEdyb3Vwc0luZm8gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBjb25zdCBncm91cElkcyA9IGdldENvbmZpZ0dyb3VwSWRzKGNvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmIChncm91cElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRHcm91cHNJbmZvKHt9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8ucG9ydGFsVXJsO1xuXG4gICAgICAgICAgICBpZiAoIXBvcnRhbFVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0R3JvdXBzTG9hZGluZyh0cnVlKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXNyaVJlcXVlc3RdID0gKGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgICAgICAgICAgICAgICBcImVzcmkvcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIF0pKSBhcyBbRXNyaVJlcXVlc3RGdW5jdGlvbl07XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZHMubWFwKChncm91cElkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UG9ydGFsR3JvdXBJbmZvKGVzcmlSZXF1ZXN0LCBwb3J0YWxVcmwsIGdyb3VwSWQpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IHJlc3VsdC5yZWR1Y2U8UmVjb3JkPHN0cmluZywgUG9ydGFsR3JvdXBJbmZvPj4oXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpdGVtLmlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEdyb3Vwc0luZm8obWFwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICghaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0R3JvdXBzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZvaWQgbG9hZEdyb3Vwc0luZm8oKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH0sIFtncm91cElkc1NpZ25hdHVyZV0pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbG9hZFVzZXJzSW5mbyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZHMgPSBnZXRDb25maWdVc2VySWRzKGNvbmZpZyk7XG4gICAgICAgICAgICBpZiAodXNlcklkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRVc2Vyc0luZm8oe30pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5wb3J0YWxVcmw7XG4gICAgICAgICAgICBpZiAoIXBvcnRhbFVybCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzZXRVc2Vyc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtlc3JpUmVxdWVzdF0gPSAoYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAgICAgICAgICAgICAgIFwiZXNyaS9yZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgXSkpIGFzIFtFc3JpUmVxdWVzdEZ1bmN0aW9uXTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkcy5tYXAoKHVzZXJJZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvcnRhbFVzZXJJbmZvKGVzcmlSZXF1ZXN0LCBwb3J0YWxVcmwsIHVzZXJJZCksXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJzSW5mbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZWR1Y2U8UmVjb3JkPHN0cmluZywgUG9ydGFsVXNlckluZm8+PigoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjW2l0ZW0uaWRdID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbmNlbGxlZCkgc2V0VXNlcnNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2b2lkIGxvYWRVc2Vyc0luZm8oKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LCBbdXNlcklkc1NpZ25hdHVyZV0pO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihHTE9CQUxfQUNDRVNTX0lEKTtcbiAgICBjb25zdCBbZGlhbG9nLCBzZXREaWFsb2ddID0gUmVhY3QudXNlU3RhdGU8RGlhbG9nU3RhdGU+KG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93TW9kYWwpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjbG9zZUJ5RXNjYXBlID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBcIkVzY2FwZVwiKSByZXR1cm47XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgaWYgKGRpYWxvZykge1xuICAgICAgICAgICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VCeUVzY2FwZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZUJ5RXNjYXBlLCB0cnVlKTtcbiAgICB9LCBbc2hvd01vZGFsLCBkaWFsb2ddKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFJ1bGVJZHMsIHNldFNlbGVjdGVkUnVsZUlkc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtzZWxlY3RlZEdyb3VwS2V5cywgc2V0U2VsZWN0ZWRHcm91cEtleXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFxuICAgICAgICBbXSxcbiAgICApO1xuXG4gICAgY29uc3QgW2Zvcm1UaXRsZSwgc2V0Rm9ybVRpdGxlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1GaWVsZCwgc2V0Rm9ybUZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1GaWVsZFR5cGUsc2V0Rm9ybUZpZWxkVHlwZV09UmVhY3QudXNlU3RhdGU8TGl0ZXJhbFR5cGV8XCJcIj4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1Hcm91cCwgc2V0Rm9ybUdyb3VwXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1Vc2VyLCBzZXRGb3JtVXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgY29uc3QgW3J1bGVPcGVyYXRvciwgc2V0UnVsZU9wZXJhdG9yXSA9IFJlYWN0LnVzZVN0YXRlPFJ1bGVPcGVyYXRvcj4oXCJlcXVhbFwiKTtcbiAgICBjb25zdCBbcnVsZUlzTm90LCBzZXRSdWxlSXNOb3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtydWxlVmFsdWUsIHNldFJ1bGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtydWxlRnJvbSwgc2V0UnVsZUZyb21dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcnVsZVRvLCBzZXRSdWxlVG9dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcnVsZVZhbHVlcywgc2V0UnVsZVZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtuZXdMaXN0VmFsdWUsIHNldE5ld0xpc3RWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtmaWVsZFNlYXJjaCwgc2V0RmllbGRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZ3JvdXBTZWFyY2gsIHNldEdyb3VwU2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3Nob3dXaGVyZVByZXZpZXcsIHNldFNob3dXaGVyZVByZXZpZXddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWVsZCA9XG4gICAgICAgIHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSURcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiAoY29uZmlnLnJ1bGVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpID8/IG51bGwpO1xuXG4gICAgY29uc3QgcmVuZGVyR3JvdXBJZGVudGl0eSA9IChncm91cElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcbiAgICAgICAgY29uc3QgZ3JvdXBUaXRsZSA9IGdyb3VwSW5mbz8udGl0bGUgPz9cbiAgICAgICAgICAgIChncm91cHNMb2FkaW5nID8gXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIgOiBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZGVudGl0eVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZFRpdGxlTGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cFRpdGxlQWZ0ZXJJZFwiPntncm91cFRpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgY29weUdyb3VwSWQoZ3JvdXBJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXBJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7Z3JvdXBJbmZvPy51c2Vyc0NvdW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSW5mbz8udXNlcnNDb3VudCAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBNZW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk6IHtncm91cEluZm8udXNlcnNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclVzZXJJZGVudGl0eSA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHVzZXJJbmZvPy5mdWxsTmFtZSB8fCB1c2VySW5mbz8udXNlcm5hbWUgfHxcbiAgICAgICAgICAgICh1c2Vyc0xvYWRpbmcgPyBcItCX0LDQs9GA0YPQt9C60LAuLi5cIiA6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9XCIpO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IHVzZXJJbmZvPy51c2VybmFtZSAmJiB1c2VySW5mby51c2VybmFtZSAhPT0gdXNlcklkXG4gICAgICAgICAgICA/IGAke3VzZXJJbmZvLnVzZXJuYW1lfSDigJQgYFxuICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwSWRlbnRpdHkgdXNlcklkZW50aXR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cElkVGl0bGVMaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwVGl0bGVBZnRlcklkXCI+e3RpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIGNvcHlHcm91cElkKHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcyhbXSk7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKFtdKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0TGVmdEl0ZW0gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZElkKGlkKTtcbiAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRSdWxlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0UnVsZU9wZXJhdG9yKFwiZXF1YWxcIik7XG4gICAgICAgIHNldFJ1bGVJc05vdChmYWxzZSk7XG4gICAgICAgIHNldFJ1bGVWYWx1ZShcIlwiKTtcbiAgICAgICAgc2V0UnVsZUZyb20oXCJcIik7XG4gICAgICAgIHNldFJ1bGVUbyhcIlwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlcyhbXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UnVsZUZyb21Gb3JtID0gKCk6IEFjY2Vzc1J1bGUgfCBudWxsID0+IHtcbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJlcXVhbFwiKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVWYWx1ZS50cmltKCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJlcXVhbFwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGVWYWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVGcm9tLnRyaW0oKSB8fCAhcnVsZVRvLnRyaW0oKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgaXNOb3Q6IHJ1bGVJc05vdCxcbiAgICAgICAgICAgICAgICBmcm9tOiBydWxlRnJvbS50cmltKCksXG4gICAgICAgICAgICAgICAgdG86IHJ1bGVUby50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuVmFsdWVzID0gcnVsZVZhbHVlcy5yZWR1Y2U8c3RyaW5nW10+KChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0udHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmICFyZXN1bHQuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICBpZiAoY2xlYW5WYWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBjbGVhblZhbHVlcyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlVmFsdWUudHJpbSgpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwibGlrZVwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGVWYWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGxSdWxlRm9ybSA9IChydWxlOiBBY2Nlc3NSdWxlKSA9PiB7XG4gICAgICAgIHNldFJ1bGVPcGVyYXRvcihydWxlLm9wZXJhdG9yKTtcbiAgICAgICAgc2V0UnVsZUlzTm90KHJ1bGUuaXNOb3QgPT09IHRydWUpO1xuICAgICAgICBzZXRSdWxlVmFsdWUocnVsZS52YWx1ZSA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZUZyb20ocnVsZS5mcm9tID8/IFwiXCIpO1xuICAgICAgICBzZXRSdWxlVG8ocnVsZS50byA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlcyhydWxlLnZhbHVlcyA/PyBbXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtVGl0bGUoXCJcIik7XG4gICAgICAgIHNldEZvcm1GaWVsZChcIlwiKTtcbiAgICAgICAgc2V0Rm9ybUZpZWxkVHlwZShcIlwiKTtcbiAgICAgICAgcmVzZXRSdWxlRm9ybSgpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImFkZEZpZWxkXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0RmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldEZvcm1UaXRsZShzZWxlY3RlZEZpZWxkLnRpdGxlKTtcbiAgICAgICAgc2V0Rm9ybUZpZWxkKHNlbGVjdGVkRmllbGQuZmllbGQpO1xuICAgICAgICBzZXRGb3JtRmllbGRUeXBlKHNlbGVjdGVkRmllbGQuZmllbGRUeXBlfHxcIlwiKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0RmllbGRcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBmaWVsZElkOiBzZWxlY3RlZEZpZWxkLmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVGaWVsZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFmb3JtVGl0bGUudHJpbSgpIHx8ICFmb3JtRmllbGQudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRGaWVsZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3RmllbGQ6IEFjY2Vzc0ZpZWxkUnVsZSA9IHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGZvcm1UaXRsZS50cmltKCksXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZvcm1GaWVsZC50cmltKCksXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlOmZvcm1GaWVsZFR5cGV8fHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBydWxlczogZmlyc3RSdWxlID8gW2ZpcnN0UnVsZV0gOiBbXSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IFsuLi5wcmV2LnJ1bGVzLCBuZXdGaWVsZF0sXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobmV3RmllbGQuaWQpO1xuICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEZpZWxkXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09PSBkaWFsb2cucGF5bG9hZC5maWVsZElkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmb3JtVGl0bGUudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmb3JtRmllbGQudHJpbSgpLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTpmb3JtRmllbGRUeXBlfHx1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0UnVsZXMgPSBwcmV2LnJ1bGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gc2VsZWN0ZWRGaWVsZC5pZCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobmV4dFJ1bGVzWzBdPy5pZCA/PyBHTE9CQUxfQUNDRVNTX0lEKTtcbiAgICAgICAgICAgIHJlc2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogbmV4dFJ1bGVzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkUnVsZSA9ICgpID0+IHtcbiAgICAgICAgcmVzZXRSdWxlRm9ybSgpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImFkZFJ1bGVcIiB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRSdWxlID0gKHJ1bGU6IEFjY2Vzc1J1bGUpID0+IHtcbiAgICAgICAgZmlsbFJ1bGVGb3JtKHJ1bGUpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImVkaXRSdWxlXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVSdWxlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBmb3JtUnVsZSA9IGdldFJ1bGVGcm9tRm9ybSgpO1xuXG4gICAgICAgIGlmICghZm9ybVJ1bGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwi0JfQsNC/0L7Qu9C90Lgg0LfQvdCw0YfQtdC90LjQtSDQv9GA0LDQstC40LvQsFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkUnVsZVwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogWy4uLmZpZWxkLnJ1bGVzLCBmb3JtUnVsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImVkaXRSdWxlXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm9ybVJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJ1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyczogcnVsZS51c2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVSdWxlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgIWRpYWxvZz8ucGF5bG9hZD8ucnVsZUlkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocnVsZSkgPT4gcnVsZS5pZCAhPT0gZGlhbG9nLnBheWxvYWQucnVsZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuZmlsdGVyKChpZCkgPT4gaWQgIT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCksXG4gICAgICAgICk7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKFtdKTtcblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVJ1bGVTZWxlY3QgPSAocnVsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRSdWxlSWRzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5pbmNsdWRlcyhydWxlSWQpXG4gICAgICAgICAgICAgICAgPyBwcmV2LmZpbHRlcigoaWQpID0+IGlkICE9PSBydWxlSWQpXG4gICAgICAgICAgICAgICAgOiBbLi4ucHJldiwgcnVsZUlkXSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlU2VsZWN0ZWRSdWxlcyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8IHNlbGVjdGVkUnVsZUlkcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChydWxlKSA9PiAhc2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcyhbXSk7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKFtdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUdyb3VwS2V5ID0gKHJ1bGVJZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3J1bGVJZH1fJHtpbmRleH1gO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlR2xvYmFsR3JvdXBLZXkgPSAoaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgZ2xvYmFsXyR7aW5kZXh9YDtcbiAgICB9O1xuXG4gICAgY29uc3QgYXV0b1NlbGVjdGVkR3JvdXBLZXlzID0gc2VsZWN0ZWRGaWVsZFxuICAgICAgICA/IHNlbGVjdGVkRmllbGQucnVsZXMucmVkdWNlPHN0cmluZ1tdPigocmVzdWx0LCBydWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkUnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKSkgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgICAgICAgcnVsZS5ncm91cHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYWtlR3JvdXBLZXkocnVsZS5pZCwgaW5kZXgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgOiBbXTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZVNlbGVjdGVkR3JvdXBLZXlzID0gQXJyYXkuZnJvbShcbiAgICAgICAgbmV3IFNldChbLi4uc2VsZWN0ZWRHcm91cEtleXMsIC4uLmF1dG9TZWxlY3RlZEdyb3VwS2V5c10pLFxuICAgICk7XG5cbiAgICBjb25zdCBzZWxlY3RlZEdyb3Vwc0NvdW50ID1cbiAgICAgICAgc2VsZWN0ZWRJZCA9PT0gR0xPQkFMX0FDQ0VTU19JRFxuICAgICAgICAgICAgPyBzZWxlY3RlZEdyb3VwS2V5cy5sZW5ndGhcbiAgICAgICAgICAgIDogZWZmZWN0aXZlU2VsZWN0ZWRHcm91cEtleXMubGVuZ3RoO1xuXG4gICAgY29uc3QgZmlsdGVyZWRGaWVsZHMgPSBjb25maWcucnVsZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IGZpZWxkU2VhcmNoLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghc2VhcmNoKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkgfHxcbiAgICAgICAgICAgIGl0ZW0uZmllbGQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBncm91cE1hdGNoZXNTZWFyY2ggPSAoZ3JvdXBJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IGdyb3VwU2VhcmNoLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghc2VhcmNoKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBjb25zdCBncm91cEluZm8gPSBncm91cHNJbmZvW2dyb3VwSWRdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBncm91cElkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxuICAgICAgICAgICAgKGdyb3VwSW5mbz8udGl0bGUgPz8gXCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVzZXJNYXRjaGVzU2VhcmNoID0gKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IGdyb3VwU2VhcmNoLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gdXNlcnNJbmZvW3VzZXJJZF07XG4gICAgICAgIHJldHVybiBbdXNlcklkLCB1c2VySW5mbz8udXNlcm5hbWUsIHVzZXJJbmZvPy5mdWxsTmFtZV1cbiAgICAgICAgICAgIC5zb21lKCh2YWx1ZSkgPT4gU3RyaW5nKHZhbHVlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByZXZpZXdHcm91cExhYmVsID0gKGdyb3VwSWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwSW5mbyA9IGdyb3Vwc0luZm9bZ3JvdXBJZF07XG4gICAgICAgIGNvbnN0IGdyb3VwVGl0bGUgPSBncm91cEluZm8/LnRpdGxlPy50cmltKCk7XG5cbiAgICAgICAgaWYgKCFncm91cFRpdGxlKSByZXR1cm4gZ3JvdXBJZDtcblxuICAgICAgICByZXR1cm4gYCR7Z3JvdXBUaXRsZX0gKCR7Z3JvdXBJZH0pYDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJldmlld1VzZXJMYWJlbCA9ICh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gdXNlcnNJbmZvW3VzZXJJZF07XG4gICAgICAgIGNvbnN0IG5hbWUgPSB1c2VySW5mbz8uZnVsbE5hbWUgfHwgdXNlckluZm8/LnVzZXJuYW1lO1xuICAgICAgICByZXR1cm4gbmFtZSA/IGAke25hbWV9ICgke3VzZXJJZH0pYCA6IHVzZXJJZDtcbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRDb25maWdXaGVyZVByZXZpZXcgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgZnVsbEFjY2Vzc0xpbmVzID0gY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5tYXAoKGdyb3VwSWQpID0+IGAgICR7Z2V0UHJldmlld0dyb3VwTGFiZWwoZ3JvdXBJZCl9OiAxPTFgKVxuICAgICAgICAgICAgOiBbXCIgIOKAlFwiXTtcblxuICAgICAgICBjb25zdCBydWxlR3JvdXBJZHMgPSBnZXRSdWxlQWNjZXNzR3JvdXBJZHMoY29uZmlnKTtcbiAgICAgICAgY29uc3QgcnVsZUFjY2Vzc0xpbmVzID0gcnVsZUdyb3VwSWRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gcnVsZUdyb3VwSWRzLm1hcCgoZ3JvdXBJZCkgPT4gYCAgJHtnZXRQcmV2aWV3R3JvdXBMYWJlbChncm91cElkKX06ICR7YnVpbGRXaGVyZUZvckdyb3VwKGNvbmZpZywgZ3JvdXBJZCl9YClcbiAgICAgICAgICAgIDogW1wiICDigJRcIl07XG5cbiAgICAgICAgY29uc3QgZnVsbFVzZXJBY2Nlc3NMaW5lcyA9IGNvbmZpZy5mdWxsQWNjZXNzVXNlcnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBjb25maWcuZnVsbEFjY2Vzc1VzZXJzLm1hcCgodXNlcklkKSA9PlxuICAgICAgICAgICAgICAgIGAgICR7Z2V0UHJldmlld1VzZXJMYWJlbCh1c2VySWQpfTogMT0xYCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogW1wiICDigJRcIl07XG5cbiAgICAgICAgY29uc3QgcnVsZVVzZXJJZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQoY29uZmlnLnJ1bGVzLmZsYXRNYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgZmllbGQucnVsZXMuZmxhdE1hcCgocnVsZSkgPT4gcnVsZS51c2VycyksXG4gICAgICAgICkpKS5zb3J0KCk7XG4gICAgICAgIGNvbnN0IHJ1bGVVc2VyQWNjZXNzTGluZXMgPSBydWxlVXNlcklkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHJ1bGVVc2VySWRzLm1hcCgodXNlcklkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICAgICAgY29uZmlnLnJ1bGVzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydWxlLnVzZXJzLmluY2x1ZGVzKHVzZXJJZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChgKCR7YnVpbGRSdWxlV2hlcmUoZmllbGQuZmllbGQsIHJ1bGUsZmllbGQuZmllbGRUeXBlKX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBgICAke2dldFByZXZpZXdVc2VyTGFiZWwodXNlcklkKX06ICR7cGFydHMuam9pbihcIiBPUiBcIikgfHwgXCIxPTBcIn1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW1wiICDigJRcIl07XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFwiRlVMTCBBQ0NFU1M6XCIsXG4gICAgICAgICAgICAuLi5mdWxsQWNjZXNzTGluZXMsXG4gICAgICAgICAgICBcIlJVTEUgQUNDRVNTOlwiLFxuICAgICAgICAgICAgLi4ucnVsZUFjY2Vzc0xpbmVzLFxuICAgICAgICAgICAgXCJGVUxMIFVTRVIgQUNDRVNTOlwiLFxuICAgICAgICAgICAgLi4uZnVsbFVzZXJBY2Nlc3NMaW5lcyxcbiAgICAgICAgICAgIFwiUlVMRSBVU0VSIEFDQ0VTUzpcIixcbiAgICAgICAgICAgIC4uLnJ1bGVVc2VyQWNjZXNzTGluZXMsXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29weUNvbmZpZ1doZXJlUHJldmlldyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGJ1aWxkQ29uZmlnV2hlcmVQcmV2aWV3KCkpO1xuICAgICAgICAgICAgc2hvd05vdGljZShcIldIRVJFINGB0LrQvtC/0LjRgNC+0LLQsNC9XCIpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQndC1INGD0LTQsNC70L7RgdGMINGB0LrQvtC/0LjRgNC+0LLQsNGC0YwgV0hFUkVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RmllbGRKb2luT3BlcmF0b3IgPSAob3BlcmF0b3I6IEFjY2Vzc0ZpZWxkSm9pbk9wZXJhdG9yKTogdm9pZCA9PiB7XG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZpZWxkSm9pbk9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRSdWxlV2FybmluZ3MgPSAoZmllbGQ6IEFjY2Vzc0ZpZWxkUnVsZSwgcnVsZTogQWNjZXNzUnVsZSk6IHN0cmluZ1tdID0+IHtcbiAgICAgICAgY29uc3Qgd2FybmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaGVyZSA9IGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlLGZpZWxkLmZpZWxkVHlwZSk7XG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZXMgPSBmaWVsZC5ydWxlcy5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcnVsZS5pZCAmJiBidWlsZFJ1bGVXaGVyZShmaWVsZC5maWVsZCwgaXRlbSxmaWVsZC5maWVsZFR5cGUpID09PSBjdXJyZW50V2hlcmUsXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGR1cGxpY2F0ZXMubGVuZ3RoID4gMCkgd2FybmluZ3MucHVzaChcItCU0YPQsdC70LjRgNGD0LXRgiDQtNGA0YPQs9C+0LUg0L/RgNCw0LLQuNC70L5cIik7XG4gICAgICAgIGlmIChydWxlLmdyb3Vwcy5sZW5ndGggPT09IDAgJiYgcnVsZS51c2Vycy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB3YXJuaW5ncy5wdXNoKFwi0J3QtdGCINCz0YDRg9C/0L8g0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INC00L7RgdGC0YPQv9CwXCIpO1xuXG4gICAgICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImVxdWFsXCIgJiYgIShydWxlLnZhbHVlID8/IFwiXCIpLnRyaW0oKSkge1xuICAgICAgICAgICAgd2FybmluZ3MucHVzaChcItCf0YPRgdGC0L7QtSDQt9C90LDRh9C10L3QuNC1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwibGlrZVwiICYmICEocnVsZS52YWx1ZSA/PyBcIlwiKS50cmltKCkpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCLQn9GD0YHRgtC+0LUgTElLRSDQt9C90LDRh9C10L3QuNC1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiICYmIChydWxlLnZhbHVlcyA/PyBbXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB3YXJuaW5ncy5wdXNoKFwiSU4g0LHQtdC3INC30L3QsNGH0LXQvdC40LlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tID0gTnVtYmVyKHJ1bGUuZnJvbSk7XG4gICAgICAgICAgICBjb25zdCB0byA9IE51bWJlcihydWxlLnRvKTtcblxuICAgICAgICAgICAgaWYgKCEocnVsZS5mcm9tID8/IFwiXCIpLnRyaW0oKSB8fCAhKHJ1bGUudG8gPz8gXCJcIikudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZ3MucHVzaChcIlJhbmdlINC30LDQv9C+0LvQvdC10L0g0L3QtSDQv9C+0LvQvdC+0YHRgtGM0Y5cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFOdW1iZXIuaXNOYU4oZnJvbSkgJiYgIU51bWJlci5pc05hTih0bykgJiYgZnJvbSA+IHRvKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZ3MucHVzaChcIlJhbmdlINC90LUg0LLRi9C/0L7Qu9C90LjRgtGB0Y86INC+0YIg0LHQvtC70YzRiNC1INGH0LXQvCDQtNC+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdhcm5pbmdzO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRGaWVsZFdhcm5pbmdzQ291bnQgPSAoZmllbGQ6IEFjY2Vzc0ZpZWxkUnVsZSk6IG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5ydWxlcy5yZWR1Y2UoXG4gICAgICAgICAgICAodG90YWwsIHJ1bGUpID0+IHRvdGFsICsgZ2V0UnVsZVdhcm5pbmdzKGZpZWxkLCBydWxlKS5sZW5ndGgsXG4gICAgICAgICAgICAwLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVHcm91cFNlbGVjdCA9IChrZXk6IHN0cmluZywgaXNMb2NrZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoaXNMb2NrZWQpIHJldHVybjtcblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuaW5jbHVkZXMoa2V5KSA/IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBrZXkpIDogWy4uLnByZXYsIGtleV0sXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkR3JvdXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBncm91cEtleXNGb3JEZWxldGUgPVxuICAgICAgICAgICAgc2VsZWN0ZWRJZCA9PT0gR0xPQkFMX0FDQ0VTU19JRFxuICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRHcm91cEtleXNcbiAgICAgICAgICAgICAgICA6IGVmZmVjdGl2ZVNlbGVjdGVkR3JvdXBLZXlzO1xuXG4gICAgICAgIGlmIChncm91cEtleXNGb3JEZWxldGUubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogcHJldi5mdWxsQWNjZXNzR3JvdXBzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiAhZ3JvdXBLZXlzRm9yRGVsZXRlLmluY2x1ZGVzKG1ha2VHbG9iYWxHcm91cEtleShpbmRleCkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWRGaWVsZCkge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWdyb3VwS2V5c0ZvckRlbGV0ZS5pbmNsdWRlcyhtYWtlR3JvdXBLZXkocnVsZS5pZCwgaW5kZXgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRHcm91cCA9IChydWxlSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoXCJcIik7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiYWRkR3JvdXBcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBydWxlSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRHcm91cCA9IChcbiAgICAgICAgcnVsZUlkOiBzdHJpbmcsXG4gICAgICAgIGdyb3VwSW5kZXg6IG51bWJlcixcbiAgICAgICAgZ3JvdXBWYWx1ZTogc3RyaW5nLFxuICAgICkgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoZ3JvdXBWYWx1ZSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcnVsZUlkLFxuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZUdyb3VwID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgIWZvcm1Hcm91cC50cmltKCkpIHJldHVybjtcblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZEdyb3VwXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFJ1bGUgPSBzZWxlY3RlZEZpZWxkLnJ1bGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHJ1bGUpID0+IHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRSdWxlPy5ncm91cHMuc29tZSgoZ3JvdXApID0+IGdyb3VwLnRyaW0oKSA9PT0gZm9ybUdyb3VwLnRyaW0oKSkpIHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60LDRjyDQs9GA0YPQv9C/0LAg0YPQttC1INC00L7QsdCw0LLQu9C10L3QsFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IFsuLi5ydWxlLmdyb3VwcywgZm9ybUdyb3VwLnRyaW0oKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEdyb3VwXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IHJ1bGUuZ3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtR3JvdXAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGdyb3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGtleSkgPT5cbiAgICAgICAgICAgICAgICAgICAga2V5ICE9PVxuICAgICAgICAgICAgICAgICAgICBtYWtlR3JvdXBLZXkoZGlhbG9nLnBheWxvYWQucnVsZUlkLCBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4KSxcbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIHNldEZvcm1Hcm91cChcIlwiKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRHbG9iYWxHcm91cFwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdEdsb2JhbEdyb3VwID0gKGdyb3VwSW5kZXg6IG51bWJlciwgZ3JvdXBWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Hcm91cChncm91cFZhbHVlKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0R2xvYmFsR3JvdXBcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBncm91cEluZGV4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVHbG9iYWxHcm91cCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFmb3JtR3JvdXAudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHbG9iYWxHcm91cFwiKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMuc29tZSgoZ3JvdXApID0+IGdyb3VwLnRyaW0oKSA9PT0gZm9ybUdyb3VwLnRyaW0oKSkpIHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60LDRjyDQs9GA0YPQv9C/0LAg0YPQttC1INC00L7QsdCw0LLQu9C10L3QsFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogWy4uLnByZXYuZnVsbEFjY2Vzc0dyb3VwcywgZm9ybUdyb3VwLnRyaW0oKV0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImVkaXRHbG9iYWxHcm91cFwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHByZXYuZnVsbEFjY2Vzc0dyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXggPyBmb3JtR3JvdXAudHJpbSgpIDogZ3JvdXAsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogcHJldi5mdWxsQWNjZXNzR3JvdXBzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGtleSkgPT4ga2V5ICE9PSBtYWtlR2xvYmFsR3JvdXBLZXkoZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCksXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZFVzZXIgPSAocnVsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIoXCJcIik7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkVXNlclwiLCBwYXlsb2FkOiB7IHJ1bGVJZCB9IH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdFVzZXIgPSAocnVsZUlkOiBzdHJpbmcsIHVzZXJJbmRleDogbnVtYmVyLCB1c2VyVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtVXNlcih1c2VyVmFsdWUpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImVkaXRVc2VyXCIsIHBheWxvYWQ6IHsgcnVsZUlkLCB1c2VySW5kZXggfSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZVVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZm9ybVVzZXIudHJpbSgpIHx8ICFkaWFsb2c/LnBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV4dFVzZXIgPSBmb3JtVXNlci50cmltKCk7XG5cbiAgICAgICAgaWYgKGRpYWxvZy50eXBlID09PSBcImFkZFVzZXJcIikge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UnVsZSA9IHNlbGVjdGVkRmllbGQucnVsZXMuZmluZChcbiAgICAgICAgICAgICAgICAocnVsZSkgPT4gcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRSdWxlPy51c2Vycy5pbmNsdWRlcyhuZXh0VXNlcikpIHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60L7QuSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YPQttC1INC00L7QsdCw0LLQu9C10L1cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IGRpYWxvZy50eXBlID09PSBcImFkZFVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gWy4uLnJ1bGUudXNlcnMsIG5leHRVc2VyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZS51c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gZGlhbG9nLnBheWxvYWQudXNlckluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5leHRVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlVXNlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFkaWFsb2c/LnBheWxvYWQpIHJldHVybjtcbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLm1hcCgocnVsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHJ1bGUudXNlcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfLCBpbmRleCkgPT4gaW5kZXggIT09IGRpYWxvZy5wYXlsb2FkLnVzZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRHbG9iYWxVc2VyID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtVXNlcihcIlwiKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRHbG9iYWxVc2VyXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0R2xvYmFsVXNlciA9ICh1c2VySW5kZXg6IG51bWJlciwgdXNlclZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIodXNlclZhbHVlKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJlZGl0R2xvYmFsVXNlclwiLCBwYXlsb2FkOiB7IHVzZXJJbmRleCB9IH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlR2xvYmFsVXNlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFVzZXIgPSBmb3JtVXNlci50cmltKCk7XG4gICAgICAgIGlmICghbmV4dFVzZXIpIHJldHVybjtcblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZEdsb2JhbFVzZXJcIiAmJiBjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmluY2x1ZGVzKG5leHRVc2VyKSkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC9XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZnVsbEFjY2Vzc1VzZXJzOiBkaWFsb2c/LnR5cGUgPT09IFwiYWRkR2xvYmFsVXNlclwiXG4gICAgICAgICAgICAgICAgPyBbLi4ucHJldi5mdWxsQWNjZXNzVXNlcnMsIG5leHRVc2VyXVxuICAgICAgICAgICAgICAgIDogcHJldi5mdWxsQWNjZXNzVXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZz8ucGF5bG9hZD8udXNlckluZGV4ID8gbmV4dFVzZXIgOiB1c2VyLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVHbG9iYWxVc2VyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRpYWxvZz8ucGF5bG9hZCkgcmV0dXJuO1xuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBmdWxsQWNjZXNzVXNlcnM6IHByZXYuZnVsbEFjY2Vzc1VzZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC51c2VySW5kZXgsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFzU2FtZUluVmFsdWUgPSAodmFsdWVzOiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZywgaWdub3JlSW5kZXg/OiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghbm9ybWFsaXplZFZhbHVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcy5zb21lKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlnbm9yZUluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPT09IGlnbm9yZUluZGV4KSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKSA9PT0gbm9ybWFsaXplZFZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVmFsdWVUb0luTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXdMaXN0VmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgICAgICBpZiAoaGFzU2FtZUluVmFsdWUocnVsZVZhbHVlcywgdmFsdWUpKSB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60L7QtSDQt9C90LDRh9C10L3QuNC1INGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90L5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRSdWxlVmFsdWVzKChwcmV2KSA9PiBbLi4ucHJldiwgdmFsdWVdKTtcbiAgICAgICAgc2V0TmV3TGlzdFZhbHVlKFwiXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVWYWx1ZUZyb21Jbkxpc3QgPSAoaW5kZXhGb3JSZW1vdmU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRSdWxlVmFsdWVzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhGb3JSZW1vdmUpLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVWYWx1ZUluTGlzdCA9IChpbmRleEZvclVwZGF0ZTogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlICYmIGhhc1NhbWVJblZhbHVlKHJ1bGVWYWx1ZXMsIG5leHRWYWx1ZSwgaW5kZXhGb3JVcGRhdGUpKSB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0KLQsNC60L7QtSDQt9C90LDRh9C10L3QuNC1INGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90L5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRSdWxlVmFsdWVzKChwcmV2KSA9PlxuICAgICAgICAgICAgcHJldi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoaW5kZXggPT09IGluZGV4Rm9yVXBkYXRlID8gdmFsdWUgOiBpdGVtKSksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRvd25sb2FkSnNvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDQpXSwge1xuICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBcImFjY2Vzcy1jb25maWcuanNvblwiO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG5cbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGxvYWRKc29uID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07XG5cbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKFN0cmluZyhyZWFkZXIucmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUxvYWRlZENvbmZpZyhwYXJzZWQpO1xuXG4gICAgICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKCkgPT4gbm9ybWFsaXplZCk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChHTE9CQUxfQUNDRVNTX0lEKTtcbiAgICAgICAgICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCLQndC10LLQtdGA0L3QsNGPINGB0YLRgNGD0LrRgtGD0YDQsCBKU09OXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH07XG5cbiAgICBjb25zdCBjb3B5R3JvdXBJZCA9IGFzeW5jIChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkPy53cml0ZVRleHQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChncm91cElkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcG9yYXJ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQudmFsdWUgPSBncm91cElkO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeUlucHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hvd05vdGljZShcIklEINGB0LrQvtC/0LjRgNC+0LLQsNC9XCIpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQndC1INGD0LTQsNC70L7RgdGMINGB0LrQvtC/0LjRgNC+0LLQsNGC0YwgSURcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXBwbHlDb25maWcgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRDb25maWcgPSBjbG9uZUFjY2Vzc0NvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKG5leHRDb25maWcpO1xuICAgICAgICBzZXRTYXZlZENvbmZpZyhuZXh0Q29uZmlnKTtcbiAgICAgICAgc2V0SGFzVW5zYXZlZENoYW5nZXMoZmFsc2UpO1xuICAgICAgICBzaG93Tm90aWNlKFwi0J3QsNGB0YLRgNC+0LnQutC4INC/0YDQuNC80LXQvdC10L3Ri1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FuY2VsQ29uZmlnQ2hhbmdlcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0Q29uZmlnKGNsb25lQWNjZXNzQ29uZmlnKHNhdmVkQ29uZmlnKSk7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgc2V0SGFzVW5zYXZlZENoYW5nZXMoZmFsc2UpO1xuICAgICAgICBzaG93Tm90aWNlKFwi0JjQt9C80LXQvdC10L3QuNGPINC+0YLQvNC10L3QtdC90YtcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkV2hlcmVGb3JDdXJyZW50VXNlciA9IChcbiAgICAgICAgdXNlckdyb3Vwczogc3RyaW5nW10sXG4gICAgICAgIHVzZXJJZHM6IHN0cmluZ1tdID0gW10sXG4gICAgKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgaGFzRnVsbEFjY2VzcyA9XG4gICAgICAgICAgICBjb25maWcuZnVsbEFjY2Vzc0dyb3Vwcy5zb21lKChncm91cCkgPT4gdXNlckdyb3Vwcy5pbmNsdWRlcyhncm91cCkpIHx8XG4gICAgICAgICAgICBjb25maWcuZnVsbEFjY2Vzc1VzZXJzLnNvbWUoKHVzZXJJZCkgPT4gdXNlcklkcy5pbmNsdWRlcyh1c2VySWQpKTtcblxuICAgICAgICBpZiAoaGFzRnVsbEFjY2VzcykgcmV0dXJuIFwiMT0xXCI7XG5cbiAgICAgICAgY29uc3QgYWxsb3dlZFJ1bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGNvbmZpZy5ydWxlcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1J1bGVBY2Nlc3MgPVxuICAgICAgICAgICAgICAgICAgICBydWxlLmdyb3Vwcy5zb21lKChncm91cCkgPT4gdXNlckdyb3Vwcy5pbmNsdWRlcyhncm91cCkpIHx8XG4gICAgICAgICAgICAgICAgICAgIHJ1bGUudXNlcnMuc29tZSgodXNlcklkKSA9PiB1c2VySWRzLmluY2x1ZGVzKHVzZXJJZCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1J1bGVBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFJ1bGVzLnB1c2goYCgke2J1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlLGZpZWxkLmZpZWxkVHlwZSl9KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWxsb3dlZFJ1bGVzLmxlbmd0aCA+IDAgPyBhbGxvd2VkUnVsZXMuam9pbihcIiBPUiBcIikgOiBcIjE9MFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmV2aWV3RmllbGROYW1lID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkRmllbGRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1GaWVsZC50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRGaWVsZD8uZmllbGQgPz8gXCJcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUnVsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdGaWVsZE5hbWUgPSBnZXRQcmV2aWV3RmllbGROYW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlTW9kZVJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZXJhdG9yVGFicyBmb3VyVGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJlcXVhbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwicmFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwiaW5jbHVkZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmNsdWRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImxpa2VcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVPcGVyYXRvcihcImxpa2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlrZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5vdFRvZ2dsZUJ1dHRvbiAke3J1bGVJc05vdCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlSXNOb3QoKHZhbHVlKSA9PiAhdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQmNC90LLQtdGA0YLQuNGA0L7QstCw0YLRjCDRg9GB0LvQvtCy0LjQtVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5PVFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsocnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgfHwgcnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JfQvdCw0YfQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cnVsZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSdWxlVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cnVsZU9wZXJhdG9yID09PSBcInJhbmdlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b0lucHV0R3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RglwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVGcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UnVsZUZyb20oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JTQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJ1bGVUbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3J1bGVPcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluTGlzdEFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5BZGRSb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCX0L3QsNGH0LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TGlzdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0xpc3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIiBvbkNsaWNrPXthZGRWYWx1ZVRvSW5MaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtydWxlVmFsdWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5TWluaVwiPtCh0L/QuNGB0L7QuiDQv9GD0YHRgjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5WYWx1ZVJvd1wiIGtleT17YCR7dmFsdWV9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQl9C90LDRh9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVWYWx1ZUluTGlzdChpbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVmFsdWVGcm9tSW5MaXN0KGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cHJldmlld0ZpZWxkTmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1doZXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCY0YLQvtCz0L7QstC+0LUg0YPRgdC70L7QstC40LU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcFJ1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYnVpbGRSdWxlV2hlcmUocHJldmlld0ZpZWxkTmFtZSwgdGVtcFJ1bGUsZGlhbG9nPy50eXBlPT09XCJhZGRGaWVsZFwiP2Zvcm1GaWVsZFR5cGV8fHVuZGVmaW5lZDpzZWxlY3RlZEZpZWxkPy5maWVsZFR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3ByZXZpZXdGaWVsZE5hbWV9IC4uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdBcmVhXCI+XG4gICAgICAgICAgICB7bm90aWNlICYmIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ05vdGljZVwiPntub3RpY2V9PC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzQ29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzQ29udHJvbENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc0NvbnRyb2xUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSA/PyBcItCU0L7RgdGC0YPQvyDQuiDQtNCw0L3QvdGL0LxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb24gPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQndCw0YHRgtGA0L7QudGC0LUg0LPRgNGD0L/Qv9GLINC4INGD0YHQu9C+0LLQuNGPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0L7QsdGK0LXQutGC0L7QslwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nlc3NTZXR0aW5nc0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY2Vzc1NldHRpbmdzQnV0dG9uVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5idXR0b25MYWJlbCA/PyBcItCd0LDRgdGC0YDQvtC50LrQsCDQtNC+0YHRgtGD0L/QsFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RUaXRsZVwiPtCf0YDQsNCy0LjQu9CwINC00L7RgdGC0YPQv9CwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdFN1YnRpdGxlXCI+SlNPTiBhY2Nlc3MgY29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGVTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQv9C+INC90LDQt9Cy0LDQvdC40Y4g0LjQu9C4INC/0L7Qu9GOXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRGaWVsZFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oR0xPQkFMX0FDQ0VTU19JRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbVRpdGxlXCI+0J/QvtC70L3Ri9C5INC00L7RgdGC0YPQvzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvbmRpdGlvblwiPtCj0YHQu9C+0LLQuNC1OiA8Yj4xPTE8L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubGVuZ3RofSDQs9GA0YPQv9C/IMK3IHtjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmxlbmd0aH0g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRGaWVsZHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IGl0ZW0uaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdExlZnRJdGVtKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtVGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ29uZGl0aW9uXCI+0JDRgtGA0LjQsdGD0YI6IDxiPntpdGVtLmZpZWxkfTwvYj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvdW50XCI+e2l0ZW0ucnVsZXMubGVuZ3RofSDQv9GA0LDQstC40Ls8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkV2FybmluZ3NDb3VudChpdGVtKSA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbU1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhcm5pbmdQaWxsXCI+e2dldEZpZWxkV2FybmluZ3NDb3VudChpdGVtKX0gd2FybmluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZEZpZWxkQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZEZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsQm90dG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwianNvbkJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LjRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSnNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqc29uQnV0dG9uXCIgb25DbGljaz17ZG93bmxvYWRKc29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LrQsNGH0LDRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFJpZ2h0UGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUZ1bGxJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0VGl0bGVcIj7Qn9C+0LvQvdGL0Lkg0LTQvtGB0YLRg9C/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0RmllbGRcIj7Qo9GB0LvQvtCy0LjQtTogMT0xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5BZGRHbG9iYWxHcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCT0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5BZGRHbG9iYWxVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQs9GA0YPQv9C/0Ysg0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0R3JvdXBTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc0FyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsCDQtdGJ0ZEg0L3QtSDQtNC+0LHQsNCy0LvQtdC90YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTWF0Y2hlc1NlYXJjaChncm91cCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdsb2JhbEdyb3VwS2V5KGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwUm93ICR7c2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdENoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhncm91cEtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUdyb3VwU2VsZWN0KGdyb3VwS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJHcm91cElkZW50aXR5KGdyb3VwKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0R2xvYmFsR3JvdXAoaW5kZXgsIGdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVHbG9iYWxHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzRW50aXR5U2VjdGlvblRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNBcmVhIHVzZXJzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LAg0LXRidGRINC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5mdWxsQWNjZXNzVXNlcnMubWFwKCh1c2VySWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyTWF0Y2hlc1NlYXJjaCh1c2VySWQpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwUm93IHVzZXJSb3dcIiBrZXk9e2Ake3VzZXJJZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJVc2VySWRlbnRpdHkodXNlcklkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0R2xvYmFsVXNlcihpbmRleCwgdXNlcklkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR2xvYmFsVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogeyB1c2VySW5kZXg6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAhc2VsZWN0ZWRGaWVsZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPkVtcHR5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRUaXRsZVwiPntzZWxlY3RlZEZpZWxkLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JDRgtGA0LjQsdGD0YI6IHtzZWxlY3RlZEZpZWxkLmZpZWxkfSDCtyB7c2VsZWN0ZWRGaWVsZC5maWVsZFR5cGUgPT09IFwibnVtYmVyXCIgPyBcItCn0LjRgdC70L7QstC+0LlcIiA6IHNlbGVjdGVkRmllbGQuZmllbGRUeXBlID09PSBcInN0cmluZ1wiID8gXCLQodC40LzQstC+0LvRjNC90YvQuVwiIDogXCLQkNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb25CdXR0b25cIiBvbkNsaWNrPXtvcGVuRWRpdEZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyh7IHR5cGU6IFwiZGVsZXRlRmllbGRcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQs9GA0YPQv9C/0Ysg0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQstC90YPRgtGA0Lgg0L/RgNCw0LLQuNC7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VwU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRHcm91cFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWVsZC5ydWxlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LDQstC40LvQsCDQtdGJ0ZEg0L3QtSDQtNC+0LHQsNCy0LvQtdC90YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJ1bGVDYXJkICR7c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRSdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cnVsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVSdWxlU2VsZWN0KHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YHQu9C+0LLQuNC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG9wZXJhdG9yUGlsbCBvcGVyYXRvci0ke3J1bGUub3BlcmF0b3J9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5pc05vdCA/IGBOT1QgJHtydWxlLm9wZXJhdG9yfWAgOiBydWxlLm9wZXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlVmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1aWxkUnVsZVdoZXJlKHNlbGVjdGVkRmllbGQuZmllbGQsIHJ1bGUsc2VsZWN0ZWRGaWVsZC5maWVsZFR5cGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRSdWxlV2FybmluZ3Moc2VsZWN0ZWRGaWVsZCwgcnVsZSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZVdhcm5pbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0UnVsZVdhcm5pbmdzKHNlbGVjdGVkRmllbGQsIHJ1bGUpLm1hcCgod2FybmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17d2FybmluZ30+e3dhcm5pbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuQWRkR3JvdXAocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCz0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5BZGRVc2VyKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0UnVsZShydWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlUnVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5ncm91cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlNaW5pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTWF0Y2hlc1NlYXJjaChncm91cCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cExvY2tlZCA9IHNlbGVjdGVkUnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cFNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWQgfHwgc2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXBSb3cgJHtpc0dyb3VwU2VsZWN0ZWQgPyBcInNlbGVjdGVkR3JvdXBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAke2lzR3JvdXBMb2NrZWQgPyBcImxvY2tlZEdyb3VwXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzR3JvdXBTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzR3JvdXBMb2NrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JPRgNGD0L/Qv9CwINCy0YvQsdGA0LDQvdCwINCy0LzQtdGB0YLQtSDRgSDQv9GA0LDQstC40LvQvtC8XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXBTZWxlY3QoZ3JvdXBLZXksIGlzR3JvdXBMb2NrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdyb3VwSWRlbnRpdHkoZ3JvdXApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdEdyb3VwKHJ1bGUuaWQsIGluZGV4LCBncm91cClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzQXJlYSBydWxlVXNlcnNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS51c2Vycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eU1pbmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUudXNlcnMubWFwKCh1c2VySWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlck1hdGNoZXNTZWFyY2godXNlcklkKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwUm93IHVzZXJSb3dcIiBrZXk9e2Ake3VzZXJJZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVXNlcklkZW50aXR5KHVzZXJJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRVc2VyKHJ1bGUuaWQsIGluZGV4LCB1c2VySWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRSdWxlQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZFJ1bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINC/0YDQsNCy0LjQu9C+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbFNldHRpbmdBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tQWNjZXNzUGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VsZWN0aW9uQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkICE9PSBHTE9CQUxfQUNDRVNTX0lEICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTZWxlY3RlZFJ1bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkUnVsZUlkcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMIHtzZWxlY3RlZFJ1bGVJZHMubGVuZ3RofSDQv9GA0LDQstC40LtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlU2VsZWN0ZWRHcm91cHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEdyb3Vwc0NvdW50ID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywge3NlbGVjdGVkR3JvdXBzQ291bnR9INCz0YDRg9C/0L9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNhdmVTdGF0ZSAke2hhc1Vuc2F2ZWRDaGFuZ2VzID8gXCJjaGFuZ2VkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1Vuc2F2ZWRDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQldGB0YLRjCDQvdC10YHQvtGF0YDQsNC90ZHQvdC90YvQtSDQuNC30LzQtdC90LXQvdC40Y9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0JjQt9C80LXQvdC10L3QuNC5INC90LXRglwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2hlcmVUb2dnbGVCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dXaGVyZVByZXZpZXcoKHZhbHVlKSA9PiAhdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93V2hlcmVQcmV2aWV3ID8gXCLQodC60YDRi9GC0YwgV0hFUkVcIiA6IFwi0J/QvtC60LDQt9Cw0YLRjCBXSEVSRVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93V2hlcmVQcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tV2hlcmVQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21XaGVyZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QmNGC0L7Qs9C+0LLRi9C5IFdIRVJFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjb3B5Q29uZmlnV2hlcmVQcmV2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LrQvtC/0LjRgNC+0LLQsNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57YnVpbGRDb25maWdXaGVyZVByZXZpZXcoKX08L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvYmFsU2V0dGluZ0J1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5jZWxDb25maWdCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbENvbmZpZ0NoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNVbnNhdmVkQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGx5Q29uZmlnQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthcHBseUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1Vuc2F2ZWRDaGFuZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNC80LXQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtkaWFsb2cgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRGaWVsZFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDRgdGC0L7Qu9Cx0LXRhlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1UaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7Qu9C1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1GaWVsZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj7QotC40L8g0LTQsNC90L3Ri9GFPHNlbGVjdCBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiIGFyaWEtbGFiZWw9XCLQotC40L8g0LTQsNC90L3Ri9GFINGB0YLQvtC70LHRhtCwXCIgdmFsdWU9e2Zvcm1GaWVsZFR5cGV9IG9uQ2hhbmdlPXtldmVudD0+c2V0Rm9ybUZpZWxkVHlwZShldmVudC50YXJnZXQudmFsdWUgYXMgTGl0ZXJhbFR5cGV8XCJcIil9PjxvcHRpb24gdmFsdWU9XCJcIj7QkNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJudW1iZXJcIj7Qp9C40YHQu9C+0LLQvtC5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cInN0cmluZ1wiPtCh0LjQvNCy0L7Qu9GM0L3Ri9C5ICjRgtC10LrRgdGCKTwvb3B0aW9uPjwvc2VsZWN0PjwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25hbFJ1bGVCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uYWxSdWxlVGl0bGVcIj7Qn9C10YDQstC+0LUg0L/RgNCw0LLQuNC70L48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUnVsZUZvcm0oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlRmllbGR9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+0KPQtNCw0LvQuNGC0Ywg0YHRgtC+0LvQsdC10YY/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YHQtSDQv9GA0LDQstC40LvQsCDQstC90YPRgtGA0Lgg0L3QtdCz0L4g0YLQvtC20LUg0LHRg9C00YPRgiDRg9C00LDQu9C10L3Riy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlRmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIiB8fCBkaWFsb2cudHlwZSA9PT0gXCJlZGl0UnVsZVwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/RgNCw0LLQuNC70L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC/0YDQsNCy0LjQu9C+XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUnVsZUZvcm0oKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZVJ1bGV9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZVJ1bGVcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj7Qo9C00LDQu9C40YLRjCDQv9GA0LDQstC40LvQvj88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9GLINC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQstC90YPRgtGA0Lgg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsCDRgtC+0LbQtSDQsdGD0LTRg9GCINGD0LTQsNC70LXQvdGLLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVSdWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRHcm91cFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0R3JvdXBcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0LPRgNGD0L/Qv9GDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LPRgNGD0L/Qv9GDXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQk9GA0YPQv9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Hcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybUdyb3VwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUdyb3VwfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHcm91cFwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/Rgz88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9CwINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0YLQvtC70YzQutC+INC40Lcg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHbG9iYWxHcm91cFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCT0YDRg9C/0L/QsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtR3JvdXAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlR2xvYmFsR3JvdXB9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUdsb2JhbEdyb3VwXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/RgyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3RgtCwINCz0YDRg9C/0L/QsCDQsdC+0LvRjNGI0LUg0L3QtSDQsdGD0LTQtdGCINC/0L7Qu9GD0YfQsNGC0Ywg0LTQvtGB0YLRg9C/INC60L4g0LLRgdC10Lwg0LTQsNC90L3Ri9C8LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZUdsb2JhbEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkVXNlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0VXNlclwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZFVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQlNC+0LHQsNCy0LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklEINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70LggdXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Vc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVXNlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlVXNlcn0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlVXNlclwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjz88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0YPQtNC10YIg0YPQtNCw0LvRkdC9INGC0L7Qu9GM0LrQviDQuNC3INGN0YLQvtCz0L4g0L/RgNCw0LLQuNC70LAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVVc2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRHbG9iYWxVc2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHbG9iYWxVc2VyXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkR2xvYmFsVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSUQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1Vc2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVHbG9iYWxVc2VyfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHbG9iYWxVc2VyXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0L7Qu9GM0YjQtSDQvdC1INCx0YPQtNC10YIg0L/QvtC70YPRh9Cw0YLRjCDQtNC+0YHRgtGD0L8g0LrQviDQstGB0LXQvCDQtNCw0L3QvdGL0LwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVHbG9iYWxVc2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgdHlwZSB7TGFuZ3VhZ2V9IGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBjb3B5ID0ge1xuICBhdGxhc0JyYW5kOiBbJ1VaIC8g0JDQotCb0JDQoScsJ1VaIC8gQVRMQVMnLCdVWiAvIEFUTEFTJ10sXG4gIG9yYml0QnJhbmQ6IFsnVVpTUEFDRSAvINCe0JHQodCV0KDQktCQ0KLQntCg0JjQrycsJ1VaU1BBQ0UgLyBPQlNFUlZBVE9SSVlBJywnVVpTUEFDRSAvIE9CU0VSVkFUT1JZJ10sXG4gIHJlbGllZkJyYW5kOiBbJ9Cb0JDQkdCe0KDQkNCi0J7QoNCY0K8g0KLQldCg0KDQmNCi0J7QoNCY0JknLCdIVURVRExBUiBMQUJPUkFUT1JJWUFTSScsJ1RFUlJJVE9SWSBMQUInXSxcbiAgY29udG91ckJyYW5kOiBbJ1VaIC8g0JrQsNGA0YLQvtCz0YDQsNGE0LjRjycsJ1VaIC8gS2FydG9ncmFmaXlhJywnVVogLyBDYXJ0b2dyYXBoeSddLFxuICBwYW5vcmFtYUJyYW5kOiBbJ9Cj0JfQkdCV0JrQmNCh0KLQkNCdIC8g0J/QldCg0KHQn9CV0JrQotCY0JLQqycsJ0/igJhaQkVLSVNUT04gLyBJU1RJUUJPTExBUicsJ1VaQkVLSVNUQU4gLyBQRVJTUEVDVElWRVMnXSxcbiAgcG9yY2VsYWluQnJhbmQ6IFsn0KLQldCg0KDQmNCi0J7QoNCY0K8gLyDQntCR0KrQldCa0KLQqycsJ0hVRFVEIC8gT0JZRUtUTEFSJywnVEVSUklUT1JZIC8gT0JKRUNUUyddLFxuICBuZXh1c0JyYW5kOiBbJ1VaIC8g0JPQldCe0JPQoNCQ0KTQmNCvJywnVVogLyBHRU9HUkFGSVlBJywnVVogLyBHRU9HUkFQSFknXSxcbiAgcmVnaW9uczogWyfRgNC10LPQuNC+0L3QvtCyJywnaHVkdWQnLCdyZWdpb25zJ10sXG4gIGRpc3RyaWN0czogWyfRgNCw0LnQvtC90L7QsicsJ3R1bWFuJywnZGlzdHJpY3RzJ10sXG4gIGRpc3RyaWN0TW9kZTogWyfQoNCw0LnQvtC90YsnLCdUdW1hbmxhcicsJ0Rpc3RyaWN0cyddLFxuICByZWdpb25Nb2RlOiBbJ9Cg0LXQs9C40L7QvdGLJywnSHVkdWRsYXInLCdSZWdpb25zJ10sXG4gIGNvdW50cnk6IFsn0KPQt9Cx0LXQutC40YHRgtCw0L0nLCdPyrt6YmVraXN0b24nLCdVemJla2lzdGFuJ10sXG4gIG5vUmVnaW9uczogWyfQndC10YIg0LTQvtGB0YLRg9C/0L3Ri9GFINGA0LXQs9C40L7QvdC+0LInLCdSdXhzYXQgZXRpbGdhbiBodWR1ZCB5b8q7cScsJ05vIGF2YWlsYWJsZSByZWdpb25zJ10sXG4gIHByb2plY3RzOiBbJ9Cf0YDQvtC10LrRgtGLJywnTG95aWhhbGFyJywnUHJvamVjdHMnXSxcbiAgc2VsZWN0ZWQ6IFsn0JLRi9Cx0YDQsNC90L4nLCdUYW5sYW5nYW4nLCdTZWxlY3RlZCddLFxuICBhY2Nlc3M6IFsn0JTQvtGB0YLRg9C/0L3Ri9C1INGA0LXQs9C40L7QvdGLJywnUnV4c2F0IGV0aWxnYW4gaHVkdWRsYXInLCdBdmFpbGFibGUgcmVnaW9ucyddLFxuICBhbGw6IFsn0JLRgdC1INGA0LXQs9C40L7QvdGLJywnQmFyY2hhIGh1ZHVkbGFyJywnQWxsIHJlZ2lvbnMnXSxcbiAgc2NvcGVIaW50OiBbJzHigJMzINGA0LXQs9C40L7QvdCwOiDRgNCw0LnQvtC90YsuIDQg0Lgg0LHQvtC70LXQtTog0YDQtdCz0LjQvtC90YsuJywnMeKAkzMgaHVkdWQ6IHR1bWFubGFyLiA0IHZhIHVuZGFuIGtvyrtwOiBodWR1ZGxhci4nLCcx4oCTMyByZWdpb25zOiBkaXN0cmljdHMuIDQgb3IgbW9yZTogcmVnaW9ucy4nXSxcbiAgZGlzdHJpY3RQYXJhbWV0ZXI6IFsn0J/QsNGA0LDQvNC10YLRgCDRgNCw0LnQvtC90LAg0LIgVVJMJywnVVJMIGRhZ2kgdHVtYW4gcGFyYW1ldHJpJywnRGlzdHJpY3QgVVJMIHBhcmFtZXRlciddLFxuICBhdGxhc1RpdGxlOiBbJ9Ci0LXRgNGA0LjRgtC+0YDQuNGPXFxu0LIg0LTQtdGC0LDQu9GP0YUuJywnSHVkdWRcXG50YWZzaWxvdGxhcmkuJywnVGVycml0b3J5LFxcbmluIGRldGFpbC4nXSxcbiAgYXRsYXNJbnRybzogWyfQlNCw0L3QvdGL0LUg0L3QsNGH0LjQvdCw0Y7RgtGB0Y8g0YEg0LzQtdGB0YLQsC4nLCdNYcq8bHVtb3Qgam95ZGFuIGJvc2hsYW5hZGkuJywnRXZlcnkgaW5zaWdodCBiZWdpbnMgd2l0aCBhIHBsYWNlLiddLFxuICBvcmJpdFRpdGxlOiBbJ9CX0LXQvNC70Y8uXFxu0JIg0L/QvtC70LUg0LfRgNC10L3QuNGPLicsJ1llci5cXG5OaWdvaGltaXpkYS4nLCdFYXJ0aC5cXG5XaXRoaW4gc2lnaHQuJ10sXG4gIG9yYml0SW50cm86IFsn0JPQtdC+0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC10L3QvdCw0Y8g0L7QsdGB0LXRgNCy0LDRgtC+0YDQuNGPJywnR2VvZmF6b3ZpeSBvYnNlcnZhdG9yaXlhJywnR2Vvc3BhdGlhbCBvYnNlcnZhdG9yeSddLFxuICByZWxpZWZUaXRsZTogWyfQndC+0LLQsNGPXFxu0L/Qu9C+0YHQutC+0YHRgtGMINC30YDQtdC90LjRjy4nLCdZYW5naVxcbnFhcmFzaCBidXJjaGFnaS4nLCdBIG5ld1xcbnBlcnNwZWN0aXZlLiddLFxuICByZWxpZWZJbnRybzogWyfQotC10YDRgNC40YLQvtGA0LjRjyDQutCw0Log0L7QsdGK0ZHQvNC90LDRjyDQvNC+0LTQtdC70YwnLCdIdWR1ZCDigJQgaGFqbWxpIG1vZGVsIHNpZmF0aWRhJywnVGVycml0b3J5IGFzIGEgZGltZW5zaW9uYWwgbW9kZWwnXSxcbiAgbW9zYWljVGl0bGU6IFsn0JLRgdGRXFxu0YHQstGP0LfQsNC90L4uJywnQmFyY2hhc2lcXG5ib2fKu2xpcS4nLCdFdmVyeXRoaW5nXFxuY29ubmVjdHMuJ10sXG4gIG1vc2FpY0ludHJvOiBbJ9Ce0LTQvdCwINGC0LXRgNGA0LjRgtC+0YDQuNGPLiDQoNCw0LfQvdGL0LUg0L3QsNC/0YDQsNCy0LvQtdC90LjRjy4nLCdCaXIgaHVkdWQuIFR1cmxpIHlvyrtuYWxpc2hsYXIuJywnT25lIHRlcnJpdG9yeS4gTWFueSBwZXJzcGVjdGl2ZXMuJ10sXG4gIGNvbnRvdXJUaXRsZTogWyfQotC+0YfQvdCw0Y8g0LrQsNGA0YLQuNC90LAuJywnQW5pcSBtYW56YXJhLicsJ0EgY2xlYXJlciBwaWN0dXJlLiddLFxuICBjb250b3VySW50cm86IFsn0JrQsNGA0YLQvtCz0YDQsNGE0LjRh9C10YHQutC+0LUg0LHRjtGA0L4nLCdLYXJ0b2dyYWZpeWEgYnl1cm9zaScsJ0NhcnRvZ3JhcGhpYyBhdGVsaWVyJ10sXG4gIHBhbm9yYW1hVGl0bGU6IFsn0KHQvNC+0YLRgNC10YLRjFxcbtGI0LjRgNC1LicsJ0tlbmdyb3FcXG5xYXJhbmcuJywnU2VlXFxuYmV5b25kLiddLFxuICBwYW5vcmFtYUludHJvOiBbJ9Cd0L7QstGL0Lkg0LLQt9Cz0LvRj9C0INC90LAg0LfQvdCw0LrQvtC80YvQtSDRgtC10YDRgNC40YLQvtGA0LjQuCcsJ1RhbmlzaCBodWR1ZGxhcmdhIHlhbmdpIG5pZ29oJywnQSBuZXcgdmlldyBvZiBmYW1pbGlhciB0ZXJyaXRvcmllcyddLFxuICBwb3JjZWxhaW5UaXRsZTogWyfQpNC+0YDQvNCwXFxu0YLQtdGA0YDQuNGC0L7RgNC40LguJywnSHVkdWRcXG5zaGFrbGkuJywnVGhlIHNoYXBlXFxub2YgYSBwbGFjZS4nXSxcbiAgcG9yY2VsYWluSW50cm86IFsn0JPQtdC+0LPRgNCw0YTQuNGPINCyINC90L7QstC+0Lwg0LjQt9C80LXRgNC10L3QuNC4JywnR2VvZ3JhZml5YSB5YW5naSBvyrtsY2hhbWRhJywnR2VvZ3JhcGh5IGluIGEgbmV3IGRpbWVuc2lvbiddLFxuICBhdXJvcmFUaXRsZTogWyfQl9C10LzQu9GPINCyINC90L7QstC+0Lwg0YHQstC10YLQtS4nLCdaYW1pbiB5YW5naSBudXJkYS4nLCdMYW5kIGluIGEgbmV3IGxpZ2h0LiddLFxuICBhdXJvcmFJbnRybzogWyfQntGCINGC0LXRgNGA0LjRgtC+0YDQuNC4IOKAlCDQuiDQstC+0LfQvNC+0LbQvdC+0YHRgtGP0LwnLCdIdWR1ZGRhbiDigJQgaW1rb25peWF0bGFyZ2EnLCdGcm9tIHBsYWNlcyB0byBwb3NzaWJpbGl0aWVzJ10sXG4gIG5leHVzVGl0bGU6IFsn0JzQtdGB0YLQviwg0LPQtNC1INCy0YHRkSDRgdCy0Y/Qt9Cw0L3Qvi4nLCdCYXJjaGFzaSBib2fKu2xhbmdhbiBqb3kuJywnV2hlcmUgZXZlcnl0aGluZyBjb25uZWN0cy4nXSxcbiAgbmV4dXNJbnRybzogWyfQotC10YDRgNC40YLQvtGA0LjRjyDQvtCx0YrQtdC00LjQvdGP0LXRgiDQvdCw0L/RgNCw0LLQu9C10L3QuNGPJywnSHVkdWQgeW/Ku25hbGlzaGxhcm5pIGJpcmxhc2h0aXJhZGknLCdUZXJyaXRvcnkgYnJpbmdzIHByb2plY3RzIHRvZ2V0aGVyJ10sXG4gIHJlZ2lzdHJ5OiBbJ9Ca0LDRgtCw0LvQvtCzINC90LDQv9GA0LDQstC70LXQvdC40LknLCdZb8q7bmFsaXNobGFyIGthdGFsb2dpJywnUHJvamVjdCBkaXJlY3RvcnknXSxcbiAgdGVycml0b3J5OiBbJ9Ci0LXRgNGA0LjRgtC+0YDQuNGPJywnSHVkdWQnLCdUZXJyaXRvcnknXSxcbiAgZ2FsbGVyeTogWyfQktCw0YDQuNCw0L3RgtGLINC+0YTQvtGA0LzQu9C10L3QuNGPJywnRGl6YXluIHZhcmlhbnRsYXJpJywnRGVzaWduIHZhcmlhbnRzJ10sXG4gIHJldmlldzogWyfQktGL0LHQvtGAINC+0YTQvtGA0LzQu9C10L3QuNGPJywnRGl6YXluIHRhbmxhc2gnLCdDaG9vc2UgZGVzaWduJ10sXG4gIGxheWVyczogWyfQvdCw0LHQvtGA0L7QsiDQtNCw0L3QvdGL0YUnLCdtYcq8bHVtb3RsYXIgdG/Ku3BsYW1pJywnZGF0YXNldHMnXVxufSBhcyBjb25zdFxuZXhwb3J0IGZ1bmN0aW9uIGxhYlRleHQoa2V5OiBrZXlvZiB0eXBlb2YgY29weSwgbGFuZ3VhZ2U6IExhbmd1YWdlKTogc3RyaW5nIHsgcmV0dXJuIGNvcHlba2V5XVtsYW5ndWFnZSA9PT0gJ3J1JyA/IDAgOiBsYW5ndWFnZSA9PT0gJ3V6JyA/IDEgOiAyXSB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgSW1tdXRhYmxlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHR5cGUgeyBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xuaW1wb3J0IHR5cGUgeyBDb25maWcsIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgREVTSUdOUywgdmFsaWREZXNpZ24gfSBmcm9tICcuLi9jb25maWcvZGVzaWducydcbmltcG9ydCBBY2Nlc3NTZXR0aW5nLCB7IGRlZmF1bHRBY2Nlc3NDb25maWcsIHR5cGUgQWNjZXNzQ29uZmlnIH0gZnJvbSAnLi9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcnXG5pbXBvcnQgJy4vc2V0dGluZy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgY29uZmlnOiBDb25maWcgPSBwcm9wcy5jb25maWc/LmFzTXV0YWJsZSA/IHByb3BzLmNvbmZpZy5hc011dGFibGUoe2RlZXA6dHJ1ZX0pIGFzIENvbmZpZyA6IChwcm9wcy5jb25maWcgPz8ge30pIGFzIENvbmZpZ1xuICBjb25zdCBpbW11dGFibGUgPSBwcm9wcy5jb25maWcgPz8gSW1tdXRhYmxlKHt9KSBhcyBJTUNvbmZpZ1xuICBjb25zdCBzZXRWYWx1ZSA9IDxLIGV4dGVuZHMga2V5b2YgQ29uZmlnPihrZXk6IEssIHZhbHVlOiBDb25maWdbS10pID0+IHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7aWQ6cHJvcHMuaWQsY29uZmlnOmltbXV0YWJsZS5zZXQoa2V5LHZhbHVlKX0pXG4gIGNvbnN0IGFjY2Vzc1ZhbHVlID0gY29uZmlnLmFjY2Vzc0NvbmZpZyBhcyBBY2Nlc3NDb25maWcgfCB1bmRlZmluZWRcbiAgY29uc3QgbWFwU2NhbGUgPSBNYXRoLm1heCguNyxNYXRoLm1pbigxLE51bWJlcihjb25maWcubWFwU2NhbGUpIHx8IC45NCkpXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC10ZW1wbGF0ZS1zZXR0aW5nIGF1dGhvcml0eS1zZXR0aW5nXCI+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIGFjY2Vzcy1zZXR0aW5nLXNlY3Rpb25cIj5cbiAgICAgIDxBY2Nlc3NTZXR0aW5nIHZhbHVlPXthY2Nlc3NWYWx1ZSB8fCBkZWZhdWx0QWNjZXNzQ29uZmlnfSBvbkNoYW5nZT17dmFsdWU9PnNldFZhbHVlKCdhY2Nlc3NDb25maWcnLHZhbHVlKX1cbiAgICAgICAgdGl0bGU9XCLQndCw0YHRgtGA0L7QudC60Lgg0LTQvtGB0YLRg9C/0LBcIiBkZXNjcmlwdGlvbj1cItCV0LTQuNC90YvQuSDQtNC+0YHRgtGD0L8g0Log0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbQtSDQuCDQstGB0LXQvCDRgNCw0LfQtNC10LvQsNC8INC/0L7RgNGC0LDQu9CwINC00LvRjyDQs9GA0YPQv9C/INC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5IFBvcnRhbC5cIiBidXR0b25MYWJlbD1cItCd0LDRgdGC0YDQvtC50LrQuCDQtNC+0YHRgtGD0L/QsFwiIC8+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBhdXRob3JpdHktYXBwZWFyYW5jZS1zZXR0aW5nXCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aG9yaXR5LXNldHRpbmctZmllbGRcIj48c3Bhbj7QndCw0YfQsNC70YzQvdGL0Lkg0LLQsNGA0LjQsNC90YI8L3NwYW4+PHNlbGVjdCBhcmlhLWxhYmVsPVwi0J3QsNGH0LDQu9GM0L3Ri9C5INCy0LDRgNC40LDQvdGCXCIgdmFsdWU9e3ZhbGlkRGVzaWduKGNvbmZpZy5kZXNpZ25WYXJpYW50KX0gb25DaGFuZ2U9e2V2ZW50PT5zZXRWYWx1ZSgnZGVzaWduVmFyaWFudCcsdmFsaWREZXNpZ24oZXZlbnQudGFyZ2V0LnZhbHVlKSl9PntERVNJR05TLm1hcChkZXNpZ249PjxvcHRpb24ga2V5PXtkZXNpZ24uaWR9IHZhbHVlPXtkZXNpZ24uaWR9PntkZXNpZ24ubmFtZS5ydX08L29wdGlvbj4pfTwvc2VsZWN0PjwvbGFiZWw+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYXV0aG9yaXR5LXNldHRpbmctZmllbGRcIj48c3Bhbj7QodGC0LjQu9GMINGA0LDQt9C00LXQu9C+0LIgU1RULCDQv9GA0YPQtNC+0LIg0Lgg0L/QvtGB0LXQstC+0LI8L3NwYW4+PHNlbGVjdCBhcmlhLWxhYmVsPVwi0KHRgtC40LvRjCDQstC90YPRgtGA0LXQvdC90LjRhSDRgNCw0LfQtNC10LvQvtCyXCIgdmFsdWU9e2NvbmZpZy5zZWN0aW9uU3R5bGVNb2RlIHx8ICdvcmlnaW5hbCd9IG9uQ2hhbmdlPXtldmVudD0+c2V0VmFsdWUoJ3NlY3Rpb25TdHlsZU1vZGUnLGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ3N0eWxlZCcgPyAnc3R5bGVkJyA6ICdvcmlnaW5hbCcpfT48b3B0aW9uIHZhbHVlPVwib3JpZ2luYWxcIj7QmNGB0YXQvtC00L3Ri9C5IEFncm8gTW9uaXRvcmluZzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJzdHlsZWRcIj7QkiDRgdGC0LjQu9C1INC90LDRh9Cw0LvRjNC90L7QuSDRgdGC0YDQsNC90LjRhtGLPC9vcHRpb24+PC9zZWxlY3Q+PC9sYWJlbD5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhdXRob3JpdHktc2V0dGluZy1maWVsZFwiPjxzcGFuPtCg0LDQt9C80LXRgCDQutCw0YDRgtGLIMK3IHtNYXRoLnJvdW5kKG1hcFNjYWxlICogMTAwKX0lPC9zcGFuPjxpbnB1dCB0eXBlPVwicmFuZ2VcIiBhcmlhLWxhYmVsPVwi0KDQsNC30LzQtdGAINC60LDRgNGC0YtcIiBtaW49XCIwLjdcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMDFcIiB2YWx1ZT17bWFwU2NhbGV9IG9uQ2hhbmdlPXtldmVudD0+c2V0VmFsdWUoJ21hcFNjYWxlJyxOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSl9IC8+PC9sYWJlbD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==