'use strict';

import templates from './Toast.soy.js';
import Soy from 'metal-soy';
import Alert from 'metal-alert';

class Toast extends Alert {}

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
	spinnerClasses: {
	},

	/**
	 * Spinner is marked as done.
	 * @type {boolean}
	 * @default false
	 */
	spinnerDone: {
		value: false
	}
};

Soy.register(Toast, templates);

export default Toast;
