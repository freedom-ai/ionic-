//分类页路由模块
angular.module('category.route', [ 'category.controllers', 'category.services'])

  .config(function($stateProvider) {


    $stateProvider


      .state('tab.category', {
        url: '/category',
        views: {                               // 主页需要抽象的子路由跳转
          'tab-category': {
            templateUrl: 'areas/category/category.html',
            controller: 'CategoryCtrl'
          }
        }
      })

  });
