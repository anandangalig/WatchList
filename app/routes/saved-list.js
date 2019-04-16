import Ember from 'ember';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),
  model: function() {
    return this.watchList.items;
  },
  actions: {
    searchBestBuy(url) {
      this.transitionTo('results', url.request);
    },
    sendEmail() {
      let name = document.getElementById('full_name').value;
      let email = document.getElementById('email').value;
      let { items } = this.get('watchList');
      console.log(items);
      // bestSellingRank: 137696
      // description: null
      // dollarSavings: 0
      // image: "https://img.bbystatic.com/BestBuy_US/images/products/5633/5633010_sa.jpg"
      // name: "Sony - Alpha a99 II DSLR Camera (Body Only)"
      // onSale: false
      // regularPrice: 3199.99
      // salePrice: 3199.99
      // upc: "027242903326"
      // url: "https://api.bestbuy.com/

      emailjs.send('watchlist_gmail', 'template_Bs6RM6oG', {
        to_name: name,
        user_email: email,
        product_name: 'Apple MacBookPro 13-inch',
      });
    },
    deleteProduct(item) {
      this.get('watchList').remove(item);
    },
  },
});
