import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Router, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import Clock from './Components/Clock/Clock'
import Settings from './Components/Settings/Settings'
import Alarm from './Components/Alarm/Alarm';
import AlarmPopup from './Components/Alarm/AlarmPopup/AlarmPopup';

let arrayOfAlarms = [
  {
    time: '15:5',
    offedToday: false
  }
]

function App() {

  let [didMount, setDidMount] = useState(false);
  let [menuActiveElement, setMenuActiveElement] = useState(0);
  let [idOfAlarmFunc, setIdOfAlarmFunc] = useState('')
  let [isAlarmNow, setIsAlarmNow] = useState(false);
  let [mainColor, setMainColor] = useState('black');
  let [userData, setUserData]= useState();


  function getUserData() {
    let tempUserData = JSON.parse(localStorage.getItem('clocks'))
    if (tempUserData && tempUserData.alarms) {
      tempUserData.alarms.forEach(item => {
        arrayOfAlarms.push(item);
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
      newUserState = JSON.parse(userData);
    }
    
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
        document.querySelector('#audio').play();
        setIsAlarmNow(item);
        item.offedToday = true;
      }
    })
  }

  function startAlarms() {
    setIdOfAlarmFunc(setInterval(checkAlarm, 1000));
  }



  function closeAlarmPopup() {
    setIsAlarmNow(false);
    document.querySelector('#audio').pause();
    document.querySelector('#audio').currentTime = 0.0;
  }

  //for Settings
  function changeGlobalColor() {
    let newColor = document.querySelector('.global_color_changer').value;
    setMainColor(newColor)
    console.log('?')
  }


  useEffect(() => {
    if (!didMount) {
      startAlarms();
      getUserData()
  
     // document.documentElement.webkitRequestFullScreen();
      setDidMount(true);
    }
  })

  return (
    <BrowserRouter>
      <div className="app">
        {isAlarmNow ? <AlarmPopup alarmItem ={isAlarmNow} closeAlarmPopup={closeAlarmPopup}/> : ''}
        <audio id="audio" src={require('./audio/Hans - pol anthem.mp3')}></audio>
        <audio id="audioChillwave" src={require('./audio/Hans - pol anthem.mp3')}></audio>
        <Header mainColor={mainColor} menuActivateElement={menuActivateElement}/>

        <Switch>
          
          <Route path='/alarm'>
            <Alarm mainColor={mainColor} addAlarm = {addAlarm} arrayOfAlarms={arrayOfAlarms}/>
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
