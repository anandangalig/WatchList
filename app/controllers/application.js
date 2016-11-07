//inject the service for authentication that can be called up in the template by querrying the isAuthenticated property
import Ember from 'ember';

//inject the service to automatically map the session events to the sessionAuthenticated and sessionInvalidated methods, sessionAuthenticated transitions to a configurable route, sessionInvalidated automatically reloads the page to clear sensitive data from memory
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin);

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  //use the invalidateSession action call to invalidate the session and log the user out
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
