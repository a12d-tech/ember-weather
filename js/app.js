App = Ember.Application.create();

App.Router.map(function() {
  this.resource('city', { path: '/city/:name' });
});

App.ApplicationController = Ember.Controller.extend({
  cityName: '',
  displayMap: '',
  actions: {
    searchWeather: function() {
      var cityName = this.get('cityName');

      this.set('displayMap', 'hidden');

      this.transitionToRoute('city', cityName );
    }
  },
  isSearching: function(){
    return !(this.get('cityName') === '');
  }.property('cityName')
});

App.CityRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + params.name + '&mode=json&units=metric&cnt=7').then(function(data) {
      return data;
    });
  }
});

App.CityController = Ember.ObjectController.extend({
  today: function(){
    return this.get('model.list').get('firstObject');
  }.property('model.list'),
  forecast: function(){
    return this.get('model.list').slice(1);
  }.property('model.list')
});

App.GoogleMapComponent = Ember.Component.extend({
  lng: '',
  lat: '',
  mapUrl: function() {
    var longitude = this.get('lng'),
        latitude = this.get('lat');
    return 'http://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=12&size=341x300&sensor=true';
  }.property('lng', 'lat')
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment.unix(date).calendar().split(' at ')[0];
});

Ember.Handlebars.helper('format-temp', function(temp) {
  return Math.round(temp);
});

Ember.Handlebars.helper('current-date', function() {
  var day = moment().date();
  var month = moment().format('MMM');
  var year = moment().year();
  var elt = "<div  id='d' class='col-md-6'><span>" + day + "</span></div><div id='m-y' class='col-md-6'><span id='m'>" +  month + "</span><br/><span id='y'>" + year + "</span></div>";
  return new Handlebars.SafeString(elt);
});

Ember.Handlebars.helper('iconW', function(icon) {
  var iconMap = {
    "01d": "<i class='wi-day-sunny'></i>",
    "01n": "<i class='wi-night-clear'></i>",
    "02d": "<i class='wi-day-cloudy'></i>",
    "02n": "<i class='wi-night-cloudy'></i>",
    "03d": "<i class='wi-cloudy'></i>",
    "03n": "<i class='wi-cloudy'></i>",
    "04d": "<i class='wi-cloudy'></i>",
    "04n": "<i class='wi-cloudy'></i>",
    "09d": "<i class='wi-showers'></i>",
    "09n": "<i class='wi-showers'></i>",
    "10d": "<i class='wi-day-rain'></i>",
    "10n": "<i class='wi-night-rain'></i>",
    "11d": "<i class='wi-thunderstorm'></i>",
    "11n": "<i class='wi-thunderstorm'></i>",
    "13d": "<i class='wi-day-snow'></i>",
    "13n": "<i class='wi-night-snow'></i>",
    "50d": "<i class='wi-fog'></i>",
    "50n": "<i class='wi-fog'></i>"
  };
  return new Handlebars.SafeString(iconMap[icon]);
});

App.CityView = Ember.View.extend({
  didInsertElement: function() {
    $('#home-map-wrapper').css('display','none');

    $('.unit.box').each(function(index) {
      switch(index){
        case 0:
          $(this).css("background-color",'#1ABC9C');
          $(this).parent().css("padding-left",'0px');
          break;
        case 1:
          $(this).css("background-color",'#E67E22');
          break;
        case 2:
          $(this).css("background-color",'#F1C40F');
          break;
        case 3:
          $(this).css("background-color",'#3498DB');
          break;
        case 4:
          $(this).css("background-color",'#9B59B6');
          break;
        case 5:
          $(this).css("background-color",'#2ECC71');
          $(this).parent().css("padding-right",'0px');
          break;
      }
    });
  }
});