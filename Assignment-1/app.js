(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',CheckLunch);

CheckLunch.$inject=['$scope'];
function CheckLunch($scope){

	$scope.LunchItems="";
	$scope.stateOfLunch="";

    $scope.CheckLunchState=function (){

    console.log("fn invoked");
	function splitString(stringToSplit, separator) {
     var arrayOfStrings = stringToSplit.split(separator);
     $scope.arrayOfStrings=arrayOfStrings;

  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
  
};
    
    var comma =',';    
    splitString($scope.LunchItems,comma);


    	if($scope.arrayOfStrings[0]== ""){
    		$scope.stateOfLunch="Please Enter Data First!";
        }
    	else if($scope.arrayOfStrings.length<=3){
    		$scope.stateOfLunch="Enjoy !";
    	}
    	else{
    		$scope.stateOfLunch="Too much!";
    	}

    };

	
};
})();
