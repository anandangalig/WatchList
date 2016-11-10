// import Ember from 'ember';
import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({

  store: Ember.inject.service(),

  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      const promise = this.get('store').queryRecord('user', {})
      return DS.PromiseObject.create({ promise: promise })
    }
  })

});



//
// export default Ember.Service.extend({
//
//   accessToken: null,
//
//   authenticate(identification, password) {
//     return Ember.$.ajax({
//       method: "POST",
//       url: "/token",
//       data: { identification: identification, password: password }
//     }).then((result) => {
//       this.set('accessToken', result.access_token);
//     });
//   },
//
//   invalidate() {
//     this.set('accessToken', null);
//   },
//
//   isAuthenticated: Ember.computed.bool('accessToken')
//
// });
