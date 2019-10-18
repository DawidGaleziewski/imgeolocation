//Module getting the geolocation of the image
    //Function returning image geolocation
    const ImageGeolocationHandler = function(imgHTMLElement, callback){
        console.log('start')
        //Helper function returning longitude and latitude as a float
        const toDecimal = function (number) {
            return number[0].numerator + number[1].numerator /
                (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
        };
    
        //function accepting the image and callback returning the data
        EXIF.getData(imgHTMLElement, function(){

            let longitude = toDecimal(EXIF.getTag(this,'GPSLongitude'));
            let latitude = toDecimal(EXIF.getTag(this, 'GPSLatitude')); 
            
            const longLat = {
                longitude: longitude,
                latitude: latitude
            }   
            
            console.log(longLat)
            callback(longLat)
        })
    }

//Modeule handling image upload and getting all information
const UploadFileHandler = (function(){



    function singleImageTemplate(fileObject){
        //Create DOM elements
        const pictureInfoList = document.createElement('ul');
            const imageMiniature = document.createElement('img');
            const fileName = document.createElement('li');
            const fileExtension = document.createElement('li');
            const fileSize = document.createElement('li');
            const removeButton = document.createElement('li');

                ImageGeolocationHandler(imageMiniature, function(longLat){
                    console.log(longLat);
                })



        //Update DOM elements with data
        imageMiniature.src = URL.createObjectURL(fileObject);
        fileName.innerText = fileObject.name;
        fileExtension.innerText = fileObject.type;
        fileSize.innerText = fileObject.size;
        removeButton.innerText = 'remove item';

        //Update the parent list
        pictureInfoList.appendChild(imageMiniature);
        pictureInfoList.appendChild(fileName);
        pictureInfoList.appendChild(fileExtension);
        pictureInfoList.appendChild(fileSize);
        pictureInfoList.appendChild(removeButton);

        return pictureInfoList;
    }

    function imageUploadHandler(fileInput, outputContainer){
        //Add on change event handler to upload image to website
        fileInput.addEventListener('change', function(event){
            const fileInput = Array.from(event.target.files); 
            fileInput.forEach(function(file){
                //Create single uploaded image and add metadata    
                outputContainer.appendChild(singleImageTemplate(file));
            })
        })
    }
    
    return{
        UploadImage: imageUploadHandler
    }
})()


const UIinput = document.querySelector('#upload-file__image');
const UIoutput = document.querySelector('#upload-preview');
UploadFileHandler.UploadImage(UIinput, UIoutput);






const img1 = document.querySelector('img');
// ImageGeolocationHandler.getLongAndLat(img1, function(longLat){
//     console.log(longLat)
// })

