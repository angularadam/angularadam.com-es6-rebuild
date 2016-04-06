export class ReferenceService {
  constructor ($log, $http, $document ) {
    'ngInject';
    
    this.$log = $log;
    this.$http = $http;
    ///this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
    

    // variable holds selected topicID
    this.selectedTopicId = 0;

    //default routing value for topic filter
    this.topicFilter = 'nofilter';
    this.screenPosition = 0;
  }
    //public function: returns promise with all id,topics,keywords
    queryTopics( ) {
      let config = {
        method: 'GET',
        url: 'assets/scripts/getTopics.php',
        cache: true
      };
      return this.$http(config);
    }

    getSelectedTopic( ) {
      return this.selectedTopicId;
    }

    pushSelectedTopic( topicID ) {
      this.selectedTopicId = topicID;
    }

    getTopicFilter( ) {
      return this.topicFilter;
    }

    pushTopicFilter( filter ) {
      if( filter === '' ) {
        this.topicFilter = 'nofilter';
      } else {
        this.topicFilter = filter;
      }
    }
}
