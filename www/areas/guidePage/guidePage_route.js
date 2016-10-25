//引导页路由模块
angular.module('guidePage.route', [ 'guidePage.controllers', 'guidePage.services'])

  .config(function($stateProvider) {


    $stateProvider


      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'areas/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
        //views: {
        //  'tab-dash': {
        //    templateUrl: 'areas/guidePage/guidePage.html',
        //    controller: 'GuidePageCtrl'
        //  }
        //}
      })

  });
