angular.module('home',['ui.router','factory'])
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
				templateUrl: 'home/red.tpl.html',
				controller: 'RedCtrl',
				resolve: {
					music: function(musicFactory){
						return musicFactory.getMusic();
					}
				}
			})
	})
	.controller('HomeCtrl',function($scope,$http){
		$scope.body = "This is the home page";
	})
	.controller('RedCtrl', function($scope,music){
		$scope.list = music.data.results;
	})



