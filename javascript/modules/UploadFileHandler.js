//Modeule handling image upload and getting all information
import ImageGeolocationHandler from './ImageGeolocationHandler';
import ValidateHandler from './ValidateHandler';
import AlertHandler from './AlertHandler';
import MapHandler from './MapHandler';

const UploadFileHandler = (function(ImageGeolocationHandler){
    
    function singleImageTemplate(fileObject){ 
        //Materializecss DOM elements
        const sizeDiv = document.createElement('div');
            sizeDiv.classList.add('col');
            sizeDiv.classList.add('m4');
        const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            // cardDiv.classList.add('col');
        const cardImageDiv = document.createElement('div');
            cardImageDiv.classList.add('card-image');
        const cardTitleSpan = document.createElement('span');
            cardTitleSpan.classList.add('card-title');
        const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
        const cardAction = document.createElement('div');
            cardAction.classList.add('card-action');

        //Create DOM elements with data
        const pictureInfoList = document.createElement('ul');
            pictureInfoList.classList.add('collection');
        const image = document.createElement('img');
        const fileExtension = document.createElement('li');
            fileExtension.classList.add('collection-item')
        const fileSize = document.createElement('li');
            fileSize.classList.add('collection-item')
        let fileGeoLocation = document.createElement('li');
            fileGeoLocation.classList.add('collection-item')
        const removeButton = document.createElement('li');

        //Update DOM elements with data
        image.src = URL.createObjectURL(fileObject);
        cardTitleSpan.innerText = `File name: ${fileObject.name}`;
        fileExtension.innerText = `File extension: ${fileObject.type}`;
        fileSize.innerText = `File size: ${fileObject.size}`;
        removeButton.innerText = 'remove item';
            removeButton.classList.add('btn-remove');
            removeButton.classList.add('btn');
            removeButton.classList.add('red');
        
        image.onload = function(){
            ImageGeolocationHandler.returnLongLat(image, function(longLat){
                fileGeoLocation.innerText = `Picture was taken on long/lat: ${longLat.longitude}, ${longLat.latitude}`;
                MapHandler.setView(longLat);
                MapHandler.setMarker(longLat);
            })
        }

        //Update the parent list
                    cardImageDiv.appendChild(image); 
                    cardImageDiv.appendChild(cardTitleSpan);
                pictureInfoList.appendChild(cardImageDiv);
                pictureInfoList.appendChild(fileExtension);
                pictureInfoList.appendChild(fileSize);
                pictureInfoList.appendChild(fileGeoLocation);
                cardAction.appendChild(removeButton);
            cardContent.appendChild(pictureInfoList);
        cardDiv.appendChild(cardImageDiv)
        cardDiv.appendChild(cardContent)
        cardDiv.appendChild(cardAction)
        sizeDiv.appendChild(cardDiv)

        return sizeDiv;
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
                        //Add marker to map


                    } else {
                        AlertHandler.displayError(errors, document.querySelector('.container'), 6000)
                    }
                })
            })
        })
    }

    function removeImageHandler(imagesContainer){
        imagesContainer.addEventListener('click', function(event){
            if(event.target.classList.contains("btn-remove")){
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