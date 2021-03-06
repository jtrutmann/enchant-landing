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



 (function(){
    var app = angular.module("home", ['ui-service']);
    /**
    Angular controller to handel user authentication.
    @class AuthController
    */
    app.controller("HomeController", ['$scope', '$location', '$q', '$resource', 'UiService',

                                    function ($scope, $location, $q, $resource, UiService) {



    }]);
})();


 (function(){
    var app = angular.module("subscribe", ['ui-service',]);
    /**
    Angular controller to handel user authentication.
    @class AuthController
    */
    app.controller("SubscribeController", ['$scope', '$stateParams', '$resource', '$location', 'UiService',

                                    function ($scope, $stateParams, $resource, $location, UiService) {

        $scope.form = {};

        $scope.subscribe = function(){
            var Subscriber = $resource('/api/subscribers/:id/', {id:'@id'});
            console.log("Subscribe");
            Subscriber.save($scope.form, function(result) {
                if(result.status != 'OK')
                    throw result.status;

                console.log("Subscribe Success");
                console.log(result.status);
                $scope.form = {};
            });
            $scope.activateThanks();
            $scope.main();
        };


        $scope.activateThanks= function() {
            $location.path('/thanks');
        };


        $scope.canvas;
        $scope.context;
        $scope.proton;
        $scope.renderer;
        $scope.emitter;
        $scope.stats;
        $scope.colors;





        $scope.main = function() {

            // $scope.colors = ['#529B88', '#CDD180', '#FFFA32', '#FB6255', '#FB4A53', '#FF4E50', '#F9D423'];
            $scope.colors = ['#ED5565', '#FC6E51', '#FFCE54', '#A0D468', '#48CFAD', '#38AFDA', '#5D9CEC', '#AC92EC', '#EC87C0'];
            $scope.canvas = document.getElementById("testCanvas");
            if($scope.canvas == null) {
                console.log("FUCK");
            }
            $scope.canvas.width = window.innerWidth;
            $scope.canvas.height = window.innerHeight;
            $scope.context = $scope.canvas.getContext('2d');
            $scope.context.globalCompositeOperation = "darker";
            //$scope.addStats();

            $scope.createProton();
            $scope.tick();
        }


        $scope.createProton = function() {
            $scope.proton = new Proton;
            $scope.emitter = new Proton.Emitter();
            $scope.emitter.rate = new Proton.Rate(new Proton.Span(3, 6), new Proton.Span(.05, .2));
            $scope.emitter.addInitialize(new Proton.Mass(1));
            $scope.emitter.addInitialize(new Proton.Radius(20, 200));
            $scope.emitter.addInitialize(new Proton.Life(2, 4));
            $scope.emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, $scope.canvas.width, $scope.canvas.height)));
            $scope.emitter.addBehaviour(new Proton.Alpha(0, 1, Infinity, Proton.easeOutCubic));
            $scope.emitter.addBehaviour(new Proton.Scale(1, 0, Infinity, Proton.easeOutCubic));
            $scope.emitter.addBehaviour(new Proton.Color($scope.colors, 'random'));

            $scope.emitter.emit();
            $scope.proton.addEmitter($scope.emitter);

            $scope.renderer = new Proton.Renderer('canvas', $scope.proton, $scope.canvas);
            $scope.renderer.start();
        }

        $scope.tick = function() {
            requestAnimationFrame($scope.tick);

            //stats.begin();
            $scope.proton.update();
            // $scope.canvas.width = window.innerWidth;
            // $scope.canvas.height = window.innerWidth;
            //stats.end();
        }
    }]);
})();


 (function(){
    var app = angular.module("thanks", ['ui-service']);
    /**
    Angular controller to handel user authentication.
    @class AuthController
    */
    app.controller("ThanksController", ['$scope', '$timeout', '$location', '$q', '$resource', 'UiService',

                                    function ($scope, $timeout, $location, $q, $resource, UiService) {

        $scope.contents = [];
        $scope.articles = [];


        // $scope.return = function() {
        //     $timeout( function() {
        //         $location.path("/subscribe");
        //     }, 2000);
        // };
    }]);
})();


 (function(){

    var app = angular.module('ui-service', []);


    app.factory('UiService', ['$rootScope', '$timeout', '$location', '$anchorScroll',

                                        function($rootScope, $timeout, $location, $anchorScroll
                                            ){


// --------------------------------------------------
// Private
// --------------------------------------------------

        var activeTab = null;

        $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {

            var path = $location.path();

            // if(path === '/thanks') {
            //     console.log("time to change");
            //     $timeout(function(){
            //         console.log("goingHome");
            //         $location.path('/subscribe');
            //     }, 5000);
            // }
        });







// --------------------------------------------------
// Public
// --------------------------------------------------


        return {

            activeTab: activeTab,

        };
    }]);
})();







