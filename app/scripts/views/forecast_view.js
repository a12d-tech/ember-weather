EmberWeather.ForecastView = Ember.View.extend({
  templateName: 'forecast',
  contentWithClassName: function() {
      return this.get('content').map(function(item, index) {
        return {day: item, classNameParent: "col-md-2 forecast forecast-" + index, className: "unit box frcst-" + index};
      });
    }.property('content.@each')
});