// NOTE: you can only reach a static method using the name of the class.

export class TubeService {
  constructor ( $http, $log, $window) {
    'ngInject';
    
    //google youtube api v3 app credentials
    const scopes = 'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtubepartner-channel-audit';
    const clientId = '794380824591-83h6l4stoid91st598mv5isp53v86jau.apps.googleusercontent.com';
    const apiKey = 'AIzaSyBRji7yv2WxTnCYOjWBC26coRGPrPA8w6k';
    const apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';    

  }

  // callback: client library has finished loading
  static handleClientLoad( ) {
    $log.debug( 'handling client load' );
    gapi.client.setApiKey( apiKey );
    $window.setTimeout( checkAuth, 1 );
  }

  // callback: after library loaded,
  // get authorization for api key, client id, and scopes
  static checkAuth( ) {
    $log.debug('checking authorization');
    gapi.auth.authorize( {
      client_id: clientId,
      scope: scopes,
      immediate: true
    }, handleAuthResult);
  }

  // callback: when we are done checking for auth,
  // log result
  static handleAuthResult( authResult ) {
    $log.debug('handling auth result');
    if( authResult && !authResult.error ) {
      $log.debug( 'auth success', authResult );
      //makeApiCall();
    } else {
      $log.debug( 'auth failure', authResult.error );
    }
  }

}
