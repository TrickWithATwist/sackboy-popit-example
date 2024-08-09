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
                <div type='button' className='sack1'>
                    <span className='tooltip'>Costume</span>
                </div>

                {/*Adding Modal for the Costume/Background color section*/}
                <div>

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
        </div>
    )
}