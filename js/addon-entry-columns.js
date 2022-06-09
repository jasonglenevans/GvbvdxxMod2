(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-columns"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/columns/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/columns/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"blocks_blocks_\"] .blocklyToolboxDiv {\r\n  width: 310px;\r\n  height: auto !important;\r\n}\r\n\r\n.scratchCategoryMenu {\r\n  width: 100%;\r\n  columns: 2;\r\n  column-gap: 0.5rem;\r\n  padding: 0.25rem;\r\n}\r\n\r\n.scratchCategorySecondMenu {\r\n  columns: 1;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  padding-bottom: 2.25rem;\r\n}\r\n\r\n.scratchCategorySecondMenu:empty {\r\n  padding-top: 0;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.scratchCategoryMenuItem {\r\n  display: inline-flex; /* inline so that it isn't split between both columns */\r\n  width: 100%;\r\n  padding: 0.25rem;\r\n  border-radius: 0.875rem;\r\n}\r\n\r\n.scratchCategoryItemBubble,\r\n.scratchCategoryItemIcon {\r\n  margin: 0;\r\n  margin-inline-end: 0.5rem;\r\n}\r\n\r\n.scratchCategoryMenuItemLabel {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n[class*=\"gui_extension-button-container_\"] {\r\n  top: var(--sa-add-extension-button-y);\r\n  bottom: auto;\r\n  margin-inline-start: 0.5rem;\r\n  width: calc(308px - 1rem);\r\n  height: calc(1.75rem - 2px);\r\n  background-color: transparent;\r\n  border-color: var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n[class*=\"gui_extension-button-container_\"]:hover {\r\n  background-color: var(--ui-tertiary, white);\r\n}\r\n\r\n[class*=\"gui_extension-button-container_\"]::before {\r\n  display: none;\r\n}\r\n\r\n[class*=\"gui_extension-button_\"] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-inline: 0;\r\n}\r\n\r\n[class*=\"gui_extension-button-icon_\"] {\r\n  filter: var(--editorDarkMode-categoryMenu-invertedFilter, brightness(0.4));\r\n}\r\n\r\n[class*=\"gui_extension-button-container_\"]:hover [class*=\"gui_extension-button-icon_\"] {\r\n  filter: var(--editorDarkMode-accent-invertedFilter, brightness(0.4));\r\n}\r\n[theme=\"dark\"] [class*=\"gui_extension-button-icon_\"] {\r\n  filter: none !important;\r\n}\r\n\r\n.sa-add-extension-label {\r\n  color: var(--text-primary, #575e75);\r\n  font-size: 0.65rem;\r\n}\r\n\r\n[class*=\"gui_extension-button-container_\"]:hover .sa-add-extension-label {\r\n  color: var(--text-primary, #575e75);\r\n  font-size: 0.65rem;\r\n}\r\n\r\n/* hide-flyout compatibility */\r\n\r\n.blocklyFlyout.sa-flyoutClose {\r\n  transform: translate(-320px, var(--sa-flyout-y)) !important;\r\n}\r\n\r\n.blocklyFlyoutScrollbar.sa-flyoutClose {\r\n  transform: translate(-25px, calc(var(--sa-flyout-y) + 2.5px)) !important;\r\n}\r\n\r\n.sa-lock-image.sa-flyoutClose {\r\n  transform: translateX(-320px);\r\n}\r\n\r\n.sa-flyout-placeHolder {\r\n  left: 0;\r\n  top: calc(var(--sa-flyout-y) + 44px);\r\n  width: 311px;\r\n}\r\n\r\n.sa-lock-image {\r\n  top: calc(var(--sa-flyout-y) + 46px);\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/columns/_runtime_entry.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/columns/_runtime_entry.js ***!
  \*****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/columns/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/columns/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/columns/userscript.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/columns/userscript.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    global,
    console
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly(); // https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/toolbox.js#L235

  const _ToolboxPosition = Blockly.Toolbox.prototype.position;

  Blockly.Toolbox.prototype.position = function () {
    _ToolboxPosition.call(this); // Update flyout position when category menu height changes.


    if (this.HtmlDiv && !this.HtmlDiv._observer) {
      this.HtmlDiv._observer = new ResizeObserver(() => {
        this.flyout_.position();
      });

      this.HtmlDiv._observer.observe(this.HtmlDiv);
    }
  }; // https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/flyout_vertical.js#L314


  const _VerticalFlyoutPosition = Blockly.VerticalFlyout.prototype.position;

  Blockly.VerticalFlyout.prototype.position = function () {
    _VerticalFlyoutPosition.call(this);

    if (addon.self.disabled || !this.isVisible()) {
      return;
    }

    var targetWorkspaceMetrics = this.targetWorkspace_.getMetrics();

    if (!targetWorkspaceMetrics) {
      // Hidden components will return null.
      return;
    } // In RTL, subtract the total width of left and right workspace borders and the category menu border
    // from the workspace width.


    var x = this.toolboxPosition_ === Blockly.TOOLBOX_AT_RIGHT ? targetWorkspaceMetrics.viewWidth - 3 : 0;
    var y = this.parentToolbox_.HtmlDiv.offsetHeight; // Addon sets the width of the flyout to the width of the toolbox.

    this.width_ = this.parentToolbox_.getWidth();
    this.height_ = Math.max(0, targetWorkspaceMetrics.viewHeight - y);
    this.setBackgroundPath_(this.width_, this.height_);
    this.svgGroup_.setAttribute("width", this.width_);
    this.svgGroup_.setAttribute("height", this.height_);
    var transform = "translate(" + x + "px," + y + "px)";
    Blockly.utils.setCssTransform(this.svgGroup_, transform); // Update the scrollbar (if one exists).

    if (this.scrollbar_) {
      // Set the scrollbars origin to be the top left of the flyout.
      this.scrollbar_.setOrigin(x + (this.toolboxPosition_ === Blockly.TOOLBOX_AT_RIGHT ? 0 : this.width_ - this.getWidth()), y);
      this.scrollbar_.resize();
    } // Set CSS variables for the userstyle.


    const container = this.svgGroup_.closest("[class*='gui_tab-panel_']");
    container.style.setProperty("--sa-add-extension-button-y", "".concat(y - 33, "px"));
    container.parentElement.style.setProperty("--sa-flyout-y", "".concat(y, "px"));
  }; // https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/flyout_base.js#L370


  const _VerticalFlyoutGetWidth = Blockly.VerticalFlyout.prototype.getWidth;

  Blockly.VerticalFlyout.prototype.getWidth = function () {
    // In RTL, this will be called by Blockly to position blocks inside the flyout.
    let width = _VerticalFlyoutGetWidth.call(this);

    if (!addon.self.disabled) width += 60;
    return width;
  }; // https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/toolbox.js#L595


  const _CategoryMenuCreateDom = Blockly.Toolbox.CategoryMenu.prototype.createDom;

  Blockly.Toolbox.CategoryMenu.prototype.createDom = function () {
    _CategoryMenuCreateDom.call(this);

    if (addon.self.disabled) return;
    this.secondTable = document.createElement("div");
    this.secondTable.className = "scratchCategorySecondMenu " + (this.parent_.horizontalLayout_ ? "scratchCategoryMenuHorizontal" : "scratchCategoryMenu");
    this.parentHtml_.appendChild(this.secondTable);
  }; // https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/toolbox.js#L606


  const _CategoryMenuPopulate = Blockly.Toolbox.CategoryMenu.prototype.populate;

  Blockly.Toolbox.CategoryMenu.prototype.populate = function (domTree) {
    if (!domTree) return;
    const Categories = ["motion", "looks", "sound", "events", "control", "sensing", "operators", "variables", "lists", "myBlocks"];
    const extensionsNodes = [];
    const extensionTree = domTree.cloneNode(true);

    if (!addon.self.disabled) {
      extensionTree.childNodes.forEach(child => {
        if (child.tagName === "category" && !Categories.includes(child.id)) {
          extensionsNodes.push(child.cloneNode(true));
          child.remove();
        }
      });
    }

    _CategoryMenuPopulate.call(this, extensionTree);

    for (const child of extensionsNodes) {
      const row = document.createElement("div");
      row.className = "scratchCategoryMenuRow";
      this.secondTable.appendChild(row);

      if (child) {
        this.categories_.push(new Blockly.Toolbox.Category(this, row, child));
      }
    }

    if (!addon.self.disabled) {
      this.height_ = this.table.offsetHeight + this.secondTable.offsetHeight;
    }
  }; // https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/toolbox.js#L639


  const _CategoryMenuDispose = Blockly.Toolbox.CategoryMenu.prototype.dispose;

  Blockly.Toolbox.CategoryMenu.prototype.dispose = function () {
    _CategoryMenuDispose.call(this);

    if (this.secondTable) {
      this.secondTable.remove();
      this.secondTable = null;
    }
  };

  function updateToolbox() {
    const workspace = Blockly.getMainWorkspace();
    const toolbox = workspace.getToolbox();
    if (!toolbox) return;
    const categoryMenu = toolbox.categoryMenu_;
    if (!categoryMenu) return; // Scratch may have already updated the toolbox for us, so no need to update it again.

    if (categoryMenu.secondTable && !addon.self.disabled) return; // Must dispose and createDom the category menu so we can run our polluted commands.

    categoryMenu.dispose();
    categoryMenu.createDom(); // Repopulate the category menu since we've just disposed it.

    toolbox.populate_(workspace.options.languageTree); // Reposition the toolbox, since it's likely our addon moved it.

    toolbox.position();
  }

  updateToolbox();
  addon.self.addEventListener("disabled", updateToolbox);
  addon.self.addEventListener("reenabled", updateToolbox);

  while (true) {
    const addExtensionButton = await addon.tab.waitForElement("[class*='gui_extension-button_']", {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
      condition: () => !addon.tab.redux.state.scratchGui.mode.isPlayerOnly
    });
    const addExtensionLabel = Object.assign(document.createElement("span"), {
      className: "sa-add-extension-label",
      innerText: addon.tab.scratchMessage("gui.gui.addExtension")
    });
    addon.tab.displayNoneWhileDisabled(addExtensionLabel);
    addExtensionButton.appendChild(addExtensionLabel);
    addExtensionButton.removeAttribute("title");
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-columns.js.map