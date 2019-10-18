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

        EXIF.getData(imageMiniature, function(){
            
            console.log( EXIF.getAllTags(this))
        })

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


//Testing exif
    //To do refactor below and extract to own module


var img1 = document.querySelector('.test-img')


var toDecimal = function (number) {
    return number[0].numerator + number[1].numerator /
        (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
};

function getExif() {
    EXIF.getData(img1, function() {
        var allMetaData = EXIF.getAllTags(this);
        var allMetaDataSpan = document.getElementById("allMetaDataSpan");

        var longitude = EXIF.getTag(this, 'GPSLongitude');
        var latitude = EXIF.getTag(this, 'GPSLatitude')

        console.log(toDecimal(longitude), toDecimal(latitude))
        // allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
    });
}

img1.addEventListener('click', getExif)