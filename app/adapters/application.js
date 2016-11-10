import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authManager: Ember.inject.service(),
  // headers: Ember.computed('authManager.accessToken', function() {
  //   return {
  //     "Authorization": `Bearer ${this.get("authManager.accessToken")}`
  //   };
  // })

});
export default FirebaseAdapter.extend({
});
