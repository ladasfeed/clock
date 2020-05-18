import React, {useState, useEffect} from 'react';
import './AlarmElement.css'
import Alarm from '../Alarm';


function AlarmElement(props) {

   async function deleteAlarm() {
        let oldStorage = await JSON.parse(localStorage.getItem('clocks'))
        oldStorage.alarms = oldStorage.alarms.filter(
           
            (item, index) => {
                console.log(props.id, index)
                return index!=props.id-1
            }
        )
        localStorage.setItem('clocks', JSON.stringify(oldStorage))
      

        props.deleteAlarm(props.id)


        props.showAlarms()
        props.showAlarms()
   }

   async function alarmActivityChanger() {
        props.alarmElement.active=!props.alarmElement.active;
        let oldStorage = await JSON.parse(localStorage.getItem('clocks'))
        console.log(oldStorage)
        await oldStorage.alarms.forEach(element => {
            if (element.time == props.alarmElement.time)
                element.active = props.alarmElement.active
        });
        localStorage.setItem('clocks', JSON.stringify(oldStorage))
   }

    return (
        <div className="alarm_element">
            <div className="alarm_element_time">
               Time: {props.alarmElement.time}
            </div>
            <div className="alarm_element_description">
               Description: {props.alarmElement.description}
            </div>
            <div className="alarm_element__buttons-wrapper">
                <div onClick={alarmActivityChanger} className="alarm_element_active_changer">
                    {props.alarmElement.active ? 'Disable': 'Activate'}
                </div>

                <div onClick={deleteAlarm} className="alarm_element_active_changer">
                    Delete
                </div>
            </div>
        </div>
    )
}

export default AlarmElement;