angular.module('factory',[])
	.factory('musicFactory', function($http){
		var artist = "coldplay",
			url = "https://itunes.apple.com/search?term="+artist+"&callback=JSON_CALLBACK",
			mf = {};

		mf.getMusic = function(){
			return $http.jsonp(url);
		}

		return mf;
	})