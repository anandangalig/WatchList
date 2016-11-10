import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', { path: '/'});
  this.route('create-account');
  this.route('saved-list');
  // this.route('refresh');
  // this.route('results', {path: '/results/:request'});
});

export default Router;
