import React, {useState, useEffect} from 'react';
import './Clock.css'

let isDidMount = false;

class Clock  extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          tempTime: '',
          clockInterval: ''
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

        
        
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;
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

    componentWillUnmount() {
        clearInterval(this.state.clockInterval)
    }

    componentDidMount() {
        this.setState({
            clockInterval: setInterval(() => this.updateClock(), 1000)
        })


        setTimeout(() => {
            const sectionBlock = document.querySelector('.clock_wrapper');
            sectionBlock.style.opacity = '1'
            sectionBlock.style.transform = 'translateY(0px)'
        })
       
    }


   

    render() {
        
        return (
            <div className="clock_wrapper">
                <div className="main_clock">
                <div style={{border: '4px solid ' + this.props.mainColor}} className="circle_clock">
                        <div style={{backgroundColor: this.props.mainColor}}   className="second_arrow">
    
                        </div>
                        <div style={{backgroundColor: this.props.mainColor}}  className="minutes_arrow">
    
                        </div>
                        <div style={{backgroundColor: this.props.mainColor}}  className="hours_arrow">
    
                        </div>
                        <div style={{backgroundColor: this.props.mainColor}}  className="clock_dot">
    
                        </div>
                    </div>
                </div>
                <div style={{color: this.props.mainColor}} className="temp_time">
                    {this.state.tempTime}
                </div>
            </div>
    
        )
    } 
}

export default Clock;