import app from 'flarum/app';
import User from 'flarum/models/User';

app.initializers.add('ryanvade-flarum-ext-remove-avatar-baseurl', () =>  {

//console.log("Inside ryanvade-flarum-ext-remove-avatar-baseurl");

User.prototype.avatarUrl = function() {
  //console.log("Inside user.prototype.avatarURL");
  if(this.attribute('avatarUrl') && this.attribute('avatarUrl').indexOf(app.forum.attribute('baseUrl')) + 1)
  {
    //console.log("Inside if statement");
    // remove the baseUrl
    var url = this.attribute('avatarUrl').replace(app.forum.attribute('baseUrl')+ '/assets/avatars/', '');
    //console.log();
    //console.log(app.forum.attribute('baseUrl') + '/assets/avatars/');
    this.pushAttributes({
      // set the new URL
      avatarUrl: url
    });
  }else if(this.attribute('avatarURL') == null){
    this.pushAttributes({
      // set the URL to default
      avatarUrl: '/images/profiles/profile_default.png'
    });
  }
  return this.attribute('avatarUrl');
  };
});
