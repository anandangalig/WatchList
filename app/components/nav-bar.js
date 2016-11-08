import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  actions: {
    searchBestBuy() {
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
      var url = "https://api.bestbuy.com/v1/products((" + outputString + ")&)?apiKey=" + apiKey + "&format=json";
      console.log(url);
    },
  }
});
