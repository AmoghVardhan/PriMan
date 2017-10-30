var app = angular.module("mainApp");

app.controller('doctorController', function($scope, $location,$rootScope, $http) {
  $scope.meetReqDoc=function(){
    $http({
      url: '/meetReqDoc',
      method: 'post',
      data: {
        "pid": $scope.pid,
        "name": $scope.name,
        "medicalRecords": $scope.medicalRecords,        
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
