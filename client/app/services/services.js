angular.module('tenKDay.services', [])

  .factory('Users', ($http) => {
    var addOne = function (user) {
      return $http({
        method: 'POST',
        url: '/api/users/create',
        data: user
      })
      .then(function (resp) {return resp})
      .catch(function(err) {console.error(err)})
    };

    return {
      addOne: addOne
    }
  })
