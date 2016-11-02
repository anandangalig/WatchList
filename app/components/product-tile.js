import Ember from 'ember';

export default Ember.Component.extend({
  watchList: Ember.inject.service(), //injecting the shopping-cart service; camelCase automatic

  actions: {
    addToList(item) {
      this.get('watchList').add(item); //utilizing the service(property alike)
    },
  }
});
