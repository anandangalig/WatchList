import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  content: [], // the select options
  prompt: null, // the select 'label', has no value. optional
  optionValuePath: 'value',
  optionLabelPath: 'label',
  selectedCategory: '',

  // failsafe if select list is empty
  init: function() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', []);
    }
  },

actions: {
    change: function() {
      let selectedIndex = this.$('select')[0].selectedIndex;
      let content = this.get('content');

      // decrement index by 1 if we have a prompt
      let hasPrompt = !this.get('prompt');
      let contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;
      let _selection = content[contentIndex - 1];

      // this.set('selectedCategory', _selection.value);
      // this.sendAction('willChangeAction', _selection.value);

      if (this.get('optionValuePath')) {
        this.set('selection', _selection[this.get('optionValuePath')]);
      } else {
        this.set('selection', _selection);
      }

      // this.sendAction('didChangeAction', _selection.value);
      this.set('selectedCategory', _selection.value);
      console.log(this.get('selectedCategory'));
    },

    searchBestBuy() {
      var apiKey = 'dDNhiwh8mUbK6pzaUfGxynag';
      var selectedCategory = this.get('selectedCategory');

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
        request: "https://api.bestbuy.com/v1/products((" + outputString + ")&(categoryPath.id=" + selectedCategory + "))?apiKey=" + apiKey + "&sort=bestSellingRank.dsc&show=name,salePrice,regularPrice,description,bestSellingRank,onSale,upc,url,image,dollarSavings&pageSize=100&format=json"
      };

      console.log(url.request);
      this.sendAction('searchBestBuy', url);
    },
  }
});
