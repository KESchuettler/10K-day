angular.module('tenKDay.users', [
])

.controller('UsersController', function ($scope, $window, Users) {
  $scope.display;

  $scope.phoneNumber = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/;

  $scope.addUser = function (user) {
    var birthday = new Date(JSON.parse(JSON.stringify(user)).birthday);
    user.tenKday = new Date(birthday.setDate(birthday.getDate() + 10000)).toDateString();
    $scope.display = user.tenKday;

    Users.addOne({user: user})
    .then(function(resp) {console.log('Controller promise return: ',resp)})
    .catch(function(err) {console.error(err)});
  }
});
