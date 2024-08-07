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
            <div className='sack1'></div>
            <div className='cursor'></div>
            <img classname='sack3'src={image1} alt="" />
            <img classname='sack4'src={image1} alt="" />
        </div>
    )
}