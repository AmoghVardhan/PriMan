var app = angular.module('mainApp',['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/validate',{
		controller: 'validateController'
	})
	.when('/index',{
		templateUrl: '/views/index.html',
		controller: 'homeController'
	})
	.when('/login',{
		templateUrl: '/views/Login.html',
		controller: 'loginController'
	})
	.when('/family',{
		templateUrl: '/views/family.html',
		controller: 'familyController'
	})
	.when('/doctor',{
		templateUrl: '/views/doctor.html',
		controller: 'doctorController'
	})
	.when('/lawyer',{
		templateUrl: '/views/Login.html',
		controller: 'lawyerController'
	})
	.when('/supervisor',{
		templateUrl: '/views/Login.html',
		controller: 'supervisorController'
	})
	.when('/requestValidate',{
		templateUrl: '/views/Login.html',
		controller: 'requestValidateController'
	})
	.when('/viewDetails',{
		templateUrl: '/views/Login.html',
		controller: 'viewDetailsController'
	})
	.when('/assignWork',{
		templateUrl: '/views/Login.html',
		controller: 'assignWorkController'
	})
	.when('/addPrisoner',{
		templateUrl: '/views/Login.html',
		controller: 'addPrisonerController'
	})
	.when('/addDependents',{
		templateUrl: '/views/Login.html',
		controller: 'addDependentsController'
	})
	.otherwise({
		redirectTo : '/index'
	});
});

app.controller('mainCtrl',function($scope,$location,$rootScope,$http){
	$scope.message = "Home Page!";
	console.log('hi');

});


//
// app.controller('loginCtrl',function($scope,$location,$rootScope,$http){
// 	$scope.message = "Home Page!";
// 	console.log('hi');
// 	$scope.submit=function(){
// 	$rootScope.loggedIn=false;
// 		//root scope is a global variable which is accessible everywhere in all controllers
// 		alert("ajdgsd");
// 		if($scope.login.username == 'admin' && $scope.login.password=='admin123'){
// 			$rootScope.loggedIn = true;
// 			$location.path('/dashboard');
// 			$http.post("/hereiam",$scope.login).
// 		success(function(data){
// 			console.log('Done finally');
// 		}).error(function(data){
// 			console.log('oops try again');
// 		});
// 		}
// 	}
// });


// var app = angular.module("mainApp", ['ngResource', 'ngRoute']);

// app.config(function($routeProvider) {
//   $routeProvider
//   .when('/login', {
//     templateUrl: '/files/Login.html',
//     controller: 'loginController'
//   })
//   // .when('/signup', {
//   //   templateUrl: '/views/signup.html',
//   //   controller: 'loginController'
//   // })
//   // .when('/home', {
//   //   templateUrl: '/views/home.html',
//   //   controller: 'homeController'
//   // })
//   // .when('/admin', {
//   //   templateUrl: '/views/admin.html',
//   //   controller: 'adminController'
//   // })
//   .otherwise({
//     redirectTo: '/login'
//   })
// })
