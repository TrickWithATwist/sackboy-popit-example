import '../App.css';
import './Sack.css';
import image1 from './assets/Sackboy_Game_Model.png';

export default function Sack()
{
    return(
        <div className='flexbox'>
            <img classname='sack1'src={image1} alt="" />
            <img classname='sack2'src={image1} alt="" />
            <img classname='sack3'src={image1} alt="" />
            <img classname='sack4'src={image1} alt="" />
        </div>
    )
}