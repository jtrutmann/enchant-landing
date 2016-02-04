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


