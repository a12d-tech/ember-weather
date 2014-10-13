EmberWeather.CitiesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('city');
  }
});