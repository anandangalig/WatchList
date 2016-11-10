import Ember from 'ember';
//inject the service to automatically map the session events to the sessionAuthenticated and sessionInvalidated methods, sessionAuthenticated transitions to a configurable route, sessionInvalidated automatically reloads the page to clear sensitive data from memory
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin);
export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
