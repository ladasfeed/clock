import React, {useState, useEffect} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timerId: '',
            didMount: false,
            func: false,
            help: false
        };
      }



    closeHeader() {
        console.log('??')
        document.querySelector('.header_wrapper').style.transform = 'translateY(-200px)'
        document.querySelector('.settings_wrapper').style.transform = 'translateY(500px)'

        if  (document.querySelector('.show_alarms-wrapper')) {
            document.querySelector('.show_alarms-wrapper').style.transform = 'translateY(-400px)'
            document.querySelector('.set_alarm_title').style.transform = 'translateY(-400px)'
        }

      
    }

    
    setTimerCloseHeader() {

        document.querySelector('.header_wrapper').style.transform = 'translateY(0px)'
        document.querySelector('.settings_wrapper').style.transform = 'none'

        if  (document.querySelector('.show_alarms-wrapper')) {
            document.querySelector('.show_alarms-wrapper').style.transform = 'translateY(0px)'
            document.querySelector('.set_alarm_title').style.transform = 'translateY(0px)'    
        }
        
        document.removeEventListener('mousemove', this.state.func)
        setTimeout(() => document.addEventListener('mousemove', this.state.func), 300);

        clearTimeout(this.state.timerId)
        this.setState({
            timerId: setTimeout(()=>this.closeHeader(), 30000)
        })

        
    }



    
    componentDidUpdate() {
       
        // if(this.state.didMount && !this.state.func) {
            
         
        // }

        if(!this.state.help)
        {
            console.log(this.state.func, this.state.didMount)
            document.addEventListener('mousemove', this.state.func)
            setTimeout(()=>this.closeHeader(), 30000)
            this.setState({
                help: true
            })
        }
    }

    componentDidMount() {
      
        this.setState({
            func: this.setTimerCloseHeader.bind(this)
        })
       
    }
   

    render() {
    return (
        <div className="header_wrapper">
            <div className="header">
                <Link to='./'>
                    {/* <div className="header_item">
                        <img src={require('../../img/clock.png')}></img>
                        <div className="header_item_underline">Clock</div>
                  </div> */}
                   <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="60pt" height="60pt" viewBox="0 0 107.000000 107.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,107.000000) scale(0.100000,-0.100000)">
                        <path d="M370 1037 c-172 -59 -294 -185 -344 -356 -21 -72 -21 -221 0 -292 50
                        -169 172 -299 337 -357 98 -34 230 -36 333 -4 333 103 476 506 284 799 -70
                        106 -181 186 -305 219 -80 22 -228 18 -305 -9z m312 -66 c211 -73 344 -287
                        310 -503 -38 -251 -281 -431 -525 -390 -39 7 -99 27 -134 44 -174 85 -285 297
                        -253 479 50 285 338 461 602 370z"/>
                        <path d="M517 924 c-4 -4 -7 -96 -7 -204 0 -258 -2 -256 126 -129 52 51 94
                        102 94 111 0 35 -36 18 -100 -47 l-65 -66 -5 168 c-4 141 -7 168 -20 171 -9 1
                        -19 0 -23 -4z"/>
                        </g>
                    </svg>

                </Link>

                <Link to='./alarm'>
                    {/* <div className="header_item">
                        <img src={require('../../img/alarm.png')}></img>
                        <div className="header_item_underline">Alarm</div>
                    </div> */}
                   <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="61pt" height="61pt" viewBox="0 0 318.000000 346.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,346.000000) scale(0.100000,-0.100000)">
                        <path d="M2165 3446 c-154 -35 -290 -106 -401 -210 -68 -62 -72 -64 -112 -59
                        l-42 6 0 73 0 74 48 0 c57 1 91 22 72 45 -17 21 -266 22 -293 1 -17 -13 -17
                        -15 5 -30 12 -9 42 -16 66 -16 l43 0 -3 -77 -3 -78 -34 -3 c-27 -3 -41 3 -70
                        31 -172 163 -378 247 -605 247 -273 -1 -496 -106 -660 -313 -109 -136 -165
                        -296 -173 -488 -7 -155 10 -249 72 -400 l44 -107 -25 -78 c-43 -134 -64 -289
                        -64 -464 0 -270 52 -491 169 -716 l58 -113 -24 -37 c-52 -75 -76 -152 -81
                        -261 -6 -123 16 -209 75 -293 147 -210 487 -240 709 -62 l46 38 112 -37 c332
                        -111 704 -110 1023 2 l84 30 42 -34 c99 -81 198 -111 346 -105 122 5 188 27
                        267 86 111 85 165 193 172 348 5 115 -9 181 -60 277 l-31 57 50 98 c196 375
                        232 802 104 1202 l-27 85 37 91 c51 126 69 202 76 319 20 348 -165 662 -478
                        809 -41 20 -101 43 -134 52 -81 23 -319 28 -400 10z m345 -152 c297 -66 520
                        -356 520 -676 0 -48 -4 -88 -8 -88 -5 0 -36 36 -71 79 -213 271 -536 478 -873
                        560 -59 14 -108 30 -108 34 0 11 133 72 189 87 114 30 225 32 351 4z m-1601 6
                        c85 -11 211 -52 269 -87 l32 -20 -107 -28 c-192 -49 -389 -140 -546 -252 -99
                        -70 -285 -253 -353 -346 l-49 -69 -7 54 c-25 186 70 431 222 572 119 110 238
                        159 445 185 6 0 48 -4 94 -9z m936 -275 c192 -34 417 -130 588 -252 104 -74
                        256 -226 330 -330 121 -170 207 -370 249 -577 29 -143 28 -371 -1 -517 -115
                        -575 -521 -1003 -1086 -1146 -102 -26 -124 -28 -315 -28 -160 0 -223 4 -289
                        18 -299 65 -538 193 -746 402 -300 299 -441 682 -413 1115 36 553 388 1028
                        920 1239 92 36 259 78 363 90 102 12 285 6 400 -14z m-1384 -2587 c82 -80 192
                        -163 272 -204 26 -13 47 -28 47 -33 0 -22 -96 -46 -185 -46 -78 0 -97 4 -140
                        27 -131 69 -189 211 -146 361 l14 48 30 -38 c17 -21 65 -73 108 -115z m2421
                        32 c1 -153 -89 -267 -242 -306 -55 -14 -75 -15 -128 -5 -63 12 -112 29 -112
                        40 1 3 36 27 80 54 109 65 216 153 308 253 77 83 77 83 85 56 5 -15 9 -56 9
                        -92z"/>
                        <path d="M1546 2544 c-14 -14 -16 -71 -16 -484 0 -413 2 -470 16 -484 21 -21
                        77 -20 96 2 23 25 278 587 278 611 0 46 -63 76 -109 52 -9 -5 -46 -74 -81
                        -153 l-65 -143 -5 298 c-4 250 -7 299 -20 307 -23 15 -77 12 -94 -6z"/>
                        </g>
                    </svg>
                </Link>


                <Link to='./timer'>
                    {/* <div className="header_item">
                        <img src={require('../../img/timer.png')}></img>
                        <div className="header_item_underline">Timer</div>
                    </div> */}
                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="61pt" height="61pt" viewBox="0 0 106.000000 122.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,122.000000) scale(0.100000,-0.100000)">
                        <path d="M440 1185 c0 -28 4 -35 20 -35 17 0 20 -7 20 -43 l0 -42 -62 -12
                        c-97 -19 -183 -67 -264 -147 -114 -114 -160 -238 -151 -401 5 -103 31 -185 81
                        -260 103 -155 258 -238 441 -239 150 0 261 43 368 144 137 128 195 323 152
                        508 -46 196 -213 359 -405 394 l-60 12 0 43 c0 36 3 43 20 43 16 0 20 7 20 35
                        l0 35 -90 0 -90 0 0 -35z m285 -235 c122 -58 216 -173 251 -305 69 -256 -114
                        -526 -386 -568 -169 -26 -369 71 -457 221 -111 189 -73 431 90 578 100 89 173
                        115 322 111 102 -3 115 -5 180 -37z"/>
                        <path d="M354 457 c-182 -107 -194 -115 -194 -132 0 -30 44 -13 194 74 l153
                        88 43 -99 c45 -102 61 -125 80 -113 16 10 8 36 -49 159 -37 78 -55 106 -68
                        105 -10 0 -81 -37 -159 -82z"/>
                        </g>
                    </svg>
                </Link>

                <Link to='./sec'>
                    {/* <div className="header_item">
                        <img src={require('../../img/secondomer.png')}></img>
                        <div className="header_item_underline">Seconds</div>
                    </div> */}

                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="61pt" height="61pt" viewBox="0 0 106.000000 131.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                        Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)">
                        <path d="M465 1296 c-76 -33 -111 -125 -80 -204 10 -24 16 -44 14 -46 -2 -1
                        -26 -11 -54 -21 -27 -10 -67 -29 -87 -42 -45 -28 -50 -28 -65 -4 -10 15 -9 22
                        2 31 19 16 19 20 -5 49 l-20 23 -75 -56 -75 -57 17 -24 c19 -26 38 -32 49 -14
                        4 7 15 1 29 -17 l23 -29 -25 -29 c-63 -75 -112 -220 -113 -332 0 -28 9 -86 20
                        -128 84 -331 443 -491 758 -338 34 16 85 55 127 97 108 107 155 219 155 370 0
                        151 -51 277 -156 381 -34 34 -88 74 -122 91 l-61 31 42 4 c30 3 49 0 66 -14
                        15 -11 41 -18 70 -18 64 0 101 36 101 99 0 23 -5 51 -10 62 -15 27 -68 52
                        -102 47 -21 -3 -32 0 -39 14 -22 41 -114 62 -160 37 -16 -8 -25 -7 -37 4 -52
                        46 -128 59 -187 33z m129 -82 c37 -37 35 -86 -3 -125 -54 -54 -135 -25 -148
                        53 -5 32 -1 41 25 68 40 40 88 41 126 4z m69 -244 c197 -61 329 -238 329 -441
                        0 -203 -125 -372 -323 -439 -53 -18 -81 -21 -160 -18 -87 3 -104 7 -172 41
                        -240 118 -331 383 -216 624 49 102 192 215 306 242 68 16 167 12 236 -9z"/>
                        <path d="M532 532 c-7 -5 -10 -15 -7 -23 8 -21 344 -212 362 -205 34 13 -1 43
                        -157 133 -189 109 -181 105 -198 95z"/>
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    )}
}


export default Header;