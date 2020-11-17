mapboxgl.accessToken =
  "pk.eyJ1IjoidmlzaGFsc3VuaWxrdW1hciIsImEiOiJja2hpMHB5MGYxNzJ2MnJsdTZvMHNkNnZyIn0.bHX0N3gkvutN4oUGXZwQAw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([80.2707, 13.0827]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 17,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
