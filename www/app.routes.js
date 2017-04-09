'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'sections/auth/welcome/welcome.tpl.html',
            controller: 'WelcomeController'
        })
        .when('/login', {
            templateUrl:'sections/auth/signin/signin.tpl.html',
            controller: 'SigninController'
        })
        .when('/register', {
            templateUrl:'sections/auth/signup/signup.tpl.html',
            controller: 'SignupController'
        })
        .when('/dash', {
            templateUrl: 'sections/list/list.tpl.html',
            controller: 'ListController'
        })
        .when('/list/:id/edit', {
            templateUrl: 'sections/list-edit/list-edit.tpl.html',
            controller: 'ListEditController'
        })
        .when('/list/:id', {
            templateUrl: 'sections/list-items/list-items.tpl.html',
            controller: 'ListItemController'
        })
        .when('/list/:id/add', {
            templateUrl: 'sections/list-items-add/list-items-add.tpl.html',
            controller: 'ListItemAddController'
        })
        .when('/item/:id/edit', {
            templateUrl: 'sections/list-items-edit/list-items-edit.tpl.html',
            controller: 'ListItemEditController'
        })
        .when('/resources', {
            templateUrl: 'sections/resources/resources.tpl.html',
            controller: 'ResourcesController'
        })
        .when('/projects', {
            templateUrl: 'sections/projects/projects/projects.tpl.html',
            controller: 'ProjectsController'
        })
        .when('/projects/:id/edit', {
            templateUrl: 'sections/projects/projects-edit/projects-edit.tpl.html',
            controller: 'ProjectsEditController'
        })
        .when('/projects/:id/photos', {
            templateUrl: 'sections/projects/projects-photos/projects-photos.tpl.html',
            controller: 'ProjectsPhotosController'
        })
        .otherwise({
            redirect: '/'
        });

}

