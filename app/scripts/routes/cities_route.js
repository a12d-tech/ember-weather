EmberWeather.CitiesRoute = Ember.Route.extend({
  model: function(params) {
    console.log("--- CitiesRoute model ---");
    return this.store.find('city');
  }
});