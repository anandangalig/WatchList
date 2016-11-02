import Ember from 'ember';
//import config from '../config/environment';

export default Ember.Route.extend({
  // model: function() {
  //   var key = config.myApiKey;
  //   // var url = 'https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0502000))?apiKey=' + key + '&sort=name.dsc&show=name&facet=onSale,10&format=json';
  //   var url = "../../dummy.json";
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //     console.log(responseJSON.results);
  //     return responseJSON.results;
  //   });
  //}
  model() {
    return this.store.findAll('product');
  },
});
