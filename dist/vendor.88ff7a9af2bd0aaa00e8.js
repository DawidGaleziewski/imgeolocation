(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,r){var o;(function(){var r=!1,i=function(e){return e instanceof i?e:this instanceof i?void(this.EXIFwrapped=e):new i(e)};e.exports&&(t=e.exports=i),t.EXIF=i;var a=i.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},s=i.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},l=i.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},u=i.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},c=i.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function d(e){return!!e.exifdata}function f(e,t){function n(n){var o=g(n);e.exifdata=o||{};var a=function(e){var t=new DataView(e);r&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n=2,o=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;n<o;){if(i(t,n)){var a=t.getUint8(n+7);a%2!=0&&(a+=1),0===a&&(a=4);var s=n+8+a,l=t.getUint16(n+6+a);return p(e,s,l)}n++}}(n);if(e.iptcdata=a||{},i.isXmpEnabled){var s=function(e){if(!("DOMParser"in self))return;var t=new DataView(e);r&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;var n=2,o=e.byteLength,i=new DOMParser;for(;n<o-4;){if("http"==P(t,n,4)){var a=n-1,s=t.getUint16(n-2)-1,l=P(t,a,s),u=l.indexOf("xmpmeta>")+8,c=(l=l.substring(l.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;return l=l.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(c),y(i.parseFromString(l,"text/xml"))}n++}}(n);e.xmpdata=s||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src))n(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,o=new ArrayBuffer(r),i=new Uint8Array(o),a=0;a<r;a++)i[a]=n.charCodeAt(a);return o}(e.src));else if(/^blob\:/i.test(e.src)){(a=new FileReader).onload=function(e){n(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(e.src,(function(e){a.readAsArrayBuffer(e)}))}else{var o=new XMLHttpRequest;o.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(o.response),o=null},o.open("GET",e.src,!0),o.responseType="arraybuffer",o.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var a;(a=new FileReader).onload=function(e){r&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},a.readAsArrayBuffer(e)}}function g(e){var t=new DataView(e);if(r&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return r&&console.log("Not a valid JPEG"),!1;for(var n,o=2,i=e.byteLength;o<i;){if(255!=t.getUint8(o))return r&&console.log("Not a valid marker at offset "+o+", found: "+t.getUint8(o)),!1;if(n=t.getUint8(o+1),r&&console.log(n),225==n)return r&&console.log("Found 0xFFE1 marker"),F(t,o+4,t.getUint16(o+2));o+=2+t.getUint16(o+2)}}var m={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function p(e,t,n){for(var r,o,i,a,s=new DataView(e),l={},u=t;u<t+n;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(a=s.getUint8(u+2))in m&&((i=s.getInt16(u+3))+5,o=m[a],r=P(s,u+5,i),l.hasOwnProperty(o)?l[o]instanceof Array?l[o].push(r):l[o]=[l[o],r]:l[o]=r),u++;return l}function h(e,t,n,o,i){var a,s,l,u=e.getUint16(n,!i),c={};for(l=0;l<u;l++)a=n+12*l+2,!(s=o[e.getUint16(a,!i)])&&r&&console.log("Unknown tag: "+e.getUint16(a,!i)),c[s]=S(e,a,t,n,i);return c}function S(e,t,n,r,o){var i,a,s,l,u,c,d=e.getUint16(t+2,!o),f=e.getUint32(t+4,!o),g=e.getUint32(t+8,!o)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!o);for(i=f>4?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint8(i+l);return a;case 2:return P(e,i=f>4?g:t+8,f-1);case 3:if(1==f)return e.getUint16(t+8,!o);for(i=f>2?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint16(i+2*l,!o);return a;case 4:if(1==f)return e.getUint32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getUint32(g+4*l,!o);return a;case 5:if(1==f)return u=e.getUint32(g,!o),c=e.getUint32(g+4,!o),(s=new Number(u/c)).numerator=u,s.denominator=c,s;for(a=[],l=0;l<f;l++)u=e.getUint32(g+8*l,!o),c=e.getUint32(g+4+8*l,!o),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==f)return e.getInt32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+4*l,!o);return a;case 10:if(1==f)return e.getInt32(g,!o)/e.getInt32(g+4,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+8*l,!o)/e.getInt32(g+4+8*l,!o);return a}}function P(e,t,r){var o="";for(n=t;n<t+r;n++)o+=String.fromCharCode(e.getUint8(n));return o}function F(e,t){if("Exif"!=P(e,t,4))return r&&console.log("Not valid EXIF data! "+P(e,t,4)),!1;var n,o,i,d,f,g=t+6;if(18761==e.getUint16(g))n=!1;else{if(19789!=e.getUint16(g))return r&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(g+2,!n))return r&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var m=e.getUint32(g+4,!n);if(m<8)return r&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(g+4,!n)),!1;if((o=h(e,g,g+m,s,n)).ExifIFDPointer)for(i in d=h(e,g,g+o.ExifIFDPointer,a,n)){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":d[i]=c[i][d[i]];break;case"ExifVersion":case"FlashpixVersion":d[i]=String.fromCharCode(d[i][0],d[i][1],d[i][2],d[i][3]);break;case"ComponentsConfiguration":d[i]=c.Components[d[i][0]]+c.Components[d[i][1]]+c.Components[d[i][2]]+c.Components[d[i][3]]}o[i]=d[i]}if(o.GPSInfoIFDPointer)for(i in f=h(e,g,g+o.GPSInfoIFDPointer,l,n)){switch(i){case"GPSVersionID":f[i]=f[i][0]+"."+f[i][1]+"."+f[i][2]+"."+f[i][3]}o[i]=f[i]}return o.thumbnail=function(e,t,n,r){var o=function(e,t,n){var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)}(e,t+n,r);if(!o)return{};if(o>e.byteLength)return{};var i=h(e,t,t+o,u,r);if(i.Compression)switch(i.Compression){case 6:if(i.JpegIFOffset&&i.JpegIFByteCount){var a=t+i.JpegIFOffset,s=i.JpegIFByteCount;i.blob=new Blob([new Uint8Array(e.buffer,a,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",i.Compression)}else 2==i.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return i}(e,g,m,n),o}function b(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var i=e.childNodes.item(o),a=i.nodeName;if(null==t[a])t[a]=b(i);else{if(null==t[a].push){var s=t[a];t[a]=[],t[a].push(s)}t[a].push(b(i))}}return t}function y(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),o=r.attributes;for(var i in o){var a=o[i],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var u=r.nodeName;if(void 0===t[u])t[u]=b(r);else{if(void 0===t[u].push){var c=t[u];t[u]=[],t[u].push(c)}t[u].push(b(r))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}i.enableXmp=function(){i.isXmpEnabled=!0},i.disableXmp=function(){i.isXmpEnabled=!1},i.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(d(e)?t&&t.call(e):f(e,t),!0)},i.getTag=function(e,t){if(d(e))return e.exifdata[t]},i.getIptcTag=function(e,t){if(d(e))return e.iptcdata[t]},i.getAllTags=function(e){if(!d(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},i.getAllIptcTags=function(e){if(!d(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},i.pretty=function(e){if(!d(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},i.readFromBinaryFile=function(e){return g(e)},void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}).call(this)}]]);