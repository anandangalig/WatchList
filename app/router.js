import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('saved-list', {path: 'saved-list/:saved-list_id'});
  this.route('login');
  this.route('create-account');
});

export default Router;
