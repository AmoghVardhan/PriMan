var app = angular.module("mainApp");

app.controller('lawyerController', function($scope, $location,$rootScope, $http) {
// alert("herer");
  $scope.meetReqLaw=function(lawyer){
    // alert("in function ")
    $http({
      url: '/meetReqLaw',
      method: 'post',
      data: lawyer
    }).then(function(data) {
      if(data.data.success) {
        alert("Dependent added successfully");
      }
      else if(data.data.stat)
      {
        alert(data.data.stat);
      }
      else {
        alert(data.data.message);
      }
    }, function(err){})
  }
});
