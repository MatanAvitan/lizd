/**
 * Created by Matan on 4/13/2017.
 */

var app = angular.module('FreeLancer', ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',{
            controller: 'FreeLancer.MainController',
            templateUrl: 'Ofir - Freelancer/index.html'
        });
}]);
