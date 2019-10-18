//Module getting the geolocation of the image
    //Accepts image and a callback function that handles the data return

const ImageGeolocationHandler = (function(){
    //Helper function returning longitude and latitude as a float
    const toDecimal = function (number) {
        return number[0].numerator + number[1].numerator /
            (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
    };

    function returnLongLat(imgHTMLElement, callback){
        //function accepting the image and callback returning the data
        EXIF.getData(imgHTMLElement, function(){

            let longitude = toDecimal(EXIF.getTag(this,'GPSLongitude'));
            let latitude = toDecimal(EXIF.getTag(this, 'GPSLatitude')); 
            
            const longLat = {
                longitude: longitude,
                latitude: latitude
            }   

            callback(longLat)
        })
    }

    //Public functions
    return {
        returnLongLat: returnLongLat 
    }

})();

export default ImageGeolocationHandler;