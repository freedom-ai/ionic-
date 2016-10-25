//主页路由模块
angular.module('home.route', [ 'home.controllers', 'home.services'])

  .config(function($stateProvider) {


    $stateProvider


      .state('tab.home', {
        url: '/home',
        views: {                               // 主页需要抽象的子路由跳转
          'tab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

  });
