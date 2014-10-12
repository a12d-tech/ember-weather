EmberWeather.ApplicationController = Ember.Controller.extend({
  cityName: '',
  actions: {
    search: function() {
      var cityName = this.get('cityName');
      console.log("--- ApplicationController search ---");
      console.log(cityName);
      console.log("------------------------------------");
      this.transitionToRoute('search', cityName );
    }
  }
});