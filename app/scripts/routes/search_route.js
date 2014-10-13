EmberWeather.SearchRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + params.location).then(function(data) {
      switch (data.status) {
        case "OK":
          return data.results;
          break;
      }
    });
  }
});