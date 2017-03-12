angular.module('MainCtrl', []).controller('MainController', function($scope, $location, $http) {

	$scope.songs = [
					 {
							 id: '1',
							 title: 'I want it that way',
							 artist: 'Backstreet boy',
							 url: $location.absUrl()+'/song/iwantitthatway.mp3'
					 },
					 {
						 id: '2',
						 title: 'All star',
						 artist: 'Smashmouth',
						 url: $location.absUrl()+'/song/allstar.mp3'
					 }
			 ];

			 //callEvent from music player
			 // data : current track time in millisecond
			 $scope.$on('currentTrack:position', function(event, data) {
				 if($scope.lrc){
					 var index = $scope.lrc.select(data+500);
					 $scope.b = $scope.lrc.getLyric(index);
					 $scope.bp = $scope.lrc.getLyric(index-1);
					 $scope.bn = $scope.lrc.getLyric(index+1);
				 }
		 });

		 $scope.$on('track:id',function(event,data){
			 clearLyric();
			 requestLyric(data);
		 });

		 function requestLyric(mid){
			 $http.get($location.absUrl()+'musics/lyrics/'+mid)
			 .then(function(res){
				 console.log(res);
				 if(res.data.message.header.status_code == 200){
				 $scope.lyric = res.data.message.body.lyric.lyric_body;
				 $scope.lrc = new Lyrics($scope.lyric);
			 	}else{
				 console.log("ERROR requesting lyric code : "+ res.data.message.header.status_code);
			 	}
			});
		 }

		 function clearLyric(){
			 $scope.lrc = null;
			 $scope.b = `[LOADING LYRICS]`;
			 $scope.bp = null;
			 $scope.bn = null;
		 }

});
