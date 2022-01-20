import '../App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom'

function Home(props) {


    return (

        <div>

            <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="bank" className='bank-img'/>
            <h1>Bank of React</h1>
            <div className='links'>
                <Link to="/userProfile">User Profile</Link>
                <Link className='link1' to="/login">Log In</Link>

            </div>
            <AccountBalance balance={props.balance} />

        </div>

    );
}

export default Home;