import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model() {
    return this.store.findAll('user');
  },
  actions: {
    createAccount() {
      
    }
  }
});