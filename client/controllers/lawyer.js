var app = angular.module("mainApp");

app.controller('lawyerController', function($scope, $location,$rootScope, $http) {


  $scope.meetReqLaw=function(){
    $http({
      url: '/meetReqLaw',
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
