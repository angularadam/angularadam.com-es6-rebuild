export function ytDirective($document, $log, $window, tube, YT_event) {
  'ngInject';

  let directive = {
    restrict: 'E',
    template: '<div></div>',
    scope: {
        videoid: '@'
    },
    controller: ytController,
    controllerAs: 'yt',
    bindToController: true
  };

  return directive;

  function linkFunc(scope, el, attr) {
	//generates an element from youtube api
	let tag = $document[0].createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	let firstScriptTag = $document[0].getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	//get element bounds to autoset player dimensions
	let rect = element[0].getBoundingClientRect();
	//var myWidth = $window.innerWidth - ((2 * rect.left) + YoutubeService.getScrollBarWidth($document));
	let myWidth = $window.innerWidth - (2 * rect.left);
	//var myWidth = element.offsetWidth;
	let myHeight = element.offsetHeight;
	// event handlers

	//send youtube player control events
	scope.sendControlEvent = function(yt_event) {
		$log.debug('player event broadcast thrown', yt_event);
		$scope.$broadcast(yt_event);
	};
	scope.$on(3, function(event, data) {
		$log.debug('player status change caught', data);
		self.ytPlayer.status = data;
		if(data === 'ENDED'){
			for(var i=0; i< self.customPlaylist.length; i++){
				self.customPlaylist[i].active = false;
			}
			if((playlistLength) !== $scope.playlistRow){
				self.customPlaylist[$scope.playlistRow].active = true;
				self.loadVideo(self.customPlaylist[$scope.playlistRow]);
			}else{
				self.customPlaylist[0].active = true;
				self.loadVideo(self.customPlaylist[0]);
			};
		}
	});

	//player will be the youtube object
	let player = {};
	$window.onYouTubeIframeAPIReady = function() {
		player = new YT.Player(element.children()[0], {
			playerVars: {
				autoplay: 0,
				html5: 1,
				theme: "light",
				modesbranding: 0,
				color: "white",
				iv_load_policy: 3,
				showinfo: 1,
				controls: 1,
			},
			height: myHeight,
			width: myWidth,
			videoId: scope.videoid,
			events: {
				onStateChange: function(event) {
					var message = {
					  event: YT_event.STATUS_CHANGE,
					  data: ""
					};

					switch(event.data) {
					  case YT.PlayerState.PLAYING:
						message.data = "PLAYING";
						break;
					  case YT.PlayerState.ENDED:
						message.data = "ENDED";
						break;
					  case YT.PlayerState.UNSTARTED:
						message.data = "NOT PLAYING";
						break;
					  case YT.PlayerState.PAUSED:
						message.data = "PAUSED";
						break;
					};
					scope.$apply(function(){
						scope.$emit(message.event, message.data);
					});
				}
			}
		});
	};
  }
}

class ytController {
  constructor (moment) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}

class YT_event {
  constructor () {
    'ngInject';

    // possible states of youtube player
    this[ "STOP" ] = 0;
    this[ "PLAY" ] = 1;
    this[ "PAUSE" ] = 2;
    this[ "STATUS_CHANGE" ] = 3;    
  }
}