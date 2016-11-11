import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),
  beforeModel: function() {
    this.transitionTo('login');
  },

  hideNavBar: true,

  actions: {
    addToList(item) {
      this.get('watchList').add(item);
    },
    checkSavedList() {
      this.transitionTo('saved-list');
    },
    searchBestBuy(url) {
      this.transitionTo('results', url.request);
    }
  }
});
