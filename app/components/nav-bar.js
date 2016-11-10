import Ember from 'ember';
//inject the service to automatically map the session events to the sessionAuthenticated and sessionInvalidated methods, sessionAuthenticated transitions to a configurable route, sessionInvalidated automatically reloads the page to clear sensitive data from memory
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from '../config/environment';
export default Ember.Route.extend(ApplicationRouteMixin);
export default Ember.Component.extend({
  session: Ember.inject.service('session');
  actions: {
    searchBestBuy() {
      var apiKey = "dDNhiwh8mUbK6pzaUfGxynag";
      var promise = new Promise(function(resolve, reject) {
      });

      // var getKeywords = new Promise(function(resolve, reject) {
      //   resolve(keywords = this.get('keywords'));
      // });

      // function splitKeywords() {
      //   return keywords.split(" ");
      // };
      //
      // function prependKeywords() {
      //   for (var i = 0; i <= keywords.length; i++) {
      //     if (i = 0) {
      //       keywords[i] = "search=" + keywords[i];
      //     } else {
      //       keywords[i] = "&search=" + keywords[i];
      //     }
      //   }
      //   return keywords;
      // };
      //
      // function buildUrl() {
      //   var url = "https://api.bestbuy.com/v1/products((";
      //
      //   for (let keyword of keywords) {
      //     url += keyword;
      //     return url;
      //   };
      //
      //   url += ")&)?apiKey=" + apiKey + "&format=json";
      //   return url;
      // };
      //
      // splitKeywords().then(prependKeywords().then(buildUrl()));
      // console.log(url);
    },
//inject the service for authentication that can be called up in the template by querrying the isAuthenticated property


  //use the invalidateSession action call to invalidate the session and log the user out
    invalidateSession() {
      this.get('session').invalidate()};
      var apiKey = config.myApiKey;

      var keywords = this.get('keywords').split(" ");
      var outputString = '';
      keywords.forEach(function(word, i){
        if (i === 0) {
          outputString += "search=" + word;
        } else {
          outputString += "&search=" + word;
        }
      });

      console.log(apiKey);
      var url = {
        request: 'https://api.bestbuy.com/v1/products((' + outputString + '))?apiKey=' + apiKey + '&sort=sku.asc&show=sku,regularPrice,thumbnailImage,upc,salePrice,name,description,image,modelNumber,onSale&facet=color&format=json'
      };

      console.log(url);
      this.sendAction('searchBestBuy', url);
  }
});
