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

//   if ($('#google_map').length > -1) {
//     // create a LatLng object containing the coordinate for the center of the map
//     var latlng = new google.maps.LatLng(26.709543, -80.0754542);

//     // prepare the map properties
//     var options = {
//       zoom: 15,
//       center: latlng,
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       navigationControl: true,
//       mapTypeControl: false,
//       scrollwheel: false,
//       disableDoubleClickZoom: true
//     };

//     // initialize the map object
//     var map = new google.maps.Map(document.getElementById('google_map'), options);

//     // add Marker
//     var marker1 = new google.maps.Marker({
//       position: latlng, map: map
//     });

//     // add listener for a click on the pin
//     google.maps.event.addListener(marker1, 'click', function () {
//       infowindow.open(map, marker1);
//     });

//     // add information window
//     var infowindow = new google.maps.InfoWindow({
//       content: '<div class="info"><strong>WiseOwlSoaps</strong><br>635 Executive Center Dr.<br><br> West Palm Beach, Fl.</div>'
//     });
//   }
});


    new cbpScroller(document.getElementById('cbp-so-scroller'));

    function elementInViewport2(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }
    $(document).ready(function() {
    window.scrollTo(0, 0);
        var oriBgSrc = "/img/wedding01.jpg";//$(".fullscreen-bg__image").attr("src");
        var cont = true;
        $(".cbp-so-section").first().addClass("cbp-so-init");
        $(".cbp-so-section").first().addClass("cbp-so-animate");
        setInterval(function() {
            $.each($(".cbp-so-section"), function() {
                if (!$(window).scrollTop()) {
                    if ($(".fullscreen-bg__image").attr("src") != oriBgSrc && cont) {
                        cont = false;
                        $(".fullscreen-bg__image").fadeOut(function() {
                            $(".fullscreen-bg__image").attr("src", oriBgSrc);
                        $(".fullscreen-bg__image").fadeIn();
                        });
                        return false;
                    }
                    return false;
                } else {
                    if ($(this).visible()) {
                        var thisSrc = $(this).find("input").val() == "" ? $(this).find("img").attr("src") : $(this).find("input").val();
                        var bgSrc = $(".fullscreen-bg__image").attr("src")
                        if (thisSrc != bgSrc && cont) {
                            cont = false;
                            $(".fullscreen-bg__image").fadeOut(function() {
                                $(".fullscreen-bg__image").attr("src", thisSrc);
                            $(".fullscreen-bg__image").fadeIn();
                            });
                            return false;
                        }
                        return false;
                    }
                }
            });
            cont = true;
        }, 300)
    })