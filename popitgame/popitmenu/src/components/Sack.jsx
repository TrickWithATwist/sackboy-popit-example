import '../App.css';
import './Sack.css';
import image1 from './assets/Sackboy_Game_Model.png';
import sackidle from './assets/smileidle.png';
import sackhover from './assets/smilehover.png'
import cursor from './assets/cursor.gif'
import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Sack()
{
    const [open, setopen] = useState(false)

    //functions for themes
    const [current_theme, setcurrent_theme] = useState('default')

    const themes = {
        default: { background: 'black', tooltip: 'black' },
        coolisland: {background:'linear-gradient(0deg, rgba(185,234,107,1) 46%, rgba(99,178,220,1) 94%)', tooltip: '#63b2dc'},
        icecream: {background: 'linear-gradient(0deg, rgba(224,206,78,1) 46%, rgba(223,93,196,1) 94%)', tooltip: '#DF5DC4'},
        candyjar: {background: 'linear-gradient(0deg, rgba(246,19,73,1) 37%, rgba(91,25,57,1) 85%)', tooltip: '#5b1939'},
        forestsurprise: {background: 'linear-gradient(0deg, rgba(221,0,222,1) 9%, rgba(4,2,3,1) 90%)', tooltip:'black'},
        slicedbread: {background:'linear-gradient(0deg, rgba(248,230,231,1) 32%, rgba(201,212,139,1) 77%)', tooltip:'#c9d48b'}
    }

    const handleThemeChange = (themeName) => {
        setcurrent_theme(themeName);
        setopen(false);
    };

    useEffect(() => {
        const theme = themes[current_theme];
        document.documentElement.style.setProperty('--background-color', theme.background);
        document.documentElement.style.setProperty('--tooltip-bg', theme.tooltip);
        document.documentElement.style.setProperty('--tooltip-color', theme.background);
    }, [current_theme]);





    return(
        <div className='flexbox'>
            <div className='layer1'>
                <div type='button' id='costumebtn' className='sack1' onClick={() => setopen(true)}>
                    <span className='tooltip'>Costume</span>
                </div>
            </div>
            <div className='layer2'>
                <div className='cursor'>
                    <span className='tooltip'>Popit Cursor</span>
                </div>
                <div className='stickers'>
                    <span className='tooltip'>Stickers & Decorations</span>
                </div>
            </div>
            <div className='layer3'>
                <div className='text'>
                    <span className='tooltip'>Text Chat</span>
                </div>
                <div className='retry'>
                    <span className='tooltip'>Retry</span>
                </div>
            </div>

            <Modal open={open} onClose={() => setopen(false)}>
                <div className='modalflexbox'>
                    <div className='modallayer1'>
                        <div className='spacer1'>
                            <spacer ></spacer>
                        </div>
                        <div className={`coolisland ${current_theme === 'coolIsland' ? 'theme-option-selected' : ''}`} onClick={() => handleThemeChange('coolIsland')}>
                            <span className='tooltip'>Cool Island</span>
                        </div>
                        <div className={`icecream ${current_theme === 'iceCream' ? 'theme-option-selected' : ''}`} onClick={() => handleThemeChange('iceCream')}>
                            <span className='tooltip'>Ice Cream Sprinkles</span>
                        </div>
                    </div>
                    <div className='modallayer2'>
                        <div className={`candyjar ${current_theme === 'candyJar' ? 'theme-option-selected' : ''}`} onClick={() => handleThemeChange('candyJar')}>
                            <span className='tooltip'>Candy Jar</span>
                        </div>
                        <div className={`forestsurprise ${current_theme === 'forestSurprise' ? 'theme-option-selected' : ''}`} onClick={() => handleThemeChange('forestSurprise')}>
                            <span className='tooltip'>Forest Surprise</span>
                        </div>
                        <div className={`slicedbread ${current_theme === 'slicedBread' ? 'theme-option-selected' : ''}`} onClick={() => handleThemeChange('slicedBread')}>
                            <span className='tooltip'>Sliced Bread</span>
                        </div>
                    </div>
                    <h1>Player Color</h1>
                </div>
            </Modal>
        </div>

        
    )
}