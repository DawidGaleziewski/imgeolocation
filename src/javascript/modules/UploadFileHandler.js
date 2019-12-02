// ###2. UploadFileHandler.js
// - module handling file upload handling
// #Functions
// -imageUploadHandle -uploading file to the site
// -removeImageHandler - removing image and metadata

import ImageGeolocationHandler from './ImageGeolocationHandler';
import ValidateHandler from './ValidateHandler';
import AlertHandler from './AlertHandler';
import MapHandler from './MapHandler';
import DOMTemplateHandler from './DOMTemplateHandler';

const UploadFileHandler = (() => {
  const imageUploadHandler = (fileInput, outputContainer) => {
    // Add on change event handler to upload image to website
    fileInput.addEventListener('change', event => {
      const uploadedFiles = Array.from(event.target.files);
      uploadedFiles.forEach(file => {
        ValidateHandler.validateImage(file, errors => {
          if (
            errors.hasGPSData.isCorrect &&
            errors.goodFileSize.isCorrect &&
            errors.validFileExtension.isCorrect
          ) {
            // Create single uploaded image and add metadata
            outputContainer.appendChild(DOMTemplateHandler.singleImageTemplate(file));
            // Add marker to map
          } else {
            AlertHandler.displayError(errors, document.querySelector('.container'), 6000);
          }
        });
      });
    });
  };

  const removeImageHandler = imagesContainer => {
    imagesContainer.addEventListener('click', event => {
      if (event.target.classList.contains('btn-remove')) {
        const card = event.target.parentElement.parentElement.parentElement;

        // Remove marker from map
        MapHandler.removeButtonOnClickHandler(event.target);

        // Remove picture card from DOM
        card.remove();
      }
    });
  };

  return {
    uploadImage: imageUploadHandler,
    removeImage: removeImageHandler
  };
})(ImageGeolocationHandler);

export default UploadFileHandler;
