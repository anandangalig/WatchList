import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    routeToCreateAccount() {
      this.transitionTo('create-account');
    }
  }
});