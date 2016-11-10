import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('session'),
  actions: {
    authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');
      this.get('authManager').authenticate(identification, password).then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    //   var credentials = this.getProperties('identification', 'password'),
    //     authenticator = 'authenticator:token';
    //   this.get('session').authenticate(authenticator, credentials);
    },
    routeToCreateAccount() {
      this.transitionTo('create-account');
    }
  }
});
