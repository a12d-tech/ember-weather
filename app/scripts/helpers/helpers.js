Ember.Handlebars.helper('current-date', function() {
  var day = moment().date();
  var month = moment().format('MMM');
  var year = moment().year();
  var elt = "<div  id='d' class='col-md-6'><span>" + day + "</span></div><div id='m-y' class='col-md-6'><span id='m'>" +  month + "</span><br/><span id='y'>" + year + "</span></div>";
  return new Handlebars.SafeString(elt);
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment.unix(date).calendar().split(' at ')[0];
});

Ember.Handlebars.helper('format-temp', function(temp) {
  return Math.round(temp);
});

Ember.Handlebars.helper('iconW', function(icon) {
  var iconMap = {
    "01d": "<i class='wi wi-day-sunny'></i>",
    "01n": "<i class='wi wi-night-clear'></i>",
    "02d": "<i class='wi wi-day-cloudy'></i>",
    "02n": "<i class='wi wi-night-cloudy'></i>",
    "03d": "<i class='wi wi-cloudy'></i>",
    "03n": "<i class='wi wi-cloudy'></i>",
    "04d": "<i class='wi wi-cloudy'></i>",
    "04n": "<i class='wi wi-cloudy'></i>",
    "09d": "<i class='wi wi-showers'></i>",
    "09n": "<i class='wi wi-showers'></i>",
    "10d": "<i class='wi wi-day-rain'></i>",
    "10n": "<i class='wi wi-night-rain'></i>",
    "11d": "<i class='wi wi-thunderstorm'></i>",
    "11n": "<i class='wi wi-thunderstorm'></i>",
    "13d": "<i class='wi wi-day-snow'></i>",
    "13n": "<i class='wi wi-night-snow'></i>",
    "50d": "<i class='wi wi-fog'></i>",
    "50n": "<i class='wi wi-fog'></i>"
  };
  return new Handlebars.SafeString(iconMap[icon]);
});