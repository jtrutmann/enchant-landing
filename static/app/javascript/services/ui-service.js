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







