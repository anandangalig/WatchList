import Ember from 'ember';

export default Ember.Route.extend({
  watchList: Ember.inject.service(),
  model: function() {
    console.log(this.watchList);
    return this.watchList.items;
  }

});
