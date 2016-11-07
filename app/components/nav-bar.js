import Ember from 'ember';

export default Ember.Component.extend({
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
  }
});
