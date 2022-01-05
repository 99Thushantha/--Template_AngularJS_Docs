
/*app.controller("templateCtrl", ["$scope", "$http", "$stateParams", "Upload", "$rootScope", "emailService", "postUserActivityService", "$filter", "apiService", "yesNoFilter", "$uibModal", "fCsv", "$timeout", "exportCSVService", "$state", "dateInputService", "$q", "openNewWindowService", function ($scope, $http, $stateParams, Upload, $rootScope, emailService, postUserActivityService, $filter, apiService, yesNoFilter, $uibModal, fCsv, $timeout, exportCSVService, $state, dateInputService, $q, openNewWindowService)  {






}])*/


var app = angular.module('app', []);
app.controller("templateCtrl", ["$scope", "$http", 
	function ($scope, $http)  {

 var ArrayS = new Array();
    $http({
      method:'GET',
        url: "http://localhost/angular/data.json",
        responseType:'json',
        
    }).then(function(data) {
    
    $scope.dataObj1=[];
    $scope.dataObj1=data.data;

    $scope.dataObj2=[];
    $scope.dataObj2=data.data;

    $scope.dataObj3=[];
    $scope.dataObj3=data.data;

    $scope.dataObj4=[];
    $scope.dataObj4=data.data;

    $scope.dataObj5=[];
    $scope.dataObj5=data.data;

  }, function(err) { console.log(err); });


}])