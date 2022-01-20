import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import Navigation from './Navigation';
function UserProfile(props) {
    return (
        <div>
            <Navigation/>
            <h1>User Profile</h1>
            <div>UserName: {props.currentUser.userName} </div>
            <div>Member Since: {props.currentUser.memberSince} </div>
            <AccountBalance balance={props.balance}/>
        </div>
    )
}
export default UserProfile;