//###7. DOMTemplateHandler
    //Responsible for creating html elements/nodes in js, adding classes to them etc




import ImageGeolocationHandler from './ImageGeolocationHandler';
import MapHandler from './MapHandler';





const DOMTemplateHandler = (function(){
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
            fileGeoLocation.classList.add('collection-item');
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
                MapHandler.setMarker(longLat, fileObject.name);   
                
                //Adding data to button for easy removal of the object on map
                removeButton.setAttribute('name', `longlat#${longLat.longitude}#${longLat.latitude}`);
            });
    
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

    return{
        singleImageTemplate: singleImageTemplate
    }
})()


export default DOMTemplateHandler;
