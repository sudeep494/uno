# Hybrid HTML5 App
This project provides basic HTML5 app code written using Angular and Bootstrap with build & configuration setup for web, mobile and desktop deploys using Cordova and Electron. This project uses Angular but it can be replaced with any frontend framework of choice such as Vue or React

## dev setup
1. clone this project
2. run `npm install` to install all app and dev dependencies
3. run `ng serve` to live-serve it locally on `http://localhost:4200/`

## web deploys
- build the app `ng build --prod --base-href "https://sudeep494.github.io/uno/"`
- build with `--aot false` if you encounter any AOT compilation issue
- don't commit your dist folder if build is NOT done locally (builds are currently done locally.. i.e. you will need to commit dist folder)
- run command `ngh` to deploy to github pages (ngh is alias for angular-github-pages-cli)
- githubpages is for demo purpose only... not recommended for prod use
- app should now be deployed to https://sudeep494.github.io/uno/


## mobile deploys (android)
- download and install either Android SDK or Android Development Studio (recommended)
- set your ANDROID_HOME path to the Android SDK
- signup for Google Play Developer Account (optional if not deploying to google play store)
- run `cordova add platform android`
- to deploy to device, plug in your device and run `cordova run android`
- to publish to google play store, follow instructions in this link
https://haensel.pro/apache-cordova/cordova-create-a-signed-release-apk-easy-howto to create a signed release to prevent tampering of the release file.
- make sure to set longer validity period (eg: use `-validity 100000`  when creating the key, default is 90 days only which is not accepted by google play)
- run `cordova build android --release`
- this generates a signed .apk file in the release folder
- upload and publish this signed .apk file in google play store
- wait for approval from Google

## mobile deploys (ios)
- download and install X-Code
- signup for AppleID (paid account if you wish to publish to App Store)
- run `cordova add platform ios`
- to deploy to device, start X-Code and then plug in your device.
- select the device in X-Code and select the correct OS version.
- run `cordova run ios`
- make sure to allow DeveloperApps in general->settings->device-management
- check back later for instructions on publishing to app store

## desktop deploys (mac & windows)
- electron and electron-packager should already be installed if you ran `npm install` earlier
- run `npm run electron-build`
- for windows app, run `electron-packager . --overwrite --platform=win32 --icon=src/assets/win-logo.ico --out=electron-builds`
- for mac app, run `electron-packager . --overwrite --platform=darwin --icon=src/assets/mac-logo.icns --out=electron-builds`
- the app will be published to electron-builds folder, ready to use
- check back later for instruction on publishing the desktop apps to windows and mac marketplace
