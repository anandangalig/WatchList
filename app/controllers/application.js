//inject the service for authentication that can be called up in the template by querrying the isAuthenticated property
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  //use the invalidateSession action call to invalidate the session and log the user out
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
