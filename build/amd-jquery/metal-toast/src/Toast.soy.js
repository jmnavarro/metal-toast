define(['exports', 'metal-component/src/all/component', 'metal-soy/src/Soy'], function (exports, _component, _Soy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.templates = exports.Toast = undefined;

  var _component2 = _interopRequireDefault(_component);

  var _Soy2 = _interopRequireDefault(_Soy);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var templates;
  goog.loadModule(function (exports) {

    // This file was automatically generated from Toast.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Toast.
     * @public
     */

    goog.module('Toast.incrementaldom');

    /** @suppress {extraRequire} */
    var soy = goog.require('soy');
    /** @suppress {extraRequire} */
    var soydata = goog.require('soydata');
    /** @suppress {extraRequire} */
    goog.require('goog.asserts');
    /** @suppress {extraRequire} */
    goog.require('soy.asserts');
    /** @suppress {extraRequire} */
    goog.require('goog.i18n.bidi');
    /** @suppress {extraRequire} */
    goog.require('goog.string');
    var IncrementalDom = goog.require('incrementaldom');
    var ie_open = IncrementalDom.elementOpen;
    var ie_close = IncrementalDom.elementClose;
    var ie_void = IncrementalDom.elementVoid;
    var ie_open_start = IncrementalDom.elementOpenStart;
    var ie_open_end = IncrementalDom.elementOpenEnd;
    var itext = IncrementalDom.text;
    var iattr = IncrementalDom.attr;

    /**
     * @param {{
     *    dismissible: (?),
     *    spinner: (?),
     *    spinnerDone: (?),
     *    elementClasses: (?),
     *    spinnerClasses: (?),
     *    body: (?soydata.SanitizedHtml|string|undefined)
     * }} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $render(opt_data, opt_ignored, opt_ijData) {
      soy.asserts.assertType(opt_data.body == null || opt_data.body instanceof Function || opt_data.body instanceof soydata.UnsanitizedText || goog.isString(opt_data.body), 'body', opt_data.body, '?soydata.SanitizedHtml|string|undefined');
      var body = /** @type {?soydata.SanitizedHtml|string|undefined} */opt_data.body;
      ie_open('div', null, null, 'class', 'alert' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''), 'role', 'alert');
      if (opt_data.spinner) {
        ie_void('span', null, null, 'class', 'spinner' + (opt_data.spinnerClasses ? ' ' + opt_data.spinnerClasses : '') + (opt_data.spinnerDone ? ' spinner-done' : ''));
      }
      if (body) {
        ie_open('span', null, null, 'class', 'alert-body');
        body();
        ie_close('span');
      }
      if (opt_data.dismissible) {
        ie_open('button', null, null, 'type', 'button', 'class', 'close', 'aria-label', 'Close', 'data-onclick', 'toggle');
        ie_open('span', null, null, 'aria-hidden', 'true');
        itext('\xD7');
        ie_close('span');
        ie_close('button');
      }
      ie_close('div');
    }
    exports.render = $render;
    if (goog.DEBUG) {
      $render.soyTemplateName = 'Toast.render';
    }

    exports.render.params = ["body", "dismissible", "spinner", "spinnerDone", "elementClasses", "spinnerClasses"];
    exports.render.types = { "body": "html", "dismissible": "any", "spinner": "any", "spinnerDone": "any", "elementClasses": "any", "spinnerClasses": "any" };
    exports.templates = templates = exports;
    return exports;
  });

  var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast() {
      _classCallCheck(this, Toast);

      return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
    }

    return Toast;
  }(_component2.default);

  _Soy2.default.register(Toast, templates);
  exports.Toast = Toast;
  exports.templates = templates;
  exports.default = templates;
});
//# sourceMappingURL=Toast.soy.js.map