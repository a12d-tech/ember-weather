EmberWeather.Router.map(function () {
  this.route('index',{path : '/'});
  this.route('search',{path : '/search/:location'});
  this.resource('cities', {path: '/cities'});
  this.resource('city', {path: '/cities/:id'}, function(){
    this.resource('forecasts');
  });
  // this.route('user.new', {path: '/users/new'});
  // this.resource('user', {path: '/users/:id'}, function(){
  //   this.route('edit');
  // });
});
