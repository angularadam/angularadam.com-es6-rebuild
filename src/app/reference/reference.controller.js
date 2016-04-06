export class ReferenceController {
  constructor ( $routeParams, reference ) {
    'ngInject';

    // copy reference to service
    this.reference = reference;

    // get searched topic
    this.id = $routeParams.id;

    // initialize topic filter from browser bar

    this.search = {
      'Keywords': ''
    };

    // initialize topic results
    this.topicResults = [];
    reference.queryTopics().then( function( resp ) {
      //copy data to topicResults
      this.topicResults = resp.records;
      // if routed to a valid id
      if( this.id > 0 ) {

        //select topic related by routed id
        for( let obj of this.topicResults ) {
          // if topic found
          if( obj[ 'ID' ] === parseInt( this.id ) ) {
            // highlight title
            obj.highlightTopic = true;
            // show description
            obj.showDesc = true;
          }
        }
      }

    } );
  }

  // function to update browser bar
  updateUrl( id ) {
    /*
    console.log( 'updateUrl reference', this._reference );
    // reset routed topic id
    this._reference.pushSelectedTopic( id );
    // reset routed topic filter
    this._reference.pushTopicFilter( this.search[ 'Keywords' ] );
    // update browser search with topic id and filter
    this._$location.search( 'topic', this._reference.getSelectedTopic( ) );
    this._$location.search( 'filter', this._reference.getTopicFilter( ) );

    */
 }

  // fetches a note data from server
  queryNote( id ) {
    // query note data
    this.reference.queryNote( id ).success( function( response ) {
      // select topic related to note by id
      for( let obj of this.topicResults ) {
          if( obj[ 'ID' ] === parseInt( id ) ) {
            // append new data to topicResults at array position
            obj[ 'Note' ] = response.records[ 0 ][ 'Note' ];
          }
      }
    })
  }

  topicClick( id ) {
    //find the topic clicked by it's ID property
    for( let obj of this.topicResults ) {
      if( obj[ 'ID' ] === parseInt( id ) ) {
        // get show state
        let state = obj.showDesc;
        // hide all
        allTopicsFalse();
        //toggle current topic highlightr
        obj.highlightTopic = !state;
        // toggle current description show
        obj.showDesc = !state;
        // hide note
        obj.showNote = false;
        // updateUrl( id );
      }
    }
  }

  //description click event
  descClick( id ) {
    //select topic note data by topic id
    for( let obj of this.topicResults ) {
      // if topic id  found
      if( obj[ 'ID' ] === parseInt( id ) ) {
        // save current state of showNote property
        let state = obj.showNote;
        // fetch note data
        queryNote( id );
        // toggle show for note data
        obj.showNote = !state;
      }
    }
  }

  // note click event
  noteClick( id ) {
    // hide clicked note
    for( let obj of this.topicResults ) {
      if( obj[ 'ID' ] === parseInt( id ) ) {
        obj.showNote = false;
      }
    }
  }

  // search field keypress event
  searchKeyup( ) {
    // update search url
    // updateUrl( 0 );
    allTopicsFalse( );
  }

  // sets the Topic row class for highlighting
  setTopicClass( bool ) {
    if( bool ) {
      return 'active';
    }
  }  

  // TODO: implement the abstracted function in the view

  // abstracted set unique topic function
  setTopic( id, name ) {
    return name + '-' + parseInt( id );
  }

  // sets the Topic row html id
  setTopicID( id ) {
    return 'topic-' + parseInt( id );
  }

  setDescTitleID( id ) {
    return 'descTitle-' + parseInt( id );
  }

  setDescDataID( id ) {
    return 'descData-' + parseInt( id );
  }

  setNoteTitleID( id ) {
    return 'noteTitle-' + parseInt( id );
  }

  setNoteDataID( id ) {
    return 'noteData-' + parseInt( id );
  }



 // returns message to display results count
 showResultCount( count ) {
    if( typeof( this.topicResults) != 'undefined' ) {
      return 'Search keyword found ' + count + ' of ' + this.topicResults.length + ' topics. ';
    }
  }

  allTopicsFalse( ) {
      // set all topics to not highlight
      this.topicResults = setAll(this.topicResults, 'highlightTopic', false);
      // set all descriptions to not show
      this.topicResults = setAll(this.topicResults, 'showDesc', false);
      // set all notes to not show
      this.topicResults = setAll(this.topicResults, 'showNote', false);
  }

  // abstract function to set key and value over an array of objects
  setAll( arrayOfObjects, key, value ) {
    if( typeof( arrayOfObjects ) == 'undefined' ) {
      arrayOfObjects = [];
    }
    for( let obj of arrayOfObjects ) {
      obj[ key ] = value;
    }
    return arrayOfObjects;
  }

}
