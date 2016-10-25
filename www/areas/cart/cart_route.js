angular.module('cart.route', ['cart.controllers'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'areas/cart/cart.html',
        controller: 'CartCtrl'
      })


  });
