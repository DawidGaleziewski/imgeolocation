# ImGeolocation

# App purpose

Application purpose is to show geolocation of uploaded files using EXIF metadata.

# Developer environment setup

## clone repository and run:

```
npm install
```

## run gulp

```
gulp watch
```

gulp is used in the project for:

- scss preprocessing, minifying, bundling, auto prefixing the code
- javascript bunding, minifying and babel
- browserstack

## If you are having issues with "gulp watch" on linux run this command:

```
 echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

This project number of files tracked may be too big. Above command will fix the issue

# App deployment

- all files needed for running web app are present in the 'app' directory. That includes index.html, index.min.js and index.css.
- app folder contains also map files for better troubleshooting of the preprocessed files.

# Project architecture and rationale:

Project is written in html, css, javaScript

## Styling:

-Styling is mostly done by materialize framework:
https://materializecss.com/
-Some styling adjustments to the project are done by scss

## Logic/javaScript

- Application is written in pure javaScript
- The project uses module pattern (IIFE exports), due to this fact functions are written in es5 and not es6 standard.
- Still, some es6 are used due to their benefit to the code i.e const

# JavAscript modules structure:

- 1. index.js
     //- main app entry file ###

- 2. UploadFileHandler.js
     //- module handling file upload handling

- 3. ImageGeolocationHandler
     //-module handling EXIF api returning longitude and latitude information.

- 4. AlertHandler.js
     //-module handling alert display in case of failed validation

- 5. ValidateHandler.js
     //- module handling validation criteria: file size, file format, required EXIF data

- 6. MapHandler.js
     //- module handling the map api and actions like: adding markers, removing markers. changing current view

- 7. DOMTemplateHandler
     //Responsible for creating html elements/nodes in js, adding classes to them etc
