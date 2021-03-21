function run() {
  new Vue({
    el: '#app',
    data: {
      message: ''
    },
    methods: {
      doSomething: function () {
        console.log('The input string value is: ' + this.message);
               if(this.message == '123')
               {
                document.getElementById("app").innerHTML = "Mesajul este egal cu 123";
               }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
