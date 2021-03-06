console.log('Welcome to data transmission ');
console.log('Hello World');

var user = {
id: 1,
name :" Daniel ",
age: 21,
};
console.log(user.id, user.name,"age= ",user.age);
document.getElementById('message').innerHTML = 'Message from JavaScript';
document.getElementById('message').innerHTML = 'Modificare';
function print(message) {
    console.log(message);
}
print('hello');


var password='123456';
console.log(password=='123456'? 'ALLOW':'DENY');


if(password == '123456'){
    console.log('permission accepted');
}else {
    console.log('permission denied');
}


$("#message2").html('Second message');