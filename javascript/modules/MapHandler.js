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

    function setView(){
        _mymap.setView([55.505, -0.09], 13);
    }

    //TODO work on markers and documentation
        //TODO refactor code
    function setMarker(){
        var planes = [[51.5, -0.09], [53.51, -0.09], [53.53, -0.09]]
       planes.forEach(function(planeMarker){
           console.log(planeMarker)
        var marker = new L.marker([planeMarker[0], planeMarker[1]]).addTo(_mymap);
       }) 
        // var marker1 = L.marker([55.51, -0.09], [55.51, -0.09]).addTo(_mymap);
    }


    return {
        startMap: startMap,
        setMarker: setMarker,
        setView: setView
    }
})();

export default MapHandler;
