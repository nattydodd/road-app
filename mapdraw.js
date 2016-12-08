$(function() {

  var coordinates_array = []

  google.maps.event.addDomListener(window, 'load', initMap);

  function initMap() {

      var mapOptions = {
        center: {lat: 43.777167, lng: -79.231510},
        zoom: 13
      };

      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var poly = new google.maps.Polyline({
        // path: myCoordinates,
        strokeColor: '#ba0b0b',
        strokeOpacity: 1.0,
        strokeWeight: 5
      });

      poly.setMap(map);

      // Add a listener for the click event
      map.addListener('click', addLatLng);


      // Handles click events on a map, and adds a new point to the Polyline.
       function addLatLng(event) {
          var path = poly.getPath();



          var point = [(event.latLng.lat()), (event.latLng.lng())]
          console.log(point);

          coordinates_array.push(point);

          // Because path is an MVCArray, we can simply append a new coordinate
          // and it will automatically appear.
          path.push(event.latLng);


          // and it will automatically appear.

        var inputs = $(".points");

        $(".points").each(function() {

          for (var i=0; i<inputs.length; i++) {
            if (inputs[i].value === "") {
              console.log(inputs[i]);
              console.log(point);
              inputs[i].value = point;
              break;
            }
          }
        });



          // Add a new marker at the new plotted point on the polyline.
          var marker = new google.maps.Marker({
            position: event.latLng,
            title: '#' + path.getLength(),
            map: map
          });
        }

  };

  // function for creating new points based off of a previous point selection
  $('#form1').on('submit', function(event) {
    event.preventDefault();

    var mapOptions = {
      center: {lat: 43.777167, lng: -79.231510},
      zoom: 13
    };

    drawNewMap = function() {

      var myCoordinates = [];

      for (var i = 0; i < coordinates_array.length; i++) {

        myCoordinates.push("new google.maps.LatLng(" + coordinates_array[i] + ")");

      }
      console.log(myCoordinates);

      var map2 = new google.maps.Map(document.getElementById('map2'), mapOptions);

      var poly = new google.maps.Polyline({
        path: myCoordinates,
        strokeColor: '#ba0b0b',
        strokeOpacity: 1.0,
        strokeWeight: 5
      });

      poly.setMap(map2);

    }

    drawNewMap();

  });




});
