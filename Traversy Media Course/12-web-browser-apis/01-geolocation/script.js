// Using getCurrentPosition()

function curSuccess(position) {
  console.log(position);

  const coords = position.coords;
  const timestamp = position.timestamp;
  const date = new Date(timestamp);
  console.log(date); // the date and time the position was recorded

  console.log(coords);
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(error) {
  console.log(`Error: ${error.code} - ${error.message}`);
}

const curOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Using watchPosition()
const target = {
  longitude: 41.3874387,
  latitude: -71.394839,
};

function watchSuccess(pos) {
  const coords = pos.coords; //This updates whenever our position changes

  if (
    target.longitude === coords.longitude &&
    target.latitude === coords.latitude
  ) {
    console.log("You have reached your destination!");
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error:${err.code} - ${err.message}`);
}

const watchOptions = {
  maximumAge: 0,
  enableHighAccuracy: true,
  timeout: 5000,
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
