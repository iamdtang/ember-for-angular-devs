var app = angular.module('ember-for-angular', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      controller: 'AboutController',
      controllerAs: 'about',
      templateUrl: 'templates/about.html',
      resolve: {
        reviews: function() {
          return [ 'review 1' ];
        }
      }
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html'
    })
    .state('contact.tech-support', {
      url: '/tech-support',
      templateUrl: 'templates/contact/tech-support.html'
    })
});

app.controller('AboutController', function(reviews) {
  this.reviews = reviews;
});
