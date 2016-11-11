import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searchBestBuy(url) {
      this.transitionTo('results', url.request);
    }
  }
});
