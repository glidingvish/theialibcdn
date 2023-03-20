"use strict";
(self["webpackChunkbrowser_app"] = self["webpackChunkbrowser_app"] || []).push([["glider-theia-extension_lib_browser_glider-theia-extension-frontend-module_js"],{

/***/ "../glider-theia-extension/lib/browser/config-data.js":
/*!************************************************************!*\
  !*** ../glider-theia-extension/lib/browser/config-data.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigData = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
let ConfigData = class ConfigData {
    async initialize() {
        console.log(">>>> collecting data frombackend");
        let editorSettings = await (await fetch("/editorSettings")).json();
        console.log(">>>> data", editorSettings);
        this.data = editorSettings;
    }
    constructor() {
        this.initialize();
    }
};
ConfigData = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ConfigData);
exports.ConfigData = ConfigData;


/***/ }),

/***/ "../glider-theia-extension/lib/browser/custom-about-dialogue.js":
/*!**********************************************************************!*\
  !*** ../glider-theia-extension/lib/browser/custom-about-dialogue.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomizedAboutDialogue = void 0;
const about_dialog_1 = __webpack_require__(/*! @theia/core/lib/browser/about-dialog */ "../node_modules/@theia/core/lib/browser/about-dialog.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
let CustomizedAboutDialogue = class CustomizedAboutDialogue extends about_dialog_1.AboutDialog {
    renderExtensions() {
        return React.createElement(React.Fragment, null,
            React.createElement("h3", null, "Modified extensions list"));
    }
};
CustomizedAboutDialogue = __decorate([
    (0, inversify_1.injectable)()
], CustomizedAboutDialogue);
exports.CustomizedAboutDialogue = CustomizedAboutDialogue;


/***/ }),

/***/ "../glider-theia-extension/lib/browser/glider-theia-extension-contribution.js":
/*!************************************************************************************!*\
  !*** ../glider-theia-extension/lib/browser/glider-theia-extension-contribution.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoSCMFilterContribution = exports.NoDebugFilterContribution = exports.GliderTheiaExtensionFrontendApplicationContribution = exports.GliderRunWidgetContribution = exports.GliderRunWidgetCommand = exports.ReadOnlyLabelProviderContribution = exports.GliderTheiaExtensionMenuContribution = exports.GliderTheiaExtensionCommandContribution = exports.GliderTheiaExtensionCommand = void 0;
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
const frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "../node_modules/@theia/core/lib/browser/frontend-application-state.js");
const terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "../node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
const terminal_frontend_contribution_1 = __webpack_require__(/*! @theia/terminal/lib/browser/terminal-frontend-contribution */ "../node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
const mini_browser_open_handler_1 = __webpack_require__(/*! @theia/mini-browser/lib/browser/mini-browser-open-handler */ "../node_modules/@theia/mini-browser/lib/browser/mini-browser-open-handler.js");
const browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
const window_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/window-contribution */ "../node_modules/@theia/core/lib/browser/window-contribution.js");
const workspace_commands_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-commands */ "../node_modules/@theia/workspace/lib/browser/workspace-commands.js");
const filesystem_frontend_contribution_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-frontend-contribution */ "../node_modules/@theia/filesystem/lib/browser/filesystem-frontend-contribution.js");
const file_tree_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-tree/file-tree */ "../node_modules/@theia/filesystem/lib/browser/file-tree/file-tree.js");
const file_tree_label_provider_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-tree/file-tree-label-provider */ "../node_modules/@theia/filesystem/lib/browser/file-tree/file-tree-label-provider.js");
const run_widget_1 = __webpack_require__(/*! ./run-widget */ "../glider-theia-extension/lib/browser/run-widget.js");
const config_data_1 = __webpack_require__(/*! ./config-data */ "../glider-theia-extension/lib/browser/config-data.js");
__webpack_require__(/*! react */ "../node_modules/react/index.js");
exports.GliderTheiaExtensionCommand = {
    id: 'GliderTheiaExtension.command',
    label: 'Say Hello'
};
let GliderTheiaExtensionCommandContribution = class GliderTheiaExtensionCommandContribution {
    constructor(messageService, terminalService, configData) {
        this.messageService = messageService;
        this.terminalService = terminalService;
        this.configData = configData;
    }
    registerCommands(registry) {
        registry.registerCommand(exports.GliderTheiaExtensionCommand, {
            execute: async () => {
                var _a;
                this.messageService.info('Hello from Glider!');
                let editorSettings = this.configData.data;
                console.log(">>>> config data is:", editorSettings);
                if (editorSettings.projects[0].terminal) {
                    let terminalInstance;
                    if (this.terminalService.lastUsedTerminal) {
                        terminalInstance = this.terminalService.lastUsedTerminal;
                    }
                    else {
                        terminalInstance = await this.terminalService.newTerminal({ title: "Glider WebIDE" });
                    }
                    await terminalInstance.start();
                    this.terminalService.open(terminalInstance);
                    terminalInstance.sendText(`${((_a = this.configData.data.projects.at(0)) === null || _a === void 0 ? void 0 : _a.shellCommand) || 'echo Welcome to Glider!'}\n`);
                }
                // Open the Application URL (if any present) in the Mini Browser
                let applicationUrl = getApplicationUrl(editorSettings);
                if (applicationUrl) {
                    registry.executeCommand(mini_browser_open_handler_1.MiniBrowserCommands.OPEN_URL.id, applicationUrl);
                }
            }
        });
    }
};
GliderTheiaExtensionCommandContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(common_1.MessageService)),
    __param(1, (0, inversify_1.inject)(terminal_service_1.TerminalService)),
    __param(2, (0, inversify_1.inject)(config_data_1.ConfigData)),
    __metadata("design:paramtypes", [common_1.MessageService, Object, config_data_1.ConfigData])
], GliderTheiaExtensionCommandContribution);
exports.GliderTheiaExtensionCommandContribution = GliderTheiaExtensionCommandContribution;
let GliderTheiaExtensionMenuContribution = class GliderTheiaExtensionMenuContribution {
    registerMenus(menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.GliderTheiaExtensionCommand.id,
            label: exports.GliderTheiaExtensionCommand.label
        });
        // file menu related unregisters
        menus.unregisterMenuAction(window_contribution_1.WindowCommands.NEW_WINDOW);
        menus.unregisterMenuAction(workspace_commands_1.WorkspaceCommands.CLOSE);
        menus.unregisterMenuAction("2_workspace");
        menus.unregisterMenuAction(browser_1.CommonMenus.FILE_OPEN[2]);
        menus.unregisterMenuAction(browser_1.CommonMenus.FILE_CLOSE[2]);
        menus.unregisterMenuAction(filesystem_frontend_contribution_1.FileSystemCommands.UPLOAD);
        // terminal related unregisters..
        if (!this.configData.data.projects[0].terminal) {
            menus.unregisterMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS[1]);
        }
        menus.unregisterMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS[2]);
        menus.unregisterMenuAction(terminal_frontend_contribution_1.TerminalCommands.PROFILE_NEW);
        menus.unregisterMenuAction(terminal_frontend_contribution_1.TerminalCommands.PROFILE_DEFAULT);
    }
};
__decorate([
    (0, inversify_1.inject)(config_data_1.ConfigData),
    __metadata("design:type", config_data_1.ConfigData)
], GliderTheiaExtensionMenuContribution.prototype, "configData", void 0);
GliderTheiaExtensionMenuContribution = __decorate([
    (0, inversify_1.injectable)()
], GliderTheiaExtensionMenuContribution);
exports.GliderTheiaExtensionMenuContribution = GliderTheiaExtensionMenuContribution;
let ReadOnlyLabelProviderContribution = class ReadOnlyLabelProviderContribution extends file_tree_label_provider_1.FileTreeLabelProvider {
    canHandle(element) {
        if (file_tree_1.FileStatNode.is(element)) {
            let uri = element.uri;
            // console.log("uripath", uri.path);
            if (uri.path.name.includes("package")) {
                return super.canHandle(element) + 1;
            }
        }
        return 0;
    }
    getIcon() {
        return 'fa fa-star-o';
    }
    getName(fileStatNode) {
        return super.getName(fileStatNode) + ' (ReadOnly File)';
    }
};
ReadOnlyLabelProviderContribution = __decorate([
    (0, inversify_1.injectable)()
], ReadOnlyLabelProviderContribution);
exports.ReadOnlyLabelProviderContribution = ReadOnlyLabelProviderContribution;
exports.GliderRunWidgetCommand = { id: 'GliderRunWidget:command' };
let GliderRunWidgetContribution = class GliderRunWidgetContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: run_widget_1.GliderRunWidget.ID,
            widgetName: run_widget_1.GliderRunWidget.LABEL,
            defaultWidgetOptions: { area: 'left' },
            toggleCommandId: exports.GliderRunWidgetCommand.id
        });
    }
    registerCommands(commands) {
        commands.registerCommand(exports.GliderRunWidgetCommand, {
            execute: () => super.openView({ activate: true, reveal: true })
        });
    }
};
GliderRunWidgetContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], GliderRunWidgetContribution);
exports.GliderRunWidgetContribution = GliderRunWidgetContribution;
let GliderTheiaExtensionFrontendApplicationContribution = class GliderTheiaExtensionFrontendApplicationContribution {
    async initializeLayout() {
    }
    async configure(app) {
    }
    async onStart(app) {
        this.stateService.reachedState('ready').then(async () => {
            await this.runWidgetContrib.openView({ reveal: true });
            await this.navigatorContribution.openView({ reveal: true });
            this.commandService.executeCommand(exports.GliderTheiaExtensionCommand.id);
            // const roots = await this.workspaceService.roots;
            // const roots = await this.workspaceService.tryGetRoots();
            // let root = roots[0];
            let hiddenFiles = {};
            this.configData.data.projects[0].hiddenFiles.forEach(f => {
                return hiddenFiles[f] = true;
            });
            console.log(">>>> hiddenfiles", hiddenFiles);
            await this.preferenceService.set("files.exclude", hiddenFiles);
            let files = this.configData.data.active;
            files.forEach(file => {
                const uri = new common_1.URI(file.path);
                (0, browser_1.open)(this.openerService, uri);
            });
        });
    }
};
__decorate([
    (0, inversify_1.inject)(common_1.CommandService),
    __metadata("design:type", Object)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "commandService", void 0);
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(navigator_contribution_1.FileNavigatorContribution),
    __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "navigatorContribution", void 0);
__decorate([
    (0, inversify_1.inject)(browser_2.WorkspaceService),
    __metadata("design:type", browser_2.WorkspaceService)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.OpenerService),
    __metadata("design:type", Object)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "openerService", void 0);
__decorate([
    (0, inversify_1.inject)(GliderRunWidgetContribution),
    __metadata("design:type", GliderRunWidgetContribution)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "runWidgetContrib", void 0);
__decorate([
    (0, inversify_1.inject)(config_data_1.ConfigData),
    __metadata("design:type", config_data_1.ConfigData)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "configData", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.PreferenceService),
    __metadata("design:type", Object)
], GliderTheiaExtensionFrontendApplicationContribution.prototype, "preferenceService", void 0);
GliderTheiaExtensionFrontendApplicationContribution = __decorate([
    (0, inversify_1.injectable)()
], GliderTheiaExtensionFrontendApplicationContribution);
exports.GliderTheiaExtensionFrontendApplicationContribution = GliderTheiaExtensionFrontendApplicationContribution;
let NoDebugFilterContribution = class NoDebugFilterContribution {
    registerContributionFilters(registry) {
        registry.addFilters('*', [
            // Filter out the main debug contribution at: https://github.com/eclipse-theia/theia/blob/master/packages/debug/src/browser/debug-frontend-application-contribution.ts.
            filterClassName(name => name !== 'DebugFrontendApplicationContribution')
        ]);
    }
};
NoDebugFilterContribution = __decorate([
    (0, inversify_1.injectable)()
], NoDebugFilterContribution);
exports.NoDebugFilterContribution = NoDebugFilterContribution;
function filterClassName(filter) {
    console.log("pawan .... filterClassName :", filter);
    return object => {
        const className = object.constructor.name;
        return className
            ? filter(className)
            : false;
    };
}
let NoSCMFilterContribution = class NoSCMFilterContribution {
    registerContributionFilters(registry) {
        registry.addFilters('*', [
            // Filter out the main debug contribution at: https://github.com/eclipse-theia/theia/blob/master/packages/debug/src/browser/debug-frontend-application-contribution.ts.
            filterClassName(name => name !== 'ScmContribution')
        ]);
    }
};
NoSCMFilterContribution = __decorate([
    (0, inversify_1.injectable)()
], NoSCMFilterContribution);
exports.NoSCMFilterContribution = NoSCMFilterContribution;
function getApplicationUrl(editorSettings) {
    var _a;
    let applicationEditorSettings = (_a = editorSettings === null || editorSettings === void 0 ? void 0 : editorSettings.projects) === null || _a === void 0 ? void 0 : _a[0];
    let applicationUrl = (applicationEditorSettings === null || applicationEditorSettings === void 0 ? void 0 : applicationEditorSettings.browser_url) || "";
    if (applicationUrl.trim().startsWith("//")) {
        applicationUrl = applicationUrl.slice(2);
    }
    let applicationUrlSuffix = (applicationEditorSettings === null || applicationEditorSettings === void 0 ? void 0 : applicationEditorSettings.browserUrlSuffix) || "";
    applicationUrl = applicationUrlSuffix ? (applicationUrl + "" + applicationUrlSuffix) : applicationUrl;
    return applicationUrl || "";
}


/***/ }),

/***/ "../glider-theia-extension/lib/browser/glider-theia-extension-frontend-module.js":
/*!***************************************************************************************!*\
  !*** ../glider-theia-extension/lib/browser/glider-theia-extension-frontend-module.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Generated using theia-extension-generator
 */
const glider_theia_extension_contribution_1 = __webpack_require__(/*! ./glider-theia-extension-contribution */ "../glider-theia-extension/lib/browser/glider-theia-extension-contribution.js");
const common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const about_dialog_1 = __webpack_require__(/*! @theia/core/lib/browser/about-dialog */ "../node_modules/@theia/core/lib/browser/about-dialog.js");
const custom_about_dialogue_1 = __webpack_require__(/*! ./custom-about-dialogue */ "../glider-theia-extension/lib/browser/custom-about-dialogue.js");
const run_widget_1 = __webpack_require__(/*! ./run-widget */ "../glider-theia-extension/lib/browser/run-widget.js");
const config_data_1 = __webpack_require__(/*! ./config-data */ "../glider-theia-extension/lib/browser/config-data.js");
exports["default"] = new inversify_1.ContainerModule((bind, unbind, isBound, rebind) => {
    bind(config_data_1.ConfigData).toSelf().inSingletonScope();
    // add your contribution bindings here
    bind(browser_1.LabelProviderContribution).to(glider_theia_extension_contribution_1.ReadOnlyLabelProviderContribution);
    bind(common_1.CommandContribution).to(glider_theia_extension_contribution_1.GliderTheiaExtensionCommandContribution);
    bind(common_1.MenuContribution).to(glider_theia_extension_contribution_1.GliderTheiaExtensionMenuContribution);
    bind(browser_1.FrontendApplicationContribution).to(glider_theia_extension_contribution_1.GliderTheiaExtensionFrontendApplicationContribution);
    bind(common_1.FilterContribution).to(glider_theia_extension_contribution_1.NoDebugFilterContribution);
    bind(common_1.FilterContribution).to(glider_theia_extension_contribution_1.NoSCMFilterContribution);
    rebind(about_dialog_1.AboutDialog).to(custom_about_dialogue_1.CustomizedAboutDialogue);
    bind(run_widget_1.GliderRunWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: run_widget_1.GliderRunWidget.ID,
        createWidget: () => ctx.container.get(run_widget_1.GliderRunWidget)
    })).inSingletonScope();
    (0, browser_1.bindViewContribution)(bind, glider_theia_extension_contribution_1.GliderRunWidgetContribution);
});


/***/ }),

/***/ "../glider-theia-extension/lib/browser/run-widget.js":
/*!***********************************************************!*\
  !*** ../glider-theia-extension/lib/browser/run-widget.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GliderRunWidget_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GliderRunWidget = void 0;
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const inversify_1 = __webpack_require__(/*! @theia/core/shared/inversify */ "../node_modules/@theia/core/shared/inversify/index.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const config_data_1 = __webpack_require__(/*! ./config-data */ "../glider-theia-extension/lib/browser/config-data.js");
const glider_theia_extension_contribution_1 = __webpack_require__(/*! ./glider-theia-extension-contribution */ "../glider-theia-extension/lib/browser/glider-theia-extension-contribution.js");
let GliderRunWidget = GliderRunWidget_1 = class GliderRunWidget extends browser_1.ReactWidget {
    async init() {
        this.id = GliderRunWidget_1.ID;
        this.title.label = GliderRunWidget_1.LABEL;
        this.title.caption = GliderRunWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-regular fa-play'; // example widget icon.
        this.update();
    }
    render() {
        var _b, _c, _d, _e;
        return React.createElement("div", { id: 'widget-container' },
            React.createElement("button", { style: { marginTop: "5px" }, className: 'theia-button primary', title: 'Run code', onClick: _a => this.runCommand() },
                " ",
                React.createElement("i", { className: "fa fa-regular fa-play" }),
                " ", (_e = (_d = (_c = (_b = this.configData.data) === null || _b === void 0 ? void 0 : _b.projects) === null || _c === void 0 ? void 0 : _c.at(0)) === null || _d === void 0 ? void 0 : _d.runLabel) !== null && _e !== void 0 ? _e : "Run code"),
            React.createElement("button", { style: { marginTop: "5px" }, className: 'theia-button primary', title: 'Full screen', onClick: _a => this.fullScreen() },
                " ",
                React.createElement("i", { className: "fa-regular fa-maximize" }),
                " Full Screen"));
    }
    runCommand() {
        this.messageService.info('Congratulations: Running your code');
        this.commandService.executeCommand(glider_theia_extension_contribution_1.GliderTheiaExtensionCommand.id);
    }
    fullScreen() {
        const bodyElement = document.getElementsByTagName("body")[0];
        bodyElement.requestFullscreen();
    }
};
GliderRunWidget.ID = 'GliderRun:widget';
GliderRunWidget.LABEL = 'Glider Run';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GliderRunWidget.prototype, "init", null);
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], GliderRunWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.inject)(core_1.CommandService),
    __metadata("design:type", Object)
], GliderRunWidget.prototype, "commandService", void 0);
__decorate([
    (0, inversify_1.inject)(config_data_1.ConfigData),
    __metadata("design:type", config_data_1.ConfigData)
], GliderRunWidget.prototype, "configData", void 0);
GliderRunWidget = GliderRunWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], GliderRunWidget);
exports.GliderRunWidget = GliderRunWidget;


/***/ })

}]);
//# sourceMappingURL=glider-theia-extension_lib_browser_glider-theia-extension-frontend-module_js.js.map