var app = angular.module("mainApp");

app.controller('doctorController', function($scope, $location,$rootScope, $http) {
  alert('reached');
  $scope.meetReqDoc=function(){

    $http({
      url: '/meetReqDoc',
      method: 'post',
      data: {
        "pid": $scope.pid,
        "name": $scope.name
        //"medicalRecords": $scope.medicalRecords,
      }
    }).then(function(data) {
      if(data.data.success) {
        alert("Data Retrieved");
        $scope.medfill=data.data.result[0].medical_records;
        console.log(data.data.result[0]);
      }
      else {
        alert(data.data.message);
      }
    }, function(err){})
  }
});
