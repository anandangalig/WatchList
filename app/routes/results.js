import Ember from 'ember';

export default Ember.Route.extend({
  model: function(objectFromRouter) {
    var query = objectFromRouter.request;
    console.log(objectFromRouter.request);
    return Ember.$.getJSON(query).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  }
});

// model: function(params) {
//   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=[YOUR_API_KEY_HERE]&zip=' + params.zip;
//   return Ember.$.getJSON(url).then(function(responseJSON) {
//     return responseJSON.results;
//   });
//  }
