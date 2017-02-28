System.register('ryanvade/flarum-ext-remove-avatar-baseurl/main', ['flarum/app', 'flarum/models/User'], function (_export) {
  'use strict';

  var app, User;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumModelsUser) {
      User = _flarumModelsUser['default'];
    }],
    execute: function () {

      app.initializers.add('ryanvade-flarum-ext-remove-avatar-baseurl', function () {

        //console.log("Inside ryanvade-flarum-ext-remove-avatar-baseurl");

        User.prototype.avatarUrl = function () {
          //console.log("Inside user.prototype.avatarURL");
          if (this.attribute('avatarUrl') && this.attribute('avatarUrl').indexOf(app.forum.attribute('baseUrl')) + 1) {
            //console.log("Inside if statement");
            // remove the baseUrl
            var url = this.attribute('avatarUrl').replace(app.forum.attribute('baseUrl') + '/assets/avatars/', '');
            //console.log();
            //console.log(app.forum.attribute('baseUrl') + '/assets/avatars/');
            this.pushAttributes({
              // set the new URL
              avatarUrl: url
            });
          }
          return this.attribute('avatarUrl');
        };
      });
    }
  };
});