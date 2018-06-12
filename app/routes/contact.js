// import { task } from 'ember-concurrency';
import Route from '@ember/routing/route';

export default Route.extend({

	model() {
		return this.store.createRecord('contact');
	},

	// sendMessage: task(function* (newContactMessage) {
	// 	yield newContactMessage.save();
	// 	this.controller.set('responseMessage', true);
	// }),

	



	actions: {

	sendMessage(newContactMessage) {
		newContactMessage.save().then(() => this.controller.set('responseMessage', true));
	},

	willTransition() {
		let model = this.controller.get('model');

		if (model.get('isNew')) {
			model.destroyRecord();
		}

		this.controller.set('responseMessage', false);
		}
	}
});
