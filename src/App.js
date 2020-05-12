import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Router, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import Clock from './Components/Clock/Clock'
import Settings from './Components/Settings/Settings'
import Alarm from './Components/Alarm/Alarm';


function App() {

  let [menuActiveElement, setMenuActiveElement] = useState(0);

  function menuActivateElement(index) {
    let menuElements = document.querySelectorAll('')
    setMenuActiveElement(index);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header menuActivateElement={menuActivateElement}/>

        <Switch>
          
          <Route path='/alarm'>
            <Alarm/>
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
