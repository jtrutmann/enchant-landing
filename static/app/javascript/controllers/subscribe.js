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


