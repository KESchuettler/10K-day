require('angular')

angular.module('tenKDay.services', [])

  .factory('Users', function ($http) {

    var addOne = function (user) {
      return $http({
        method: 'POST',
        url: '/api/users/create',
        data: user
      })
      .then(function (resp) {
        console.log('Server resp, ', resp);
        if(resp.status === 200) {
          alert('This number has already been used.')
        }
        return resp;
      })
      .catch(function(err) {console.error(err)})
    };

    return {
      addOne: addOne
    }
  })
