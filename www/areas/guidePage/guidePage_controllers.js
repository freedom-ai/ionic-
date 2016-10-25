// 引导页控制器模块
angular.module('guidePage.controllers', [])

  .controller('GuidePageCtrl',['$scope', '$state','$ionicHistory', function ($scope, $state,$ionicHistory) {

    // 引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });
    $scope.fun_goHome=function(){
      $state.go('tab.home');
    }
    // 给开始体验按钮加点击事件
    //document.getElementById("close").addEventListener('click', function(event) {
    //  localStorage["isFirst"]=false;
    //  $state.go("indexTab.home");
    //}, false);

  }]);
