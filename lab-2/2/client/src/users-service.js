function users() {
  get = function () {
    return axios.get('http://localhost:3000/users');
  };
     deleteUser = function (index) {
        console.log(index);
        return axios.delete('http://localhost:3000/users/' + index);
    };
      addUser = function ( body ) {
          return axios.put('http://localhost:3000/users/', body );
      };
         modifyUser = function ( index, body ) {
              return axios.put('http://localhost:3000/users/'+index, body, index);
            };
  return {
    get: get
  };
}
