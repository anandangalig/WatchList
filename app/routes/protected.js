//make a route in the application accessible only when the session is authenticated, all other subroutes will transition to the login route if the session is not autheticated
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin);
