import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),

  hideNavBar: true,

  // init() {
  //   emailjs.send("watchlist_gmail","template_Bs6RM6oG",{ to_name: "Anand", user_email: "anandangalig@gmail.com", product_name: "Apple MacBookPro 13-inch"});
  //   // alert("request sent!");
  //   return this._super();
  // },

  actions: {
    addToList(item) {
      this.get('watchList').add(item);
    },
    checkSavedList() {
      this.transitionTo('saved-list');
    },
    sendEmail() {
      emailjs.send("watchlist_gmail","template_Bs6RM6oG",{ to_name: "Anand", user_email: "anandangalig@gmail.com", product_name: "Apple MacBookPro 13-inch"});
    },

    searchBestBuy(url) {
      console.log(url);
      console.log(url.request);
      this.transitionTo('results', url.request);
    }
  }
});
