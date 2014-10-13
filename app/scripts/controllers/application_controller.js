EmberWeather.ApplicationController = Ember.Controller.extend({
  cityName: '',
  actions: {
    search: function() {
      var cityName = this.get('cityName');
      this.transitionToRoute('search', cityName );
    }
  }
});