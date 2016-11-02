import Ember from 'ember';

export default Ember.Service.extend({
  items: []; //the array(aka the shopping cart?)

  add(item) {
    this.get('items').pushObject(item); //add to cart
  }
});
