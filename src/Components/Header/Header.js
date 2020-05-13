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
                        <div className="header_item_underline">Clock</div>
                    </div>
                </Link>

                <Link to='./alarm'>
                    <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                        <div className="header_item_underline">Alarm</div>
                    </div>
                </Link>


                <Link to='./timer'>
                    <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                        <div className="header_item_underline">Timer</div>
                    </div>
                </Link>

                <Link to='./sec'>
                    <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                        <div className="header_item_underline">Seconds</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default Header;