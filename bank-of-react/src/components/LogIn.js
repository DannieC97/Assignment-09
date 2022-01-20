import { Link } from "react-router-dom"
import { useState, useEffect } from "react/cjs/react.development"
import {BrowserRouter as Redirect} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Navigation from './Navigation';

function LogIn(props) {
    const [red,setRed]= useState(false)
    let navigate = useNavigate()
    function userProfRedirect(){    
            navigate("/userProfile")
     }
    function handleLoginSubmit(e) {
        e.preventDefault()
        const newUser = props.currentUser
        newUser.userName = document.getElementById("user").value
        let date = new Date()
        let dateString = date.getMonth()+1 +"/"+ date.getUTCDate() +"/"+ date.getUTCFullYear()
        newUser.memberSince = dateString
        props.setUser(newUser)
        console.log(props.currentUser)
        setRed(true)
        setTimeout(userProfRedirect, 500);
    }
        
    
   
    return (
        <div>
            <Navigation/>
            <form>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="user" name="userName"  />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button onClick={handleLoginSubmit}>Log In</button>
            </form>
        </div>
    )

}
export default LogIn;