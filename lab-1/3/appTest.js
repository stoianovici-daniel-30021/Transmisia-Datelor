function test(){
    console.log(sum(2)==0?'Passed':'Failed');
    console.log(sum(3)==6?'Passed':'Failed');
    console.log(sum(9)==10?'Passed':'Failed');
    console.log(sum(0)=='n is undefined'?'Passed':'Failed');
    console.log(sum('Hello World')=="not a number"?'it is a string':'it is a number');
    console.log(sum(1000000)==="not a number"?'it is a string':'it is a number');
    console.log(sum(false)==="not a number"?'it is a boolean':'it is a number');
}
test();
