import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import Navigation from './Navigation';
function Credits(props) {
    //const data = props.creditData
   // console.log(data)
   function addItem(){
        let amount1 = document.querySelector(".credit-amount").value
        let description1 = document.querySelector(".credit-description").value
        let newId = String(amount1).substring(0,1)+description1.substring(0,2)
        let date = new Date()
        let date1 = String(date)
        let newItem={amount: amount1, date: date1, description: description1,id: newId}
        amount1 = parseFloat(amount1)
        props.setBalance(props.balance + amount1)
        props.setCreditData([...props.creditData, newItem])
        
    }
    return (
        <div>
        <Navigation/>
        <AccountBalance balance={props.balance}/>
        <h1>Credits</h1>
       
            {props.creditData.map((item)=>{
              return  (
              <ul key={item.id}>
                 <li> {item.description}</li>
                 <li>{item.date.substring(0, 9)}</li>
                 <li>{"$"+item.amount}</li>
                 
                  

              </ul>
              )
            })}
       
        <h5>Add a Credit:</h5>
        
        <label>Description</label>
        <input type="text" className="credit-description" ></input>
        <label>Amount</label>
        <input type="number" className="credit-amount" ></input>
        <button onClick={addItem} className='credit-btn'>ADD</button>
    </div>
    )
}
export default Credits;