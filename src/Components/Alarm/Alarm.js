import React, {useState, useEffect} from 'react';
import './Alarm.css'
import AlarmElement from './AlarmElement/AlarmElement'
import SetAlarmFirst from './SetAlarmFirst/SetAlarmFirst'
let isDidMount = false;

function Alarm(props) {

    const [tempTime, setTempTime] = useState('');

    function updateClock() {
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

        let newTime = hours+':'+minutes+':'+seconds 
        
        setTempTime(newTime)
    }


    

    

    function showSetAlarm() {
        let AlarmWindow = document.querySelector('.set_alarm_window-first');
        if (AlarmWindow.style.transform == 'scaleY(0)' || !AlarmWindow.style.transform)
            AlarmWindow.style.transform = 'scaleY(1)'
        else 
        AlarmWindow.style.transform = 'scaleY(0)'
    }


    function showAlarms() {
        let list = document.querySelector('.show_alarms-wrapper');
        if (list.style.height == '30px'|| !list.style.height)
            list.style.height = props.arrayOfAlarms.length*61+30+'px';
        else 
            list.style.height = '30px'
    }

    useEffect(() => {
        if (!isDidMount) {
            setInterval(() => updateClock(), 1000)
            isDidMount=true;
        }
    })



    return (
        <div className="clock_wrapper">
           
            <div className="main_clock">
                <div className="show_alarms-wrapper">
                    <div onClick={showAlarms} className="show_alarms_button">Show</div>
                    {props.arrayOfAlarms.map(item => {
                        return <AlarmElement alarmElement = {item} />
                    })}
                </div>
                <div style={{border: '4px solid ' + props.mainColor}} className="circle_clock">
                    <div style={{backgroundColor: props.mainColor}}   className="second_arrow">

                    </div>
                    <div style={{backgroundColor: props.mainColor}}  className="minutes_arrow">

                    </div>
                    <div style={{backgroundColor: props.mainColor}}  className="hours_arrow">

                    </div>
                    <div style={{backgroundColor: props.mainColor}}  className="clock_dot">

                    </div>
                </div>
                <div className="set_alarms-wrapper">
                   <div onClick={showSetAlarm} className="set_alarm_title">
                       Set alarm
                   </div>

                   <div className="set_alarm_window-first">
                        <SetAlarmFirst addAlarm = {props.addAlarm} showAlarms={showAlarms}/>
                   </div>
                   <div className="set_alarm_window-second">

                   </div>
                </div>
            </div>
            <div style={{color: props.mainColor}} className="temp_time">
                {tempTime}
            </div>
        </div>

    )
}

export default Alarm;