import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import Navigation from './Navigation';
function Debits(props) {
    //const data = props.debitData
   // console.log(data)
   function addItem(){
       let amount1 = document.querySelector(".debt-amount").value
       let description1 = document.querySelector(".debt-description").value
       let newId = String(amount1).substring(0,1)+description1.substring(0,2)
       let date = new Date()
       let date1 = String(date)
       let newItem={amount: amount1, date: date1, description: description1,id: newId}
       props.setDebitData([...props.debitData, newItem])
       props.setBalance(props.balance-amount1)
   }

    return (
        <div>
            <Navigation/>
             <AccountBalance balance={props.balance}/>
            <h1>Debits</h1>
          
                {props.debitData.map((item)=>{
                  return  (
                  <ul key={item.id}>
                     <li> {item.description}</li>
                     <li>{item.date.substring(0, 9)}</li>
                     <li>{"$"+item.amount}</li>
                     
                      

                  </ul>
                  )
                })}
           
            <h5>Add a Debit:</h5>
            <label>Description</label>
            <input type="text" className="debt-description" ></input>
            <label>Amount</label>
            <input type="number" className="debt-amount" ></input>
            <button onClick={addItem} className='debit-btn'>ADD</button>
           
            
        </div>
    )
}
export default Debits;