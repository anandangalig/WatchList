import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model() {
    return this.store.findAll('user');
  },
  actions: {
    routeToCreateAccount() {
      this.transitionTo('create-account');
    },

    authenticate() {
      var user = {
        identification: this.get('identification'),
        password: this.get('password')
      };
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
        this.transitionTo('saved-list', params);
      });
    }
  }
});
