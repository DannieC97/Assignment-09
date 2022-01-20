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
        <header>
            <h3 className="nav-item" onClick={homeRedirect}>Home</h3>
            <h3 className="nav-item" onClick={loginRedirect}>Login</h3>
            <h3 className="nav-item" onClick={userProfRedirect}>User Profile</h3>
            <h3 className="nav-item" onClick={creditRedirect}>Credits</h3>
            <h3 className="nav-item" onClick={debitRedirect}>Debits</h3>
        </header>
    )
}

export default Navigation
