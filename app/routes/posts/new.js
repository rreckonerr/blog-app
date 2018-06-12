import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('post');
  },

  actions: {

    savePost(newPost) {
      newPost.save().then(() => this.transitionTo('posts'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});