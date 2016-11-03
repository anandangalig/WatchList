import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    // var key = config.myApiKey;
    var url = 'https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0204000))?apiKey=dDNhiwh8mUbK6pzaUfGxynag&format=json';
    // var url = "../../dummy.json";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  }
});
  // model() {
  //   return this.store.findAll('product');
  // },
