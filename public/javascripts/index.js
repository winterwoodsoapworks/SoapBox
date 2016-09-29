//remember to minify or set up grunt to do so
$(window).ready(function () {
  //fade in body once page is loaded
  $('body').css('visibility', 'visible').hide().fadeIn('fast');

  //set active class when clicked
  $('.navbar >* a:not(.dropdown-toggle)').parent().click(function (e) {
    $('.navbar >* a:not(.dropdown-toggle)').parent().removeClass('active');
    this.className += ' active';
    $('#bs-example-navbar-collapse-1').collapse('hide');
  });

  if ($('#google_map').length > -1) {
    // create a LatLng object containing the coordinate for the center of the map
    var latlng = new google.maps.LatLng(26.709543, -80.0754542);

    // prepare the map properties
    var options = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      navigationControl: true,
      mapTypeControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    };

    // initialize the map object
    var map = new google.maps.Map(document.getElementById('google_map'), options);

    // add Marker
    var marker1 = new google.maps.Marker({
      position: latlng, map: map
    });

    // add listener for a click on the pin
    google.maps.event.addListener(marker1, 'click', function () {
      infowindow.open(map, marker1);
    });

    // add information window
    var infowindow = new google.maps.InfoWindow({
      content: '<div class="info"><strong>WiseOwlSoaps</strong><br>635 Executive Center Dr.<br><br> West Palm Beach, Fl.</div>'
    });
  }
});