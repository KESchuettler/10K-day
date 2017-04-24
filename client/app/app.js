angular.module('tenKDay', [
  'tenKDay.services',
  'tenKDay.controllers',
])
.config(($routeProvider, $httpProvider) => {
  .when('/', {
    templateUrl: 'app/controllers/users.html',
    controller: 'UsersController'
  })
})
