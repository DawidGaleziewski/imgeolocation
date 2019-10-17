const UploadFileHandler = (function(){

    function singleImageTemplate(fileObject){
        //Create DOM elements
        const pictureInfoList = document.createElement('ul');
            const imageMiniature = document.createElement('img');
            const fileName = document.createElement('li');
            const fileExtension = document.createElement('li');
            const fileSize = document.createElement('li');
            const removeButton = document.createElement('li');

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
        fileInput.addEventListener('change', function(event){
            const fileInput = Array.from(event.target.files); 
            fileInput.forEach(function(file){    
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

