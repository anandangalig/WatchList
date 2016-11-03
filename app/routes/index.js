import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    console.log(key);
    var url = 'https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0204000))?apiKey=' + key + '&format=json';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON;
    });
  }
});
  // model() {
  //   return this.store.findAll('product');
  // },
