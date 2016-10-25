//tab功能路由模块
angular.module('tabs.route', ['tabs.controllers'])

  .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {


    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,  // 抽象路由  父级
        templateUrl: 'areas/tab/tabs.html',
        controller:'TabsCtrl'
      })


  });
