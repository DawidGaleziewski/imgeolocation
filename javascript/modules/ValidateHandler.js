
const ValidateHandler = (function(){

    const _validateGPSData = function(image, callback){
        EXIF.getData(image, function(){
            let valid = EXIF.getTag(this, 'GPSLongitude') ? true : false; 
            callback(valid);
        }) 
    }

    const _validateFileSize = function(fileSize,fileSizeLimitKB){
        const fileSizeKB = fileSize/1000;
        return (fileSizeKB <= fileSizeLimitKB)
    }

    const _validateFileExtension = function(fileExtension,acceptableFileExtensionsArray){
        return (acceptableFileExtensionsArray.includes(fileExtension))
    }

    //Validate image and return a object with checks in the callback
    const validateImage = function(image, callback){
        const errors = {
            hasGPSData:  false,
            goodFileSize: false,
            validFileExtension: false
        }

        _validateGPSData(image, function(gpsIsValid){
            errors.hasGPSData = gpsIsValid;
            errors.goodFileSize = _validateFileSize(image.size, 1000);
            errors.validFileExtension = _validateFileExtension(image.type, ["image/jpeg"])
            callback(errors)
        })


    }

    return{
        validateImage: validateImage
    }
})();

export default ValidateHandler;