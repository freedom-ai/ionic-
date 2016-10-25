angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    // 添加单选按钮
    $scope.obj_radioData=['h5','c3','js'];
    // ng-model的绑定对象
    $scope.obj_choice={
      choice:""
    };
  //添加复选按钮
    $scope.obj_checkboxData=[
      {name:'上午', isSelect:true},
      {name:'中午', isSelect:false},
      {name:'下午', isSelect:false}
    ];
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
