angular.module('myApp', ['youtube-embed'])
	.controller('MainController', MainController);
	
	function MainController($scope) {
		$scope.message = "YouTube Video?!"

		// The YouTube Player needs to have the same name in the attribute as this variable name
		$scope.cyanidecanariesvideo = 'Cf_oDpBJrf8';

		$scope.playerHeight = "200px";

		$scope.playerWidth = "300px";

		// Ways to get ahold of our player 
			$scope.playerCtrl;

			// perhaps a better way to setup our controller is:
			$scope.$on('youtube.player.ready', function ($event, player) {
	    		console.log("player is ready!!!");
	    		console.log(player);
	  		});

	}








