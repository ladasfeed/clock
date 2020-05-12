import React, {useEffect, useState} from 'react';
import './Settings.css'


function Settings() {

    function changeBackground(event) {
       let newSrc = event.target.getAttribute('src');
       document.querySelector('.app').style.background = `url(${newSrc})`
    }

    function closeSettings(event) {
        if (event.target.className == 'settings') {
            document.querySelector('.settings').style.display = 'none';
            document.removeEventListener('click', (event) => closeSettings(event))
        }
    }

    function showSettings() {
            document.querySelector('.settings').style.display = 'flex';
            document.addEventListener('click', (event) => closeSettings(event))
    }

    return (
        <div className="settings_wrapper">
            <div className="settings">
                <div className="settings_inner">
                    <div className="changer_method">
                        Background
                    </div>
                    <div className="settings_change_bg">
                        <img onClick={(event) => changeBackground(event)} src={require('../../img/Background.png')}></img>
                        <img onClick={(event) => changeBackground(event)} src={require('../../img/bg2.jpeg')}></img>
                        <img onClick={(event) => changeBackground(event)} src={require('../../img/bg3.jpg')}></img>
                        <img onClick={(event) => changeBackground(event)} src={require('../../img/bg4.jpg')}></img>
                    </div>
                </div>
            </div>
            <div onClick={showSettings} className="settings_button">
                Settings
            </div>
        </div>
    )
}

export default Settings;