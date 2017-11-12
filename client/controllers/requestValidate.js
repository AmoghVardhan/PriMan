var app = angular.module("mainApp");

app.controller('requestValidateController', function($scope, $location,$rootScope, $http) {

    $http({
      url: '/requestValidate',
      method: 'post',
    }).then(function(data) {
      if(data.data.success) {
        //alert("Retrieved");
        $scope.dependents = data.data.result1;
        $scope.lawyer = data.data.result2;
      }
      else {
        alert(data.data.message);
      }
    }, function(err){})



 $scope.statusUpdateDepAcc=function(x){
   $http({
     url: '/requestValidate1',
     method: 'post',
     data:x
   }).then(function(data) {
     if(data.data.success) {
       alert("updated");

     }
     else {
       alert(data.data.message);
     }
   }, function(err){})
 }
 $scope.statusUpdateDepRej=function(x){
   $http({
     url: '/requestValidate2',
     method: 'post',
     data: x
   }).then(function(data) {
     if(data.data.success) {
       alert("updated");

     }
     else {
       alert(data.data.message);
     }
   }, function(err){})
 }






 $scope.statusUpdateLawAcc=function(x){
   $http({
     url: '/requestValidate3',
     method: 'post',
     data:x
   }).then(function(data) {
     if(data.data.success) {
       alert("updated");

     }
     else {
       alert(data.data.message);
     }
   }, function(err){})
 }
 $scope.statusUpdateLawRej=function(x){
   $http({
     url: '/requestValidate4',
     method: 'post',
     data: x
   }).then(function(data) {
     if(data.data.success) {
       alert("updated");

     }
     else {
       alert(data.data.message);
     }
   }, function(err){})
 }





  });
