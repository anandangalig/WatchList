import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('saved-list');
  this.route('refresh');
  this.route('results', {path: '/results/:request'});
  this.route('create-account');
});

export default Router;
