!function(e){function t(t){for(var a,i,c=t[0],l=t[1],d=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=l;o.push([3,1]),n()}([,function(e,t,n){var a,r,o=n(0),i={validateImage:function(e,t){var n={hasGPSData:{isCorrect:!1,description:"Image uploaded does not have EXIF metadata on geolocation"},goodFileSize:{isCorrect:!1,description:"Image uploaded is to big"},validFileExtension:{isCorrect:!1,description:"Bad file format"}};!function(e,t){o.getData(e,(function(){var n=!!o.getTag(e,"GPSLongitude");t(n)}))}(e,(function(o){n.hasGPSData.isCorrect=o,n.goodFileSize.isCorrect=a(e.size,1e3),n.validFileExtension.isCorrect=r(e.type,["image/jpeg"]),t(n)}))},validateFileSize:a=function(e,t){return e/1e3<=t},validateFileExtension:r=function(e,t){return t.includes(e)}};e.exports=i},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(2);var a,r,o,i=n(0),c=(a=function(e){return e[0].numerator+e[1].numerator/(60*e[1].denominator)+e[2].numerator/(3600*e[2].denominator)},{returnLongLat:function(e,t){i.getData(e,(function(){var n=a(i.getTag(e,"GPSLongitude")),r=a(i.getTag(e,"GPSLatitude"));t({longitude:n,latitude:r})}))}}),l=n(1),d=n.n(l),s={displayError:function(e,t,n){Object.keys(e).filter((function(t){return!1===e[t].isCorrect})).map((function(t){return e[t].description})).forEach((function(e){var a=document.createElement("div");a.className="card alert";var r=document.createElement("span");r.className="error-text",r.innerText="Error: ".concat(e),a.appendChild(r),t.prepend(a),setTimeout((function(){t.removeChild(a)}),n)}))}},u=(r=L.map("mapid").setView([51.505,-.09],13),o=[],{setMarker:function(e,t){o.push({latitude:e.latitude,longitude:e.longitude,objectReference:new L.marker([e.latitude,e.longitude]).bindPopup("Picture name: ".concat(t)).addTo(r)})},startMap:function(){L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1IjoiZGF3aWRnYWxlemlld3NraWRldiIsImEiOiJjazF5MmtrenUwY21mM29uc3R2NWY2eG80In0.tnl8PPwx5p-xDKirHF6O2Q"}).addTo(r)},setView:function(e){r.panTo(new L.LatLng(e.latitude,e.longitude))},removeButtonOnClickHandler:function(e){var t,n=e.getAttribute("name").split("#"),a={longitude:parseFloat(n[1]),latitude:parseFloat(n[2])};t=a,o.forEach((function(e,n){console.log(e.longitude,t.longitude),e.longitude===t.longitude&&(r.removeLayer(e.objectReference),o.splice(n,1),console.log("bang",o))}))}}),p={singleImageTemplate:function(e){var t=document.createElement("div");t.classList.add("col"),t.classList.add("m4");var n=document.createElement("div");n.classList.add("card");var a=document.createElement("div");a.classList.add("card-image");var r=document.createElement("span");r.classList.add("card-title");var o=document.createElement("div");o.classList.add("card-content");var i=document.createElement("div");i.classList.add("card-action");var l=document.createElement("ul");l.classList.add("collection");var d=document.createElement("img"),s=document.createElement("li");s.classList.add("collection-item");var p=document.createElement("li");p.classList.add("collection-item");var m=document.createElement("li");m.classList.add("collection-item");var f=document.createElement("li");return d.src=URL.createObjectURL(e),r.innerText="File name: ".concat(e.name),s.innerText="File extension: ".concat(e.type),p.innerText="File size: ".concat(e.size),f.innerText="remove item",f.classList.add("btn-remove"),f.classList.add("btn"),f.classList.add("red"),d.onload=function(){c.returnLongLat(d,(function(t){m.innerText="Picture was taken on long/lat: ".concat(t.longitude,", ").concat(t.latitude),u.setView(t),u.setMarker(t,e.name),f.setAttribute("name","longlat#".concat(t.longitude,"#").concat(t.latitude))}))},a.appendChild(d),a.appendChild(r),l.appendChild(a),l.appendChild(s),l.appendChild(p),l.appendChild(m),i.appendChild(f),o.appendChild(l),n.appendChild(a),n.appendChild(o),n.appendChild(i),t.appendChild(n),t}},m={uploadImage:function(e,t){e.addEventListener("change",(function(e){Array.from(e.target.files).forEach((function(e){d.a.validateImage(e,(function(n){n.hasGPSData.isCorrect&&n.goodFileSize.isCorrect&&n.validFileExtension.isCorrect?t.appendChild(p.singleImageTemplate(e)):s.displayError(n,document.querySelector(".container"),6e3)}))}))}))},removeImage:function(e){e.addEventListener("click",(function(e){if(e.target.classList.contains("btn-remove")){var t=e.target.parentElement.parentElement.parentElement;u.removeButtonOnClickHandler(e.target),t.remove()}}))}},f=document.querySelector("#upload-file__image"),g=document.querySelector("#upload-preview");m.uploadImage(f,g),m.removeImage(g),u.startMap()}]);