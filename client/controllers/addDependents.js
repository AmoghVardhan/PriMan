var app = angular.module("mainApp");

app.controller('addDependentsController', function($scope, $location,$rootScope, $http) {


  $scope.addDep=function(){

    $http({
      url: '/addDep',
      method: 'post',
      data: {
        "name": $scope.name,
        "pid": $scope.pid,
        "relation": $scope.relation,
        "phoneNo": $scope.phoneNo,
        "super":$scope.super

      }
    }).then(function(data) {
      if(data.data.success) {
        alert("Dependent added successfully");
      }
      else {
        // alert(data.data.message);
        alert("Please enter valid details");
      }
    }, function(err){})
  }
});
