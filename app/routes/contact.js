// import { task } from 'ember-concurrency';
import Route from '@ember/routing/route';

export default Route.extend({

	model() {
		return this.store.createRecord('contact');
	},

	// responseMessage: false,

	// sendMessage: task(function* () {
	// 	yield this.get('model').save();
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
