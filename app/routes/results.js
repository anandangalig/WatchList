import Ember from 'ember';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),

  model: function(objectFromRouter) {
    var query = objectFromRouter.request;
    return Ember.$.getJSON(query).then(function(responseJSON) {
      return responseJSON;
    });
  },
  actions:{
    addToList(item) {
      this.get('watchList').add(item);
      var item_id = '#' + item.upc;
      // Ember.$(item_id).text("Added to WatchList");
      Ember.$(item_id).replaceWith("<button class='btn btn-success'>Added to WatchList</button>");
    },
    searchBestBuy(url) {
      this.transitionTo('results', url.request);
    }
  }
});
