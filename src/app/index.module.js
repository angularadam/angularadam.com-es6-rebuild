/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LookupController } from '../app/lookup/lookup.controller';
import { ReferenceController } from '../app/reference/reference.controller';
import { MapsController } from '../app/maps/maps.controller';
import { TubeController } from '../app/tube/tube.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { LookupService } from '../app/lookup/lookup.service';
import { ReferenceService } from '../app/reference/reference.service';
import { MapsService } from  '../app/maps/maps.service';
import { TubeService } from  '../app/tube/tube.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { ytDirective, ytController, YT_event } from '../app/tube/tube.directive';

angular.module('portfolio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngNewRouter', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('YT_event', YT_event)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('lookup', LookupService)
  .service('reference', ReferenceService)
  .service('maps', MapsService) 
  .service('tube', TubeService)  
  .controller('RouterController', RouterController)
  .controller('MainController', MainController)
  .controller('LookupController', LookupController)
  .controller('ReferenceController', ReferenceController)
  .controller('MapsController', MapsController)
  .controller('TubeController', TubeController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('tubeDirective', ytDirective);
