/**
 * This is application entry file bootstraping all other modules
 */

import './scss/index.scss';
import MapHandler from './javascript/modules/MapHandler';

import UploadFileHandler from './javascript/modules/UploadFileHandler';
// const UploadFileHandler = require('./javascript/modules/UploadFileHandler');

require('leaflet-css');

/**
 * Input element for uploading images
 * @type {Element}
 */
const UIinput = document.querySelector('#upload-file__image');

/**
 * Container for outputing image cards
 * @type {Element}
 */
const UIoutput = document.querySelector('#upload-preview');

UploadFileHandler.uploadImage(UIinput, UIoutput);
UploadFileHandler.removeImage(UIoutput);
MapHandler.startMap();
