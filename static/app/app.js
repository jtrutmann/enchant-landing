(function() {

  var app = angular.module('enchantApp', [
                                        'home',
                                        'subscribe',
                                        'thanks',
                                        'ngResource',
                                        'ngRoute',
                                        'ui.router'
                                        ]);

    // app.controller('NchantController', ['$animate', function($animate ){
    //     var nchant = this;
    // }]);

    // app.run( function run($http, $cookies){

    //     $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    // })


    app.config(
        function($routeProvider, $httpProvider, $interpolateProvider, $resourceProvider, $stateProvider, $urlRouterProvider) {

            $interpolateProvider.startSymbol('[[').endSymbol(']]');

            // $httpProvider.interceptors.push('AuthInterceptorService');

            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            // $httpProvider.defaults.headers.post['Content-Type'] = undefined;

            $resourceProvider.defaults.stripTrailingSlashes = false;
            // $httpProvider.defaults.withCredentials = true;

            // $routeProvider.when('/', {
            //     templateUrl: 'html/partials/home.html',
            //     controller: 'HomeController'
            // }).when('/news', {
            //     templateUrl: 'html/partials/news.html',
            //     controller: 'NewsController'
            // }).otherwise({
            //     redirectTo: '/'
            // });

            $urlRouterProvider.otherwise("/subscribe");
            $stateProvider.state('index', {
                abstract: true,
                // url: "/",
                templateUrl: "static/app/html/partials/home.html",
                controller: "HomeController"
            }).state('index.subscribe', {
                url: "/subscribe",
                templateUrl: "static/app/html/partials/subscribe.html",
                controller: "SubscribeController"
            }).state('index.thanks', {
                url: "/thanks",
                templateUrl: "static/app/html/partials/thanks.html",
                controller: "ThanksController"
            });

            // .state('article', {
            //     url: "/article/{id}",
            //     templateUrl: "static/app/html/partials/article.html",
            //     controller: "ArticleController"
            // }).state('contact', {
            //     url: "/contact",
            //     templateUrl: "static/app/html/partials/contact.html",
            //     controller: "ContactController"
            // }).state('careers', {
            //     url: "/careers",
            //     templateUrl: "static/app/html/partials/careers.html",
            //     controller: "CareersController"
            // }).state('job', {
            //     url: "/job/{id}",
            //     templateUrl: "static/app/html/partials/job.html",
            //     controller: "JobController"
            // }).state('job-application', {
            //     url: "/job-application/{id}",
            //     templateUrl: "static/app/html/partials/job-application.html",
            //     controller: "JobApplicationController"
            // }).state('newsletter', {
            //     url: "/newsletter",
            //     templateUrl: "static/app/html/partials/newsletter.html",
            //     controller: "NewsletterController"
            // }).state('news', {
            //     url: "/news",
            //     templateUrl: "static/app/html/partials/news.html",
            //     controller: "NewsController"
            // }).state('story', {
            //     url: "/story",
            //     templateUrl: "static/app/html/partials/story.html",
            //     controller: "StoryController"
            // }).state('studio', {
            //     url: "/studio",
            //     templateUrl: "static/app/html/partials/studio.html",
            //     controller: "StudioController"
            // }).state('team', {
            //     url: "/team",
            //     templateUrl: "static/app/html/partials/team.html",
            //     controller: "TeamController"
            // });
        }
    );
})();



