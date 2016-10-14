import app from 'flarum/app';
import User from 'flarum/models/User';

app.initializers.add('ryanvade-flarum-ext-remove-avatar-baseurl', () =>  {

User.prototype.avatarUrl = function() {
  // if the avatarURL contains the baseUrl
  if(this.attribute('avatarUrl').indexOf(app.forum.attribute('baseUrl')) + 1)
  {
    var url = this.attribute('avatarUrl');
    // remove the baseUrl
    url.replace(app.forum.attribute('baseUrl'), '');
    this.pushAttributes({
      // set the new URL
      avatarUrl: url
    });
  }
  return this.attribute('avatarUrl');
  };
});
