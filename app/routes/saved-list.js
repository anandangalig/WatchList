import Ember from 'ember';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),
  model: function() {
    console.log(this.watchList);
    return this.watchList.items;
  },

  actions: {
    searchBestBuy(url) {
      console.log(url);
      console.log(url.request);
      this.transitionTo('results', url.request);
    }
  }

});
