EmberWeather.City = DS.Model.extend({
  formatted_location : DS.attr('string'),
  lat : DS.attr('number'),
  lng : DS.attr('number'),
  createdAt: DS.attr('string', {
      defaultValue: function() { return new Date(); }
  })
})