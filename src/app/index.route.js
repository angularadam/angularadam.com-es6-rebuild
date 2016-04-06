export function routerConfig($componentLoaderProvider) {
  'ngInject';
  $componentLoaderProvider.setTemplateMapping(function(name) {
    return `app/${ name }/${ name }.html`;
  });
}

export class RouterController {
  constructor($router) {
    'ngInject';
    $router.config([
      { path: '/', redirectTo: '/main'},
      { path: '/main', component: 'main' },
      { path: '/lookup/:word/:def', component: 'lookup' },
      { path: '/reference/:id', component: 'reference' },
      { path: '/maps', component: 'maps' },
      { path: '/tube', component: 'tube' }      
    ]);
  }
}
