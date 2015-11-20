# Salesforce Mobile SDK Hybrid Remote

### Create the Visualforce Page

1. In Setup, create a static resource named IonicContacts. Upload [this file](https://github.com/ccoenraets/salesforce-mobile-sdk-hybrid-remote/archive/master.zip).

1. Create a Visualforce Page named IonicContacts defined as follows:

  ```
  <apex:page showHeader="false" sidebar="false" standardStylesheets="false" docType="html-5.0"
             applyHtmlTag="false" applyBodyTag="false">
  
  <html>
  <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"/>
      <title>Contacts</title>
      <link href="{!URLFOR($Resource.IonicConference, 'lib/ionic/css/ionic.css')}" rel="stylesheet"/>
  </head>
  
  <body ng-app="starter">
      <ion-nav-view></ion-nav-view>
      <script src="{!URLFOR($Resource.IonicConference, 'lib/ionic/js/ionic.bundle.js')}"></script>
    <script>
          angular.module('config', [])
            .constant('forcengConfig', {accessToken: "{!$Api.Session_ID}", useProxy:false})
            .constant('baseURL', "{!URLFOR($Resource.IonicConference, '/')}");
    </script>    
      <script src="{!$Resource.forceng}"></script>
      <script src="{!URLFOR($Resource.IonicConference, 'js/app.js')}"></script>
      <script src="{!URLFOR($Resource.IonicConference, 'js/controllers.js')}"></script>
  </body>
  
  </html>    
  </apex:page>
  ```

1. Click Preview to test the page in the browser.


### Creating the Hybrid Remote App

1. Install Cordova and the Force.com Mobile SDK for the platform of your choice. For example, for iOS:

  ```
  npm install -g cordova@4 forceios
  ```

  On a Mac, you may have to use sudo:

  ```
  sudo npm install -g cordova@4 forceios
  ```

1. Create a new mobile application:

  ```
  forceios create
  ```

  Answer the prompts as follows (adjust the company id, organization name, and start page as needed):
  
  ```
  Enter your application type (native, hybrid_remote, or hybrid_local): hybrid_remote
  Enter your application name: HybridRemoteDemo
  Enter the output directory for your app (defaults to the current directory): 
  Enter the package name for your app (com.mycompany.my_app): com.mycompany.myapp
  Enter your organization name (Acme, Inc.): Acme
  Enter the start page for your app (only applicable for hybrid_remote apps): https://na24.visual.force.com/apex/IonicContacts
  Enter your Connected App ID (defaults to the sample app's ID): 
  Enter your Connected App Callback URI (defaults to the sample app's URI): 
  ```

  > For a production application, you should create a Connected App in Salesforce and provide your own Connected App ID and Callback URI.

1. Navigate (cd) to the project directory:

  ```
  cd HybridRemoteDemo
  ```

1. Add some useful Cordova plugins (optional):

  ```
  cordova plugin add org.apache.cordova.console
  cordova plugin add org.apache.cordova.statusbar
  ```

1. Build the project:

  ```
  cordova build
  ```

1. Run the project. For example, for iOS, open the project (platforms/ios/contact-force.xcodeproj) in Xcode and run it in the emulator or on your iOS device.