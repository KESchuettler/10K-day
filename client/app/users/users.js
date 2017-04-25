angular.module('tenKDay.users', [
])

.controller('UsersController', function ($scope, $window, Users) {
  $scope.display;

  $scope.phoneNumber = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/;

  $scope.addUser = function (user) {
    var birthday = user.birthday;
    var tenKday = birthday.setDate(birthday.getDate() + 10000);
    $scope.display = new Date(tenKday).toDateString();

    Users.addOne({user: user})
    .then(function(resp) {console.log('Controller promise return: ',resp)})
    .catch(function(err) {console.error(err)});
  }
});
