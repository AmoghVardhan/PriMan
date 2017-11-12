var app = angular.module("mainApp");

app.controller('loginController', function($scope, $location,$rootScope, $http) {
	// console.log('aklsdkajsdksj');

	$scope.data = {
 	availableOptions: [
 		{id: '0', name: 'Select'},
 		{id: '1', name: 'Family'},
 		{id: '2', name: 'Lawyer'},
 		{id: '3', name: 'Doctor'},
 		{id: '4', name: 'supervisor'}
 	],
 	selectedOption: {id: '0', name: 'Select'} //This sets the default value of the select in the ui
 	};


     $rootScope.login = function() {
       $http({
         url: '/login',
         method: 'post',
         data: {
           "username": $scope.username,
           "password": $scope.password
         }
       }).then(function(data) {
         if(data.data.success) {
  				 var id = data.data.id;
  				 switch (id) {
  				 	case 0:
  						$location.path('/index');
  						alert("Please Choose Login Type!!!");
  				 		break;
  					case 1:
  						$location.path('/family');
  						break;
  					case 2:
  						$location.path('/lawyer');
  						break;
  					case 3:
  						$location.path('/doctor');
  						break;
  					case 4:
							$rootScope.isLoggedIn=true;
  						$location.path('/requestValidate');
  						break;
  				 	default:

  				 }
         }
         else {
           alert("incorrect username and password");
         }
       }, function(err){})
     }

});








// 	$scope.formsubmit=function(){
// 	// $rootScope.loggedIn=false;
// 		//root scope is a global variable which is accessible everywhere in all controllers
// 		if($scope.login.username == 'admin' && $scope.login.password=='admin123'){
// 			$rootScope.loggedIn = true;
// 			$http.post("/hereiam",$scope.login).
// 		success(function(data){
// 			alert('Done finally');
//
// 		}).error(function(data){
// 			console.log('oops try again');
// 		});
// 		}
// 		else alert("incorrect")
// 	}
// });
