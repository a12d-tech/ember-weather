EmberWeather.CityRoute = Ember.Route.extend({
  model: function(params) {
    console.log("--- CityRoute model ---");
    console.log("--- params : ");
    console.log(params);
    console.log("-------------------------");

    return this.store.find('city', params.id);
    // var alreadyExistingCities = this.store.find('city', { name: "Peter" });
  }
});