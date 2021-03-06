import React, {useEffect, useState} from 'react';
import './Settings.css'
import {SketchPicker} from 'react-color'



function Settings(props) {


    let [tempSettings, setTempSettings] = useState('Background');
    let [isDidMount, setIsDidMount] = useState(false);
    let [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);
    let [isFullscreen, setIsFullscreen] = useState(false);
    let [color, setColor] = useState('#fff000')

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
            setTimeout(() => document.querySelector('.settings').style.opacity = '1')
           
            document.addEventListener('click', (event) => closeSettings(event))
    }

    function setColorForActiveSettings(event) {
        let arrayOfHeadingSettings = Array.from(document.querySelectorAll('.changer_method_element'));
        arrayOfHeadingSettings.forEach(item => {
            item.style.color = 'grey'
        })
        event.target.style.color = 'white'
     }

     

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

     async function changeBackground(event) {
        let newSrc = event.target.getAttribute('src');
        document.querySelector('.app').style.background = `url(${newSrc})`

        let userData = await JSON.parse(localStorage.getItem('clocks'));

        if (!userData) {
            localStorage.setItem('clocks', JSON.stringify({background: newSrc}))
        } else {
            userData.background = newSrc;
            localStorage.setItem('clocks', JSON.stringify(userData))
        }
            

        
     }

     function fullscreen() {
         if (!isFullscreen) {
            document.documentElement.webkitRequestFullScreen();
            setIsFullscreen(true)
         } else {
            document.webkitCancelFullScreen();
            setIsFullscreen(false)
         }
     }

     function renderBackgrounds() {
        let arrayOfBackgrounds = [];
        for (let i = 1; i<=10; i++) {
            arrayOfBackgrounds.push(
                <img onClick={(event) => changeBackground(event)} src={require(`../../img/bg${i}.jpg`)}></img>
            )
        }
        return arrayOfBackgrounds;
     }
 

    return (
        <>
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
                                {/* <img onClick={(event) => changeBackground(event)} src={require('../../img/Background.png')}></img>
                                <img onClick={(event) => changeBackground(event)} src={require('../../img/bg2.jpeg')}></img>
                                <img onClick={(event) => changeBackground(event)} src={require('../../img/bg3.jpg')}></img>
                                <img onClick={(event) => changeBackground(event)} src={require('../../img/bg4.jpg')}></img> */}
                                {renderBackgrounds()}
                            </div>
                        </div>
                        <div className="settings_slider_element">
                            <div className="global_color_changer_wrapper">
                                    < SketchPicker
                                        color={color}
                                        onChangeComplete = {(color) => {setColor(color.hex)}}
                                    />
                                <div onClick={() => props.changeGlobalColor(color)} className="global_color_changer-button">change color</div>
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
        <div className="settings_wrapper">
            
            <div className="settings_buttons_wrapper">
                <div style={{color: props.mainColor}} onClick={showSettings} className="settings_button">
                    Settings
                </div>
                <div style={{color: props.mainColor}} onClick={fullscreen} className="fullscreen_button">
                    {isFullscreen ? 'Windowed' : 'Fullscreen'}
                </div>
            </div>
        </div>
        </>
    )
}

export default Settings;