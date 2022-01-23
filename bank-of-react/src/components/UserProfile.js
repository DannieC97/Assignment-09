import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import Navigation from './Navigation';
function UserProfile(props) {
    return (
        <div className="center">
            <Navigation/>
            <h1 className="center">User Profile</h1>
            <div className="center">UserName: {props.currentUser.userName} </div>
            <div className="center">Member Since: {props.currentUser.memberSince} </div>
            <AccountBalance className="center" balance={props.balance}/>
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
            <footer>
                <h1>Authors:</h1>
                <h2>Vincent</h2>
                <h2>Daniel</h2>
                <h2>Rivka</h2>
            </footer>
        </div>
        
    )
}
export default UserProfile;