let express=require('express');
let app=express();
let mongoose=require('mongoose');
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');

//indicatiing serve incoming json format data
app.use(express.json());

//connecting database
mongoose.connect("mongodb://localhost:27017/HR_Management").then(()=>{console.log("database connected.")}).catch((err)=>{console.log("error connecting database.",err)});

app.use("/api/hr",hrroutes);
//localhost:3000/api/hr/viewemployees
app.use("/api/emp",emproutes);

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})