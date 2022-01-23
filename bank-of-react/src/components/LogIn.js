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
            <div className="center">
                <img  src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="bank" className='bank-img'/>
            </div>
            <form>
                <div className="center">
                    <label htmlFor="userName">User Name</label>
                    <br></br>
                    <input type="text" id="user" name="userName"  />
                </div>
                <div className="center">
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password" name="password" />
                </div>
                <div className="center">
                    <button className="center" onClick={handleLoginSubmit}>Log In</button>
                </div>
                <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </form>
            <footer>
            <h1>Authors:</h1>
                <h2>Vincent</h2>
                <h2>Daniel</h2>
                <h2>Rivka</h2>
            </footer>
        </div>
    )

}
export default LogIn;