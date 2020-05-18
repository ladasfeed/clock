import React, {useEffect, useState} from 'react';
import './Timer.css'


class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTimerSet: false
        }
    }

    pauseTimer() {
        if (this.state.isTimerSet) {
            this.props.pauseTimer()
        }
    }

    addTimer() {
        console.log(this.state.isTimerSet)
        if (this.state.isTimerSet) {
            this.props.stopTimer()
            this.setState({
                isTimerSet: false
            })
            return
        }

       


        let minutes = document.querySelector('.set_alarm_hours').value;
        let seconds = document.querySelector('.set_alarm_minutes').value;
       
        this.props.checkTimer({time: {
            minutes: Number(minutes),
            seconds: Number(seconds)
        }})

        this.setState({
            isTimerSet: true
        })
        
    }


    

    playAlarmMusic() {
        const alarmPath = document.querySelector('select').value;
        this.props.setTimerMusic(alarmPath)
        setTimeout(() =>document.querySelector('#audioSetTimer').play(), 100)
        
    }


    showSetTimer() {
        let AlarmWindow = document.querySelector('.set_alarm_window-first');
        if (AlarmWindow.style.transform == 'scaleY(0)' || !AlarmWindow.style.transform)
            AlarmWindow.style.transform = 'scaleY(1)'
        else 
        AlarmWindow.style.transform = 'scaleY(0)'
    }


    componentDidMount() {
        
        setTimeout(() => {
            const sectionBlock = document.querySelector('.timer');
            sectionBlock.style.opacity = '1'
            sectionBlock.style.transform = 'translateY(0px)'
        })
    }

    render() {

        return(
            <div className="timer">
                <div className="timer__inner">
                    <div className="timer__inner__left-content">

                    </div>
                    <div style={{color: this.props.mainColor}} className="timer__inner__time">
                        {this.props.timer}
                    </div>


                    <div  className="timer__inner__set-timer-wrapper">
                        <div className="timer_inner_set-timer">
                            <div style={{color: this.props.mainColor}} onClick={() => this.showSetTimer()} className="set_alarm_title">
                                Set timer
                            </div>
                            <div className="set_alarm_window-first">
                                <div className="set_alarm_first">
                                    <div className='set_alarm_hours_wrapper'>
                                        <div className="set_alarm_hours_heading">minutes</div>
                                        <div className="set_alarm_hours_wrapper_inner">
                                            <div className="set_alarm_controller">-</div>
                                            <input placeholder="0" className="set_alarm_hours"></input>
                                            <div className="set_alarm_controller">+</div>
                                        </div>
                                        
                                    </div>

                                    <div className='set_alarm_minutes_wrapper'>
                                        <div className="set_alarm_minutes_heading">seconds</div>
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
                                        <div onClick={this.playAlarmMusic.bind(this)} className="set_alarm_first__music__play-button">
                                            play
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <div onClick={()=>this.addTimer()} className="set_alarm_first_button">Save</div>
                                    <div onClick={()=>this.pauseTimer()} className="set_alarm_first_button-stop">Pause</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Timer;