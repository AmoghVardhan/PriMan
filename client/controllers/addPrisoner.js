var app = angular.module("mainApp");

app.controller('addPrisonerController', function($scope, $location,$rootScope, $http) {

  $rootScope.data = {
  availableOptions: [
    {id: '0', name: 'Select'},
    {id: '1', name: 'Murder'},
    {id: '2', name: 'Theft'},
    {id: '3', name: 'Rape'},
    {id: '4', name: 'money laundering'}
  ],
  selectedOption: {id: '0', name: 'Select'} //This sets the default value of the select in the ui
  };



  $scope.addRecord=function(){

    $http({
      url: '/addRecord',
      method: 'post',
      data: {
        "id": $scope.id,
        "pname": $scope.pname,
        "crime": $scope.data.selectedOption.name,
        "doj": $scope.doj,
        "address": $scope.address,
        "remarks": $scope.remarks,
        "cid":$scope.cid,
        "lid":$scope.lid,
        "shift":$scope.shift,
        "cellid":$scope.cellid,
        "did":$scope.did,
        "medicalRecords": $scope.medicalRecords

      }
    }).then(function(data) {
      if(data.data.success) {
        alert("Prisoner added successfully");
      }
      else {
        alert(data.data.message);
      }
    }, function(err){})
  }
});
