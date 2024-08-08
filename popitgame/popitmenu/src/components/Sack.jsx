import '../App.css';
import './Sack.css';
import image1 from './assets/Sackboy_Game_Model.png';
import sackidle from './assets/smileidle.png';
import sackhover from './assets/smilehover.png'
import cursor from './assets/cursor.gif'

export default function Sack()
{
    return(
        <div className='flexbox'>
            <div className='layer1'>
                <div className='sack1'>
                    <span className='tooltip'>Costume</span>
                </div>
            </div>
            <div className='layer2'>
                <div className='cursor'>
                    <span className='tooltip'>Popit Cursor</span>
                </div>
                <div className='stickers'></div>
            </div>
            <div className='layer3'>
                <div className='text'></div>
                <div className='retry'></div>
            </div>
        </div>
    )
}