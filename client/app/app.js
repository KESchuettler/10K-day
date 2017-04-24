angular.module('tenKDay', [
  // 'tenKDay.services',
  //'tenKDay.users',
  'ngRoute'
])
.config(($routeProvider, $httpProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'app/users/users.html',
    controller: 'UsersController'
  })
  .otherwise({
    redirectTo: '/'
  })
})
.factory('placeholder', ($window) => {
  // enter services here
})
