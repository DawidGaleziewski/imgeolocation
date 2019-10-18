
const ValidateHandler = (function(){

    const validateGPSData = function(image){
        let hasGPSdata = 'test';
        //Todo Figuring out how to validate if image has the data
        function fetchEXIF(image, callback){
            EXIF.getData(image, function(){
                let valid = EXIF.getTag(this, 'GPSLongitude') ? true : false;
                callback(valid);
            }) 
        }

        fetchEXIF(image, function(valid){
            //console.log(valid)
            console.log(hasGPSdata)
            hasGPSdata = valid;
        })

        console.log(hasGPSdata)
    }

    const validateFileSize = function(fileSizeKB,fileSizeLimitKB){
        return (fileSizeKB > fileSizeLimitKB)
    }

    const validateFileExtension = function(fileExtension,acceptableFileExtensionsArray){
        return (acceptableFileExtensionsArray.includes(fileExtension))
    }

    return{
        validateFileSize: validateFileSize,
        validateFileExtension: validateFileExtension,
        validateGPSData: validateGPSData
    }
})();

export default ValidateHandler;