export function MalarkeyDirective(malarkey) {
  'ngInject';

  let directive = {
    restrict: 'E',
    template: '&nbsp;',
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el, attr) {
    let watcher;
    let typist = malarkey(el[0], {
      typeSpeed: 40,
      deleteSpeed: 40,
      pauseDelay: 800,
      loop: true,
      postfix: ' '
    });
    let tech = [
        "AngularJS",
        "Bootstrap",
        "Angular UI Bootstrap",
        "BrowserSync",
        "GulpJS",
        "jQuery",
        "Jasmine",
        "Karma",
        "Protractor",
        "Sass (Node)",
        "ES6 (Babel formerly 6to5)",
        "Yeoman"
    ];

    el.addClass('acme-malarkey');

    angular.forEach(tech, (value) => {
      typist.type(value).pause().delete();
    });
    
    

  }

}

class MalarkeyController {
  constructor ($log, githubContributor) {
    'ngInject';

    this.$log = $log;
    this.contributors = [];

    this.activate(githubContributor);
  }

  activate(githubContributor) {
    return this.getContributors(githubContributor).then(() => {
      this.$log.info('Activated Contributors View');
    });
  }

  getContributors(githubContributor) {
    return githubContributor.getContributors(10).then((data) => {
      this.contributors = data;

      return this.contributors;
    });
  }
}
