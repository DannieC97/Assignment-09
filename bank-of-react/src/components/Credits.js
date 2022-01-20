import { Link } from 'react-router-dom'
function Credits(props) {
    const data = props.creditData
    console.log(data)
    return (
        <div>
            <h1>Credits</h1>
            <Link to="/">Home</Link>
            
        </div>
    )
}
export default Credits;