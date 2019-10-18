//Modeule handling image upload and getting all information
import ImageGeolocationHandler from './ImageGeolocationHandler';

const UploadFileHandler = (function(ImageGeolocationHandler){
    
    function singleImageTemplate(fileObject){             
        //Create DOM elements
        const pictureInfoList = document.createElement('ul');
            const imageMiniature = document.createElement('img');
            const fileName = document.createElement('li');
            const fileExtension = document.createElement('li');
            const fileSize = document.createElement('li');
            let fileGeoLocation = document.createElement('li');
            const removeButton = document.createElement('li');

        //Update DOM elements with data
        imageMiniature.src = URL.createObjectURL(fileObject);
        fileName.innerText = fileObject.name;
        fileExtension.innerText = fileObject.type;
        fileSize.innerText = fileObject.size;
        removeButton.innerText = 'remove item';
            removeButton.classList.add('btn-remove')
        
        imageMiniature.onload = function(){
            ImageGeolocationHandler.returnLongLat(imageMiniature, function(longLat){
                console.log(longLat.longitude)
                fileGeoLocation.innerText = `Picture was taken on longitude: ${longLat.longitude}, and latitude: ${longLat.latitude}`
            })
        }

        //Update the parent list
        pictureInfoList.appendChild(imageMiniature);
        pictureInfoList.appendChild(fileName);
        pictureInfoList.appendChild(fileExtension);
        pictureInfoList.appendChild(fileSize);
        pictureInfoList.appendChild(fileGeoLocation);
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

    function removeImageHandler(imagesContainer){
        imagesContainer.addEventListener('click', function(event){
            console.log(event.target.className)
            if(event.target.className === "btn-remove"){
                event.target.parentElement.remove()
            }
        })
    }
    
    return{
        uploadImage: imageUploadHandler,
        removeImage: removeImageHandler,
        singleImageTemplate: singleImageTemplate
    }
})(ImageGeolocationHandler)


export default UploadFileHandler;