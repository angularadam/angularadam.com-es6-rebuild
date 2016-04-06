export class WebDevTecService {
  constructor () {
    'ngInject';

    this.data = [
      {
        'title': 'AngularJS Reference',
        'url': 'reference({id:2})',
        'description': 'HTML enhanced for web apps! This app shows off my smoothscroll directive, and has dev notes on AngularJS.',
        'logo': 'angular.png'
      },
      {
        'title': 'Dictionary Lookup',
        'url': 'lookup({ word: "looky", def: "loo" })',
        'description': 'Simple dictionary search, using keywords for the word or definition. Uses RESTful calls to access a MySQL database running server-side.',
        'logo': 'dict.png'
      },
      {
        'title': 'YouTube API Interface*',
        'url': 'tube',
        'description': '*Under Construction',
        'logo': 'tube.png'
      },
      {
        'title': 'Google Maps API Interface*',
        'url': 'maps',
        'description': '*Under Construction',
        'logo': 'maps.png'
      }
    ];
    this.tech = [

    {
        "title": "AngularJS",
        "url": "https://angularjs.org/",
        "description": "HTML enhanced for web apps!",
        "logo": "angular.png"
    },
    {
        "title": "Bootstrap",
        "url": "http://getbootstrap.com/",
        "description": "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
        "logo": "bootstrap.png"
    },
    {
        "title": "Angular UI Bootstrap",
        "url": "http://angular-ui.github.io/bootstrap/",
        "description": "Bootstrap components written in pure AngularJS by the AngularUI Team.",
        "logo": "ui-bootstrap.png"
    },
    {
        "title": "BrowserSync",
        "url": "http://browsersync.io/",
        "description": "Time-saving synchronised browser testing.",
        "logo": "browsersync.png"
    },
    {
        "title": "GulpJS",
        "url": "http://gulpjs.com/",
        "description": "The streaming build system.",
        "logo": "gulp.png"
    },
    {
        "title": "jQuery",
        "url": "http://jquery.com/",
        "description": "jQuery is a fast, small, and feature-rich JavaScript library.",
        "logo": "jquery.jpg"
    },
    {
        "title": "Jasmine",
        "url": "http://jasmine.github.io/",
        "description": "Behavior-Driven JavaScript.",
        "logo": "jasmine.png"
    },
    {
        "title": "Karma",
        "url": "http://karma-runner.github.io/",
        "description": "Spectacular Test Runner for JavaScript.",
        "logo": "karma.png"
    },
    {
        "title": "Protractor",
        "url": "https://github.com/angular/protractor",
        "description": "End to end test framework for AngularJS applications built on top of WebDriverJS.",
        "logo": "protractor.png"
    },
    {
        "title": "Sass (Node)",
        "url": "https://github.com/sass/node-sass",
        "description": "Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",
        "logo": "node-sass.png"
    },
    {
        "title": "ES6 (Babel formerly 6to5)",
        "url": "https://babeljs.io/",
        "description": "Turns ES6+ code into vanilla ES5, so you can use next generation features today.",
        "logo": "babel.png"
    }
    ];
}
  getTec() {
    return this.data;
  }

  getTechs() {
    return this.tech;
  }
}
