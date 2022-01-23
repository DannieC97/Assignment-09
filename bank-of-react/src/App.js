import './App.css';
import React, { Component, useEffect, useState } from 'react';
import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Credits from './components/Credits';
import Debits from './components/Debits';


function App() {
  const [balance, setBalance] = useState(14568.27)
  const [currentUser, setUser] = useState(
    {
      userName: 'bob_loblaw',
      memberSince: '08/23/99'
    }
  )
  const [creditData,setCreditData] = useState([])
  const [debitData,setDebitData] = useState([])
    useEffect(()=> {
      (async ()=>{
        const response = await fetch(`https://moj-api.herokuapp.com/credits`);
        const data = await response.json();
        setCreditData(data)
        
        
      })();
    },[]);
    useEffect(()=> {
      (async ()=>{
        const response = await fetch(`https://moj-api.herokuapp.com/debits`);
        const data = await response.json();
        setDebitData(data)
        
      })();
    },[]);
   // console.log(creditData)
   // console.log(debitData)
    
    

  
  return (
    <HashRouter>

      <div className="App">
        <Routes >
          <Route exact path={"/"} element={<Home balance={balance} />} />
          <Route exact path="/userProfile" element={<UserProfile
            currentUser={currentUser} balance={balance} />} />
          <Route exact path="/login" element={<LogIn
            currentUser={currentUser} setUser={setUser} />} />
            <Route exact path="/credits" element={<Credits
            creditData={creditData} setBalance={setBalance} setCreditData={setCreditData} />}/>
            <Route exact path="/debits" element={<Debits
            debitData={debitData} setDebitData={setDebitData} setBalance={setBalance} />} />
        </Routes>

      </div>

    </HashRouter>
  );
}

export default App;
