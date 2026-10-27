//Collect the data from form to javascript
import {useState} from "react"

function Contact(){
    let [name,setName]=useState("")
    let [age,setAge]=useState(18)
    let [mobile,setMobile]=useState("")

    let RegisterData=(event)=>{
        event.preventDefault();
    console.log(name,age,mobile);
    }
 return(
    <div>
        <h1>Contact Page</h1>
        <form onSubmit={RegisterData}>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input><br/>
            <input type="number" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter your age"></input><br/>
            <input type="text" value={mobile} onChange={(event)=>setMobile(event.target.value)} placeholder="Enter your Mobile No"></input><br/>
            <button>Submit</button>
        </form>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{mobile}</h3>
    </div>
 )
}
export default Contact

//changes:
//react form is used to collect the data from user.
//inport import {useState} from "react" line for using useState hook to collect the data from form to javascript
//calue ={name} is used to bind the value of input field to name variable in the form
//onchange event is used to collect the data from form to javascript
//onsubmit event is used to send the data to backend server