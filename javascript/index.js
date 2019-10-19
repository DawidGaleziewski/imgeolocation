import UploadFileHandler from './modules/UploadFileHandler';
import MapHandler from './modules/MapHandler';

const UIinput = document.querySelector('#upload-file__image');
const UIoutput = document.querySelector('#upload-preview');
UploadFileHandler.uploadImage(UIinput, UIoutput);
UploadFileHandler.removeImage(UIoutput);


//Map
MapHandler.startMap();
MapHandler.setMarker();
MapHandler.setView()
