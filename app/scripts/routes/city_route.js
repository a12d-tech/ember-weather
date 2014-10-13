EmberWeather.CityRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('city', params.id);
  }
});