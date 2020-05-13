import React, {useState, useEffect} from 'react';
import './Clock.css'

let isDidMount = false;

class Clock  extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          tempTime: ''
        };
      }

   // const [tempTime, setTempTime] = useState('');

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

        let newTime = hours+':'+minutes+':'+seconds 
        
       // this.setTempTime(newTime)
        this.setState({
            tempTime: newTime
        })
    }


    

    // useEffect(() => {
    //     if (!isDidMount) {
    //         setInterval(() => updateClock(), 1000)
    //         isDidMount=true;
    //     }
    // })

    componentDidMount() {
        setInterval(() => this.updateClock(), 1000)
    }




    render() {
        return (
            <div className="clock_wrapper">
                <div className="main_clock">
                    <div className="circle_clock">
                        <div className="second_arrow">
    
                        </div>
                        <div className="minutes_arrow">
    
                        </div>
                        <div className="hours_arrow">
    
                        </div>
                        <div className="clock_dot">
    
                        </div>
                    </div>
                </div>
                <div className="temp_time">
                    {this.state.tempTime}
                </div>
            </div>
    
        )
    } 
}

export default Clock;