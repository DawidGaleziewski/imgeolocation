// ###6. MapHandler.js
// - module handling the map api and actions like: adding markers, removing markers. changing current view
// #functions
// - startMap - creates MAP object and binds it to the DOM.
// - setView - changes the location the map is focused on. Accepts object with longitude and latitude
// - addMarker - adds marker on the map. Accepts object with longitude and latitude.
// - _removeMarker - removes marker on the map. Private function
// - removeButtonOnClickHandler - collects data needed to locate object referance of a marker and remove it from dom
const Leflet = require('leaflet');

const MapHandler = (() => {
  const mymap = Leflet.map('mapid').setView([51.505, -0.09], 13);
  function startMap() {
    Leflet.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken:
          'pk.eyJ1IjoiZGF3aWRnYWxlemlld3NraWRldiIsImEiOiJjazF5MmtrenUwY21mM29uc3R2NWY2eG80In0.tnl8PPwx5p-xDKirHF6O2Q'
      }
    ).addTo(mymap);
  }

  function setView(longLatObject) {
    mymap.panTo(new Leflet.LatLng(longLatObject.latitude, longLatObject.longitude));
  }

  const markersArray = [];
  function addMarker(longLatObject, fileName) {
    markersArray.push({
      latitude: longLatObject.latitude,
      longitude: longLatObject.longitude,
      objectReference: new Leflet.marker([longLatObject.latitude, longLatObject.longitude])
        .bindPopup(`Picture name: ${fileName}`)
        .addTo(mymap)
    });
  }

  function removeMarker(longLatObject) {
    markersArray.forEach((marker, index) => {
      console.log(marker.longitude, longLatObject.longitude);
      if (marker.longitude === longLatObject.longitude) {
        // Remove marker from the map using the object referance
        mymap.removeLayer(marker.objectReference);

        // Remove marker from the array
        markersArray.splice(index, 1);

        console.log('bang', markersArray);
      }
    });
  }

  function removeButtonOnClickHandler(UIremoveButton) {
    // Covert the data stored in button dom to object
    const longLatRaw = UIremoveButton.getAttribute('name').split('#');
    const longLatObj = {
      longitude: parseFloat(longLatRaw[1]),
      latitude: parseFloat(longLatRaw[2])
    };

    removeMarker(longLatObj);
  }

  return {
    setMarker: addMarker,
    startMap,
    setView,
    removeButtonOnClickHandler
  };
})();

export default MapHandler;
