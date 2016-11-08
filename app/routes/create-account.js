import Ember from 'ember';

export default Ember.Route.extend({
  model() {

  },
  actions: {
    saveAccount(params) {
      var newAccount = this.store.createRecord('user', params);
      newAccount.save();
      this.transitionTo('login');
    },
    routeToLogin() {
      this.transitionTo('login');
    }
  }
});
