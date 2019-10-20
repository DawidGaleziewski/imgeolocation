
//Maps

const MapHandler = (function(){
    var _mymap = L.map('mapid').setView([51.505, -0.09], 13);
    function startMap(){
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZGF3aWRnYWxlemlld3NraWRldiIsImEiOiJjazF5MmtrenUwY21mM29uc3R2NWY2eG80In0.tnl8PPwx5p-xDKirHF6O2Q'
        }).addTo(_mymap);
    
    }

    function setView(longLatObject){
        _mymap.panTo(new L.LatLng(longLatObject.latitude, longLatObject.longitude));
    }

    var markersArray = [];
    function addMarker(longLatObject, fileName){ 

        markersArray.push(
            {
                latitude: longLatObject.latitude ,
                longitude: longLatObject.longitude,
                objectReference: new L.marker([longLatObject.latitude ,longLatObject.longitude])
                .bindPopup(`Picture name: ${fileName}`)
                .addTo(_mymap)
            }
        )   
    }

    function removeMarker(longLatObject){
        markersArray.forEach(function(marker, index){
            console.log(marker.longitude, longLatObject.longitude)
            if (marker.longitude === longLatObject.longitude){
                
                //Remove marker from the map using the object referance
                _mymap.removeLayer(marker.objectReference);

                //Remove marker from the array
                markersArray.splice(index, 1)

                console.log('bang', markersArray)
            }
        })
    }

    function removeButtonOnClickHandler(UIremoveButton){
        //Covert the data stored in button dom to object
        const longLatRaw = UIremoveButton.getAttribute('name').split('#');
        const longLatObj = {
            longitude: parseFloat(longLatRaw[1]),
            latitude: parseFloat(longLatRaw[2])
        };

        removeMarker(longLatObj)
    }


    return {
        startMap: startMap,
        setMarker: addMarker,
        setView: setView,
        removeMarker: removeMarker,
        removeButtonOnClickHandler: removeButtonOnClickHandler
    }
})();

export default MapHandler;
