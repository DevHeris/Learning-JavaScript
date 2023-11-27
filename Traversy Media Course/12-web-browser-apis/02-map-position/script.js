// Initializing the map
const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);
// Initializing Ends here so what we did is that we set the initial longitude and latitude to 0 and the marker's(the blue location stuff) longitude and lat to 0 also

// Now to get our location and change the marker coordinate to our location
navigator.geolocation.getCurrentPosition(curSuccess);

function curSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);

  marker
    .bindPopup(
      `<strong>Hello World</strong> <br> This is my assumed current location`
    )
    .openPopup();
}
