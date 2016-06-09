'use strict';

import dom from 'metal-dom';
import Snackbar from '../src/Snackbar';

describe('Snackbar', function() {
	it('should update spinner as done', function(done) {
		var component = new Snackbar({
			spinner: true,
			spinnerDone: false
		});

		assert.ok(!dom.hasClass(component.element.querySelector('.alert-spinner'), 'alert-spinner-done'));

		component.once('stateChanged', () => {
			assert.ok(dom.hasClass(component.element.querySelector('.alert-spinner'), 'alert-spinner-done'));

			component.once('stateChanged', () => {
				assert.ok(!dom.hasClass(component.element.querySelector('.alert-spinner'), 'alert-spinner-done'));
				done();
			});

			component.spinnerDone = false;
		});

		component.spinnerDone = true;
	});
});
