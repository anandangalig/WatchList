import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);
// export default Ember.Route.extend({
  // session: Ember.inject.service('session')
  // actions: {
  //   error: function() {
  //     this.transitionTo('/login');
  //     return false;
  //   }
  // }
// });
