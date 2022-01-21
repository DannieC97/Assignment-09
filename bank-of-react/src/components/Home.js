import '../App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import Navigation from './Navigation';
import { Link } from 'react-router-dom'

function Home(props) {

    return (

        <div>
            <Navigation/>
            <div className="center">
                <div class="imgcontainer">
                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="bank" className='bank-img'/>
                </div>
            <h1>Bank of React</h1>
            <AccountBalance balance={props.balance} />
            </div>
        </div>

    );
}

export default Home;