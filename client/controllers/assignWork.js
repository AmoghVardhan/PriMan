var app = angular.module("mainApp");

app.controller('assignWorkController', function($scope, $location,$rootScope, $http) {

  $scope.type = {
         category: 'prisoner'
       };

  $scope.assignW=function(){
    $http({
      url: '/assignW',
      method: 'post',
      data: {
        "type": $scope.type.category,
        "pgid": $scope.pgid,
        "did": $scope.did,
        "shift": $scope.shift
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
