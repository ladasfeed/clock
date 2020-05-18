import React, {useState, useEffect, Component} from 'react';
import './Alarm.css'
import AlarmElement from './AlarmElement/AlarmElement'
import SetAlarmFirst from './SetAlarmFirst/SetAlarmFirst'
let isDidMount = false;

class Alarm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tempTime: '',
            clockInterval: ''
        }
    }

   

    updateClock() {
        let date = new Date();
        let sArrow = document.querySelector('.second_arrow');
        let mArrow = document.querySelector('.minutes_arrow');
        let hArrow = document.querySelector('.hours_arrow');
        //seconds
        let seconds = date.getSeconds();
        let transformSeconds;
        if (seconds!=60) {
            transformSeconds = seconds*6;
        } else {
            transformSeconds = 360;
        }
        //minutes
        let minutes = date.getMinutes();
        let transformMinutes;
        if (minutes!=60) {
            transformMinutes = minutes*6;
        } else {
            transformMinutes = 360;
        }
        //hours
        let hours = date.getHours();
        let transformHours;
        transformHours = minutes/2 + (hours%12)*30;

        
        sArrow.style.transform = `rotateZ(${transformSeconds}deg)`
        mArrow.style.transform = `rotateZ(${transformMinutes}deg)`
        hArrow.style.transform = `rotateZ(${transformHours}deg)`

        
      
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;
        let newTime = hours+':'+minutes+':'+seconds 

        this.setState({
            tempTime: newTime
        })
        
    }


    

    

    showSetAlarm() {
        let AlarmWindow = document.querySelector('.set_alarm_window-first');
        if (AlarmWindow.style.transform == 'scaleY(0)' || !AlarmWindow.style.transform)
            AlarmWindow.style.transform = 'scaleY(1)'
        else 
        AlarmWindow.style.transform = 'scaleY(0)'
    }


    showAlarms() {
        let list = document.querySelector('.show_alarms__alarms');
        if (!list.style.height || list.style.height=='0px')
            // list.style.height = this.props.arrayOfAlarms.length*127+30+'px';
            list.style.height = '40vh';
        else 
            list.style.height = '0'
    }

    componentWillUnmount() {
        clearInterval(this.state.clockInterval)
    }

    componentDidMount() {
        this.setState({
            clockInterval: setInterval(() => this.updateClock(), 1000)
        })
        setTimeout(()=> {
            const sectionBlock = document.querySelector('.clock_wrapper');
            sectionBlock.style.opacity = '1';
            sectionBlock.style.transform = 'translateY(0px)'
        })
    }

  

    


    render() {
        return (
            <div className="clock_wrapper">
               
                <div className="main_clock">
                    <div className="show_alarms-wrapper">
                        <div onClick={() => this.showAlarms()} style={{color: this.props.mainColor}} className="show_alarms_button">Show</div>
                        <div className="show_alarms__alarms">
                        { this.props.arrayOfAlarms.map((item, index) => {
                            return <AlarmElement deleteAlarm={this.props.deleteAlarm} showAlarms={this.showAlarms} id={index} alarmElement = {item} />
                        })}
                        </div>
                    </div>
                    <div style={{border: '4px solid ' +  this.props.mainColor}} className="circle_clock">
                        <div style={{backgroundColor:  this.props.mainColor}}   className="second_arrow">
    
                        </div>
                        <div style={{backgroundColor:  this.props.mainColor}}  className="minutes_arrow">
    
                        </div>
                        <div style={{backgroundColor:  this.props.mainColor}}  className="hours_arrow">
    
                        </div>
                        <div style={{backgroundColor:  this.props.mainColor}}  className="clock_dot">
    
                        </div>
                    </div>
                    <div className="set_alarms-wrapper">
                       <div style={{color: this.props.mainColor}} onClick={() => this.showSetAlarm()} className="set_alarm_title">
                           Set alarm
                       </div>
    
                       <div className="set_alarm_window-first">
                            <SetAlarmFirst setAlarmMusic={this.props.setAlarmMusic} addAlarm = { this.props.addAlarm} showAlarms={() => this.showAlarms()}/>
                       </div>
                       <div className="set_alarm_window-second">
    
                       </div>
                    </div>
                </div>
                <div style={{color:  this.props.mainColor}} className="temp_time">
                    {this.state.tempTime}
                </div>
            </div>
    
        )
    }
  
}

export default Alarm;