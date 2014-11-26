angular.module('boilerplate', [
		'templates-main',
		'ui.router',
		'home',
		'about'
	])
	.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise( '/home' );
	})
	.controller('AppCtrl', function($scope){
		$scope.name = "colin"
	})