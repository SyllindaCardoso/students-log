final project 

Start the project creating a folder 
- type on your terminal:
- npx create-react-app <name of the folder>
<!-- this also installs the yarn -->

Now you need to install UI 
- yarn add @material-ui/core

You now should also add the link to a font Robot 
because material ui was designed to use this font  
- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

If you want to use Icon component you have to add the Material icons font. 
- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

To use prebuilt SVG Material Icons, you have to install the icons package
- yarn add @material-ui/icons

To deploy the project to firebase you have to 
- firebase init
  - firebase hosting
  - ? What do you want to use as your public directory? build
  - Configure as a single-page app (rewrite all urls to /index.html)? Yes
  - File build/index.html already exists. Overwrite? Yes
- yarn build 
- firebase deploy

this is url
this is the firebase console - hosting 
Project Console: https://console.firebase.google.com/project/students-log/overview

web address
Hosting URL: https://students-log.firebaseapp.com
