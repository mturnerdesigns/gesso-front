'use strict';

angular
    .module('app.routes', ['ui.router'])
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('welcome', {
            url:'/',
            templateUrl:'sections/auth/welcome/welcome.tpl.html',
            controller: 'WelcomeController'
        })
        .state('login', {
            url:'/login',
            templateUrl:'sections/auth/signin/signin.tpl.html',
            controller: 'SigninController'
        })
        .state('register', {
            url:'/register',
            templateUrl:'sections/auth/signup/signup.tpl.html',
            controller: 'SignupController'
        })
        .state('tab', {
            url:'/tab',
            abstract:true,
            templateUrl:'sections/template.html' 
        })
        .state('tab.resources', {
            url:'/resources',
            views: {
                'resource-tab': {
                    templateUrl: 'sections/resources/resources.tpl.html',
                    controller: 'ResourcesController'
                }
            }
        })
        .state('tab.dash', {
            url:'/dash',
            views: {
                'list-tab': {
                    templateUrl: 'sections/list/list.tpl.html',
                    controller: 'ListController'
                }
            }    
        })
        .state('tab.list-items', {
            url:'/list/:id', 
            views: {
                'list-tab': {
                    templateUrl: 'sections/list-items/list-items.tpl.html',
                    controller: 'ListItemController'
                }
            }
        })
        .state('tab.list-edit', {
            url:'/list/:id/edit',
            views: {
                'list-tab':{
                    templateUrl: 'sections/list-edit/list-edit.tpl.html',
                    controller: 'ListEditController'
                }
            }
        })
        .state('tab.list-item-edit', {
            url:'/item/:id/edit',
            views: {
                'list-tab':{
                    templateUrl: 'sections/list-items-edit/list-items-edit.tpl.html',
                    controller: 'ListItemEditController'
                }
            }
        })
        .state('tab.list-item-add', {
            url:'/list/:id/add',
            views: {
                'list-tab':{
                    templateUrl: 'sections/list-items-add/list-items-add.tpl.html',
                    controller: 'ListItemAddController'
                }
            }
        })
        .state('tab.project', {
            url:'/projects',
            views: {
                'project-tab': {
                    templateUrl: 'sections/projects/projects/projects.tpl.html',
                    controller: 'ProjectsController'
                }
            }    
        })
        .state('tab.projects-edit', {
            url:'/projects/:id/edit',
            views: {
                'project-tab':{
                    templateUrl: 'sections/projects/projects-edit/projects-edit.tpl.html',
                    controller: 'ProjectsEditController'
                }
            }
        })
        .state('tab.projects-photos', {
            url:'/projects/:id/photos',
            views: {
                'project-tab':{
                  templateUrl: 'sections/projects/projects-photos/projects-photos.tpl.html',
                  controller: 'ProjectsPhotosController'
                }
            }
        })
        .state('tab.projects-photos-details', {
            url:'/photo/:id/details', //should change route to say /projects/photo/:id/details
            views: {
                'project-tab':{
                   templateUrl: 'sections/projects/projects-photos-details/projects-photos-details.tpl.html',
                   controller: 'ProjectsPhotosDetailsController'
                }
            }
        })
        .state('tab.portfolio', {
            url:'/portfolios',
            views: {
                'portfolio-tab': {
                    templateUrl: 'sections/portfolios/portfolios/portfolios.tpl.html',
                    controller: 'PortfoliosController'
                }
            }    
        })
        .state('tab.portfolio-edit', {
            url:'/portfolios/:id/edit',
            views: {
                'portfolio-tab': {
                    templateUrl: 'sections/portfolios/portfolios-edit/portfolios-edit.tpl.html',
                    controller: 'PortfoliosEditController'
                }
            }    
        })
        .state('tab.portfolio-details', {
            url:'/portfolios/:id/details',
            views: {
                'portfolio-tab':{
                    templateUrl: 'sections/portfolios/portfolios-details/portfolios-details.tpl.html',
                    controller: 'PortfoliosDetailsController'
                }
            }
        })
        .state('tab.portfolio-details-info', {
            url:'/portfolio-photo/:id/info',
            views: {
                'portfolio-tab':{
                    templateUrl: 'sections/portfolios/portfolios-details-info/portfolios-details-info.tpl.html',
                    controller: 'PortfoliosDetailsInfoController'
                }
            }
        })
        .state('tab.portfolios-details-info-add', {
            url:'/portfolios/:id/add',
            views: {
                'portfolio-tab':{
                   templateUrl: 'sections/portfolios/portfolios-details-info-add/portfolios-details-info-add.tpl.html',
                   controller: 'PortfoliosDetailsInfoAddController'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
}

