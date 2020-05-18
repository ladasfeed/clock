import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Router, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import Clock from './Components/Clock/Clock'
import Settings from './Components/Settings/Settings'
import Alarm from './Components/Alarm/Alarm';
import AlarmPopup from './Components/Alarm/AlarmPopup/AlarmPopup';
import Timer from './Components/Timer/Timer';


let arrayOfAlarms = [
  {
    time: '7:30',
    offedToday: false,
    daysResult: [1, 2, 3, 4, 5],
    description: 'halo',
    music: require('./audio/folk.mp3'),
    active: true
  }
]

let timer={
  id:'',
  time: null
};

let isTimerPaused = false;

function App() {

  let [didMount, setDidMount] = useState(false);
  let [menuActiveElement, setMenuActiveElement] = useState(0);
  let [idOfAlarmFunc, setIdOfAlarmFunc] = useState('')
  let [isAlarmNow, setIsAlarmNow] = useState(false);
  let [mainColor, setMainColor] = useState('black');
  let [userData, setUserData]= useState();
  let [alarmMusic, setAlarmMusic] = useState('folk')
  let [timerMusic, setTimerMusic] = useState('folk')
  let [tempTime, setTempTime] = useState('')
  let [stopperTimer, setStopperTimer] = useState(true)

  function getUserData() {
    let tempUserData = JSON.parse(localStorage.getItem('clocks'))
    if (tempUserData && tempUserData.alarms) {
      tempUserData.alarms.forEach(item => {
        arrayOfAlarms.push(item);
      })
    }

  
    if (tempUserData && tempUserData.background) {
      document.querySelector('.app').style.backgroundImage = `url(${tempUserData.background})`;
    }

    if (tempUserData && tempUserData.color) {
      setMainColor(tempUserData.color)

      let headerIcons = Array.from(document.querySelectorAll('svg'));
      headerIcons.forEach(item => {
        item.setAttribute("fill", tempUserData.color)
      })
    }

    

    setUserData(localStorage.getItem('clocks'))
  }


  function addAlarm(time) {
    arrayOfAlarms.push(time);
    clearInterval(idOfAlarmFunc)
    setIdOfAlarmFunc(setInterval(checkAlarm, 1000));

    let newUserState;
    if (!userData) {
      newUserState = {
        alarms: []
      };
    } else {
      newUserState = JSON.parse(localStorage.getItem('clocks'));
      if (!newUserState.alarms) {
        newUserState.alarms = [];
      } 
    }
    console.log(newUserState)
    newUserState.alarms.push(time)
    setUserData(newUserState)
    localStorage.setItem('clocks', JSON.stringify(newUserState))

  }


  //рудимент
  function menuActivateElement(index) {
    let menuElements = document.querySelectorAll('')
    setMenuActiveElement(index);
  }


  function checkAlarm() {
    let tempDate = new Date();
    let tempTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    arrayOfAlarms.forEach(item => {
      console.log(item.time, ' ', tempTime)
      if (item.time == tempTime && !item.offedToday) {
        let daysValid = false;
        item.daysResult.forEach(item => {
          if (item == tempDate.getDay()) daysValid = true;
        })
        console.log(daysValid)
        if (daysValid && item.active) {
          document.querySelector('#audio').src = require(`./audio/${item.music}.mp3`);
          document.querySelector('#audio').play();
          setIsAlarmNow(item);
          item.offedToday = true;
        }
       
      }
    })
    setTempTime(tempTime+':'+tempDate.getSeconds())
  }

  function startAlarms() {
    setIdOfAlarmFunc(setInterval(checkAlarm, 1000));
  }


  function showTimerPopup() {
      
  }


  function closeAlarmPopup() {
    setIsAlarmNow(false);
    document.querySelector('#audio').pause();
    document.querySelector('#audio').currentTime = 0.0;
  }

  //for Settings
  async function changeGlobalColor(color) {
    let userData = await JSON.parse(localStorage.getItem('clocks'));

    if (!userData) {
      userData = {}
    }
    userData.color = color;
    localStorage.setItem('clocks', JSON.stringify(userData))
    
    let headerIcons = Array.from(document.querySelectorAll('svg'));
    headerIcons.forEach(item => {
      item.setAttribute("fill", color)
    })
        
    setMainColor(color)
    console.log('?')
  }


  //forTimer
  function stopTimer() {
    clearTimeout(timer.id)
    timer.time = null;
    setStopperTimer(false)
    setTimeout(()=>setStopperTimer(true), 0)
  }


  function checkTimer(time) {
    if (!stopperTimer ) return

    console.log(isTimerPaused)
    if (isTimerPaused) {
      timer.id = setTimeout(()=>checkTimer(timer.time), 1000)
      return
    }

    if (timer.time === 0) {
      document.querySelector('#audio').src = require(`./audio/${timerMusic}.mp3`);
      document.querySelector('#audio').play();
      setIsAlarmNow({});
      return
    }
    
    if (timer.time===null) {
      timer.time=time.time.seconds + time.time.minutes*60;
      timer.id = setTimeout(()=>checkTimer(timer.time), 1000)
    } else {
      if (!stopperTimer) return
      timer.time--;
      timer.id = setTimeout(()=>checkTimer(timer.time), 1000)
    }
  }

  function pauseTimer() {
    isTimerPaused = !isTimerPaused
  }


  function deleteAlarm(id) {
    arrayOfAlarms = arrayOfAlarms.filter((item,index) => {
       return index!=id
    })
  }


  ///

  useEffect(() => {
    if (!didMount) {
      startAlarms();
      getUserData()
      
     // 
      setDidMount(true);
    }
  })

  return (
    <BrowserRouter>
      <div className="app">
        {isAlarmNow ? <AlarmPopup alarmItem ={isAlarmNow} closeAlarmPopup={closeAlarmPopup}/> : ''}
        <audio id="audio" src={require(`./audio/${alarmMusic}.mp3`)}></audio>
        <audio id="audioChillwave" src={require('./audio/relax.mp3')}></audio>
        <audio id="audioSetAlarm" src={require(`./audio/${alarmMusic}.mp3`)}></audio>
        <audio id="audioSetTimer" src={require(`./audio/${timerMusic}.mp3`)}></audio>
        <Header mainColor={mainColor} menuActivateElement={menuActivateElement}/>
        
        <Switch>

          <Route path='/timer'>
            <Timer
              tempTime={tempTime}
              mainColor={mainColor}
              setTimerMusic={setTimerMusic}
              checkTimer={checkTimer}
              timer={Math.trunc(timer.time/60) + ':' +timer.time%60}
              stopTimer={stopTimer}
              pauseTimer={pauseTimer}
            ></Timer>
          </Route> 
          
          <Route path='/alarm'>
            <Alarm
             mainColor={mainColor}
             addAlarm = {addAlarm}
             arrayOfAlarms={arrayOfAlarms}
             setAlarmMusic={setAlarmMusic}
             deleteAlarm={deleteAlarm}
              />
          </Route>

          <Route path='/'>
            <Clock mainColor={mainColor}/>
          </Route>

        </Switch>
        <Settings  mainColor={mainColor} changeGlobalColor={changeGlobalColor}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
