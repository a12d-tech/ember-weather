EmberWeather.SearchRoute = Ember.Route.extend({
  model: function(params) {
    console.log("--- SearchRoute model ---");
    // console.log("--- params : ");
    // console.log(params);
    // console.log("-------------------------");
    
    // var alreadyExistingCities = this.store.find('city', { name: "Peter" });

    return Ember.$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + params.location).then(function(data) {
      console.log("--- SearchRoute XHR ---");
      console.log("status : " + data.status);
      switch (data.status) {
        case "OK":
          console.log(data.results);
          return data.results;
          break;
      }
    });
  }
});