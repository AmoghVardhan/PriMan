var app = angular.module("mainApp");

app.controller('loginController', function($scope, $location,$rootScope, $http) {
	// console.log('aklsdkajsdksj');
	$scope.formsubmit=function(){
	// $rootScope.loggedIn=false;
		//root scope is a global variable which is accessible everywhere in all controllers
		if($scope.login.username == 'admin' && $scope.login.password=='admin123'){
			$rootScope.loggedIn = true;
			$http.post("/hereiam",$scope.login).
		success(function(data){
			alert('Done finally');

		}).error(function(data){
			console.log('oops try again');
		});
		}
		else alert("incorrect")
	}
});
