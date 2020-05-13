import React, {useState, useEffect} from 'react';
import './AlarmElement.css'
import Alarm from '../Alarm';


function AlarmElement(props) {


    return (
        <div className="alarm_element">
            <div className="alarm_element_time">
                {props.alarmElement.time}
            </div>
        </div>
    )
}

export default AlarmElement;