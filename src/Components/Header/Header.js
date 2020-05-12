import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'


function Header() {

    return (
        <div className="header_wrapper">
            <div className="header">
                <Link to='./'>
                    <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                    </div>
                </Link>

                <Link to='./alarm'>
                    <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                    </div>
                </Link>


                <Link to='./timer'>
                    <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                    </div>
                </Link>

                <Link to='./sec'>
                    <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default Header;