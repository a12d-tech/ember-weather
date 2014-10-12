EmberWeather.CityController = Ember.ObjectController.extend({
  actions: {
    createCity: function(){
      console.log("--- CityController createCity ---");
      console.log(this.get('model'));
      console.log("---------------------------------");

      var city = this.get('model');

      var cityRecord = this.store.createRecord('city', {
        formatted_location: city.formatted_address,
        lat: city.geometry.location.lat,
        lng: city.geometry.location.lng
      });
      cityRecord.save();

      console.log("--- Record SAVED ---");
      
      this.transitionToRoute('forecasts', cityRecord);
    }
  }
});