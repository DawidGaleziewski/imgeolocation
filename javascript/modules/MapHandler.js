
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


    function addMarker(longLatObject){
        var planes = [];
            planes.push([`Location-${longLatObject.latitude}-${longLatObject.longitude}`, longLatObject.latitude ,longLatObject.longitude])

            for (var i = 0; i < planes.length; i++) {
                var marker = new L.marker([planes[i][1],planes[i][2]])
                    .bindPopup(planes[i][0])
                    .addTo(_mymap);
            }
    }


    return {
        startMap: startMap,
        setMarker: addMarker,
        setView: setView
    }
})();

export default MapHandler;
