angular.module('myApp', ['youtube-embed'])
	.controller('MainController', MainController);
	
	function MainController($scope) {
		$scope.message = "YouTube Video?!"

		// The YouTube Player needs to have the same name in the attribute as this variable name
		$scope.cyanidecanariesvideo = 'Cf_oDpBJrf8';

		$scope.playerHeight = "200px";

		$scope.playerWidth = "300px";

		$scope.playerCtrl;


	}