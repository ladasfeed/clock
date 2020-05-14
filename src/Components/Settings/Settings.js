import React, {useEffect, useState} from 'react';
import './Settings.css'


function Settings(props) {


    let [tempSettings, setTempSettings] = useState('Background');
    let [isDidMount, setIsDidMount] = useState(false);
    let [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);

    useEffect(()=> {
        if (!isDidMount) {
            setIsDidMount(true)
            document.querySelector('.changer_method_element').style.color = 'white';
        }
    })
   
    function closeSettings(event) {
        if (event.target.className == 'settings') {
            document.querySelector('.settings').style.opacity = '0'
            setTimeout(() =>  document.querySelector('.settings').style.display = 'none', 500)
            
            document.removeEventListener('click', (event) => closeSettings(event))
        }
    }

    function showSettings() {
            document.querySelector('.settings').style.display = 'flex';
            setTimeout(() => document.querySelector('.settings').style.opacity = '1', 200)
           
            document.addEventListener('click', (event) => closeSettings(event))
    }

    function setColorForActiveSettings(event) {
        let arrayOfHeadingSettings = Array.from(document.querySelectorAll('.changer_method_element'));
        arrayOfHeadingSettings.forEach(item => {
            item.style.color = 'grey'
        })
        event.target.style.color = 'white'
     }


   
    


     /*
     function renderSettingsContent() {
         switch (tempSettings) {
             case 'Background': {
                return (
                   
                )
             }
             case 'globalColor': {
                return (
                    
                )
             }
         }
     }*/

     

     function changeSettigns(event, translate) {
        setColorForActiveSettings(event)
         let arrayOfSettings = Array.from(document.querySelectorAll('.settings_slider_element'));
         arrayOfSettings.forEach(item => {
             item.style.transform = 'translateX('+translate + 'px)';
         })
     }


     function toggleChillwave() {
         if (!isBgMusicPlaying) {
            document.querySelector('#audioChillwave').play();
            setIsBgMusicPlaying(true)
         } else {
            document.querySelector('#audioChillwave').pause();
            document.querySelector('#audioChillwave').currentTime = 0.0;
            setIsBgMusicPlaying(false)
        }
     }

     function changeBackground(event) {
        let newSrc = event.target.getAttribute('src');
        document.querySelector('.app').style.background = `url(${newSrc})`
     }
 

    return (
        <div className="settings_wrapper">
            <div className="settings">
                <div className="settings_inner">
                    <div className="changer_method">
                        <div onClick={(event) => changeSettigns(event, 0)} className="changer_method_element">
                            Background
                        </div>
                        <div onClick={(event) => changeSettigns(event, -500)} className="changer_method_element">
                            globalColor
                        </div>
                        <div onClick={(event) => changeSettigns(event, -1000)} className="changer_method_element">
                            Music
                        </div>
                    </div>
                    <div className="settings_slider_wrapper">
                        <div className="settings_slider_element">
                            <div className="settings_change_bg">
                                <img onClick={(event) => changeBackground(event)} src={require('../../img/Background.png')}></img>
                                <img onClick={(event) => changeBackground(event)} src={require('../../img/bg2.jpeg')}></img>
                                <img onClick={(event) => changeBackground(event)} src={require('../../img/bg3.jpg')}></img>
                                <img onClick={(event) => changeBackground(event)} src={require('../../img/bg4.jpg')}></img>
                            </div>
                        </div>
                        <div className="settings_slider_element">
                            <div className="global_color_changer_wrapper">
                                <input placeholder="enter a color..." className="global_color_changer">

                                </input>
                                <div onClick={props.changeGlobalColor} className="global_color_changer-button">change color</div>
                            </div>
                        </div>
                        <div className="settings_slider_element">
                           <div className="chillwave_wrapper">
                                <div onClick={toggleChillwave} className="on_chillwave">
                                    {isBgMusicPlaying ? 'Off Chillwave' : 'On Chillwave'}
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{color: props.mainColor}} onClick={showSettings} className="settings_button">
                Settings
            </div>
        </div>
    )
}

export default Settings;