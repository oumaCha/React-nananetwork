import './rightbar.css'
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return(
    <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src='/assets/birthday.jpg' alt=''/>
          <span  className='birthdayTxt'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className='rightbarAd' src='/assets/social-media.png' alt='' />
         <h4 className='rightbarTitle'>Online</h4>
         <ul className="rightbarFriendList">
          
          {Users.map(u=> (
            <Online key={u.id} user={u}/>
          ))}

         </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return ( 
      <>
      <h4 className='rightbarTitle'> User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Tokyo</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Haoi</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'> User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarfollowing">
          <img  className="rightbarFollowingImg" src='/assets/1.jpg' alt='' />
          <span className="rightbarFollowingName">Corter</span>

        </div>


        <div className="rightbarfollowing">
          <img  className="rightbarFollowingImg" src='/assets/1.jpg' alt='' />
          <span className="rightbarFollowingName">Corter</span>

        </div>

        <div className="rightbarfollowing">
          <img  className="rightbarFollowingImg" src='/assets/2.jpg' alt='' />
          <span className="rightbarFollowingName">Corter</span>

        </div>

        <div className="rightbarfollowing">
          <img  className="rightbarFollowingImg" src='/assets/3.jpg' alt='' />
          <span className="rightbarFollowingName">Corter</span>

        </div>

        <div className="rightbarfollowing">
          <img  className="rightbarFollowingImg" src='/assets/4.jpg' alt='' />
          <span className="rightbarFollowingName">Corter</span>

        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">

        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
