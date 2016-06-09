'use strict';

import templates from './Toast.soy';
import Soy from 'metal-soy';
import Alert from 'metal-alert';

class Toast extends Alert {}

Toast.STATE = {
	/**
	 * Spinner indicating.
	 * @type {boolean}
	 * @default false
	 */
	spinner: {
		value: false
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
