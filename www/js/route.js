// 路由模块，控制全局页面跳转
angular.module('route', [
  'tabs.route','home.route','guidePage.route','category.route',
  'goodsList.route','details.route','cart.route','account.route'
  ])

  .config(function($stateProvider, $urlRouterProvider) {

    if(localStorage["isFirst"])
    {
      $urlRouterProvider.otherwise('/tab/home');
    }
    else {
      $urlRouterProvider.otherwise('/guidePage');
    }

  });
