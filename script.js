function init() {
  const initialPosition = { lat: 59.325, lng: 18.069 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: initialPosition,
    zoom: 15
  });

  const marker = new google.maps.Marker({ map, position: initialPosition });

  // Get user's location
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`);

        // Set marker's position.
        marker.setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });

        // Center map to user's position.
        map.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      err => alert(`Error (${err.code}): ${getPositionErrorMessage(err.code)}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}