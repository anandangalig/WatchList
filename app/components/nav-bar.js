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

      console.log(apiKey);
      var url = {
        request: 'https://api.bestbuy.com/v1/products((' + outputString + '))?apiKey=' + apiKey + '&sort=sku.asc&show=sku,regularPrice,thumbnailImage,upc,salePrice,name,description,image,modelNumber,onSale&facet=color&format=json'
      };

      console.log(url);
      this.sendAction('searchBestBuy', url);
    }
  }
});
