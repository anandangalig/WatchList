import Ember from 'ember';
// import config from '../config/environment';

export default Ember.Route.extend({
  model: function(url) {
    console.log(url);
    // var key = config.myApiKey;
    // var url = 'https://api.bestbuy.com/v1/products((search=laptop)&onSale=true)?apiKey=' +key+ '&sort=name.asc&show=name,salePrice,regularPrice,image&format=json';
    return Ember.$.getJSON(url.request).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  }
});
