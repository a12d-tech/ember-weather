EmberWeather.GoogleMapComponent = Ember.Component.extend({
  lng: '',
  lat: '',
  mapUrl: function() {
    var longitude = this.get('lng'),
        latitude = this.get('lat');
    return 'http://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=12&size=341x300&sensor=true';
  }.property('lng', 'lat')
});