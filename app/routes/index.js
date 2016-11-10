import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  }

  // watchList: Ember.inject.service(),
  //
  // hideNavBar: true,
  //
  // actions: {
  //   addToList(item) {
  //     this.get('watchList').add(item);
  //   },
  //   checkSavedList() {
  //     this.transitionTo('saved-list');
  //   },
  //   sendEmail() {
  //     emailjs.send("watchlist_gmail","template_Bs6RM6oG",{ to_name: "Anand", user_email: "anandangalig@gmail.com", product_name: "Apple MacBookPro 13-inch"});
  //   },
  //
  //   searchBestBuy(url) {
  //     console.log(url);
  //     console.log(url.request);
  //     this.transitionTo('results', url.request);
  //   }
  // },
  // model: function() {
  //   var key = config.myApiKey;
  //   var url = 'https://api.bestbuy.com/v1/products((search=laptop)&onSale=true)?apiKey=' +key+ '&sort=name.asc&show=name,salePrice,regularPrice,image&format=json';
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //     return responseJSON;
  //   });
  // }
});
