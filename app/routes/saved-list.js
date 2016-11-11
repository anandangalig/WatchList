import Ember from 'ember';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),
  model: function() {
    console.log(this.watchList);
    return this.watchList.items;
  },
  actions:{
    searchBestBuy(url) {
      this.transitionTo('results', url.request);
    },
    sendEmail() {
      emailjs.send("watchlist_gmail","template_Bs6RM6oG",{ to_name: "Anand", user_email: "anandangalig@gmail.com", product_name: "Apple MacBookPro 13-inch"});
    },
    deleteProduct(item) {
      this.get('watchList').remove(item);
    }
  }

});
