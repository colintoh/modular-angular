angular.module('home',['ui.router'])
	.config(function config( $stateProvider ) {
		$stateProvider
			.state( 'home', {
				url: '/home',
				views: {
					"main": {
						controller: 'HomeCtrl',
						templateUrl: 'home/home.tpl.html'
					}
				},
				data:{ pageTitle: 'Home' }
			})
			.state('home.red',{
				url: '/red',
				templateUrl: 'home/red.tpl.html'
			})
	})
	.controller('HomeCtrl',function($scope,$http){
		$scope.body = "This is the home page";
	})