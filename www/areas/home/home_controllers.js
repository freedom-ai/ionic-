// 主页控制器模块
angular.module('home.controllers', [])

  .controller('HomeCtrl',['$scope','$window', '$ionicScrollDelegate',function ($scope, $window,$ionicScrollDelegate) {

    getHeaderSlideData();
    headerChangeColor();
    goTop();
    // $on用来监听视图加载事件
    $scope.$on('$ionicView.afterEnter',function(){
      initHeaderSlide();
      initToutiaoSlide();
    });

    // 头部滚动条数据
    function getHeaderSlideData(){
      $scope.headerSlideData=[
        {
          alt:"双十一预热主场会",
          src:"img/home/home-headerSlide-1.jpg"
        },
        {
          alt:"11月11天家电低价不停歇",
          src:"img/home/home-headerSlide-2.jpg"
        },
        {
          alt:"家具盛典 好货提前抢",
          src:"img/home/home-headerSlide-3.jpg"
        },
        {
          alt:"IT抢券节",
          src:"img/home/home-headerSlide-4.jpg"
        },
        {
          alt:"潮流数码 双11爽购攻略",
          src:"img/home/home-headerSlide-5.jpg"
        }
      ];
    }
    // 初始化头部滚动条
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlider', {
        slidesPerView: 1,   //  前后各加一张slider
        paginationClickable: true, //是否允许点击分页器
        centeredSlides: true,
        autoplay: 2000, // 自动播放时间
        autoplayDisableOnInteraction: false,
        loop: true,// 是否循环播放
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        observer:true,//  修改swiper时  自动重新实例化
        observeParents:true


        //paginationClickable: true,
        //autoplay: 2000,
        //autoplayDisableOnInteraction: false,
        //loop: true,
        //// 如果需要分页器
        //pagination: '.swiper-pagination',
        //// 改变自动更新
        //observer:true,
        //observeParents:true
      });
    }
    // 初始化京东头条滚动条
    function initToutiaoSlide(){
      var toutiaoSwiper = new Swiper('#toutiaoSlider', {
        direction:'vertical',
        autoplay: 2000,
        loop: true
      });
    }

    // 改变头部搜索栏颜色
    function  headerChangeColor(){
      var bg=$window.document.getElementById('home-content');
      var newOpacity=0;
      bg.onscroll=function(e){
        if(this.scrollTop/300<.85){
          newOpacity=this.scrollTop/300;
        }
        $('#headerBar-bg').css('opacity',newOpacity);
      }
    }
    //回到顶部小按钮

    //$scope.goTop=function(){
    //  var bg=$window.document.getElementById('home-content');
    //  bg.scrollTop=0;
    //  //bg.addEventListener('scroll',function(){
    //  //  var bgTop=bg.scrollTop;
    //  //  if (bgTop>200){
    //  //          $('.back_top').css('opacity',1);
    //  //        }else{
    //  //          $('.back_top').css('opacity',0);
    //  //        }
    //  //})
    //
    //
    //  $ionicScrollDelegate.scrollTop(true);
    //}















    function goTop(){
      var bg=$window.document.getElementById('home-content');
      //var goTop=$window.document.getElementById('back_top');
      bg.addEventListener('scroll',function(){
        var top=bg.scrollTop;

        if (top>200){
          $('.back_top').css('opacity',1);
        }else{
          $('.back_top').css('opacity',0);
        }
        //此处gotop点击事件不响应
        //goTop.onclick = function(){
        //  bg.scrollTop = 0;
        //};
      },false);
      $scope.go=function(){
        $ionicScrollDelegate.scrollTop(true);
        bg.scrollTop=0;
      }
      //此处gotop点击事件不响应
      //goTop.onclick = function(){
      //  bg.scrollTop = 0;
      //};
      //换成bg点击才能用
      //bg.onclick = function(){
      //  bg.scrollTop = 0;
      //};
      //goTop.onclick=function(){
      //  $ionicScrollDelegate.scrollTop(true);
      //}
    }
  }]);
