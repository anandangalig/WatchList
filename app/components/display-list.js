import Ember from 'ember';

export default Ember.Component.extend({
  watchList: Ember.inject.service(),

  actions: {
    deleteProduct(item) {
      this.sendAction('deleteProduct', item);
    }
  }
});
