import '../Style/AdminSignUp.css'
import { useState } from 'react';
import axios from 'axios';

const AdminSignUp = () => {
    let[name, setname]=useState("")
    let[dob, setdob]=useState("")
    let[email, setemail]=useState("")
    let[phno, setphno]=useState("")
    let[password, setpassword]=useState("")
    let[cnfpswd, setcnfpswd]=useState("")
    let data={name,dob,email,phno,password}
    
    let addAdmin=(e)=>{
      e.preventDefault()
      if(cnfpswd===password)
      {
        axios.post("http://localhost:1000/admin",data) // axios is upgraded version of fetch() and post 
        .then((res)=>{console.log(res)
            alert(`Data Added Successfully`)
        })

        .catch((err)=>{
            console.log(err)
            alert(`Invalid data`)
        }
        )
      }
      else alert('password does not match')
    }
    return (
        <div className="adminsignup">
            <form onSubmit={addAdmin} action="">
                <label htmlFor="">
                    Name : <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter username" />
                </label>
                <label htmlFor="">
                    DOB : <input required value={dob} onChange={(e)=>{setdob(e.target.value)}} type="date"/>
                </label>
                <label htmlFor="">
                    Email : <input required value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="Enter email"/>
                </label>
                <label htmlFor="">
                    phone no : <input required value={phno} onChange={(e)=>{setphno(e.target.value)}} type="tel" pattern="[6789][0-9]{9}" placeholder="Enter telephone number"/>
                </label>
                <label htmlFor="">
                    password : <input required value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password"  placeholder="Enter password"/>
                </label>
                <label htmlFor="">
                    confirm password : <input required value={cnfpswd} onChange={(e)=>{setcnfpswd(e.target.value)}} type="password"  placeholder="Enter password"/>
                </label>
                <br />
                <br />
                <button type="submit">`Register</button>
            </form>
        </div>
    );
}
 
export default AdminSignUp;