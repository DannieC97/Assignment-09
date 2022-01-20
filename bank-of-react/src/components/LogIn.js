import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import {BrowserRouter as Redirect} from 'react-router-dom'


function LogIn(props) {
    const [red,setRed]= useState(false)
    

    function handleSubmit(e) {
        e.preventDefault()
        const newUser = props.currentUser
        newUser.userName = document.getElementById("user").value
        props.setUser(newUser)
        console.log(props.currentUser)
        setRed(true)

    }
    // redircet does not work
    if(red){
        return(<Redirect to='./userProfile'/>)
    }
   
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="user" name="userName"  />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    )

}
export default LogIn;