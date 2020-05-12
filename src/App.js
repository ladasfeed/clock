import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Router, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'



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
            <Header/>
          </Route>

          <Route path='/'>
            asd
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
