import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin);
export default Ember.Route.extend({
  watchList: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('user', params.user_id);
  }
});
