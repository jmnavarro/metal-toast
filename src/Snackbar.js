'use strict';

import templates from './Snackbar.soy';
import Soy from 'metal-soy';
import Alert from 'metal-alert';

class Snackbar extends Alert {}

Snackbar.STATE = {
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

Soy.register(Snackbar, templates);

export default Snackbar;
