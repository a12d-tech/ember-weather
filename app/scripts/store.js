// EmberWeather.ApplicationAdapter = DS.FixtureAdapter;

EmberWeather.ApplicationStore = DS.Store.extend();
EmberWeather.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'ember-weather'
});