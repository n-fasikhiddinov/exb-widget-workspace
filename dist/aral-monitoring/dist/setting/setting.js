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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.css"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.css"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,UAAA;EACA,cAAA;EACA,oBAAA;AACJ;;AAEA;EACI,UAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AACJ;;AAEA;;;;;GAAA;AAOA;EACI,aAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,iDAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,WAAA;AAAJ;;AAGA;EACI,UAAA;AAAJ;;AAGA;EACI,mBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,iDAAA;EACA,eAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,wDAAA;EACA,kBAAA;EACA,kDAAA;EACA,sDAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,uFACI;AADR;;AAMA;;EAEI,oDAAA;EACA,kDAAA;EACA,sDAAA;AAHJ;;AAMA;EACI,aAAA;EACA,iGAAA;AAHJ;;AAMA;EACI,WAAA;EACA,iBAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,kBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,8BAAA;EACA,eAAA;EACA,QAAA;EACA,+BAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAHJ;;AAMA;EACI,gCAAA;EACA,gCAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,gCAAA;AAHJ;;AAMA;EACI,mBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;AAHJ;;AAMA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,aAAA;AAHJ;;AAMA;EACI,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AAHJ;;AAMA;;EAEI,mBAAA;EACA,qBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,eAAA;EACA,cAAA;AAHJ;;AAMA;EACI,cAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,YAAA;EACA,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,aAAA;EACA,QAAA;AAHJ;;AAMA;EACI,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,aAAA;AAHJ;;AAMA;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,OAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,SAAA;EACA,oBAAA;EACA,gCAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;;;EAGI,aAAA;EACA,mBAAA;EACA,QAAA;AAHJ;;AAMA;;EAEI,eAAA;EACA,yBAAA;AAHJ;;AAMA;;EAEI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;AAHJ;;AAMA;EACI,WAAA;EACA,YAAA;EACA,eAAA;AAHJ;;AAMA;;EAEI,mBAAA;AAHJ;;AAMA;;EAEI,qBAAA;EACA,cAAA;AAHJ;;AAMA;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAHJ;;AAMA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,qBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,SAAA;AAHJ;;AAMA;EACI,OAAA;EACA,YAAA;AAHJ;;AAMA;EACI,cAAA;EACA,eAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;EACA,cAAA;EACA,uBAAA;AAHJ;;AAMA;EACI,UAAA;EACA,gBAAA;EACA,cAAA;AAHJ;;AAMA;EACI,UAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AAHJ;;AAMA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,iBAAA;EACA,8BAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,oCAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,+BAAA;EACA,qBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,cAAA;AAHJ;;AAMA;EACI,qBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,uBAAA;AAHJ;;AAMA;EACI,UAAA;EACA,gBAAA;EACA,cAAA;AAHJ;;AAMA;EACI,UAAA;AAHJ;;AAMA;EACI,YAAA;EACA,kBAAA;EACA,0BAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;;EAEI,cAAA;EACA,eAAA;AAHJ;;AAMA;EACI,aAAA;EACA,mBAAA;EACA,0BAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,QAAA;EACA,cAAA;EACA,+BAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAHJ;;AAMA;EACI,YAAA;EACA,6BAAA;EACA,8BAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,0CAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,WAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AAHJ;;AAMA;EACI,qBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,yBAAA;EACA,QAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,YAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,gCAAA;EACA,8BAAA;EACA,yBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,QAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,qCAAA;AAHJ;;AAMA;EACI,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;;EAEI,mBAAA;EACA,qBAAA;EACA,cAAA;AAHJ;;AAMA;EACI,aAAA;EACA,8BAAA;EACA,SAAA;AAHJ;;AAMA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;AAHJ;;AAMA;EACI,aAAA;EACA,+BAAA;EACA,QAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,+BAAA;EACA,QAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;EACI,cAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,uBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,mBAAA;EACA,eAAA;EACA,cAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,WAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;AAHJ;;AAMA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AAHJ;;AAMA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,eAAA;EACA,+CAAA;EACA,uBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAOA;EACI,kBAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;EACA,SAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,+CAAA;EACA,gBAAA;EACA,uBAAA;EACA,eAAA;EACA,4BAAA;AAJJ;;AAOA;EACI,cAAA;EACA,0BAAA;AAJJ;;AAOA;EACI,eAAA;EACA,SAAA;EACA,SAAA;EACA,2BAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,2CAAA;EACA,oBAAA;AAJJ;;AAOA;EACI,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,6BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AAJJ;;AAOA;EACI,cAAA;EACA,eAAA;AAJJ;;AAOA;EACI,cAAA;AAJJ;;AAOA;EACI,aAAA;EACA,mBAAA;EACA,QAAA;AAJJ;;AAOA;;EAEI,YAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,sBAAA;AAJJ;;AAOA;EACI,yBAAA;EACA,mBAAA;EACA,cAAA;AAJJ;;AAOA;EACI,yBAAA;EACA,mBAAA;EACA,cAAA;AAJJ;;AAOA;EACI,mBAAA;AAJJ;;AAOA;EACI,mBAAA;AAJJ;;AAOA;;EAEI,aAAA;EACA,eAAA;AAJJ;;AAMA;EACI,cAAA;EACA,gBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,0BAAA;AAHJ;;AAMA;EACI,qBAAA;EACA,mBAAA;EACA,cAAA;AAHJ;;AAMA;EACI,cAAA;AAHJ;;AAMA;EACI,cAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;;EAEI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;EACA,cAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AAHJ;;AAMA;EACI,aAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;AAHJ;;AAMA;EACI,mBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,wBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;EACA,oBAAA;EACA,qBAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,qBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,qBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,WAAA;EACA,UAAA;EACA,WAAA;EACA,8BAAA;EACA,gCAAA;EACA,8CAAA;AAHJ;;AAMA;EACI,eAAA;EACA,YAAA;EACA,qBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,qBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,aAAA;AAHJ;;AAMA;EACI;IACI,uBAAA;IACA,sBAAA;EAHN;EAME;IACI,WAAA;IACA,yBAAA;EAJN;AACF;AAOA;;EAEI,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,cAAA;AALJ;;AAQA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EACA,oBAAA;AALJ;;AAQA;EACI,WAAA;EACA,YAAA;AALJ;;AAQA;;EAEI,cAAA;AALJ;;AAQA;;EAEI,WAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;AALJ;;AAQA;;EAEI,qBAAA;AALJ;;AAQA;EACI,gBAAA;AALJ;;AAQA;EACI,eAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;AALJ;;AAQA;EACI,gBAAA;EACA,oBAAA;EACA,yBAAA;EACA,mCAAA;EACA,cAAA;AALJ;;AAQA;EACI,gBAAA;EACA,gBAAA;EACA,oBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,yBAAA;AALJ;;AAQA;EAAkB,qBAAA;EAAuB,cAAA;AAHzC;;AAIA;EAAkB,qBAAA;EAAuB,cAAA;AACzC;;AAAA;EAAoB,qBAAA;EAAuB,cAAA;AAK3C;;AAJA;EAAiB,qBAAA;EAAuB,cAAA;AASxC;;AAPA;EACI,eAAA;EACA,aAAA;EACA,eAAA;EACA,QAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,oBAAA;EACA,yBAAA;EACA,kCAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;AAUJ;;AAPA;EACI,YAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;AAUJ;;AAPA;EACI,mBAAA;AAUJ;;AAPA;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,2CAAA;EACA,gBAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gCAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;AAUJ;;AAPA;EACI,mBAAA;AAUJ;;AAPA;EACI,SAAA;EACA,aAAA;EACA,iBAAA;EACA,cAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,uBAAA;EACA,+CAAA;AAUJ;;AAPA;EACI,kBAAA;AAUJ;;AAPA;EACI,gBAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,cAAA;EACA,eAAA;AAUJ;;AAPA;EACI,cAAA;EACA,mBAAA;AAUJ;;AAPA;EACI,YAAA;EACA,cAAA;EACA,kBAAA;EACA,6BAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AAUJ;;AAPA;;EAEI,qBAAA;EACA,mBAAA;EACA,cAAA;AAUJ;;AAPA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AAUJ;;AAPA;EACI,YAAA;EACA,yBAAA;EACA,2BAAA;EACA,uBAAA;AAUJ;;AAPA;EACI,cAAA;EACA,gBAAA;AAUJ;;AAPA;EACI,cAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAUJ;;AAPA;EACI,YAAA;EACA,aAAA;EACA,qBAAA;EACA,QAAA;EACA,eAAA;AAUJ;;AAPA;EACI,YAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;AAUJ;;AAPA;EACI,aAAA;EACA,+BAAA;EACA,kBAAA;EACA,QAAA;EACA,mBAAA;AAUJ;;AAPA;EACI,gBAAA;AAUJ;;AAPA;EACI,YAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;EACA,sBAAA;AAUJ;;AAPA;EACI,qBAAA;EACA,mBAAA;EACA,cAAA;AAUJ;;AAPA;EACI,qBAAA;EACA,mBAAA;EACA,cAAA;EACA,qDAAA;AAUJ;;AAPA;EACI;IACI,0BAAA;EAUN;EAPE;IACI,WAAA;EASN;AACF","sourcesContent":[".settingArea {\n    width: 100%;\n    padding: 0;\n    color: inherit;\n    font-family: inherit;\n}\n\n.settingsContent {\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n/* .sourceSelectorCard,\n.accessControlCard {\n    border: 1px solid var(--dark-400, rgba(255, 255, 255, 0.14));\n    border-radius: 6px;\n    background: var(--dark-100, rgba(255, 255, 255, 0.025));\n} */\n\n.sourceSelectorCard {\n    padding: 12px;\n}\n\n.panelCardLabel {\n    margin-bottom: 9px;\n    color: var(--dark-800, rgba(255, 255, 255, 0.72));\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 16px;\n}\n\n.sourceSelectorCard>div:last-child {\n    width: 100%;\n}\n\n.accessControlCard {\n    padding: 0;\n}\n\n.accessControlHeader {\n    margin-bottom: 12px;\n}\n\n.accessControlTitle {\n    margin-bottom: 3px;\n    color: inherit;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n}\n\n.accessControlDescription {\n    color: var(--dark-800, rgba(255, 255, 255, 0.66));\n    font-size: 12px;\n    line-height: 17px;\n}\n\n.accessSettingsButton {\n    width: 100%;\n    min-height: 40px;\n    padding: 8px 14px;\n    border: 1px solid var(--sys-color-primary-main, #00a9c0);\n    border-radius: 3px;\n    background: var(--sys-color-primary-main, #00a9c0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n    box-shadow: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 18px;\n    text-align: center;\n    transition:\n        background-color 0.15s ease,\n        border-color 0.15s ease,\n        box-shadow 0.15s ease;\n}\n\n.accessSettingsButton:hover,\n.accessSettingsButton:focus-visible {\n    border-color: var(--sys-color-primary-dark, #008ca0);\n    background: var(--sys-color-primary-dark, #008ca0);\n    color: var(--sys-color-primary-contrast-text, #ffffff);\n}\n\n.accessSettingsButton:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 2px color-mix(in srgb, var(--sys-color-primary-main, #00a9c0) 28%, transparent);\n}\n\n.accessSettingsButtonText {\n    width: 100%;\n    line-height: 18px;\n    text-align: center;\n}\n\n.sourceSelectorCard button {\n    border-radius: 4px;\n}\n\n.modalArea {\n    color: #f3f4f6;\n    font-family: Arial, sans-serif;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.45);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modalBlock {\n    width: min(1200px, calc(100vw - 32px));\n    height: min(800px, calc(100vh - 32px));\n    background: #1f222b;\n    border: 1px solid #343a49;\n    border-radius: 10px;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n}\n\n.modalList {\n    background: #252c41;\n    padding: 14px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    min-height: 0;\n}\n\n.modalListHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.modalListTitle {\n    font-size: 17px;\n    font-weight: 700;\n}\n\n.modalListSubtitle {\n    margin-top: 3px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.fieldList {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    min-height: 0;\n}\n\n.modalItem {\n    padding: 12px 14px;\n    border-radius: 8px;\n    border: 1px solid #77839f;\n    background: #293148;\n    cursor: pointer;\n    transition: 0.2s;\n}\n\n.modalItem:hover,\n.modalItem.selected {\n    background: #33405f;\n    border-color: #b6c4ed;\n}\n\n.modalItemTitle {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.modalItemInfo {\n    margin-top: 5px;\n    font-size: 13px;\n    color: #b8bfd1;\n}\n\n.modalItemInfo span {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.addFieldButton {\n    height: 64px;\n    border-radius: 8px;\n    border: 1px dashed #9ca8c4;\n    background: transparent;\n    color: #ffffff;\n    font-size: 34px;\n    cursor: pointer;\n}\n\n.addFieldButton:hover {\n    background: #303a56;\n}\n\n.modalBottomActions {\n    margin-top: auto;\n    display: grid;\n    gap: 8px;\n}\n\n.jsonButton {\n    height: 38px;\n    border-radius: 8px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #f3f4f6;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n}\n\n.jsonButton:hover {\n    background: #303a56;\n}\n\n.jsonButton input {\n    display: none;\n}\n\n.modalRightPanel {\n    min-width: 0;\n    min-height: 0;\n    background: #20232c;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.modalItemFullInfo {\n    flex: 1;\n    min-height: 0;\n    padding: 22px;\n    background: #20232c;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.rightHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n    padding-bottom: 16px;\n    border-bottom: 1px solid #3a4050;\n}\n\n.rightTitle {\n    font-size: 24px;\n    font-weight: 800;\n}\n\n.rightField {\n    margin-top: 6px;\n    color: #aeb6ca;\n    font-size: 14px;\n}\n\n.rightHeaderActions,\n.ruleActions,\n.groupActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.rightHeaderActions,\n.ruleActions {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.iconButton,\n.miniIconButton {\n    width: 34px;\n    height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n}\n\n.miniIconButton {\n    width: 26px;\n    height: 26px;\n    font-size: 12px;\n}\n\n.iconButton:hover,\n.miniIconButton:hover {\n    background: #3b4868;\n}\n\n.iconButton.danger,\n.miniIconButton.danger {\n    border-color: #8f4f5b;\n    color: #ffb8c1;\n}\n\n.rulesArea {\n    padding-top: 18px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.ruleCard {\n    padding: 14px;\n    border-radius: 10px;\n    background: #262b36;\n    border: 1px solid #3d465b;\n    transition: 0.2s;\n}\n\n.ruleCard.selectedRule {\n    border-color: #9baee0;\n    background: #2c3448;\n}\n\n.ruleHeader {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.ruleInfo {\n    flex: 1;\n    min-width: 0;\n}\n\n.ruleLabel {\n    color: #aeb6ca;\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.ruleValue {\n    font-size: 15px;\n    font-weight: 700;\n    color: #ffffff;\n    overflow-wrap: anywhere;\n}\n\n.ruleActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.ruleCard:hover .ruleActions {\n    opacity: 1;\n}\n\n.smallButton {\n    min-height: 34px;\n    border-radius: 8px;\n    border: 1px solid #5a6680;\n    background: #293148;\n    color: white;\n    cursor: pointer;\n    padding: 0 10px;\n}\n\n.smallButton:hover {\n    background: #3b4868;\n}\n\n.groupsArea {\n    margin-top: 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.usersArea {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n.ruleUsersArea {\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px dashed #44506a;\n}\n\n.accessEntitySectionTitle {\n    margin-top: 20px;\n    color: #aeb6ca;\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n}\n\n.groupRow {\n    background: #1d2230;\n    border: 1px solid #384258;\n    border-radius: 8px;\n    padding: 8px 10px;\n    color: #d9deea;\n    font-size: 13px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    gap: 12px;\n    transition: 0.2s;\n}\n\n.groupRow.userRow {\n    grid-template-columns: 1fr auto;\n    border-color: #3e526f;\n    background: #1d2634;\n}\n\n.userIdentity .groupIdCopyButton {\n    color: #9fb6df;\n}\n\n.groupRow.selectedGroup {\n    border-color: #9baee0;\n    background: #273149;\n}\n\n.groupRow span {\n    overflow-wrap: anywhere;\n}\n\n.groupActions {\n    opacity: 0;\n    transition: 0.2s;\n    flex-shrink: 0;\n}\n\n.groupRow:hover .groupActions {\n    opacity: 1;\n}\n\n.addRuleButton {\n    height: 44px;\n    border-radius: 9px;\n    border: 1px dashed #78849f;\n    background: transparent;\n    color: white;\n    cursor: pointer;\n}\n\n.addRuleButton:hover {\n    background: #2b3348;\n}\n\n.emptyMini,\n.emptyRules {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.emptyRules {\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px dashed #555f76;\n    text-align: center;\n}\n\n.dialogArea {\n    position: fixed;\n    inset: 0;\n    z-index: 10000;\n    background: rgba(0, 0, 0, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.dialogBlock {\n    width: 520px;\n    max-width: calc(100vw - 32px);\n    max-height: calc(100vh - 32px);\n    overflow: auto;\n    background: #252b38;\n    border: 1px solid #4c566c;\n    border-radius: 12px;\n    padding: 18px;\n    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);\n}\n\n.dialogTitle {\n    font-size: 18px;\n    font-weight: 800;\n    margin-bottom: 12px;\n}\n\n.dialogText {\n    color: #c2c8d5;\n    margin-bottom: 16px;\n}\n\n.dialogInput {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: white;\n    outline: none;\n}\n\n.dialogInput:focus {\n    border-color: #9baee0;\n}\n\n.dialogActions {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n    margin-top: 10px;\n}\n\n.dialogActions button {\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #30384a;\n    color: white;\n    cursor: pointer;\n}\n\n.dialogActions button:hover {\n    background: #3b465d;\n}\n\n.dangerButton {\n    border-color: #985565 !important;\n    background: #4a2430 !important;\n    color: #ffc4cc !important;\n}\n\n.operatorTabs {\n    display: grid;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.operatorTabs.fourTabs {\n    grid-template-columns: repeat(4, 1fr);\n}\n\n.operatorTabs button {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n}\n\n.operatorTabs button:hover,\n.operatorTabs button.active {\n    background: #35415b;\n    border-color: #9baee0;\n    color: #ffffff;\n}\n\n.twoInputGrid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n\n.inListArea {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.inAddRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.inValueRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 8px;\n    align-items: start;\n}\n\n.previewWhere {\n    margin-top: 12px;\n    padding: 10px 12px;\n    border-radius: 8px;\n    border: 1px solid #465169;\n    background: #1e2430;\n    color: #aeb6ca;\n    font-size: 13px;\n}\n\n.previewWhere span {\n    display: block;\n    margin-top: 6px;\n    color: #ffffff;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.optionalRuleBlock {\n    margin-top: 12px;\n    padding: 12px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #202637;\n}\n\n.optionalRuleTitle {\n    margin-bottom: 10px;\n    font-size: 13px;\n    color: #c6ccda;\n}\n\n.bulkActionBar {\n    min-height: 42px;\n    padding: 8px 10px;\n    border-radius: 9px;\n    border: 1px solid #59657d;\n    background: #202637;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    color: #d8deea;\n    font-size: 13px;\n}\n\n.dangerButtonSmall {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #985565;\n    background: #4a2430;\n    color: #ffc4cc;\n    cursor: pointer;\n}\n\n.dangerButtonSmall:hover {\n    background: #633040;\n}\n\n.selectCheckbox {\n    width: 16px;\n    height: 16px;\n    accent-color: #9baee0;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.groupIdentity {\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n.groupName {\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.groupId {\n    color: #aeb6ca;\n    font-size: 12px;\n    font-family: Consolas, \"Courier New\", monospace;\n    overflow-wrap: anywhere;\n}\n\n.groupMembers {\n    margin-top: 2px;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n\n.groupIdCopyButton {\n    width: fit-content;\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    color: #aeb6ca;\n    font-size: 12px;\n    line-height: 1.35;\n    font-family: Consolas, \"Courier New\", monospace;\n    text-align: left;\n    overflow-wrap: anywhere;\n    cursor: pointer;\n    transition: color 0.18s ease;\n}\n\n.groupIdCopyButton:hover {\n    color: #ffffff;\n    text-decoration: underline;\n}\n\n.settingNotice {\n    position: fixed;\n    top: 28px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 11000;\n    min-width: 210px;\n    padding: 11px 18px;\n    border-radius: 9px;\n    border: 1px solid #7185ae;\n    background: #273149;\n    color: #ffffff;\n    font-size: 13px;\n    text-align: center;\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);\n    pointer-events: none;\n}\n\n.globalSettingActions {\n    flex-shrink: 0;\n    min-height: 66px;\n    padding: 13px 22px;\n    border-top: 1px solid #3a4050;\n    background: #20232c;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n}\n\n.saveState {\n    color: #8e96aa;\n    font-size: 13px;\n}\n\n.saveState.changed {\n    color: #f1c27d;\n}\n\n.globalSettingButtons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.cancelConfigButton,\n.applyConfigButton {\n    height: 38px;\n    padding: 0 18px;\n    border-radius: 8px;\n    cursor: pointer;\n    font-size: 13px;\n    transition: 0.18s ease;\n}\n\n.cancelConfigButton {\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n}\n\n.applyConfigButton {\n    border: 1px solid #728ac3;\n    background: #385083;\n    color: #ffffff;\n}\n\n.cancelConfigButton:hover:not(:disabled) {\n    background: #38435b;\n}\n\n.applyConfigButton:hover:not(:disabled) {\n    background: #46619a;\n}\n\n.cancelConfigButton:disabled,\n.applyConfigButton:disabled {\n    opacity: 0.45;\n    cursor: default;\n}\n.staticSelectionBar {\n    flex-shrink: 0;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    min-height: 46px;\n    margin-bottom: 2px;\n    backdrop-filter: blur(6px);\n}\n\n.staticSelectionBar.emptySelection {\n    border-color: #3b4356;\n    background: #1f2532;\n    color: #8790a5;\n}\n\n.staticSelectionBar b {\n    color: #ffffff;\n}\n\n.staticSelectionBar.emptySelection b {\n    color: #aeb6ca;\n}\n\n.combinedSelectionBar {\n    align-items: center;\n}\n\n.selectionCounters,\n.selectionActions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.selectionCounters span {\n    white-space: nowrap;\n}\n\n.dangerButtonSmall:disabled {\n    opacity: 0.42;\n    cursor: default;\n    background: #2a2230;\n    border-color: #554350;\n    color: #9a8590;\n}\n\n.dangerButtonSmall:hover:disabled {\n    background: #2a2230;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n}\n\n.bottomSelectionActions {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: wrap;\n}\n\n.bottomAccessPanel .saveState {\n    white-space: nowrap;\n}\n\n.selectCheckbox {\n    appearance: none;\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 5px;\n    border: 1px solid #697795;\n    background: #1e2430;\n    cursor: pointer;\n    flex-shrink: 0;\n    display: inline-grid;\n    place-content: center;\n    transition: 0.18s ease;\n}\n\n.selectCheckbox:hover:not(:disabled) {\n    border-color: #a9b9e0;\n    background: #273149;\n}\n\n.selectCheckbox:checked {\n    border-color: #9baee0;\n    background: #3d527d;\n}\n\n.selectCheckbox:checked::after {\n    content: \"\";\n    width: 9px;\n    height: 5px;\n    border-left: 2px solid #ffffff;\n    border-bottom: 2px solid #ffffff;\n    transform: rotate(-45deg) translate(1px, -1px);\n}\n\n.selectCheckbox:disabled {\n    cursor: default;\n    opacity: 0.9;\n    border-color: #7484a8;\n    background: #34476d;\n}\n\n.groupRow.lockedGroup {\n    border-color: #6e7fa6;\n    background: #29344c;\n}\n\n.groupRow.lockedGroup .groupActions {\n    opacity: 0.45;\n}\n\n@media (max-width: 820px) {\n    .globalSettingActions {\n        align-items: flex-start;\n        flex-direction: column;\n    }\n\n    .globalSettingButtons {\n        width: 100%;\n        justify-content: flex-end;\n    }\n}\n\n.iconButton,\n.miniIconButton {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    line-height: 1;\n}\n\n.buttonSvgIcon {\n    width: 16px;\n    height: 16px;\n    display: block;\n    fill: currentColor;\n    pointer-events: none;\n}\n\n.miniIconButton .buttonSvgIcon {\n    width: 13px;\n    height: 13px;\n}\n\n.iconButton:not(.danger),\n.miniIconButton:not(.danger) {\n    color: #d8deea;\n}\n\n.sideSearchInput,\n.groupSearchInput {\n    width: 100%;\n    min-height: 36px;\n    padding: 0 11px;\n    border-radius: 8px;\n    border: 1px solid #4b5670;\n    background: #1d2330;\n    color: #ffffff;\n    outline: none;\n    font-size: 13px;\n}\n\n.sideSearchInput:focus,\n.groupSearchInput:focus {\n    border-color: #9baee0;\n}\n\n.groupSearchInput {\n    margin-top: 14px;\n}\n\n.modalItemMeta {\n    margin-top: 9px;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n    flex-wrap: wrap;\n    color: #8fa3cf;\n    font-size: 12px;\n}\n\n.warningPill {\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #856a35;\n    background: rgba(132, 93, 25, 0.22);\n    color: #f2c678;\n}\n\n.operatorPill {\n    margin-left: 8px;\n    padding: 2px 7px;\n    border-radius: 999px;\n    border: 1px solid #59657d;\n    background: #1e2430;\n    color: #d8deea;\n    font-size: 11px;\n    text-transform: uppercase;\n}\n\n.operator-equal { border-color: #6e83b8; color: #c9d7ff; }\n.operator-range { border-color: #6f9070; color: #c8f2c9; }\n.operator-include { border-color: #8c7ab8; color: #e0d2ff; }\n.operator-like { border-color: #9a7a5a; color: #ffd7b5; }\n\n.ruleWarnings {\n    margin-top: 8px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n}\n\n.ruleWarnings span {\n    padding: 3px 8px;\n    border-radius: 999px;\n    border: 1px solid #82603b;\n    background: rgba(130, 96, 59, 0.2);\n    color: #f2c678;\n    font-size: 12px;\n    font-weight: 600;\n}\n\n.bottomAccessPanel {\n    min-width: 0;\n}\n\n.whereToggleButton {\n    min-height: 30px;\n    padding: 0 10px;\n    border-radius: 7px;\n    border: 1px solid #56627c;\n    background: #1f2638;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.whereToggleButton:hover {\n    background: #303a56;\n}\n\n.bottomWherePreview {\n    position: absolute;\n    left: 22px;\n    right: 22px;\n    bottom: 74px;\n    max-height: 155px;\n    border-radius: 10px;\n    border: 1px solid #465169;\n    background: #171c27;\n    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.34);\n    overflow: hidden;\n}\n\n.bottomWhereHeader {\n    min-height: 36px;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid #30394d;\n    color: #c6ccda;\n    font-size: 13px;\n    font-weight: 700;\n}\n\n.bottomWhereHeader button {\n    min-height: 26px;\n    padding: 0 9px;\n    border-radius: 7px;\n    border: 1px solid #59657d;\n    background: #293148;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 12px;\n}\n\n.bottomWhereHeader button:hover {\n    background: #3b4868;\n}\n\n.bottomWherePreview pre {\n    margin: 0;\n    padding: 12px;\n    max-height: 118px;\n    overflow: auto;\n    color: #ffffff;\n    font-size: 12px;\n    line-height: 1.45;\n    white-space: pre-wrap;\n    overflow-wrap: anywhere;\n    font-family: Consolas, \"Courier New\", monospace;\n}\n\n.modalRightPanel {\n    position: relative;\n}\n\n.joinOperatorControl {\n    min-height: 32px;\n    padding: 4px;\n    border: 1px solid #59657d;\n    border-radius: 8px;\n    background: #1e2430;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    color: #aeb6ca;\n    font-size: 12px;\n}\n\n.joinOperatorControl span {\n    padding: 0 7px;\n    white-space: nowrap;\n}\n\n.joinOperatorControl button {\n    height: 24px;\n    padding: 0 9px;\n    border-radius: 6px;\n    border: 1px solid transparent;\n    background: transparent;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 700;\n}\n\n.joinOperatorControl button:hover,\n.joinOperatorControl button.active {\n    border-color: #9baee0;\n    background: #35415b;\n    color: #ffffff;\n}\n\n.modalItemInfoLine {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n.modalItemCondition {\n    min-width: 0;\n    color: #aeb6ca !important;\n    font-weight: 500 !important;\n    overflow-wrap: anywhere;\n}\n\n.modalItemCondition b {\n    color: #ffffff;\n    font-weight: 700;\n}\n\n.modalItemCount {\n    flex-shrink: 0;\n    color: #8fa3cf !important;\n    font-size: 12px;\n    font-weight: 700;\n    white-space: normal;\n    text-align: right;\n}\n\n.groupIdTitleLine {\n    min-width: 0;\n    display: flex;\n    align-items: baseline;\n    gap: 6px;\n    flex-wrap: wrap;\n}\n\n.groupTitleAfterId {\n    min-width: 0;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 700;\n    overflow-wrap: anywhere;\n}\n\n.ruleModeRow {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: start;\n    gap: 8px;\n    margin-bottom: 12px;\n}\n\n.ruleModeRow .operatorTabs {\n    margin-bottom: 0;\n}\n\n.notToggleButton {\n    height: 36px;\n    min-width: 58px;\n    padding: 0 12px;\n    border-radius: 8px;\n    border: 1px solid #6d5d76;\n    background: #1e2430;\n    color: #d8deea;\n    cursor: pointer;\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 0.04em;\n    transition: 0.18s ease;\n}\n\n.notToggleButton:hover {\n    border-color: #c59be0;\n    background: #2b2638;\n    color: #ffffff;\n}\n\n.notToggleButton.active {\n    border-color: #d1a7ef;\n    background: #49345f;\n    color: #ffffff;\n    box-shadow: 0 0 0 1px rgba(209, 167, 239, 0.18) inset;\n}\n\n@media (max-width: 620px) {\n    .ruleModeRow {\n        grid-template-columns: 1fr;\n    }\n\n    .notToggleButton {\n        width: 100%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/aral-monitoring/src/setting/setting.css"
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/aral-monitoring/src/setting/setting.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.temp-portal-setting,
.temp-portal-setting * {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.temp-portal-setting {
  width: 100%;
  padding: 16px;
  line-height: 1.5;
}

.setting-section {
  width: 100%;
}

.access-setting-section {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/aral-monitoring/src/setting/setting.css"],"names":[],"mappings":"AAAA;;EAEI,sBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,gBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;EACI,WAAA;AACJ","sourcesContent":[".temp-portal-setting,\n.temp-portal-setting * {\n    box-sizing: border-box;\n    font-family: Arial, sans-serif;\n}\n\n.temp-portal-setting {\n    width: 100%;\n    padding: 16px;\n    line-height: 1.5;\n}\n\n.setting-section {\n    width: 100%;\n}\n\n.access-setting-section {\n    width: 100%;\n}\n"],"sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.css"
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.css ***!
  \*********************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./AccessSetting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_AccessSetting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./your-extensions/widgets/aral-monitoring/src/setting/setting.css"
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/aral-monitoring/src/setting/setting.css ***!
  \*************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./setting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/aral-monitoring/src/setting/setting.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.tsx"
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.tsx ***!
  \*********************************************************************************************/
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
/* harmony import */ var _AccessSetting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessSetting.css */ "./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.css");
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
    if (!/^[A-Za-z_][A-Za-z0-9_.]*$/.test(field))
        return "1=0";
    let where = "1=0";
    if (rule.operator === "equal") {
        const value = String((_a = rule.value) !== null && _a !== void 0 ? _a : "").trim();
        if (value)
            where = `${field} = ${quoteValue(value)}`;
    }
    if (rule.operator === "range") {
        const from = String((_b = rule.from) !== null && _b !== void 0 ? _b : "").trim();
        const to = String((_c = rule.to) !== null && _c !== void 0 ? _c : "").trim();
        if (from && to)
            where = `${field} BETWEEN ${quoteValue(from)} AND ${quoteValue(to)}`;
    }
    if (rule.operator === "include") {
        const values = ((_d = rule.values) !== null && _d !== void 0 ? _d : []).map(String).map((value) => value.trim()).filter(Boolean);
        if (values.length > 0)
            where = `${field} IN (${values.map(quoteValue).join(", ")})`;
    }
    if (rule.operator === "like") {
        const value = String((_e = rule.value) !== null && _e !== void 0 ? _e : "").trim();
        if (value)
            where = `${field} LIKE ${quoteValue(value)}`;
    }
    return rule.isNot && where !== "1=0" ? `NOT (${where})` : where;
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/aral-monitoring/src/setting/setting.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessSetting/AccessSetting */ "./your-extensions/widgets/aral-monitoring/src/setting/AccessSetting/AccessSetting.tsx");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/aral-monitoring/src/setting/setting.css");



function Setting(props) {
    var _a;
    const accessConfig = (_a = props.config) === null || _a === void 0 ? void 0 : _a.accessConfig;
    const accessValue = accessConfig
        ? typeof accessConfig.asMutable === "function"
            ? accessConfig.asMutable({ deep: true })
            : accessConfig
        : _AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_1__.defaultAccessConfig;
    const handleAccessChange = (nextAccessConfig) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set("accessConfig", nextAccessConfig),
        });
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "temp-portal-setting" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("section", { className: "setting-section access-setting-section" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_AccessSetting_AccessSetting__WEBPACK_IMPORTED_MODULE_1__["default"], { value: accessValue, onChange: handleAccessChange, title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430", description: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 Portal.", buttonLabel: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430" }))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmFsLW1vbml0b3JpbmcvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzSkFBc0osVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVB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SSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2pELENBQUMsQ0FBRSxZQUF3QztRQUMvQyxDQUFDLENBQUMsNkVBQW1CLENBQUM7SUFFMUIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLGdCQUE4QixFQUFRLEVBQUU7UUFDaEUsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNsQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDWixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDO1NBQzdELENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDSCxvRUFBSyxTQUFTLEVBQUMscUJBQXFCO1FBQ2hDLHdFQUFTLFNBQVMsRUFBQyx3Q0FBd0M7WUFDdkQsMkRBQUMsb0VBQWEsSUFDVixLQUFLLEVBQUUsV0FBVyxFQUNsQixRQUFRLEVBQUUsa0JBQWtCLEVBQzVCLEtBQUssRUFBQyxtR0FBbUIsRUFDekIsV0FBVyxFQUFDLGtXQUEwRSxFQUN0RixXQUFXLEVBQUMsOElBQTJCLEdBQ3pDLENBQ0ksQ0FDUixDQUNULENBQUM7QUFDTixDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJhbC1tb25pdG9yaW5nL3NyYy9zZXR0aW5nL0FjY2Vzc1NldHRpbmcvQWNjZXNzU2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyYWwtbW9uaXRvcmluZy9zcmMvc2V0dGluZy9zZXR0aW5nLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyYWwtbW9uaXRvcmluZy9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcuY3NzPzhkOTgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyYWwtbW9uaXRvcmluZy9zcmMvc2V0dGluZy9zZXR0aW5nLmNzcz9mODAwIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyYWwtbW9uaXRvcmluZy9zcmMvc2V0dGluZy9BY2Nlc3NTZXR0aW5nL0FjY2Vzc1NldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmFsLW1vbml0b3Jpbmcvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZXR0aW5nQXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbi5zZXR0aW5nc0NvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi8qIC5zb3VyY2VTZWxlY3RvckNhcmQsXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstNDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay0xMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpKTtcbn0gKi9cbi5zb3VyY2VTZWxlY3RvckNhcmQge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ucGFuZWxDYXJkTGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjZXNzQ29udHJvbENhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWNjZXNzQ29udHJvbEhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5hY2Nlc3NDb250cm9sVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcbiAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXRleHQsICNmZmZmZmYpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG59XG5cbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpob3Zlcixcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1kYXJrLCAjMDA4Y2EwKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XG4gIGNvbG9yOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1jb250cmFzdC10ZXh0LCAjZmZmZmZmKTtcbn1cblxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LW1haW4sICMwMGE5YzApIDI4JSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uYWNjZXNzU2V0dGluZ3NCdXR0b25UZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb3VyY2VTZWxlY3RvckNhcmQgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWxBcmVhIHtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbEJsb2NrIHtcbiAgd2lkdGg6IG1pbigxMjAwcHgsIDEwMHZ3IC0gMzJweCk7XG4gIGhlaWdodDogbWluKDgwMHB4LCAxMDB2aCAtIDMycHgpO1xuICBiYWNrZ3JvdW5kOiAjMWYyMjJiO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwNXB4IDFmcjtcbn1cblxuLm1vZGFsTGlzdCB7XG4gIGJhY2tncm91bmQ6ICMyNTJjNDE7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLm1vZGFsTGlzdEhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsTGlzdFRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9kYWxMaXN0U3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWVsZExpc3Qge1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5tb2RhbEl0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3ODM5ZjtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubW9kYWxJdGVtOmhvdmVyLFxuLm1vZGFsSXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMzMzQwNWY7XG4gIGJvcmRlci1jb2xvcjogI2I2YzRlZDtcbn1cblxuLm1vZGFsSXRlbVRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWxJdGVtSW5mbyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2I4YmZkMTtcbn1cblxuLm1vZGFsSXRlbUluZm8gc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkRmllbGRCdXR0b24ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM5Y2E4YzQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGRGaWVsZEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMDNhNTY7XG59XG5cbi5tb2RhbEJvdHRvbUFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbn1cblxuLmpzb25CdXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcbiAgY29sb3I6ICNmM2Y0ZjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmpzb25CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xufVxuXG4uanNvbkJ1dHRvbiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2RhbFJpZ2h0UGFuZWwge1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbEl0ZW1GdWxsSW5mbyB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnJpZ2h0SGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYTQwNTA7XG59XG5cbi5yaWdodFRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucmlnaHRGaWVsZCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcbi5ydWxlQWN0aW9ucyxcbi5ncm91cEFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnJpZ2h0SGVhZGVyQWN0aW9ucyxcbi5ydWxlQWN0aW9ucyB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmljb25CdXR0b24sXG4ubWluaUljb25CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XG4gIGJhY2tncm91bmQ6ICMyOTMxNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWluaUljb25CdXR0b24ge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pY29uQnV0dG9uOmhvdmVyLFxuLm1pbmlJY29uQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcbn1cblxuLmljb25CdXR0b24uZGFuZ2VyLFxuLm1pbmlJY29uQnV0dG9uLmRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogIzhmNGY1YjtcbiAgY29sb3I6ICNmZmI4YzE7XG59XG5cbi5ydWxlc0FyZWEge1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucnVsZUNhcmQge1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjYyYjM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2Q0NjViO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ucnVsZUNhcmQuc2VsZWN0ZWRSdWxlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBiYWNrZ3JvdW5kOiAjMmMzNDQ4O1xufVxuXG4ucnVsZUhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbn1cblxuLnJ1bGVJbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ucnVsZUxhYmVsIHtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucnVsZVZhbHVlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ydWxlQWN0aW9ucyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ucnVsZUNhcmQ6aG92ZXIgLnJ1bGVBY3Rpb25zIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNtYWxsQnV0dG9uIHtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWE2NjgwO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uc21hbGxCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2I0ODY4O1xufVxuXG4uZ3JvdXBzQXJlYSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogN3B4O1xufVxuXG4udXNlcnNBcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3cHg7XG59XG5cbi5ydWxlVXNlcnNBcmVhIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzQ0NTA2YTtcbn1cblxuLmFjY2Vzc0VudGl0eVNlY3Rpb25UaXRsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjYWViNmNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG5cbi5ncm91cFJvdyB7XG4gIGJhY2tncm91bmQ6ICMxZDIyMzA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODQyNTg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGNvbG9yOiAjZDlkZWVhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uZ3JvdXBSb3cudXNlclJvdyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGJvcmRlci1jb2xvcjogIzNlNTI2ZjtcbiAgYmFja2dyb3VuZDogIzFkMjYzNDtcbn1cblxuLnVzZXJJZGVudGl0eSAuZ3JvdXBJZENvcHlCdXR0b24ge1xuICBjb2xvcjogIzlmYjZkZjtcbn1cblxuLmdyb3VwUm93LnNlbGVjdGVkR3JvdXAge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMyNzMxNDk7XG59XG5cbi5ncm91cFJvdyBzcGFuIHtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG5cbi5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmdyb3VwUm93OmhvdmVyIC5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYWRkUnVsZUJ1dHRvbiB7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzc4ODQ5ZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkUnVsZUJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYjMzNDg7XG59XG5cbi5lbXB0eU1pbmksXG4uZW1wdHlSdWxlcyB7XG4gIGNvbG9yOiAjOGU5NmFhO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5lbXB0eVJ1bGVzIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM1NTVmNzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpYWxvZ0FyZWEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2dCbG9jayB7XG4gIHdpZHRoOiA1MjBweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMyNTJiMzg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YzU2NmM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmRpYWxvZ1RpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGlhbG9nVGV4dCB7XG4gIGNvbG9yOiAjYzJjOGQ1O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZGlhbG9nSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRpYWxvZ0lucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xufVxuXG4uZGlhbG9nQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDY1ZDtcbn1cblxuLmRhbmdlckJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNGEyNDMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XG59XG5cbi5vcGVyYXRvclRhYnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxuLm9wZXJhdG9yVGFicyBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM1NDE1YjtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnR3b0lucHV0R3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5MaXN0QXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uaW5BZGRSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uaW5WYWx1ZVJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5wcmV2aWV3V2hlcmUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnByZXZpZXdXaGVyZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ub3B0aW9uYWxSdWxlQmxvY2sge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY1MTY5O1xuICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xufVxuXG4ub3B0aW9uYWxSdWxlVGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjYzZjY2RhO1xufVxuXG4uYnVsa0FjdGlvbkJhciB7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMyMDI2Mzc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGwge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4NTU2NTtcbiAgYmFja2dyb3VuZDogIzRhMjQzMDtcbiAgY29sb3I6ICNmZmM0Y2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhbmdlckJ1dHRvblNtYWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYzMzA0MDtcbn1cblxuLnNlbGVjdENoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYWNjZW50LWNvbG9yOiAjOWJhZWUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZ3JvdXBJZGVudGl0eSB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG59XG5cbi5ncm91cE5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwSWQge1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLmdyb3VwTWVtYmVycyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgY29sb3I6ICM4ZmEzY2Y7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmdyb3VwSWRDb3B5QnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNhZWI2Y2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XG59XG5cbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnNldHRpbmdOb3RpY2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjhweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDExMDAwO1xuICBtaW4td2lkdGg6IDIxMHB4O1xuICBwYWRkaW5nOiAxMXB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcbiAgYmFja2dyb3VuZDogIzI3MzE0OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi1oZWlnaHQ6IDY2cHg7XG4gIHBhZGRpbmc6IDEzcHggMjJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XG4gIGJhY2tncm91bmQ6ICMyMDIzMmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc2F2ZVN0YXRlIHtcbiAgY29sb3I6ICM4ZTk2YWE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNhdmVTdGF0ZS5jaGFuZ2VkIHtcbiAgY29sb3I6ICNmMWMyN2Q7XG59XG5cbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IDAuMThzIGVhc2U7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBiYWNrZ3JvdW5kOiAjMjkzMTQ4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFwcGx5Q29uZmlnQnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcyOGFjMztcbiAgYmFja2dyb3VuZDogIzM4NTA4MztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jYW5jZWxDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMzg0MzViO1xufVxuXG4uYXBwbHlDb25maWdCdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjNDY2MTlhO1xufVxuXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmRpc2FibGVkLFxuLmFwcGx5Q29uZmlnQnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40NTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc3RhdGljU2VsZWN0aW9uQmFyIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbn1cblxuLnN0YXRpY1NlbGVjdGlvbkJhci5lbXB0eVNlbGVjdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogIzNiNDM1NjtcbiAgYmFja2dyb3VuZDogIzFmMjUzMjtcbiAgY29sb3I6ICM4NzkwYTU7XG59XG5cbi5zdGF0aWNTZWxlY3Rpb25CYXIgYiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3RhdGljU2VsZWN0aW9uQmFyLmVtcHR5U2VsZWN0aW9uIGIge1xuICBjb2xvcjogI2FlYjZjYTtcbn1cblxuLmNvbWJpbmVkU2VsZWN0aW9uQmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGlvbkNvdW50ZXJzLFxuLnNlbGVjdGlvbkFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNlbGVjdGlvbkNvdW50ZXJzIHNwYW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGFuZ2VyQnV0dG9uU21hbGw6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XG4gIGJvcmRlci1jb2xvcjogIzU1NDM1MDtcbiAgY29sb3I6ICM5YTg1OTA7XG59XG5cbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMyYTIyMzA7XG59XG5cbi5ib3R0b21BY2Nlc3NQYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ib3R0b21TZWxlY3Rpb25BY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJvdHRvbUFjY2Vzc1BhbmVsIC5zYXZlU3RhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2VsZWN0Q2hlY2tib3gge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY5Nzc5NTtcbiAgYmFja2dyb3VuZDogIzFlMjQzMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLnNlbGVjdENoZWNrYm94OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTliOWUwO1xuICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xufVxuXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzliYWVlMDtcbiAgYmFja2dyb3VuZDogIzNkNTI3ZDtcbn1cblxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDFweCwgLTFweCk7XG59XG5cbi5zZWxlY3RDaGVja2JveDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXItY29sb3I6ICM3NDg0YTg7XG4gIGJhY2tncm91bmQ6ICMzNDQ3NmQ7XG59XG5cbi5ncm91cFJvdy5sb2NrZWRHcm91cCB7XG4gIGJvcmRlci1jb2xvcjogIzZlN2ZhNjtcbiAgYmFja2dyb3VuZDogIzI5MzQ0Yztcbn1cblxuLmdyb3VwUm93LmxvY2tlZEdyb3VwIC5ncm91cEFjdGlvbnMge1xuICBvcGFjaXR5OiAwLjQ1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuLmljb25CdXR0b24sXG4ubWluaUljb25CdXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYnV0dG9uU3ZnSWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubWluaUljb25CdXR0b24gLmJ1dHRvblN2Z0ljb24ge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuXG4uaWNvbkJ1dHRvbjpub3QoLmRhbmdlciksXG4ubWluaUljb25CdXR0b246bm90KC5kYW5nZXIpIHtcbiAgY29sb3I6ICNkOGRlZWE7XG59XG5cbi5zaWRlU2VhcmNoSW5wdXQsXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwIDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiNTY3MDtcbiAgYmFja2dyb3VuZDogIzFkMjMzMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNpZGVTZWFyY2hJbnB1dDpmb2N1cyxcbi5ncm91cFNlYXJjaElucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xufVxuXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5tb2RhbEl0ZW1NZXRhIHtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogIzhmYTNjZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2FybmluZ1BpbGwge1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg1NmEzNTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzIsIDkzLCAyNSwgMC4yMik7XG4gIGNvbG9yOiAjZjJjNjc4O1xufVxuXG4ub3BlcmF0b3JQaWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5vcGVyYXRvci1lcXVhbCB7XG4gIGJvcmRlci1jb2xvcjogIzZlODNiODtcbiAgY29sb3I6ICNjOWQ3ZmY7XG59XG5cbi5vcGVyYXRvci1yYW5nZSB7XG4gIGJvcmRlci1jb2xvcjogIzZmOTA3MDtcbiAgY29sb3I6ICNjOGYyYzk7XG59XG5cbi5vcGVyYXRvci1pbmNsdWRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGM3YWI4O1xuICBjb2xvcjogI2UwZDJmZjtcbn1cblxuLm9wZXJhdG9yLWxpa2Uge1xuICBib3JkZXItY29sb3I6ICM5YTdhNWE7XG4gIGNvbG9yOiAjZmZkN2I1O1xufVxuXG4ucnVsZVdhcm5pbmdzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNnB4O1xufVxuXG4ucnVsZVdhcm5pbmdzIHNwYW4ge1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgyNjAzYjtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzAsIDk2LCA1OSwgMC4yKTtcbiAgY29sb3I6ICNmMmM2Nzg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJvdHRvbUFjY2Vzc1BhbmVsIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ud2hlcmVUb2dnbGVCdXR0b24ge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU2NjI3YztcbiAgYmFja2dyb3VuZDogIzFmMjYzODtcbiAgY29sb3I6ICNkOGRlZWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2hlcmVUb2dnbGVCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzAzYTU2O1xufVxuXG4uYm90dG9tV2hlcmVQcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMnB4O1xuICByaWdodDogMjJweDtcbiAgYm90dG9tOiA3NHB4O1xuICBtYXgtaGVpZ2h0OiAxNTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcbiAgYmFja2dyb3VuZDogIzE3MWMyNztcbiAgYm94LXNoYWRvdzogMCAxNHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjM0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvdHRvbVdoZXJlSGVhZGVyIHtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzAzOTRkO1xuICBjb2xvcjogI2M2Y2NkYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uIHtcbiAgbWluLWhlaWdodDogMjZweDtcbiAgcGFkZGluZzogMCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcbiAgYmFja2dyb3VuZDogIzI5MzE0ODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYm90dG9tV2hlcmVIZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNiNDg2ODtcbn1cblxuLmJvdHRvbVdoZXJlUHJldmlldyBwcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1heC1oZWlnaHQ6IDExOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5tb2RhbFJpZ2h0UGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIHtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBjb2xvcjogI2FlYjZjYTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uam9pbk9wZXJhdG9yQ29udHJvbCBzcGFuIHtcbiAgcGFkZGluZzogMCA3cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2Q4ZGVlYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbjpob3Zlcixcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbi5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICM5YmFlZTA7XG4gIGJhY2tncm91bmQ6ICMzNTQxNWI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubW9kYWxJdGVtSW5mb0xpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbn1cblxuLm1vZGFsSXRlbUNvbmRpdGlvbiB7XG4gIG1pbi13aWR0aDogMDtcbiAgY29sb3I6ICNhZWI2Y2EgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbn1cblxuLm1vZGFsSXRlbUNvbmRpdGlvbiBiIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tb2RhbEl0ZW1Db3VudCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogIzhmYTNjZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ3JvdXBJZFRpdGxlTGluZSB7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ3JvdXBUaXRsZUFmdGVySWQge1xuICBtaW4td2lkdGg6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4ucnVsZU1vZGVSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucnVsZU1vZGVSb3cgLm9wZXJhdG9yVGFicyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5ub3RUb2dnbGVCdXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1pbi13aWR0aDogNThweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZDVkNzY7XG4gIGJhY2tncm91bmQ6ICMxZTI0MzA7XG4gIGNvbG9yOiAjZDhkZWVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcbn1cblxuLm5vdFRvZ2dsZUJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2M1OWJlMDtcbiAgYmFja2dyb3VuZDogIzJiMjYzODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ub3RUb2dnbGVCdXR0b24uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDFhN2VmO1xuICBiYWNrZ3JvdW5kOiAjNDkzNDVmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjA5LCAxNjcsIDIzOSwgMC4xOCkgaW5zZXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAucnVsZU1vZGVSb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5ub3RUb2dnbGVCdXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmFsLW1vbml0b3Jpbmcvc3JjL3NldHRpbmcvQWNjZXNzU2V0dGluZy9BY2Nlc3NTZXR0aW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBOzs7OztHQUFBO0FBT0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksaURBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0RBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFD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QUVJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFVSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVBBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBVUo7O0FBUEE7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVBBO0VBQ0ksZ0JBQUE7QUFVSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQVVKOztBQVBBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFQQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7QUFVSjs7QUFQQTtFQUNJO0lBQ0ksMEJBQUE7RUFVTjtFQVBFO0lBQ0ksV0FBQTtFQVNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNldHRpbmdBcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLnNldHRpbmdzQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLyogLnNvdXJjZVNlbGVjdG9yQ2FyZCxcXG4uYWNjZXNzQ29udHJvbENhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLTQwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay0xMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpKTtcXG59ICovXFxuXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5wYW5lbENhcmRMYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG59XFxuXFxuLnNvdXJjZVNlbGVjdG9yQ2FyZD5kaXY6bGFzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbENhcmQge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbEhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5hY2Nlc3NDb250cm9sVGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uYWNjZXNzQ29udHJvbERlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstODAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpKTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKTtcXG4gICAgY29sb3I6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXRleHQsICNmZmZmZmYpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLFxcbiAgICAgICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsXFxuICAgICAgICBib3gtc2hhZG93IDAuMTVzIGVhc2U7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpob3ZlcixcXG4uYWNjZXNzU2V0dGluZ3NCdXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktZGFyaywgIzAwOGNhMCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN5cy1jb2xvci1wcmltYXJ5LWRhcmssICMwMDhjYTApO1xcbiAgICBjb2xvcjogdmFyKC0tc3lzLWNvbG9yLXByaW1hcnktY29udHJhc3QtdGV4dCwgI2ZmZmZmZik7XFxufVxcblxcbi5hY2Nlc3NTZXR0aW5nc0J1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zeXMtY29sb3ItcHJpbWFyeS1tYWluLCAjMDBhOWMwKSAyOCUsIHRyYW5zcGFyZW50KTtcXG59XFxuXFxuLmFjY2Vzc1NldHRpbmdzQnV0dG9uVGV4dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc291cmNlU2VsZWN0b3JDYXJkIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1vZGFsQXJlYSB7XFxuICAgIGNvbG9yOiAjZjNmNGY2O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxCbG9jayB7XFxuICAgIHdpZHRoOiBtaW4oMTIwMHB4LCBjYWxjKDEwMHZ3IC0gMzJweCkpO1xcbiAgICBoZWlnaHQ6IG1pbig4MDBweCwgY2FsYygxMDB2aCAtIDMycHgpKTtcXG4gICAgYmFja2dyb3VuZDogIzFmMjIyYjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0M2E0OTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDVweCAxZnI7XFxufVxcblxcbi5tb2RhbExpc3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjUyYzQxO1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxufVxcblxcbi5tb2RhbExpc3RIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbExpc3RUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1vZGFsTGlzdFN1YnRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uZmllbGRMaXN0IHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbn1cXG5cXG4ubW9kYWxJdGVtIHtcXG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NzgzOWY7XFxuICAgIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLm1vZGFsSXRlbTpob3ZlcixcXG4ubW9kYWxJdGVtLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogIzMzNDA1ZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYjZjNGVkO1xcbn1cXG5cXG4ubW9kYWxJdGVtVGl0bGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tb2RhbEl0ZW1JbmZvIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiAjYjhiZmQxO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mbyBzcGFuIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hZGRGaWVsZEJ1dHRvbiB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzljYThjNDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDM0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEZpZWxkQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLm1vZGFsQm90dG9tQWN0aW9ucyB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uanNvbkJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTY2MjdjO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyNjM4O1xcbiAgICBjb2xvcjogI2YzZjRmNjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uanNvbkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzMDNhNTY7XFxufVxcblxcbi5qc29uQnV0dG9uIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsUmlnaHRQYW5lbCB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgYmFja2dyb3VuZDogIzIwMjMyYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1vZGFsSXRlbUZ1bGxJbmZvIHtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMjJweDtcXG4gICAgYmFja2dyb3VuZDogIzIwMjMyYztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ucmlnaHRIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNhNDA1MDtcXG59XFxuXFxuLnJpZ2h0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5yaWdodEZpZWxkIHtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucmlnaHRIZWFkZXJBY3Rpb25zLFxcbi5ydWxlQWN0aW9ucyxcXG4uZ3JvdXBBY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5yaWdodEhlYWRlckFjdGlvbnMsXFxuLnJ1bGVBY3Rpb25zIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaWNvbkJ1dHRvbixcXG4ubWluaUljb25CdXR0b24ge1xcbiAgICB3aWR0aDogMzRweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XFxuICAgIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWluaUljb25CdXR0b24ge1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5pY29uQnV0dG9uOmhvdmVyLFxcbi5taW5pSWNvbkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzYjQ4Njg7XFxufVxcblxcbi5pY29uQnV0dG9uLmRhbmdlcixcXG4ubWluaUljb25CdXR0b24uZGFuZ2VyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOGY0ZjViO1xcbiAgICBjb2xvcjogI2ZmYjhjMTtcXG59XFxuXFxuLnJ1bGVzQXJlYSB7XFxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5ydWxlQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMyNjJiMzY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZDQ2NWI7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5ydWxlQ2FyZC5zZWxlY3RlZFJ1bGUge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMyYzM0NDg7XFxufVxcblxcbi5ydWxlSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucnVsZUluZm8ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4td2lkdGg6IDA7XFxufVxcblxcbi5ydWxlTGFiZWwge1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5ydWxlVmFsdWUge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnJ1bGVBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5ydWxlQ2FyZDpob3ZlciAucnVsZUFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc21hbGxCdXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1YTY2ODA7XFxuICAgIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5zbWFsbEJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzYjQ4Njg7XFxufVxcblxcbi5ncm91cHNBcmVhIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi51c2Vyc0FyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuLnJ1bGVVc2Vyc0FyZWEge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjNDQ1MDZhO1xcbn1cXG5cXG4uYWNjZXNzRW50aXR5U2VjdGlvblRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG59XFxuXFxuLmdyb3VwUm93IHtcXG4gICAgYmFja2dyb3VuZDogIzFkMjIzMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4NDI1ODtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXG4gICAgY29sb3I6ICNkOWRlZWE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5ncm91cFJvdy51c2VyUm93IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2U1MjZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQyNjM0O1xcbn1cXG5cXG4udXNlcklkZW50aXR5IC5ncm91cElkQ29weUJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjOWZiNmRmO1xcbn1cXG5cXG4uZ3JvdXBSb3cuc2VsZWN0ZWRHcm91cCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gICAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG59XFxuXFxuLmdyb3VwUm93IHNwYW4ge1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmdyb3VwQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZ3JvdXBSb3c6aG92ZXIgLmdyb3VwQWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5hZGRSdWxlQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNzg4NDlmO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRSdWxlQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzJiMzM0ODtcXG59XFxuXFxuLmVtcHR5TWluaSxcXG4uZW1wdHlSdWxlcyB7XFxuICAgIGNvbG9yOiAjOGU5NmFhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5lbXB0eVJ1bGVzIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM1NTVmNzY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpYWxvZ0FyZWEge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGluc2V0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaWFsb2dCbG9jayB7XFxuICAgIHdpZHRoOiA1MjBweDtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMnB4KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6ICMyNTJiMzg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YzU2NmM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLmRpYWxvZ1RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uZGlhbG9nVGV4dCB7XFxuICAgIGNvbG9yOiAjYzJjOGQ1O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uZGlhbG9nSW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmRpYWxvZ0lucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZGlhbG9nQWN0aW9ucyBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDAgMTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzAzODRhO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRpYWxvZ0FjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzNiNDY1ZDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvbiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzk4NTU2NSAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kOiAjNGEyNDMwICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiAjZmZjNGNjICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcGVyYXRvclRhYnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLm9wZXJhdG9yVGFicy5mb3VyVGFicyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVyYXRvclRhYnMgYnV0dG9uOmhvdmVyLFxcbi5vcGVyYXRvclRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6ICMzNTQxNWI7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi50d29JbnB1dEdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmluTGlzdEFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmluQWRkUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmluVmFsdWVSb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBnYXA6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ucHJldmlld1doZXJlIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5wcmV2aWV3V2hlcmUgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiA2cHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm9wdGlvbmFsUnVsZUJsb2NrIHtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ2NTE2OTtcXG4gICAgYmFja2dyb3VuZDogIzIwMjYzNztcXG59XFxuXFxuLm9wdGlvbmFsUnVsZVRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogI2M2Y2NkYTtcXG59XFxuXFxuLmJ1bGtBY3Rpb25CYXIge1xcbiAgICBtaW4taGVpZ2h0OiA0MnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk2NTdkO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyNjM3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgY29sb3I6ICNkOGRlZWE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmRhbmdlckJ1dHRvblNtYWxsIHtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ODU1NjU7XFxuICAgIGJhY2tncm91bmQ6ICM0YTI0MzA7XFxuICAgIGNvbG9yOiAjZmZjNGNjO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM2MzMwNDA7XFxufVxcblxcbi5zZWxlY3RDaGVja2JveCB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGFjY2VudC1jb2xvcjogIzliYWVlMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmdyb3VwSWRlbnRpdHkge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uZ3JvdXBOYW1lIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5ncm91cElkIHtcXG4gICAgY29sb3I6ICNhZWI2Y2E7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uZ3JvdXBNZW1iZXJzIHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBjb2xvcjogIzhmYTNjZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5cXG4uZ3JvdXBJZENvcHlCdXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2FlYjZjYTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcXG4gICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XFxufVxcblxcbi5ncm91cElkQ29weUJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNldHRpbmdOb3RpY2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjhweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHotaW5kZXg6IDExMDAwO1xcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcbiAgICBwYWRkaW5nOiAxMXB4IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcxODVhZTtcXG4gICAgYmFja2dyb3VuZDogIzI3MzE0OTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdsb2JhbFNldHRpbmdBY3Rpb25zIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDY2cHg7XFxuICAgIHBhZGRpbmc6IDEzcHggMjJweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTQwNTA7XFxuICAgIGJhY2tncm91bmQ6ICMyMDIzMmM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2F2ZVN0YXRlIHtcXG4gICAgY29sb3I6ICM4ZTk2YWE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnNhdmVTdGF0ZS5jaGFuZ2VkIHtcXG4gICAgY29sb3I6ICNmMWMyN2Q7XFxufVxcblxcbi5nbG9iYWxTZXR0aW5nQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uLFxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjE4cyBlYXNlO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU5NjU3ZDtcXG4gICAgYmFja2dyb3VuZDogIzI5MzE0ODtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5hcHBseUNvbmZpZ0J1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MjhhYzM7XFxuICAgIGJhY2tncm91bmQ6ICMzODUwODM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY2FuY2VsQ29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYmFja2dyb3VuZDogIzM4NDM1YjtcXG59XFxuXFxuLmFwcGx5Q29uZmlnQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYmFja2dyb3VuZDogIzQ2NjE5YTtcXG59XFxuXFxuLmNhbmNlbENvbmZpZ0J1dHRvbjpkaXNhYmxlZCxcXG4uYXBwbHlDb25maWdCdXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjQ1O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5zdGF0aWNTZWxlY3Rpb25CYXIge1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBtaW4taGVpZ2h0OiA0NnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbn1cXG5cXG4uc3RhdGljU2VsZWN0aW9uQmFyLmVtcHR5U2VsZWN0aW9uIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjM2I0MzU2O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWYyNTMyO1xcbiAgICBjb2xvcjogIzg3OTBhNTtcXG59XFxuXFxuLnN0YXRpY1NlbGVjdGlvbkJhciBiIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5zdGF0aWNTZWxlY3Rpb25CYXIuZW1wdHlTZWxlY3Rpb24gYiB7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbn1cXG5cXG4uY29tYmluZWRTZWxlY3Rpb25CYXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VsZWN0aW9uQ291bnRlcnMsXFxuLnNlbGVjdGlvbkFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnNlbGVjdGlvbkNvdW50ZXJzIHNwYW4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZGFuZ2VyQnV0dG9uU21hbGw6ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjQyO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGJhY2tncm91bmQ6ICMyYTIyMzA7XFxuICAgIGJvcmRlci1jb2xvcjogIzU1NDM1MDtcXG4gICAgY29sb3I6ICM5YTg1OTA7XFxufVxcblxcbi5kYW5nZXJCdXR0b25TbWFsbDpob3ZlcjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQ6ICMyYTIyMzA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ib3R0b21TZWxlY3Rpb25BY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvdHRvbUFjY2Vzc1BhbmVsIC5zYXZlU3RhdGUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3gge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY5Nzc5NTtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYTliOWUwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjczMTQ5O1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzliYWVlMDtcXG4gICAgYmFja2dyb3VuZDogIzNkNTI3ZDtcXG59XFxuXFxuLnNlbGVjdENoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiA5cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmZmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgxcHgsIC0xcHgpO1xcbn1cXG5cXG4uc2VsZWN0Q2hlY2tib3g6ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNzQ4NGE4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMzQ0NzZkO1xcbn1cXG5cXG4uZ3JvdXBSb3cubG9ja2VkR3JvdXAge1xcbiAgICBib3JkZXItY29sb3I6ICM2ZTdmYTY7XFxuICAgIGJhY2tncm91bmQ6ICMyOTM0NGM7XFxufVxcblxcbi5ncm91cFJvdy5sb2NrZWRHcm91cCAuZ3JvdXBBY3Rpb25zIHtcXG4gICAgb3BhY2l0eTogMC40NTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAgIC5nbG9iYWxTZXR0aW5nQWN0aW9ucyB7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmdsb2JhbFNldHRpbmdCdXR0b25zIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcbn1cXG5cXG4uaWNvbkJ1dHRvbixcXG4ubWluaUljb25CdXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uYnV0dG9uU3ZnSWNvbiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWluaUljb25CdXR0b24gLmJ1dHRvblN2Z0ljb24ge1xcbiAgICB3aWR0aDogMTNweDtcXG4gICAgaGVpZ2h0OiAxM3B4O1xcbn1cXG5cXG4uaWNvbkJ1dHRvbjpub3QoLmRhbmdlciksXFxuLm1pbmlJY29uQnV0dG9uOm5vdCguZGFuZ2VyKSB7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbn1cXG5cXG4uc2lkZVNlYXJjaElucHV0LFxcbi5ncm91cFNlYXJjaElucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDAgMTFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI1NjcwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMzMwO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uc2lkZVNlYXJjaElucHV0OmZvY3VzLFxcbi5ncm91cFNlYXJjaElucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOWJhZWUwO1xcbn1cXG5cXG4uZ3JvdXBTZWFyY2hJbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5tb2RhbEl0ZW1NZXRhIHtcXG4gICAgbWFyZ2luLXRvcDogOXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDdweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBjb2xvcjogIzhmYTNjZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ud2FybmluZ1BpbGwge1xcbiAgICBwYWRkaW5nOiAycHggN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg1NmEzNTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzIsIDkzLCAyNSwgMC4yMik7XFxuICAgIGNvbG9yOiAjZjJjNjc4O1xcbn1cXG5cXG4ub3BlcmF0b3JQaWxsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZzogMnB4IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5vcGVyYXRvci1lcXVhbCB7IGJvcmRlci1jb2xvcjogIzZlODNiODsgY29sb3I6ICNjOWQ3ZmY7IH1cXG4ub3BlcmF0b3ItcmFuZ2UgeyBib3JkZXItY29sb3I6ICM2ZjkwNzA7IGNvbG9yOiAjYzhmMmM5OyB9XFxuLm9wZXJhdG9yLWluY2x1ZGUgeyBib3JkZXItY29sb3I6ICM4YzdhYjg7IGNvbG9yOiAjZTBkMmZmOyB9XFxuLm9wZXJhdG9yLWxpa2UgeyBib3JkZXItY29sb3I6ICM5YTdhNWE7IGNvbG9yOiAjZmZkN2I1OyB9XFxuXFxuLnJ1bGVXYXJuaW5ncyB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLnJ1bGVXYXJuaW5ncyBzcGFuIHtcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MjYwM2I7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTMwLCA5NiwgNTksIDAuMik7XFxuICAgIGNvbG9yOiAjZjJjNjc4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ib3R0b21BY2Nlc3NQYW5lbCB7XFxuICAgIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLndoZXJlVG9nZ2xlQnV0dG9uIHtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjYyN2M7XFxuICAgIGJhY2tncm91bmQ6ICMxZjI2Mzg7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLndoZXJlVG9nZ2xlQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMwM2E1NjtcXG59XFxuXFxuLmJvdHRvbVdoZXJlUHJldmlldyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjJweDtcXG4gICAgcmlnaHQ6IDIycHg7XFxuICAgIGJvdHRvbTogNzRweDtcXG4gICAgbWF4LWhlaWdodDogMTU1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjUxNjk7XFxuICAgIGJhY2tncm91bmQ6ICMxNzFjMjc7XFxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4zNCk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ib3R0b21XaGVyZUhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMwMzk0ZDtcXG4gICAgY29sb3I6ICNjNmNjZGE7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJvdHRvbVdoZXJlSGVhZGVyIGJ1dHRvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XFxuICAgIHBhZGRpbmc6IDAgOXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJhY2tncm91bmQ6ICMyOTMxNDg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLmJvdHRvbVdoZXJlSGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzYjQ4Njg7XFxufVxcblxcbi5ib3R0b21XaGVyZVByZXZpZXcgcHJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMThweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLm1vZGFsUmlnaHRQYW5lbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wge1xcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTY1N2Q7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZDogIzFlMjQzMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGNvbG9yOiAjYWViNmNhO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5qb2luT3BlcmF0b3JDb250cm9sIHNwYW4ge1xcbiAgICBwYWRkaW5nOiAwIDdweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwYWRkaW5nOiAwIDlweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmpvaW5PcGVyYXRvckNvbnRyb2wgYnV0dG9uOmhvdmVyLFxcbi5qb2luT3BlcmF0b3JDb250cm9sIGJ1dHRvbi5hY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6ICM5YmFlZTA7XFxuICAgIGJhY2tncm91bmQ6ICMzNTQxNWI7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ubW9kYWxJdGVtSW5mb0xpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1vZGFsSXRlbUNvbmRpdGlvbiB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgY29sb3I6ICNhZWI2Y2EgIWltcG9ydGFudDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm1vZGFsSXRlbUNvbmRpdGlvbiBiIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tb2RhbEl0ZW1Db3VudCB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBjb2xvcjogIzhmYTNjZiAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZ3JvdXBJZFRpdGxlTGluZSB7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBnYXA6IDZweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZ3JvdXBUaXRsZUFmdGVySWQge1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4ucnVsZU1vZGVSb3cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4ucnVsZU1vZGVSb3cgLm9wZXJhdG9yVGFicyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5ub3RUb2dnbGVCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG1pbi13aWR0aDogNThweDtcXG4gICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZDVkNzY7XFxuICAgIGJhY2tncm91bmQ6ICMxZTI0MzA7XFxuICAgIGNvbG9yOiAjZDhkZWVhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4xOHMgZWFzZTtcXG59XFxuXFxuLm5vdFRvZ2dsZUJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2M1OWJlMDtcXG4gICAgYmFja2dyb3VuZDogIzJiMjYzODtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5ub3RUb2dnbGVCdXR0b24uYWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZDFhN2VmO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDkzNDVmO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMjA5LCAxNjcsIDIzOSwgMC4xOCkgaW5zZXQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xcbiAgICAucnVsZU1vZGVSb3cge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG5cXG4gICAgLm5vdFRvZ2dsZUJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50ZW1wLXBvcnRhbC1zZXR0aW5nLFxuLnRlbXAtcG9ydGFsLXNldHRpbmcgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnRlbXAtcG9ydGFsLXNldHRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnNldHRpbmctc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjZXNzLXNldHRpbmctc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJhbC1tb25pdG9yaW5nL3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVJLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGVtcC1wb3J0YWwtc2V0dGluZyxcXG4udGVtcC1wb3J0YWwtc2V0dGluZyAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGVtcC1wb3J0YWwtc2V0dGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uc2V0dGluZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY2Nlc3Mtc2V0dGluZy1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL0FjY2Vzc1NldHRpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vQWNjZXNzU2V0dGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc2V0dGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zZXR0aW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUmVhY3QsIGdldEFwcFN0b3JlIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCBcIi4vQWNjZXNzU2V0dGluZy5jc3NcIjtcblxuZXhwb3J0IHR5cGUgUnVsZU9wZXJhdG9yID0gXCJlcXVhbFwiIHwgXCJyYW5nZVwiIHwgXCJpbmNsdWRlXCIgfCBcImxpa2VcIjtcblxuZXhwb3J0IHR5cGUgQWNjZXNzUnVsZSA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG9wZXJhdG9yOiBSdWxlT3BlcmF0b3I7XG4gICAgaXNOb3Q/OiBib29sZWFuO1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIGZyb20/OiBzdHJpbmc7XG4gICAgdG8/OiBzdHJpbmc7XG4gICAgdmFsdWVzPzogc3RyaW5nW107XG4gICAgZ3JvdXBzOiBzdHJpbmdbXTtcbiAgICB1c2Vyczogc3RyaW5nW107XG59O1xuXG5leHBvcnQgdHlwZSBBY2Nlc3NGaWVsZFJ1bGUgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgcnVsZXM6IEFjY2Vzc1J1bGVbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjY2Vzc0ZpZWxkSm9pbk9wZXJhdG9yID0gXCJhbmRcIiB8IFwib3JcIjtcblxuZXhwb3J0IHR5cGUgQWNjZXNzQ29uZmlnID0ge1xuICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHN0cmluZ1tdO1xuICAgIGZ1bGxBY2Nlc3NVc2Vyczogc3RyaW5nW107XG4gICAgcnVsZXM6IEFjY2Vzc0ZpZWxkUnVsZVtdO1xuICAgIC8qKlxuICAgICAqINCa0LDQuiDQvtCx0YrQtdC00LjQvdGP0YLRjCDRgNCw0LfQvdGL0LUg0YHRgtC+0LvQsdGG0Ysg0LTQu9GPINC+0LTQvdC+0Lkg0LPRgNGD0L/Qv9GLLlxuICAgICAqINCf0YDQsNCy0LjQu9CwINCy0L3Rg9GC0YDQuCDQvtC00L3QvtCz0L4g0YHRgtC+0LvQsdGG0LAg0LLRgdC10LPQtNCwINC+0LHRitC10LTQuNC90Y/RjtGC0YHRjyDRh9C10YDQtdC3IE9SLlxuICAgICAqL1xuICAgIGZpZWxkSm9pbk9wZXJhdG9yPzogQWNjZXNzRmllbGRKb2luT3BlcmF0b3I7XG59O1xuXG50eXBlIFBvcnRhbEdyb3VwSW5mbyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdXNlcnNDb3VudDogbnVtYmVyIHwgbnVsbDtcbiAgICBpc1VuYXZhaWxhYmxlPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgUG9ydGFsVXNlckluZm8gPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBmdWxsTmFtZT86IHN0cmluZztcbiAgICBpc1VuYXZhaWxhYmxlPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgRXNyaVJlcXVlc3RGdW5jdGlvbiA9IChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgICBxdWVyeT86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj47XG4gICAgICAgIHJlc3BvbnNlVHlwZT86IHN0cmluZztcbiAgICB9LFxuKSA9PiBQcm9taXNlPHsgZGF0YTogYW55IH0+O1xuXG50eXBlIERpYWxvZ1N0YXRlID0gbnVsbCB8IHtcbiAgICB0eXBlOlxuICAgIHwgXCJhZGRGaWVsZFwiXG4gICAgfCBcImVkaXRGaWVsZFwiXG4gICAgfCBcImRlbGV0ZUZpZWxkXCJcbiAgICB8IFwiYWRkUnVsZVwiXG4gICAgfCBcImVkaXRSdWxlXCJcbiAgICB8IFwiZGVsZXRlUnVsZVwiXG4gICAgfCBcImFkZEdyb3VwXCJcbiAgICB8IFwiZWRpdEdyb3VwXCJcbiAgICB8IFwiZGVsZXRlR3JvdXBcIlxuICAgIHwgXCJhZGRHbG9iYWxHcm91cFwiXG4gICAgfCBcImVkaXRHbG9iYWxHcm91cFwiXG4gICAgfCBcImRlbGV0ZUdsb2JhbEdyb3VwXCJcbiAgICB8IFwiYWRkVXNlclwiXG4gICAgfCBcImVkaXRVc2VyXCJcbiAgICB8IFwiZGVsZXRlVXNlclwiXG4gICAgfCBcImFkZEdsb2JhbFVzZXJcIlxuICAgIHwgXCJlZGl0R2xvYmFsVXNlclwiXG4gICAgfCBcImRlbGV0ZUdsb2JhbFVzZXJcIjtcbiAgICBwYXlsb2FkPzogYW55O1xufTtcblxuY29uc3QgR0xPQkFMX0FDQ0VTU19JRCA9IFwiX19nbG9iYWxfYWNjZXNzX19cIjtcblxuY29uc3QgRWRpdEljb24gPSAoKSA9PiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9XCJidXR0b25TdmdJY29uXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTE3LjUxOTUzMSAwLjA3ODEyNSBDMTcuMjM0Mzc1IDAuMTM2NzE5IDE2LjkxNzk2OSAwLjI3NzM0NCAxNi42OTE0MDYgMC40NDkyMTkgQzE2LjU2NjQwNiAwLjUzOTA2MiAxNi4yMDMxMjUgMC44ODI4MTIgMTUuODc4OTA2IDEuMjA3MDMxIEwxNS4yOTI5NjkgMS43OTY4NzUgTDE2Ljc2OTUzMSAzLjI2OTUzMSBMMTguMjQyMTg4IDQuNzQ2MDk0IEwxOC44NjcxODggNC4xMjEwOTQgQzE5LjIxNDg0NCAzLjc3NzM0NCAxOS41NTg1OTQgMy4zOTg0MzggMTkuNjQwNjI1IDMuMjgxMjUgQzIwLjE5NTMxMiAyLjQ0NTMxMiAyMC4wODk4NDQgMS4zNzEwOTQgMTkuMzc4OTA2IDAuNjYwMTU2IEMxOC44ODI4MTIgMC4xNjQwNjIgMTguMTg3NSAtMC4wNTQ2ODc1IDE3LjUxOTUzMSAwLjA3ODEyNSBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMS4wNjY0MDYgNi4wMjM0MzggQzguMzkwNjI1IDguNzAzMTI1IDcuNzM0Mzc1IDkuMzgyODEyIDcuNzAzMTI1IDkuNDkyMTg4IEM3LjY4MzU5NCA5LjU2NjQwNiA3LjUzOTA2MiAxMC4yNzczNDQgNy4zODI4MTIgMTEuMDc0MjE5IEM3LjE5MTQwNiAxMi4wMzUxNTYgNy4xMDU0NjkgMTIuNTU0Njg4IDcuMTIxMDk0IDEyLjYyODkwNiBDNy4xNTYyNSAxMi43NjU2MjUgNy4yNzM0MzggMTIuODgyODEyIDcuNDEwMTU2IDEyLjkxNzk2OSBDNy41NTg1OTQgMTIuOTUzMTI1IDEwLjUzOTA2MiAxMi4zNTkzNzUgMTAuNjkxNDA2IDEyLjI2NTYyNSBDMTAuNzUgMTIuMjI2NTYyIDEyLjI3NzM0NCAxMC43MTg3NSAxNC4wODIwMzEgOC45MTAxNTYgTDE3LjM2MzI4MSA1LjYyNSBMMTUuODk4NDM4IDQuMTYwMTU2IEMxNS4wOTM3NSAzLjM1NTQ2OSAxNC40MjU3ODEgMi42OTUzMTIgMTQuNDE0MDYyIDIuNjk1MzEyIEMxNC40MDIzNDQgMi42OTUzMTIgMTIuODk4NDM4IDQuMTk1MzEyIDExLjA2NjQwNiA2LjAyMzQzOCBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yLjA0Mjk2OSAzLjQxNzk2OSBDMS4yOTI5NjkgMy41NTQ2ODggMC41OTc2NTYgNC4wODU5MzggMC4yNTc4MTIgNC43ODUxNTYgQy0wLjAxNTYyNSA1LjM0NzY1NiAtMC4wMDM5MDYyNSA0Ljk1MzEyNSAwLjAwNzgxMjUgMTEuODM1OTM4IEwwLjAxOTUzMTIgMTguMDI3MzQ0IEwwLjEwNTQ2OSAxOC4yODEyNSBDMC4yMzQzNzUgMTguNjU2MjUgMC40NTcwMzEgMTkuMDA3ODEyIDAuNzQyMTg4IDE5LjI5Njg3NSBDMS4wMzUxNTYgMTkuNTg5ODQ0IDEuMzI0MjE5IDE5Ljc2OTUzMSAxLjcwNzAzMSAxOS45MDIzNDQgTDEuOTcyNjU2IDIwIEwxNC42NDQ1MzEgMjAgTDE0Ljk0OTIxOSAxOS45MDIzNDQgQzE1LjczNDM3NSAxOS42NTYyNSAxNi4zNTE1NjIgMTkgMTYuNTg5ODQ0IDE4LjE2MDE1NiBDMTYuNjU2MjUgMTcuOTI1NzgxIDE2LjY2MDE1NiAxNy42NzE4NzUgMTYuNjYwMTU2IDE0LjI3MzQzOCBMMTYuNjYwMTU2IDEwLjYzNjcxOSBMMTYuNTQyOTY5IDEwLjQ0OTIxOSBDMTYuMzcxMDk0IDEwLjE3MTg3NSAxNi4wODIwMzEgMTAuMDIzNDM4IDE1Ljc2OTUzMSAxMC4wNTA3ODEgQzE1LjQ5NjA5NCAxMC4wNzQyMTkgMTUuMjgxMjUgMTAuMjAzMTI1IDE1LjEyODkwNiAxMC40Mzc1IEwxNS4wMTk1MzEgMTAuNjAxNTYyIEwxNSAxNC4xOTUzMTIgQzE0Ljk4MDQ2OSAxNy40ODQzNzUgMTQuOTc2NTYyIDE3LjgwNDY4OCAxNC45MTQwNjIgMTcuOTE0MDYyIEMxNC44MjAzMTIgMTguMDg1OTM4IDE0LjU5NzY1NiAxOC4yNjk1MzEgMTQuNDI1NzgxIDE4LjMyMDMxMiBDMTQuMzIwMzEyIDE4LjM1MTU2MiAxMi41MTE3MTkgMTguMzU5Mzc1IDguMjM4MjgxIDE4LjM1MTU2MiBMMi4xOTkyMTkgMTguMzM5ODQ0IEwyLjA0Njg3NSAxOC4yMzQzNzUgQzEuOTY0ODQ0IDE4LjE3NTc4MSAxLjg1MTU2MiAxOC4wNjI1IDEuNzk2ODc1IDE3Ljk4MDQ2OSBMMS42OTkyMTkgMTcuODM1OTM4IEwxLjY4NzUgMTEuNzUgQzEuNjc5Njg4IDUuODE2NDA2IDEuNjc5Njg4IDUuNjYwMTU2IDEuNzUzOTA2IDUuNTE1NjI1IEMxLjc5Njg3NSA1LjQzNzUgMS44Nzg5MDYgNS4zMjQyMTkgMS45NDE0MDYgNS4yNjU2MjUgQzIuMTg3NSA1LjAyNzM0NCAyLjAxNTYyNSA1LjAzOTA2MiA1LjgwNDY4OCA1LjAzOTA2MiBDOC40MzM1OTQgNS4wMzkwNjIgOS4zMDg1OTQgNS4wMjczNDQgOS40Mjk2ODggNC45OTIxODggQzkuNjUyMzQ0IDQuOTI1NzgxIDkuODk0NTMxIDQuNjcxODc1IDkuOTU3MDMxIDQuNDQxNDA2IEMxMC4wNjI1IDQuMDcwMzEyIDkuOTA2MjUgMy42Nzk2ODggOS41NzgxMjUgMy40ODgyODEgTDkuMzk0NTMxIDMuMzc4OTA2IEw1Ljg1OTM3NSAzLjM3MTA5NCBDMy4wNzgxMjUgMy4zNjcxODggMi4yNjU2MjUgMy4zNzUgMi4wNDI5NjkgMy40MTc5NjkgWlwiIC8+XG4gICAgPC9zdmc+XG4pO1xuXG5jb25zdCBUcmFzaEljb24gPSAoKSA9PiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9XCJidXR0b25TdmdJY29uXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTcuOTMzNTk0IDEuOTM3NSBDNy42MDkzNzUgMi4wMjM0MzggNy4yODkwNjIgMi4yMTQ4NDQgNy4wNTg1OTQgMi40NTcwMzEgQzYuODA4NTk0IDIuNzE0ODQ0IDYuNjk5MjE5IDIuOTI1NzgxIDYuNTI3MzQ0IDMuNDQ1MzEyIEM2LjM4NjcxOSAzLjg2NzE4OCA2LjIwMzEyNSA0LjEyMTA5NCA1LjkyMTg3NSA0LjI2OTUzMSBDNS43NjU2MjUgNC4zNTE1NjIgNS43MTQ4NDQgNC4zNTU0NjkgNC4yMzA0NjkgNC4zNzUgQzIuNzUzOTA2IDQuMzk0NTMxIDIuNjk1MzEyIDQuMzk4NDM4IDIuNTg5ODQ0IDQuNDc2NTYyIEMyLjIwNzAzMSA0Ljc2MTcxOSAyLjIwNzAzMSA1LjIzODI4MSAyLjU4OTg0NCA1LjUyMzQzOCBMMi42OTkyMTkgNS42MDU0NjkgTDE3LjMwMDc4MSA1LjYwNTQ2OSBMMTcuNDEwMTU2IDUuNTIzNDM4IEMxNy43OTI5NjkgNS4yMzgyODEgMTcuNzkyOTY5IDQuNzYxNzE5IDE3LjQxMDE1NiA0LjQ3NjU2MiBDMTcuMzA0Njg4IDQuMzk4NDM4IDE3LjI0NjA5NCA0LjM5NDUzMSAxNS43Njk1MzEgNC4zNzUgQzE0LjI4NTE1NiA0LjM1NTQ2OSAxNC4yMzQzNzUgNC4zNTE1NjIgMTQuMDc4MTI1IDQuMjY5NTMxIEMxMy43OTY4NzUgNC4xMjEwOTQgMTMuNjEzMjgxIDMuODY3MTg4IDEzLjQ3MjY1NiAzLjQ0NTMxMiBDMTMuMzAwNzgxIDIuOTI1NzgxIDEzLjE5MTQwNiAyLjcxNDg0NCAxMi45NDE0MDYgMi40NTcwMzEgQzEyLjcwMzEyNSAyLjIwNzAzMSAxMi4zOTA2MjUgMi4wMjM0MzggMTIuMDUwNzgxIDEuOTMzNTk0IEMxMS43MTg3NSAxLjg0NzY1NiA4LjI1MzkwNiAxLjg1MTU2MiA3LjkzMzU5NCAxLjkzNzUgWlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNC4xMjEwOTQgNi40ODgyODEgQzQuMDU4NTk0IDYuNTAzOTA2IDMuOTUzMTI1IDYuNTY2NDA2IDMuODkwNjI1IDYuNjI1IEMzLjY0ODQzOCA2Ljg1MTU2MiAzLjY0ODQzOCA2LjY0MDYyNSAzLjkwNjI1IDEwLjQ5NjA5NCBDNC4xNzk2ODggMTQuNTk3NjU2IDQuMjEwOTM4IDE0LjkyOTY4OCA0LjM1MTU2MiAxNS42MDkzNzUgQzQuNjY0MDYyIDE3LjA5NzY1NiA1LjQ4MDQ2OSAxNy44MjQyMTkgNy4wODk4NDQgMTguMDUwNzgxIEM3LjU0Njg3NSAxOC4xMTMyODEgMTEuNDk2MDk0IDE4LjE0NDUzMSAxMi4zMjQyMTkgMTguMDg5ODQ0IEMxMy43ODEyNSAxNy45OTIxODggMTQuNTI3MzQ0IDE3LjY4NzUgMTUuMDYyNSAxNi45NzY1NjIgQzE1LjM5ODQzOCAxNi41MzUxNTYgMTUuNTcwMzEyIDE2LjA3NDIxOSAxNS42OTkyMTkgMTUuMzA4NTk0IEMxNS44MTY0MDYgMTQuNjEzMjgxIDE1LjgzNTkzOCAxNC4zNzEwOTQgMTYuMDkzNzUgMTAuNSBDMTYuMjY5NTMxIDcuODcxMDk0IDE2LjMxNjQwNiA2Ljk2ODc1IDE2LjI4NTE1NiA2Ljg4NjcxOSBDMTYuMjIyNjU2IDYuNzE4NzUgMTYuMDE1NjI1IDYuNTI3MzQ0IDE1Ljg1MTU2MiA2LjQ4MDQ2OSBDMTUuNTc0MjE5IDYuNDA2MjUgMTUuMjM4MjgxIDYuNTY2NDA2IDE1LjEzMjgxMiA2LjgyMDMxMiBDMTUuMDkzNzUgNi45MTAxNTYgMTUuMDAzOTA2IDguMDM5MDYyIDE0Ljg0Mzc1IDEwLjQ1NzAzMSBDMTQuNTYyNSAxNC42Nzk2ODggMTQuNTE5NTMxIDE1LjExMzI4MSAxNC4zNDc2NTYgMTUuNjQ0NTMxIEMxNC4xODc1IDE2LjE0ODQzOCAxMy44OTQ1MzEgMTYuNDg4MjgxIDEzLjQ5MjE4OCAxNi42NDA2MjUgQzEyLjk1NzAzMSAxNi44Mzk4NDQgMTIuNzEwOTM4IDE2Ljg1NTQ2OSAxMCAxNi44NTU0NjkgQzcuMjg5MDYyIDE2Ljg1NTQ2OSA3LjA0Mjk2OSAxNi44Mzk4NDQgNi41MDc4MTIgMTYuNjQwNjI1IEM2LjEwNTQ2OSAxNi40ODgyODEgNS44MTI1IDE2LjE0ODQzOCA1LjY1MjM0NCAxNS42NDQ1MzEgQzUuNDgwNDY5IDE1LjExMzI4MSA1LjQzNzUgMTQuNjc5Njg4IDUuMTU2MjUgMTAuNDU3MDMxIEM0Ljk5NjA5NCA4LjA1ODU5NCA0LjkwNjI1IDYuOTEwMTU2IDQuODY3MTg4IDYuODI0MjE5IEM0LjgwMDc4MSA2LjY2NDA2MiA0LjY5MTQwNiA2LjU3MDMxMiA0LjUwMzkwNiA2LjUgQzQuMzMyMDMxIDYuNDQxNDA2IDQuMjg1MTU2IDYuNDM3NSA0LjEyMTA5NCA2LjQ4ODI4MSBaXCIgLz5cbiAgICA8L3N2Zz5cbik7XG5cbmNvbnN0IG1ha2VJZCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEFjY2Vzc0NvbmZpZzogQWNjZXNzQ29uZmlnID0ge1xuICAgIGZ1bGxBY2Nlc3NHcm91cHM6IFtdLFxuICAgIGZ1bGxBY2Nlc3NVc2VyczogW10sXG4gICAgcnVsZXM6IFtdLFxuICAgIGZpZWxkSm9pbk9wZXJhdG9yOiBcImFuZFwiLFxufTtcblxuY29uc3QgcXVvdGVWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKC9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodHJpbW1lZCkpIHtcbiAgICAgICAgcmV0dXJuIHRyaW1tZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAnJHt0cmltbWVkLnJlcGxhY2UoLycvZywgXCInJ1wiKX0nYDtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZU9wZXJhdG9yID0gKG9wZXJhdG9yOiBhbnkpOiBSdWxlT3BlcmF0b3IgPT4ge1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJlcXVhbFwiKSByZXR1cm4gXCJlcXVhbFwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJyYW5nZVwiKSByZXR1cm4gXCJyYW5nZVwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIpIHJldHVybiBcImluY2x1ZGVcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwibGlrZVwiKSByZXR1cm4gXCJsaWtlXCI7XG5cbiAgICBpZiAob3BlcmF0b3IgPT09IFwiZXFcIikgcmV0dXJuIFwiZXF1YWxcIjtcbiAgICBpZiAob3BlcmF0b3IgPT09IFwiYmV0d2VlblwiKSByZXR1cm4gXCJyYW5nZVwiO1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCJpblwiKSByZXR1cm4gXCJpbmNsdWRlXCI7XG5cbiAgICByZXR1cm4gXCJlcXVhbFwiO1xufTtcblxuY29uc3QgYnVpbGRSdWxlV2hlcmUgPSAoZmllbGQ6IHN0cmluZywgcnVsZTogQWNjZXNzUnVsZSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCEvXltBLVphLXpfXVtBLVphLXowLTlfLl0qJC8udGVzdChmaWVsZCkpIHJldHVybiBcIjE9MFwiO1xuICAgIGxldCB3aGVyZSA9IFwiMT0wXCI7XG5cbiAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJlcXVhbFwiKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKHJ1bGUudmFsdWUgPz8gXCJcIikudHJpbSgpO1xuICAgICAgICBpZiAodmFsdWUpIHdoZXJlID0gYCR7ZmllbGR9ID0gJHtxdW90ZVZhbHVlKHZhbHVlKX1gO1xuICAgIH1cblxuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IFN0cmluZyhydWxlLmZyb20gPz8gXCJcIikudHJpbSgpO1xuICAgICAgICBjb25zdCB0byA9IFN0cmluZyhydWxlLnRvID8/IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgaWYgKGZyb20gJiYgdG8pIHdoZXJlID0gYCR7ZmllbGR9IEJFVFdFRU4gJHtxdW90ZVZhbHVlKGZyb20pfSBBTkQgJHtxdW90ZVZhbHVlKHRvKX1gO1xuICAgIH1cblxuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImluY2x1ZGVcIikge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSAocnVsZS52YWx1ZXMgPz8gW10pLm1hcChTdHJpbmcpLm1hcCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHdoZXJlID0gYCR7ZmllbGR9IElOICgke3ZhbHVlcy5tYXAocXVvdGVWYWx1ZSkuam9pbihcIiwgXCIpfSlgO1xuICAgIH1cblxuICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImxpa2VcIikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhydWxlLnZhbHVlID8/IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgaWYgKHZhbHVlKSB3aGVyZSA9IGAke2ZpZWxkfSBMSUtFICR7cXVvdGVWYWx1ZSh2YWx1ZSl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZS5pc05vdCAmJiB3aGVyZSAhPT0gXCIxPTBcIiA/IGBOT1QgKCR7d2hlcmV9KWAgOiB3aGVyZTtcbn07XG5cbmNvbnN0IHdyYXBXaGVyZVBhcnQgPSAodmFsdWU6IHN0cmluZywgc2hvdWxkV3JhcDogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHNob3VsZFdyYXAgPyBgKCR7dmFsdWV9KWAgOiB2YWx1ZTtcbn07XG5cbmNvbnN0IGJ1aWxkV2hlcmVGb3JHcm91cCA9IChjb25maWc6IEFjY2Vzc0NvbmZpZywgZ3JvdXBJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBqb2luV29yZCA9IGNvbmZpZy5maWVsZEpvaW5PcGVyYXRvciA9PT0gXCJvclwiID8gXCJPUlwiIDogXCJBTkRcIjtcbiAgICBjb25zdCBmaWVsZFBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uZmlnLnJ1bGVzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVQYXJ0cyA9IGZpZWxkLnJ1bGVzXG4gICAgICAgICAgICAuZmlsdGVyKChydWxlKSA9PiBydWxlLmdyb3Vwcy5pbmNsdWRlcyhncm91cElkKSlcbiAgICAgICAgICAgIC5tYXAoKHJ1bGUpID0+IGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlKSk7XG5cbiAgICAgICAgaWYgKHJ1bGVQYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGZpZWxkUGFydHMucHVzaChydWxlUGFydHNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmaWVsZFBhcnRzLnB1c2goYCgke3J1bGVQYXJ0cy5qb2luKFwiIE9SIFwiKX0pYCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmaWVsZFBhcnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiMT0wXCI7XG5cbiAgICByZXR1cm4gZmllbGRQYXJ0c1xuICAgICAgICAubWFwKChwYXJ0KSA9PiB3cmFwV2hlcmVQYXJ0KHBhcnQsIGZpZWxkUGFydHMubGVuZ3RoID4gMSAmJiAvXFxzT1JcXHMvLnRlc3QocGFydCkpKVxuICAgICAgICAuam9pbihgICR7am9pbldvcmR9IGApO1xufTtcblxuY29uc3QgZ2V0UnVsZUFjY2Vzc0dyb3VwSWRzID0gKGNvbmZpZzogQWNjZXNzQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgICBuZXcgU2V0KFxuICAgICAgICAgICAgY29uZmlnLnJ1bGVzLmZsYXRNYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZsYXRNYXAoKHJ1bGUpID0+IHJ1bGUuZ3JvdXBzKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgKS5zb3J0KCk7XG59O1xuXG5cbmNvbnN0IG5vcm1hbGl6ZUxvYWRlZENvbmZpZyA9IChkYXRhOiBhbnkpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIGNvbnN0IGZpZWxkSm9pbk9wZXJhdG9yOiBBY2Nlc3NGaWVsZEpvaW5PcGVyYXRvciA9XG4gICAgICAgIGRhdGE/LmZpZWxkSm9pbk9wZXJhdG9yID09PSBcIm9yXCIgPyBcIm9yXCIgOiBcImFuZFwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnVsbEFjY2Vzc0dyb3VwczogQXJyYXkuaXNBcnJheShkYXRhPy5mdWxsQWNjZXNzR3JvdXBzKVxuICAgICAgICAgICAgPyBkYXRhLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChpdGVtOiBhbnkpID0+IFN0cmluZyhpdGVtKSlcbiAgICAgICAgICAgIDogW10sXG4gICAgICAgIGZ1bGxBY2Nlc3NVc2VyczogQXJyYXkuaXNBcnJheShkYXRhPy5mdWxsQWNjZXNzVXNlcnMpXG4gICAgICAgICAgICA/IGRhdGEuZnVsbEFjY2Vzc1VzZXJzLm1hcCgoaXRlbTogYW55KSA9PiBTdHJpbmcoaXRlbSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShkYXRhPy5ydWxlcylcbiAgICAgICAgICAgID8gZGF0YS5ydWxlcy5tYXAoKGZpZWxkSXRlbTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiBmaWVsZEl0ZW0uaWQgfHwgbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpZWxkSXRlbS50aXRsZSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEl0ZW0uZmllbGQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShmaWVsZEl0ZW0ucnVsZXMpXG4gICAgICAgICAgICAgICAgICAgID8gZmllbGRJdGVtLnJ1bGVzLm1hcCgocnVsZTogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJ1bGUuaWQgfHwgbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogbm9ybWFsaXplT3BlcmF0b3IocnVsZS5vcGVyYXRvciksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc05vdDogcnVsZS5pc05vdCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBydWxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogcnVsZS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHJ1bGUudG8sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IEFycmF5LmlzQXJyYXkocnVsZS52YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLnZhbHVlcy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IEFycmF5LmlzQXJyYXkocnVsZS5ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBydWxlLmdyb3Vwcy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyczogQXJyYXkuaXNBcnJheShydWxlLnVzZXJzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcnVsZS51c2Vycy5tYXAoKGl0ZW06IGFueSkgPT4gU3RyaW5nKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBmaWVsZEpvaW5PcGVyYXRvcixcbiAgICB9O1xufTtcblxuY29uc3QgY2xvbmVBY2Nlc3NDb25maWcgPSAoZGF0YTogQWNjZXNzQ29uZmlnKTogQWNjZXNzQ29uZmlnID0+IHtcbiAgICByZXR1cm4gbm9ybWFsaXplTG9hZGVkQ29uZmlnKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcbn07XG5cbmNvbnN0IGdldEluaXRpYWxBY2Nlc3NDb25maWcgPSAod2lkZ2V0Q29uZmlnOiBhbnkpOiBBY2Nlc3NDb25maWcgPT4ge1xuICAgIGNvbnN0IHN0b3JlZENvbmZpZyA9IHdpZGdldENvbmZpZz8uYWNjZXNzQ29uZmlnO1xuXG4gICAgaWYgKCFzdG9yZWRDb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lQWNjZXNzQ29uZmlnKGRlZmF1bHRBY2Nlc3NDb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWluQ29uZmlnID1cbiAgICAgICAgdHlwZW9mIHN0b3JlZENvbmZpZy5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBzdG9yZWRDb25maWcuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICAgICAgICAgICAgOiBzdG9yZWRDb25maWc7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplTG9hZGVkQ29uZmlnKHBsYWluQ29uZmlnKTtcbn07XG5cbmNvbnN0IGdldENvbmZpZ0dyb3VwSWRzID0gKGNvbmZpZzogQWNjZXNzQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICAgIGNvbnN0IGdyb3VwSWRzID0gW1xuICAgICAgICAuLi5jb25maWcuZnVsbEFjY2Vzc0dyb3VwcyxcbiAgICAgICAgLi4uY29uZmlnLnJ1bGVzLmZsYXRNYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgZmllbGQucnVsZXMuZmxhdE1hcCgocnVsZSkgPT4gcnVsZS5ncm91cHMpLFxuICAgICAgICApLFxuICAgIF07XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGdyb3VwSWRzKSkuc29ydCgpO1xufTtcblxuY29uc3QgZ2V0Q29uZmlnVXNlcklkcyA9IChjb25maWc6IEFjY2Vzc0NvbmZpZyk6IHN0cmluZ1tdID0+IHtcbiAgICBjb25zdCB1c2VySWRzID0gW1xuICAgICAgICAuLi5jb25maWcuZnVsbEFjY2Vzc1VzZXJzLFxuICAgICAgICAuLi5jb25maWcucnVsZXMuZmxhdE1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICBmaWVsZC5ydWxlcy5mbGF0TWFwKChydWxlKSA9PiBydWxlLnVzZXJzKSxcbiAgICAgICAgKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh1c2VySWRzKSkuc29ydCgpO1xufTtcblxuY29uc3QgZ2V0UG9ydGFsR3JvdXBJbmZvID0gYXN5bmMgKFxuICAgIGVzcmlSZXF1ZXN0OiBFc3JpUmVxdWVzdEZ1bmN0aW9uLFxuICAgIHBvcnRhbFVybDogc3RyaW5nLFxuICAgIGdyb3VwSWQ6IHN0cmluZyxcbik6IFByb21pc2U8UG9ydGFsR3JvdXBJbmZvPiA9PiB7XG4gICAgY29uc3QgZW5jb2RlZEdyb3VwSWQgPSBlbmNvZGVVUklDb21wb25lbnQoZ3JvdXBJZCk7XG4gICAgY29uc3QgZ3JvdXBVcmwgPSBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb21tdW5pdHkvZ3JvdXBzLyR7ZW5jb2RlZEdyb3VwSWR9YDtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdyb3VwUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChncm91cFVybCwge1xuICAgICAgICAgICAgcXVlcnk6IHsgZjogXCJqc29uXCIgfSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChncm91cFJlc3BvbnNlLmRhdGE/LmVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ3JvdXBSZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UgfHwgXCLQk9GA0YPQv9C/0LAg0L3QtdC00L7RgdGC0YPQv9C90LBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXNlcnNDb3VudDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzUmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChgJHtncm91cFVybH0vdXNlckxpc3RgLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZjogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxuICAgICAgICAgICAgICAgICAgICBudW06IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhdXNlcnNSZXNwb25zZS5kYXRhPy5lcnJvciAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB1c2Vyc1Jlc3BvbnNlLmRhdGE/LnRvdGFsID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAqIHVzZXJMaXN0INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIG93bmVyINC+0YLQtNC10LvRjNC90L4g0L7RgiDQvNCw0YHRgdC40LLQsCB1c2Vycy5cbiAgICAgICAgICAgICAgICAgKiDQn9C+0Y3RgtC+0LzRgyDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQu9Cw0LTQtdC70YzRhtCwINC6INC60L7Qu9C40YfQtdGB0YLQstGDINC+0YHRgtCw0LvRjNC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuS5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB1c2Vyc0NvdW50ID0gdXNlcnNSZXNwb25zZS5kYXRhLnRvdGFsO1xuICAgICAgICAgICAgICAgIC8vICsgKHVzZXJzUmVzcG9uc2UuZGF0YS5vd25lcj8udXNlcm5hbWUgPyAxIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdXNlcnNDb3VudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgICAgICB0aXRsZTogZ3JvdXBSZXNwb25zZS5kYXRhPy50aXRsZSB8fCBcItCR0LXQtyDQvdCw0LfQstCw0L3QuNGPXCIsXG4gICAgICAgICAgICB1c2Vyc0NvdW50LFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgICAgICB0aXRsZTogXCLQndCw0LfQstCw0L3QuNC1INC90LXQtNC+0YHRgtGD0L/QvdC+XCIsXG4gICAgICAgICAgICB1c2Vyc0NvdW50OiBudWxsLFxuICAgICAgICAgICAgaXNVbmF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5jb25zdCBnZXRQb3J0YWxVc2VySW5mbyA9IGFzeW5jIChcbiAgICBlc3JpUmVxdWVzdDogRXNyaVJlcXVlc3RGdW5jdGlvbixcbiAgICBwb3J0YWxVcmw6IHN0cmluZyxcbiAgICB1c2VySWQ6IHN0cmluZyxcbik6IFByb21pc2U8UG9ydGFsVXNlckluZm8+ID0+IHtcbiAgICBjb25zdCB0b0luZm8gPSAoZGF0YTogYW55KTogUG9ydGFsVXNlckluZm8gfCBudWxsID0+IHtcbiAgICAgICAgaWYgKCFkYXRhIHx8IGRhdGEuZXJyb3IpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIWRhdGEudXNlcm5hbWUgJiYgIWRhdGEuaWQgJiYgIWRhdGEudXNlcklkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRJZCA9IFN0cmluZyhkYXRhLmlkIHx8IGRhdGEudXNlcklkIHx8IHVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS51c2VybmFtZSA/IFN0cmluZyhkYXRhLnVzZXJuYW1lKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFyZXNvbHZlZElkICYmICF1c2VybmFtZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdXNlcklkLFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBmdWxsTmFtZTogZGF0YS5mdWxsTmFtZSA/IFN0cmluZyhkYXRhLmZ1bGxOYW1lKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGlyZWN0UmVzcG9uc2UgPSBhd2FpdCBlc3JpUmVxdWVzdChcbiAgICAgICAgICAgIGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbW11bml0eS91c2Vycy8ke2VuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpfWAsXG4gICAgICAgICAgICB7IHF1ZXJ5OiB7IGY6IFwianNvblwiIH0sIHJlc3BvbnNlVHlwZTogXCJqc29uXCIgfSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGlyZWN0SW5mbyA9IHRvSW5mbyhkaXJlY3RSZXNwb25zZS5kYXRhKTtcbiAgICAgICAgaWYgKGRpcmVjdEluZm8pIHJldHVybiBkaXJlY3RJbmZvO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3BvbnNlID0gYXdhaXQgZXNyaVJlcXVlc3QoXG4gICAgICAgICAgICBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb21tdW5pdHkvdXNlcnNgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGY6IFwianNvblwiLCBxOiB1c2VySWQsIG51bTogMjAgfSxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IEFycmF5LmlzQXJyYXkoc2VhcmNoUmVzcG9uc2UuZGF0YT8ucmVzdWx0cylcbiAgICAgICAgICAgID8gc2VhcmNoUmVzcG9uc2UuZGF0YS5yZXN1bHRzXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICBjb25zdCBtYXRjaCA9IGNhbmRpZGF0ZXMuZmluZCgoaXRlbTogYW55KSA9PlxuICAgICAgICAgICAgW2l0ZW0/LmlkLCBpdGVtPy51c2VySWQsIGl0ZW0/LnVzZXJuYW1lXVxuICAgICAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiBTdHJpbmcodmFsdWUgfHwgXCJcIikpXG4gICAgICAgICAgICAgICAgLmluY2x1ZGVzKHVzZXJJZCksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlYXJjaEluZm8gPSB0b0luZm8obWF0Y2gpO1xuICAgICAgICBpZiAoc2VhcmNoSW5mbykgcmV0dXJuIHNlYXJjaEluZm87XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8vINCd0LjQttC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRjyDQsdC10LfQvtC/0LDRgdC90LDRjyDQt9Cw0LPQu9GD0YjQutCwLlxuICAgIH1cblxuICAgIHJldHVybiB7IGlkOiB1c2VySWQsIGlzVW5hdmFpbGFibGU6IHRydWUgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjY2Vzc1NldHRpbmdQcm9wcyA9IHtcbiAgICB2YWx1ZT86IEFjY2Vzc0NvbmZpZztcbiAgICBvbkNoYW5nZTogKGNvbmZpZzogQWNjZXNzQ29uZmlnKSA9PiB2b2lkO1xuICAgIGJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjZXNzU2V0dGluZyhwcm9wczogQWNjZXNzU2V0dGluZ1Byb3BzKSB7XG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWNjZXNzQ29uZmlnPigoKSA9PlxuICAgICAgICBub3JtYWxpemVMb2FkZWRDb25maWcocHJvcHMudmFsdWUgPz8gZGVmYXVsdEFjY2Vzc0NvbmZpZyksXG4gICAgKTtcbiAgICBjb25zdCBbc2F2ZWRDb25maWcsIHNldFNhdmVkQ29uZmlnXSA9IFJlYWN0LnVzZVN0YXRlPEFjY2Vzc0NvbmZpZz4oKCkgPT5cbiAgICAgICAgbm9ybWFsaXplTG9hZGVkQ29uZmlnKHByb3BzLnZhbHVlID8/IGRlZmF1bHRBY2Nlc3NDb25maWcpLFxuICAgICk7XG4gICAgY29uc3QgW2hhc1Vuc2F2ZWRDaGFuZ2VzLCBzZXRIYXNVbnNhdmVkQ2hhbmdlc10gPVxuICAgICAgICBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW25vdGljZSwgc2V0Tm90aWNlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IG5vdGljZVRpbWVyID0gUmVhY3QudXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc3Qgc2hvd05vdGljZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKG5vdGljZVRpbWVyLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobm90aWNlVGltZXIuY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXROb3RpY2UobWVzc2FnZSk7XG4gICAgICAgIG5vdGljZVRpbWVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXROb3RpY2UobnVsbCk7XG4gICAgICAgICAgICBub3RpY2VUaW1lci5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSwgMTgwMCk7XG4gICAgfTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobm90aWNlVGltZXIuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobm90aWNlVGltZXIuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2V0RHJhZnRDb25maWcgPSAoXG4gICAgICAgIHVwZGF0ZTogKHByZXZpb3VzOiBBY2Nlc3NDb25maWcpID0+IEFjY2Vzc0NvbmZpZyxcbiAgICApOiB2b2lkID0+IHtcbiAgICAgICAgc2V0Q29uZmlnKChwcmV2aW91cykgPT4gdXBkYXRlKHByZXZpb3VzKSk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgW2dyb3Vwc0luZm8sIHNldEdyb3Vwc0luZm9dID0gUmVhY3QudXNlU3RhdGU8XG4gICAgICAgIFJlY29yZDxzdHJpbmcsIFBvcnRhbEdyb3VwSW5mbz5cbiAgICA+KHt9KTtcbiAgICBjb25zdCBbZ3JvdXBzTG9hZGluZywgc2V0R3JvdXBzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJzSW5mbywgc2V0VXNlcnNJbmZvXSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIFBvcnRhbFVzZXJJbmZvPj4oe30pO1xuICAgIGNvbnN0IFt1c2Vyc0xvYWRpbmcsIHNldFVzZXJzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICBjb25zdCBncm91cElkc1NpZ25hdHVyZSA9IGdldENvbmZpZ0dyb3VwSWRzKGNvbmZpZykuam9pbihcInxcIik7XG4gICAgY29uc3QgdXNlcklkc1NpZ25hdHVyZSA9IGdldENvbmZpZ1VzZXJJZHMoY29uZmlnKS5qb2luKFwifFwiKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGxvYWRHcm91cHNJbmZvID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBJZHMgPSBnZXRDb25maWdHcm91cElkcyhjb25maWcpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0R3JvdXBzSW5mbyh7fSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwb3J0YWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LnBvcnRhbFVybDtcblxuICAgICAgICAgICAgaWYgKCFwb3J0YWxVcmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldEdyb3Vwc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2VzcmlSZXF1ZXN0XSA9IChhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICAgICAgICAgICAgICAgXCJlc3JpL3JlcXVlc3RcIixcbiAgICAgICAgICAgICAgICBdKSkgYXMgW0VzcmlSZXF1ZXN0RnVuY3Rpb25dO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWRzLm1hcCgoZ3JvdXBJZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvcnRhbEdyb3VwSW5mbyhlc3JpUmVxdWVzdCwgcG9ydGFsVXJsLCBncm91cElkKSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWQgPSByZXN1bHQucmVkdWNlPFJlY29yZDxzdHJpbmcsIFBvcnRhbEdyb3VwSW5mbz4+KFxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaXRlbS5pZF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRHcm91cHNJbmZvKG1hcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEdyb3Vwc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2b2lkIGxvYWRHcm91cHNJbmZvKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LCBbZ3JvdXBJZHNTaWduYXR1cmVdKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBpc0NhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGxvYWRVc2Vyc0luZm8gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWRzID0gZ2V0Q29uZmlnVXNlcklkcyhjb25maWcpO1xuICAgICAgICAgICAgaWYgKHVzZXJJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcnNJbmZvKHt9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8ucG9ydGFsVXJsO1xuICAgICAgICAgICAgaWYgKCFwb3J0YWxVcmwpIHJldHVybjtcblxuICAgICAgICAgICAgc2V0VXNlcnNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXNyaVJlcXVlc3RdID0gKGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgICAgICAgICAgICAgICBcImVzcmkvcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgIF0pKSBhcyBbRXNyaVJlcXVlc3RGdW5jdGlvbl07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZHMubWFwKCh1c2VySWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQb3J0YWxVc2VySW5mbyhlc3JpUmVxdWVzdCwgcG9ydGFsVXJsLCB1c2VySWQpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2Vyc0luZm8oXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVkdWNlPFJlY29yZDxzdHJpbmcsIFBvcnRhbFVzZXJJbmZvPj4oKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICghaXNDYW5jZWxsZWQpIHNldFVzZXJzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm9pZCBsb2FkVXNlcnNJbmZvKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpc0NhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgfSwgW3VzZXJJZHNTaWduYXR1cmVdKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgY29uc3QgW2RpYWxvZywgc2V0RGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlPERpYWxvZ1N0YXRlPihudWxsKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFJ1bGVJZHMsIHNldFNlbGVjdGVkUnVsZUlkc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtzZWxlY3RlZEdyb3VwS2V5cywgc2V0U2VsZWN0ZWRHcm91cEtleXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFxuICAgICAgICBbXSxcbiAgICApO1xuXG4gICAgY29uc3QgW2Zvcm1UaXRsZSwgc2V0Rm9ybVRpdGxlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1GaWVsZCwgc2V0Rm9ybUZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1Hcm91cCwgc2V0Rm9ybUdyb3VwXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2Zvcm1Vc2VyLCBzZXRGb3JtVXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgY29uc3QgW3J1bGVPcGVyYXRvciwgc2V0UnVsZU9wZXJhdG9yXSA9IFJlYWN0LnVzZVN0YXRlPFJ1bGVPcGVyYXRvcj4oXCJlcXVhbFwiKTtcbiAgICBjb25zdCBbcnVsZUlzTm90LCBzZXRSdWxlSXNOb3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtydWxlVmFsdWUsIHNldFJ1bGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtydWxlRnJvbSwgc2V0UnVsZUZyb21dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcnVsZVRvLCBzZXRSdWxlVG9dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbcnVsZVZhbHVlcywgc2V0UnVsZVZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAgIGNvbnN0IFtuZXdMaXN0VmFsdWUsIHNldE5ld0xpc3RWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtmaWVsZFNlYXJjaCwgc2V0RmllbGRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZ3JvdXBTZWFyY2gsIHNldEdyb3VwU2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3Nob3dXaGVyZVByZXZpZXcsIHNldFNob3dXaGVyZVByZXZpZXddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWVsZCA9XG4gICAgICAgIHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSURcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiAoY29uZmlnLnJ1bGVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkSWQpID8/IG51bGwpO1xuXG4gICAgY29uc3QgcmVuZGVyR3JvdXBJZGVudGl0eSA9IChncm91cElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcbiAgICAgICAgY29uc3QgZ3JvdXBUaXRsZSA9IGdyb3VwSW5mbz8udGl0bGUgPz9cbiAgICAgICAgICAgIChncm91cHNMb2FkaW5nID8gXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIgOiBcItCd0LDQt9Cy0LDQvdC40LUg0L3QtdC00L7RgdGC0YPQv9C90L5cIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZGVudGl0eVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBJZFRpdGxlTGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cFRpdGxlQWZ0ZXJJZFwiPntncm91cFRpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgY29weUdyb3VwSWQoZ3JvdXBJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXBJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7Z3JvdXBJbmZvPy51c2Vyc0NvdW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSW5mbz8udXNlcnNDb3VudCAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBNZW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lk6IHtncm91cEluZm8udXNlcnNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclVzZXJJZGVudGl0eSA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHVzZXJJbmZvPy5mdWxsTmFtZSB8fCB1c2VySW5mbz8udXNlcm5hbWUgfHxcbiAgICAgICAgICAgICh1c2Vyc0xvYWRpbmcgPyBcItCX0LDQs9GA0YPQt9C60LAuLi5cIiA6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9XCIpO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZSA9IHVzZXJJbmZvPy51c2VybmFtZSAmJiB1c2VySW5mby51c2VybmFtZSAhPT0gdXNlcklkXG4gICAgICAgICAgICA/IGAke3VzZXJJbmZvLnVzZXJuYW1lfSDigJQgYFxuICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwSWRlbnRpdHkgdXNlcklkZW50aXR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cElkVGl0bGVMaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwVGl0bGVBZnRlcklkXCI+e3RpdGxlfSDigJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBJZENvcHlCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQodC60L7Qv9C40YDQvtCy0LDRgtGMIElEINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIGNvcHlHcm91cElkKHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcyhbXSk7XG4gICAgICAgIHNldFNlbGVjdGVkR3JvdXBLZXlzKFtdKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0TGVmdEl0ZW0gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZElkKGlkKTtcbiAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRSdWxlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0UnVsZU9wZXJhdG9yKFwiZXF1YWxcIik7XG4gICAgICAgIHNldFJ1bGVJc05vdChmYWxzZSk7XG4gICAgICAgIHNldFJ1bGVWYWx1ZShcIlwiKTtcbiAgICAgICAgc2V0UnVsZUZyb20oXCJcIik7XG4gICAgICAgIHNldFJ1bGVUbyhcIlwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlcyhbXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UnVsZUZyb21Gb3JtID0gKCk6IEFjY2Vzc1J1bGUgfCBudWxsID0+IHtcbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJlcXVhbFwiKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVWYWx1ZS50cmltKCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogXCJlcXVhbFwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGVWYWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICBpZiAoIXJ1bGVGcm9tLnRyaW0oKSB8fCAhcnVsZVRvLnRyaW0oKSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG1ha2VJZCgpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgaXNOb3Q6IHJ1bGVJc05vdCxcbiAgICAgICAgICAgICAgICBmcm9tOiBydWxlRnJvbS50cmltKCksXG4gICAgICAgICAgICAgICAgdG86IHJ1bGVUby50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGVPcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuVmFsdWVzID0gcnVsZVZhbHVlcy5yZWR1Y2U8c3RyaW5nW10+KChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGl0ZW0udHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmICFyZXN1bHQuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICBpZiAoY2xlYW5WYWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBjbGVhblZhbHVlcyxcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikge1xuICAgICAgICAgICAgaWYgKCFydWxlVmFsdWUudHJpbSgpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbWFrZUlkKCksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IFwibGlrZVwiLFxuICAgICAgICAgICAgICAgIGlzTm90OiBydWxlSXNOb3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJ1bGVWYWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGxSdWxlRm9ybSA9IChydWxlOiBBY2Nlc3NSdWxlKSA9PiB7XG4gICAgICAgIHNldFJ1bGVPcGVyYXRvcihydWxlLm9wZXJhdG9yKTtcbiAgICAgICAgc2V0UnVsZUlzTm90KHJ1bGUuaXNOb3QgPT09IHRydWUpO1xuICAgICAgICBzZXRSdWxlVmFsdWUocnVsZS52YWx1ZSA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZUZyb20ocnVsZS5mcm9tID8/IFwiXCIpO1xuICAgICAgICBzZXRSdWxlVG8ocnVsZS50byA/PyBcIlwiKTtcbiAgICAgICAgc2V0UnVsZVZhbHVlcyhydWxlLnZhbHVlcyA/PyBbXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZEZpZWxkID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtVGl0bGUoXCJcIik7XG4gICAgICAgIHNldEZvcm1GaWVsZChcIlwiKTtcbiAgICAgICAgcmVzZXRSdWxlRm9ybSgpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImFkZEZpZWxkXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0RmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldEZvcm1UaXRsZShzZWxlY3RlZEZpZWxkLnRpdGxlKTtcbiAgICAgICAgc2V0Rm9ybUZpZWxkKHNlbGVjdGVkRmllbGQuZmllbGQpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImVkaXRGaWVsZFwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGZpZWxkSWQ6IHNlbGVjdGVkRmllbGQuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZUZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWZvcm1UaXRsZS50cmltKCkgfHwgIWZvcm1GaWVsZC50cmltKCkpIHJldHVybjtcblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZEZpZWxkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UnVsZSA9IGdldFJ1bGVGcm9tRm9ybSgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdGaWVsZDogQWNjZXNzRmllbGRSdWxlID0ge1xuICAgICAgICAgICAgICAgIGlkOiBtYWtlSWQoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZm9ybVRpdGxlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBmaWVsZDogZm9ybUZpZWxkLnRyaW0oKSxcbiAgICAgICAgICAgICAgICBydWxlczogZmlyc3RSdWxlID8gW2ZpcnN0UnVsZV0gOiBbXSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IFsuLi5wcmV2LnJ1bGVzLCBuZXdGaWVsZF0sXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobmV3RmllbGQuaWQpO1xuICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiZWRpdEZpZWxkXCIpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkID09PSBkaWFsb2cucGF5bG9hZC5maWVsZElkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmb3JtVGl0bGUudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmb3JtRmllbGQudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHJldHVybjtcblxuICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJ1bGVzID0gcHJldi5ydWxlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHNlbGVjdGVkRmllbGQuaWQsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG5leHRSdWxlc1swXT8uaWQgPz8gR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgICAgICAgICByZXNldFNlbGVjdGlvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IG5leHRSdWxlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZFJ1bGUgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0UnVsZUZvcm0oKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJhZGRSdWxlXCIgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0UnVsZSA9IChydWxlOiBBY2Nlc3NSdWxlKSA9PiB7XG4gICAgICAgIGZpbGxSdWxlRm9ybShydWxlKTtcblxuICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgdHlwZTogXCJlZGl0UnVsZVwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHJ1bGVJZDogcnVsZS5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlUnVsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZm9ybVJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICBpZiAoIWZvcm1SdWxlKSB7XG4gICAgICAgICAgICBhbGVydChcItCX0LDQv9C+0LvQvdC4INC30L3QsNGH0LXQvdC40LUg0L/RgNCw0LLQuNC70LBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImFkZFJ1bGVcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBydWxlczogcHJldi5ydWxlcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFsuLi5maWVsZC5ydWxlcywgZm9ybVJ1bGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0UnVsZVwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1SdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHJ1bGUudXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlUnVsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFkaWFsb2c/LnBheWxvYWQ/LnJ1bGVJZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJ1bGUpID0+IHJ1bGUuaWQgIT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoKHByZXYpID0+XG4gICAgICAgICAgICBwcmV2LmZpbHRlcigoaWQpID0+IGlkICE9PSBkaWFsb2cucGF5bG9hZC5ydWxlSWQpLFxuICAgICAgICApO1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVSdWxlU2VsZWN0ID0gKHJ1bGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkUnVsZUlkcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuaW5jbHVkZXMocnVsZUlkKVxuICAgICAgICAgICAgICAgID8gcHJldi5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gcnVsZUlkKVxuICAgICAgICAgICAgICAgIDogWy4uLnByZXYsIHJ1bGVJZF0sXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkUnVsZXMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCBzZWxlY3RlZFJ1bGVJZHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICBmaWVsZC5pZCA9PT0gc2VsZWN0ZWRGaWVsZC5pZFxuICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IGZpZWxkLnJ1bGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocnVsZSkgPT4gIXNlbGVjdGVkUnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZFJ1bGVJZHMoW10pO1xuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cyhbXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VHcm91cEtleSA9IChydWxlSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgJHtydWxlSWR9XyR7aW5kZXh9YDtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZUdsb2JhbEdyb3VwS2V5ID0gKGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYGdsb2JhbF8ke2luZGV4fWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGF1dG9TZWxlY3RlZEdyb3VwS2V5cyA9IHNlbGVjdGVkRmllbGRcbiAgICAgICAgPyBzZWxlY3RlZEZpZWxkLnJ1bGVzLnJlZHVjZTxzdHJpbmdbXT4oKHJlc3VsdCwgcnVsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZFJ1bGVJZHMuaW5jbHVkZXMocnVsZS5pZCkpIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgIHJ1bGUuZ3JvdXBzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwgW10pXG4gICAgICAgIDogW107XG5cbiAgICBjb25zdCBlZmZlY3RpdmVTZWxlY3RlZEdyb3VwS2V5cyA9IEFycmF5LmZyb20oXG4gICAgICAgIG5ldyBTZXQoWy4uLnNlbGVjdGVkR3JvdXBLZXlzLCAuLi5hdXRvU2VsZWN0ZWRHcm91cEtleXNdKSxcbiAgICApO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRHcm91cHNDb3VudCA9XG4gICAgICAgIHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSURcbiAgICAgICAgICAgID8gc2VsZWN0ZWRHcm91cEtleXMubGVuZ3RoXG4gICAgICAgICAgICA6IGVmZmVjdGl2ZVNlbGVjdGVkR3JvdXBLZXlzLmxlbmd0aDtcblxuICAgIGNvbnN0IGZpbHRlcmVkRmllbGRzID0gY29uZmlnLnJ1bGVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBmaWVsZFNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpIHx8XG4gICAgICAgICAgICBpdGVtLmZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ3JvdXBNYXRjaGVzU2VhcmNoID0gKGdyb3VwSWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBncm91cFNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBJbmZvID0gZ3JvdXBzSW5mb1tncm91cElkXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZ3JvdXBJZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkgfHxcbiAgICAgICAgICAgIChncm91cEluZm8/LnRpdGxlID8/IFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB1c2VyTWF0Y2hlc1NlYXJjaCA9ICh1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBncm91cFNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiB0cnVlO1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICByZXR1cm4gW3VzZXJJZCwgdXNlckluZm8/LnVzZXJuYW1lLCB1c2VySW5mbz8uZnVsbE5hbWVdXG4gICAgICAgICAgICAuc29tZSgodmFsdWUpID0+IFN0cmluZyh2YWx1ZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmV2aWV3R3JvdXBMYWJlbCA9IChncm91cElkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCBncm91cEluZm8gPSBncm91cHNJbmZvW2dyb3VwSWRdO1xuICAgICAgICBjb25zdCBncm91cFRpdGxlID0gZ3JvdXBJbmZvPy50aXRsZT8udHJpbSgpO1xuXG4gICAgICAgIGlmICghZ3JvdXBUaXRsZSkgcmV0dXJuIGdyb3VwSWQ7XG5cbiAgICAgICAgcmV0dXJuIGAke2dyb3VwVGl0bGV9ICgke2dyb3VwSWR9KWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByZXZpZXdVc2VyTGFiZWwgPSAodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHVzZXJzSW5mb1t1c2VySWRdO1xuICAgICAgICBjb25zdCBuYW1lID0gdXNlckluZm8/LmZ1bGxOYW1lIHx8IHVzZXJJbmZvPy51c2VybmFtZTtcbiAgICAgICAgcmV0dXJuIG5hbWUgPyBgJHtuYW1lfSAoJHt1c2VySWR9KWAgOiB1c2VySWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ1aWxkQ29uZmlnV2hlcmVQcmV2aWV3ID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bGxBY2Nlc3NMaW5lcyA9IGNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cElkKSA9PiBgICAke2dldFByZXZpZXdHcm91cExhYmVsKGdyb3VwSWQpfTogMT0xYClcbiAgICAgICAgICAgIDogW1wiICDigJRcIl07XG5cbiAgICAgICAgY29uc3QgcnVsZUdyb3VwSWRzID0gZ2V0UnVsZUFjY2Vzc0dyb3VwSWRzKGNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJ1bGVBY2Nlc3NMaW5lcyA9IHJ1bGVHcm91cElkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHJ1bGVHcm91cElkcy5tYXAoKGdyb3VwSWQpID0+IGAgICR7Z2V0UHJldmlld0dyb3VwTGFiZWwoZ3JvdXBJZCl9OiAke2J1aWxkV2hlcmVGb3JHcm91cChjb25maWcsIGdyb3VwSWQpfWApXG4gICAgICAgICAgICA6IFtcIiAg4oCUXCJdO1xuXG4gICAgICAgIGNvbnN0IGZ1bGxVc2VyQWNjZXNzTGluZXMgPSBjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5tYXAoKHVzZXJJZCkgPT5cbiAgICAgICAgICAgICAgICBgICAke2dldFByZXZpZXdVc2VyTGFiZWwodXNlcklkKX06IDE9MWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IFtcIiAg4oCUXCJdO1xuXG4gICAgICAgIGNvbnN0IHJ1bGVVc2VySWRzID0gQXJyYXkuZnJvbShuZXcgU2V0KGNvbmZpZy5ydWxlcy5mbGF0TWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZsYXRNYXAoKHJ1bGUpID0+IHJ1bGUudXNlcnMpLFxuICAgICAgICApKSkuc29ydCgpO1xuICAgICAgICBjb25zdCBydWxlVXNlckFjY2Vzc0xpbmVzID0gcnVsZVVzZXJJZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBydWxlVXNlcklkcy5tYXAoKHVzZXJJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbmZpZy5ydWxlcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS51c2Vycy5pbmNsdWRlcyh1c2VySWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goYCgke2J1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlKX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBgICAke2dldFByZXZpZXdVc2VyTGFiZWwodXNlcklkKX06ICR7cGFydHMuam9pbihcIiBPUiBcIikgfHwgXCIxPTBcIn1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW1wiICDigJRcIl07XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFwiRlVMTCBBQ0NFU1M6XCIsXG4gICAgICAgICAgICAuLi5mdWxsQWNjZXNzTGluZXMsXG4gICAgICAgICAgICBcIlJVTEUgQUNDRVNTOlwiLFxuICAgICAgICAgICAgLi4ucnVsZUFjY2Vzc0xpbmVzLFxuICAgICAgICAgICAgXCJGVUxMIFVTRVIgQUNDRVNTOlwiLFxuICAgICAgICAgICAgLi4uZnVsbFVzZXJBY2Nlc3NMaW5lcyxcbiAgICAgICAgICAgIFwiUlVMRSBVU0VSIEFDQ0VTUzpcIixcbiAgICAgICAgICAgIC4uLnJ1bGVVc2VyQWNjZXNzTGluZXMsXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29weUNvbmZpZ1doZXJlUHJldmlldyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGJ1aWxkQ29uZmlnV2hlcmVQcmV2aWV3KCkpO1xuICAgICAgICAgICAgc2hvd05vdGljZShcIldIRVJFINGB0LrQvtC/0LjRgNC+0LLQsNC9XCIpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQndC1INGD0LTQsNC70L7RgdGMINGB0LrQvtC/0LjRgNC+0LLQsNGC0YwgV0hFUkVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RmllbGRKb2luT3BlcmF0b3IgPSAob3BlcmF0b3I6IEFjY2Vzc0ZpZWxkSm9pbk9wZXJhdG9yKTogdm9pZCA9PiB7XG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZpZWxkSm9pbk9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRSdWxlV2FybmluZ3MgPSAoZmllbGQ6IEFjY2Vzc0ZpZWxkUnVsZSwgcnVsZTogQWNjZXNzUnVsZSk6IHN0cmluZ1tdID0+IHtcbiAgICAgICAgY29uc3Qgd2FybmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaGVyZSA9IGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBydWxlKTtcbiAgICAgICAgY29uc3QgZHVwbGljYXRlcyA9IGZpZWxkLnJ1bGVzLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSBydWxlLmlkICYmIGJ1aWxkUnVsZVdoZXJlKGZpZWxkLmZpZWxkLCBpdGVtKSA9PT0gY3VycmVudFdoZXJlLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApIHdhcm5pbmdzLnB1c2goXCLQlNGD0LHQu9C40YDRg9C10YIg0LTRgNGD0LPQvtC1INC/0YDQsNCy0LjQu9C+XCIpO1xuICAgICAgICBpZiAocnVsZS5ncm91cHMubGVuZ3RoID09PSAwICYmIHJ1bGUudXNlcnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgd2FybmluZ3MucHVzaChcItCd0LXRgiDQs9GA0YPQv9C/INC40LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDQtNC+0YHRgtGD0L/QsFwiKTtcblxuICAgICAgICBpZiAocnVsZS5vcGVyYXRvciA9PT0gXCJlcXVhbFwiICYmICEocnVsZS52YWx1ZSA/PyBcIlwiKS50cmltKCkpIHtcbiAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCLQn9GD0YHRgtC+0LUg0LfQvdCw0YfQtdC90LjQtVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImxpa2VcIiAmJiAhKHJ1bGUudmFsdWUgPz8gXCJcIikudHJpbSgpKSB7XG4gICAgICAgICAgICB3YXJuaW5ncy5wdXNoKFwi0J/Rg9GB0YLQvtC1IExJS0Ug0LfQvdCw0YfQtdC90LjQtVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydWxlLm9wZXJhdG9yID09PSBcImluY2x1ZGVcIiAmJiAocnVsZS52YWx1ZXMgPz8gW10pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgd2FybmluZ3MucHVzaChcIklOINCx0LXQtyDQt9C90LDRh9C10L3QuNC5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bGUub3BlcmF0b3IgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgY29uc3QgZnJvbSA9IE51bWJlcihydWxlLmZyb20pO1xuICAgICAgICAgICAgY29uc3QgdG8gPSBOdW1iZXIocnVsZS50byk7XG5cbiAgICAgICAgICAgIGlmICghKHJ1bGUuZnJvbSA/PyBcIlwiKS50cmltKCkgfHwgIShydWxlLnRvID8/IFwiXCIpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCJSYW5nZSDQt9Cw0L/QvtC70L3QtdC9INC90LUg0L/QvtC70L3QvtGB0YLRjNGOXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghTnVtYmVyLmlzTmFOKGZyb20pICYmICFOdW1iZXIuaXNOYU4odG8pICYmIGZyb20gPiB0bykge1xuICAgICAgICAgICAgICAgIHdhcm5pbmdzLnB1c2goXCJSYW5nZSDQvdC1INCy0YvQv9C+0LvQvdC40YLRgdGPOiDQvtGCINCx0L7Qu9GM0YjQtSDRh9C10Lwg0LTQvlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3YXJuaW5ncztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RmllbGRXYXJuaW5nc0NvdW50ID0gKGZpZWxkOiBBY2Nlc3NGaWVsZFJ1bGUpOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQucnVsZXMucmVkdWNlKFxuICAgICAgICAgICAgKHRvdGFsLCBydWxlKSA9PiB0b3RhbCArIGdldFJ1bGVXYXJuaW5ncyhmaWVsZCwgcnVsZSkubGVuZ3RoLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlR3JvdXBTZWxlY3QgPSAoa2V5OiBzdHJpbmcsIGlzTG9ja2VkID0gZmFsc2UpID0+IHtcbiAgICAgICAgaWYgKGlzTG9ja2VkKSByZXR1cm47XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoKHByZXYpID0+XG4gICAgICAgICAgICBwcmV2LmluY2x1ZGVzKGtleSkgPyBwcmV2LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0ga2V5KSA6IFsuLi5wcmV2LCBrZXldLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVTZWxlY3RlZEdyb3VwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBLZXlzRm9yRGVsZXRlID1cbiAgICAgICAgICAgIHNlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSURcbiAgICAgICAgICAgICAgICA/IHNlbGVjdGVkR3JvdXBLZXlzXG4gICAgICAgICAgICAgICAgOiBlZmZlY3RpdmVTZWxlY3RlZEdyb3VwS2V5cztcblxuICAgICAgICBpZiAoZ3JvdXBLZXlzRm9yRGVsZXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHByZXYuZnVsbEFjY2Vzc0dyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChfLCBpbmRleCkgPT4gIWdyb3VwS2V5c0ZvckRlbGV0ZS5pbmNsdWRlcyhtYWtlR2xvYmFsR3JvdXBLZXkoaW5kZXgpKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRmllbGQpIHtcbiAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgcnVsZXM6IHByZXYucnVsZXMubWFwKChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFncm91cEtleXNGb3JEZWxldGUuaW5jbHVkZXMobWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2VsZWN0ZWRHcm91cEtleXMoW10pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR3JvdXAgPSAocnVsZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybUdyb3VwKFwiXCIpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImFkZEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcnVsZUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5FZGl0R3JvdXAgPSAoXG4gICAgICAgIHJ1bGVJZDogc3RyaW5nLFxuICAgICAgICBncm91cEluZGV4OiBudW1iZXIsXG4gICAgICAgIGdyb3VwVmFsdWU6IHN0cmluZyxcbiAgICApID0+IHtcbiAgICAgICAgc2V0Rm9ybUdyb3VwKGdyb3VwVmFsdWUpO1xuXG4gICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICB0eXBlOiBcImVkaXRHcm91cFwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHJ1bGVJZCxcbiAgICAgICAgICAgICAgICBncm91cEluZGV4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVHcm91cCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkIHx8ICFmb3JtR3JvdXAudHJpbSgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHcm91cFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRSdWxlID0gc2VsZWN0ZWRGaWVsZC5ydWxlcy5maW5kKFxuICAgICAgICAgICAgICAgIChydWxlKSA9PiBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWQsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UnVsZT8uZ3JvdXBzLnNvbWUoKGdyb3VwKSA9PiBncm91cC50cmltKCkgPT09IGZvcm1Hcm91cC50cmltKCkpKSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutCw0Y8g0LPRgNGD0L/Qv9CwINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90LBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBbLi4ucnVsZS5ncm91cHMsIGZvcm1Hcm91cC50cmltKCldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhbG9nPy50eXBlID09PSBcImVkaXRHcm91cFwiKSB7XG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmlkID09PSBzZWxlY3RlZEZpZWxkLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogZmllbGQucnVsZXMubWFwKChydWxlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmlkID09PSBkaWFsb2cucGF5bG9hZC5ydWxlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJ1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBydWxlLmdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybUdyb3VwLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBncm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUdyb3VwID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgIWRpYWxvZz8ucGF5bG9hZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwczogcnVsZS5ncm91cHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfLCBpbmRleCkgPT4gaW5kZXggIT09IGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChrZXkpID0+XG4gICAgICAgICAgICAgICAgICAgIGtleSAhPT1cbiAgICAgICAgICAgICAgICAgICAgbWFrZUdyb3VwS2V5KGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCwgZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCksXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuXG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkFkZEdsb2JhbEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoXCJcIik7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkR2xvYmFsR3JvdXBcIiB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRHbG9iYWxHcm91cCA9IChncm91cEluZGV4OiBudW1iZXIsIGdyb3VwVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRGb3JtR3JvdXAoZ3JvdXBWYWx1ZSk7XG5cbiAgICAgICAgc2V0RGlhbG9nKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWRpdEdsb2JhbEdyb3VwXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlR2xvYmFsR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZm9ybUdyb3VwLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkR2xvYmFsR3JvdXBcIikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLnNvbWUoKGdyb3VwKSA9PiBncm91cC50cmltKCkgPT09IGZvcm1Hcm91cC50cmltKCkpKSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutCw0Y8g0LPRgNGD0L/Qv9CwINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC90LBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXREcmFmdENvbmZpZygocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IFsuLi5wcmV2LmZ1bGxBY2Nlc3NHcm91cHMsIGZvcm1Hcm91cC50cmltKCldLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJlZGl0R2xvYmFsR3JvdXBcIikge1xuICAgICAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBmdWxsQWNjZXNzR3JvdXBzOiBwcmV2LmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cCwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBkaWFsb2cucGF5bG9hZC5ncm91cEluZGV4ID8gZm9ybUdyb3VwLnRyaW0oKSA6IGdyb3VwLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUdsb2JhbEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRpYWxvZz8ucGF5bG9hZCkgcmV0dXJuO1xuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZ1bGxBY2Nlc3NHcm91cHM6IHByZXYuZnVsbEFjY2Vzc0dyb3Vwcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQuZ3JvdXBJbmRleCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzZXRTZWxlY3RlZEdyb3VwS2V5cygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChrZXkpID0+IGtleSAhPT0gbWFrZUdsb2JhbEdyb3VwS2V5KGRpYWxvZy5wYXlsb2FkLmdyb3VwSW5kZXgpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcblxuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5BZGRVc2VyID0gKHJ1bGVJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Vc2VyKFwiXCIpO1xuICAgICAgICBzZXREaWFsb2coeyB0eXBlOiBcImFkZFVzZXJcIiwgcGF5bG9hZDogeyBydWxlSWQgfSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkVkaXRVc2VyID0gKHJ1bGVJZDogc3RyaW5nLCB1c2VySW5kZXg6IG51bWJlciwgdXNlclZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIodXNlclZhbHVlKTtcbiAgICAgICAgc2V0RGlhbG9nKHsgdHlwZTogXCJlZGl0VXNlclwiLCBwYXlsb2FkOiB7IHJ1bGVJZCwgdXNlckluZGV4IH0gfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVVc2VyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQgfHwgIWZvcm1Vc2VyLnRyaW0oKSB8fCAhZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5leHRVc2VyID0gZm9ybVVzZXIudHJpbSgpO1xuXG4gICAgICAgIGlmIChkaWFsb2cudHlwZSA9PT0gXCJhZGRVc2VyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFJ1bGUgPSBzZWxlY3RlZEZpZWxkLnJ1bGVzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHJ1bGUpID0+IHJ1bGUuaWQgPT09IGRpYWxvZy5wYXlsb2FkLnJ1bGVJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0UnVsZT8udXNlcnMuaW5jbHVkZXMobmV4dFVzZXIpKSB7XG4gICAgICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGD0LbQtSDQtNC+0LHQsNCy0LvQtdC9XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiBkaWFsb2cudHlwZSA9PT0gXCJhZGRVc2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsuLi5ydWxlLnVzZXJzLCBuZXh0VXNlcl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJ1bGUudXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRpYWxvZy5wYXlsb2FkLnVzZXJJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXh0VXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBydWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRGaWVsZCB8fCAhZGlhbG9nPy5wYXlsb2FkKSByZXR1cm47XG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIHJ1bGVzOiBwcmV2LnJ1bGVzLm1hcCgoZmllbGQpID0+XG4gICAgICAgICAgICAgICAgZmllbGQuaWQgPT09IHNlbGVjdGVkRmllbGQuaWRcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBmaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5pZCA9PT0gZGlhbG9nLnBheWxvYWQucnVsZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiBydWxlLnVzZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBkaWFsb2cucGF5bG9hZC51c2VySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcnVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBmaWVsZCxcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0RGlhbG9nKG51bGwpO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuQWRkR2xvYmFsVXNlciA9ICgpID0+IHtcbiAgICAgICAgc2V0Rm9ybVVzZXIoXCJcIik7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiYWRkR2xvYmFsVXNlclwiIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcGVuRWRpdEdsb2JhbFVzZXIgPSAodXNlckluZGV4OiBudW1iZXIsIHVzZXJWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1Vc2VyKHVzZXJWYWx1ZSk7XG4gICAgICAgIHNldERpYWxvZyh7IHR5cGU6IFwiZWRpdEdsb2JhbFVzZXJcIiwgcGF5bG9hZDogeyB1c2VySW5kZXggfSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZUdsb2JhbFVzZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRVc2VyID0gZm9ybVVzZXIudHJpbSgpO1xuICAgICAgICBpZiAoIW5leHRVc2VyKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGRpYWxvZz8udHlwZSA9PT0gXCJhZGRHbG9iYWxVc2VyXCIgJiYgY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5pbmNsdWRlcyhuZXh0VXNlcikpIHtcbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCLQotCw0LrQvtC5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRg9C20LUg0LTQvtCx0LDQstC70LXQvVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldERyYWZ0Q29uZmlnKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIGZ1bGxBY2Nlc3NVc2VyczogZGlhbG9nPy50eXBlID09PSBcImFkZEdsb2JhbFVzZXJcIlxuICAgICAgICAgICAgICAgID8gWy4uLnByZXYuZnVsbEFjY2Vzc1VzZXJzLCBuZXh0VXNlcl1cbiAgICAgICAgICAgICAgICA6IHByZXYuZnVsbEFjY2Vzc1VzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBkaWFsb2c/LnBheWxvYWQ/LnVzZXJJbmRleCA/IG5leHRVc2VyIDogdXNlcixcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgICAgIHNldERpYWxvZyhudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlR2xvYmFsVXNlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFkaWFsb2c/LnBheWxvYWQpIHJldHVybjtcbiAgICAgICAgc2V0RHJhZnRDb25maWcoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZnVsbEFjY2Vzc1VzZXJzOiBwcmV2LmZ1bGxBY2Nlc3NVc2Vycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gZGlhbG9nLnBheWxvYWQudXNlckluZGV4LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhc1NhbWVJblZhbHVlID0gKHZhbHVlczogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcsIGlnbm9yZUluZGV4PzogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZXMuc29tZSgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpZ25vcmVJbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ID09PSBpZ25vcmVJbmRleCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbS50cmltKCkgPT09IG5vcm1hbGl6ZWRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFZhbHVlVG9Jbkxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3TGlzdFZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGhhc1NhbWVJblZhbHVlKHJ1bGVWYWx1ZXMsIHZhbHVlKSkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0LUg0LfQvdCw0YfQtdC90LjQtSDRg9C20LUg0LTQvtCx0LDQstC70LXQvdC+XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT4gWy4uLnByZXYsIHZhbHVlXSk7XG4gICAgICAgIHNldE5ld0xpc3RWYWx1ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlVmFsdWVGcm9tSW5MaXN0ID0gKGluZGV4Rm9yUmVtb3ZlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggIT09IGluZGV4Rm9yUmVtb3ZlKSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVmFsdWVJbkxpc3QgPSAoaW5kZXhGb3JVcGRhdGU6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSB2YWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAmJiBoYXNTYW1lSW5WYWx1ZShydWxlVmFsdWVzLCBuZXh0VmFsdWUsIGluZGV4Rm9yVXBkYXRlKSkge1xuICAgICAgICAgICAgc2hvd05vdGljZShcItCi0LDQutC+0LUg0LfQvdCw0YfQtdC90LjQtSDRg9C20LUg0LTQvtCx0LDQstC70LXQvdC+XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0UnVsZVZhbHVlcygocHJldikgPT5cbiAgICAgICAgICAgIHByZXYubWFwKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ID09PSBpbmRleEZvclVwZGF0ZSA/IHZhbHVlIDogaXRlbSkpLFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBkb3dubG9hZEpzb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCA0KV0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLmRvd25sb2FkID0gXCJhY2Nlc3MtY29uZmlnLmpzb25cIjtcbiAgICAgICAgbGluay5jbGljaygpO1xuXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBsb2FkSnNvbiA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdO1xuXG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShTdHJpbmcocmVhZGVyLnJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVMb2FkZWRDb25maWcocGFyc2VkKTtcblxuICAgICAgICAgICAgICAgIHNldERyYWZ0Q29uZmlnKCgpID0+IG5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoR0xPQkFMX0FDQ0VTU19JRCk7XG4gICAgICAgICAgICAgICAgcmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi0J3QtdCy0LXRgNC90LDRjyDRgdGC0YDRg9C60YLRg9GA0LAgSlNPTlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgY29weUdyb3VwSWQgPSBhc3luYyAoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZD8ud3JpdGVUZXh0KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZ3JvdXBJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBvcmFyeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeUlucHV0LnZhbHVlID0gZ3JvdXBJZDtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlJbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlJbnB1dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNob3dOb3RpY2UoXCJJRCDRgdC60L7Qv9C40YDQvtCy0LDQvVwiKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzaG93Tm90aWNlKFwi0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC60L7Qv9C40YDQvtCy0LDRgtGMIElEXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcGx5Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBuZXh0Q29uZmlnID0gY2xvbmVBY2Nlc3NDb25maWcoY29uZmlnKTtcblxuICAgICAgICBwcm9wcy5vbkNoYW5nZShuZXh0Q29uZmlnKTtcbiAgICAgICAgc2V0U2F2ZWRDb25maWcobmV4dENvbmZpZyk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGljZShcItCd0LDRgdGC0YDQvtC50LrQuCDQv9GA0LjQvNC10L3QtdC90YtcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbmNlbENvbmZpZ0NoYW5nZXMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIHNldENvbmZpZyhjbG9uZUFjY2Vzc0NvbmZpZyhzYXZlZENvbmZpZykpO1xuICAgICAgICBzZXRTZWxlY3RlZElkKEdMT0JBTF9BQ0NFU1NfSUQpO1xuICAgICAgICBzZXREaWFsb2cobnVsbCk7XG4gICAgICAgIHJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHNldEhhc1Vuc2F2ZWRDaGFuZ2VzKGZhbHNlKTtcbiAgICAgICAgc2hvd05vdGljZShcItCY0LfQvNC10L3QtdC90LjRjyDQvtGC0LzQtdC90LXQvdGLXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBidWlsZFdoZXJlRm9yQ3VycmVudFVzZXIgPSAoXG4gICAgICAgIHVzZXJHcm91cHM6IHN0cmluZ1tdLFxuICAgICAgICB1c2VySWRzOiBzdHJpbmdbXSA9IFtdLFxuICAgICk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0Z1bGxBY2Nlc3MgPVxuICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMuc29tZSgoZ3JvdXApID0+IHVzZXJHcm91cHMuaW5jbHVkZXMoZ3JvdXApKSB8fFxuICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5zb21lKCh1c2VySWQpID0+IHVzZXJJZHMuaW5jbHVkZXModXNlcklkKSk7XG5cbiAgICAgICAgaWYgKGhhc0Z1bGxBY2Nlc3MpIHJldHVybiBcIjE9MVwiO1xuXG4gICAgICAgIGNvbnN0IGFsbG93ZWRSdWxlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBjb25maWcucnVsZXMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGZpZWxkLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNSdWxlQWNjZXNzID1cbiAgICAgICAgICAgICAgICAgICAgcnVsZS5ncm91cHMuc29tZSgoZ3JvdXApID0+IHVzZXJHcm91cHMuaW5jbHVkZXMoZ3JvdXApKSB8fFxuICAgICAgICAgICAgICAgICAgICBydWxlLnVzZXJzLnNvbWUoKHVzZXJJZCkgPT4gdXNlcklkcy5pbmNsdWRlcyh1c2VySWQpKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNSdWxlQWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRSdWxlcy5wdXNoKGAoJHtidWlsZFJ1bGVXaGVyZShmaWVsZC5maWVsZCwgcnVsZSl9KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWxsb3dlZFJ1bGVzLmxlbmd0aCA+IDAgPyBhbGxvd2VkUnVsZXMuam9pbihcIiBPUiBcIikgOiBcIjE9MFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmV2aWV3RmllbGROYW1lID0gKCk6IHN0cmluZyA9PiB7XG4gICAgICAgIGlmIChkaWFsb2c/LnR5cGUgPT09IFwiYWRkRmllbGRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1GaWVsZC50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRGaWVsZD8uZmllbGQgPz8gXCJcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyUnVsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdGaWVsZE5hbWUgPSBnZXRQcmV2aWV3RmllbGROYW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlTW9kZVJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZXJhdG9yVGFicyBmb3VyVGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlT3BlcmF0b3IoXCJlcXVhbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3J1bGVPcGVyYXRvciA9PT0gXCJyYW5nZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwicmFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtydWxlT3BlcmF0b3IgPT09IFwiaW5jbHVkZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZU9wZXJhdG9yKFwiaW5jbHVkZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmNsdWRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cnVsZU9wZXJhdG9yID09PSBcImxpa2VcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVPcGVyYXRvcihcImxpa2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlrZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5vdFRvZ2dsZUJ1dHRvbiAke3J1bGVJc05vdCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlSXNOb3QoKHZhbHVlKSA9PiAhdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQmNC90LLQtdGA0YLQuNGA0L7QstCw0YLRjCDRg9GB0LvQvtCy0LjQtVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5PVFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsocnVsZU9wZXJhdG9yID09PSBcImVxdWFsXCIgfHwgcnVsZU9wZXJhdG9yID09PSBcImxpa2VcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JfQvdCw0YfQtdC90LjQtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cnVsZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSdWxlVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cnVsZU9wZXJhdG9yID09PSBcInJhbmdlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b0lucHV0R3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RglwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVGcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UnVsZUZyb20oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JTQvlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJ1bGVUbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3J1bGVPcGVyYXRvciA9PT0gXCJpbmNsdWRlXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluTGlzdEFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5BZGRSb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCX0L3QsNGH0LXQvdC40LVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TGlzdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0xpc3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIiBvbkNsaWNrPXthZGRWYWx1ZVRvSW5MaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtydWxlVmFsdWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5TWluaVwiPtCh0L/QuNGB0L7QuiDQv9GD0YHRgjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlVmFsdWVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5WYWx1ZVJvd1wiIGtleT17YCR7dmFsdWV9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQl9C90LDRh9C10L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVWYWx1ZUluTGlzdChpbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVmFsdWVGcm9tSW5MaXN0KGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cHJldmlld0ZpZWxkTmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1doZXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCY0YLQvtCz0L7QstC+0LUg0YPRgdC70L7QstC40LU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFJ1bGUgPSBnZXRSdWxlRnJvbUZvcm0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcFJ1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYnVpbGRSdWxlV2hlcmUocHJldmlld0ZpZWxkTmFtZSwgdGVtcFJ1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3ByZXZpZXdGaWVsZE5hbWV9IC4uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdBcmVhXCI+XG4gICAgICAgICAgICB7bm90aWNlICYmIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ05vdGljZVwiPntub3RpY2V9PC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzQ29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzQ29udHJvbENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2Vzc0NvbnRyb2xUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSA/PyBcItCU0L7RgdGC0YPQvyDQuiDQtNCw0L3QvdGL0LxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2Nlc3NDb250cm9sRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb24gPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLQndCw0YHRgtGA0L7QudGC0LUg0LPRgNGD0L/Qv9GLINC4INGD0YHQu9C+0LLQuNGPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0L7QsdGK0LXQutGC0L7QslwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2Nlc3NTZXR0aW5nc0J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY2Vzc1NldHRpbmdzQnV0dG9uVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5idXR0b25MYWJlbCA/PyBcItCd0LDRgdGC0YDQvtC50LrQsCDQtNC+0YHRgtGD0L/QsFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdEhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbExpc3RUaXRsZVwiPtCf0YDQsNCy0LjQu9CwINC00L7RgdGC0YPQv9CwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsTGlzdFN1YnRpdGxlXCI+SlNPTiBhY2Nlc3MgY29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGVTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQv9C+INC90LDQt9Cy0LDQvdC40Y4g0LjQu9C4INC/0L7Qu9GOXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRGaWVsZFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IEdMT0JBTF9BQ0NFU1NfSUQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0TGVmdEl0ZW0oR0xPQkFMX0FDQ0VTU19JRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbVRpdGxlXCI+0J/QvtC70L3Ri9C5INC00L7RgdGC0YPQvzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvbmRpdGlvblwiPtCj0YHQu9C+0LLQuNC1OiA8Yj4xPTE8L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubGVuZ3RofSDQs9GA0YPQv9C/IMK3IHtjb25maWcuZnVsbEFjY2Vzc1VzZXJzLmxlbmd0aH0g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRGaWVsZHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsSXRlbSAke3NlbGVjdGVkSWQgPT09IGl0ZW0uaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdExlZnRJdGVtKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxJdGVtVGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUluZm8gbW9kYWxJdGVtSW5mb0xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWxJdGVtQ29uZGl0aW9uXCI+0JDRgtGA0LjQsdGD0YI6IDxiPntpdGVtLmZpZWxkfTwvYj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vZGFsSXRlbUNvdW50XCI+e2l0ZW0ucnVsZXMubGVuZ3RofSDQv9GA0LDQstC40Ls8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkV2FybmluZ3NDb3VudChpdGVtKSA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbU1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhcm5pbmdQaWxsXCI+e2dldEZpZWxkV2FybmluZ3NDb3VudChpdGVtKX0gd2FybmluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZEZpZWxkQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZEZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsQm90dG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwianNvbkJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LjRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSnNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqc29uQnV0dG9uXCIgb25DbGljaz17ZG93bmxvYWRKc29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LrQsNGH0LDRgtGMIEpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFJpZ2h0UGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsSXRlbUZ1bGxJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkID09PSBHTE9CQUxfQUNDRVNTX0lEID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0VGl0bGVcIj7Qn9C+0LvQvdGL0Lkg0LTQvtGB0YLRg9C/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0RmllbGRcIj7Qo9GB0LvQvtCy0LjQtTogMT0xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5BZGRHbG9iYWxHcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCT0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5BZGRHbG9iYWxVc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQs9GA0YPQv9C/0Ysg0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0R3JvdXBTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlc0FyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5mdWxsQWNjZXNzR3JvdXBzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsCDQtdGJ0ZEg0L3QtSDQtNC+0LHQsNCy0LvQtdC90YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZ1bGxBY2Nlc3NHcm91cHMubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTWF0Y2hlc1NlYXJjaChncm91cCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdsb2JhbEdyb3VwS2V5KGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyb3VwUm93ICR7c2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlbGVjdGVkR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdENoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZEdyb3VwS2V5cy5pbmNsdWRlcyhncm91cEtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUdyb3VwU2VsZWN0KGdyb3VwS2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJHcm91cElkZW50aXR5KGdyb3VwKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0R2xvYmFsR3JvdXAoaW5kZXgsIGdyb3VwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVHbG9iYWxHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXNzRW50aXR5U2VjdGlvblRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXNBcmVhIHVzZXJzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmZ1bGxBY2Nlc3NVc2Vycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LAg0LXRidGRINC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5mdWxsQWNjZXNzVXNlcnMubWFwKCh1c2VySWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyTWF0Y2hlc1NlYXJjaCh1c2VySWQpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwUm93IHVzZXJSb3dcIiBrZXk9e2Ake3VzZXJJZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJVc2VySWRlbnRpdHkodXNlcklkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5pSWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0R2xvYmFsVXNlcihpbmRleCwgdXNlcklkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b24gZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR2xvYmFsVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogeyB1c2VySW5kZXg6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAhc2VsZWN0ZWRGaWVsZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlSdWxlc1wiPkVtcHR5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRUaXRsZVwiPntzZWxlY3RlZEZpZWxkLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodEZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JDRgtGA0LjQsdGD0YI6IHtzZWxlY3RlZEZpZWxkLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRIZWFkZXJBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb25CdXR0b25cIiBvbkNsaWNrPXtvcGVuRWRpdEZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvbiBkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyh7IHR5cGU6IFwiZGVsZXRlRmllbGRcIiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXBTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQuiDQs9GA0YPQv9C/0Ysg0LjQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQstC90YPRgtGA0Lgg0L/RgNCw0LLQuNC7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VwU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRHcm91cFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzQXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWVsZC5ydWxlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5UnVsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LDQstC40LvQsCDQtdGJ0ZEg0L3QtSDQtNC+0LHQsNCy0LvQtdC90YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZC5ydWxlcy5tYXAoKHJ1bGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJ1bGVDYXJkICR7c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRSdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cnVsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRSdWxlSWRzLmluY2x1ZGVzKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVSdWxlU2VsZWN0KHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZUxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YHQu9C+0LLQuNC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YG9wZXJhdG9yUGlsbCBvcGVyYXRvci0ke3J1bGUub3BlcmF0b3J9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5pc05vdCA/IGBOT1QgJHtydWxlLm9wZXJhdG9yfWAgOiBydWxlLm9wZXJhdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlVmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1aWxkUnVsZVdoZXJlKHNlbGVjdGVkRmllbGQuZmllbGQsIHJ1bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRSdWxlV2FybmluZ3Moc2VsZWN0ZWRGaWVsZCwgcnVsZSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZVdhcm5pbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0UnVsZVdhcm5pbmdzKHNlbGVjdGVkRmllbGQsIHJ1bGUpLm1hcCgod2FybmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17d2FybmluZ30+e3dhcm5pbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuQWRkR3JvdXAocnVsZS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArINCz0YDRg9C/0L/QsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5BZGRVc2VyKHJ1bGUuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0UnVsZShydWxlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlUnVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS5ncm91cHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlNaW5pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/RiyDQvdC1INC00L7QsdCw0LLQu9C10L3Ri1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmdyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTWF0Y2hlc1NlYXJjaChncm91cCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gbWFrZUdyb3VwS2V5KHJ1bGUuaWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cExvY2tlZCA9IHNlbGVjdGVkUnVsZUlkcy5pbmNsdWRlcyhydWxlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNHcm91cFNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWQgfHwgc2VsZWN0ZWRHcm91cEtleXMuaW5jbHVkZXMoZ3JvdXBLZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXBSb3cgJHtpc0dyb3VwU2VsZWN0ZWQgPyBcInNlbGVjdGVkR3JvdXBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAke2lzR3JvdXBMb2NrZWQgPyBcImxvY2tlZEdyb3VwXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtncm91cH1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RDaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzR3JvdXBTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzR3JvdXBMb2NrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBMb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JPRgNGD0L/Qv9CwINCy0YvQsdGA0LDQvdCwINCy0LzQtdGB0YLQtSDRgSDQv9GA0LDQstC40LvQvtC8XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXBTZWxlY3QoZ3JvdXBLZXksIGlzR3JvdXBMb2NrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckdyb3VwSWRlbnRpdHkoZ3JvdXApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRWRpdEdyb3VwKHJ1bGUuaWQsIGluZGV4LCBncm91cClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzQXJlYSBydWxlVXNlcnNBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cnVsZS51c2Vycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eU1pbmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC90LUg0LTQvtCx0LDQstC70LXQvdGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUudXNlcnMubWFwKCh1c2VySWQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlck1hdGNoZXNTZWFyY2godXNlcklkKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwUm93IHVzZXJSb3dcIiBrZXk9e2Ake3VzZXJJZH1fJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVXNlcklkZW50aXR5KHVzZXJJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluaUljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkVkaXRVc2VyKHJ1bGUuaWQsIGluZGV4LCB1c2VySWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbmlJY29uQnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlVXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZUlkOiBydWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRSdWxlQnV0dG9uXCIgb25DbGljaz17b3BlbkFkZFJ1bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINC/0YDQsNCy0LjQu9C+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbFNldHRpbmdBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tQWNjZXNzUGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VsZWN0aW9uQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkICE9PSBHTE9CQUxfQUNDRVNTX0lEICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTZWxlY3RlZFJ1bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkUnVsZUlkcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMIHtzZWxlY3RlZFJ1bGVJZHMubGVuZ3RofSDQv9GA0LDQstC40LtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uU21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlU2VsZWN0ZWRHcm91cHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZEdyb3Vwc0NvdW50ID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywge3NlbGVjdGVkR3JvdXBzQ291bnR9INCz0YDRg9C/0L9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNhdmVTdGF0ZSAke2hhc1Vuc2F2ZWRDaGFuZ2VzID8gXCJjaGFuZ2VkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1Vuc2F2ZWRDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQldGB0YLRjCDQvdC10YHQvtGF0YDQsNC90ZHQvdC90YvQtSDQuNC30LzQtdC90LXQvdC40Y9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0JjQt9C80LXQvdC10L3QuNC5INC90LXRglwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2hlcmVUb2dnbGVCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dXaGVyZVByZXZpZXcoKHZhbHVlKSA9PiAhdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93V2hlcmVQcmV2aWV3ID8gXCLQodC60YDRi9GC0YwgV0hFUkVcIiA6IFwi0J/QvtC60LDQt9Cw0YLRjCBXSEVSRVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93V2hlcmVQcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tV2hlcmVQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21XaGVyZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QmNGC0L7Qs9C+0LLRi9C5IFdIRVJFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjb3B5Q29uZmlnV2hlcmVQcmV2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LrQvtC/0LjRgNC+0LLQsNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57YnVpbGRDb25maWdXaGVyZVByZXZpZXcoKX08L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvYmFsU2V0dGluZ0J1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYW5jZWxDb25maWdCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbENvbmZpZ0NoYW5nZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNVbnNhdmVkQ2hhbmdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGC0LzQtdC90LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGx5Q29uZmlnQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthcHBseUNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1Vuc2F2ZWRDaGFuZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNC80LXQvdC40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtkaWFsb2cgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRGaWVsZFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDRgdGC0L7Qu9Cx0LXRhlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINGB0YLQvtC70LHQtdGGXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1UaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7Qu9C1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1GaWVsZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25hbFJ1bGVCbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uYWxSdWxlVGl0bGVcIj7Qn9C10YDQstC+0LUg0L/RgNCw0LLQuNC70L48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUnVsZUZvcm0oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlRmllbGR9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUZpZWxkXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+0KPQtNCw0LvQuNGC0Ywg0YHRgtC+0LvQsdC10YY/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YHQtSDQv9GA0LDQstC40LvQsCDQstC90YPRgtGA0Lgg0L3QtdCz0L4g0YLQvtC20LUg0LHRg9C00YPRgiDRg9C00LDQu9C10L3Riy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlRmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIiB8fCBkaWFsb2cudHlwZSA9PT0gXCJlZGl0UnVsZVwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZFJ1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/RgNCw0LLQuNC70L5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC/0YDQsNCy0LjQu9C+XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUnVsZUZvcm0oKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZVJ1bGV9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZVJ1bGVcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj7Qo9C00LDQu9C40YLRjCDQv9GA0LDQstC40LvQvj88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9GLINC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQuCDQstC90YPRgtGA0Lgg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsCDRgtC+0LbQtSDQsdGD0LTRg9GCINGD0LTQsNC70LXQvdGLLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVSdWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRHcm91cFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0R3JvdXBcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJhZGRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0LPRgNGD0L/Qv9GDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0LPRgNGD0L/Qv9GDXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlhbG9nSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQk9GA0YPQv9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Hcm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybUdyb3VwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZUdyb3VwfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHcm91cFwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/Rgz88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPRgNGD0L/Qv9CwINCx0YPQtNC10YIg0YPQtNCw0LvQtdC90LAg0YLQvtC70YzQutC+INC40Lcg0Y3RgtC+0LPQviDQv9GA0LDQstC40LvQsC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCIgb25DbGljaz17ZGVsZXRlR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGRpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHbG9iYWxHcm91cFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZEdsb2JhbEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi0JTQvtCx0LDQstC40YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDQs9GA0YPQv9C/0YMg0L/QvtC70L3QvtCz0L4g0LTQvtGB0YLRg9C/0LBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCT0YDRg9C/0L/QsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtR3JvdXAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlR2xvYmFsR3JvdXB9PtCh0L7RhdGA0LDQvdC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImRlbGV0ZUdsb2JhbEdyb3VwXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINCz0YDRg9C/0L/RgyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0K3RgtCwINCz0YDRg9C/0L/QsCDQsdC+0LvRjNGI0LUg0L3QtSDQsdGD0LTQtdGCINC/0L7Qu9GD0YfQsNGC0Ywg0LTQvtGB0YLRg9C/INC60L4g0LLRgdC10Lwg0LTQsNC90L3Ri9C8LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFuZ2VyQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZUdsb2JhbEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZGlhbG9nLnR5cGUgPT09IFwiYWRkVXNlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cudHlwZSA9PT0gXCJlZGl0VXNlclwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpYWxvZy50eXBlID09PSBcImFkZFVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLQlNC+0LHQsNCy0LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaWFsb2dJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklEINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70LggdXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1Vc2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtVXNlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREaWFsb2cobnVsbCl9PtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlVXNlcn0+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiZGVsZXRlVXNlclwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dUaXRsZVwiPtCj0LTQsNC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjz88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0YPQtNC10YIg0YPQtNCw0LvRkdC9INGC0L7Qu9GM0LrQviDQuNC3INGN0YLQvtCz0L4g0L/RgNCw0LLQuNC70LAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVVc2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkaWFsb2cudHlwZSA9PT0gXCJhZGRHbG9iYWxVc2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy50eXBlID09PSBcImVkaXRHbG9iYWxVc2VyXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlhbG9nLnR5cGUgPT09IFwiYWRkR2xvYmFsVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcItCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L7Qu9C90L7Qs9C+INC00L7RgdGC0YPQv9CwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpYWxvZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSUQg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC40LvQuCB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1Vc2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERpYWxvZyhudWxsKX0+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVHbG9iYWxVc2VyfT7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWFsb2cudHlwZSA9PT0gXCJkZWxldGVHbG9iYWxVc2VyXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQv9C+0LvQvdC+0LPQviDQtNC+0YHRgtGD0L/QsD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0L7Qu9GM0YjQtSDQvdC1INCx0YPQtNC10YIg0L/QvtC70YPRh9Cw0YLRjCDQtNC+0YHRgtGD0L8g0LrQviDQstGB0LXQvCDQtNCw0L3QvdGL0LwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGlhbG9nKG51bGwpfT7QntGC0LzQtdC90LA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYW5nZXJCdXR0b25cIiBvbkNsaWNrPXtkZWxldGVHbG9iYWxVc2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcbmltcG9ydCBBY2Nlc3NTZXR0aW5nLCB7XG4gICAgZGVmYXVsdEFjY2Vzc0NvbmZpZyxcbiAgICB0eXBlIEFjY2Vzc0NvbmZpZyxcbn0gZnJvbSBcIi4vQWNjZXNzU2V0dGluZy9BY2Nlc3NTZXR0aW5nXCI7XG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBcIi4vc2V0dGluZy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZyhwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xuICAgIGNvbnN0IGFjY2Vzc0NvbmZpZyA9IHByb3BzLmNvbmZpZz8uYWNjZXNzQ29uZmlnO1xuXG4gICAgY29uc3QgYWNjZXNzVmFsdWU6IEFjY2Vzc0NvbmZpZyA9IGFjY2Vzc0NvbmZpZ1xuICAgICAgICA/IHR5cGVvZiAoYWNjZXNzQ29uZmlnIGFzIGFueSkuYXNNdXRhYmxlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gKGFjY2Vzc0NvbmZpZyBhcyBhbnkpLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICAgICAgICAgIDogKGFjY2Vzc0NvbmZpZyBhcyB1bmtub3duIGFzIEFjY2Vzc0NvbmZpZylcbiAgICAgICAgOiBkZWZhdWx0QWNjZXNzQ29uZmlnO1xuXG4gICAgY29uc3QgaGFuZGxlQWNjZXNzQ2hhbmdlID0gKG5leHRBY2Nlc3NDb25maWc6IEFjY2Vzc0NvbmZpZyk6IHZvaWQgPT4ge1xuICAgICAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KFwiYWNjZXNzQ29uZmlnXCIsIG5leHRBY2Nlc3NDb25maWcpLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wLXBvcnRhbC1zZXR0aW5nXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gYWNjZXNzLXNldHRpbmctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxBY2Nlc3NTZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2Nlc3NWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFjY2Vzc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQndCw0YHRgtGA0L7QudC60Lgg0LTQvtGB0YLRg9C/0LBcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItCd0LDRgdGC0YDQvtC50YLQtSDQv9C+0LvQvdGL0Lkg0Lgg0L7Qs9GA0LDQvdC40YfQtdC90L3Ri9C5INC00L7RgdGC0YPQvyDQtNC70Y8g0LPRgNGD0L/QvyDQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSBQb3J0YWwuXCJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uTGFiZWw9XCLQntGC0LrRgNGL0YLRjCDQvdCw0YHRgtGA0L7QudC60Lgg0LTQvtGB0YLRg9C/0LBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9