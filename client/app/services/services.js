angular.module('tenKDay.services', [])

  .factory('Users', function ($http) {

    var addOne = function (user) {
      console.log('Factory addOne called...')
      console.log(user)
      return $http({
        method: 'POST',
        url: '/api/users/create',
        data: user
      })
      .then(function (resp) {
        console.log('Factory resp, ', resp);
        return resp;
      })
      .catch(function(err) {console.error(err)})
    };

    return {
      addOne: addOne
    }
  })
