import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveAccount() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        identification: this.get('identification'),
        password: this.get('password')
      };
      this.set('firstName', '');
      this.set('lastName', '');
      this.set('identification', '');
      this.set('password', '');
      this.sendAction('saveAccount', params);
    }
  }
});
