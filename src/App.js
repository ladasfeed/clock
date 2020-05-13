import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Router, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import Clock from './Components/Clock/Clock'
import Settings from './Components/Settings/Settings'
import Alarm from './Components/Alarm/Alarm';


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



  function addAlarm(time) {
    arrayOfAlarms.push(time);
    clearInterval(idOfAlarmFunc)
    setIdOfAlarmFunc(setInterval(checkAlarm, 1000));
    console.log(arrayOfAlarms)
  }

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
        alert('ALARM')
        item.offedToday = true;
      }
    })
  }

  function startAlarms() {
    setIdOfAlarmFunc(setInterval(checkAlarm, 1000));
  }


  useEffect(() => {
    if (!didMount) {
      startAlarms();
      setDidMount(true);
    }
  })

  return (
    <BrowserRouter>
      <div className="app">
        <audio id="audio" src={require('./audio/Hans - pol anthem.mp3')}></audio>
        <Header menuActivateElement={menuActivateElement}/>

        <Switch>
          
          <Route path='/alarm'>
            <Alarm addAlarm = {addAlarm} arrayOfAlarms={arrayOfAlarms}/>
          </Route>

          <Route path='/'>
            <Clock/>
          </Route>
        </Switch>
        <Settings/>
      </div>
    </BrowserRouter>
  );
}

export default App;
