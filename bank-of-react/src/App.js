import './App.css';
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';


function App() {
  const [balance, setBalance] = useState(14568.27)
  const [currentUser, setUser] = useState(
    {
      userName: 'bob_loblaw',
      memberSince: '08/23/99'
    }
  )
  function test(){
    console.log("hello")
  }
  //this is the function that infinites loops without useEffect
useEffect(()=>{ 
  function mockLogIn(logInInfo){
    const newUser = {...currentUser}
    newUser.userName = logInInfo
    setUser(newUser)
    console.log(newUser)
  }
  mockLogIn("dannie")
},[])

  
  
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home balance={balance} />} />
          <Route exact path="/userProfile" element={<UserProfile
          userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
          <Route exact path="/login" element={<LogIn test={test} />} />
        </Routes>
        
      </div>

    </Router>
  );
}

export default App;
