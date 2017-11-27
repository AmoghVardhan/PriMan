var app = angular.module("mainApp");

app.controller('assignWorkController', function($scope, $location,$rootScope, $http) {
$scope.pri=false;
$scope.gua=false;
  $scope.type = {
         category: 'prisoner'
       };

  $scope.dis=function(type){
    $scope.pri=false;
    $scope.gua=false;
    //alert(type);
    if(type=='1'){
      $scope.pri=true;
    }
    if(type=='2')
      $scope.gua=true;
  }

  $scope.assignW=function(assign){
    // if(assign.gid==undefined)
    // alert("jgfhjfhjg");
    $http({
      url: '/assignW',
      method: 'post',
      data: assign
    }).then(function(data) {
      if(data.data.success) {
        alert(" Update Successfull");

      }
      else {
        alert("Enter valid details");
      }
    }, function(err){})
  }
});
