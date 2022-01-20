import { Link } from 'react-router-dom'
function UserProfile(props) {
    return (
        <div>
            <h1>User Profile</h1>
            <Link to="/">Home</Link>
            <div>UserName: {props.currentUser.userName} </div>
            <div>Member Since: {props.currentUser.memberSince} </div>
        </div>
    )
}
export default UserProfile;