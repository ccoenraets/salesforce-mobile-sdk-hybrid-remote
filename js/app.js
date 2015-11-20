angular.module('starter', ['ionic', 'forceng', 'starter.controllers', 'config'])

    .run(function ($ionicPlatform, $state, force, forcengConfig) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            // Authenticate using Salesforce OAuth
            //force.login().then(function() {
            //    $state.go('app.contactlist');
            //});

          force.init(forcengConfig);

          if (forcengConfig.accessToken) {
            $state.go('app.contactlist');
          } else {
            force.login().then(function() {
                  $state.go('app.contactlist');
            });
          }

        });
    })

    .config(function ($stateProvider, $urlRouterProvider, baseURL) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: baseURL + "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.contactlist', {
                url: "/contactlist",
                views: {
                    'menuContent': {
                        templateUrl: baseURL + "templates/contact-list.html",
                        controller: 'ContactListCtrl'
                    }
                }
            })

            .state('app.contact', {
                url: "/contacts/:contactId",
                views: {
                    'menuContent': {
                        templateUrl: baseURL + "templates/contact.html",
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('app.edit-contact', {
                url: "/edit-contact/:contactId",
                views: {
                    'menuContent': {
                        templateUrl: baseURL + "templates/edit-contact.html",
                        controller: 'EditContactCtrl'
                    }
                }
            })

            .state('app.add-contact', {
                url: "/create-contact",
                views: {
                    'menuContent': {
                        templateUrl: baseURL + "templates/edit-contact.html",
                        controller: 'CreateContactCtrl'
                    }
                }
            })

            .state('app.accountlist', {
                url: "/accountlist",
                views: {
                    'menuContent': {
                        templateUrl: baseURL + "templates/account-list.html",
                        controller: 'AccountListCtrl'
                    }
                }
            })

            .state('app.account', {
                url: "/accounts/:accountId",
                views: {
                    'menuContent': {
                        templateUrl: baseURL + "templates/account.html",
                        controller: 'AccountCtrl'
                    }
                }
            });

    });
