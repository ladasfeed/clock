import React, {useState, useEffect} from 'react';
import './AlarmElement.css'
import Alarm from '../Alarm';

const defaultAlarms = [
    {
        time: '7:00'
    }
]

function AlarmElement() {


    return (
        <div className="alarm_element">
            <div className="alarm_element_time">
                {defaultAlarms[0].time}
            </div>
        </div>
    )
}

export default AlarmElement;