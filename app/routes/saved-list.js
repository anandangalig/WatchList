import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  authManager: Ember.inject.service('session'),
  watchList: Ember.inject.service(),
  model() {
    return this.store.findAll('product');
  }
});
