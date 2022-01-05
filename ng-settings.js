

app.run(["$rootScope", "$location", "$http", "$cacheFactory", "$window", "$state", "jwtHelper", "$cookies", "$stateParams", "$state", "openNewWindowService", function ($rootScope, $location, $http, $cacheFactory, $window, $state, jwtHelper, $cookies, $stateParams, $state, openNewWindowService) {

    var timer = 0;

    setInterval(timerInc, 3000);

    $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {


        if ($cookies.getObject('userName') === "external@clouderty.co.uk") {

        }

    });



    //*/
    function timerInc() {
        if ($window.sessionStorage.token != undefined) {
            timer++;
            if(timer === 600) {
                alert("You have been inactive for 10 mins, now logging out.");
                $rootScope.logout();
            }
        }
    }

    $("body").mousemove(function () {
        timer = 0;
    })



    console.log("$stateParams.propertyID: " + $stateParams.propertyID);

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

    })



    $rootScope.decode = function () {
        if ($window.sessionStorage.token != undefined) {
            $rootScope.decodedToken = jwtHelper.decodeToken($window.sessionStorage.token);
        }
    }


     $rootScope.sendEmail = function (from, to, subject, message, recipientName, attachmentFileName, attachmentFileLocation) {
         console.log("inside rootscope function sendEmail");
         $rootScope.email = {};
         $rootScope.email.from = from;
         $rootScope.email.to = to;
         $rootScope.email.subject = subject;
         $rootScope.email.message = message;
         $rootScope.email.recipientName = recipientName;
         $rootScope.email.attachmentFileName = attachmentFileName;
         $rootScope.email.attachmentFileLocation = attachmentFileLocation;
         $http.post('api/email', $rootScope.email).success(function(response) {
         });
     };


    $rootScope.sendEmail2 = function (from, to, subject, message, recipientName) {

        $rootScope.email = {};
        $rootScope.email.from = from;
        $rootScope.email.to = to;
        $rootScope.email.subject = subject;
        $rootScope.email.message = message;
        $rootScope.email.recipientName = recipientName;
        //$http.get('/api/email.php', $rootScope.email).success(function(response) {
        //$http.get('api/email.php', $rootScope.email).success(function(response) {
        $http.post('api/email', $rootScope.email).success(function(response) {
        });
    };

    $rootScope.logout = function () {
        console.log("logout!");
        $window.sessionStorage.removeItem("token");
        $rootScope.decodedToken = "";
        window.location.href = "#/login";
        $cookies.remove("userName");
        $cookies.remove("password");
    }


    $rootScope.logoutExternalPage = function () {
        console.log("logout!");
        $window.sessionStorage.removeItem("token");
        $rootScope.decodedToken = "";
        //window.location.href = "#/login";
        $cookies.remove("userName");
        $cookies.remove("password");
    }

    $rootScope.decode();
}]);

clouderty.factory('authInterceptor', ['$rootScope', '$q', '$window', function ($rootScope, $q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },
        response: function (response) {
            if (response.status === 401) {
                // handle the case where the user is not authenticated
            }
            return response || $q.when(response);
        }
    };
}]);

clouderty.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
}]);

clouderty.config(['$mdGestureProvider',function ($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
}]);

clouderty.constant('moment', moment);

