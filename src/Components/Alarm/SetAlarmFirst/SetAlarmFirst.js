import React, {useState, useEffect} from 'react';
import './SetAlarmFirst.css'


function SetAlarmFirst(props) {

    function addAlarm() {
        const time = document.querySelector('.set_alarm_hours').value + ':' + document.querySelector('.set_alarm_minutes').value;
        let days = Array.from(document.querySelectorAll('.set_alarm_days_selector__element__checkbox'));
        let daysResult = [];
        days.forEach((item, index) => {
            if (item.checked) {
                let newIndex=index+1;
                if (newIndex==7) newIndex = 0;
                daysResult.push(newIndex);
            }
        })
        props.addAlarm({time, daysResult});
        props.showAlarms();
        props.showAlarms();
    }

    function renderOptionsHours() {
        let result =[];
        for (let i = 0; i < 24; i++) {
            result.push((<option>{i}</option>))
        }
        return result;
    }

    function playAlarmMusic() {
        const alarmPath = document.querySelector('select').value;
        props.setAlarmMusic(alarmPath)
        document.querySelector('#audioSetAlarm').play();
    }


    return (
        <div className="set_alarm_first">
            <div className='set_alarm_hours_wrapper'>
                <div className="set_alarm_hours_heading">hours</div>
                {/* <input className="set_alarm_hours"></input> */}
                <div className="set_alarm_hours_wrapper_inner">
                    <div className="set_alarm_controller">-</div>
                    <input placeholder="0" className="set_alarm_hours"></input>
                    <div className="set_alarm_controller">+</div>
                </div>
                
            </div>

            <div className='set_alarm_minutes_wrapper'>
                <div className="set_alarm_minutes_heading">minutes</div>
                <div className="set_alarm_minutes_wrapper_inner">
                    <div className="set_alarm_controller">-</div>
                    <input placeholder="0" className="set_alarm_minutes"></input>
                    <div className="set_alarm_controller">+</div>
                </div>
            </div>
            

            <div className="set_alarm_days_selector">
                <div className="set_alarm_days_selector__element">
                    <div className="set_alarm_days_selector__element">Mon</div>
                    <input type="checkbox" className="set_alarm_days_selector__element__checkbox"></input>
                </div>
               
                <div className="set_alarm_days_selector__element">
                    <div className="set_alarm_days_selector__element">Tue</div>
                    <input type="checkbox" className="set_alarm_days_selector__element__checkbox"></input>
                </div>

                <div className="set_alarm_days_selector__element">
                    <div className="set_alarm_days_selector__element">Wed</div>
                    <input type="checkbox" className="set_alarm_days_selector__element__checkbox"></input>
                </div>

                <div className="set_alarm_days_selector__element">
                    <div className="set_alarm_days_selector__element">Thu</div>
                    <input type="checkbox" className="set_alarm_days_selector__element__checkbox"></input>
                </div>
                
                <div className="set_alarm_days_selector__element">
                    <div className="set_alarm_days_selector__element">Fri</div>
                    <input type="checkbox" className="set_alarm_days_selector__element__checkbox"></input>
                </div>

                <div className="set_alarm_days_selector__element">
                    <div className="set_alarm_days_selector__element">Sat</div>
                    <input type="checkbox" className="set_alarm_days_selector__element__checkbox"></input>
                </div>

                <div className="set_alarm_days_selector__element">
                    <div className="set_alarm_days_selector__element">Sun</div>
                    <input type="checkbox" className="set_alarm_days_selector__element__checkbox"></input>
                </div>

                
            </div>

            <div className="set_alarm_first__music">
                <div className="set_alarm_first__music__selector">
                    <select>
                        <option>
                            Hans - pol anthem
                        </option>
                        <option>
                            Metallcore
                        </option>
                    </select>
                </div>
                <div onClick={playAlarmMusic} className="set_alarm_first__music__play-button">
                    play
                </div>
                
            </div>
            
            <div onClick={addAlarm} className="set_alarm_first_button">Save</div>
        </div>
    )
}

export default SetAlarmFirst;