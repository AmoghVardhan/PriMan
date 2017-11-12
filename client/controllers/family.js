var app = angular.module("mainApp");

app.controller('familyController', function($scope, $location,$rootScope, $http) {


  $scope.meetReqFam=function(fam){
    $http({
      url: '/meetReqFam',
      method: 'post',
      data: fam
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
