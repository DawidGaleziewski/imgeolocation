import ImageGeolocationHandler from './ImageGeolocationHandler';
import ValidateHandler from './ValidateHandler';
import AlertHandler from './AlertHandler';
import MapHandler from './MapHandler';
import DOMTemplateHandler from './DOMTemplateHandler';

/**
 * Handling adding images to app and removing those images
 * @module UploadFileHandler
 */
const UploadFileHandler = (() => {
  /**
   * Takes care of uploading files to the app
   * @param {Element} fileInput - input element used for uploading files
   * @param {Element} outputContainer -container that will be injected with DOM elements containing image information
   */
  const imageUploadHandler = (fileInput, outputContainer) => {
    fileInput.addEventListener('change', event => {
      const uploadedFiles = Array.from(event.target.files);
      uploadedFiles.forEach(file => {
        ValidateHandler.validateImage(file, errors => {
          const { hasGPSData, goodFileSize, validFileExtension } = errors;
          if (hasGPSData.isCorrect && goodFileSize.isCorrect && validFileExtension.isCorrect) {
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

  /**
   * Removing images from DOM
   * @param {Element} imagesContainer - container with image that will be deleted
   * @returns void
   */
  const removeImageHandler = imagesContainer => {
    imagesContainer.addEventListener('click', event => {
      const {
        target: { classList },
        target: {
          parentElement: {
            parentElement: { parentElement }
          }
        }
      } = event;
      if (classList.contains('btn-remove')) {
        const card = parentElement;

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
// module.exports = UploadFileHandler;
