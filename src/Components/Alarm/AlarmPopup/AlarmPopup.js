import React, {useState, useEffect} from 'react';
import './AlarmPopup.css'


function AlarmPopup(props) {

   
    return (
            <div className="alarm_popup_wrapper">
                <div className="alarm_popup">
                    <div className="alarm_popup_time_wrapper">
                        {props.alarmItem.time ? props.alarmItem.time : "Time is over"}
                        
                    </div>
                    <div className="alarm_popup_description">
                        {props.alarmItem ? props.alarmItem.description : ''}
                    </div>
                    
                    <div onClick={props.closeAlarmPopup} className="alarm_popup_close_button">
                        Close
                    </div>
                </div>
            </div>
        )
}

export default AlarmPopup;