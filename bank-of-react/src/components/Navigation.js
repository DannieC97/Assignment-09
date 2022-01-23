import { useNavigate } from "react-router-dom"

function Navigation(){
    let navigate = useNavigate()
    function userProfRedirect(){    
            navigate("/userProfile")
     }
    function loginRedirect(){    
        navigate("/login")
    }  
    function homeRedirect(){    
        navigate("/")
    }
    function creditRedirect(){    
        navigate("/credits")
    }  
    function debitRedirect(){    
        navigate("/debits")
    }
    return(
        <header className="nat">
            <button className="nav-item2" onClick={homeRedirect}><b>Home</b></button>
            <button className="nav-item2" onClick={loginRedirect}>Login</button>
            <button className="nav-item2" onClick={userProfRedirect}>User Profile</button>
            <button className="nav-item2" onClick={creditRedirect}>Credits</button>
            <button className="nav-item2" onClick={debitRedirect}>Debits</button>
        </header>
    )
}

export default Navigation
