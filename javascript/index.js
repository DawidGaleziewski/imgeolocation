import UploadFileHandler from './modules/UploadFileHandler';
import MapHandler from './modules/MapHandler';

const UIinput = document.querySelector('#upload-file__image');
const UIoutput = document.querySelector('#upload-preview');
UploadFileHandler.uploadImage(UIinput, UIoutput);
UploadFileHandler.removeImage(UIoutput);


//Map

// ["LOCATION_1", 50.01, 50], 
// ["LOCATION_2", 50.02, 50], 
// ["LOCATION_3", 50.03, 50]

MapHandler.startMap();
MapHandler.setMarker({longitude:50, latitude: 50});
MapHandler.setMarker({longitude:50.01, latitude: 50.02});
MapHandler.setMarker({longitude:50.02, latitude: 50.02});
MapHandler.setView({longitude:50, latitude: 50})
