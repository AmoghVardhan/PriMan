var app = angular.module("mainApp");

app.controller('familyController', function($scope, $location,$rootScope, $http) {


  $scope.meetReq=function(){
    $http({
      url: '/meetReq',
      method: 'post',
      data: {
        "name": $scope.name,
        "reason": $scope.reason,
        "pid": $scope.pid,
        "pname": $scope.pname
      }
    }).then(function(data) {
      if(data.data.success) {
        alert("Dependent added successfully");
      }
      else {
        alert(data.data.message);
      }
    }, function(err){})
  }
});
