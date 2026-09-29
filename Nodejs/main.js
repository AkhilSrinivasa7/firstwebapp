// It is a used to export the math.js file (require(math.js))
//let math=require('./math')
//console.log(math.add(10,20));
//console.log(math.sub(10,5));

//importing the required fffunction only
let {add,pi}=require('./math')
console.log(add(10,20));
console.log(pi);