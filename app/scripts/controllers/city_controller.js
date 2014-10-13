EmberWeather.CityController = Ember.ObjectController.extend({
  actions: {
    createCity: function(){
      var city = this.get('model');
      var cityRecord = this.store.createRecord('city', {
        formatted_location: city.formatted_address,
        lat: city.geometry.location.lat,
        lng: city.geometry.location.lng
      });
      cityRecord.save();

      this.transitionToRoute('forecasts', cityRecord);
    }
  }
});