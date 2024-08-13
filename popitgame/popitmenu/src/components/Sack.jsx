import '../App.css';
import './Sack.css';
import image1 from './assets/Sackboy_Game_Model.png';
import sackidle from './assets/smileidle.png';
import sackhover from './assets/smilehover.png'
import cursor from './assets/cursor.gif'
import Modal from './Modal';
import { useState } from 'react';

export default function Sack()
{
    const [open, setopen] = useState(false)
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
                        <div className='coolisland'>
                            <span className='tooltip'>Cool Island</span>
                        </div>
                        <div className='icecream'>
                            <span className='tooltip'>Ice Cream Sprinkles</span>
                        </div>
                    </div>
                    <div className='modallayer2'>
                        <div className='candyjar'>
                            <span className='tooltip'>Candy Jar</span>
                        </div>
                        <div className='forestsurprise'>
                            <span className='tooltip'>Forest Surprise</span>
                        </div>
                        <div className='slicedbread'>
                            <span className='tooltip'>Sliced Bread</span>
                        </div>
                    </div>
                    <h1>Player Color</h1>
                </div>
            </Modal>
        </div>

        
    )
}