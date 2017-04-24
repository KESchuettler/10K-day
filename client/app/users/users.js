angular.module('tenKDay.users', [])

.controller('UsersController', function ($scope, $window, Users) {
  $scope.addUser = function (user) {
    console.log('Pushing new user ', user.name, 'to database.');
    Users.addOne({user: user})
    .then(function(resp) {console.log(resp)})
    .catch(function(err) {console.error(err)});
  }
});
