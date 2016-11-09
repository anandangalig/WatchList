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
    },
    searchBestBuy(url) {
      this.transitionTo('results', url.request);
    }
  }
});

// model: function(params) {
//   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=[YOUR_API_KEY_HERE]&zip=' + params.zip;
//   return Ember.$.getJSON(url).then(function(responseJSON) {
//     return responseJSON.results;
//   });
//  }
