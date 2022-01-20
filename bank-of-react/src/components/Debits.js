import { Link } from 'react-router-dom'
function Debits(props) {
    const data = props.debitData
    console.log(data)
    return (
        <div>
            <h1>Debits</h1>
            <Link to="/">Home</Link>
            <ul>
                {data.map((item)=>{
                  return  <li key={item.id}>{item.date}</li>
                })}
            </ul>
        </div>
    )
}
export default Debits;