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
      const expression = /\S+@\S+/;
      let email = document.getElementById('email').value;
      let emailValid = expression.test(String(email).toLowerCase());
      let name = document.getElementById('full_name').value;
      let { items } = this.get('watchList');

      if (!name) {
        $('#full_name').attr('required', true);
      } else {
        $('#full_name').attr('required', false);
      }

      if (!email || !emailValid) {
        $('#email').attr('required', true);
      } else {
        $('#email').attr('required', false);
      }

      if (!items.length) {
        $('#add_watch_items').show();
      }

      if (name && emailValid && items.length) {
        items.map(function(item) {
          emailjs.send('watchlist_gmail', 'template_Bs6RM6oG', {
            to_name: name,
            user_email: email,
            product_name: item.name,
            product_link: item.url,
            product_image: item.image,
            sale_price: item.salePrice,
          });
        });

        $('#full_name')
          .attr('required', false)
          .val('');
        $('#email')
          .attr('required', false)
          .val('');
        $('#thank_you').show();
        $('#add_watch_items').hide();
      }
    },
    deleteProduct(item) {
      this.get('watchList').remove(item);
    },
  },
});
