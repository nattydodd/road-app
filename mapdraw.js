$( document ).ready(function() {

  var poly;
  var map;

  var pointA_lat = 43.777167
  var pointA_lng = -79.231510

  var pointB_lat = 43.759937
  var pointB_lng = -79.224644

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: pointA_lat, lng: pointA_lng},
      zoom: 13
    });

    var myCoordinates = [
      new google.maps.LatLng(43.777167,-79.231510),
      new google.maps.LatLng(43.759937,-79.224644),
      new google.maps.LatLng(43.761920,-79.213142)
    ];

    poly = new google.maps.Polyline({
      path: myCoordinates,
      strokeColor: '#ba0b0b',
      strokeOpacity: 1.0,
      strokeWeight: 5
    });
    poly.setMap(map);

    // Add a listener for the click event
    map.addListener('click', addLatLng);
  }

  // Handles click events on a map, and adds a new point to the Polyline.
  function addLatLng(event) {
    var path = poly.getPath();

    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    path.push(event.latLng);

    // Add a new marker at the new plotted point on the polyline.
    var marker = new google.maps.Marker({
      position: event.latLng,
      title: '#' + path.getLength(),
      map: map
    });
  }

  initMap();


});