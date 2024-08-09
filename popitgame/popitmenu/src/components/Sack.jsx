import '../App.css';
import './Sack.css';
import image1 from './assets/Sackboy_Game_Model.png';
import sackidle from './assets/smileidle.png';
import sackhover from './assets/smilehover.png'
import cursor from './assets/cursor.gif'


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("costumbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




export default function Sack()
{
    return(
        <div className='flexbox'>
            <div className='layer1'>
                <div type='button' id='costumebtn' className='sack1'>
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

            {/*Adding Modal for the Costume/Background color section*/}
            <div>
                <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

                </div>
            </div>
        </div>
    )
}