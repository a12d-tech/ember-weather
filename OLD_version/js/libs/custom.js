function initialize() {
  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('search-field')),
    { types: ['(cities)'] }
  );

  
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInFieldWithFormattedAddress();
  });

}

function fillInFieldWithFormattedAddress(){
  var place = autocomplete.getPlace();
  console.log(place);
  /*var formattedAddress = '';
  var city = place.address_components[0].long_name;
  var country = place.address_components[3].short_name;
  formattedAddress = city + ' ' + country;
  console.log(formattedAddress);
  $('input#search-field').val(formattedAddress);*/
}