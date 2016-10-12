define(['exports', './Toast.soy', 'metal-soy/src/Soy', 'metal-alert/src/Alert', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _Toast, _Soy, _Alert2, _JQueryAdapter) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Toast2 = _interopRequireDefault(_Toast);

	var _Soy2 = _interopRequireDefault(_Soy);

	var _Alert3 = _interopRequireDefault(_Alert2);

	var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

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

	var Toast = function (_Alert) {
		_inherits(Toast, _Alert);

		function Toast() {
			_classCallCheck(this, Toast);

			return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
		}

		return Toast;
	}(_Alert3.default);

	Toast.STATE = {
		/**
   * Overrides `metal-alert` default values.
   */
		animClasses: {
			value: {
				show: 'animated slideInBottom',
				hide: 'animated slideOutBottom'
			}
		},

		visible: {
			value: true
		},

		/**
   * Spinner indicating.
   * @type {boolean}
   * @default false
   */
		spinner: {
			value: true
		},

		/**
   * The CSS classes that should be added to the spinner.
   * @type {string}
   */
		spinnerClasses: {},

		/**
   * Spinner is marked as done.
   * @type {boolean}
   * @default false
   */
		spinnerDone: {
			value: false
		}
	};

	_Soy2.default.register(Toast, _Toast2.default);

	exports.default = Toast;
	_JQueryAdapter2.default.register('toast', Toast);
});
//# sourceMappingURL=Toast.js.map