import React, {useState, useEffect} from 'react';
import './SetAlarmFirst.css'


function SetAlarmFirst(props) {

    function addAlarm() {
        let time = document.querySelector('.set_alarm_hours').value + ':' + document.querySelector('.set_alarm_minutes').value;
        props.addAlarm({time});
    }


    return (
        <div className="set_alarm_first">
            <div className='set_alarm_hours_wrapper'>
                <div className="set_alarm_hours_heading">hours</div>
                <input className="set_alarm_hours"></input>
            </div>

            <div className='set_alarm_minutes_wrapper'>
                <div className="set_alarm_minutes_heading">minutes</div>
                <input className="set_alarm_minutes"></input>
            </div>
            
            
            <div onClick={addAlarm} className="set_alarm_first_button">Save</div>
        </div>
    )
}

export default SetAlarmFirst;