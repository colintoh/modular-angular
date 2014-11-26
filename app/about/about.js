angular.module('about',['ui.router'])
	.config(function config( $stateProvider ) {
		$stateProvider.state( 'about', {
			url: '/about',
			views: {
				"main": {
					controller: 'AboutCtrl',
					templateUrl: 'about/about.tpl.html'
				}
			},
			data:{ pageTitle: 'Home' }
		});
	}).
	controller('AboutCtrl', function($scope){
		$scope.body = "This is a about us page."
	})