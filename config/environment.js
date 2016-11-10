/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'online-marketplace',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: "AIzaSyDdp9zcOrWRkViTrW_I5S4-B7ON-AVhaGY",
      authDomain: "watch-list-user-test.firebaseapp.com",
      databaseURL: "https://watch-list-user-test.firebaseio.com",
      storageBucket: "watch-list-user-test.appspot.com"
    },

    // firebase: {
    //   apiKey: 'AIzaSyAiud1xLgcO1wObQuQWkUp42oKExUZwtic',
    //   authDomain: 'watchlist-f03db.firebaseapp.com',
    //   databaseURL: 'https://watchlist-f03db.firebaseio.com',
    //   storageBucket: ''
    // },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: '/api/token-auth/',
    identificationField: 'identification',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {},
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.myApiKey = process.env.apiKey;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
