EmberWeather.ForecastsController = Ember.ObjectController.extend({
  city: function(){
    return this.get('model.city');
  }.property('model.city'),
  today: function(){
    return this.get('model.list').get('firstObject');
  }.property('model.list'),
  forecast: function(){
    return this.get('model.list').slice(1);
  }.property('model.list')
});