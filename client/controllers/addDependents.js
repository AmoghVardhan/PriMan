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
        "phoneNo": $scope.phoneNo

      }
    }).then(function(data) {
      if(data.data.success) {
        alert("Dependent added successfully");
      }
      else {
        // alert(data.data.message);
        alert("Please enter all the details");
      }
    }, function(err){})
  }
});
