export class LookupController {
  constructor ( $routeParams, lookup ) {
    'ngInject';

    // copy reference to service
    this.lookup = lookup;

    //no records message
    this.noRecords = 'No records found.';
    
    //object to hold filters
    this.filters = {};

    if( $routeParams.word ) {
      this.filters.word = $routeParams.word;
    } else {
      this.filters.word = '';
    }
    
    if( $routeParams.def ) {
      this.filters.def = $routeParams.def;
    } else {
      this.filters.def = '';
    }
    console.log( 'FILTERS', this.filters );

    // var to hold results
    this.results = {};

    //get an initial list of words
    lookup.query(this.filters).success(function(resp) {
      this.results = resp.records;
    });

  }

  filterQuery( ) {
    this.lookup.query( this.filters )
      .success( function( response ) {
        this.results = response.records;
      })
      .error( function( errResponse ) {
        console.log( 'Query Error', errResponse );
      });
  }
}
