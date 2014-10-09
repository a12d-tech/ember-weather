Ember.Handlebars.helper('current-date', function() {
  var day = moment().date();
  var month = moment().format('MMM');
  var year = moment().year();
  var elt = "<div  id='d' class='col-md-6'><span>" + day + "</span></div><div id='m-y' class='col-md-6'><span id='m'>" +  month + "</span><br/><span id='y'>" + year + "</span></div>";
  return new Handlebars.SafeString(elt);
});