export class LookupService {
  constructor ($log, $http) {
    'ngInject';
    
    this.$log = $log;
    this.$http = $http;
    this.config = {};
  }
  query( filterData ) {
    this.config = {
      'method': 'GET',
      'url': '/php/getwords.php',
      params: { 
        'filter1': filterData.word,
        'filter2': filterData.def
      }
    }
    return this.$http(this.config);
  }
}
