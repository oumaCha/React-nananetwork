import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MoodIcon from '@mui/icons-material/Mood';

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">

        <div className="shareTop">
         <img className="shareProfileImage" src='/assets/profilpic/image1.jpg' alt='' /> 
            <input placeholder='Share with me your status' className='shareInput'/>
        </div>

        <hr className='shareHr'/>

        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className='shareIcon'/>
                <span className='shareOptionTxt'>Photo / Video </span>
                </div>

                <div className="shareOption">
                    <BookmarksIcon  htmlColor="blue" className='shareIcon'/>
                <span className='shareOptionTxt'>Tag</span>
                </div>

                <div className="shareOption">
                    <LocationSearchingIcon htmlColor="green" className='shareIcon'/>
                <span className='shareOptionTxt'>Location</span>
                </div>


                <div className="shareOption">
                    <MoodIcon htmlColor="brown" className='shareIcon'/>
                <span className='shareOptionTxt'>Feelings</span>
                </div>
            </div>

            <button className='shareButton'>send</button>
        </div>


      </div>
    </div>
  );
}
