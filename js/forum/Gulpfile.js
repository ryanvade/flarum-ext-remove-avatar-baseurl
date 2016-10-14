var flarum = require('flarum-gulp');

flarum({
  modules: {
    'ryanvade/flarum-ext-remove-avatar-baseurl': [
      'src/**/*.js'
    ]
  }
});
