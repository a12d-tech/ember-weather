EmberWeather.ForecastsRoute = Ember.Route.extend({
  model: function(params) {
    console.log("--- ForecastsRoute model ---");

    var city = this.modelFor('city');
    // not useful but we have to define model for cityRoute
    // this.store.find('city', city.id).then(function (c) {
    //   console.log(c.get('formatted_location'));
    // });

    console.log(city);
    console.log("--- city.id : " + city.get('id'));
    console.log("--- city.lat : " + city.get('lat'));
    console.log("--- city.lng : " + city.get('lng'));
    console.log("-------------------------");

    return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + city.get('lat') + '&lon=' + city.get('lng') + '&mode=json&units=metric&cnt=7').then(function(data) {
      return data;
    });

    // var alreadyExistingCities = this.store.find('city', { name: "Peter" });
  },
  afterModel: function() {
    this.set('tutu', this.modelFor('city'));
  }
});