import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),

  actions: {
    addToList(item) {
      this.get('watchList').add(item);
    },
    checkSavedList() {
      this.transitionTo('saved-list');
    },
    sendEmail() {
      // parameters: service_id, template_id, template_parameters
      emailjs.send("watchlist_gmail","template_Bs6RM6oG",{name: "Anand", notes: "Check this out!"});
    }
  },
  model: function() {
    var key = config.myApiKey;
    var url = 'https://api.bestbuy.com/v1/products((search=laptop)&onSale=true)?apiKey=' +key+ '&sort=name.asc&show=name,salePrice,regularPrice,image&format=json';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON;
    });
  }
});
