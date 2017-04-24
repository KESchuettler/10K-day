angular.module('tenKDay.users', [])

.controller('UsersController', function ($scope, $window, Users) {
  $scope.addUser = function (user) {
    Users.addOne({user: user})
    .then(function(resp) {console.log('Controller promise return: ',resp)})
    .catch(function(err) {console.error(err)});
  }
});
