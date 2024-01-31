import '../Style/AdminLogin.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

const AdminLogin = () => {
    let [username, setuname]=useState("")
    console.log(username)
    let [password, setpassword]=useState("")
    console.log(password)

    let navigate=useNavigate()

    function login()
    {
        if(username=='abcd' & password==1234)
        {
        alert(`login success`)
        navigate('/adminhomepage')
        }
        else alert(`login unsuccess`)
    }

    return ( 
        <div className="adminlogin">
            <form action="">
            <h1>Admin Login</h1> <br /><br />
               <div className="ip"  style={{display:'flex',margin: '5px'}}>
                Username <input type="text"  value={username} onChange={(entered_value)=>{setuname(entered_value.target.value)}} placeholder='username' />
               </div>
               <div className="ip" style={{display:'flex', margin:'5px'}}>
                Password <input type="password" value={password} onChange={(entered_value)=>{setpassword(entered_value.target.value)}} placeholder='password' /> <br />
               </div>
                <input type="text" value={password}  placeholder='revealed password' /> 
                <br /><br />
                <button onClick={login}>Login</button>
                <br />
                <span>Are you the new user?<Link to='/Register'>Register</Link></span>
            </form>
        </div>
     );
}

export default AdminLogin;