// It is a seperate File as1 module (module,export)
function add(a,b){
    return a+b
}
let sub=(a,b)=>{return a-b;}
const pi=3.14;
let r=5;
//module.exports.add=add;
module.exports={add,sub,pi,r};