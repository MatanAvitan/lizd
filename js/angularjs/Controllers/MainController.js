/**
 * Created by Matan on 4/13/2017.
 */

app.controller('FreeLancer.MainController', ['$scope', '$http', function ($scope, $http) {
    console.log('Entered');
    // create a blank object to handle form data.

    // calling our submit function.
    $scope.submitForm = function ($scope, name, address, email, message) {
        var user = {};
        // Build user element
        user.name = name
        user.address = address
        user.email = email
        user.message = message
        console.log(user)
        // Posting data to python file
        $http({
            method: 'POST',
            url: '/data',
            data: user, //forms user object
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .success(function (data) {
                $scope.message = data.message;
                console.log(message);
                console.log('Success');
            });
    };
}]);