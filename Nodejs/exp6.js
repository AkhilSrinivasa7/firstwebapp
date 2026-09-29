function getData(name,callback){
    let err=null;
    let data="surender";
    callback(err,data)
}
getData('surender',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})