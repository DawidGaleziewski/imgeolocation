// ###3. ImageGeolocationHandler
// -module handling EXIF api returning longitude and latitude information.
// #functions
// -_toDecimal - helper with changing array returned by EXIF.js api into decimal value - private function
// -returnLongLat - returning longitude and latitude from api in object format.
// -operations need to be done in callback function due to async nature of EXIF api.

const ImageGeolocationHandler = (function() {
  // Helper function returning longitude and latitude as a float
  const _toDecimal = function(number) {
    return (
      number[0].numerator +
      number[1].numerator / (60 * number[1].denominator) +
      number[2].numerator / (3600 * number[2].denominator)
    );
  };

  function returnLongLat(imgHTMLElement, callback) {
    // function accepting the image and callback returning the data
    EXIF.getData(imgHTMLElement, function() {
      let longitude = _toDecimal(EXIF.getTag(this, 'GPSLongitude'));
      let latitude = _toDecimal(EXIF.getTag(this, 'GPSLatitude'));

      const longLat = {
        longitude,
        latitude
      };

      callback(longLat);
    });
  }

  // Public functions
  return {
    returnLongLat
  };
})();

export default ImageGeolocationHandler;
