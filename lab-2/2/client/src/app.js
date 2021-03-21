function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],
      usersService: null
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
    deleteUser = function (index) {
            console.log(index);
            return axios.delete('http://localhost:3000/users/' + index);
        };

        }

  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
