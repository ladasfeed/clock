import React, {useState, useEffect} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timerId: '',
            didMount: false,
            func: false,
            help: false
        };
      }



    closeHeader() {
        console.log('??')
        document.querySelector('.header_wrapper').style.transform = 'translateY(-200px)'
        document.querySelector('.settings_wrapper').style.transform = 'translateY(500px)'

        if  (document.querySelector('.show_alarms-wrapper')) {
            document.querySelector('.show_alarms-wrapper').style.transform = 'translateY(-400px)'
            document.querySelector('.set_alarm_title').style.transform = 'translateY(-400px)'
        }

      
    }

    
    setTimerCloseHeader() {

        document.querySelector('.header_wrapper').style.transform = 'translateY(0px)'
        document.querySelector('.settings_wrapper').style.transform = 'none'

        if  (document.querySelector('.show_alarms-wrapper')) {
            document.querySelector('.show_alarms-wrapper').style.transform = 'translateY(0px)'
            document.querySelector('.set_alarm_title').style.transform = 'translateY(0px)'    
        }
        
        document.removeEventListener('mousemove', this.state.func)
        setTimeout(() => document.addEventListener('mousemove', this.state.func), 300);

        clearTimeout(this.state.timerId)
        this.setState({
            timerId: setTimeout(()=>this.closeHeader(), 30000)
        })

        
    }



    
    componentDidUpdate() {
       
        // if(this.state.didMount && !this.state.func) {
            
         
        // }

        if(!this.state.help)
        {
            console.log(this.state.func, this.state.didMount)
            document.addEventListener('mousemove', this.state.func)
            setTimeout(()=>this.closeHeader(), 30000)
            this.setState({
                help: true
            })
        }
    }

    componentDidMount() {
      
        this.setState({
            func: this.setTimerCloseHeader.bind(this)
        })
       
    }
   

    render() {
    return (
        <div className="header_wrapper">
            <div className="header">
                <Link to='./'>
                    <div className="header_item">
                        <img src={require('../../img/clock.png')}></img>
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
                        <img src={require('../../img/timer.png')}></img>
                        <div className="header_item_underline">Timer</div>
                    </div>
                </Link>

                <Link to='./sec'>
                    <div className="header_item">
                        <img src={require('../../img/secondomer.png')}></img>
                        <div className="header_item_underline">Seconds</div>
                    </div>
                </Link>
            </div>
        </div>
    )}
}


export default Header;