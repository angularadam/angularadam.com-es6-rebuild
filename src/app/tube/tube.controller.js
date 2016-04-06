export class TubeController {
  constructor ($log, $window, tube) {
    'ngInject';

    // copy in dependencies
    this.tube = tube;
    this.$window = $window;
    this.$log = $log;

    // private

    // prevents multiple alerts
    let alert = 0;
    // not logged in alert message
    let message = "Please press Login before searching.";
    // holds length of current playlist
    let playlistLength = 0;
    // holds current row of playlist
    let playlistRow = 0;
    // toggle nav sidebar
    let navToggle = false;
    // player object handles control events
    let ytPlayer = {};

    // public

    // set playing title to none
    this.title = '<b>Now Playing:<b> ' +  '<i>Nothing</i>';
    // youtube search results
    this.results = [];
    // youtube search criteria
    this.searchWords = '';
    // custom playlist array
    this.customPlaylist = [];
    // stores user logged in state
    this.loggedIn = false;


  }

  // verify app api token
  login( ) {
    this.tube.apiAuth( );
    this.loggedIn = true;
  }

  // load a video object
  loadVideo( videoObj ) {
    this.playlistRow = videoObj.listIndex;
    this.$log.debug( 'playing row', this.playlistRow, videoObj.listIndex );
    this.videoid = videoObj.id.videoId;
    this.title = '<b>Now Playing:</b> ' + '<i>' + videoObj.snippet.title + '</i>';
  }

  // youtube api video search
  searchList( ) {
    if( this.loggedIn ) {
      tube.searchList( this.searchWords, 'video' )
        .then( function( resp ) {
          this.results = resp.result.items;
          // TODO: this is not supposed to be necessary, i believe
          // $scope.$apply();
        }, function( reason ){
          $log.debug('Error:', reason.result.error.message);
        }); 
    } else {
      if( alert > 0 ) {
        alert = 0;
      } else {
        this.alert++;
        $window.alert( 'Please press Login before searching.' );
      }
    }
  }

  // getch channels from youtube api
  youtubeChannelInfo( ) {
    $log.debug( 'fetch channels with this token', tokens.access_token );
    this.tube.getChannelInfo( tokens.access_token )
    .success( function( response ) {
      this.results = response;
      for( result of this.results ) {
        result.drag = true;
      }
    })
    .error( function( err ) {
      $log.debug('Error in fetching channel info', err );
    });
  }

  // show/hide row
  // realized this function was silly in any language
  // rewrote ng-show while using ng-show, fail

  // move a video object into the current playlist
  addToPlaylist( videoObj ) {
     videoObj.listIndex = playlistLength;

     
  }


}

