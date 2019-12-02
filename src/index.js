// Styles
// console.log(L);
import './scss/index.scss';

require('leaflet-css');

// ###1. index.js
// - main app entry file ###

// ###2. UploadFileHandler.js
// - module handling file upload handling

// ###3. ImageGeolocationHandler
// -module handling EXIF api returning longitude and latitude information.

// ###4. AlertHandler.js
// -module handling alert display in case of failed validation

// ###5. ValidateHandler.js
// - module handling validation criteria: file size, file format, required EXIF data

// ###6. MapHandler.js
// - module handling the map api and actions like:
// adding markers, removing markers. changing current view

// ###7. DOMTemplateHandler
// Responsible for creating html elements/nodes in js, adding classes to them etc

// ## Imports ##
import UploadFileHandler from './javascript/modules/UploadFileHandler';
import MapHandler from './javascript/modules/MapHandler';

// ## Global variables
const UIinput = document.querySelector('#upload-file__image');
const UIoutput = document.querySelector('#upload-preview');

// ## Project start modules
// Handling images upload to the site
UploadFileHandler.uploadImage(UIinput, UIoutput);
UploadFileHandler.removeImage(UIoutput);
MapHandler.startMap();
