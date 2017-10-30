var app = angular.module("mainApp");

app.controller('viewDetailsController', function($scope, $location,$rootScope, $http) {
	// console.log('aklsdkajsdksj');

	$scope.data = {
 	availableOptions: [
    {id: '0', name: 'Select'},
 		{id: '1', name: 'Prisoner'},
 		{id: '2', name: 'Department'},
 		{id: '3', name: 'Cases'},
 		{id: '4', name: 'Cell'},
 		{id: '5', name: 'Dependents'},
    {id: '6', name: 'Lawyer'},
    {id: '7', name: 'Guard'}

 	],
 	selectedOption: {id: '0', name: 'Select'} //This sets the default value of the select in the ui
 	};
	var t;
	$scope.retrieve=function(){

	}
  $scope.update=function(type){
    $scope.labelName=type+" Id:";
		t = type;
		$http({
			url: '/retrieve',
			method: 'post',
			data: {
				"type": t,
				"id": $scope.id
			}
		}).then(function(data) {
			if(data.data.success) {
				$scope.feed = data.data.result;
				//console.log(JSON.stringify(feed));
			}
			else {
				alert(data.data.message);
			}
		}, function(err){})
		// var id = $scope.id;
		// <table>
		//    <tr>
		//       <th>Name</th>
		//       <th>Marks</th>
		//    </tr>
		//
		//    <tr>// ng-repeat = "subject in student.subjects">
		//       <td>hello</td>
		//       //<td>{{ subject.marks }}</td>
		//    </tr>
		// </table>

    // switch (type) {
    //   case "0":
    //     alert("Choose database to view");
    //     break;
    //   case "1":
    //     $scope.labelName="Prisoner ID";
    //     break;
    //   case "2":
    //     $scope.labelName="Department";
    //     break;
    //   case "3":
    //     $scope.labelName="Cases";
    //     break;
    //   case "4":
    //     $scope.labelName="Cell";
    //     break;
    //   case "5":
    //     $scope.labelName="Dependents";
    //     break;
    //   case "6":
    //     $scope.labelName="Lawyer";
    //     break;
    //   case "7":
    //     $scope.labelName="Guard";
    //     break;
    // }

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
