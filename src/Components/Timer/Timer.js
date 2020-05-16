import React, {useEffect, useState} from 'react';
import './Timer.css'


class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    addAlarm() {
      
        
    }

   

    playAlarmMusic() {
        const alarmPath = document.querySelector('select').value;
        this.props.setAlarmMusic(alarmPath)
        setTimeout(() =>document.querySelector('#audioSetAlarm').play(), 100)
        
    }



    render() {

        return(
            <div className="timer">
                <div className="timer__inner">
                    <div className="timer__inner__left-content">

                    </div>
                    <div className="timer__inner__time">
                        {this.props.tempTime}
                    </div>


                    <div className="timer__inner__set-timer-wrapper">
                        <div className="timer_inner_set-timer">
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
                            

                           

                            <div className="set_alarm_first__music">
                                <div className="set_alarm_first__music__selector">
                                    <select>
                                        <option>
                                            mozart
                                        </option>
                                        <option>
                                            dubstep
                                        </option>
                                        <option>
                                            folk
                                        </option>
                                        <option>
                                            fonk
                                        </option>
                                        <option>
                                            deathNote
                                        </option>
                                    </select>
                                </div>
                                <div onClick={this.playAlarmMusic} className="set_alarm_first__music__play-button">
                                    play
                                </div>
                                
                            </div>
                            
                            <div onClick={this.addAlarm} className="set_alarm_first_button">Save</div>
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Timer;