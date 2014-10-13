EmberWeather.ForecastsRoute = Ember.Route.extend({
  model: function(params) {
    var city = this.modelFor('city');
    // not useful but we have to define model for cityRoute
    // this.store.find('city', city.id).then(function (c) {
    //   console.log(c.get('formatted_location'));
    // });
    return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + city.get('lat') + '&lon=' + city.get('lng') + '&mode=json&units=metric&cnt=7').then(function(data) {
      return data;
    });
  }
});