(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject =['$scope']; //to prevent from minification
function LunchCheckController($scope){

	$scope.name="";
	$scope.printout="";
	$scope.color_change="";
	$scope.count=function(){
		var input1 = $scope.name;
		if ( input1 == "") {
			$scope.printout = "Please enter data first";
			$scope.color_change ="red"; 
		}else{
		     var c = $scope.name.split(",").length;
		     if (c<=3) { $scope.printout = "Enjoy!";
		     			 $scope.color_change = "green";
				
		               }else { $scope.printout ="Too much!"; 
		                       $scope.color_change ="green"; 
		                    }
		     }
	} 
   
}

})();