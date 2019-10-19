//Modeule handling image upload and getting all information
import ImageGeolocationHandler from './ImageGeolocationHandler';
import ValidateHandler from './ValidateHandler';
import AlertHandler from './AlertHandler';

const UploadFileHandler = (function(ImageGeolocationHandler){
    
    function singleImageTemplate(fileObject){ 
        //Materializecss DOM elements
        const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
        const cardImageDiv = document.createElement('div');
            cardImageDiv.classList.add('card-image');
        const cardTitleSpan = document.createElement('span');
            cardTitleSpan.classList.add('card-title');
        const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

        //Create DOM elements with data
        const pictureInfoList = document.createElement('ul');
            // const imageMiniature = document.createElement('li');
            const image = document.createElement('img');
            const fileExtension = document.createElement('li');
            const fileSize = document.createElement('li');
            let fileGeoLocation = document.createElement('li');
            const removeButton = document.createElement('li');

        //Update DOM elements with data
        image.src = URL.createObjectURL(fileObject);
        cardTitleSpan.innerText = `File name: ${fileObject.name}`;
        fileExtension.innerText = `File extension: ${fileObject.type}`;
        fileSize.innerText = `File size: ${fileObject.size}`;
        removeButton.innerText = 'remove item';
            removeButton.classList.add('btn-remove')
        
        image.onload = function(){
            ImageGeolocationHandler.returnLongLat(image, function(longLat){
                fileGeoLocation.innerText = `Picture was taken on longitude: ${longLat.longitude}, and latitude: ${longLat.latitude}`
            })
        }

        //Update the parent list
                    cardImageDiv.appendChild(image); 
                    cardImageDiv.appendChild(cardTitleSpan);
                pictureInfoList.appendChild(cardImageDiv);
                pictureInfoList.appendChild(fileExtension);
                pictureInfoList.appendChild(fileSize);
                pictureInfoList.appendChild(fileGeoLocation);
                pictureInfoList.appendChild(removeButton);
            cardContent.appendChild(pictureInfoList);
        cardDiv.appendChild(cardImageDiv)
        cardDiv.appendChild(cardContent)

        return cardDiv;
    }

    function imageUploadHandler(fileInput, outputContainer){
        //Add on change event handler to upload image to website
        fileInput.addEventListener('change', function(event){
            const fileInput = Array.from(event.target.files); 
            fileInput.forEach(function(file){
                ValidateHandler.validateImage(file, function(errors){
                    console.log(errors)
                    if(errors.hasGPSData.isCorrect && errors.goodFileSize.isCorrect && errors.validFileExtension.isCorrect){
                        //Create single uploaded image and add metadata  
                        outputContainer.appendChild(singleImageTemplate(file));
                    } else {
                        AlertHandler.displayError(errors, document.querySelector('body'), 3000)
                    }
                })
            })
        })
    }

    function removeImageHandler(imagesContainer){
        imagesContainer.addEventListener('click', function(event){
            if(event.target.className === "btn-remove"){
                event.target.parentElement.parentElement.parentElement.remove()
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