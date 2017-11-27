var app = angular.module("mainApp");

app.controller('doctorController', function($scope, $location,$rootScope, $http) {
  //alert('reached');
  $scope.show=false;
  $scope.meetReqDoc=function(){

    $http({
      url: '/meetReqDoc',
      method: 'post',
      data: {
        "pid": $scope.pid
        //"name": $scope.name
        //"medicalRecords": $scope.medicalRecords,
      }
    }).then(function(data) {
      if(data.data.success) {
        alert("Data Retrieved");
        console.log(data.data.result[0]);
        $scope.show=true;
        $scope.medfill=data.data.result[0].Medical_records;
        $scope.pname=data.data.result[0].Name;

      }
      else {
        alert("Enter valid prisoner id");
      }
    }, function(err){})
  }
});
