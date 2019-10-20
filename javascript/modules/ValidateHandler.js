//###5. ValidateHandler.js
    //- module handling validation criteria: file size, file format, required EXIF data
        //#functions:
            //validateImage - public function bootstraping all other validation functions. Returns public error object
            //_validateGPSData validates if the image has correct metadata. - private function
                //requires a callback due to async nature of the function
            //_validateFileSize - validates file size
            //_validateFileExtension - validates if the file has correct format - private function




    
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
            hasGPSData: {
                isCorrect:false,
                description: 'Image uploaded does not have EXIF metadata on geolocation'
            },
            goodFileSize: {
                isCorrect: false,
                description: 'Image uploaded is to big'
            }, 
            validFileExtension: {
                isCorrect: false,
                description: 'Bad file format'
            }
        }

        _validateGPSData(image, function(gpsIsValid){
            errors.hasGPSData.isCorrect = gpsIsValid;
            errors.goodFileSize.isCorrect = _validateFileSize(image.size, 1000);
            errors.validFileExtension.isCorrect = _validateFileExtension(image.type, ["image/jpeg"])
            callback(errors)
        })

    }

    return{
        validateImage: validateImage
    }
})();

export default ValidateHandler;