EmberWeather.CityController = Ember.ObjectController.extend({
  actions: {
    createCity: function(){
      var city = this.get('model');
      var str = this.get('store');
      var context = this;

      var cityRecord = this.store.find('city', {formatted_location: city.formatted_address});

      cityRecord.then(fulfill, reject);

      function fulfill(answer) {
        tmp = answer.get('content').get('firstObject').id;
        context.transitionToRoute('forecasts', tmp);
      }

      function reject(reason) {
        cityRecord = str.createRecord('city', {
          formatted_location: city.formatted_address,
          lat: city.geometry.location.lat,
          lng: city.geometry.location.lng
        });
        cityRecord.save();
        context.transitionToRoute('forecasts', cityRecord);
      }
    }
  }
});